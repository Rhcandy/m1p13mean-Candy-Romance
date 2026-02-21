import { Component, OnInit } from '@angular/core';
import { BoutiquePromotionService, BoutiquePromotion, PaginationResponse } from '../../../../services/boutique-promotion.service';

@Component({
  selector: 'app-boutique-promotions',
  templateUrl: './boutique-promotions.component.html',
  styleUrls: ['./boutique-promotions.component.scss']
})
export class BoutiquePromotionsComponent implements OnInit {
  promotions: BoutiquePromotion[] = [];
  loading = false;
  error: string | null = null;
  pagination = {
    total: 0,
    page: 1,
    limit: 10,
    totalPages: 0
  };
  filters = {
    categorie: ''
  };

  constructor(private boutiquePromotionService: BoutiquePromotionService) {}

  ngOnInit(): void {
    this.loadPromotions();
  }

  loadPromotions(): void {
    this.loading = true;
    this.error = null;

    const params = {
      page: this.pagination.page,
      limit: this.pagination.limit,
      ...this.filters
    };

    this.boutiquePromotionService.getMyBoutiquePromotions(params).subscribe({
      next: (response: PaginationResponse<BoutiquePromotion>) => {
        if (response.success) {
          this.promotions = response.data;
          this.pagination = response.pagination;
        } else {
          this.error = response.message;
        }
      },
      error: (err) => {
        this.error = 'Erreur lors du chargement des promotions';
        console.error('Erreur promotions:', err);
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  onPageChange(page: number): void {
    this.pagination.page = page;
    this.loadPromotions();
  }

  onFilter(): void {
    this.pagination.page = 1;
    this.loadPromotions();
  }

  deletePromotion(id: string): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette promotion ?')) {
      this.boutiquePromotionService.deleteMyBoutiquePromotion(id).subscribe({
        next: (response) => {
          if (response.success) {
            this.loadPromotions();
          } else {
            this.error = response.message;
          }
        },
        error: (err) => {
          this.error = 'Erreur lors de la suppression';
          console.error('Erreur suppression:', err);
        }
      });
    }
  }

  getCategorieLabel(categorie: string): string {
    const labels: { [key: string]: string } = {
      'produit': 'Produit',
      'acheteur': 'Acheteur'
    };
    return labels[categorie] || categorie;
  }

  getCategorieColor(categorie: string): string {
    const colors: { [key: string]: string } = {
      'produit': 'primary',
      'acheteur': 'success'
    };
    return colors[categorie] || 'secondary';
  }
}
