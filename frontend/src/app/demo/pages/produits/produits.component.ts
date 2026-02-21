import { CommonModule } from "@angular/common";
import { ChangeDetectorRef, Component, inject, OnInit } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { ProductService, Product } from "../../../services/product.service";
import { ProductDisplayComponent } from "../../../components/product/product-display/product-display.component";
import { PanierService } from "../../../services/panier.service";
import { firstValueFrom } from "rxjs";
import { FavorisService } from "../../../services/favoris.service";
import { AuthService } from "../../../services/auth.service";
import { CategorieProduit, CategorieProduitService } from "../../../services/categorie-produit.service";
import { Boutique, BoutiqueService } from "../../../services/boutique.service";

interface Pagination {
  totalDocs: number;
  totalPages: number;
  page: number;
  limit: number;
}

interface FilterOptions {
  categories: CategorieProduit[];
  boutiques: Boutique[];
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
  private readonly favorisService: FavorisService = inject(FavorisService);
  private readonly authService: AuthService = inject(AuthService);
  private readonly categorieService = inject(CategorieProduitService);
  private readonly boutiqueService = inject(BoutiqueService);
  private readonly route = inject(ActivatedRoute);

  produits: Product[] = [];
  pagination: Pagination | null = null;
  currentPage = 1;
  pageSize = 10;

  // Formulaire de filtres
  filterForm!: FormGroup;
  showFilters = false;
  filterOptions: FilterOptions = { categories: [], boutiques: [] };

  // États de chargement
  isLoading = false;
  isLoadingFilters = false;

  // État du panier
  panierItemCount = 0;
  private favorisIds = new Set<string>();

  // Informations sur la boutique sélectionnée
  selectedBoutiqueName: string | null = null;

  ngOnInit(): void {
    this.initializeFilterForm();
    this.loadFilterOptions();
    this.checkQueryParams();
    this.loadProducts();
  }

  private checkQueryParams(): void {
    this.route.queryParams.subscribe(params => {
      // Si on vient de la page boutiques avec un paramètre boutique
      if (params['boutique']) {
        this.filterForm.patchValue({ boutiqueId: params['boutique'] });
        this.selectedBoutiqueName = params['nomBoutique'] || null;
      }
    });
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
      const [categories, boutiques] = await Promise.all([
        firstValueFrom(this.categorieService.getAllCategories()),
        firstValueFrom(this.boutiqueService.getAllBoutiques())
      ]);

      this.filterOptions.categories = categories;
      this.filterOptions.boutiques = boutiques;
      Promise.resolve().then(() => {
        this.cdr.detectChanges();
      });
    } catch (error) {
      console.error('Erreur lors du chargement des options de filtre:', error);
      this.filterOptions = { categories: [], boutiques: [] };
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
        this.loadFavoris();
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

  private loadFavoris(): void {
    if (!this.authService.isAuthenticated) {
      this.applyFavorisToProducts([]);
      return;
    }

    this.favorisService.getFavoris().subscribe({
      next: (favoris) => {
        this.applyFavorisToProducts(favoris.map((fav) => fav._id));
      },
      error: (error) => {
        console.error('Erreur chargement favoris:', error);
        this.applyFavorisToProducts([]);
      }
    });
  }

  private applyFavorisToProducts(favoriIds: string[]): void {
    this.favorisIds = new Set(favoriIds);
    this.produits = this.produits.map((product) => ({
      ...product,
      isFavori: this.favorisIds.has(product._id)
    }));
    this.cdr.detectChanges();
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
      params['nom[options]'] = 'i';
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
    const hasPrixMin = formValues.prixMin !== null && formValues.prixMin !== undefined && formValues.prixMin !== '';
    const prixMin = Number(formValues.prixMin);
    if (hasPrixMin && !Number.isNaN(prixMin) && prixMin >= 0) {
      params['prix.prixUnitaire[gte]'] = prixMin;
    }

    const hasPrixMax = formValues.prixMax !== null && formValues.prixMax !== undefined && formValues.prixMax !== '';
    const prixMax = Number(formValues.prixMax);
    if (hasPrixMax && !Number.isNaN(prixMax) && prixMax >= 0) {
      params['prix.prixUnitaire[lte]'] = prixMax;
    }

    // Tri
    if (formValues.sortBy) {
      const sortOrder = formValues.sortOrder === 'desc' ? '-' : '';
      const sortField = formValues.sortBy === 'prix' ? 'prix.prixUnitaire' : formValues.sortBy;
      params.sort = `${sortOrder}${sortField}`;
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
    this.selectedBoutiqueName = null;
    this.currentPage = 1;
    this.loadProducts();
  }

  clearBoutiqueFilter(): void {
    this.filterForm.patchValue({ boutiqueId: '' });
    this.selectedBoutiqueName = null;
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

  onPageSizeChange(): void {
    this.pageSize = Number(this.pageSize) || 10;
    this.currentPage = 1;
    this.loadProducts();
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
    const hasPrixMin = formValues.prixMin !== null && formValues.prixMin !== undefined && formValues.prixMin !== '';
    const hasPrixMax = formValues.prixMax !== null && formValues.prixMax !== undefined && formValues.prixMax !== '';
    return !!(
      formValues.nom?.trim() ||
      formValues.categorieId ||
      formValues.boutiqueId ||
      hasPrixMin ||
      hasPrixMax
    );
  }

  getActiveFiltersCount(): number {
    const formValues = this.filterForm.value;
    let count = 0;
    const hasPrixMin = formValues.prixMin !== null && formValues.prixMin !== undefined && formValues.prixMin !== '';
    const hasPrixMax = formValues.prixMax !== null && formValues.prixMax !== undefined && formValues.prixMax !== '';

    if (formValues.nom?.trim()) count++;
    if (formValues.categorieId) count++;
    if (formValues.boutiqueId) count++;
    if (hasPrixMin) count++;
    if (hasPrixMax) count++;

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
