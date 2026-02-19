import {Component, OnInit, OnDestroy, inject, ChangeDetectorRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PanierService, Panier } from '../../../services/panier.service';
import { NotificationService } from '../../../services/notification.service';
import { AuthService } from '../../../services/auth.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-mes-commandes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mes-commandes.component.html',
  styleUrls: ['./mes-commandes.component.scss']
})
export class MesCommandesComponent implements OnInit, OnDestroy {
  commandes: Panier[] = [];
  loading = false;
  isAdminBoutique = false;
  private readonly destroy$ = new Subject<void>();

  public readonly panierService = this.panierServiceInstance;
  private readonly cdr = inject(ChangeDetectorRef);

  constructor(
    private readonly router: Router,
    private readonly panierServiceInstance: PanierService,
    private readonly notificationService: NotificationService,
    private readonly authService: AuthService
  ) {}

  ngOnInit(): void {
    this.isAdminBoutique = this.authService.currentUser?.role === 'admin_boutique';
    this.loadCommandes();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadCommandes(): void {
    this.loading = true;

    const source$ = this.isAdminBoutique
      ? this.panierService.getCommandesBoutique()
      : this.panierService.getHistoriqueCommandes();

    source$.pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        this.commandes = response.data || [];
        this.loading = false;
        Promise.resolve().then(() => {
          this.cdr.detectChanges();
        });

      },
      error: (error) => {
        console.error('Erreur chargement commandes:', error);
        this.notificationService.error('Erreur lors du chargement de vos commandes');
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  voirDetails(commande: Panier): void {
    this.router.navigate(['/commande', commande._id]);
  }

  telechargerFacture(commande: Panier): void {
    const doc = this.buildFacturePdf(commande);
    doc.save(`Facture-${commande.numeroCommande}.pdf`);

    this.notificationService.success('Facture téléchargée avec succès');
  }

  private buildFacturePdf(commande: Panier): jsPDF {
    const doc = new jsPDF();
    const produits = this.getCommandeProduits(commande);
    const adresse = commande.adresseLivraison;
    const adresseText = adresse?.nomEndroit
      ? adresse.nomEndroit
      : (adresse?.latitude != null && adresse?.longitude != null)
        ? `${adresse.latitude}, ${adresse.longitude}`
        : 'Non renseignee';
    const telephoneText = adresse?.telephone ? adresse.telephone : 'Non renseigne';
    const clientText = this.getClientText(commande);
    const fraisLivraison = this.getFraisLivraisonPdf(commande);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.text('Facture', 14, 18);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    const commandeDate = commande.createdAt
      ? new Date(commande.createdAt).toLocaleDateString('fr-FR')
      : 'N/A';
    doc.text(`Numero: ${commande.numeroCommande}`, 14, 26);
    doc.text(`Date: ${commandeDate}`, 14, 32);
    doc.text(`Client: ${clientText}`, 14, 38);

    const rows = produits.map((produit: any, index: number) => ([
      String(index + 1),
      produit.produit?.nom || 'Produit',
      String(produit.qtt),
      this.panierService.formatMontantPdf(produit.prixUnitaire),
      this.panierService.formatMontantPdf(produit.sousTotal)
    ]));

    autoTable(doc, {
      startY: 44,
      head: [['#', 'Produit', 'Qte', 'Prix', 'Sous-total']],
      body: rows,
      styles: { fontSize: 9 },
      headStyles: { fillColor: [47, 111, 237] }
    });

    const finalY = (doc as any).lastAutoTable?.finalY || 44;
    const summaryY = finalY + 8;
    doc.setFont('helvetica', 'bold');
    doc.text('Resume', 14, summaryY);
    doc.setFont('helvetica', 'normal');
    doc.text(`Sous-total: ${this.panierService.formatMontantPdf(this.getCommandeSousTotal(commande))}`, 14, summaryY + 6);
    doc.text(`Frais livraison: ${this.panierService.formatMontantPdf(fraisLivraison)}`, 14, summaryY + 12);
    doc.setFont('helvetica', 'bold');
    doc.text(`Total: ${this.panierService.formatMontantPdf(this.getCommandeTotal(commande))}`, 14, summaryY + 18);

    const paiementY = summaryY + 28;
    doc.setFont('helvetica', 'bold');
    doc.text('Paiement', 14, paiementY);
    doc.setFont('helvetica', 'normal');
    doc.text(`Methode: ${this.panierService.getMethodePaiementLibelle(commande.methodePaiement || 'carte')}`, 14, paiementY + 6);
    doc.text(`Date: ${commande.datePaiement ? new Date(commande.datePaiement).toLocaleDateString('fr-FR') : 'N/A'}`, 14, paiementY + 12);
    doc.text(`Montant: ${this.panierService.formatMontantPdf(this.getCommandeTotal(commande))}`, 14, paiementY + 18);

    const livraisonY = paiementY + 28;
    doc.setFont('helvetica', 'bold');
    doc.text('Livraison', 14, livraisonY);
    doc.setFont('helvetica', 'normal');
    doc.text(`Adresse: ${adresseText}`, 14, livraisonY + 6);
    doc.text(`Telephone: ${telephoneText}`, 14, livraisonY + 12);
    doc.text(`Date estimee: ${commande.dateLivraison ? new Date(commande.dateLivraison).toLocaleDateString('fr-FR') : 'N/A'}`, 14, livraisonY + 18);

    return doc;
  }

  getNumeroFacture(commande: Panier): string {
    return commande.numeroCommande ? `FAC-${commande.numeroCommande}` : 'N/A';
  }

  private getFraisLivraisonPdf(commande: Panier): number {
    if (this.isAdminBoutique) return 0;
    const rawFrais = Number(commande.fraisLivraison);
    if (Number.isFinite(rawFrais) && rawFrais >= 0) {
      return rawFrais;
    }
    const total = this.getCommandeTotal(commande);
    const sousTotal = this.getCommandeSousTotal(commande);
    const fallback = total - sousTotal;
    return Number.isFinite(fallback) && fallback > 0 ? fallback : 0;
  }

  private getClientText(commande: Panier): string {
    const userObject = commande.userId && typeof commande.userId === 'object' ? commande.userId : null;
    const nom = userObject?.nom || this.authService.currentUser?.nom;
    const email = userObject?.email || this.authService.currentUser?.email;

    if (nom && email) {
      return `${nom} (${email})`;
    }
    if (nom) {
      return nom;
    }
    if (email) {
      return email;
    }
    if (typeof commande.userId === 'string' && commande.userId) {
      return commande.userId;
    }
    return 'Client';
  }

  getCommandeProduits(commande: any): any[] {
    if (this.isAdminBoutique && Array.isArray(commande.produitsBoutique)) {
      return commande.produitsBoutique;
    }
    return commande.produitsachete || [];
  }

  getCommandeSousTotal(commande: any): number {
    if (this.isAdminBoutique && typeof commande.sousTotalBoutique === 'number') {
      return commande.sousTotalBoutique;
    }
    return commande.sousTotal || 0;
  }

  getCommandeTotal(commande: any): number {
    if (this.isAdminBoutique && typeof commande.totalBoutique === 'number') {
      return commande.totalBoutique;
    }
    return commande.total || 0;
  }

  formatPrice(price: number): string {
    return this.panierService.formatMontant(price);
  }

  getStatutClass(statut: string): string {
    switch (statut) {
      case 'confirmee':
        return 'status-confirmed';
      case 'preparation':
        return 'status-preparation';
      case 'expedie':
        return 'status-shipped';
      case 'livre':
        return 'status-delivered';
      case 'annule':
        return 'status-cancelled';
      default:
        return 'status-pending';
    }
  }

  getStatutIcon(statut: string): string {
    switch (statut) {
      case 'confirmee':
        return 'ti ti-check';
      case 'preparation':
        return 'ti ti-package';
      case 'expedie':
        return 'ti ti-truck-delivery';
      case 'livre':
        return 'ti ti-home-check';
      case 'annule':
        return 'ti ti-x';
      default:
        return 'ti ti-clock';
    }
  }

  goToProducts(): void {
    this.router.navigate(['/produits']);
  }

  refreshCommandes(): void {
    this.loadCommandes();
  }
}
