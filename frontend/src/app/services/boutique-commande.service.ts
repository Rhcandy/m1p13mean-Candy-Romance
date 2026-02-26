import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

export interface BoutiqueCommande {
  _id: string;
  userId: any;
  numeroCommande: string;
  produitsachete: any[];
  produitsBoutique?: any[];
  qtt: number;
  sousTotal: number;
  remiseAcheteur: number;
  fraisLivraison: number;
  total: number;
  sousTotalBoutique: number;
  fraisLivraisonBoutique?: number;
  totalBoutique: number;
  quantiteBoutique: number;
  partCentre?: number;
  totalBoutiqueNet?: number;
  centreShareRate?: number;
  centreShareThreshold?: number;
  facture?: {
    numeroFacture?: string | null;
    sousTotalCommande: number;
    fraisLivraisonCommande: number;
    totalCommande: number;
    sousTotalBoutique: number;
    fraisLivraisonBoutique: number;
    totalBoutique: number;
    partCentre: number;
    totalBoutiqueNet: number;
  };
  statut: 'panier' | 'en_attente' | 'confirmee' | 'preparation' | 'expedie' | 'livre' | 'annule';
  isPaye: boolean;
  islivre: boolean;
  datePaiement?: string;
  dateLivraison?: string;
  dateAnnulation?: string;
  adresseLivraison?: any;
  methodePaiement: 'carte' | 'virement' | 'espece';
  notes?: string;
  suiviColis?: any;
  createdAt: string;
  updatedAt: string;
}

export interface BoutiqueStats {
  periode: { debut: string; fin: string };
  generales: {
    nombreCommandes: number;
    chiffreAffaires: number;
    quantiteVendue: number;
    chiffreAffairesPaye: number;
    tauxConversion: number;
    partCentre?: number;
    partCentrePaye?: number;
    chiffreAffairesNetBoutique?: number;
    chiffreAffairesPayeNetBoutique?: number;
    centreShareRate?: number;
    centreShareThreshold?: number;
  };
  parStatut: Array<{
    statut: string;
    nombreCommandes: number;
    chiffreAffaires: number;
    quantiteVendue: number;
  }>;
  produitsPlusVendus: Array<{
    nom: string;
    photo?: string;
    quantiteVendue: number;
    chiffreAffaires: number;
    nombreCommandes: number;
  }>;
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
export class BoutiqueCommandeService {
  constructor(private readonly api: ApiService) {}

  getMyBoutiqueCommandes(params?: {
    page?: number;
    limit?: number;
    statut?: string;
    dateDebut?: string;
    dateFin?: string;
    isPaye?: boolean;
  }): Observable<PaginationResponse<BoutiqueCommande>> {
    const queryParams = new URLSearchParams();
    if (params?.page) queryParams.append('page', params.page.toString());
    if (params?.limit) queryParams.append('limit', params.limit.toString());
    if (params?.statut) queryParams.append('statut', params.statut);
    if (params?.dateDebut) queryParams.append('dateDebut', params.dateDebut);
    if (params?.dateFin) queryParams.append('dateFin', params.dateFin);
    if (params?.isPaye !== undefined) queryParams.append('isPaye', params.isPaye.toString());
    
    const url = `/commandes-boutique/my-boutique${queryParams.toString() ? '?' + queryParams.toString() : ''}`;
    return this.api.get<PaginationResponse<BoutiqueCommande>>(url);
  }

  getMyBoutiqueCommandeById(id: string): Observable<{
    success: boolean;
    message: string;
    data: BoutiqueCommande;
  }> {
    return this.api.get(`/commandes-boutique/my-boutique/${id}`);
  }

  getMyBoutiqueStatistiques(params?: {
    periode?: 'jour' | 'semaine' | 'mois' | 'annee';
    dateDebut?: string;
    dateFin?: string;
  }): Observable<{
    success: boolean;
    message: string;
    data: BoutiqueStats;
  }> {
    const queryParams = new URLSearchParams();
    if (params?.periode) queryParams.append('periode', params.periode);
    if (params?.dateDebut) queryParams.append('dateDebut', params.dateDebut);
    if (params?.dateFin) queryParams.append('dateFin', params.dateFin);
    
    const url = `/commandes-boutique/my-boutique/statistiques${queryParams.toString() ? '?' + queryParams.toString() : ''}`;
    return this.api.get(url);
  }
}
