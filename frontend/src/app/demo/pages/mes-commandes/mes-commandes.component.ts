import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PanierService, Panier } from '../../../services/panier.service';
import { NotificationService } from '../../../services/notification.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

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
  private readonly destroy$ = new Subject<void>();

  // Rendre le service accessible pour le template
  public readonly panierService = this.panierServiceInstance;

  constructor(
    private readonly router: Router,
    private readonly panierServiceInstance: PanierService,
    private readonly notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.loadCommandes();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadCommandes(): void {
    this.loading = true;
    
    this.panierService.getHistoriqueCommandes().pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        this.commandes = response.data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Erreur chargement commandes:', error);
        this.notificationService.error('Erreur lors du chargement de vos commandes');
        this.loading = false;
      }
    });
  }

  voirDetails(commande: Panier): void {
    // Naviguer vers une page de détails de commande
    this.router.navigate(['/commande', commande._id]);
  }

  telechargerFacture(commande: Panier): void {
    // Générer et télécharger une facture pour cette commande
    const factureContent = this.generateFactureContent(commande);
    
    const blob = new Blob([factureContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Facture-${commande.numeroCommande}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    this.notificationService.success('Facture téléchargée avec succès');
  }

  private generateFactureContent(commande: Panier): string {
    let content = `FACTURE - COMMANDE ${commande.numeroCommande}\n`;
    content += `Date: ${new Date(commande.createdAt || '').toLocaleDateString('fr-FR')}\n`;
    content += `Statut: ${this.panierService.getStatutLibelle(commande.statut)}\n\n`;
    
    content += `PRODUITS:\n`;
    commande.produitsachete.forEach((produit, index) => {
      content += `${index + 1}. ${produit.produit?.nom || 'Produit'}\n`;
      content += `   Quantité: ${produit.qtt}\n`;
      content += `   Prix unitaire: ${this.panierService.formatMontant(produit.prixUnitaire)}\n`;
      content += `   Sous-total: ${this.panierService.formatMontant(produit.sousTotal)}\n\n`;
    });
    
    content += `RÉCAPITULATIF:\n`;
    content += `Sous-total: ${this.panierService.formatMontant(commande.sousTotal)}\n`;
    content += `Frais de livraison: ${this.panierService.formatMontant(commande.fraisLivraison)}\n`;
    content += `Total: ${this.panierService.formatMontant(commande.total)}\n\n`;
    
    if (commande.isPaye && commande.datePaiement) {
      content += `PAIEMENT:\n`;
      content += `Méthode: ${this.panierService.getMethodePaiementLibelle(commande.methodePaiement || 'carte')}\n`;
      content += `Date: ${new Date(commande.datePaiement).toLocaleDateString('fr-FR')}\n`;
      content += `Montant: ${this.panierService.formatMontant(commande.total)}\n\n`;
    }
    
    if (commande.adresseLivraison) {
      content += `LIVRAISON:\n`;
      content += `${commande.adresseLivraison.rue}\n`;
      content += `${commande.adresseLivraison.codePostal} ${commande.adresseLivraison.ville}\n`;
      content += `${commande.adresseLivraison.pays}\n`;
      if (commande.dateLivraison) {
        content += `Date de livraison: ${new Date(commande.dateLivraison).toLocaleDateString('fr-FR')}\n`;
      }
    }
    
    return content;
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
