import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PanierService } from '../../../services/panier.service';
import { AuthService } from '../../../services/auth.service';
import { NotificationService } from '../../../services/notification.service';
import { LivraisonService, AdresseLivraison } from '../../../services/livraison.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

interface Adresse {
  rue: string;
  ville: string;
  codePostal: string;
  pays: string;
  telephone?: string;
}

interface AdresseLivraison {
  nomEndroit?: string;
  longitude?: number;
  latitude?: number;
  rue: string;
  ville: string;
  codePostal: string;
  pays: string;
  telephone: string;
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
  adresseLivraison?: AdresseLivraison;
}

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
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
  
  // Nouvelles propriétés pour la gestion de la livraison
  modeLivraison: 'retrait' | 'livraison' = 'retrait';
  currentUser: any = null;
  userTelephone: string = '';

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly fb: FormBuilder,
    private readonly panierService: PanierService,
    private readonly authService: AuthService,
    private readonly notificationService: NotificationService,
    private readonly livraisonService: LivraisonService,
    private readonly cdr: ChangeDetectorRef
  ) {
    this.checkoutForm = this.fb.group({
      // Mode de livraison
      modeLivraison: ['retrait', Validators.required],
      
      // Adresse de livraison (uniquement si livraison)
      rue: [''],
      ville: [''],
      codePostal: [''],
      pays: ['France'],
      telephone: [''],
      
      // Méthode de paiement
      methodePaiement: ['carte', Validators.required],
      
      // Détails de paiement (simulation)
      carteNumero: ['', [Validators.required, Validators.pattern('^[0-9]{16}$')]],
      carteNom: ['', Validators.required],
      carteExpiry: ['', [Validators.required, Validators.pattern('^(0[1-9]|1[0-2])\/[0-9]{2}$')]],
      carteCVV: ['', [Validators.required, Validators.pattern('^[0-9]{3,4}$')]]
    });
  }

  ngOnInit(): void {
    this.authService.ensureUserExists();
    this.loadUser();
    this.loadPanier();
    this.loadUserAddress();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadUser(): void {
    this.currentUser = this.authService.getUser();
    this.userTelephone = this.currentUser?.numtel?.[0] || '';
  }

  loadPanier(): void {
    this.loading = true;
    
    this.panierService.getCommande().pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        this.panier = response.data;
        console.log('Commande  chargé:', this.panier);
        // Permettre l'accès si le panier est en statut "en_attente" (vient d'être validé)
        if (!this.panier || (this.panier.produitsachete.length === 0 && this.panier.statut !== 'en_attente')) {
          this.notificationService.warning('Votre panier est vide');
         
          return;
        }
        
        // Calculer les frais de livraison
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
    // Charger l'adresse de l'utilisateur si elle existe
    const user = this.authService.currentUser;
    if (user && 'adresse' in user && user.adresse) {
      // Vérifier si l'adresse a les propriétés attendues
      const adresse = user.adresse as any;
      this.checkoutForm.patchValue({
        rue: adresse.rue || '',
        ville: adresse.ville || '',
        codePostal: adresse.codePostal || '',
        pays: adresse.pays || 'France',
        telephone: this.userTelephone || adresse.telephone || ''
      });
    } else {
      // Pré-remplir avec le téléphone de l'utilisateur
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

    // Ne calculer les frais de livraison que si mode livraison et adresse complète
    if (this.modeLivraison === 'livraison') {
      const formValues = this.checkoutForm.value;
      
      // Vérifier que tous les champs d'adresse sont remplis
      if (!formValues.rue || !formValues.ville || !formValues.codePostal || !formValues.telephone) {
        this.fraisLivraison = 0;
        this.updateTotal();
        return;
      }

      const adresse: AdresseLivraison = {
        rue: formValues.rue,
        ville: formValues.ville,
        codePostal: formValues.codePostal,
        pays: formValues.pays || 'France',
        telephone: formValues.telephone
      };

      // Utiliser l'API de calcul des frais de livraison
      this.livraisonService.calculerFraisLivraison(adresse).pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        this.fraisLivraison = response.fraisLivraison;
        this.dateLivraisonEstimee = new Date(response.dateLivraison);
      },
      error: (error) => {
        console.error('Erreur calcul frais livraison:', error);
        // En cas d'erreur, utiliser la simulation existante
        this.calculerFraisLivraisonSimulation();
      }
    });
  } else {
    // Mode retrait : pas de frais de livraison
    this.fraisLivraison = 0;
    this.dateLivraisonEstimee = null;
  }
  
  this.updateTotal();
}

  // Méthode de secours pour le calcul des frais
  private calculerFraisLivraisonSimulation(): void {
    const baseFrais = 3000;
    const codePostal = this.checkoutForm.get('codePostal')?.value || '75001';
    const distance = this.simulerDistance(codePostal);
    const coutParKm = 2;
    const kmGratuits = 3; // Changé à 3 comme demandé
    
    this.fraisLivraison = baseFrais;
    if (distance > kmGratuits) {
      this.fraisLivraison += (distance - kmGratuits) * coutParKm;
    }

    // Calculer la date de livraison (1 jour après paiement)
    this.dateLivraisonEstimee = new Date();
    this.dateLivraisonEstimee.setDate(this.dateLivraisonEstimee.getDate() + 1);
  }

  updateTotal(): void {
    if (!this.panier) return;
    
    // Mettre à jour le total avec les frais de livraison actuels
    this.panier.fraisLivraison = this.fraisLivraison;
    this.panier.total = this.panier.sousTotal + this.fraisLivraison;
  }

  // Gérer le changement de mode de livraison
  onModeLivraisonChange(): void {
    this.modeLivraison = this.checkoutForm.get('modeLivraison')?.value || 'retrait';
    
    // Mettre à jour les validateurs selon le mode
    const rueControl = this.checkoutForm.get('rue');
    const villeControl = this.checkoutForm.get('ville');
    const codePostalControl = this.checkoutForm.get('codePostal');
    const telephoneControl = this.checkoutForm.get('telephone');
    
    if (this.modeLivraison === 'livraison') {
      // Rendre les champs d'adresse obligatoires pour la livraison
      rueControl?.setValidators([Validators.required]);
      villeControl?.setValidators([Validators.required]);
      codePostalControl?.setValidators([Validators.required, Validators.pattern('^[0-9]{5}$')]);
      telephoneControl?.setValidators([Validators.required, Validators.pattern('^[0-9]{10}$')]);
    } else {
      // Rendre les champs d'adresse optionnels pour le retrait
      rueControl?.clearValidators();
      villeControl?.clearValidators();
      codePostalControl?.clearValidators();
      telephoneControl?.setValidators([Validators.pattern('^[0-9]{10}$')]); // Téléphone toujours requis
    }
    
    // Mettre à jour les validateurs
    rueControl?.updateValueAndValidity();
    villeControl?.updateValueAndValidity();
    codePostalControl?.updateValueAndValidity();
    telephoneControl?.updateValueAndValidity();
    
    // Recalculer les frais de livraison
    this.calculerFraisLivraison();
  }

  simulerDistance(codePostal: string): number {
    // Simulation très basique
    const cp = parseInt(codePostal.substring(0, 2));
    return Math.abs(cp - 75) + Math.random() * 10; // Distance depuis Paris
  }

  nextStep(): void {
    if (this.currentStep === 1) {
      if (this.checkAddressForm()) {
        this.updateCommandeAdresse();
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
    // Pour le mode retrait, seul le téléphone est obligatoire
    if (this.modeLivraison === 'retrait') {
      const telephoneControl = this.checkoutForm.get('telephone');
      if (telephoneControl?.invalid) {
        telephoneControl.markAsTouched();
        this.notificationService.warning('Veuillez renseigner votre numéro de téléphone');
        return false;
      }
      return true;
    }
    
    // Pour le mode livraison, tous les champs sont obligatoires
    const adresseFields = ['rue', 'ville', 'codePostal', 'pays', 'telephone'];
    let isValid = true;

    for (const field of adresseFields) {
      const control = this.checkoutForm.get(field);
      if (control?.invalid) {
        control.markAsTouched();
        isValid = false;
      }
    }

    if (!isValid) {
      this.notificationService.warning('Veuillez compléter correctement l\'adresse de livraison');
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
        this.notificationService.warning('Veuillez compléter correctement les informations de paiement');
        return false;
      }
    }

    return true;
  }

  updateCommandeAdresse(): void {
    if (!this.panier) return;

    let adresseLivraison: any = null;
    
    if (this.modeLivraison === 'livraison') {
      adresseLivraison = {
        rue: this.checkoutForm.get('rue')?.value,
        ville: this.checkoutForm.get('ville')?.value,
        codePostal: this.checkoutForm.get('codePostal')?.value,
        pays: this.checkoutForm.get('pays')?.value || 'France',
        telephone: this.checkoutForm.get('telephone')?.value
      };
    } else {
      // Mode retrait : pas d'adresse de livraison
      adresseLivraison = null;
    }

    this.panierService.mettreAJourCommande({
      adresseLivraison,
      methodePaiement: this.checkoutForm.get('methodePaiement')?.value
    }).pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        this.panier = response.data;
      },
      error: (error) => {
        console.error('Erreur mise à jour commande:', error);
        this.notificationService.error('Erreur lors de la mise à jour de la commande');
      }
    });
  }

  processPayment(): void {
    if (!this.panier) return;

    this.processingPayment = true;

    const paiementDetails = {
      methode: this.checkoutForm.get('methodePaiement')?.value,
      carte: {
        numero: this.checkoutForm.get('carteNumero')?.value,
        nom: this.checkoutForm.get('carteNom')?.value,
        expiry: this.checkoutForm.get('carteExpiry')?.value,
        cvv: this.checkoutForm.get('carteCVV')?.value
      }
    };

    this.panierService.payerCommande(paiementDetails).pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        this.processingPayment = false;
        this.notificationService.success('Paiement effectué avec succès !');
        
        // Naviguer vers la page de confirmation
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
        this.notificationService.error('Erreur lors du paiement. Veuillez réessayer.');
      }
    });
  }

  cancelOrder(): void {
    if (confirm('Êtes-vous sûr de vouloir annuler cette commande ?')) {
      if (this.panier) {
        this.panierService.annulerCommande('Annulation par le client').pipe(takeUntil(this.destroy$)).subscribe({
          next: () => {
            this.notificationService.success('Commande annulée avec succès');
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
      if (fieldName === 'codePostal') return 'Code postal invalide (5 chiffres)';
      if (fieldName === 'telephone') return 'Numéro de téléphone invalide (10 chiffres)';
      if (fieldName === 'carteNumero') return 'Numéro de carte invalide (16 chiffres)';
      if (fieldName === 'carteExpiry') return 'Date d\'expiration invalide (MM/AA)';
      if (fieldName === 'carteCVV') return 'CVV invalide (3-4 chiffres)';
    }
    
    return 'Champ invalide';
  }
}
