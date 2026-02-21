import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from './api.service';

export interface AdresseLivraison {
  nomEndroit?: string;
  latitude?: number;
  longitude?: number;
  telephone?: string;
}

export interface FraisLivraisonResponse {
  fraisLivraison: number;
  distance: number;
  dateLivraison: string;
  centreDistribution: {
    nom: string;
    adresse: any;
    fraisLivraison?: {
      baseFrais: number;
      coutParKm: number;
      kmGratuits: number;
    };
  };
}

export interface CentreDistribution {
  _id: string;
  nom: string;
  adresse: any;
  telephone?: string;
  email?: string;
  fraisLivraison?: {
    baseFrais: number;
    coutParKm: number;
    kmGratuits: number;
  };
}

@Injectable({
  providedIn: 'root'
})
export class LivraisonService {
  private readonly endpoint = '/livraison';

  constructor(private readonly apiService: ApiService) {}

  /**
   * Calculer les frais de livraison en fonction de l'adresse
   */
  calculerFraisLivraison(adresse: AdresseLivraison): Observable<FraisLivraisonResponse> {
    return this.apiService.post<{data: FraisLivraisonResponse}>(`${this.endpoint}/calculer-frais`, { adresseLivraison: adresse }).pipe(
      map(response => response.data)
    );
  }

  /**
   * Recuperer tous les centres de distribution
   */
  getCentresDistribution(): Observable<CentreDistribution[]> {
    return this.apiService.get<{data: CentreDistribution[]}>(`${this.endpoint}/centres`).pipe(
      map(response => response.data)
    );
  }

  getCentreDistributionById(id: string): Observable<CentreDistribution> {
    return this.apiService.get<{data: CentreDistribution}>(`${this.endpoint}/centres/${id}`).pipe(
      map(response => response.data)
    );
  }

  updateCentreFraisLivraison(id: string, fraisLivraison: { baseFrais?: number; coutParKm?: number; kmGratuits?: number }): Observable<CentreDistribution> {
    return this.apiService.put<{data: CentreDistribution}>(`${this.endpoint}/centres/${id}/frais`, fraisLivraison).pipe(
      map(response => response.data)
    );
  }

  /**
   * Formater une adresse pour l'affichage
   */
  formaterAdresse(adresse: AdresseLivraison): string {
    if (adresse.nomEndroit) return adresse.nomEndroit;
    if (adresse.latitude != null && adresse.longitude != null) {
      return `${adresse.latitude}, ${adresse.longitude}`;
    }
    return '';
  }

  /**
   * Valider un numero de telephone
   */
  validerTelephone(telephone: string): boolean {
    return /^[0-9]{10,14}$/.test(telephone.replace(/\s/g, ''));
  }
}
