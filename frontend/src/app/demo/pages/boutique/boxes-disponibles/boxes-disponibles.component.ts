import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  AvailableBox,
  Boutique,
  BoutiqueService,
  CreateBoutiquePayload,
  JLocation
} from '../../../../services/boutique.service';
import { AuthService } from '../../../../services/auth.service';
import { NotificationService } from '../../../../services/notification.service';

@Component({
  selector: 'app-boxes-disponibles',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './boxes-disponibles.component.html',
  styleUrls: ['./boxes-disponibles.component.scss']
})
export class BoxesDisponiblesComponent implements OnInit {
  loading = false;
  loadingBoutique = false;
  creating = false;
  showOnboardingNotice = false;

  boxes: AvailableBox[] = [];
  selectedBox: AvailableBox | null = null;

  hasBoutique = false;
  isChangingBox = false;
  boutique: Boutique | null = null;

  readonly boutiqueForm: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly boutiqueService: BoutiqueService,
    private readonly authService: AuthService,
    private readonly notificationService: NotificationService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly cdr: ChangeDetectorRef
  ) {
    const now = new Date();
    const debut = new Date(now);
    debut.setDate(debut.getDate() + 1);

    const fin = new Date(debut);
    fin.setDate(fin.getDate() + 30);

    this.boutiqueForm = this.fb.group({
      nom: ['', [Validators.required, Validators.maxLength(100)]],
      dateDebutLocation: [this.toInputDate(debut), Validators.required],
      dateFinLocation: [this.toInputDate(fin), Validators.required],

      lundi: [true],
      mardi: [true],
      mercredi: [true],
      jeudi: [true],
      vendredi: [true],
      samedi: [true],
      dimanche: [false],

      acceptRent: [false, Validators.requiredTrue],
      acceptDelivery: [false, Validators.requiredTrue],
      acceptCommission: [false, Validators.requiredTrue]
    });
  }

  ngOnInit(): void {
    if (!this.authService.hasRole('admin_boutique')) {
      this.router.navigate(['/default']);
      return;
    }

    this.isChangingBox = this.route.snapshot.queryParamMap.get('mode') === 'change';
    this.showOnboardingNotice = this.route.snapshot.queryParamMap.get('onboard') === '1';
    this.loadStateAndBoxes();
  }

  private loadStateAndBoxes(): void {
    this.loading = true;

    this.boutiqueService.refreshMyBoutiqueStatus().subscribe({
      next: (status) => {
        this.hasBoutique = status.hasBoutique;

        if (status.hasBoutique) {
          this.loadBoutique();

          if (!this.isChangingBox) {
            this.loading = false;
            this.notificationService.info('Info', 'Vous avez deja une boutique.');
            this.router.navigate(['/boutique/informations']);
            return;
          }
        } else if (this.isChangingBox) {
          this.isChangingBox = false;
        }

        this.loadBoxes();
      },
      error: () => {
        this.loading = false;
        this.notificationService.error('Erreur', 'Impossible de verifier votre boutique.');
        this.cdr.detectChanges();
      }
    });
  }

  private loadBoutique(): void {
    this.loadingBoutique = true;

    this.boutiqueService.getMyBoutique().subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.boutique = response.data;
          this.boutiqueForm.patchValue({
            nom: response.data.nom
          });
        }
      },
      error: () => {
        this.boutique = null;
      },
      complete: () => {
        this.loadingBoutique = false;
        this.cdr.detectChanges();
      }
    });
  }

  private loadBoxes(): void {
    this.boutiqueService.getAvailableBoxes().subscribe({
      next: (boxes) => {
        this.boxes = boxes;
        if (this.boxes.length > 0) {
          this.selectedBox = this.boxes[0];
        }
      },
      error: () => {
        this.notificationService.error('Erreur', 'Impossible de charger les boxes disponibles.');
      },
      complete: () => {
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  selectBox(box: AvailableBox): void {
    this.selectedBox = box;
  }

  isSelectedBox(box: AvailableBox): boolean {
    return this.selectedBox?._id === box._id;
  }

  submit(): void {
    if (!this.selectedBox) {
      this.notificationService.warning('Box requise', 'Selectionnez une box avant de continuer.');
      return;
    }

    if (this.boutiqueForm.invalid) {
      this.boutiqueForm.markAllAsTouched();
      this.notificationService.warning('Formulaire invalide', 'Completer tous les champs obligatoires.');
      return;
    }

    const dateDebut = new Date(this.boutiqueForm.get('dateDebutLocation')?.value);
    const dateFin = new Date(this.boutiqueForm.get('dateFinLocation')?.value);
    if (!(dateDebut.getTime() < dateFin.getTime())) {
      this.notificationService.warning('Dates invalides', 'La date de fin doit etre apres la date de debut.');
      return;
    }

    const oneDayMs = 24 * 60 * 60 * 1000;
    const dureeJours = Math.ceil((dateFin.getTime() - dateDebut.getTime()) / oneDayMs);
    const minDays = this.getSelectedBoxMinDays();
    if (dureeJours < minDays) {
      this.notificationService.warning(
        'Duree insuffisante',
        `La duree minimale de location pour cette box est ${minDays} jours.`
      );
      return;
    }

    this.creating = true;

    const jLocation: JLocation = {
      lundi: !!this.boutiqueForm.get('lundi')?.value,
      mardi: !!this.boutiqueForm.get('mardi')?.value,
      mercredi: !!this.boutiqueForm.get('mercredi')?.value,
      jeudi: !!this.boutiqueForm.get('jeudi')?.value,
      vendredi: !!this.boutiqueForm.get('vendredi')?.value,
      samedi: !!this.boutiqueForm.get('samedi')?.value,
      dimanche: !!this.boutiqueForm.get('dimanche')?.value
    };

    const contratlocation = {
      boxes: [this.selectedBox._id],
      dateDebutLocation: dateDebut.toISOString(),
      dateFinLocation: dateFin.toISOString(),
      jLocation
    };

    const request$ = this.isChangingBox && this.boutique
      ? this.boutiqueService.updateMyBoutique({
          nom: this.boutiqueForm.get('nom')?.value,
          contratlocation: contratlocation as any
        } as Partial<Boutique>)
      : this.boutiqueService.createBoutique({
          nom: this.boutiqueForm.get('nom')?.value,
          locataire: [this.authService.getUserId()],
          contratlocation
        } as CreateBoutiquePayload);

    request$.subscribe({
      next: (response) => {
        if (!response.success) {
          this.notificationService.error('Erreur', response.message || 'Operation impossible.');
          return;
        }

        if (this.isChangingBox) {
          this.notificationService.success('Box modifiee', 'Votre box a ete mise a jour.');
          this.router.navigate(['/boutique/informations']);
          return;
        }

        if (response.data?.isActive) {
          this.notificationService.success('Boutique creee', 'Votre boutique est active.');
          this.router.navigate(['/boutique/informations']);
        } else {
          this.notificationService.info(
            'Boutique creee',
            'Veuillez fournir a la direction du centre la photocopie CIN du proprietaire, NIF, STAT de votre entreprise et 2 photos pour completer le dossier. Apres reception des dossiers, votre boutique sera activee.'
          );
          this.router.navigate(['/boutique/informations']);
        }
      },
      error: (error) => {
        const message = error?.error?.message || 'Erreur lors de la creation de la boutique.';
        this.notificationService.error('Erreur', message);
      },
      complete: () => {
        this.creating = false;
        this.cdr.detectChanges();
      }
    });
  }

  goToBoutiqueInfo(): void {
    this.router.navigate(['/boutique/informations']);
  }

  trackByBoxId(_: number, box: AvailableBox): string {
    return box._id;
  }

  getSelectedBoxMinDays(): number {
    if (!this.selectedBox) return 1;
    const minDays = Number(this.selectedBox.typeBoxId?.minOccupationDays || this.selectedBox.typeBoxId?.periode || 1);
    return minDays > 0 ? minDays : 1;
  }

  private toInputDate(date: Date): string {
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, '0');
    const day = `${date.getDate()}`.padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}
