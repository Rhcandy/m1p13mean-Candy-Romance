import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import {
  BoutiquePromotionService,
  BoutiquePromotion,
  PaginationResponse,
  CreateBoutiquePromotionPayload,
  UpdateBoutiquePromotionPayload
} from '../../../../services/boutique-promotion.service';
import { NotificationService } from '../../../../services/notification.service';
import { AuthService } from '../../../../services/auth.service';
import { BoutiqueProduitService, BoutiqueProduit } from '../../../../services/boutique-produit.service';
import { BoutiqueService } from '../../../../services/boutique.service';

interface PromotionCreateForm {
  nom: string;
  taux: number;
  categorie: 'produit';
  dateDebut: string;
  dateFin: string;
}

interface PromotionEditForm {
  id: string;
  nom: string;
  taux: number;
  dateDebut: string;
  dateFin: string;
}

@Component({
  selector: 'app-boutique-promotions',
  templateUrl: './boutique-promotions.component.html',
  styleUrls: ['./boutique-promotions.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule, DatePipe]
})
export class BoutiquePromotionsComponent implements OnInit {
  private readonly fetchLimit = 1000;
  private allOwnedPromotions: BoutiquePromotion[] = [];
  private currentUserId: string | null = null;
  private myBoutiqueId: string | null = null;

  promotions: BoutiquePromotion[] = [];
  produits: BoutiqueProduit[] = [];
  loading = false;
  loadingProduits = false;
  error: string | null = null;

  pagination = {
    total: 0,
    page: 1,
    limit: 10,
    totalPages: 0
  };

  filters = {
    categorie: '' as 'produit' | 'acheteur' | ''
  };

  showCreateModal = false;
  showEditModal = false;
  creating = false;
  updating = false;

  createForm: PromotionCreateForm = this.getEmptyCreateForm();
  editForm: PromotionEditForm = this.getEmptyEditForm();

  constructor(
    private readonly boutiquePromotionService: BoutiquePromotionService,
    private readonly boutiqueProduitService: BoutiqueProduitService,
    private readonly boutiqueService: BoutiqueService,
    private readonly authService: AuthService,
    private readonly notificationService: NotificationService,
    private readonly cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.currentUserId = this.authService.currentUser?.id || this.authService.getUser()?.id || null;
    this.loadMyBoutiqueProducts();
    this.loadPromotions();
  }

  private getEmptyCreateForm(): PromotionCreateForm {
    return {
      nom: '',
      taux: 0,
      categorie: 'produit',
      dateDebut: '',
      dateFin: ''
    };
  }

  private getEmptyEditForm(): PromotionEditForm {
    return {
      id: '',
      nom: '',
      taux: 0,
      dateDebut: '',
      dateFin: ''
    };
  }

  private loadMyBoutiqueProducts(): void {
    this.loadingProduits = true;
    this.boutiqueService.getMyBoutique().subscribe({
      next: (response) => {
        if (!response?.success || !response?.data?._id) {
          this.produits = [];
          this.loadingProduits = false;
          this.cdr.detectChanges();
          return;
        }

        this.myBoutiqueId = response.data._id;
        this.boutiqueProduitService.getMyBoutiqueProduits({
          page: 1,
          limit: 200,
          boutiqueId: this.myBoutiqueId,
          sort: 'nom'
        }).subscribe({
          next: (produitsResponse) => {
            this.produits = produitsResponse?.items || [];
          },
          error: (err) => {
            console.error('Erreur chargement produits boutique:', err);
            this.produits = [];
          },
          complete: () => {
            this.loadingProduits = false;
            this.cdr.detectChanges();
          }
        });
      },
      error: (err) => {
        console.error('Erreur chargement boutique:', err);
        this.produits = [];
        this.loadingProduits = false;
        this.cdr.detectChanges();
      }
    });
  }

  loadPromotions(): void {
    this.loading = true;
    this.error = null;

    const params: { page: number; limit: number; categorie?: 'produit' | 'acheteur' } = {
      page: 1,
      limit: this.fetchLimit
    };

    if (this.filters.categorie) {
      params.categorie = this.filters.categorie;
    }

    this.boutiquePromotionService.getMyBoutiquePromotions(params).subscribe({
      next: (response: PaginationResponse<BoutiquePromotion>) => {
        if (!response.success) {
          this.notificationService.error('Erreur', response.message || 'Chargement impossible');
          this.allOwnedPromotions = [];
          this.applyPagination();
          return;
        }

        const source = response.data || [];
        this.allOwnedPromotions = source.filter((promotion) => this.isPromotionOwnedByCurrentUser(promotion));
        this.applyPagination();
      },
      error: (err) => {
        this.error = 'Erreur lors du chargement des promotions';
        this.notificationService.error('Erreur', this.error);
        console.error('Erreur promotions:', err);
      },
      complete: () => {
        this.loading = false;
        Promise.resolve().then(() => {
          this.cdr.detectChanges();
        });
      }
    });
  }

  private applyPagination(): void {
    const total = this.allOwnedPromotions.length;
    const totalPages = total > 0 ? Math.ceil(total / this.pagination.limit) : 0;

    if (totalPages === 0) {
      this.pagination.total = 0;
      this.pagination.totalPages = 0;
      this.pagination.page = 1;
      this.promotions = [];
      return;
    }

    if (this.pagination.page > totalPages) {
      this.pagination.page = totalPages;
    }

    const start = (this.pagination.page - 1) * this.pagination.limit;
    const end = start + this.pagination.limit;

    this.pagination.total = total;
    this.pagination.totalPages = totalPages;
    this.promotions = this.allOwnedPromotions.slice(start, end);
  }

  onPageChange(page: number): void {
    if (page < 1 || page > this.pagination.totalPages) {
      return;
    }
    this.pagination.page = page;
    this.applyPagination();
  }

  onFilter(): void {
    this.pagination.page = 1;
    this.loadPromotions();
  }

  openCreateModal(): void {
    this.createForm = this.getEmptyCreateForm();
    this.showCreateModal = true;
  }

  closeCreateModal(): void {
    this.showCreateModal = false;
    this.createForm = this.getEmptyCreateForm();
  }

  createPromotion(): void {
    if (!this.createForm.nom.trim()) {
      this.notificationService.error('Erreur', 'Le nom est requis');
      return;
    }

    if (this.createForm.taux < 0 || this.createForm.taux > 100) {
      this.notificationService.error('Erreur', 'Le taux doit etre entre 0 et 100');
      return;
    }

    if (!this.createForm.dateDebut || !this.createForm.dateFin) {
      this.notificationService.error('Erreur', 'Les dates sont requises');
      return;
    }

    if (new Date(this.createForm.dateFin) <= new Date(this.createForm.dateDebut)) {
      this.notificationService.error('Erreur', 'La date de fin doit etre apres la date de debut');
      return;
    }

    const payload: CreateBoutiquePromotionPayload = {
      nom: this.createForm.nom.trim(),
      taux: Number(this.createForm.taux),
      categorie: 'produit',
      dateDebut: `${this.createForm.dateDebut}T00:00:00.000Z`,
      dateFin: `${this.createForm.dateFin}T23:59:59.999Z`
    };

    this.creating = true;
    this.boutiquePromotionService.createMyBoutiquePromotion(payload).subscribe({
      next: (response) => {
        if (response.success) {
          this.notificationService.success('Promotion creee avec succes');
          this.closeCreateModal();
          this.loadPromotions();
          return;
        }
        this.notificationService.error('Erreur', response.message || 'Creation impossible');
      },
      error: (err) => {
        this.notificationService.error('Erreur', 'Erreur lors de la creation');
        console.error('Erreur creation promotion:', err);
      },
      complete: () => {
        this.creating = false;
        this.cdr.detectChanges();
      }
    });
  }

  openEditModal(promotion: BoutiquePromotion): void {
    this.editForm = {
      id: promotion._id,
      nom: promotion.nom,
      taux: promotion.taux,
      dateDebut: this.toDateInputValue(promotion.dateDebut),
      dateFin: this.toDateInputValue(promotion.dateFin)
    };
    this.showEditModal = true;
  }

  closeEditModal(): void {
    this.showEditModal = false;
    this.editForm = this.getEmptyEditForm();
  }

  updatePromotion(): void {
    if (!this.editForm.id) {
      return;
    }

    if (!this.editForm.nom.trim()) {
      this.notificationService.error('Erreur', 'Le nom est requis');
      return;
    }

    if (this.editForm.taux < 0 || this.editForm.taux > 100) {
      this.notificationService.error('Erreur', 'Le taux doit etre entre 0 et 100');
      return;
    }

    if (!this.editForm.dateDebut || !this.editForm.dateFin) {
      this.notificationService.error('Erreur', 'Les dates sont requises');
      return;
    }

    if (new Date(this.editForm.dateFin) <= new Date(this.editForm.dateDebut)) {
      this.notificationService.error('Erreur', 'La date de fin doit etre apres la date de debut');
      return;
    }

    const payload: UpdateBoutiquePromotionPayload = {
      nom: this.editForm.nom.trim(),
      taux: Number(this.editForm.taux),
      dateDebut: `${this.editForm.dateDebut}T00:00:00.000Z`,
      dateFin: `${this.editForm.dateFin}T23:59:59.999Z`
    };

    this.updating = true;
    this.boutiquePromotionService.updateMyBoutiquePromotion(this.editForm.id, payload).subscribe({
      next: (response) => {
        if (response.success) {
          this.notificationService.success('Promotion mise a jour avec succes');
          this.closeEditModal();
          this.loadPromotions();
          return;
        }
        this.notificationService.error('Erreur', response.message || 'Mise a jour impossible');
      },
      error: (err) => {
        this.notificationService.error('Erreur', 'Erreur lors de la mise a jour');
        console.error('Erreur update promotion:', err);
      },
      complete: () => {
        this.updating = false;
        this.cdr.detectChanges();
      }
    });
  }

  async deletePromotion(id: string): Promise<void> {
    if (!id) {
      return;
    }

    const confirmed = await this.notificationService.confirm({
      title: 'Suppression promotion',
      message: 'Etes-vous sur de vouloir supprimer cette promotion ?',
      confirmLabel: 'Supprimer',
      cancelLabel: 'Annuler',
      confirmStyle: 'danger'
    });
    if (!confirmed) {
      return;
    }

    this.boutiquePromotionService.deleteMyBoutiquePromotion(id).subscribe({
      next: (response) => {
        if (response.success) {
          this.notificationService.success('Promotion supprimee avec succes');
          this.loadPromotions();
          return;
        }
        this.notificationService.error('Erreur', response.message || 'Suppression impossible');
      },
      error: (err) => {
        this.notificationService.error('Erreur', 'Erreur lors de la suppression');
        console.error('Erreur suppression:', err);
      }
    });
  }

  getCategorieLabel(categorie: string): string {
    const labels: { [key: string]: string } = {
      produit: 'Produit',
      acheteur: 'Acheteur',
      boutique: 'Boutique'
    };
    return labels[categorie] || categorie;
  }

  getCategorieColor(categorie: string): string {
    const colors: { [key: string]: string } = {
      produit: 'primary',
      acheteur: 'success',
      boutique: 'warning'
    };
    return colors[categorie] || 'secondary';
  }

  isPromotionActive(promotion: BoutiquePromotion): boolean {
    const now = new Date();
    const dateDebut = new Date(promotion.dateDebut);
    const dateFin = new Date(promotion.dateFin);
    return now >= dateDebut && now <= dateFin;
  }

  getPromotionTargetLabel(promotion: BoutiquePromotion): string {
    if (promotion.categorie === 'produit') {
      if (!promotion.produitId) {
        return 'Associer depuis Produits';
      }
      if (typeof promotion.produitId === 'string') {
        const produit = this.produits.find((item) => item._id === promotion.produitId);
        return produit?.nom || promotion.produitId;
      }
      return promotion.produitId.nom || promotion.produitId._id;
    }

    if (promotion.categorie === 'acheteur') {
      if (!promotion.acheteurId) {
        return 'Acheteur non defini';
      }
      if (typeof promotion.acheteurId === 'string') {
        return promotion.acheteurId;
      }
      return promotion.acheteurId.nom || promotion.acheteurId.email || promotion.acheteurId._id;
    }

    if (!promotion.boutiqueId) {
      return 'Boutique non definie';
    }
    if (typeof promotion.boutiqueId === 'string') {
      return promotion.boutiqueId;
    }
    return promotion.boutiqueId.nom || promotion.boutiqueId._id;
  }

  getCreatorLabel(promotion: BoutiquePromotion): string {
    if (this.isPromotionOwnedByCurrentUser(promotion)) {
      return 'Vous';
    }

    if (typeof promotion.createdBy === 'string') {
      return promotion.createdBy;
    }

    return promotion.createdBy.nom || promotion.createdBy.email || promotion.createdBy._id;
  }

  getPagesArray(): number[] {
    if (!this.pagination.totalPages) {
      return [];
    }

    const pages: number[] = [];
    const start = Math.max(1, this.pagination.page - 2);
    const end = Math.min(this.pagination.totalPages, this.pagination.page + 2);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  }

  private isPromotionOwnedByCurrentUser(promotion: BoutiquePromotion): boolean {
    if (!this.currentUserId) {
      return false;
    }

    if (typeof promotion.createdBy === 'string') {
      return promotion.createdBy === this.currentUserId;
    }

    return promotion.createdBy?._id === this.currentUserId;
  }

  private toDateInputValue(dateValue: string): string {
    if (!dateValue) {
      return '';
    }
    if (dateValue.includes('T')) {
      return dateValue.split('T')[0];
    }
    return dateValue;
  }
}
