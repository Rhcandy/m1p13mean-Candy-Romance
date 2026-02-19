import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';
import { AuthService } from './auth.service';

// Interfaces basÃ©es sur le modÃ¨le Panier
export interface ProduitAchete {
  produit: {
    _id: string;
    nom: string;
    photo?: string;
    prix: number;
    variant?: Array<{ qtt: number; reserved?: number }>;
    averageRating?: number;
    categorieId?: {
      _id: string;
      nom: string;
    };
    boutiqueId?: {
      _id: string;
      nom: string;
    };
  };
  qtt: number;
  prixUnitaire: number;
  sousTotal: number;
}

export interface Panier {
  _id?: string; // Optionnel car crÃ©Ã© par MongoDB
  userId: any;
  numeroCommande: string;
  produitsachete: ProduitAchete[];
  qtt: number;
  sousTotal: number;
  fraisLivraison: number;
  total: number;
  statut: 'panier' | 'en_attente' | 'confirmee' | 'preparation' | 'expedie' | 'livre';
  isPaye: boolean;
  islivre: boolean;
  produitsBoutique?: ProduitAchete[];
  sousTotalBoutique?: number;
  totalBoutique?: number;
  expiresAt?: string; // Date d'expiration du panier
  datePaiement?: Date;
  dateLivraison?: Date;
  dateAnnulation?: Date;
  adresseLivraison?: {
    nomEndroit?: string;
    latitude?: number;
    longitude?: number;
    telephone?: string;
  };
  methodePaiement?: 'carte' | 'virement' | 'espece';
  notes?: string;
  suiviColis?: {
    transporteur: string;
    numeroSuivi: string;
    lienSuivi: string;
  };
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
  error?: string;
}

export interface AddToPanierRequest {
  productId: string;
  quantity?: number;
  userId?: string;
  attributes?: { [key: string]: string }; // Attributs de la variante
}

export interface UpdateQuantiteRequest {
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  private readonly endpoint = '/paniers';
  private readonly panierUpdated$ = new BehaviorSubject<void>(undefined);

  constructor(
    private readonly apiService: ApiService,
    private readonly authService: AuthService
  ) {}

  /**
   * Ã‰mettre un Ã©vÃ©nement de mise Ã  jour du panier
   */
  notifyPanierUpdated(): void {
    this.panierUpdated$.next(undefined);
  }

  /**
   * Observer les mises Ã  jour du panier
   */
  onPanierUpdated(): Observable<void> {
    return this.panierUpdated$.asObservable();
  }

  /**
   * RÃ©cupÃ©rer l'ID de l'utilisateur actuel
   */
  private getCurrentUserId(): string {
    return this.authService.getUserId();
  }

  /**
   * RÃ©cupÃ©rer le panier de l'utilisateur
   */
  getPanier(): Observable<ApiResponse<Panier>> {
    const userId = this.getCurrentUserId();
    const headers = { 'X-User-Id': userId };
    return this.apiService.get<ApiResponse<Panier>>(this.endpoint, { headers });
  }
   /**
   * RÃ©cupÃ©rer le commande de l'utilisateur
   */
  getCommande(): Observable<ApiResponse<Panier>> {
    const userId = this.getCurrentUserId();
    const headers = { 'X-User-Id': userId };
    return this.apiService.get<ApiResponse<Panier>>(`${this.endpoint}/commande`, { headers });
  }

  /**
   * Ajouter un produit au panier
   */
  addToPanier(request: AddToPanierRequest): Observable<ApiResponse<Panier>> {
    const userId = this.getCurrentUserId();
    const requestWithUserId = { ...request, userId };
    return this.apiService.post<ApiResponse<Panier>>(`${this.endpoint}/ajouter`, requestWithUserId);
  }

  /**
   * Ajouter un produit au panier (méthode de compatibilitÃ©)
   */
  ajouterProduit(productId: string, quantity: number = 1): Observable<ApiResponse<Panier>> {
    return this.addToPanier({ productId, quantity });
  }

  /**
   * Mettre Ã  jour la quantitÃ© d'un produit dans le panier
   */
  updateQuantite(productId: string, quantity: number): Observable<ApiResponse<Panier>> {
    const userId = this.getCurrentUserId();
    return this.apiService.put<ApiResponse<Panier>>(`${this.endpoint}/${productId}/quantite`, { quantity, userId });
  }

  /**
   * Supprimer un produit du panier
   */
  removeFromPanier(productId: string): Observable<ApiResponse<Panier>> {
    const userId = this.getCurrentUserId();
    return this.apiService.delete<ApiResponse<Panier>>(`${this.endpoint}/${productId}?userId=${userId}`);
  }

  /**
   * Vider tout le panier
   */
  viderPanier(): Observable<ApiResponse<Panier>> {
    const userId = this.getCurrentUserId();
    console.log('Vidage panier pour utilisateur:', userId);
    return this.apiService.delete<ApiResponse<Panier>>(`${this.endpoint}/vider?userId=${userId}`);
  }

  /**
   * Valider la commande (marquer le panier comme livrÃ©)
   */
  validerPanier(): Observable<ApiResponse<Panier>> {
    const userId = this.getCurrentUserId();
    return this.apiService.post<ApiResponse<Panier>>(`${this.endpoint}/valider`, { userId });
  }

  /**
   * Mettre Ã  jour la commande (adresse et méthode de paiement)
   */
  mettreAJourCommande(data: { adresseLivraison?: any; methodePaiement?: string }): Observable<ApiResponse<Panier>> {
    const userId = this.getCurrentUserId();
    return this.apiService.post<ApiResponse<Panier>>(`${this.endpoint}/mettre-a-jour`, { ...data, userId });
  }

  /**
   * Payer la commande
   */
  payerCommande(paiementDetails?: any): Observable<ApiResponse<{ commande: Panier; facture: any }>> {
    const userId = this.getCurrentUserId();
    return this.apiService.post<ApiResponse<{ commande: Panier; facture: any }>>(`${this.endpoint}/payer`, { userId, paiementDetails });
  }

  /**
   * Annuler une commande
   */
  annulerCommande(motif?: string): Observable<ApiResponse<Panier>> {
    const userId = this.getCurrentUserId();
    return this.apiService.post<ApiResponse<Panier>>(`${this.endpoint}/annuler`, { userId, motif });
  }

  /**
   * RÃ©cupÃ©rer l'historique des commandes
   */
  getHistoriqueCommandes(): Observable<ApiResponse<Panier[]>> {
    const userId = this.getCurrentUserId();
    const headers = { 'X-User-Id': userId };
    return this.apiService.get<ApiResponse<Panier[]>>(`${this.endpoint}/historique`, { headers });
  }

  /**
   * Calculer le nombre total d'articles dans le panier
   */
  getNombreArticles(panier: Panier): number {
    return panier?.produitsachete?.reduce((total, item) => total + item.qtt, 0) ?? 0;
  }

  /**
   * Calculer le montant total du panier
   */
  getMontantTotal(panier: Panier): number {
    return panier?.total ?? 0;
  }

  /**
   * VÃ©rifier si le panier est vide
   */
  isPanierVide(panier: Panier): boolean {
    return !panier || !panier.produitsachete || panier.produitsachete.length === 0;
  }

  /**
   * Obtenir le sous-total des produits (sans frais de livraison)
   */
  getSousTotal(panier: Panier): number {
    return panier?.sousTotal || 0;
  }

  /**
   * Obtenir les frais de livraison
   */
  getFraisLivraison(panier: Panier): number {
    return panier?.fraisLivraison || 0;
  }

  /**
   * Obtenir le total final (sous-total + frais de livraison)
   */
  getTotal(panier: Panier): number {
    return panier?.total || 0;
  }

  /**
   * Formater un montant en Ariary
   */
  formatMontant(montant: number): string {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'MGA' // Code ISO pour l'Ariary malgache
    }).format(montant);
  }

  /**
   * Formater un montant pour PDF (separateur en ".")
   */
  formatMontantPdf(montant: number): string {
    const safeValue = Number(montant ?? 0);
    const rounded = Math.round(safeValue);
    const absValue = Math.abs(rounded);
    const formatted = absValue.toLocaleString('fr-FR', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
    const withDots = formatted.replace(/[\u202f\u00a0\s]/g, '.');
    const sign = rounded < 0 ? '-' : '';
    return `${sign}${withDots} Ar`;
  }

  /**
   * Obtenir le libellé du statut en français
   */
  getStatutLibelle(statut: string): string {
    const statuts: { [key: string]: string } = {
      'panier': 'Panier',
      'en_attente': 'En attente de paiement',
      'confirmee': 'Confirmée',
      'preparation': 'En préparation',
      'expedie': 'Expédiée',
      'livre': 'Livrée',
      'annule': 'Annulée'
    };
    return statuts[statut] || statut;
  }

  /**
   * Obtenir le libellé de la méthode de paiement en français
   */
  getMethodePaiementLibelle(methode: string): string {
    const methodes: { [key: string]: string } = {
      'carte': 'Carte bancaire',
      'virement': 'Virement bancaire',
      'espece': 'Espèces'
    };
    return methodes[methode] || methode;
  }

  /**
   * Recuperer les commandes liees a la boutique de l'admin
   */
  getCommandesBoutique(): Observable<ApiResponse<Panier[]>> {
    return this.apiService.get<ApiResponse<Panier[]>>(`${this.endpoint}/boutique-commandes`);
  }

  /**
   * Recuperer une commande par ID
   */
  getCommandeById(commandeId: string): Observable<ApiResponse<Panier>> {
    return this.apiService.get<ApiResponse<Panier>>(`${this.endpoint}/${commandeId}`);
  }
}






