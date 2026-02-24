import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from './api.service';

export interface Pagination {
  totalDocs: number;
  totalPages: number;
  page: number;
  limit: number;
}

export interface PaginatedResponse<T> {
  items: T[];
  pagination: Pagination;
}

export interface TypeBoxModel {
  _id: string;
  nom: string;
  periode: number;
  remuneration: number;
  description?: string | null;
}

export interface CentreModel {
  _id: string;
  nom: string;
  adresse?: unknown;
}

export interface CoordonneesPolygon {
  type: 'Polygon';
  coordinates: number[][][];
}

export interface AdminCenterBox {
  _id: string;
  Superficie: number;
  typeBoxId: string | TypeBoxModel;
  etage: string;
  numRef: string;
  centreId: string | CentreModel;
  isDisponible: boolean;
  coordonnees: CoordonneesPolygon;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateBoxPayload {
  Superficie: number;
  typeBoxId: string;
  etage: string;
  numRef: string;
  centreId?: string;
  isDisponible?: boolean;
  coordonnees: CoordonneesPolygon;
}

export interface UpdateBoxPayload {
  Superficie?: number;
  typeBoxId?: string;
  etage?: string;
  numRef?: string;
  centreId?: string;
  isDisponible?: boolean;
  coordonnees?: CoordonneesPolygon;
}

export interface LocataireModel {
  _id: string;
  nom?: string;
  email?: string;
  numtel?: string[];
}

export interface BoutiqueModel {
  _id: string;
  nom: string;
  logo?: string | null;
  isActive: boolean;
  isPendingFirstActivation?: boolean;
  locataire?: LocataireModel[];
  contratlocation?: {
    boxes?: Array<AdminCenterBox | string>;
    dateDebutLocation?: string;
    dateFinLocation?: string;
  };
  createdAt?: string;
  updatedAt?: string;
}

export interface LoyerDetail {
  _id?: string;
  title: string;
  libelle?: string | null;
  montantPaye: number;
  restePaye: number;
}

export interface LoyerModel {
  _id: string;
  boutiqueId: string | BoutiqueModel;
  details: LoyerDetail[];
  createdAt?: string;
  updatedAt?: string;
}

export interface UpsertLoyerPayload {
  boutiqueId: string;
  details: LoyerDetail[];
}

interface GenericApiResponse<T> {
  success: boolean;
  message?: string;
  data: T;
}

interface GenericPaginatedApiResponse<T> {
  success: boolean;
  message?: string;
  items: T[];
  pagination: Pagination;
}

@Injectable({
  providedIn: 'root'
})
export class AdminCenterService {
  constructor(private readonly api: ApiService) {}

  getBoxes(options?: {
    page?: number;
    limit?: number;
    numRefSearch?: string;
    isDisponible?: boolean | null;
  }): Observable<PaginatedResponse<AdminCenterBox>> {
    const query = new URLSearchParams();
    query.set('page', String(options?.page ?? 1));
    query.set('limit', String(options?.limit ?? 100));
    query.set('sort', '-createdAt');

    if (options?.numRefSearch?.trim()) {
      query.set('numRef[regex]', options.numRefSearch.trim());
      query.set('numRef[options]', 'i');
    }

    if (typeof options?.isDisponible === 'boolean') {
      query.set('isDisponible', String(options.isDisponible));
    }

    return this.api
      .get<GenericPaginatedApiResponse<AdminCenterBox>>(`/boxes?${query.toString()}`)
      .pipe(
        map((response) => ({
          items: response?.items || [],
          pagination: response?.pagination || {
            totalDocs: 0,
            totalPages: 0,
            page: 1,
            limit: options?.limit ?? 100
          }
        }))
      );
  }

  createBox(payload: CreateBoxPayload): Observable<GenericApiResponse<AdminCenterBox>> {
    return this.api.post<GenericApiResponse<AdminCenterBox>>('/boxes', payload);
  }

  updateBox(id: string, payload: UpdateBoxPayload): Observable<GenericApiResponse<AdminCenterBox>> {
    return this.api.put<GenericApiResponse<AdminCenterBox>>(`/boxes/${id}`, payload);
  }

  deleteBox(id: string): Observable<GenericApiResponse<null>> {
    return this.api.delete<GenericApiResponse<null>>(`/boxes/${id}`);
  }

  getTypeBoxes(limit = 200): Observable<TypeBoxModel[]> {
    return this.api
      .get<GenericPaginatedApiResponse<TypeBoxModel>>(`/typebox?page=1&limit=${limit}&sort=nom`)
      .pipe(map((response) => response?.items || []));
  }

  getBoutiques(options?: {
    page?: number;
    limit?: number;
    status?: 'all' | 'active' | 'inactive' | 'pending';
    nameSearch?: string;
  }): Observable<PaginatedResponse<BoutiqueModel>> {
    const query = new URLSearchParams();
    query.set('page', String(options?.page ?? 1));
    query.set('limit', String(options?.limit ?? 100));
    query.set('sort', '-createdAt');

    const status = options?.status ?? 'all';
    if (status === 'active') {
      query.set('isActive', 'true');
    } else if (status === 'inactive') {
      query.set('isActive', 'false');
    } else if (status === 'pending') {
      query.set('isPendingFirstActivation', 'true');
      query.set('isActive', 'false');
    } 

    if (options?.nameSearch?.trim()) {
      query.set('nom[regex]', options.nameSearch.trim());
      query.set('nom[options]', 'i');
    }
    console.log('Query boutiques:', query.toString());
    return this.api
      .get<GenericPaginatedApiResponse<BoutiqueModel>>(`/boutiques?${query.toString()}`)
      .pipe(
        map((response) => ({
          items: response?.items || [],
          pagination: response?.pagination || {
            totalDocs: 0,
            totalPages: 0,
            page: 1,
            limit: options?.limit ?? 100
          }
        }))
      );
  }

  activateBoutique(id: string): Observable<GenericApiResponse<BoutiqueModel>> {
    return this.api.patch<GenericApiResponse<BoutiqueModel>>(`/boutiques/${id}/activate`, {});
  }

  deleteBoutique(id: string): Observable<GenericApiResponse<null>> {
    return this.api.delete<GenericApiResponse<null>>(`/boutiques/${id}`);
  }

  getLoyers(options?: { page?: number; limit?: number; boutiqueId?: string }): Observable<PaginatedResponse<LoyerModel>> {
    const query = new URLSearchParams();
    query.set('page', String(options?.page ?? 1));
    query.set('limit', String(options?.limit ?? 100));
    query.set('sort', '-createdAt');

    if (options?.boutiqueId) {
      query.set('boutiqueId', options.boutiqueId);
    }

    return this.api
      .get<GenericPaginatedApiResponse<LoyerModel>>(`/loyers?${query.toString()}`)
      .pipe(
        map((response) => ({
          items: response?.items || [],
          pagination: response?.pagination || {
            totalDocs: 0,
            totalPages: 0,
            page: 1,
            limit: options?.limit ?? 100
          }
        }))
      );
  }

  createLoyer(payload: UpsertLoyerPayload): Observable<GenericApiResponse<LoyerModel>> {
    return this.api.post<GenericApiResponse<LoyerModel>>('/loyers', payload);
  }

  updateLoyer(id: string, payload: UpsertLoyerPayload): Observable<GenericApiResponse<LoyerModel>> {
    return this.api.put<GenericApiResponse<LoyerModel>>(`/loyers/${id}`, payload);
  }

  deleteLoyer(id: string): Observable<GenericApiResponse<null>> {
    return this.api.delete<GenericApiResponse<null>>(`/loyers/${id}`);
  }
}
