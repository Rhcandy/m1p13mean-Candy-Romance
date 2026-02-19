import {Component, inject, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router} from '@angular/router';
import { PanierService } from '../../../services/panier.service';
import { NotificationService } from 'src/app/services/notification.service';

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
  createdAt: string;
  updatedAt: string;
}

interface Prix {
  prixUnitaire: number;
  createdAt: string;
  updatedAt: string;
}

interface Promotion {
  _id: string;
  nom: string;
  taux: number;
  categorie?: string;
  dateDebut: string;
  dateFin: string;
}

interface Product {
  promotions?: Promotion[];
  isFavori?: boolean;
  averageRating: number;
  avis: any[];
  _id: string;
  boutiqueId: Boutique;
  categorieId: Categorie;
  nom: string;
  photo: string;
  description?: string;
  variant: Variant[];
  prix: Prix[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  deliveryDate?: string;
}

interface VariantTag {
  label: string;
  key: string;
}

@Component({
  selector: 'app-product-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.scss']
})
export class ProductDisplayComponent implements OnInit {
   
  private readonly notificationService = inject(NotificationService);
  @Input() product!: Product

  variantTags: VariantTag[] = [];
  isAddingToCart = false; // État de chargement pour l'ajout au panier

  constructor(
    private readonly router: Router,
    private readonly panierService: PanierService
  ) { }

  ngOnInit(): void {
    this.variantTags = this.getVariantTags();
  }

  // Formater le prix
  formatPrice(price: number): string {
    return new Intl.NumberFormat('fr-FR', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price) + ' Ar';
  }

  // Récupérer tous les attributs du variant sous forme de tags
  getVariantTags(): VariantTag[] {
    if (!this.product.variant[0]?.attributes) {
      return [];
    }
    
    return Object.entries(this.product.variant[0].attributes).map(([key, value]) => ({
      label: this.formatVariantLabel(key, value),
      key: key
    }));
  }

  // Formater le label du variant (ex: M -> Homme, F -> Femme)
  formatVariantLabel(key: string, value: string): string {
    // Si c'est le sexe, convertir M -> Homme, F -> Femme
    if (key.toLowerCase() === 'sexe') {
      if (value.toUpperCase() === 'M') {
        return 'Homme';
      } else if (value.toUpperCase() === 'F') {
        return 'Femme';
      }
    }
    return value;
  }

  // Vérifier si le produit a du stock
  hasStock(): boolean {
    return (this.product.variant[0]?.qtt || 0) > 0;
  }

  // Gestionnaire du clic sur "Order Now"
  onOrderNow(): void {
    const stock = this.getStockQuantity();
    if (stock <= 0) {
       this.notificationService.error('Erreur', 'Ce produit n\'est pas disponible en stock');
      return;
    }
    
    this.isAddingToCart = true;
    
    this.panierService.ajouterProduit(this.product._id, 1).subscribe({
      next: (panier) => {
        console.log('Produit ajouté au panier:', this.product.nom);
         this.notificationService.success('Success', `"${this.product.nom}" a été ajouté à votre panier !`);
      },
      error: (error) => {
        console.error('Erreur lors de l\'ajout au panier:', error);
        this.notificationService.error('Erreur', 'Erreur lors de l\'ajout au panier. Veuillez réessayer.');
      }
    }).add(() => {
      // Toujours exécuté (success ou error)
      this.isAddingToCart = false;
    });
  }

  // Gérer le clic sur la carte produit pour afficher les détails
  onProductClick(): void {
    this.router.navigate(['/product', this.product._id]);
  }

  // Ajouter au panier rapidement (achat express)
  onBuyNow(event: Event): void {
    event.stopPropagation(); // Empêcher la navigation vers la page détail
  }

  // Obtenir la quantité en stock
  getStockQuantity(): number {
    return this.product?.variant?.[0]?.qtt || 0;
  }

  // Générer les étoiles de rating
  getStars(): number[] {
    const rating = this.product.averageRating || 0;
    const fullStars = Math.floor(rating);
    const stars = [];
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(1); // Étoile pleine
      } else if (i - 0.5 <= rating) {
        stars.push(0.5); // Demi-étoile
      } else {
        stars.push(0); // Étoile vide
      }
    }
    
    return stars;
  }

  // Vérifier si le produit a un rating
  hasRating(): boolean {
    return this.product.averageRating && this.product.averageRating > 0;
  }

  getActivePromotion(): Promotion | null {
    if (!this.product?.promotions?.length) return null;
    const now = new Date();
    return this.product.promotions.find((promo) => this.isPromotionActive(promo, now)) || null;
  }

  getPromotionBadgeText(): string {
    const promo = this.getActivePromotion();
    if (!promo) return '';
    const taux = Number.isFinite(promo.taux) ? promo.taux : 0;
    return `-${taux}%`;
  }

  private isPromotionActive(promo: Promotion, now: Date): boolean {
    if (promo.categorie && promo.categorie !== 'produit') return false;
    const debut = new Date(promo.dateDebut);
    const fin = new Date(promo.dateFin);
    if (Number.isNaN(debut.getTime()) || Number.isNaN(fin.getTime())) return false;
    return now >= debut && now <= fin;
  }
}
