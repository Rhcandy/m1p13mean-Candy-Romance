import { ChangeDetectorRef, Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';
import { AvisService } from '../../services/avis.service';

// Interfaces basées sur le modèle backend
interface AvisItem {
  _id: string;
  userId: string;
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
  @Input() produitId: string = '';
  @Input() currentUserId: string = '';
  @Input() avis: AvisItem[] = [];
  
  loading = false;
  
  // Pagination
  currentPage = 1;
  itemsPerPage = 5;
  totalPages = 1;

  // Propriété calculée pour la pagination
  get filteredAvis(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.avis.slice(startIndex, endIndex);
  }

  constructor(private readonly avisService: AvisService) {}

  ngOnInit(): void {
    // Si les avis sont déjà fournis par le parent, ne pas recharger
    if (this.avis && this.avis.length > 0) {
      return;
    }
    
    // Sinon, charger depuis le service
    this.loadAvis();
  }

  /**
   * Charger les avis du produit
   */
  loadAvis(): void {
    if (!this.produitId) {
      console.warn('produitId non fourni, impossible de charger les avis');
      return;
    }
    
    this.loading = true;
    
    this.avisService.getAvisByProduit(this.produitId, this.currentPage, this.itemsPerPage).subscribe({
      next: (response) => {
        // Mapper les données du service vers le format du composant
        this.avis = response.avis.map((avis: any) => ({
          _id: avis._id,
          userId: avis.userId._id || avis.userId, // Gérer les deux cas
          produitId: avis.produitId,
          note: avis.rating, // mapping: rating -> note
          commentaire: avis.comment, // mapping: comment -> commentaire
          createdAt: avis.createdAt,
          updatedAt: avis.updatedAt
        }));
        
        this.totalPages = response.pagination.totalPages;
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

  /**
   * Obtenir le nom de l'utilisateur (à remplacer par votre service)
   */
  getUserName(userId: string): string {
    // Remplacez par un appel à votre service utilisateur
    // return this.userService.getUserById(userId).nom;
    
    // Mock pour la démo
    const mockUsers: { [key: string]: string } = {
      'user1': 'Marie Dupont',
      'user2': 'Jean Martin',
      'user3': 'Sophie Bernard',
      'user4': 'Pierre Durand',
      'user5': 'Amélie Rousseau'
    };
    
    return mockUsers[userId] || 'Utilisateur';
  }

  /**
   * Obtenir la moyenne des notes
   */
  getAverageRating(): number {
    if (!this.avis || this.avis.length === 0) return 0;
    
    const sum = this.avis.reduce((total, review) => total + review.note, 0);
    return Math.round((sum / this.avis.length) * 10) / 10;
  }

  /**
   * Obtenir le nombre d'avis par note
   */
  getRatingCount(rating: number): number {
    if (!this.avis) return 0;
    return this.avis.filter(review => review.note === rating).length;
  }

  /**
   * Calculer la pagination
   */
  calculatePagination(): void {
    this.totalPages = Math.ceil(this.avis.length / this.itemsPerPage);
  }

  /**
   * Changer de page
   */
  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  /**
   * Obtenir le tableau des pages
   */
  getPagesArray(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  /**
   * Formater la date
   */
  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) {
      return "Aujourd'hui";
    } else if (diffDays === 1) {
      return 'Hier';
    } else if (diffDays < 7) {
      return `Il y a ${diffDays} jours`;
    } else if (diffDays < 30) {
      const weeks = Math.floor(diffDays / 7);
      return `Il y a ${weeks} semaine${weeks > 1 ? 's' : ''}`;
    } else if (diffDays < 365) {
      const months = Math.floor(diffDays / 30);
      return `Il y a ${months} mois`;
    } else {
      return date.toLocaleDateString('fr-FR', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    }
  }

  /**
   * Obtenir les initiales d'un nom
   */
  getInitials(nom: string): string {
    if (!nom) return '?';
    
    const parts = nom.trim().split(' ');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return nom.substring(0, 2).toUpperCase();
  }

  /**
   * Vérifier si l'utilisateur peut modifier un avis
   */
  canEdit(review: AvisItem): boolean {
    return review.userId === this.currentUserId;
  }


  /**
   * Ouvrir le formulaire d'avis
   */
  openReviewForm(): void {
    console.log('Ouvrir formulaire avis');
    // Ouvrir un modal ou naviguer vers le formulaire
  }

  
}
