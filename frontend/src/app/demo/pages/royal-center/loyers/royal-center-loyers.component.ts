import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoyerService } from '../../../../services/loyer.services';
import { AdminCenterService, BoutiqueModel } from '../../../../services/admin-center.service';

@Component({
  selector: 'app-royal-center-loyers',
  standalone: true,
  imports: [CommonModule,
    FormsModule],
  templateUrl: './royal-center-loyers.component.html',
  styleUrls: ['./royal-center-loyers.component.scss']
})
export class RoyalCenterLoyersComponent implements OnInit {

  private cdr = inject(ChangeDetectorRef);

  loyers: any[] = [];

  loading = false;
  selectedPeriode = '';
  selectedBoutique = '';
   // creation
  selectedBoutiqueCreate = '';
  selectedPeriodeCreate = '';
  creating = false;
  boutiques: BoutiqueModel[] = []; // ✅ liste dropdown
  constructor(
    private loyerService: LoyerService,
    private adminCenterService: AdminCenterService
  ) {}

  ngOnInit(): void {
    this.loadBoutiques();
    this.loadLoyers();
  }

  // ===============================
  // LOAD
  // ===============================
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

      },

      error: (err) => {

        console.error("Erreur load boutiques", err);

      }

    });

  }
loadLoyers() {

    this.loading = true;

    const filters = {

      periode: this.selectedPeriode,
      boutiqueId: this.selectedBoutique

    };

    this.loyerService.getAll(filters).subscribe({

      next: (res: any) => {

        this.loyers = res.data.map((loyer: any) => ({

          ...loyer,

          boutiqueNom: loyer.boutiqueId?.nom || '—',

          lignes: loyer.paiements?.length || 0,

          totalPaye:
            loyer.paiements?.reduce(
              (sum: number, p: any) => sum + p.montant,
              0
            ) || 0,

          totalReste: loyer.reste || 0

        }));
        Promise.resolve().then(() => {
          this.cdr.detectChanges();
        });

        this.loading = false;

      }

    });

  }

  // ===============================
  // CREATE
  // ===============================

  openCreateModal() {
  // On affiche juste le formulaire dans le HTML
  this.creating = true;
}

createLoyer() {
  console.log('Boutique sélectionnée :', this.selectedBoutiqueCreate);
  console.log('Période sélectionnée :', this.selectedPeriodeCreate);

  if (!this.selectedBoutiqueCreate || !this.selectedPeriodeCreate) {
    alert("Choisir boutique et période");
    return;
  }

  this.loyerService.generate({
    boutiqueId: this.selectedBoutiqueCreate,
    periode: this.selectedPeriodeCreate
  }).subscribe({
    next: () => {
      alert("Loyer créé");
      this.selectedBoutiqueCreate = '';
      this.selectedPeriodeCreate = '';
      this.creating = false;
      this.loadLoyers();
    },
    error: (err) => {
      console.error('Erreur backend :', err);
      alert("Erreur lors de la création : " + err.error?.message);
    }
  });
}

  // ===============================
  // EDIT
  // ===============================

  openEditModal(loyer: any) {

    const reste = prompt(
      "Modifier reste",
      loyer.totalReste
    );

    if (reste == null) return;

    this.loyerService.update(loyer._id, {

      reste: Number(reste)

    }).subscribe({

      next: () => {

        alert("Modifié");

        this.loadLoyers();

      }

    });

  }

  // ===============================
  // DELETE
  // ===============================

  deleteLoyer(loyer: any) {

    if (!confirm("Supprimer ce loyer ?")) return;

    this.loyerService.delete(loyer._id)
      .subscribe({

        next: () => {

          alert("Supprimé");

          this.loadLoyers();

        }

      });

  }

  // ===============================
  // PAY
  // ===============================

  pay(loyer: any) {

    const montant = prompt("Montant :");

    if (!montant) return;

    this.loyerService.pay(loyer._id, {

      montant: Number(montant),

      modePaiement: "Cash"

    }).subscribe({

      next: () => {

        alert("Paiement effectué");

        this.loadLoyers();

      }

    });

  }

  // ===============================

  getBoutiqueName(loyer: any) {
    return loyer.boutiqueNom;
  }

  getTotalMontantPaye(loyer: any) {
    return loyer.totalPaye;
  }

  getTotalRestePaye(loyer: any) {
    return loyer.totalReste;
  }
  formatPeriode(periode: string): string {
    if (!periode) return '—';

    const [year, month] = periode.split('-');

    const months = [
      'Janvier',
      'Février',
      'Mars',
      'Avril',
      'Mai',
      'Juin',
      'Juillet',
      'Août',
      'Septembre',
      'Octobre',
      'Novembre',
      'Décembre'
    ];

    return `${months[Number(month) - 1]} ${year}`;

  }

}