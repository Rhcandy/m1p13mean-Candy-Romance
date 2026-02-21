import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { BoutiqueService, Boutique } from '../../../../services/boutique.service';

@Component({
  selector: 'app-boutique-informations',
  templateUrl: './boutique-informations.component.html',
  styleUrls: ['./boutique-informations.component.scss'],
  imports: [ReactiveFormsModule]
})
export class BoutiqueInformationsComponent implements OnInit {
  boutiqueForm: FormGroup;
  boutique: Boutique | null = null;
  loading = false;
  saving = false;
  error: string | null = null;
  success: string | null = null;

  constructor(
    private fb: FormBuilder,
    private boutiqueService: BoutiqueService
  ) {
    this.boutiqueForm = this.fb.group({
      nom: ['', [Validators.required, Validators.maxLength(100)]]
    });
  }

  ngOnInit(): void {
    this.loadBoutique();
  }

  loadBoutique(): void {
    this.loading = true;
    this.error = null;

    this.boutiqueService.getMyBoutique().subscribe({
      next: (response) => {
        if (response.success) {
          this.boutique = response.data;
          this.boutiqueForm.patchValue({
            nom: response.data.nom
          });
        } else {
          this.error = response.message;
        }
      },
      error: (err) => {
        this.error = 'Erreur lors du chargement de la boutique';
        console.error('Erreur boutique:', err);
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  onSubmit(): void {
    if (this.boutiqueForm.invalid || !this.boutique) {
      return;
    }

    this.saving = true;
    this.error = null;
    this.success = null;

    const updateData = {
      nom: this.boutiqueForm.value.nom
    };

    this.boutiqueService.updateMyBoutique(updateData).subscribe({
      next: (response) => {
        if (response.success) {
          this.boutique = response.data;
          this.success = 'Informations mises à jour avec succès';
          this.boutiqueForm.patchValue({
            nom: response.data.nom
          });
        } else {
          this.error = response.message;
        }
      },
      error: (err) => {
        this.error = 'Erreur lors de la mise à jour';
        console.error('Erreur mise à jour:', err);
      },
      complete: () => {
        this.saving = false;
      }
    });
  }

  onLogoUpload(event: any): void {
    const file = event.target.files[0];
    if (file && this.boutique) {
      this.saving = true;
      this.error = null;
      this.success = null;

      this.boutiqueService.uploadLogo(file).subscribe({
        next: (response) => {
          if (response.success) {
            this.boutique = response.data.boutique;
            this.success = 'Logo mis à jour avec succès';
          } else {
            this.error = response.message;
          }
        },
        error: (err) => {
          this.error = 'Erreur lors du téléchargement du logo';
          console.error('Erreur logo:', err);
        },
        complete: () => {
          this.saving = false;
        }
      });
    }
  }

  toggleBoutiqueStatus(): void {
    if (!this.boutique) return;

    this.saving = true;
    this.error = null;
    this.success = null;

    const action = this.boutique.isActive ? 
      this.boutiqueService.deactivateMyBoutique() : 
      this.boutiqueService.activateMyBoutique();

    action.subscribe({
      next: (response) => {
        if (response.success) {
          this.boutique = response.data;
          this.success = `Boutique ${response.data.isActive ? 'activée' : 'désactivée'} avec succès`;
        } else {
          this.error = response.message;
        }
      },
      error: (err) => {
        this.error = 'Erreur lors du changement de statut';
        console.error('Erreur statut:', err);
      },
      complete: () => {
        this.saving = false;
      }
    });
  }

  // Getters pour la validation
  get nom() {
    return this.boutiqueForm.get('nom');
  }
}
