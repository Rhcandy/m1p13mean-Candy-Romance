import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

interface User {
  _id: string;
  nom: string;
  email: string;
  photo?: string;
}

export interface Avis {
  _id: string;
  userId: User | string;
  produitId: string;
  note: number;
  commentaire: string;
  createdAt: string;
  updatedAt: string;
}

interface CreateAvisRequest {
  produitId: string;
  note: number;
  commentaire: string;
}

interface UpdateAvisRequest {
  note?: number;
  commentaire?: string;
}

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

@Injectable({
  providedIn: 'root'
})
export class AvisService {
  private readonly apiUrl = 'http://localhost:3000/api/avis';

  constructor(private readonly http: HttpClient) {}

  getAvisByProduit(produitId: string): Observable<Avis[]> {
    return this.http.get<ApiResponse<Avis[]>>(`${this.apiUrl}/produit/${produitId}`).pipe(
      map(response => response.data || []),
      catchError(() => of([]))
    );
  }

  createAvis(avis: CreateAvisRequest): Observable<Avis | null> {
    return this.http.post<ApiResponse<Avis>>(`${this.apiUrl}`, avis).pipe(
      map(response => response.data),
      catchError(() => of(null))
    );
  }

  updateAvis(id: string, avis: UpdateAvisRequest): Observable<Avis | null> {
    return this.http.put<ApiResponse<Avis>>(`${this.apiUrl}/${id}`, avis).pipe(
      map(response => response.data),
      catchError(() => of(null))
    );
  }

  deleteAvis(id: string): Observable<boolean> {
    return this.http.delete<ApiResponse<Avis>>(`${this.apiUrl}/${id}`).pipe(
      map(() => true),
      catchError(() => of(false))
    );
  }

  canReview(produitId: string): Observable<boolean> {
    return this.http.get<ApiResponse<{ canReview: boolean }>>(`${this.apiUrl}/produit/${produitId}/can-review`).pipe(
      map(response => response.data?.canReview ?? false),
      catchError(() => of(false))
    );
  }

  hasUserReviewed(produitId: string): Observable<boolean> {
    return this.http.get<ApiResponse<{ hasReviewed: boolean }>>(`${this.apiUrl}/produit/${produitId}/has-reviewed`).pipe(
      map(response => response.data?.hasReviewed ?? false),
      catchError(() => of(false))
    );
  }

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
}
