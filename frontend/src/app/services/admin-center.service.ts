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
  minOccupationDays: number;
  remuneration: number;
  description?: string | null;
}

export interface CreateTypeBoxPayload {
  nom: string;
  minOccupationDays: number;
  remuneration: number;
  description?: string | null;
}

export interface HistoPrixModel {
  _id: string;
  typeboxId: string | TypeBoxModel;
  prixParM2: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateHistoPrixPayload {
  typeboxId: string;
  prixParM2: number;
}

export interface CentreModel {
  _id: string;
  nom: string;
  adresse?: unknown;
}

export interface AdminCenterBox {
  _id: string;
  Superficie: number;
  typeBoxId: string | TypeBoxModel;
  etage: string;
  numRef: string;
  centreId: string | CentreModel;
  isDisponible: boolean;
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
}

export interface UpdateBoxPayload {
  Superficie?: number;
  typeBoxId?: string;
  etage?: string;
  numRef?: string;
  centreId?: string;
  isDisponible?: boolean;
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
  isBlockedForLoyer?: boolean;
  loyerBlockedReason?: string | null;
  totalResteLoyer?: number;
  locataire?: LocataireModel[];
  contratlocation?: {
    boxes?: Array<AdminCenterBox | string>;
    dateDebutLocation?: string;
    dateFinLocation?: string;
  };
  createdAt?: string;
  updatedAt?: string;
}

export interface LoyerPaiementModel {
  _id?: string;
  reference: string;
  title: string;
  libelle?: string | null;
  montant: number;
  modePaiement?: string;
  datePaiement?: string;
  createdAt?: string;
}

export interface LoyerModel {
  _id: string;
  boutiqueId: string | BoutiqueModel;
  periode: string;
  dateDebutPeriode: string;
  dateFinPeriode: string;
  joursFactures: number;
  baseHebdo: number;
  total: number;
  reste: number;
  statut: 'IMPAYE' | 'PARTIEL' | 'PAYE' | 'RETARD';
  dateEcheance: string;
  isLockedByContractEnd?: boolean;
  paiements: LoyerPaiementModel[];
  commentaire?: string | null;
  createdAt?: string;
  updatedAt?: string;
}

export interface LoyerSummaryItem {
  boutiqueId: string;
  boutiqueNom: string;
  isActive: boolean;
  isBlockedForLoyer: boolean;
  total: number;
  totalPaye: number;
  totalReste: number;
}

export interface BoutiqueLoyerSummary {
  boutiqueId: string;
  isActive?: boolean;
  isBlockedForLoyer?: boolean;
  total: number;
  totalPaye: number;
  totalReste: number;
  loyers: LoyerModel[];
}

export interface LoyerPaymentAllocation {
  loyerId: string;
  periode: string;
  montant: number;
  reste: number;
  statut: string;
}

export interface PayBoutiqueLoyerResult {
  montantDemande: number;
  montantAffecte: number;
  reference: string;
  allocations: LoyerPaymentAllocation[];
  totalResteLoyer: number;
  isBlockedForLoyer: boolean;
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

    return this.api.get<GenericPaginatedApiResponse<AdminCenterBox>>(`/boxes?${query.toString()}`).pipe(
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

  createTypeBox(payload: CreateTypeBoxPayload): Observable<GenericApiResponse<TypeBoxModel>> {
    return this.api.post<GenericApiResponse<TypeBoxModel>>('/typebox', {
      ...payload,
      periode: payload.minOccupationDays
    });
  }

  updateTypeBox(id: string, payload: Partial<CreateTypeBoxPayload>): Observable<GenericApiResponse<TypeBoxModel>> {
    return this.api.put<GenericApiResponse<TypeBoxModel>>(`/typebox/${id}`, {
      ...payload,
      periode: payload.minOccupationDays
    });
  }

  deleteTypeBox(id: string): Observable<GenericApiResponse<null>> {
    return this.api.delete<GenericApiResponse<null>>(`/typebox/${id}`);
  }

  getHistoPrix(): Observable<HistoPrixModel[]> {
    return this.api
      .get<GenericApiResponse<HistoPrixModel[]>>('/histo-prix')
      .pipe(map((response) => response?.data || []));
  }

  getHistoPrixByTypeBox(typeBoxId: string): Observable<HistoPrixModel[]> {
    return this.api
      .get<GenericApiResponse<HistoPrixModel[]>>(`/histo-prix/typebox/${typeBoxId}`)
      .pipe(map((response) => response?.data || []));
  }

  createHistoPrix(payload: CreateHistoPrixPayload): Observable<GenericApiResponse<HistoPrixModel>> {
    return this.api.post<GenericApiResponse<HistoPrixModel>>('/histo-prix', payload);
  }

  updateHistoPrix(id: string, payload: Partial<CreateHistoPrixPayload>): Observable<GenericApiResponse<HistoPrixModel>> {
    return this.api.put<GenericApiResponse<HistoPrixModel>>(`/histo-prix/${id}`, payload);
  }

  deleteHistoPrix(id: string): Observable<GenericApiResponse<null>> {
    return this.api.delete<GenericApiResponse<null>>(`/histo-prix/${id}`);
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

    return this.api.get<GenericPaginatedApiResponse<BoutiqueModel>>(`/boutiques?${query.toString()}`).pipe(
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

  getLoyers(boutiqueId?: string): Observable<LoyerModel[]> {
    const suffix = boutiqueId ? `?boutiqueId=${encodeURIComponent(boutiqueId)}` : '';
    return this.api.get<GenericApiResponse<LoyerModel[]>>(`/loyers${suffix}`).pipe(map((response) => response?.data || []));
  }

  generateLoyer(payload: { boutiqueId: string; periode: string }): Observable<GenericApiResponse<LoyerModel>> {
    return this.api.post<GenericApiResponse<LoyerModel>>('/loyers/generate', payload);
  }

  runMonthlyLoyerGeneration(): Observable<GenericApiResponse<any>> {
    return this.api.post<GenericApiResponse<any>>('/loyers/generate-monthly', {});
  }

  getLoyerSummaries(): Observable<LoyerSummaryItem[]> {
    return this.api
      .get<GenericApiResponse<LoyerSummaryItem[]>>('/loyers/summary')
      .pipe(map((response) => response?.data || []));
  }

  getBoutiqueLoyerSummary(boutiqueId: string): Observable<BoutiqueLoyerSummary> {
    return this.api
      .get<GenericApiResponse<BoutiqueLoyerSummary>>(`/loyers/summary/${boutiqueId}`)
      .pipe(map((response) => response?.data));
  }

  updateLoyerStatus(loyerId: string, statut: 'IMPAYE' | 'PARTIEL' | 'PAYE' | 'RETARD'): Observable<GenericApiResponse<LoyerModel>> {
    return this.api.patch<GenericApiResponse<LoyerModel>>(`/loyers/status/${loyerId}`, { statut });
  }

  payBoutiqueLoyer(payload: { montant: number; reference: string; title?: string; libelle?: string }): Observable<GenericApiResponse<PayBoutiqueLoyerResult>> {
    return this.api.post<GenericApiResponse<PayBoutiqueLoyerResult>>('/loyers/my-boutique/pay', payload);
  }
}
