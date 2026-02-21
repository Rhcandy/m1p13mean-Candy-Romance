import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from './api.service';
import { AuthService } from './auth.service';
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
}

export interface Locataire {
  _id: string;
  nom: string;
  numtel?: string[];
  email?: string;
}

export interface ContratLocation {
  boxes: BoxLocation[];
  dateDebutLocation: string; // ISO date
  dateFinLocation: string;   // ISO date
  jLocation: JLocation;
}

export interface Boutique {
  _id: string;
  nom: string;
  logo: string | null;
  isActive: boolean;

  promotions: string[]; // si ObjectId[]
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

@Injectable({
  providedIn: 'root'
})
export class BoutiqueService {
  constructor(private readonly api: ApiService, private authService: AuthService) {}

  getAllBoutiques(): Observable<Boutique[]> {
    return this.api.get<{ items: Boutique[] }>('/boutiques?isActive=true').pipe(
      map((response) => {
        return response?.items || [];
      })
    );
  }

  getMyBoutique(): Observable<{ success: boolean; message: string; data: Boutique }> {
      return this.api.get<{ success: boolean; message: string; data: Boutique }>('/boutiques/my-boutique');
  }

  updateMyBoutique(boutiqueData: Partial<Boutique>): Observable<{ success: boolean; message: string; data: Boutique }> {
    return this.api.put<{ success: boolean; message: string; data: Boutique }>('/boutiques/my-boutique', boutiqueData);
  }

  activateMyBoutique(): Observable<{ success: boolean; message: string; data: Boutique }> {
    return this.api.patch<{ success: boolean; message: string; data: Boutique }>('/boutiques/my-boutique/activate', {});
  }

  deactivateMyBoutique(): Observable<{ success: boolean; message: string; data: Boutique }> {
    return this.api.patch<{ success: boolean; message: string; data: Boutique }>('/boutiques/my-boutique/deactivate', {});
  }

  uploadLogo(idmyboutique: string, file: File): Observable<ApiResponse<Boutique>> {
    const formData = new FormData();
    formData.append('photo', file);
    return this.api.putFile<ApiResponse<Boutique>>(`/boutiques/${idmyboutique}/logo`, formData);
  }
}
