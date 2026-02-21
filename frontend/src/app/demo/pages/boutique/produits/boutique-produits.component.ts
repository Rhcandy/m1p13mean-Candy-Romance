import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { BoutiqueProduitService, BoutiqueProduit, PaginationResponse, BoutiqueProduitQueryParams } from '../../../../services/boutique-produit.service';
import { NotificationService } from 'src/app/services/notification.service';
import { Router } from '@angular/router';
import { BoutiqueService } from '../../../../services/boutique.service';
import { CategorieProduit, CategorieProduitService } from 'src/app/services/categorie-produit.service';
import { Boutique } from './../../../../services/boutique.service';

// Représentation interne d'un attribut (clé/valeur libre)
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
  imports: [FormsModule, CommonModule, CurrencyPipe]
})
export class BoutiqueProduitsComponent implements OnInit {
  boutique: Boutique | null = null;
  produits: BoutiqueProduit[] = [];
  categories: CategorieProduit[] = [];
  loading = false;
  loadingCategories = false;

  pagination = { total: 0, page: 1, limit: 12, totalPages: 0 };
  filters = { nom: '', categorieId: '' };

  // ── Fiche détail ─────────────────────────────────────────
  showDetail = false;
  selectedProduit: BoutiqueProduit | null = null;

  openDetail(produit: BoutiqueProduit): void {
    this.selectedProduit = produit;
    this.showDetail = true;
  }

  closeDetail(): void {
    this.showDetail = false;
    // Petit délai pour laisser l'animation se terminer
    setTimeout(() => { this.selectedProduit = null; }, 300);
  }

  // ── Modal Ajout ──────────────────────────────────────────
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

  // ── Modal Modification ───────────────────────────────────
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
    private readonly boutiqueService: BoutiqueService
  ) {}

  ngOnInit(): void {
    this.checkBoutiqueExists();
  }

  // ── Initialisation ───────────────────────────────────────

  checkBoutiqueExists(): void {
    this.boutiqueService.getMyBoutique().subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.boutique = response.data;
          this.loadCategories();
          this.loadProduits();
        } else {
          this.notificationService.warning('Attention', 'Vous devez créer une boutique avant de gérer des produits');
          this.router.navigate(['/boutique/informations']);
        }
      },
      error: (err) => {
        if (err.status === 404 || err.error?.message?.includes('Boutique non trouvée')) {
          this.notificationService.warning('Attention', 'Vous devez créer une boutique avant de gérer des produits');
          this.router.navigate(['/boutique/informations']);
        } else {
          this.notificationService.error('Erreur', 'Erreur lors de la vérification de la boutique');
        }
      }
    });
  }

  loadCategories(): void {
    this.loadingCategories = true;
    this.categorieService.getAllCategories().subscribe({
      next: (response) => { this.categories = response; },
      error: () => { this.notificationService.error('Erreur', 'Erreur lors du chargement des catégories'); },
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
          // Mettre à jour le produit sélectionné si la fiche est ouverte
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

  // ── Suppression ──────────────────────────────────────────

  deleteProduit(id: string): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce produit ?')) {
      this.boutiqueProduitService.deleteMyBoutiqueProduit(id).subscribe({
        next: (response) => {
          if (response.success) {
            this.notificationService.success('Produit supprimé avec succès');
            this.loadProduits();
          } else {
            this.notificationService.error('Erreur', response.message || 'Erreur lors de la suppression');
          }
        },
        error: () => { this.notificationService.error('Erreur', 'Erreur lors de la suppression'); }
      });
    }
  }

  // ── Helpers affichage ────────────────────────────────────

  calculateTotalStock(produit: BoutiqueProduit): number {
    if (!produit.variant || !Array.isArray(produit.variant)) return 0;
    return produit.variant.reduce((sum, v) => sum + (v.qtt || 0), 0);
  }

  getPagesArray(): number[] {
    return Array.from({ length: this.pagination.totalPages }, (_, i) => i + 1);
  }

  getCategorieNom(categorieId: any): string {
    if (categorieId && typeof categorieId === 'object' && categorieId.nom) {
      return categorieId.nom;
    }
    const cat = this.categories.find(c => c._id === categorieId);
    return cat ? cat.nom : 'Non catégorisé';
  }

  /** Transforme un objet attributes en tableau [{key, value}] pour l'affichage */
  getVariantAttrs(attributes: any): { key: string; value: string }[] {
    if (!attributes) return [];
    return Object.entries(attributes).map(([key, value]) => ({ key, value: String(value) }));
  }

  // ── Conversion : objet attributes ↔ attrList ────────────

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

  // ── Modal Ajout ──────────────────────────────────────────

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
        this.notificationService.error('Erreur', `La variante ${i + 1} doit avoir une quantité supérieure à 0`);
        return;
      }
    }

    this.isSubmitting = true;
    const formData = new FormData();
    formData.append('nom', this.addProduitForm.nom);
    formData.append('descriptionProduit', this.addProduitForm.description);
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
          this.notificationService.success('Produit ajouté avec succès');
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

  // ── Modal Modification ───────────────────────────────────

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
        this.notificationService.error('Erreur', `La variante ${i + 1} doit avoir une quantité supérieure à 0`);
        return;
      }
    }

    this.isUpdating = true;
    const formData = new FormData();
    formData.append('nom', this.editProduitForm.nom);
    formData.append('descriptionProduit', this.editProduitForm.description);
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
          this.notificationService.success('Produit modifié avec succès');
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
