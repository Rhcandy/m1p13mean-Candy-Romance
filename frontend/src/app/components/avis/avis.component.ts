import { ChangeDetectorRef, Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';
import { AvisService, Avis } from '../../services/avis.service';
import { forkJoin } from 'rxjs';
import { NotificationService } from 'src/app/services/notification.service';

interface AvisItem {
  _id: string;
  userId: string;
  userName?: string;
  produitId: string;
  note: number;
  commentaire: string;
  createdAt: string;
  updatedAt: string;
}

@Component({
  selector: 'app-avis',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.scss'],
  animations: [
    trigger('itemAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('200ms ease-out', style({ opacity: 0, transform: 'translateY(-10px)' }))
      ])
    ])
  ]
})
export class AvisComponent implements OnInit {
  private readonly cdr = inject(ChangeDetectorRef);
  @Input() produitId = '';
  @Input() currentUserId = '';
  @Input() currentUserName = '';
  @Input() avis: AvisItem[] = [];

  loading = false;
  checkingEligibility = false;
  canReview = false;
  hasReviewed = false;
  showReviewForm = false;
  submittingReview = false;
  reviewNote = 0;
  reviewComment = '';
  reviewError = '';

  currentPage = 1;
  itemsPerPage = 5;
  totalPages = 1;

  get filteredAvis(): AvisItem[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.avis.slice(startIndex, endIndex);
  }

  constructor(
    private readonly avisService: AvisService,
    private readonly notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    if (!this.avis || this.avis.length === 0) {
      this.loadAvis();
    } else {
      this.calculatePagination();
    }
    this.loadEligibility();
  }

  loadAvis(): void {
    if (!this.produitId) {
      console.warn('produitId non fourni, impossible de charger les avis');
      return;
    }

    this.loading = true;

    this.avisService.getAvisByProduit(this.produitId).subscribe({
      next: (response) => {
        this.avis = response.map((avis: Avis) => ({
          _id: avis._id,
          userId: typeof avis.userId === 'string' ? avis.userId : avis.userId?._id,
          userName: typeof avis.userId === 'string' ? undefined : avis.userId?.nom,
          produitId: avis.produitId,
          note: avis.note,
          commentaire: avis.commentaire,
          createdAt: avis.createdAt,
          updatedAt: avis.updatedAt
        }));
        this.calculatePagination();
        this.loading = false;
        Promise.resolve().then(() => {
          this.cdr.detectChanges();
        });
      },
      error: (error) => {
        console.error('Erreur lors du chargement des avis:', error);
        this.avis = [];
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  loadEligibility(): void {
    if (!this.produitId || !this.currentUserId) {
      this.canReview = false;
      this.hasReviewed = false;
      return;
    }

    this.checkingEligibility = true;
    forkJoin({
      canReview: this.avisService.canReview(this.produitId),
      hasReviewed: this.avisService.hasUserReviewed(this.produitId)
    }).subscribe({
      next: ({ canReview, hasReviewed }) => {
        this.canReview = canReview;
        this.hasReviewed = hasReviewed;
        this.checkingEligibility = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.canReview = false;
        this.hasReviewed = false;
        this.checkingEligibility = false;
        this.cdr.detectChanges();
      }
    });
  }

  getUserName(review: AvisItem): string {
    if (review.userName) return review.userName;
    if (review.userId === this.currentUserId && this.currentUserName) {
      return this.currentUserName;
    }

    const mockUsers: { [key: string]: string } = {
      'user1': 'Marie Dupont',
      'user2': 'Jean Martin',
      'user3': 'Sophie Bernard',
      'user4': 'Pierre Durand',
      'user5': 'Amelie Rousseau'
    };

    return mockUsers[review.userId] || 'Utilisateur';
  }

  getAverageRating(): number {
    if (!this.avis || this.avis.length === 0) return 0;

    const sum = this.avis.reduce((total, review) => total + review.note, 0);
    return Math.round((sum / this.avis.length) * 10) / 10;
  }

  getRatingCount(rating: number): number {
    if (!this.avis) return 0;
    return this.avis.filter(review => review.note === rating).length;
  }

  calculatePagination(): void {
    this.totalPages = Math.ceil(this.avis.length / this.itemsPerPage) || 1;
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  getPagesArray(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  formatDate(dateString: string): string {
    return this.avisService.formatDate(dateString);
  }

  getInitials(nom: string): string {
    if (!nom) return '?';

    const parts = nom.trim().split(' ');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return nom.substring(0, 2).toUpperCase();
  }

  canEdit(review: AvisItem): boolean {
    return review.userId === this.currentUserId;
  }

  openReviewForm(): void {
    if (!this.currentUserId) {
      this.notificationService.warning('Attention !','Veuillez vous connecter pour laisser un avis.');
      return;
    }
    if (!this.canReview) {
      this.notificationService.warning('Attention !','Vous devez avoir commandé ce produit pour laisser un avis.');
      return;
    }
    if (this.hasReviewed) {
      this.notificationService.warning('Vous avez déjà laissé un avis pour ce produit.');
      return;
    }
    this.showReviewForm = true;
  }

  submitReview(): void {
      
    if (!this.reviewNote || this.reviewNote < 1 || this.reviewNote > 5) {
      this.notificationService.warning('Attention !','Veuillez sélectionner une note entre 1 et 5.');
      return;
    }
    if (!this.reviewComment || !this.reviewComment.trim()) {
      this.notificationService.warning('Attention !','Veuillez ajouter un commentaire.');
      return;
    }

    this.submittingReview = true;
    this.avisService.createAvis({
      produitId: this.produitId,
      note: this.reviewNote,
      commentaire: this.reviewComment.trim()
    }).subscribe({
      next: (avis) => {
        this.submittingReview = false;
        if (!avis) {
          this.reviewError = 'Impossible d\'ajouter l\'avis.';
          this.cdr.detectChanges();
          return;
        }

        const newAvis: AvisItem = {
          _id: avis._id,
          userId: typeof avis.userId === 'string' ? avis.userId : avis.userId?._id,
          userName: typeof avis.userId === 'string'
            ? (this.currentUserName || undefined)
            : avis.userId?.nom,
          produitId: avis.produitId,
          note: avis.note,
          commentaire: avis.commentaire,
          createdAt: avis.createdAt,
          updatedAt: avis.updatedAt
        };

        this.avis.unshift(newAvis);
        this.calculatePagination();
        this.hasReviewed = true;
        this.showReviewForm = false;
        this.reviewNote = 0;
        this.reviewComment = '';
        this.cdr.detectChanges();
      },
      error: () => {
        this.submittingReview = false;
        this.reviewError = 'Erreur lors de l\'ajout de l\'avis.';
        this.cdr.detectChanges();
      }
    });
  }
}
