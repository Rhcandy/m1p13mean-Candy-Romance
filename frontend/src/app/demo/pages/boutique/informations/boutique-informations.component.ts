import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { BoutiqueService, Boutique } from '../../../../services/boutique.service';
import { NotificationService } from '../../../../services/notification.service';
import { LoyerService } from '../../../../services/loyer.services';

@Component({
  selector: 'app-boutique-informations',
  templateUrl: './boutique-informations.component.html',
  styleUrls: ['./boutique-informations.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, DatePipe]
})
export class BoutiqueInformationsComponent implements OnInit {
  boutiqueForm: FormGroup;
  loyerPaymentForm: FormGroup;
  renewForm: FormGroup;

  boutique: Boutique | null = null;
  loyerSummary: any | null = null;

  loading = false;
  saving = false;
  loyerLoading = false;
  paymentLoading = false;
  renewLoading = false;

  error: string | null = null;
  success: string | null = null;

  minRenewDays = 1;
  minRenewDate = this.toInputDate(this.addDays(new Date(), 1));

  joursOuverture = [
    { key: 'lundi', label: 'Lun' },
    { key: 'mardi', label: 'Mar' },
    { key: 'mercredi', label: 'Mer' },
    { key: 'jeudi', label: 'Jeu' },
    { key: 'vendredi', label: 'Ven' },
    { key: 'samedi', label: 'Sam' },
    { key: 'dimanche', label: 'Dim' }
  ];

  constructor(
    private readonly fb: FormBuilder,
    private readonly boutiqueService: BoutiqueService,
    private readonly loyerService: LoyerService,
    private readonly router: Router,
    private readonly cdr: ChangeDetectorRef,
    private readonly notificationService: NotificationService
  ) {
    this.boutiqueForm = this.fb.group({
      nom: ['', [Validators.required, Validators.maxLength(100)]]
    });

    this.loyerPaymentForm = this.fb.group({
      montant: [0, [Validators.required, Validators.min(1)]],
      reference: ['', [Validators.required, Validators.maxLength(120)]],
      libelle: ['']
    });

    this.renewForm = this.fb.group({
      dateFinLocation: ['', Validators.required]
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
          this.setupRenewConstraints();
          this.loadLoyerSummary();
        } else {
          this.notificationService.info('Info', 'Aucune boutique trouvee pour votre compte. Veuillez en creer une.');
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

  loadLoyerSummary(): void {
    if (!this.boutique) {
      this.loyerSummary = null;
      return;
    }

    this.loyerLoading = true;

    this.loyerService.getMySummary().subscribe({
      next: (response) => {
        this.loyerSummary = response?.data || null;
        this.loyerLoading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.loyerSummary = null;
        this.loyerLoading = false;
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
        this.notificationService.error('Erreur', 'Erreur lors de la mise a jour');
        console.error('Erreur mise a jour:', err);
        this.saving = false;
        this.cdr.detectChanges();
      }
    });
  }

  submitLoyerPayment(): void {
    if (this.loyerPaymentForm.invalid) {
      this.loyerPaymentForm.markAllAsTouched();
      return;
    }

    this.paymentLoading = true;

    const payload = {
      montant: Number(this.loyerPaymentForm.get('montant')?.value || 0),
      reference: String(this.loyerPaymentForm.get('reference')?.value || '').trim(),
      libelle: String(this.loyerPaymentForm.get('libelle')?.value || '').trim() || undefined
    };

    this.loyerService.payMyBoutique(payload).subscribe({
      next: (response) => {
        this.paymentLoading = false;
        const allocationCount = response?.data?.allocations?.length || 0;
        const affectedAmount = Number(response?.data?.montantAffecte || payload.montant);

        this.notificationService.success(
          'Paiement enregistre',
          `${affectedAmount.toLocaleString()} Ar affectes sur ${allocationCount} facture(s).`
        );

        this.loyerPaymentForm.patchValue({ montant: 0, reference: '', libelle: '' });
        this.loadLoyerSummary();
        this.loadBoutique();
      },
      error: (err) => {
        this.paymentLoading = false;
        const message = err?.error?.message || 'Paiement impossible.';
        this.notificationService.error('Erreur paiement', message);
        this.cdr.detectChanges();
      }
    });
  }

  submitRenewContract(): void {
    if (this.renewForm.invalid) {
      this.renewForm.markAllAsTouched();
      return;
    }

    const dateFinLocation = String(this.renewForm.get('dateFinLocation')?.value || '');
    if (!dateFinLocation) return;

    this.renewLoading = true;

    this.boutiqueService.renewMyBoutiqueContract(dateFinLocation).subscribe({
      next: (response) => {
        this.renewLoading = false;
        if (response.success) {
          this.boutique = response.data;
          this.setupRenewConstraints();
          this.notificationService.success('Contrat renouvele', 'La date de fin de location a ete mise a jour.');
          this.loadLoyerSummary();
        } else {
          this.notificationService.error('Erreur', response.message || 'Renouvellement impossible.');
        }
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.renewLoading = false;
        const message = err?.error?.message || 'Renouvellement impossible.';
        this.notificationService.error('Erreur', message);
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
          this.notificationService.error('Erreur', 'Erreur lors du telechargement du logo');
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

    if (!this.boutique.isActive && this.boutique.isBlockedForLoyer) {
      this.notificationService.error(
        'Activation bloquee',
        this.boutique.loyerBlockedReason || 'Reglez vos loyers en retard pour reactiver la boutique.'
      );
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
          this.notificationService.success(`Boutique ${response.data.isActive ? 'activee' : 'desactivee'} avec succes`);
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

  async quitterCentre(): Promise<void> {
    if (!this.boutique) return;

    const confirmed = await this.notificationService.confirm({
      title: 'Quitter le centre',
      message:
        'Quitter le centre supprimera la boutique et liberera la box. Tous les produits doivent etre supprimes avant. Continuer ?',
      confirmLabel: 'Quitter',
      cancelLabel: 'Annuler',
      confirmStyle: 'danger'
    });
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

  getLoyerPaidAmount(loyer: any): number {
    return (loyer?.paiements || []).reduce((sum: number, item: any) => sum + (Number(item?.montant) || 0), 0);
  }

  getStatusLabel(statut?: string): string {
    const normalized = String(statut || '').toUpperCase();

    if (normalized === 'PAYE') return 'Paye';
    if (normalized === 'PARTIEL') return 'Partiel';
    if (normalized === 'RETARD') return 'Retard';
    if (normalized === 'IMPAYE') return 'Impaye';
    return normalized || 'Inconnu';
  }

  getStatusClass(statut?: string): string {
    const normalized = String(statut || '').toUpperCase();

    if (normalized === 'PAYE') return 'bg-success-subtle text-success';
    if (normalized === 'PARTIEL') return 'bg-warning-subtle text-warning';
    if (normalized === 'RETARD') return 'bg-danger-subtle text-danger';
    if (normalized === 'IMPAYE') return 'bg-secondary-subtle text-secondary';
    return 'bg-light text-dark';
  }

  private setupRenewConstraints(): void {
    const minDays = this.computeMinRenewDays();
    this.minRenewDays = minDays;

    const minDate = this.addDays(new Date(), minDays);
    this.minRenewDate = this.toInputDate(minDate);
    this.renewForm.patchValue({ dateFinLocation: this.minRenewDate });
  }

  private computeMinRenewDays(): number {
    const boxes = this.boutique?.contratlocation?.boxes || [];
    if (!boxes.length) return 1;

    const days = boxes
      .map((box: any) => Number(box?.typeBoxId?.minOccupationDays || box?.typeBoxId?.periode || 1))
      .filter((value) => Number.isFinite(value) && value > 0);

    if (!days.length) return 1;
    return Math.max(...days);
  }

  private addDays(date: Date, days: number): Date {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  private toInputDate(date: Date): string {
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, '0');
    const day = `${date.getDate()}`.padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}
