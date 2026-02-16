import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PanierService, Panier, ProduitAchete } from '../../services/panier.service';
import { AuthService } from '../../services/auth.service';
import { NotificationService } from '../../services/notification.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NavigationEnd } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss'],
  animations: [
    trigger('itemAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0, transform: 'translateX(-20px)' }))
      ])
    ])
  ]
})
export class PanierComponent implements OnInit, OnDestroy {
  
  panier: Panier | null = null;
  loading = false;
  private readonly destroy$ = new Subject<void>();
  private isLoading = false;

  constructor(
    private readonly router: Router,
    private readonly panierService: PanierService,
    private readonly authService: AuthService,
    private readonly notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.authService.ensureUserExists();
    this.loadPanier();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /**
   * Charger le panier de l'utilisateur
   */
  loadPanier(): void {
    if (this.isLoading) {
      return;
    }
    
    this.isLoading = true;
    this.loading = true;
    
    this.panierService.getPanier().pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        // Retarder la mise à jour pour éviter ExpressionChangedAfterItHasBeenCheckedError
        Promise.resolve().then(() => {
          this.panier = response.data;
          this.loading = false;
          this.isLoading = false;
          console.log('Panier chargé:', this.panier);
        });
      },
      error: (error) => {
        // Retarder la mise à jour pour éviter ExpressionChangedAfterItHasBeenCheckedError
        Promise.resolve().then(() => {
          console.error('Erreur lors du chargement du panier:', error);
          this.loading = false;
          this.isLoading = false;
          this.panier = null;
          this.notificationService.error('Erreur lors du chargement du panier');
        });
      }
    });
  }

  /**
   * Rafraîchir le panier
   */
  refreshPanier(): void {
    this.isLoading = false;
    this.loadPanier();
  }

  /**
   * Obtenir le nombre total d'articles
   */
  getTotalItems(): number {
    return this.panier?.qtt || 0;
  }

  /**
   * Formater le prix
   */
  formatPrice(price: number): string {
    return this.panierService.formatMontant(price);
  }

  /**
   * Obtenir le stock disponible d'un produit (stock total - réservations)
   */
  getProductStock(produit: ProduitAchete['produit']): number {
    const variant = produit.variant?.[0];
    if (!variant) return 0;
    
    const totalStock = variant.qtt || 0;
    const reservedStock = variant.reserved || 0;
    const availableStock = totalStock - reservedStock;
    
    console.log(`Stock pour ${produit.nom}:`, {
      total: totalStock,
      reserved: reservedStock,
      available: availableStock
    });
    
    return Math.max(0, availableStock);
  }

  /**
   * Mettre à jour la quantité d'un article
   */
  updateQuantity(item: ProduitAchete, quantity: number): void {
    const maxStock = this.getProductStock(item.produit);
    
    if (quantity < 1) {
      quantity = 1;
    } else if (quantity > maxStock) {
      this.notificationService.warning(
        `Stock maximum atteint: ${maxStock} articles disponibles`
      );
      return;
    }
    
    this.panierService.updateQuantite(item.produit._id, quantity)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          this.panier = response.data;
          this.notificationService.success('Quantité mise à jour');
        },
        error: (error) => {
          console.error('Erreur lors de la mise à jour de la quantité:', error);
          this.notificationService.error('Erreur lors de la mise à jour de la quantité');
        }
      });
  }

  /**
   * Augmenter la quantité d'un article
   */
  increaseQuantity(item: ProduitAchete): void {
    this.updateQuantity(item, item.qtt + 1);
  }

  /**
   * Diminuer la quantité d'un article
   */
  decreaseQuantity(item: ProduitAchete): void {
    this.updateQuantity(item, item.qtt - 1);
  }

  /**
   * Supprimer un article du panier
   */
  removeItem(item: ProduitAchete): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet article du panier ?')) {
      this.panierService.removeFromPanier(item.produit._id)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (response) => {
            this.panier = response.data;
            this.notificationService.success('Article supprimé du panier');
          },
          error: (error) => {
            console.error('Erreur lors de la suppression du produit:', error);
            this.notificationService.error('Erreur lors de la suppression du produit');
          }
        });
    }
  }

  /**
   * Vider le panier
   */
  viderPanier(): void {
    if (confirm('Êtes-vous sûr de vouloir vider votre panier ?')) {
      this.panierService.viderPanier()
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (response) => {
            this.panier = null;
            this.notificationService.success('Panier vidé avec succès');
          },
          error: (error) => {
            console.error('Erreur lors du vidage du panier:', error);
            this.notificationService.error('Erreur lors du vidage du panier');
          }
        });
    }
  }

  /**
   * Vider le panier (alias)
   */
  clearCart(): void {
    this.viderPanier();
  }

  /**
   * Valider la commande
   */
  validerCommande(): void {
    if (!this.panier || this.panier.produitsachete.length === 0) {
      this.notificationService.warning('Votre panier est vide');
      return;
    }

    // Vérifier le stock avant validation
    const outOfStockItems = this.panier.produitsachete.filter(item => {
      const stock = this.getProductStock(item.produit);
      return item.qtt > stock;
    });

    if (outOfStockItems.length > 0) {
      const itemNames = outOfStockItems.map(item => item.produit.nom).join(', ');
      this.notificationService.error(`Stock insuffisant pour: ${itemNames}`);
      return;
    }

    this.panierService.validerPanier()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          this.panier = response.data;
          this.notificationService.success('Commande validée avec succès !');
          setTimeout(() => {
            this.router.navigate(['/mes-commandes']);
          }, 1500);
        },
        error: (error) => {
          console.error('Erreur lors de la validation de la commande:', error);
          this.notificationService.error('Erreur lors de la validation de la commande');
        }
      });
  }

  /**
   * Continuer les achats
   */
  continuerAchats(): void {
    this.router.navigate(['/produits']);
  }

  /**
   * Calculer le sous-total
   */
  calculateSubtotal(): number {
    return this.panier ? this.panierService.getSousTotal(this.panier) : 0;
  }

  /**
   * Obtenir le total du panier
   */
  calculateTotal(): number {
    return this.panier ? this.panierService.getTotal(this.panier) : 0;
  }

  /**
   * Obtenir les frais de livraison
   */
  getFraisLivraison(): number {
    return this.panier ? this.panierService.getFraisLivraison(this.panier) : 0;
  }

  /**
   * Aller vers les produits
   */
  goToProducts(): void {
    this.router.navigate(['/produits']);
  }

  /**
   * Procéder au paiement
   */
  proceedToCheckout(): void {
    if (!this.panier || this.panier.produitsachete.length === 0) {
      this.notificationService.warning('Votre panier est vide');
      return;
    }

    this.router.navigate(['/checkout']);
  }
}

