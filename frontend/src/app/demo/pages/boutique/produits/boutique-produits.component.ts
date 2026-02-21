import { Component, OnInit } from '@angular/core';
import { BoutiqueProduitService, BoutiqueProduit, PaginationResponse } from '../../../../services/boutique-produit.service';

@Component({
  selector: 'app-boutique-produits',
  templateUrl: './boutique-produits.component.html',
  styleUrls: ['./boutique-produits.component.scss']
})
export class BoutiqueProduitsComponent implements OnInit {
  produits: BoutiqueProduit[] = [];
  loading = false;
  error: string | null = null;
  pagination = {
    total: 0,
    page: 1,
    limit: 10,
    totalPages: 0
  };
  filters = {
    nom: '',
    categorieId: ''
  };

  constructor(private boutiqueProduitService: BoutiqueProduitService) {}

  ngOnInit(): void {
    this.loadProduits();
  }

  loadProduits(): void {
    this.loading = true;
    this.error = null;

    const params = {
      page: this.pagination.page,
      limit: this.pagination.limit,
      ...this.filters
    };

    this.boutiqueProduitService.getMyBoutiqueProduits(params).subscribe({
      next: (response: PaginationResponse<BoutiqueProduit>) => {
        if (response.success) {
          this.produits = response.data;
          this.pagination = response.pagination;
        } else {
          this.error = response.message;
        }
      },
      error: (err) => {
        this.error = 'Erreur lors du chargement des produits';
        console.error('Erreur produits:', err);
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  onPageChange(page: number): void {
    this.pagination.page = page;
    this.loadProduits();
  }

  onSearch(): void {
    this.pagination.page = 1;
    this.loadProduits();
  }

  deleteProduit(id: string): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce produit ?')) {
      this.boutiqueProduitService.deleteMyBoutiqueProduit(id).subscribe({
        next: (response) => {
          if (response.success) {
            this.loadProduits();
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
}
