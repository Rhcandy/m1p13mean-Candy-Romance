import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoutiqueService, Boutique } from '../../../../services/boutique.service';
import { BoutiqueCommandeService, BoutiqueStats as CommandeStats } from '../../../../services/boutique-commande.service';

@Component({
  selector: 'app-boutique-dashboard',
  templateUrl: './boutique-dashboard.component.html',
  styleUrls: ['./boutique-dashboard.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class BoutiqueDashboardComponent implements OnInit {
  boutique: any;
  stats: CommandeStats | null = null;
  loading = false;
  error: string | null = null;

  constructor(
    private boutiqueService: BoutiqueService,
    private commandeService: BoutiqueCommandeService,
    private readonly cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.loadBoutiqueData();
  }

  loadBoutiqueData(): void {
    this.loading = true;
    this.error = null;

    // Charger les informations de la boutique
    this.boutiqueService.getMyBoutique().subscribe({
      next: (response) => {
        if (response.success) {
          this.boutique = response.data;
          this.loadStats();
          Promise.resolve().then(() => {
            this.cdr.detectChanges();
          });
        } else {
          this.error = response.message;
          this.cdr.detectChanges();
        }
      },
      error: (err) => {
        this.error = 'Erreur lors du chargement de la boutique';
        this.cdr.detectChanges();
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  loadStats(): void {
    this.commandeService.getMyBoutiqueStatistiques({ periode: 'mois' }).subscribe({
      next: (response) => {
        if (response.success) {
          this.stats = response.data;
          this.cdr.detectChanges();
        } else {
          this.error = response.message;
          this.cdr.detectChanges();
        }
      },
      error: (err) => {
        this.error = 'Erreur lors du chargement des statistiques';
        this.cdr.detectChanges();
      }
    });
  }

  toggleBoutiqueStatus(): void {
    if (!this.boutique) return;

    const action = this.boutique.isActive ? 
      this.boutiqueService.deactivateMyBoutique() : 
      this.boutiqueService.activateMyBoutique();

    action.subscribe({
      next: (response) => {
        if (response.success) {
          this.boutique = response.data;
        } else {
          this.error = response.message;
        }
      },
      error: (err) => {
        this.error = 'Erreur lors du changement de statut';
        this.cdr.detectChanges();
      }
    });
  }

  onLogoUpload(event: any): void {
    const file = event.target.files[0];
    if (file && this.boutique?._id) {
      this.boutiqueService.uploadLogo(this.boutique._id, file).subscribe({
        next: (response) => {
          if (response.success) {
            this.boutique = response.data;
          } else {
            this.error = response.message;
          }
        },
        error: (err) => {
          this.error = 'Erreur lors du téléchargement du logo';
          console.error('Erreur logo:', err);
        }
      });
    }
  }

  getStatusColor(statut: string): string {
    const colors: { [key: string]: string } = {
      'en_attente': 'warning',
      'confirmee': 'info',
      'preparation': 'primary',
      'expedie': 'secondary',
      'livre': 'success',
      'annule': 'danger'
    };
    return colors[statut] || 'secondary';
  }

  getStatusLabel(statut: string): string {
    const labels: { [key: string]: string } = {
      'en_attente': 'En attente',
      'confirmee': 'Confirmée',
      'preparation': 'En préparation',
      'expedie': 'Expédiée',
      'livre': 'Livrée',
      'annule': 'Annulée'
    };
    return labels[statut] || statut;
  }
}
