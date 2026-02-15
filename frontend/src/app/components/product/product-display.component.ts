import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  
  @Input() product!: Product

  variantTags: VariantTag[] = [];

  constructor() { }

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
      label: value,
      key: key
    }));
  }

  // Vérifier si le produit a du stock
  hasStock(): boolean {
    return (this.product.variant[0]?.qtt || 0) > 0;
  }

  // Gestionnaire du clic sur "Order Now"
  onOrderNow(): void {
    console.log('Commander le produit:', this.product.nom);
    // Ajouter votre logique de commande ici
  }
}
