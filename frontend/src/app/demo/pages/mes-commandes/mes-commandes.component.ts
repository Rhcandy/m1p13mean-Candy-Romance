import { Component, OnInit, OnDestroy, inject, ChangeDetectorRef } from '@angular/core';
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
  private logoDataUrlCache: string | null | undefined;
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

  async telechargerFacture(commande: Panier): Promise<void> {
    const doc = await this.buildFacturePdf(commande);
    doc.save(`Facture-${commande.numeroCommande}.pdf`);
    this.notificationService.success('Facture telechargee avec succes');
  }

  private async buildFacturePdf(commande: Panier): Promise<jsPDF> {
    const doc = new jsPDF();
    const produits = this.getCommandeProduits(commande);
    const adresse = commande.adresseLivraison;
    const adresseText = adresse?.nomEndroit || 'Non renseignee';
    const latitudeText = this.formatCoordonnee(adresse?.latitude);
    const longitudeText = this.formatCoordonnee(adresse?.longitude);
    const telephoneText = adresse?.telephone || 'Non renseigne';
    const clientText = this.getClientText(commande);
    const fraisLivraison = this.getFraisLivraisonPdf(commande);
    const commandeDate = commande.createdAt
      ? new Date(commande.createdAt).toLocaleDateString('fr-FR')
      : 'N/A';

    const boutiques = Array.from(new Set(
      produits
        .map((p: any) => this.getBoutiqueNom(p))
        .filter((nom: string) => !!nom && nom !== 'N/A')
    ));

    doc.setDrawColor(208, 213, 221);
    doc.roundedRect(8, 8, 194, 280, 2, 2, 'S');

    const logoDataUrl = await this.getLogoDataUrl();
    if (logoDataUrl) {
      doc.addImage(logoDataUrl, 'JPEG', 14, 13, 28, 20);
    }

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(24);
    doc.text('FACTURE', 196, 20, { align: 'right' });
    doc.setFontSize(12);
    doc.text(`#${commande.numeroCommande || 'N/A'}`, 196, 27, { align: 'right' });

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.text(`Client: ${clientText}`, 14, 42);
    doc.text(`Date facture: ${commandeDate}`, 14, 48);
    doc.text(`Boutique(s): ${boutiques.length ? boutiques.join(', ') : 'N/A'}`, 14, 54);
    doc.text(`Paiement: ${this.panierService.getMethodePaiementLibelle(commande.methodePaiement || 'carte')}`, 196, 48, { align: 'right' });
    doc.text(`Date paiement: ${commande.datePaiement ? new Date(commande.datePaiement).toLocaleDateString('fr-FR') : 'N/A'}`, 196, 54, { align: 'right' });

    doc.setDrawColor(223, 227, 233);
    doc.line(14, 59, 196, 59);

    const rows = produits.map((produit: any) => ([
      produit.produit?.nom || 'Produit',
      this.getBoutiqueNom(produit),
      String(produit.qtt),
      this.panierService.formatMontantPdf(produit.prixUnitaire),
      this.panierService.formatMontantPdf(produit.sousTotal)
    ]));

    autoTable(doc, {
      startY: 64,
      head: [['Description', 'Boutique', 'Qte', 'Prix', 'Montant']],
      body: rows,
      styles: { fontSize: 9, cellPadding: 2.4, textColor: [55, 65, 81] },
      headStyles: { fillColor: [243, 244, 246], textColor: [17, 24, 39], fontStyle: 'bold' },
      columnStyles: {
        0: { cellWidth: 62 },
        1: { cellWidth: 40 },
        2: { cellWidth: 16, halign: 'center' },
        3: { cellWidth: 28, halign: 'right' },
        4: { cellWidth: 32, halign: 'right' }
      }
    });

    const finalY = (doc as jsPDF & { lastAutoTable?: { finalY: number } }).lastAutoTable?.finalY || 64;
    const summaryY = finalY + 8;

    doc.setDrawColor(223, 227, 233);
    doc.roundedRect(122, summaryY - 3, 74, 28, 1.5, 1.5, 'S');

    doc.setFont('helvetica', 'bold');
    doc.text('Resume', 126, summaryY + 2);
    doc.setFont('helvetica', 'normal');
    doc.text('Sous-total:', 126, summaryY + 9);
    doc.text(this.panierService.formatMontantPdf(this.getCommandeSousTotal(commande)), 194, summaryY + 9, { align: 'right' });
    doc.text('Frais livraison:', 126, summaryY + 15);
    doc.text(this.panierService.formatMontantPdf(fraisLivraison), 194, summaryY + 15, { align: 'right' });
    doc.setFont('helvetica', 'bold');
    doc.text('TOTAL:', 126, summaryY + 22);
    doc.text(this.panierService.formatMontantPdf(this.getCommandeTotal(commande)), 194, summaryY + 22, { align: 'right' });

    const infoY = summaryY + 36;
    doc.setDrawColor(223, 227, 233);
    doc.roundedRect(14, infoY - 3, 88, 40, 1.5, 1.5, 'S');
    doc.roundedRect(108, infoY - 3, 88, 40, 1.5, 1.5, 'S');

    doc.setFont('helvetica', 'bold');
    doc.text('Livraison', 18, infoY + 2);
    doc.text('Paiement', 112, infoY + 2);

    doc.setFont('helvetica', 'normal');
    doc.text(`Adresse: ${adresseText}`, 18, infoY + 9);
    doc.text(`Latitude: ${latitudeText}`, 18, infoY + 15);
    doc.text(`Longitude: ${longitudeText}`, 18, infoY + 21);
    doc.text(`Telephone: ${telephoneText}`, 18, infoY + 27);
    doc.text(
      `Date estimee: ${commande.dateLivraison ? new Date(commande.dateLivraison).toLocaleDateString('fr-FR') : 'N/A'}`,
      18,
      infoY + 33
    );

    doc.text(`Methode: ${this.panierService.getMethodePaiementLibelle(commande.methodePaiement || 'carte')}`, 112, infoY + 9);
    doc.text(`Date: ${commande.datePaiement ? new Date(commande.datePaiement).toLocaleDateString('fr-FR') : 'N/A'}`, 112, infoY + 15);
    doc.text(`Montant: ${this.panierService.formatMontantPdf(this.getCommandeTotal(commande))}`, 112, infoY + 21);

    doc.setFont('helvetica', 'italic');
    doc.text('Merci pour votre confiance.', 112, infoY + 31);

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

  private getBoutiqueNom(produitLigne: any): string {
    const boutique = produitLigne?.produit?.boutiqueId;
    if (boutique && typeof boutique === 'object' && boutique.nom) {
      return boutique.nom;
    }
    return 'N/A';
  }

  private formatCoordonnee(value: unknown): string {
    const numeric = Number(value);
    return Number.isFinite(numeric) ? numeric.toFixed(6) : 'N/A';
  }

  private async getLogoDataUrl(): Promise<string | null> {
    if (this.logoDataUrlCache !== undefined) {
      return this.logoDataUrlCache;
    }

    try {
      const response = await fetch('assets/images/logo3.png');
      if (!response.ok) {
        this.logoDataUrlCache = null;
        return null;
      }
      const blob = await response.blob();
      this.logoDataUrlCache = await this.blobToDataUrl(blob);
      return this.logoDataUrlCache;
    } catch (error) {
      console.error('Erreur chargement logo facture:', error);
      this.logoDataUrlCache = null;
      return null;
    }
  }

  private blobToDataUrl(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result));
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(blob);
    });
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

  canPayerCommande(commande: Panier): boolean {
    return !this.isAdminBoutique && !!commande._id && commande.statut === 'en_attente' && !commande.isPaye;
  }

  payerCommande(commande: Panier): void {
    if (!this.canPayerCommande(commande) || !commande._id) {
      this.notificationService.warning('Cette commande ne peut pas etre payee');
      return;
    }

    this.router.navigate(['/checkout'], {
      queryParams: { commandeId: commande._id }
    });
  }

  goToProducts(): void {
    this.router.navigate(['/produits']);
  }

  refreshCommandes(): void {
    this.loadCommandes();
  }
}
