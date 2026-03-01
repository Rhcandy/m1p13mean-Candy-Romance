import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ApiService } from './api.service';
import { ApiResponse } from './panier.service';

export interface JLocation {
  lundi: boolean;
  mardi: boolean;
  mercredi: boolean;
  jeudi: boolean;
  vendredi: boolean;
  samedi: boolean;
  dimanche: boolean;
}

export interface BoxLocation {
  _id: string;
  Superficie: number;
  etage: string;
  numRef: string;
  isDisponible: boolean;
  typeBoxId?: {
    _id: string;
    nom: string;
    minOccupationDays?: number;
    periode?: number;
  };
}

export interface AvailableBox extends BoxLocation {
  typeBoxId?: {
    _id: string;
    nom: string;
    periode?: number;
    minOccupationDays?: number;
    remuneration?: number;
    description?: string;
  };
  centreId?: {
    _id: string;
    nom: string;
    adresse?: any;
  };
}

export interface Locataire {
  _id: string;
  nom: string;
  numtel?: string[];
  email?: string;
}

export interface ContratLocation {
  boxes: BoxLocation[];
  dateDebutLocation: string;
  dateFinLocation: string;
  jLocation: JLocation;
}

export interface Boutique {
  _id: string;
  nom: string;
  logo: string | null;
  isActive: boolean;
  isPendingFirstActivation?: boolean;
  isBlockedForLoyer?: boolean;
  loyerBlockedReason?: string | null;
  totalResteLoyer?: number;
  promotions: string[];
  locataire: Locataire[];
  contratlocation: ContratLocation;
  createdAt: string;
  updatedAt: string;
  __v?: number;
}

export interface BoutiqueStats {
  nombreCommandes: number;
  chiffreAffaires: number;
  quantiteVendue: number;
  chiffreAffairesPaye: number;
  tauxConversion: number;
}

export interface BoutiqueStatusCache {
  hasBoutique: boolean;
  isActive: boolean;
  boutiqueId?: string | null;
}

export interface CreateBoutiquePayload {
  nom: string;
  locataire?: string[];
  contratlocation: {
    boxes: string[];
    dateDebutLocation: string;
    dateFinLocation: string;
    jLocation: JLocation;
  };
}

@Injectable({
  providedIn: 'root'
})
export class BoutiqueService {
  private readonly boutiqueStatusKey = 'boutique_status_cache';

  constructor(private readonly api: ApiService) {}

  getAllBoutiques(): Observable<Boutique[]> {
    return this.api.get<{ items: Boutique[] }>('/boutiques?isActive=true').pipe(
      map((response) => response?.items || [])
    );
  }

  getMyBoutique(): Observable<{ success: boolean; message: string; data: Boutique }> {
    return this.api.get<{ success: boolean; message: string; data: Boutique }>('/boutiques/my-boutique').pipe(
      tap((response) => {
        if (response?.success && response.data) {
          this.setCachedBoutiqueStatus({
            hasBoutique: true,
            isActive: !!response.data.isActive,
            boutiqueId: response.data._id
          });
        }
      }),
      catchError((error) => {
        if (error?.status === 404) {
          this.setCachedBoutiqueStatus({ hasBoutique: false, isActive: false, boutiqueId: null });
        }
        return throwError(() => error);
      })
    );
  }

  refreshMyBoutiqueStatus(): Observable<BoutiqueStatusCache> {
    return this.api.get<{ success: boolean; message: string; data: Boutique }>('/boutiques/my-boutique').pipe(
      map((response) => {
        const status: BoutiqueStatusCache = {
          hasBoutique: !!response?.data,
          isActive: !!response?.data?.isActive,
          boutiqueId: response?.data?._id || null
        };
        this.setCachedBoutiqueStatus(status);
        return status;
      }),
      catchError((error) => {
        if (error?.status === 404) {
          const status: BoutiqueStatusCache = { hasBoutique: false, isActive: false, boutiqueId: null };
          this.setCachedBoutiqueStatus(status);
          return of(status);
        }
        return throwError(() => error);
      })
    );
  }

  getCachedBoutiqueStatus(): BoutiqueStatusCache {
    const raw = localStorage.getItem(this.boutiqueStatusKey);
    if (!raw) {
      return { hasBoutique: false, isActive: false, boutiqueId: null };
    }

    try {
      const parsed = JSON.parse(raw) as BoutiqueStatusCache;
      return {
        hasBoutique: !!parsed.hasBoutique,
        isActive: !!parsed.isActive,
        boutiqueId: parsed.boutiqueId || null
      };
    } catch {
      return { hasBoutique: false, isActive: false, boutiqueId: null };
    }
  }

  setCachedBoutiqueStatus(status: BoutiqueStatusCache): void {
    localStorage.setItem(this.boutiqueStatusKey, JSON.stringify({
      hasBoutique: !!status.hasBoutique,
      isActive: !!status.isActive,
      boutiqueId: status.boutiqueId || null
    }));
  }

  clearCachedBoutiqueStatus(): void {
    localStorage.removeItem(this.boutiqueStatusKey);
  }

  hasActiveBoutiqueCached(): boolean {
    const status = this.getCachedBoutiqueStatus();
    return status.hasBoutique && status.isActive;
  }

  updateMyBoutique(boutiqueData: Partial<Boutique>): Observable<{ success: boolean; message: string; data: Boutique }> {
    return this.api.put<{ success: boolean; message: string; data: Boutique }>('/boutiques/my-boutique', boutiqueData).pipe(
      tap((response) => {
        if (response?.success && response.data) {
          this.setCachedBoutiqueStatus({
            hasBoutique: true,
            isActive: !!response.data.isActive,
            boutiqueId: response.data._id
          });
        }
      })
    );
  }

  createBoutique(payload: CreateBoutiquePayload): Observable<{ success: boolean; message: string; data: Boutique }> {
    return this.api.post<{ success: boolean; message: string; data: Boutique }>('/boutiques', payload).pipe(
      tap((response) => {
        if (response?.success && response.data) {
          this.setCachedBoutiqueStatus({
            hasBoutique: true,
            isActive: !!response.data.isActive,
            boutiqueId: response.data._id
          });
        }
      })
    );
  }

  activateMyBoutique(): Observable<{ success: boolean; message: string; data: Boutique }> {
    return this.api.patch<{ success: boolean; message: string; data: Boutique }>('/boutiques/my-boutique/activate', {}).pipe(
      tap((response) => {
        if (response?.success && response.data) {
          this.setCachedBoutiqueStatus({
            hasBoutique: true,
            isActive: !!response.data.isActive,
            boutiqueId: response.data._id
          });
        }
      })
    );
  }

  renewMyBoutiqueContract(dateFinLocation: string): Observable<{ success: boolean; message: string; data: Boutique }> {
    return this.api.patch<{ success: boolean; message: string; data: Boutique }>('/boutiques/my-boutique/renew', {
      dateFinLocation
    });
  }

  deactivateMyBoutique(): Observable<{ success: boolean; message: string; data: Boutique }> {
    return this.api.patch<{ success: boolean; message: string; data: Boutique }>('/boutiques/my-boutique/deactivate', {}).pipe(
      tap((response) => {
        if (response?.success && response.data) {
          this.setCachedBoutiqueStatus({
            hasBoutique: true,
            isActive: !!response.data.isActive,
            boutiqueId: response.data._id
          });
        }
      })
    );
  }

  quitterCentre(): Observable<{ success: boolean; message: string }> {
    return this.api.delete<{ success: boolean; message: string }>('/boutiques/my-boutique/quitter-centre').pipe(
      tap(() => {
        this.setCachedBoutiqueStatus({ hasBoutique: false, isActive: false, boutiqueId: null });
      })
    );
  }

  getAvailableBoxes(params?: { centreId?: string; typeBoxId?: string }): Observable<AvailableBox[]> {
    const query = new URLSearchParams();
    if (params?.centreId) query.append('centreId', params.centreId);
    if (params?.typeBoxId) query.append('typeBoxId', params.typeBoxId);
    const suffix = query.toString() ? `?${query.toString()}` : '';

    return this.api.get<{ success: boolean; data: AvailableBox[] }>(`/boxes/disponibles${suffix}`).pipe(
      map((response) => response?.data || [])
    );
  }

  uploadLogo(idmyboutique: string, file: File): Observable<ApiResponse<Boutique>> {
    const formData = new FormData();
    formData.append('photo', file);
    return this.api.putFile<ApiResponse<Boutique>>(`/boutiques/${idmyboutique}/logo`, formData);
  }
}
