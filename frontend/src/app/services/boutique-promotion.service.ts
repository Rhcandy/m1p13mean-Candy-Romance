import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

export interface PromotionTargetProduit {
  _id: string;
  nom: string;
  photo?: string | null;
}

export interface PromotionTargetBoutique {
  _id: string;
  nom: string;
  logo?: string | null;
}

export interface PromotionTargetAcheteur {
  _id: string;
  nom: string;
  email?: string;
}

export interface PromotionCreator {
  _id: string;
  nom?: string;
  email?: string;
}

export interface BoutiquePromotion {
  _id: string;
  nom: string;
  taux: number;
  categorie: 'produit' | 'acheteur' | 'boutique';
  dateDebut: string;
  dateFin: string;
  createdBy: string | PromotionCreator;
  produitId?: string | PromotionTargetProduit | null;
  boutiqueId?: string | PromotionTargetBoutique | null;
  acheteurId?: string | PromotionTargetAcheteur | null;
  createdAt?: string;
  updatedAt?: string;
}

export interface BoutiquePromotionQueryParams {
  page?: number;
  limit?: number;
  categorie?: 'produit' | 'acheteur' | 'boutique';
}

export interface CreateBoutiquePromotionPayload {
  nom: string;
  taux: number;
  categorie: 'produit' | 'acheteur';
  dateDebut: string;
  dateFin: string;
  produitId?: string;
  acheteurId?: string;
}

export interface UpdateBoutiquePromotionPayload {
  nom?: string;
  taux?: number;
  dateDebut?: string;
  dateFin?: string;
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

  private appendQueryParam(queryParams: URLSearchParams, key: string, value: string | number | undefined): void {
    if (value === undefined || value === null || value === '') {
      return;
    }
    queryParams.append(key, String(value));
  }

  getMyBoutiquePromotions(params: BoutiquePromotionQueryParams = {}): Observable<PaginationResponse<BoutiquePromotion>> {
    const queryParams = new URLSearchParams();
    this.appendQueryParam(queryParams, 'page', params.page);
    this.appendQueryParam(queryParams, 'limit', params.limit);
    this.appendQueryParam(queryParams, 'categorie', params.categorie);

    const url = `/promotions/my-boutique${queryParams.toString() ? '?' + queryParams.toString() : ''}`;
    return this.api.get<PaginationResponse<BoutiquePromotion>>(url);
  }

  createMyBoutiquePromotion(promotionData: CreateBoutiquePromotionPayload): Observable<{
    success: boolean;
    message: string;
    data: BoutiquePromotion;
  }> {
    return this.api.post('/promotions/my-boutique', promotionData);
  }

  updateMyBoutiquePromotion(
    id: string,
    promotionData: UpdateBoutiquePromotionPayload
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
