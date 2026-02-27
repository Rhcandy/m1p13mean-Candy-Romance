import { Component, OnInit, inject ,ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HistoPrixService, Prix } from '../../../../services/histo-prix.service';
import { BoutiqueModel, AdminCenterService } from '../../../../services/admin-center.service';
import { TypeBoxService, TypeBoxModel } from '../../../../services/typebox.service';

@Component({
  selector: 'app-royal-center-prix',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './royal-center-prix.component.html',
  styleUrls: ['./royal-center-prix.component.scss']
})
export class RoyalCenterPrixComponent implements OnInit {

  private histoPrixService = inject(HistoPrixService);
  private boutiqueService = inject(AdminCenterService);
  private typeBoxService = inject(TypeBoxService);
  private cdr = inject(ChangeDetectorRef);
  boutiques: BoutiqueModel[] = [];
  typeBoxes: TypeBoxModel[] = [];
  prixList: Prix[] = [];

  selectedBoutique = '';
  selectedTypeBox = '';
  montant: number | null = null;
    constructor(
        private adminCenterService: AdminCenterService
      ) {}
    
  ngOnInit(): void {
    this.loadBoutiques();
    this.loadTypeBoxes();
  }

  loadBoutiques() {

    this.adminCenterService.getBoutiques({

      page: 1,
      limit: 200,
      status: 'active',
      nameSearch: ''

    }).subscribe({

      next: (res) => {

        this.boutiques = res.items;

        this.cdr.detectChanges();
        this.loadPrix();

      },

      error: (err) => {

        console.error("Erreur load boutiques", err);

      }

    });

  }

    loadTypeBoxes(): void {
        this.typeBoxService.getAll().subscribe({
            next: (res) => {
            // res est déjà un tableau, pas res.data
            this.typeBoxes = Array.isArray(res) ? res : [];
            this.cdr.detectChanges();
            
            },
            error: (err) => {
            console.error("Erreur load typeBoxes", err);
            }
        });
        }

    loadPrix(): void {
    this.histoPrixService.getAll().subscribe({
        next: (res) => {
        this.prixList = res; // maintenant c'est un tableau
        },
        error: (err) => console.error("Erreur load prix", err)
    });
    }


createPrix(): void {
  if (!this.selectedBoutique || !this.selectedTypeBox || this.montant == null) {
    alert('Veuillez remplir tous les champs');
    return;
  }

  const data = {
    boutiqueId: this.selectedBoutique,
    typeboxId: this.selectedTypeBox,  // correspond au backend
    prixParM2: this.montant           // correspond au backend
  };

  this.histoPrixService.create(data).subscribe({
    next: () => {
      alert('Prix ajouté !');
      this.montant = null;
      this.selectedBoutique = '';
      this.selectedTypeBox = '';
      this.loadPrix();
    },
    error: err => alert('Erreur lors de la création : ' + err.message)
  });
}

  deletePrix(prix: Prix): void {
    if (!confirm('Supprimer ce prix ?')) return;

    this.histoPrixService.delete(prix._id!).subscribe(() => {
      alert('Prix supprimé');
      this.loadPrix();
    });
  }

getBoutiqueName(boutiqueId: string): string {
    return this.boutiques.find(b => b._id === boutiqueId)?.nom || '—';
}
  getTypeBoxName(typeBoxId: string): string {
    return this.typeBoxes.find(t => t._id === typeBoxId)?.nom || '—';
  }
}