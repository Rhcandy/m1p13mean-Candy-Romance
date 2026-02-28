import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../../../../services/auth.service';
import { Panier, PanierService } from '../../../../services/panier.service';

interface UserDashboardStats {
  commandesTotal: number;
  commandesPayees: number;
  commandesLivrees: number;
  commandesAnnulees: number;
  depenseTotale: number;
  panierMoyen: number;
}

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
  loading = false;
  error: string | null = null;

  currentPanier: Panier | null = null;
  historique: Panier[] = [];
  commandesRecentes: Panier[] = [];

  stats: UserDashboardStats = {
    commandesTotal: 0,
    commandesPayees: 0,
    commandesLivrees: 0,
    commandesAnnulees: 0,
    depenseTotale: 0,
    panierMoyen: 0
  };

  constructor(
    private readonly panierService: PanierService,
    private readonly authService: AuthService,
    private readonly cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadDashboard();
  }

  get userName(): string {
    return this.authService.currentUser?.nom || 'Utilisateur';
  }

  get userEmail(): string {
    return this.authService.currentUser?.email || '';
  }

  get panierItems(): number {
    return this.currentPanier ? this.panierService.getNombreArticles(this.currentPanier) : 0;
  }

  get panierTotal(): number {
    return this.currentPanier ? this.panierService.getTotal(this.currentPanier) : 0;
  }

  loadDashboard(): void {
    this.loading = true;
    this.error = null;

    forkJoin({
      panier: this.panierService.getPanier().pipe(
        catchError(() => of({ success: false, message: 'Erreur panier', data: null as any }))
      ),
      historique: this.panierService.getHistoriqueCommandes().pipe(
        catchError(() => of({ success: false, message: 'Erreur historique', data: [] as Panier[] }))
      )
    }).subscribe({
      next: ({ panier, historique }) => {
        this.currentPanier = panier?.success ? panier.data : null;
        this.historique = Array.isArray(historique?.data) ? historique.data : [];
        this.computeStats();
        Promise.resolve().then(() => {
          this.cdr.detectChanges();
        });
      },
      error: () => {
        this.error = 'Impossible de charger le dashboard utilisateur';
        this.cdr.detectChanges();
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  formatPrice(value: number): string {
    return this.panierService.formatMontant(value || 0);
  }

  getStatutLabel(statut: string): string {
    return this.panierService.getStatutLibelle(statut);
  }

  private computeStats(): void {
    const commandes = this.historique.filter((commande) => commande.statut !== 'panier');
    const commandesPayees = commandes.filter((commande) => !!commande.isPaye);
    const commandesLivrees = commandes.filter((commande) => commande.statut === 'livre');
    const commandesAnnulees = commandes.filter((commande) => commande.statut === 'annule');
    const commandesMonetisees = commandes.filter((commande) => commande.statut !== 'annule');
    const depenseTotale = commandesMonetisees.reduce((sum, commande) => sum + (Number(commande.total) || 0), 0);

    this.stats = {
      commandesTotal: commandes.length,
      commandesPayees: commandesPayees.length,
      commandesLivrees: commandesLivrees.length,
      commandesAnnulees: commandesAnnulees.length,
      depenseTotale,
      panierMoyen: commandesMonetisees.length > 0 ? depenseTotale / commandesMonetisees.length : 0
    };

    this.commandesRecentes = [...commandes]
      .sort((a, b) => {
        const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
        const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
        return dateB - dateA;
      })
      .slice(0, 5);
  }
}
