import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';
import { AuthService } from './auth.service';

// Interfaces basées sur le modèle Panier
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
  _id?: string; // Optionnel car créé par MongoDB
  userId: string;
  numeroCommande: string;
  produitsachete: ProduitAchete[];
  qtt: number;
  sousTotal: number;
  fraisLivraison: number;
  total: number;
  statut: 'panier' | 'en_attente' | 'confirmee' | 'preparation' | 'expedie' | 'livre' | 'annule';
  isPaye: boolean;
  islivre: boolean;
  datePaiement?: Date;
  dateLivraison?: Date;
  dateAnnulation?: Date;
  adresseLivraison?: {
    rue: string;
    ville: string;
    codePostal: string;
    pays: string;
    telephone: string;
  };
  methodePaiement?: 'carte' | 'paypal' | 'virement' | 'espece';
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
   * Émettre un événement de mise à jour du panier
   */
  notifyPanierUpdated(): void {
    this.panierUpdated$.next(undefined);
  }

  /**
   * Observer les mises à jour du panier
   */
  onPanierUpdated(): Observable<void> {
    return this.panierUpdated$.asObservable();
  }

  /**
   * Récupérer l'ID de l'utilisateur actuel
   */
  private getCurrentUserId(): string {
    return this.authService.getUserId();
  }

  /**
   * Récupérer le panier de l'utilisateur
   */
  getPanier(): Observable<ApiResponse<Panier>> {
    const userId = this.getCurrentUserId();
    const headers = { 'X-User-Id': userId };
    return this.apiService.get<ApiResponse<Panier>>(this.endpoint, { headers });
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
   * Ajouter un produit au panier (méthode de compatibilité)
   */
  ajouterProduit(productId: string, quantity: number = 1): Observable<ApiResponse<Panier>> {
    return this.addToPanier({ productId, quantity });
  }

  /**
   * Mettre à jour la quantité d'un produit dans le panier
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
    return this.apiService.delete<ApiResponse<Panier>>(`${this.endpoint}/${productId}`, { userId });
  }

  /**
   * Vider tout le panier
   */
  viderPanier(): Observable<ApiResponse<Panier>> {
    const userId = this.getCurrentUserId();
    return this.apiService.delete<ApiResponse<Panier>>(`${this.endpoint}/vider`, { userId });
  }

  /**
   * Valider la commande (marquer le panier comme livré)
   */
  validerPanier(): Observable<ApiResponse<Panier>> {
    const userId = this.getCurrentUserId();
    return this.apiService.post<ApiResponse<Panier>>(`${this.endpoint}/valider`, { userId });
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
   * Vérifier si le panier est vide
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
   * Formater un montant en euros
   */
  formatMontant(montant: number): string {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR'
    }).format(montant);
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
      'paypal': 'PayPal',
      'virement': 'Virement bancaire',
      'espece': 'Espèces'
    };
    return methodes[methode] || methode;
  }
}
