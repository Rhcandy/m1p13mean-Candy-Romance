import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';       // <--- important
import { LoyerService } from '../../services/loyer.services';

@Component({
  selector: 'app-loyer-list',
  templateUrl: './loyer-list.component.html',
  styleUrls: ['./loyer-list.component.scss'],
  standalone: true,                                 // ton composant est standalone
  imports: [CommonModule]                           // <--- obligatoire pour *ngFor, *ngIf
})
export class LoyerListComponent implements OnInit {

  loyers: any[] = [];
  loading = false;

  constructor(private loyerService: LoyerService) {}

  ngOnInit(): void {
    this.loadLoyers();
  }

  loadLoyers() {
  this.loading = true;
  this.loyerService.getAll().subscribe({
    next: (res: any) => {
      console.log('loyers backend:', res.data); // debug
      if (res.success && res.data) {
        this.loyers = res.data.map(loyer => ({
          ...loyer,
          boutiqueNom: loyer.boutiqueId?.nom || '—',
          totalPaye: loyer.paiements?.reduce((sum:any, p:any) => sum + (p.montant || 0), 0),
          totalReste: loyer.reste || 0,
          lignes: loyer.paiements?.length || 0
        }));
      } else {
        this.loyers = [];
      }
      setTimeout(() => { this.loading = false; }); // évite ExpressionChangedAfterItHasBeenCheckedError
    },
    error: (err) => {
      console.error('Erreur lors du chargement des loyers', err);
      setTimeout(() => { this.loading = false; });
    }
  });
}
  // Fonctions pour le tableau
  getBoutiqueNameFromLoyer(loyer: any) {
    return loyer.boutiqueNom;
  }

  getTotalMontantPaye(loyer: any) {
    return loyer.totalPaye;
  }

  getTotalRestePaye(loyer: any) {
    return loyer.totalReste;
  }

  // Placeholder pour modals/actions
  openCreateModal() { /* ouvrir modal */ }
  openEditModal(loyer:any) { /* ouvrir modal */ }
  deleteLoyer(loyer:any) { /* supprimer */ }

}