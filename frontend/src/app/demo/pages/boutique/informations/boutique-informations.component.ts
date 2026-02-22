import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { Router } from '@angular/router';
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
    private readonly router: Router,
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
          this.notificationService.info('Info', 'Aucune boutique trouvÃ©e pour votre compte. Veuillez en crÃ©er une.');
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
          this.notificationService.success('Informations mises a jour avec succes');
          this.boutiqueForm.patchValue({ nom: response.data.nom });
        } else {
          this.notificationService.error('Erreur', response.message);
        }
        this.saving = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.notificationService.error('Erreur', 'Erreur lors de la mise Ã  jour');
        console.error('Erreur mise Ã  jour:', err);
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
            const payload: any = response.data;
            this.boutique = payload?.boutique || payload;
            this.notificationService.success('Logo mis a jour avec succes');
          } else {
            this.notificationService.error('Erreur', response.message);
          }
          this.saving = false;
          this.cdr.detectChanges();
        },
        error: (err) => {
          this.notificationService.error('Erreur', 'Erreur lors du tÃ©lÃ©chargement du logo');
          console.error('Erreur logo:', err);
          this.saving = false;
          this.cdr.detectChanges();
        }
      });
    }
  }

  toggleBoutiqueStatus(): void {
    if (!this.boutique) return;
    if (!this.boutique.isActive && this.boutique.isPendingFirstActivation) {
      this.notificationService.info('Activation en attente', 'La premiere activation doit etre faite par admin centre.');
      return;
    }

    this.saving = true;
    const action = this.boutique.isActive
      ? this.boutiqueService.deactivateMyBoutique()
      : this.boutiqueService.activateMyBoutique();

    action.subscribe({
      next: (response) => {
        if (response.success) {
          this.boutique = response.data;
          this.notificationService.success(`Boutique ${response.data.isActive ? 'activÃ©e' : 'dÃ©sactivÃ©e'} avec succÃ¨s`);
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

  goToChangeBox(): void {
    this.router.navigate(['/boutique/boxes'], { queryParams: { mode: 'change' } });
  }

  goToBoxesList(): void {
    this.router.navigate(['/boutique/boxes']);
  }

  quitterCentre(): void {
    if (!this.boutique) return;

    const confirmed = confirm(
      'Quitter le centre supprimera la boutique et liberera la box. ' +
      'Condition: tous les produits doivent etre supprimes avant. Continuer ?'
    );
    if (!confirmed) return;

    this.saving = true;
    this.boutiqueService.quitterCentre().subscribe({
      next: (response) => {
        if (response.success) {
          this.notificationService.success('Centre quitte avec succes');
          this.boutique = null;
          this.router.navigate(['/boutique/boxes']);
        } else {
          this.notificationService.error('Erreur', response.message);
        }
      },
      error: (err) => {
        const message = err?.error?.message || 'Impossible de quitter le centre.';
        this.notificationService.error('Erreur', message);
      },
      complete: () => {
        this.saving = false;
        this.cdr.detectChanges();
      }
    });
  }
}

