import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { BoutiqueService, Boutique } from '../../../../services/boutique.service';
import { NotificationService } from '../../../../services/notification.service';

@Component({
  selector: 'app-boutique-informations',
  templateUrl: './boutique-informations.component.html',
  styleUrls: ['./boutique-informations.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, DatePipe]
})
export class BoutiqueInformationsComponent implements OnInit {
  boutiqueForm: FormGroup;
  boutique: Boutique | null = null;
  loading = false;
  saving = false;
  error: string | null = null;
  success: string | null = null;

  joursOuverture = [
    { key: 'lundi',    label: 'Lun' },
    { key: 'mardi',    label: 'Mar' },
    { key: 'mercredi', label: 'Mer' },
    { key: 'jeudi',    label: 'Jeu' },
    { key: 'vendredi', label: 'Ven' },
    { key: 'samedi',   label: 'Sam' },
    { key: 'dimanche', label: 'Dim' },
  ];

  constructor(
    private readonly fb: FormBuilder,
    private readonly boutiqueService: BoutiqueService,
    private readonly cdr: ChangeDetectorRef,
    private readonly notificationService: NotificationService
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

    this.boutiqueService.getMyBoutique().subscribe({
      next: (response) => {
        if (response.success) {
          this.boutique = response.data;
          this.boutiqueForm.patchValue({ nom: response.data.nom });
        } else {
          this.notificationService.info('Info', 'Aucune boutique trouvée pour votre compte. Veuillez en créer une.');
        }
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Erreur boutique:', err);
        if (err.status !== 404) {
          this.notificationService.error('Erreur', 'Erreur lors du chargement de la boutique');
        }
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  get nom() {
    return this.boutiqueForm.get('nom') as FormControl;
  }

  onSubmit(): void {
    if (this.boutiqueForm.invalid || !this.boutique) return;

    this.saving = true;
    const updateData = { nom: this.boutiqueForm.value.nom };

    this.boutiqueService.updateMyBoutique(updateData).subscribe({
      next: (response) => {
        if (response.success) {
          this.boutique = response.data;
          this.notificationService.success('Informations mises à jour avec succès');
          this.boutiqueForm.patchValue({ nom: response.data.nom });
        } else {
          this.notificationService.error('Erreur', response.message);
        }
        this.saving = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.notificationService.error('Erreur', 'Erreur lors de la mise à jour');
        console.error('Erreur mise à jour:', err);
        this.saving = false;
        this.cdr.detectChanges();
      }
    });
  }

  onLogoUpload(event: any): void {
    const file = event.target.files[0];
    if (file && this.boutique) {
      this.saving = true;

      this.boutiqueService.uploadLogo(this.boutique._id, file).subscribe({
        next: (response) => {
          if (response.success) {
            this.boutique = response.data;
            this.notificationService.success('Logo mis à jour avec succès');
          } else {
            this.notificationService.error('Erreur', response.message);
          }
          this.saving = false;
          this.cdr.detectChanges();
        },
        error: (err) => {
          this.notificationService.error('Erreur', 'Erreur lors du téléchargement du logo');
          console.error('Erreur logo:', err);
          this.saving = false;
          this.cdr.detectChanges();
        }
      });
    }
  }

  toggleBoutiqueStatus(): void {
    if (!this.boutique) return;

    this.saving = true;
    const action = this.boutique.isActive
      ? this.boutiqueService.deactivateMyBoutique()
      : this.boutiqueService.activateMyBoutique();

    action.subscribe({
      next: (response) => {
        if (response.success) {
          this.boutique = response.data;
          this.notificationService.success(`Boutique ${response.data.isActive ? 'activée' : 'désactivée'} avec succès`);
        } else {
          this.notificationService.error('Erreur', response.message);
        }
        this.saving = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.notificationService.error('Erreur', 'Erreur lors du changement de statut');
        console.error('Erreur statut:', err);
        this.saving = false;
        this.cdr.detectChanges();
      }
    });
  }
}
