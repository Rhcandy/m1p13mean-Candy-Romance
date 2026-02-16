import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

// Interfaces pour les avis
interface User {
  _id: string;
  nom: string;
  email: string;
  photo?: string;
}

interface Avis {
  _id: string;
  userId: User;
  produitId: string;
  rating: number;
  comment: string;
  isVerified: boolean;
  helpfulCount: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface CreateAvisRequest {
  produitId: string;
  rating: number;
  comment: string;
}

interface UpdateAvisRequest {
  rating?: number;
  comment?: string;
}

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

interface AvisListResponse {
  avis: Avis[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
  statistics: {
    averageRating: number;
    totalAvis: number;
    ratingDistribution: {
      5: number;
      4: number;
      3: number;
      2: number;
      1: number;
    };
  };
}

@Injectable({
  providedIn: 'root'
})
export class AvisService {
  private readonly apiUrl = 'http://localhost:3000/api/avis'; // Adapter selon votre backend

  constructor(private readonly http: HttpClient) {}

  /**
   * Obtenir tous les avis d'un produit avec pagination
   */
  getAvisByProduit(produitId: string, page: number = 1, limit: number = 10): Observable<AvisListResponse> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString());

    return this.http.get<ApiResponse<AvisListResponse>>(`${this.apiUrl}/produit/${produitId}`, { params }).pipe(
      map(response => response.data),
      catchError(this.handleError.bind(this))
    );
  }

  /**
   * Obtenir un avis par son ID
   */
  getAvisById(id: string): Observable<Avis> {
    return this.http.get<ApiResponse<Avis>>(`${this.apiUrl}/${id}`).pipe(
      map(response => response.data),
      catchError(this.handleError.bind(this))
    );
  }

  /**
   * Créer un nouvel avis
   */
  createAvis(avis: CreateAvisRequest): Observable<Avis> {
    return this.http.post<ApiResponse<Avis>>(`${this.apiUrl}`, avis).pipe(
      map(response => response.data),
      catchError(this.handleError.bind(this))
    );
  }

  /**
   * Mettre à jour un avis
   */
  updateAvis(id: string, avis: UpdateAvisRequest): Observable<Avis> {
    return this.http.put<ApiResponse<Avis>>(`${this.apiUrl}/${id}`, avis).pipe(
      map(response => response.data),
      catchError(this.handleError.bind(this))
    );
  }

  /**
   * Supprimer un avis
   */
  deleteAvis(id: string): Observable<void> {
    return this.http.delete<ApiResponse<void>>(`${this.apiUrl}/${id}`).pipe(
      map(() => {}),
      catchError(this.handleError.bind(this))
    );
  }

  /**
   * Marquer un avis comme utile
   */
  markAsHelpful(id: string): Observable<Avis> {
    return this.http.post<ApiResponse<Avis>>(`${this.apiUrl}/${id}/helpful`, {}).pipe(
      map(response => response.data),
      catchError(this.handleError.bind(this))
    );
  }

  /**
   * Obtenir les avis de l'utilisateur connecté
   */
  getMyAvis(page: number = 1, limit: number = 10): Observable<{
    avis: Avis[];
    pagination: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
    };
  }> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString());

    return this.http.get<ApiResponse<any>>(`${this.apiUrl}/my-avis`, { params }).pipe(
      map(response => response.data),
      catchError(this.handleError.bind(this))
    );
  }

  /**
   * Obtenir les statistiques des avis d'un produit
   */
  getAvisStatistics(produitId: string): Observable<{
    averageRating: number;
    totalAvis: number;
    ratingDistribution: {
      5: number;
      4: number;
      3: number;
      2: number;
      1: number;
    };
  }> {
    return this.http.get<ApiResponse<any>>(`${this.apiUrl}/produit/${produitId}/statistics`).pipe(
      map(response => response.data),
      catchError(this.handleError.bind(this))
    );
  }

  /**
   * Vérifier si l'utilisateur a déjà laissé un avis pour ce produit
   */
  hasUserReviewed(produitId: string): Observable<boolean> {
    return this.http.get<ApiResponse<{ hasReviewed: boolean }>>(`${this.apiUrl}/produit/${produitId}/has-reviewed`).pipe(
      map(response => response.data.hasReviewed),
      catchError(this.handleError.bind(this))
    );
  }

  /**
   * Obtenir les avis les plus récents
   */
  getRecentAvis(limit: number = 5): Observable<Avis[]> {
    const params = new HttpParams().set('limit', limit.toString());
    
    return this.http.get<ApiResponse<Avis[]>>(`${this.apiUrl}/recent`, { params }).pipe(
      map(response => response.data),
      catchError(this.handleError.bind(this))
    );
  }

  /**
   * Formater la date d'un avis
   */
  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

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
      const years = Math.floor(diffDays / 365);
      return `Il y a ${years} an${years > 1 ? 's' : ''}`;
    }
  }

  /**
   * Obtenir les étoiles de notation
   */
  getStars(rating: number): number[] {
    const stars = [];
    
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(1);
      } else if (i - 0.5 <= rating) {
        stars.push(0.5);
      } else {
        stars.push(0);
      }
    }
    
    return stars;
  }

  /**
   * Gestion des erreurs
   */
  private handleError(error: any): Observable<null> {
    console.error('Erreur dans AvisService:', error);
    
    const message = error.error?.message || error.message || 'Erreur lors de la récupération des avis';
    return of(null); // Retourner null en cas d'erreur pour ne pas casser l'UI
  }
}
