import { CommonModule } from "@angular/common";
import { ChangeDetectorRef, Component, inject, OnInit } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProductService, Product } from "../../../services/product.service";
import { ProductDisplayComponent } from "../../../components/product/product-display/product-display.component";
import { PanierService } from "../../../services/panier.service";
import { firstValueFrom } from "rxjs";

interface Pagination {
  totalDocs: number;
  totalPages: number;
  page: number;
  limit: number;
}

interface FilterOptions {
  categories: Array<{ _id: string; nom: string }>;
  boutiques: Array<{ _id: string; nom: string }>;
}

@Component({
  selector: 'app-produits',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule, ProductDisplayComponent],
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.scss']
})
export class ProduitsComponent implements OnInit {
  private readonly productService = inject(ProductService);
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly fb = inject(FormBuilder);
  private readonly panierService: PanierService = inject(PanierService);
  
  produits: Product[] = [];
  pagination: Pagination | null = null;
  currentPage = 1;
  pageSize = 5;
  
  // Formulaire de filtres
  filterForm!: FormGroup;
  showFilters = false;
  filterOptions: FilterOptions = { categories: [], boutiques: [] };
  
  // États de chargement
  isLoading = false;
  isLoadingFilters = false;
  
  // État du panier
  panierItemCount = 0;

  ngOnInit(): void {
    this.initializeFilterForm();
    this.loadFilterOptions();
    this.loadProducts();
  }

  private initializeFilterForm(): void {
    this.filterForm = this.fb.group({
      nom: [''],
      categorieId: [''],
      boutiqueId: [''],
      prixMin: ['', [Validators.min(0)]],
      prixMax: ['', [Validators.min(0)]],
      sortBy: ['nom'],
      sortOrder: ['asc']
    });
  }

  private async loadFilterOptions(): Promise<void> {
    this.isLoadingFilters = true;
    try {
      // Charger les catégories et boutiques disponibles
      // Note: Vous devrez peut-être créer des endpoints spécifiques pour ces données
      // Pour l'instant, nous utilisons des données mock ou les produits existants
      const categoriesSet = new Set<string>();
      const boutiquesSet = new Set<string>();
      
      // Récupérer tous les produits pour extraire les catégories et boutiques uniques
      const allProductsResponse = await firstValueFrom(this.productService.getAllProducts({ limit: 5}));
      if (allProductsResponse) {
        allProductsResponse.items.forEach(product => {
          if (product.categorieId) {
            categoriesSet.add(JSON.stringify(product.categorieId));
          }
          if (product.boutiqueId) {
            boutiquesSet.add(JSON.stringify(product.boutiqueId));
          }
        });
      }
      
      this.filterOptions.categories = Array.from(categoriesSet).map(cat => JSON.parse(cat));
      this.filterOptions.boutiques = Array.from(boutiquesSet).map(bout => JSON.parse(bout));
      Promise.resolve().then(() => {
        this.cdr.detectChanges();
      });
    } catch (error) {
      console.error('Erreur lors du chargement des options de filtre:', error);
       this.cdr.detectChanges();
    } finally {
      this.isLoadingFilters = false;
       this.cdr.detectChanges();
    }
  }

  loadProducts(): void {
    this.isLoading = true;
    const params = this.buildQueryParams();
    
    this.productService.getAllProducts(params).subscribe({
      next: (result) => {
        this.produits = result.items;
        
        this.pagination = result.pagination;
        this.isLoading = false;
         Promise.resolve().then(() => {
          this.cdr.detectChanges();
        });
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des produits:', error);
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }

  private buildQueryParams(): any {
    const params: any = {
      page: this.currentPage,
      limit: this.pageSize
    };

    const formValues = this.filterForm.value;

    // Filtre par nom (recherche texte)
    if (formValues.nom?.trim()) {
      params['nom[regex]'] = formValues.nom.trim();
    }

    // Filtre par catégorie
    if (formValues.categorieId) {
      params.categorieId = formValues.categorieId;
    }

    // Filtre par boutique
    if (formValues.boutiqueId) {
      params.boutiqueId = formValues.boutiqueId;
    }

    // Filtre par prix (intervalle)
    if (formValues.prixMin && formValues.prixMin > 0) {
      params['prix[gte]'] = formValues.prixMin;
    }

    if (formValues.prixMax && formValues.prixMax > 0) {
      params['prix[lte]'] = formValues.prixMax;
    }

    // Tri
    if (formValues.sortBy) {
      const sortOrder = formValues.sortOrder === 'desc' ? '-' : '';
      params.sort = `${sortOrder}${formValues.sortBy}`;
    }

    return params;
  }

  applyFilters(): void {
    this.currentPage = 1; // Réinitialiser à la première page
    this.loadProducts();
  }

  resetFilters(): void {
    this.filterForm.reset();
    this.filterForm.patchValue({
      sortBy: 'nom',
      sortOrder: 'asc'
    });
    this.currentPage = 1;
    this.loadProducts();
  }

  toggleFilters(): void {
    this.showFilters = !this.showFilters;
  }

  changePage(page: number): void {
    if (page >= 1 && this.pagination && page <= this.pagination.totalPages) {
      this.currentPage = page;
      this.loadProducts();
    }
  }

  getPagesArray(): number[] {
    if (!this.pagination) return [];
    
    const pages: number[] = [];
    const start = Math.max(1, this.pagination.page - 2);
    const end = Math.min(this.pagination.totalPages, this.pagination.page + 2);
    
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    
    return pages;
  }

  trackProductById(index: number, product: Product): string {
    return product._id;
  }

  trackPageById(index: number, page: number): number {
    return page;
  }

  // Méthodes pour gérer l'état des filtres
  hasActiveFilters(): boolean {
    const formValues = this.filterForm.value;
    return !!(
      formValues.nom?.trim() ||
      formValues.categorieId ||
      formValues.boutiqueId ||
      (formValues.prixMin && formValues.prixMin > 0) ||
      (formValues.prixMax && formValues.prixMax > 0)
    );
  }

  getActiveFiltersCount(): number {
    const formValues = this.filterForm.value;
    let count = 0;
    
    if (formValues.nom?.trim()) count++;
    if (formValues.categorieId) count++;
    if (formValues.boutiqueId) count++;
    if (formValues.prixMin && formValues.prixMin > 0) count++;
    if (formValues.prixMax && formValues.prixMax > 0) count++;
    
    return count;
  }

  /**
   * Ajouter un produit au panier
   */
  addToPanier(product: Product, quantity: number = 1): void {
    if (!product._id) {
      console.error('Produit invalide');
      return;
    }

    // Vérifier le stock disponible
    const stockDisponible = product.variant?.[0]?.qtt || 999;
    if (quantity > stockDisponible) {
      alert(`Stock insuffisant. Seulement ${stockDisponible} articles disponibles.`);
      return;
    }

    this.panierService.addToPanier({
      productId: product._id,
      quantity: quantity
    }).subscribe({
      next: (response) => {
        console.log('Produit ajouté au panier:', response.data);
        // Mettre à jour le compteur d'articles si nécessaire
        this.updatePanierItemCount();
        // Afficher une notification de succès
        this.showNotification('Produit ajouté au panier avec succès !', 'success');
      },
      error: (error) => {
        console.error('Erreur lors de l\'ajout au panier:', error);
        this.showNotification('Erreur lors de l\'ajout au panier', 'error');
      }
    });
  }

  /**
   * Ajouter rapidement un produit au panier (quantité = 1)
   */
  quickAddToPanier(product: Product): void {
    this.addToPanier(product, 1);
  }

  /**
   * Mettre à jour le compteur d'articles dans le panier
   */
  private updatePanierItemCount(): void {
    this.panierService.getPanier().subscribe({
      next: (response) => {
        this.panierItemCount = response.data.qtt || 0;
      },
      error: (error) => {
        console.error('Erreur lors de la mise à jour du compteur:', error);
      }
    });
  }

  /**
   * Afficher une notification à l'utilisateur
   */
  private showNotification(message: string, type: 'success' | 'error' = 'success'): void {
    // Implémenter selon votre système de notification
    // Pour l'instant, on utilise une simple alerte
    if (type === 'success') {
      // Vous pourriez utiliser un toast service ici
      alert(message);
    } else {
      alert(message);
    }
  }

  /**
   * Vérifier si un produit est en stock
   */
  isProductInStock(product: Product): boolean {
    const stock = product.variant?.[0]?.qtt || 0;
    return stock > 0;
  }

  /**
   * Obtenir le stock disponible d'un produit
   */
  getProductStock(product: Product): number {
    return product.variant?.[0]?.qtt || 0;
  }

  /**
   * Formater le prix d'un produit
   */
  formatProductPrice(product: Product): string {
    const prix = product.prix?.[0]?.prixUnitaire || 0;
    return this.panierService.formatMontant(prix);
  }
}