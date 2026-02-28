import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoyerService } from '../../../../services/loyer.services';

@Component({
  selector: 'app-royal-center-loyers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './royal-center-loyers.component.html',
  styleUrls: ['./royal-center-loyers.component.scss']
})
export class RoyalCenterLoyersComponent implements OnInit {
  private readonly cdr = inject(ChangeDetectorRef);
  loyers: any[] = [];
  loading = false;

  constructor(private loyerService: LoyerService) {}

  ngOnInit(): void {
    this.loadLoyers();
  }

  loadLoyers(): void {
    this.loading = true;

    this.loyerService.getAll().subscribe({
      next: (res: any) => {
        if (res.success && res.data) {
          // On garde toutes les infos nécessaires pour le HTML
          this.loyers = res.data.map(loyer => ({
            ...loyer,
            boutiqueNom: loyer.boutiqueId?.nom || '—',
            totalPaye: loyer.paiements?.reduce((sum: number, p: any) => sum + (p.montant || 0), 0) || 0,
            totalReste: loyer.reste || 0,
            lignes: loyer.paiements?.length || 0,
            details: loyer.details || []
          }));
          Promise.resolve().then(() => {
          this.cdr.detectChanges();
        });
        } else {
          this.loyers = [];
          this.cdr.detectChanges();
        }
        this.loading = false;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des loyers', err);
        this.loyers = [];
        this.loading = false;
        this.cdr.detectChanges(); 
      }
    });
  }

  // Fonctions pour le tableau
  getBoutiqueName(loyer: any) {
    return loyer.boutiqueNom;
  }

  getTotalMontantPaye(loyer: any) {
    return loyer.totalPaye;
  }

  getTotalRestePaye(loyer: any) {
    return loyer.totalReste;
  }

  // Placeholder pour modals/actions
  openCreateModal() { console.log('Créer un loyer'); }
  openEditModal(loyer: any) { console.log('Modifier loyer', loyer); }
  deleteLoyer(loyer: any) { console.log('Supprimer loyer', loyer); }

}