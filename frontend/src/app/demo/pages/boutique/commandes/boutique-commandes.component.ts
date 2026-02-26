import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { BoutiqueCommandeService, BoutiqueCommande, PaginationResponse } from '../../../../services/boutique-commande.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-boutique-commandes',
  templateUrl: './boutique-commandes.component.html',
  styleUrls: ['./boutique-commandes.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class BoutiqueCommandesComponent implements OnInit {
  commandes: BoutiqueCommande[] = [];
  loading = false;
  error: string | null = null;
  pagination = {
    total: 0,
    page: 1,
    limit: 10,
    totalPages: 0
  };
  filters = {
    statut: '',
    dateDebut: '',
    dateFin: '',
    isPaye: undefined as boolean | undefined
  };

  constructor(
    private boutiqueCommandeService: BoutiqueCommandeService,
    private readonly router: Router,
    private readonly cdr: ChangeDetectorRef,
    private readonly notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.loadCommandes();
  }

  loadCommandes(): void {
    this.loading = true;
    this.error = null;

    const params = {
      page: this.pagination.page,
      limit: this.pagination.limit,
      ...Object.fromEntries(Object.entries(this.filters).filter(([_, v]) => v !== '' && v !== undefined))
    };

    this.boutiqueCommandeService.getMyBoutiqueCommandes(params).subscribe({
      next: (response: PaginationResponse<BoutiqueCommande>) => {
        if (response.success) {
          this.commandes = response.data;
          this.pagination = response.pagination;
          this.loading = false;
          this.cdr.detectChanges();
        } else {
          this.error = response.message;
          this.notificationService.error('Erreur', 'Erreur lors du chargement de la boutique');
          this.loading = false;
          this.cdr.detectChanges();
        }
      },
      error: () => {
        this.error = 'Erreur lors du chargement des commandes';
        this.notificationService.error('Erreur', 'Erreur lors du chargement des commandes');
        this.cdr.detectChanges();
      },
      complete: () => {
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  onPageChange(page: number): void {
    this.pagination.page = page;
    this.loadCommandes();
  }

  onFilter(): void {
    this.pagination.page = 1;
    this.loadCommandes();
  }

  goToStats(): void {
    this.router.navigate(['/default']);
  }

  getCommandeDetails(id: string): void {
    if (!id) {
      this.notificationService.warning('Commande introuvable');
      return;
    }

    this.router.navigate(['/commande', id], {
      queryParams: { scope: 'boutique' }
    });
  }

  getStatusColor(statut: string): string {
    const colors: { [key: string]: string } = {
      en_attente: 'warning',
      confirmee: 'info',
      preparation: 'primary',
      expedie: 'secondary',
      livre: 'success',
      annule: 'danger'
    };
    return colors[statut] || 'secondary';
  }

  getStatusLabel(statut: string): string {
    const labels: { [key: string]: string } = {
      en_attente: 'En attente',
      confirmee: 'Confirmee',
      preparation: 'En preparation',
      expedie: 'Expediee',
      livre: 'Livree',
      annule: 'Annulee'
    };
    return labels[statut] || statut;
  }

  getPagesArray(): number[] {
    return Array.from({ length: this.pagination.totalPages }, (_, i) => i + 1);
  }

  getCommandeProduits(commande: BoutiqueCommande): any[] {
    if (Array.isArray(commande.produitsBoutique) && commande.produitsBoutique.length > 0) {
      return commande.produitsBoutique;
    }
    return commande.produitsachete || [];
  }

  getNumeroFacture(commande: BoutiqueCommande): string {
    if (commande.facture?.numeroFacture) {
      return commande.facture.numeroFacture;
    }
    return commande.numeroCommande ? `FAC-${commande.numeroCommande}` : 'N/A';
  }

  getFactureSousTotal(commande: BoutiqueCommande): number {
    return Number(commande.facture?.sousTotalCommande ?? commande.sousTotal ?? 0);
  }

  getFactureFraisLivraison(commande: BoutiqueCommande): number {
    return Number(commande.facture?.fraisLivraisonCommande ?? commande.fraisLivraison ?? 0);
  }

  getFactureTotal(commande: BoutiqueCommande): number {
    return Number(commande.facture?.totalCommande ?? commande.total ?? 0);
  }

  getTotalBoutique(commande: BoutiqueCommande): number {
    return Number(commande.totalBoutique ?? commande.facture?.totalBoutique ?? 0);
  }

  getPartCentre(commande: BoutiqueCommande): number {
    return Number(commande.partCentre ?? commande.facture?.partCentre ?? 0);
  }

  getNetBoutique(commande: BoutiqueCommande): number {
    const net = Number(commande.totalBoutiqueNet ?? commande.facture?.totalBoutiqueNet);
    if (Number.isFinite(net)) {
      return net;
    }
    return this.getTotalBoutique(commande) - this.getPartCentre(commande);
  }
}
