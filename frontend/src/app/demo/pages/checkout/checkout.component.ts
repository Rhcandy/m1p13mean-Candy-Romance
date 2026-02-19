import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PanierService } from '../../../services/panier.service';
import { AuthService } from '../../../services/auth.service';
import { NotificationService } from '../../../services/notification.service';
import { LivraisonService, AdresseLivraison as LivraisonAdresse } from '../../../services/livraison.service';
import { LeafletMapComponent } from '../../../components/map/leaflet-map.component';
import { UserService } from '../../../services/user.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

interface AdresseLivraisonForm {
  nomEndroit?: string;
  longitude?: number;
  latitude?: number;
  telephone?: string;
}

interface Panier {
  _id?: string; // Rendre optionnel explicitement
  numeroCommande: string;
  produitsachete: any[];
  qtt: number;
  sousTotal: number;
  fraisLivraison: number;
  total: number;
  statut: string;
  methodePaiement?: string; // Rendre optionnel
  adresseLivraison?: LivraisonAdresse;
}

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, LeafletMapComponent],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>();

  panier: Panier | null = null;
  loading = false;
  processingPayment = false;
  currentStep = 1; // 1: Adresse, 2: Paiement, 3: Confirmation

  checkoutForm: FormGroup;
  fraisLivraison = 0;
  dateLivraisonEstimee: Date | null = null;

  modeLivraison: 'retrait' | 'livraison' = 'retrait';
  currentUser: any = null;
  userTelephone = '';
  selectedMapLocation: { lat: number; lng: number } | null = null;
  mapInitialPosition: [number, number] | null = null;

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly fb: FormBuilder,
    private readonly panierService: PanierService,
    private readonly authService: AuthService,
    private readonly notificationService: NotificationService,
    private readonly livraisonService: LivraisonService,
    private readonly userService: UserService,
    private readonly cdr: ChangeDetectorRef
  ) {
    this.checkoutForm = this.fb.group({
      modeLivraison: ['retrait', Validators.required],

      nomEndroit: [''],
      latitude: [null],
      longitude: [null],
      telephone: [''],

      methodePaiement: ['carte', Validators.required],

      carteNumero: ['', [Validators.required, Validators.pattern('^[0-9]{16}$')]],
      carteNom: ['', Validators.required],
      carteExpiry: ['', [Validators.required, Validators.pattern('^(0[1-9]|1[0-2])\/[0-9]{2}$')]],
      carteCVV: ['', [Validators.required, Validators.pattern('^[0-9]{3,4}$')]]
    });
  }

  ngOnInit(): void {
    this.authService.ensureUserExists();
    this.loadUser();
    this.refreshUserProfile();
    this.loadPanier();
    this.loadUserAddress();
    this.onModeLivraisonChange();
    this.watchFormChanges();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadUser(): void {
    this.currentUser = this.authService.getUser();
    this.userTelephone = this.currentUser?.numtel?.[0] || '';
  }

  private refreshUserProfile(): void {
    const userId = this.authService.getUserId();
    if (!userId) return;

    this.userService.getUserById(userId).pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        if (!response?.data) return;
        this.authService.updateStoredUser(response.data as any);
        this.loadUser();
        this.loadUserAddress();
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Erreur chargement utilisateur:', error);
      }
    });
  }

  loadPanier(): void {
    this.loading = true;

    this.panierService.getCommande().pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        this.panier = response.data;
        if (!this.panier || (this.panier.produitsachete.length === 0 && this.panier.statut !== 'en_attente')) {
          this.notificationService.warning('Votre panier est vide');
          return;
        }

        this.calculerFraisLivraison();
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Erreur chargement panier:', error);
        this.notificationService.error('Erreur lors du chargement du panier');
        this.router.navigate(['/panier']);
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  loadUserAddress(): void {
    const user = this.authService.currentUser;
    if (user && 'adresse' in user && user.adresse) {
      const adresse = user.adresse as any;
      const latitude = adresse.latitude ?? null;
      const longitude = adresse.longitude ?? null;

      this.checkoutForm.patchValue({
        nomEndroit: adresse.nomEndroit || '',
        latitude,
        longitude,
        telephone: this.userTelephone || ''
      });

      if (latitude != null && longitude != null) {
        this.mapInitialPosition = [Number(latitude), Number(longitude)];
        this.selectedMapLocation = { lat: Number(latitude), lng: Number(longitude) };
      }
    } else {
      this.checkoutForm.patchValue({
        telephone: this.userTelephone
      });
    }
  }

  validerPanier(): void {
    if (!this.panier) return;

    this.panierService.validerPanier().pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        this.panier = response.data;
        this.calculerFraisLivraison();
      },
      error: (error) => {
        console.error('Erreur validation panier:', error);
        this.notificationService.error('Erreur lors de la validation du panier');
      }
    });
  }

  calculerFraisLivraison(): void {
    if (!this.panier) return;

    if (this.modeLivraison !== 'livraison') {
      this.fraisLivraison = 0;
      this.dateLivraisonEstimee = null;
      this.updateTotal();
      return;
    }

    if (!this.hasCoordonneesLivraison()) {
      this.fraisLivraison = 0;
      this.dateLivraisonEstimee = null;
      this.updateTotal();
      return;
    }

    const adresse: LivraisonAdresse = {
      nomEndroit: this.checkoutForm.get('nomEndroit')?.value,
      latitude: Number(this.checkoutForm.get('latitude')?.value),
      longitude: Number(this.checkoutForm.get('longitude')?.value),
      telephone: this.checkoutForm.get('telephone')?.value
    };

    this.livraisonService.calculerFraisLivraison(adresse).pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        this.fraisLivraison = response.fraisLivraison;
        this.dateLivraisonEstimee = new Date(response.dateLivraison);
        this.updateTotal();
      },
      error: (error) => {
        console.error('Erreur calcul frais livraison:', error);
        this.calculerFraisLivraisonSimulation();
        this.updateTotal();
      }
    });
  }

  private calculerFraisLivraisonSimulation(): void {
    const baseFrais = 3000;
    const coutParKm = 2;
    const kmGratuits = 3;

    const distance = 5;
    this.fraisLivraison = baseFrais;
    if (distance > kmGratuits) {
      this.fraisLivraison += (distance - kmGratuits) * coutParKm;
    }

    this.dateLivraisonEstimee = new Date();
    this.dateLivraisonEstimee.setDate(this.dateLivraisonEstimee.getDate() + 1);
  }

  updateTotal(): void {
    if (!this.panier) return;
    this.panier.fraisLivraison = this.fraisLivraison;
    this.panier.total = this.panier.sousTotal + this.fraisLivraison;
  }

  onModeLivraisonChange(): void {
    this.modeLivraison = this.checkoutForm.get('modeLivraison')?.value || 'retrait';

    const nomEndroitControl = this.checkoutForm.get('nomEndroit');
    const latitudeControl = this.checkoutForm.get('latitude');
    const longitudeControl = this.checkoutForm.get('longitude');
    const telephoneControl = this.checkoutForm.get('telephone');

    const telephoneValidators = [Validators.required, Validators.pattern('^[0-9]{10,14}$')];

    if (this.modeLivraison === 'livraison') {
      nomEndroitControl?.setValidators([Validators.required]);
      latitudeControl?.setValidators([Validators.required]);
      longitudeControl?.setValidators([Validators.required]);
      telephoneControl?.setValidators(telephoneValidators);
    } else {
      nomEndroitControl?.clearValidators();
      latitudeControl?.clearValidators();
      longitudeControl?.clearValidators();
      telephoneControl?.setValidators(telephoneValidators);
    }

    nomEndroitControl?.updateValueAndValidity();
    latitudeControl?.updateValueAndValidity();
    longitudeControl?.updateValueAndValidity();
    telephoneControl?.updateValueAndValidity();

    this.calculerFraisLivraison();
  }

  onMapClick(coords: { lat: number; lng: number }): void {
    this.selectedMapLocation = coords;
    this.checkoutForm.patchValue({
      latitude: coords.lat,
      longitude: coords.lng
    });
    this.calculerFraisLivraison();
  }

  hasCoordonneesLivraison(): boolean {
    const latitudeRaw = this.checkoutForm.get('latitude')?.value;
    const longitudeRaw = this.checkoutForm.get('longitude')?.value;
    if (latitudeRaw === null || latitudeRaw === undefined || latitudeRaw === '') return false;
    if (longitudeRaw === null || longitudeRaw === undefined || longitudeRaw === '') return false;
    const latitude = Number(latitudeRaw);
    const longitude = Number(longitudeRaw);
    return Number.isFinite(latitude) && Number.isFinite(longitude);
  }

  shouldShowFraisLivraison(): boolean {
    return this.modeLivraison === 'livraison' && this.hasCoordonneesLivraison();
  }

  nextStep(): void {
    if (this.currentStep === 1) {
      if (this.checkAddressForm()) {
        this.updateCommandeAdresse();
        this.calculerFraisLivraison();
        this.currentStep = 2;
      }
    } else if (this.currentStep === 2) {
      if (this.checkPaymentForm()) {
        this.processPayment();
      }
    }
  }

  previousStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  checkAddressForm(): boolean {
    const telephoneControl = this.checkoutForm.get('telephone');
    const hasTelephoneError = telephoneControl?.invalid;

    if (this.modeLivraison === 'retrait') {
      if (hasTelephoneError) {
        telephoneControl?.markAsTouched();
        this.notificationService.warning('Veuillez renseigner votre numero de telephone');
        return false;
      }
      return true;
    }

    const adresseFields = ['nomEndroit', 'latitude', 'longitude', 'telephone'];
    let isValid = true;

    for (const field of adresseFields) {
      const control = this.checkoutForm.get(field);
      if (control?.invalid) {
        control.markAsTouched();
        isValid = false;
      }
    }

    if (!isValid) {
      this.notificationService.warning('Veuillez completer correctement les coordonnees de livraison');
    }

    return isValid;
  }

  checkPaymentForm(): boolean {
    const methode = this.checkoutForm.get('methodePaiement')?.value;

    if (methode === 'carte') {
      const carteFields = ['carteNumero', 'carteNom', 'carteExpiry', 'carteCVV'];
      let isValid = true;

      for (const field of carteFields) {
        const control = this.checkoutForm.get(field);
        if (control?.invalid) {
          control.markAsTouched();
          isValid = false;
        }
      }

      if (!isValid) {
        this.notificationService.warning('Veuillez completer correctement les informations de paiement');
        return false;
      }
    }

    return true;
  }

  updateCommandeAdresse(): void {
    if (!this.panier) return;

    let adresseLivraison: AdresseLivraisonForm | null = null;

    if (this.modeLivraison === 'livraison') {
      adresseLivraison = {
        nomEndroit: this.checkoutForm.get('nomEndroit')?.value,
        latitude: Number(this.checkoutForm.get('latitude')?.value),
        longitude: Number(this.checkoutForm.get('longitude')?.value),
        telephone: this.checkoutForm.get('telephone')?.value
      };
    }

    this.panierService.mettreAJourCommande({
      adresseLivraison,
      methodePaiement: this.checkoutForm.get('methodePaiement')?.value
    }).pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        this.panier = response.data;
      },
      error: (error) => {
        console.error('Erreur mise a jour commande:', error);
        this.notificationService.error('Erreur lors de la mise a jour de la commande');
      }
    });
  }

  processPayment(): void {
    if (!this.panier) return;

    this.processingPayment = true;

    const methode = this.checkoutForm.get('methodePaiement')?.value;
    const paiementDetails: any = { methode };

    if (methode === 'carte') {
      paiementDetails.carte = {
        numero: this.checkoutForm.get('carteNumero')?.value,
        nom: this.checkoutForm.get('carteNom')?.value,
        expiry: this.checkoutForm.get('carteExpiry')?.value,
        cvv: this.checkoutForm.get('carteCVV')?.value
      };
    }

    this.panierService.payerCommande(paiementDetails).pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        this.processingPayment = false;
        this.notificationService.success('Paiement effectue avec succes !');

        this.router.navigate(['/confirmation-commande'], {
          state: {
            commande: response.data.commande,
            facture: response.data.facture
          }
        });
      },
      error: (error) => {
        this.processingPayment = false;
        console.error('Erreur paiement:', error);
        this.notificationService.error('Erreur lors du paiement. Veuillez reessayer.');
      }
    });
  }

  cancelOrder(): void {
    if (confirm('Etes-vous sur de vouloir annuler cette commande ?')) {
      if (this.panier) {
        this.panierService.annulerCommande('Annulation par le client').pipe(takeUntil(this.destroy$)).subscribe({
          next: () => {
            this.notificationService.success('Commande annulee avec succes');
            this.router.navigate(['/panier']);
          },
          error: (error) => {
            console.error('Erreur annulation:', error);
            this.notificationService.error('Erreur lors de l\'annulation');
          }
        });
      }
    }
  }

  formatPrice(price: number): string {
    return this.panierService.formatMontant(price);
  }

  getTotalWithFrais(): number {
    if (!this.panier) return 0;
    return this.panier.sousTotal + this.fraisLivraison;
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.checkoutForm.get(fieldName);
    return field ? field.invalid && (field.touched || field.dirty) : false;
  }

  getErrorMessage(fieldName: string): string {
    const field = this.checkoutForm.get(fieldName);
    if (!field || !field.errors) return '';

    const errors = field.errors;

    if (errors['required']) return 'Ce champ est requis';
    if (errors['pattern']) {
      if (fieldName === 'telephone') return 'Numero de telephone invalide (10 a 14 chiffres)';
      if (fieldName === 'carteNumero') return 'Numero de carte invalide (16 chiffres)';
      if (fieldName === 'carteExpiry') return 'Date d\'expiration invalide (MM/AA)';
      if (fieldName === 'carteCVV') return 'CVV invalide (3-4 chiffres)';
    }

    return 'Champ invalide';
  }

  private watchFormChanges(): void {
    const modeControl = this.checkoutForm.get('modeLivraison');
    modeControl?.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.onModeLivraisonChange();
    });

    const latitudeControl = this.checkoutForm.get('latitude');
    const longitudeControl = this.checkoutForm.get('longitude');
    latitudeControl?.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(() => {
      if (this.modeLivraison === 'livraison') {
        this.calculerFraisLivraison();
      }
    });
    longitudeControl?.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(() => {
      if (this.modeLivraison === 'livraison') {
        this.calculerFraisLivraison();
      }
    });
  }
}
