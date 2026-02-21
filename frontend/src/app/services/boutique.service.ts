import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from './api.service';

export interface Boutique {
  _id: string;
  nom: string;
  logo?: string | null;
  isActive?: boolean;
  proprietaire?: any;
  locataire?: any[];
  contratlocation?: any;
  promotions?: any[];
  createdAt?: string;
  updatedAt?: string;
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
  constructor(private readonly api: ApiService) {}

  getAllBoutiques(): Observable<Boutique[]> {
    return this.api.get<{ data: Boutique[] }>('/boutiques/all').pipe(
      map((response) => {
        console.log('data recus:', response.data);
        return response?.data || [];
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
    return this.api.patch<{ success: boolean; message: string; data: Boutique }>('/boutiques/my-boutique/activate');
  }

  deactivateMyBoutique(): Observable<{ success: boolean; message: string; data: Boutique }> {
    return this.api.patch<{ success: boolean; message: string; data: Boutique }>('/boutiques/my-boutique/deactivate');
  }

  uploadLogo(file: File): Observable<{ success: boolean; message: string; data: { boutique: Boutique; logo: string } }> {
    const formData = new FormData();
    formData.append('profilePicture', file);
    return this.api.post<{ success: boolean; message: string; data: { boutique: Boutique; logo: string } }>(`/boutiques/my-boutique/logo`, formData);
  }
}
