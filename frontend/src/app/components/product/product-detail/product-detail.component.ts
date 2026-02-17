import { ChangeDetectorRef, Component, inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PanierService } from '../../../services/panier.service';
import { ProductService } from '../../../services/product.service';
import { AvisService } from '../../../services/avis.service';
import { NotificationService } from '../../../services/notification.service';
import { AvisComponent } from '../../avis/avis.component';
import { lastValueFrom, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

interface Boutique {
  _id: string;
  nom: string;
}

interface Categorie {
  _id: string;
  nom: string;
}

interface VariantAttributes {
  [key: string]: string;
}

interface Variant {
  attributes: VariantAttributes;
  qtt: number;
  reserved?: number;
  createdAt: string;
  updatedAt: string;
}

interface Prix {
  prixUnitaire: number;
  createdAt: string;
  updatedAt: string;
}

interface Product {
  averageRating: number;
  avis: any[];
  _id: string;
  boutiqueId: Boutique;
  categorieId: Categorie;
  nom: string;
  photo: string;
  variant: Variant[];
  prix: Prix[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  deliveryDate?: string;
  description?: string;
}

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, AvisComponent],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly notificationService = inject(NotificationService);
  private readonly destroy$ = new Subject<void>();
  
  product: Product | null = null;
  isLoading = true;
  selectedQuantity = 1;
  productAvis: any[] = [];
  isAddingToCart = false;
  
  addToCartForm: FormGroup;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly fb: FormBuilder,
    private readonly panierService: PanierService,
    private readonly productService: ProductService,
    private readonly avisService: AvisService
  ) {
    this.addToCartForm = this.fb.group({
      quantity: [1, [Validators.required, Validators.min(1), Validators.max(10)]]
    });
  }

  ngOnInit(): void {
    this.route.params.pipe(takeUntil(this.destroy$)).subscribe(params => {
      const productId = params['id'];
      if (productId) {
        this.loadProductDetail(productId);
      } else {
        this.router.navigate(['/produits']);
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  async loadProductDetail(productId: string): Promise<void> {
    this.isLoading = true;
    try {
      this.product = await lastValueFrom(this.productService.getProductById(productId));
      
      if (!this.product) {
        this.router.navigate(['/produits']);
        return;
      }
      // Valider le formulaire avec le stock disponible
      const maxStock = this.getStockQuantity();
      const validators = [
        Validators.required,
        Validators.min(1)
      ];
      
      // N'ajouter la validation max que s'il y a du stock
      if (maxStock > 0) {
        validators.push(Validators.max(maxStock));
      }
      
      this.addToCartForm.get('quantity')?.setValidators(validators);
      this.addToCartForm.get('quantity')?.updateValueAndValidity();
      
      // Charger les avis du produit
      this.loadProductAvis(this.product.avis);
      
      Promise.resolve().then(() => {
        this.cdr.detectChanges();
      });
    } catch (error) {
      console.error('Erreur lors du chargement du produit:', error);
      this.router.navigate(['/produits']);
      this.cdr.detectChanges();
    } finally {
      this.isLoading = false;
      this.cdr.detectChanges();
    }
  }

  formatPrice(price: number): string {
    return new Intl.NumberFormat('fr-FR', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price) + ' Ar';
  }

  getStars(): number[] {
    if (!this.product?.averageRating) return [];
    
    const rating = this.product.averageRating;
    const stars = [];
    
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(1);
      } else if (i - 0.5 <= rating) {
        stars.push(0.5);
      } else {
        stars.push(0);
      }
    }
    
    return stars;
  }

  hasRating(): boolean {
    return this.product?.averageRating && this.product.averageRating > 0;
  }

  hasStock(): boolean {
    const availableStock = this.getAvailableStock();
    return availableStock > 0;
  }

  getStockQuantity(): number {
    return this.product?.variant && this.product.variant.length > 0 ? (this.product.variant[0]?.qtt || 0) : 0;
  }

  getAvailableStock(): number {
    if (!this.product?.variant || this.product.variant.length === 0) return 0;
    
    const variant = this.product.variant[0];
    const totalStock = variant.qtt || 0;
    const reservedStock = variant.reserved || 0;
    const availableStock = totalStock - reservedStock;
    
    return Math.max(0, availableStock);
  }

  onQuantityChange(): void {
    const quantity = this.addToCartForm.get('quantity')?.value;
    const maxStock = this.getAvailableStock();
    if (quantity > maxStock) {
      this.addToCartForm.get('quantity')?.setValue(maxStock);
    }
  }

  onAddToCart(): void {
    if (!this.product || !this.hasStock() || this.addToCartForm.invalid) {
      this.notificationService.warning('Stock insuffisant ou panier invalide');
      return;
    }

    const quantity = this.addToCartForm.get('quantity')?.value || 1;
    const availableStock = this.getAvailableStock();
    
    // Vérifier si la quantité demandée est disponible
    if (quantity > availableStock) {
      this.notificationService.error(
        `Stock insuffisant. Seulement ${availableStock} articles disponibles.`
      );
      return;
    }
    
    this.isAddingToCart = true;
    
    this.panierService.ajouterProduit(this.product._id, quantity)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          this.notificationService.success(
            `✅ ${this.product?.nom} ajouté au panier (x${quantity})`
          );
          // Réinitialiser la quantité
          this.addToCartForm.get('quantity')?.setValue(1);
          
          // Émettre un événement global pour rafraîchir le panier
          this.panierService.notifyPanierUpdated();
        },
        error: (error) => {
          console.error('Erreur lors de l\'ajout au panier:', error);
          this.notificationService.error(
            'Erreur lors de l\'ajout au panier. Veuillez réessayer.'
          );
        }
      }).add(() => {
        this.isAddingToCart = false;
        this.cdr.detectChanges();
      });
  }

  incrementQuantity(): void {
    const currentValue = this.addToCartForm.get('quantity')?.value || 1;
    const maxValue = this.getStockQuantity();
    if (currentValue < maxValue) {
      this.addToCartForm.get('quantity')?.setValue(currentValue + 1);
    }
  }

  decrementQuantity(): void {
    const currentValue = this.addToCartForm.get('quantity')?.value || 1;
    if (currentValue > 1) {
      this.addToCartForm.get('quantity')?.setValue(currentValue - 1);
    }
  }

  onBack(): void {
    this.router.navigate(['/produits']);
  }

  getVariantAttributes(): string[] {
    if (!this.product?.variant?.length || !this.product.variant[0]?.attributes) {
      return [];
    }
    
    return Object.entries(this.product.variant[0].attributes).map(([key, value]) => {
      // Formater les clés pour l'affichage
      let formattedKey = key.charAt(0).toUpperCase() + key.slice(1);
      if (formattedKey === 'Sexe') {
        return `${formattedKey}: ${value === 'M' ? 'Homme' : 'Femme'}`;
      }
      return `${formattedKey}: ${value}`;
    });
  }

  /**
   * Charger les avis du produit
   */
  loadProductAvis(productAvis: any[]): void {
    // Initialiser avec les données d'exemple si aucun avis n'est fourni
    if (!productAvis || productAvis.length === 0) {
      this.productAvis = [
        {
          "_id": "1",
          "userId": "60f1b2b3c4d5e6f7g8h9i0j1",
          "produitId": "60f1b2b3c4d5e6f7g8h9i0j2",
          "note": 4,
          "commentaire": "Excellent produit, je recommande vivement",
          "createdAt": "2026-02-16T14:20:38.319Z",
          "updatedAt": "2026-02-16T14:20:38.319Z"
        }
      ];
    } else {
      this.productAvis = productAvis;
    }
    this.cdr.detectChanges();
  }
}
