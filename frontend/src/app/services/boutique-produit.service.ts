import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { AuthService } from './auth.service';

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
  items: T[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

type QueryPrimitive = string | number | boolean;
type QueryValue =
  | QueryPrimitive
  | QueryValue[]
  | { [key: string]: QueryValue }
  | null
  | undefined;

export interface BoutiqueProduitQueryParams {
  page?: number | string;
  limit?: number | string;
  nom?: string | { regex?: string; options?: string };
  categorieId?: string;
  boutiqueId?: string;
  sort?: string;
  [key: string]: QueryValue;
}

@Injectable({
  providedIn: 'root'
})
export class BoutiqueProduitService {
  constructor(
    private readonly api: ApiService,
  ) {}

  private appendQueryParam(queryParams: URLSearchParams, key: string, value: QueryValue): void {
    if (value === undefined || value === null || value === '') {
      return;
    }

    if (Array.isArray(value)) {
      value.forEach((item) => this.appendQueryParam(queryParams, key, item));
      return;
    }

    if (typeof value === 'object') {
      Object.entries(value).forEach(([nestedKey, nestedValue]) => {
        this.appendQueryParam(queryParams, `${key}[${nestedKey}]`, nestedValue);
      });
      return;
    }

    queryParams.append(key, String(value));
  }

  getMyBoutiqueProduits(params: BoutiqueProduitQueryParams = {}): Observable<PaginationResponse<BoutiqueProduit>> {
    const queryParams = new URLSearchParams();

    Object.entries(params).forEach(([key, value]) => {
      this.appendQueryParam(queryParams, key, value);
    });

    const url = `/produits${queryParams.toString() ? '?' + queryParams.toString() : ''}`;
    return this.api.get<PaginationResponse<BoutiqueProduit>>(url);

  }

  createMyBoutiqueProduit(produitData: FormData): Observable<{
    success: boolean;
    message: string;
    data: BoutiqueProduit;
  }> {
    return this.api.postFile('/produits', produitData);
  }

  updateMyBoutiqueProduit(
    id: string,
    produitData: FormData
  ): Observable<{
    success: boolean;
    message: string;
    data: BoutiqueProduit;
  }> {
    return this.api.putFile(`/produits/${id}`, produitData);
  }

  deleteMyBoutiqueProduit(id: string): Observable<{
    success: boolean;
    message: string;
  }> {
    return this.api.delete(`/produits/${id}`);
  }

  updateProduitPromotions(
    id: string,
    promotionIds: string[]
  ): Observable<{
    success: boolean;
    message: string;
    data: BoutiqueProduit;
  }> {
    return this.api.put(`/produits/${id}/promotions`, { promotionIds });
  }
}
