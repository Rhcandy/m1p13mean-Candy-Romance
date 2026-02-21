import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

export interface BoutiqueProduit {
  _id: string;
  boutiqueId: string;
  categorieId: string;
  nom: string;
  photo?: string | null;
  description?: string;
  variant: any[];
  prix: any[];
  averageRating?: number;
  avis?: any[];
  promotions?: any[];
  createdAt?: string;
  updatedAt?: string;
}

export interface PaginationResponse<T> {
  success: boolean;
  message: string;
  data: T[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

@Injectable({
  providedIn: 'root'
})
export class BoutiqueProduitService {
  constructor(private readonly api: ApiService) {}

  getMyBoutiqueProduits(params?: {
    page?: number;
    limit?: number;
    nom?: string;
    categorieId?: string;
  }): Observable<PaginationResponse<BoutiqueProduit>> {
    const queryParams = new URLSearchParams();
    if (params?.page) queryParams.append('page', params.page.toString());
    if (params?.limit) queryParams.append('limit', params.limit.toString());
    if (params?.nom) queryParams.append('nom', params.nom);
    if (params?.categorieId) queryParams.append('categorieId', params.categorieId);
    
    const url = `/produits/my-boutique${queryParams.toString() ? '?' + queryParams.toString() : ''}`;
    return this.api.get<PaginationResponse<BoutiqueProduit>>(url);
  }

  createMyBoutiqueProduit(produitData: FormData): Observable<{
    success: boolean;
    message: string;
    data: BoutiqueProduit;
  }> {
    return this.api.post('/produits/my-boutique', produitData);
  }

  updateMyBoutiqueProduit(
    id: string,
    produitData: FormData
  ): Observable<{
    success: boolean;
    message: string;
    data: BoutiqueProduit;
  }> {
    return this.api.put(`/produits/my-boutique/${id}`, produitData);
  }

  deleteMyBoutiqueProduit(id: string): Observable<{
    success: boolean;
    message: string;
  }> {
    return this.api.delete(`/produits/my-boutique/${id}`);
  }
}
