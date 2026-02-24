import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from './api.service';

export interface FavoriProduit {
  _id: string;
  nom: string;
  photo?: string;
  prix?: any[];
  averageRating?: number;
  categorieId?: { _id: string; nom: string };
  boutiqueId?: { _id: string; nom: string };
}

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

@Injectable({
  providedIn: 'root'
})
export class FavorisService {
  private readonly endpoint = '/favoris';

  constructor(private readonly apiService: ApiService) {}

  getFavoris(): Observable<FavoriProduit[]> {
    return this.apiService.get<ApiResponse<FavoriProduit[]>>(this.endpoint).pipe(
      map(response => response.data || [])
    );
  }

  isFavori(produitId: string): Observable<boolean> {
    return this.apiService.get<ApiResponse<{ isFavori: boolean }>>(`${this.endpoint}/${produitId}`).pipe(
      map(response => response.data?.isFavori ?? false)
    );
  }

  addFavori(produitId: string): Observable<FavoriProduit[]> {
    return this.apiService.post<ApiResponse<FavoriProduit[]>>(`${this.endpoint}/${produitId}`, {}).pipe(
      map(response => response.data || [])
    );
  }

  removeFavori(produitId: string): Observable<FavoriProduit[]> {
    return this.apiService.delete<ApiResponse<FavoriProduit[]>>(`${this.endpoint}/${produitId}`).pipe(
      map(response => response.data || [])
    );
  }
}
