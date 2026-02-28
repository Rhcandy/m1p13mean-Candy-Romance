import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FavoriProduit, FavorisService } from '../../../services/favoris.service';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  private readonly favorisService = inject(FavorisService);
  private readonly cdr = inject(ChangeDetectorRef);

  favoris: FavoriProduit[] = [];
  isLoading = false;

  ngOnInit(): void {
    this.loadFavoris();
  }

  loadFavoris(): void {
    this.isLoading = true;
    this.favorisService.getFavoris().subscribe({
      next: (favoris) => {
        this.favoris = favoris;
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Erreur chargement wishlist:', error);
        this.favoris = [];
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }

  getProductPrice(produit: FavoriProduit): number {
    const prix = Array.isArray(produit.prix) ? produit.prix : [];
    if (!prix.length) return 0;
    const latestPrice = prix[prix.length - 1];
    return Number(latestPrice?.prixUnitaire) || 0;
  }

  formatPrice(price: number): string {
    return new Intl.NumberFormat('fr-FR', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price) + ' Ar';
  }
}
