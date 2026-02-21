import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

export interface BoutiquePromotion {
  _id: string;
  nom: string;
  taux: number;
  categorie: 'produit' | 'acheteur';
  dateDebut: string;
  dateFin: string;
  createdBy: string;
  produitId?: string;
  boutiqueId?: string;
  acheteurId?: string;
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
export class BoutiquePromotionService {
  constructor(private readonly api: ApiService) {}

  getMyBoutiquePromotions(params?: {
    page?: number;
    limit?: number;
    categorie?: 'produit' | 'acheteur';
  }): Observable<PaginationResponse<BoutiquePromotion>> {
    const queryParams = new URLSearchParams();
    if (params?.page) queryParams.append('page', params.page.toString());
    if (params?.limit) queryParams.append('limit', params.limit.toString());
    if (params?.categorie) queryParams.append('categorie', params.categorie);
    
    const url = `/promotions/my-boutique${queryParams.toString() ? '?' + queryParams.toString() : ''}`;
    return this.api.get<PaginationResponse<BoutiquePromotion>>(url);
  }

  createMyBoutiquePromotion(promotionData: Partial<BoutiquePromotion>): Observable<{
    success: boolean;
    message: string;
    data: BoutiquePromotion;
  }> {
    return this.api.post('/promotions/my-boutique', promotionData);
  }

  updateMyBoutiquePromotion(
    id: string,
    promotionData: Partial<BoutiquePromotion>
  ): Observable<{
    success: boolean;
    message: string;
    data: BoutiquePromotion;
  }> {
    return this.api.put(`/promotions/my-boutique/${id}`, promotionData);
  }

  deleteMyBoutiquePromotion(id: string): Observable<{
    success: boolean;
    message: string;
  }> {
    return this.api.delete(`/promotions/my-boutique/${id}`);
  }
}
