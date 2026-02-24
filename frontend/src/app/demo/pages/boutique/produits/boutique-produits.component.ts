import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BoutiqueProduitService, BoutiqueProduit, PaginationResponse, BoutiqueProduitQueryParams } from '../../../../services/boutique-produit.service';
import { NotificationService } from 'src/app/services/notification.service';
import { Router } from '@angular/router';
import { BoutiqueService } from '../../../../services/boutique.service';
import { CategorieProduit, CategorieProduitService } from 'src/app/services/categorie-produit.service';
import { Boutique } from './../../../../services/boutique.service';
import { ProductService } from 'src/app/services/product.service';
import { BoutiquePromotionService, BoutiquePromotion } from 'src/app/services/boutique-promotion.service';
import { AuthService } from 'src/app/services/auth.service';
import { forkJoin, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

// ReprÃ©sentation interne d'un attribut (clÃ©/valeur libre)
interface AttrEntry { key: string; value: string; }

// Variante interne avec liste d'attributs dynamique
interface VariantForm {
  attrList: AttrEntry[];
  qtt: number;
}

@Component({
  selector: 'app-boutique-produits',
  templateUrl: './boutique-produits.component.html',
  styleUrls: ['./boutique-produits.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class BoutiqueProduitsComponent implements OnInit {
  boutique: Boutique | null = null;
  produits: BoutiqueProduit[] = [];
  categories: CategorieProduit[] = [];
  loading = false;
  loadingCategories = false;

  pagination = { total: 0, page: 1, limit: 12, totalPages: 0 };
  filters = { nom: '', categorieId: '' };
  stockByProduitId: Record<string, { totalStock: number; availableStock: number }> = {};
  loadingStocks = false;

  // â”€â”€ Fiche dÃ©tail â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  showDetail = false;
  selectedProduit: BoutiqueProduit | null = null;
  showPromotionModal = false;
  selectedProduitForPromotion: BoutiqueProduit | null = null;
  promotionsDisponibles: BoutiquePromotion[] = [];
  selectedPromotionIds = new Set<string>();
  loadingPromotionsDisponibles = false;
  savingPromotions = false;
  private readonly currentUserId: string | null;

  openDetail(produit: BoutiqueProduit): void {
    this.selectedProduit = produit;
    this.showDetail = true;
  }

  closeDetail(): void {
    this.showDetail = false;
    // Petit dÃ©lai pour laisser l'animation se terminer
    setTimeout(() => { this.selectedProduit = null; }, 300);
  }

  // â”€â”€ Modal Ajout â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  showAddModal = false;
  addProduitForm = {
    nom: '',
    description: '',
    prix: 0,
    categorieId: '',
    photo: null as File | null,
    variant: [] as VariantForm[]
  };
  isSubmitting = false;

  // â”€â”€ Modal Modification â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  showEditModal = false;
  editProduitForm = {
    id: '',
    nom: '',
    description: '',
    prix: 0,
    categorieId: '',
    photo: null as File | null,
    currentPhoto: '',
    variant: [] as VariantForm[]
  };
  isUpdating = false;

  constructor(
    private readonly boutiqueProduitService: BoutiqueProduitService,
    private readonly cdr: ChangeDetectorRef,
    private readonly notificationService: NotificationService,
    private readonly router: Router,
    private readonly categorieService: CategorieProduitService,
    private readonly boutiqueService: BoutiqueService,
    private readonly productService: ProductService,
    private readonly boutiquePromotionService: BoutiquePromotionService,
    private readonly authService: AuthService
  ) {
    this.currentUserId = this.authService.currentUser?.id || this.authService.getUser()?.id || null;
  }

  ngOnInit(): void {
    this.checkBoutiqueExists();
  }

  // â”€â”€ Initialisation â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

  checkBoutiqueExists(): void {
    this.boutiqueService.getMyBoutique().subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.boutique = response.data;

          if (!response.data.isActive) {
            this.notificationService.info(
              'Boutique inactive',
              'Votre boutique doit etre active pour gerer les produits.'
            );
            this.router.navigate(['/boutique/informations']);
            return;
          }

          this.loadCategories();
          this.loadProduits();
        } else {
          this.notificationService.warning('Attention', 'Vous devez creer une boutique avant de gerer des produits');
          this.router.navigate(['/boutique/boxes']);
        }
      },
      error: (err) => {
        if (err.status === 404 || err.error?.message?.includes('Boutique non trouvee')) {
          this.notificationService.warning('Attention', 'Vous devez creer une boutique avant de gerer des produits');
          this.router.navigate(['/boutique/boxes']);
        } else {
          this.notificationService.error('Erreur', 'Erreur lors de la verification de la boutique');
        }
      }
    });
  }

  loadCategories(): void {
    this.loadingCategories = true;
    this.categorieService.getAllCategories().subscribe({
      next: (response) => { this.categories = response; },
      error: () => { this.notificationService.error('Erreur', 'Erreur lors du chargement des catÃ©gories'); },
      complete: () => { this.loadingCategories = false; }
    });
  }

  loadProduits(): void {
    this.loading = true;
    const params: BoutiqueProduitQueryParams = {
      page: this.pagination.page,
      limit: this.pagination.limit,
      boutiqueId: this.boutique?._id,
      sort: 'nom'
    };
    if (this.filters.categorieId?.trim()) params.categorieId = this.filters.categorieId.trim();
    if (this.filters.nom?.trim()) params.nom = { regex: this.filters.nom.trim(), options: 'i' };

    this.boutiqueProduitService.getMyBoutiqueProduits(params).subscribe({
      next: (response: PaginationResponse<BoutiqueProduit>) => {
        if (response.success) {
          this.produits = response.items;
          this.pagination = response.pagination;
          this.loadStocksDisponibles();
          // Mettre Ã  jour le produit sÃ©lectionnÃ© si la fiche est ouverte
          if (this.selectedProduit) {
            const updated = this.produits.find(p => p._id === this.selectedProduit!._id);
            if (updated) this.selectedProduit = updated;
          }
          Promise.resolve().then(() => this.cdr.detectChanges());
        }
        this.loading = false;
      },
      error: () => {
        this.notificationService.error('Erreur', 'Erreur lors du chargement des produits');
        this.loading = false;
        this.cdr.detectChanges();
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

  // â”€â”€ Suppression â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

  deleteProduit(id: string): void {
    if (confirm('ÃŠtes-vous sÃ»r de vouloir supprimer ce produit ?')) {
      this.boutiqueProduitService.deleteMyBoutiqueProduit(id).subscribe({
        next: (response) => {
          if (response.success) {
            this.notificationService.success('Produit supprimÃ© avec succÃ¨s');
            this.loadProduits();
          } else {
            this.notificationService.error('Erreur', response.message || 'Erreur lors de la suppression');
          }
        },
        error: () => { this.notificationService.error('Erreur', 'Erreur lors de la suppression'); }
      });
    }
  }

  // â”€â”€ Helpers affichage â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

  calculateTotalStock(produit: BoutiqueProduit): number {
    if (!produit.variant || !Array.isArray(produit.variant)) return 0;
    return produit.variant.reduce((sum, v) => sum + (v.qtt || 0), 0);
  }

  calculateAvailableStockLocal(produit: BoutiqueProduit): number {
    if (!produit.variant || !Array.isArray(produit.variant)) return 0;
    return produit.variant.reduce((sum, v: any) => {
      const qtt = Number(v?.qtt) || 0;
      const reserved = Number(v?.reserved) || 0;
      return sum + Math.max(0, qtt - reserved);
    }, 0);
  }

  private loadStocksDisponibles(): void {
    if (!this.produits.length) {
      this.stockByProduitId = {};
      return;
    }

    this.loadingStocks = true;
    const requests = this.produits.map((produit) =>
      this.productService.getProductStock(produit._id).pipe(
        map((stock) => ({
          productId: produit._id,
          totalStock: Number(stock.totalStock) || 0,
          availableStock: Number(stock.availableStock) || 0
        })),
        catchError(() =>
          of({
            productId: produit._id,
            totalStock: this.calculateTotalStock(produit),
            availableStock: this.calculateAvailableStockLocal(produit)
          })
        )
      )
    );

    forkJoin(requests).subscribe({
      next: (stocks) => {
        const nextMap: Record<string, { totalStock: number; availableStock: number }> = {};
        stocks.forEach((stock) => {
          nextMap[stock.productId] = {
            totalStock: stock.totalStock,
            availableStock: stock.availableStock
          };
        });
        this.stockByProduitId = nextMap;
      },
      error: (error) => {
        console.error('Erreur chargement stocks produits:', error);
      },
      complete: () => {
        this.loadingStocks = false;
        this.cdr.detectChanges();
      }
    });
  }

  getAvailableStock(produit: BoutiqueProduit | null): number {
    if (!produit) return 0;
    return this.stockByProduitId[produit._id]?.availableStock ?? this.calculateAvailableStockLocal(produit);
  }

  getTotalStock(produit: BoutiqueProduit | null): number {
    if (!produit) return 0;
    return this.stockByProduitId[produit._id]?.totalStock ?? this.calculateTotalStock(produit);
  }

  getPagesArray(): number[] {
    return Array.from({ length: this.pagination.totalPages }, (_, i) => i + 1);
  }

  getCategorieNom(categorieId: any): string {
    if (categorieId && typeof categorieId === 'object' && categorieId.nom) {
      return categorieId.nom;
    }
    const cat = this.categories.find(c => c._id === categorieId);
    return cat ? cat.nom : 'Non catÃ©gorisÃ©';
  }

  /** Transforme un objet attributes en tableau [{key, value}] pour l'affichage */
  getVariantAttrs(attributes: any): { key: string; value: string }[] {
    if (!attributes) return [];
    return Object.entries(attributes).map(([key, value]) => ({ key, value: String(value) }));
  }

  openPromotionModal(produit: BoutiqueProduit): void {
    this.selectedProduitForPromotion = produit;
    this.selectedPromotionIds = new Set(this.extractPromotionIds(produit.promotions));
    this.showPromotionModal = true;
    this.loadPromotionsDisponibles();
  }

  closePromotionModal(): void {
    this.showPromotionModal = false;
    this.selectedProduitForPromotion = null;
    this.selectedPromotionIds = new Set<string>();
    this.savingPromotions = false;
  }

  private loadPromotionsDisponibles(): void {
    this.loadingPromotionsDisponibles = true;
    this.boutiquePromotionService.getMyBoutiquePromotions({
      page: 1,
      limit: 1000,
      categorie: 'produit'
    }).subscribe({
      next: (response) => {
        const allPromotions = response?.data || [];
        this.promotionsDisponibles = allPromotions.filter((promotion) => this.isPromotionOwnedByCurrentUser(promotion));
      },
      error: (error) => {
        console.error('Erreur chargement promotions disponibles:', error);
        this.notificationService.error('Erreur', 'Impossible de charger les promotions');
        this.promotionsDisponibles = [];
      },
      complete: () => {
        this.loadingPromotionsDisponibles = false;
        this.cdr.detectChanges();
      }
    });
  }

  isPromotionSelected(promotionId: string): boolean {
    return this.selectedPromotionIds.has(promotionId);
  }

  togglePromotionSelection(promotionId: string, checked: boolean): void {
    if (checked) {
      this.selectedPromotionIds.add(promotionId);
      return;
    }
    this.selectedPromotionIds.delete(promotionId);
  }

  saveProduitPromotions(): void {
    if (!this.selectedProduitForPromotion?._id) {
      return;
    }

    this.savingPromotions = true;
    const promotionIds = Array.from(this.selectedPromotionIds);
    this.boutiqueProduitService.updateProduitPromotions(this.selectedProduitForPromotion._id, promotionIds).subscribe({
      next: (response) => {
        if (!response.success) {
          this.notificationService.error('Erreur', response.message || 'Association impossible');
          return;
        }

        const updatedPromotions = response.data?.promotions || [];
        this.produits = this.produits.map((produit) =>
          produit._id === this.selectedProduitForPromotion!._id
            ? { ...produit, promotions: updatedPromotions }
            : produit
        );

        if (this.selectedProduit?._id === this.selectedProduitForPromotion._id) {
          this.selectedProduit = {
            ...this.selectedProduit,
            promotions: updatedPromotions
          };
        }

        this.notificationService.success('Promotions associees avec succes');
        this.closePromotionModal();
      },
      error: (error) => {
        console.error('Erreur association promotions:', error);
        this.notificationService.error('Erreur', 'Erreur lors de l association des promotions');
      },
      complete: () => {
        this.savingPromotions = false;
        this.cdr.detectChanges();
      }
    });
  }

  isPromotionActive(promotion: BoutiquePromotion): boolean {
    const now = new Date();
    const debut = new Date(promotion.dateDebut);
    const fin = new Date(promotion.dateFin);
    return !Number.isNaN(debut.getTime()) && !Number.isNaN(fin.getTime()) && now >= debut && now <= fin;
  }

  getSelectedPromotionsTotalTaux(): number {
    const selectedIds = this.selectedPromotionIds;
    const total = this.promotionsDisponibles
      .filter((promotion) => selectedIds.has(promotion._id))
      .reduce((sum, promotion) => sum + (Number(promotion.taux) || 0), 0);
    return Math.min(100, total);
  }

  getProduitActivePromotions(produit: BoutiqueProduit | null): BoutiquePromotion[] {
    const promotions = Array.isArray(produit?.promotions) ? produit.promotions as BoutiquePromotion[] : [];
    return promotions.filter((promotion) => this.isPromotionActive(promotion));
  }

  getProduitTotalTauxPromotion(produit: BoutiqueProduit | null): number {
    const total = this.getProduitActivePromotions(produit)
      .reduce((sum, promotion) => sum + (Number(promotion.taux) || 0), 0);
    return Math.min(100, total);
  }

  getPromotionLineLabel(promotion: BoutiquePromotion): string {
    return `${promotion.nom} (-${promotion.taux}%)`;
  }

  private extractPromotionIds(promotions: any[] | undefined): string[] {
    if (!Array.isArray(promotions)) return [];
    return promotions
      .map((promotion: any) => {
        if (typeof promotion === 'string') return promotion;
        return promotion?._id || null;
      })
      .filter((id): id is string => !!id);
  }

  private isPromotionOwnedByCurrentUser(promotion: BoutiquePromotion): boolean {
    if (!this.currentUserId) return true;
    if (typeof promotion.createdBy === 'string') {
      return promotion.createdBy === this.currentUserId;
    }
    return promotion.createdBy?._id === this.currentUserId;
  }

  // â”€â”€ Conversion : objet attributes â†” attrList â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

  private attrsToList(attributes: any): AttrEntry[] {
    if (!attributes) return [];
    return Object.entries(attributes).map(([key, value]) => ({ key, value: String(value) }));
  }

  private listToAttrs(attrList: AttrEntry[]): any {
    const obj: any = {};
    attrList.forEach(({ key, value }) => { if (key.trim()) obj[key.trim()] = value; });
    return obj;
  }

  private variantsToFormData(variants: VariantForm[]): any[] {
    return variants
      .filter(v => v.qtt > 0)
      .map(v => ({ attributes: this.listToAttrs(v.attrList), qtt: v.qtt }));
  }

  // â”€â”€ Modal Ajout â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

  addProduit(): void {
    this.resetAddForm();
    this.showAddModal = true;
  }

  resetAddForm(): void {
    this.addProduitForm = { nom: '', description: '', prix: 0, categorieId: '', photo: null, variant: [] };
  }

  closeAddModal(): void {
    this.showAddModal = false;
    this.resetAddForm();
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) this.addProduitForm.photo = file;
  }

  addVariant(): void {
    this.addProduitForm.variant.push({ attrList: [], qtt: 1 });
  }

  removeVariant(index: number): void {
    this.addProduitForm.variant.splice(index, 1);
  }

  addAttr(variantIndex: number): void {
    this.addProduitForm.variant[variantIndex].attrList.push({ key: '', value: '' });
  }

  removeAttr(variantIndex: number, attrIndex: number): void {
    this.addProduitForm.variant[variantIndex].attrList.splice(attrIndex, 1);
  }

  submitNewProduit(): void {
    if (!this.addProduitForm.nom || !this.addProduitForm.prix) {
      this.notificationService.error('Erreur', 'Veuillez remplir les champs obligatoires (nom et prix)');
      return;
    }
    for (let i = 0; i < this.addProduitForm.variant.length; i++) {
      if (!this.addProduitForm.variant[i].qtt || this.addProduitForm.variant[i].qtt < 1) {
        this.notificationService.error('Erreur', `La variante ${i + 1} doit avoir une quantitÃ© supÃ©rieure Ã  0`);
        return;
      }
    }

    this.isSubmitting = true;
    const formData = new FormData();
    formData.append('nom', this.addProduitForm.nom);
    formData.append('description', this.addProduitForm.description);
    formData.append('prix', JSON.stringify([{ prixUnitaire: this.addProduitForm.prix }]));
    formData.append('boutiqueId', this.boutique?._id || '');
    formData.append('categorieId', this.addProduitForm.categorieId);
    if (this.addProduitForm.variant.length > 0) {
      formData.append('variant', JSON.stringify(this.variantsToFormData(this.addProduitForm.variant)));
    }
    if (this.addProduitForm.photo) {
      formData.append('photo', this.addProduitForm.photo);
    }

    this.boutiqueProduitService.createMyBoutiqueProduit(formData).subscribe({
      next: (response) => {
        if (response.success) {
          this.notificationService.success('Produit ajoutÃ© avec succÃ¨s');
          this.closeAddModal();
          this.loadProduits();
        } else {
          this.notificationService.error('Erreur', response.message);
        }
        this.isSubmitting = false;
      },
      error: (err) => {
        this.notificationService.error('Erreur', 'Erreur lors de l\'ajout du produit');
        console.error(err);
        this.isSubmitting = false;
      }
    });
  }

  // â”€â”€ Modal Modification â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

  editProduit(produit: BoutiqueProduit): void {
    const catId = typeof produit.categorieId === 'object'
      ? (produit.categorieId as any)._id
      : produit.categorieId;

    this.editProduitForm = {
      id: produit._id,
      nom: produit.nom,
      description: produit.description || '',
      prix: produit.prix?.[0]?.prixUnitaire || 0,
      categorieId: catId,
      photo: null,
      currentPhoto: produit.photo || '',
      variant: (produit.variant || []).map(v => ({
        attrList: this.attrsToList(v.attributes),
        qtt: v.qtt || 1
      }))
    };
    this.showEditModal = true;
  }

  closeEditModal(): void {
    this.showEditModal = false;
    this.editProduitForm = {
      id: '', nom: '', description: '', prix: 0, categorieId: '',
      photo: null, currentPhoto: '', variant: []
    };
  }

  onEditFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) this.editProduitForm.photo = file;
  }

  addEditVariant(): void {
    this.editProduitForm.variant.push({ attrList: [], qtt: 1 });
  }

  removeEditVariant(index: number): void {
    this.editProduitForm.variant.splice(index, 1);
  }

  addEditAttr(variantIndex: number): void {
    this.editProduitForm.variant[variantIndex].attrList.push({ key: '', value: '' });
  }

  removeEditAttr(variantIndex: number, attrIndex: number): void {
    this.editProduitForm.variant[variantIndex].attrList.splice(attrIndex, 1);
  }

  updateProduit(): void {
    if (!this.editProduitForm.nom || !this.editProduitForm.prix) {
      this.notificationService.error('Erreur', 'Veuillez remplir les champs obligatoires');
      return;
    }
    for (let i = 0; i < this.editProduitForm.variant.length; i++) {
      if (!this.editProduitForm.variant[i].qtt || this.editProduitForm.variant[i].qtt < 1) {
        this.notificationService.error('Erreur', `La variante ${i + 1} doit avoir une quantitÃ© supÃ©rieure Ã  0`);
        return;
      }
    }

    this.isUpdating = true;
    const formData = new FormData();
    formData.append('nom', this.editProduitForm.nom);
    formData.append('description', this.editProduitForm.description);
    formData.append('prix', JSON.stringify([{ prixUnitaire: this.editProduitForm.prix }]));
    formData.append('categorieId', this.editProduitForm.categorieId);
    if (this.editProduitForm.variant.length > 0) {
      formData.append('variant', JSON.stringify(this.variantsToFormData(this.editProduitForm.variant)));
    }
    if (this.editProduitForm.photo) {
      formData.append('photo', this.editProduitForm.photo);
    }

    this.boutiqueProduitService.updateMyBoutiqueProduit(this.editProduitForm.id, formData).subscribe({
      next: (response) => {
        if (response.success) {
          this.notificationService.success('Produit modifiÃ© avec succÃ¨s');
          this.closeEditModal();
          this.loadProduits();
        } else {
          this.notificationService.error('Erreur', response.message);
        }
        this.isUpdating = false;
      },
      error: (err) => {
        this.notificationService.error('Erreur', 'Erreur lors de la modification du produit');
        console.error(err);
        this.isUpdating = false;
      }
    });
  }
}

