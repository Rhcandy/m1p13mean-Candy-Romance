import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { forkJoin } from 'rxjs';
import { BoutiqueService, Boutique } from '../../../../services/boutique.service';
import { BoutiqueCommandeService, BoutiqueStats } from '../../../../services/boutique-commande.service';
import { NotificationService } from '../../../../services/notification.service';

type StatsPeriode = 'jour' | 'semaine' | 'mois' | 'annee';

@Component({
  selector: 'app-boutique-dashboard',
  templateUrl: './boutique-dashboard.component.html',
  styleUrls: ['./boutique-dashboard.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class BoutiqueDashboardComponent implements OnInit {
  boutique: Boutique | null = null;
  stats: BoutiqueStats | null = null;

  loading = false;
  loadingStats = false;
  selectedPeriode: StatsPeriode = 'mois';

  readonly periodeOptions: Array<{ key: StatsPeriode; label: string }> = [
    { key: 'jour', label: 'Jour' },
    { key: 'semaine', label: '7 jours' },
    { key: 'mois', label: 'Mois' },
    { key: 'annee', label: 'Annee' }
  ];

  constructor(
    private readonly boutiqueService: BoutiqueService,
    private readonly commandeService: BoutiqueCommandeService,
    private readonly notificationService: NotificationService,
    private readonly cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadDashboard();
  }

  get isActive(): boolean {
    return !!this.boutique?.isActive;
  }

  get grossRevenue(): number {
    return Number(this.stats?.generales?.chiffreAffaires || 0);
  }

  get paidRevenue(): number {
    return Number(this.stats?.generales?.chiffreAffairesPaye || 0);
  }

  get pendingRevenue(): number {
    return Math.max(0, this.grossRevenue - this.paidRevenue);
  }

  get paidRate(): number {
    if (this.grossRevenue <= 0) return 0;
    return Number(((this.paidRevenue / this.grossRevenue) * 100).toFixed(2));
  }

  get periodText(): string {
    if (!this.stats?.periode?.debut || !this.stats?.periode?.fin) return '-';
    const start = new Date(this.stats.periode.debut);
    const end = new Date(this.stats.periode.fin);
    return `${this.formatDate(start)} au ${this.formatDate(end)}`;
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
      preparation: 'Preparation',
      expedie: 'Expediee',
      livre: 'Livree',
      annule: 'Annulee'
    };
    return labels[statut] || statut;
  }

  trackByName(index: number, item: { nom: string }): string {
    return item.nom || String(index);
  }

  trackByStatus(index: number, item: { statut: string }): string {
    return item.statut || String(index);
  }

  changePeriode(periode: StatsPeriode): void {
    if (this.selectedPeriode === periode || this.loadingStats) return;
    this.selectedPeriode = periode;
    this.loadStatsOnly();
  }

  private loadDashboard(): void {
    this.loading = true;

    forkJoin({
      boutique: this.boutiqueService.getMyBoutique(),
      stats: this.commandeService.getMyBoutiqueStatistiques({ periode: this.selectedPeriode })
    }).subscribe({
      next: (response) => {
        if (response?.boutique?.success) {
          this.boutique = response.boutique.data;
        } else {
          this.notificationService.warning(
            'Boutique',
            response?.boutique?.message || 'Impossible de charger les informations boutique.'
          );
        }

        if (response?.stats?.success) {
          this.stats = response.stats.data;
        } else {
          this.notificationService.warning(
            'Statistiques',
            response?.stats?.message || 'Impossible de charger les statistiques.'
          );
        }
        Promise.resolve().then(() => {
          this.cdr.detectChanges();
        });
        this.loading = false;
      },
      error: (error) => {
        this.cdr.detectChanges();
        this.loading = false;
        this.notificationService.error(
          'Erreur dashboard',
          error?.error?.message || 'Erreur lors du chargement du dashboard boutique.'
        );
      }
    });
  }

  private loadStatsOnly(): void {
    this.loadingStats = true;

    this.commandeService.getMyBoutiqueStatistiques({ periode: this.selectedPeriode }).subscribe({
      next: (response) => {
        this.loadingStats = false;
        if (response?.success) {
          this.cdr.detectChanges();
          this.stats = response.data;
        } else {
          this.cdr.detectChanges();
          this.notificationService.warning(
            'Statistiques',
            response?.message || 'Impossible de charger les statistiques.'
          );
        }
      },
      error: (error) => {
        this.cdr.detectChanges();
        this.loadingStats = false;
        this.notificationService.error(
          'Erreur statistiques',
          error?.error?.message || 'Erreur lors du chargement des statistiques boutique.'
        );
      }
    });
  }

  private formatDate(date: Date): string {
    if (Number.isNaN(date.getTime())) return '-';
    return date.toLocaleDateString('fr-FR');
  }
}
