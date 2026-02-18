import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PanierService, Panier, ProduitAchete } from '../../../services/panier.service';
import { ProductService } from '../../../services/product.service';
import { AuthService } from '../../../services/auth.service';
import { NotificationService } from '../../../services/notification.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { trigger, transition, style, animate } from '@angular/animations';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss'],
  animations: [
    trigger('itemAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-16px)' }),
        animate('280ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        animate('220ms ease-in', style({ opacity: 0, transform: 'translateX(-16px)' }))
      ])
    ])
  ]
})
export class PanierComponent implements OnInit, OnDestroy {

  panier: Panier | null = null;
  loading = false;
  private readonly destroy$ = new Subject<void>();
  private isLoading = false;
  timeRemaining: string = '';
  isExpired = false;
  private countdownInterval: any;

  constructor(
    private readonly router: Router,
    private readonly panierService: PanierService,
    private readonly productService: ProductService,
    private readonly authService: AuthService,
    private readonly notificationService: NotificationService,
    private readonly cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.authService.ensureUserExists();
    this.loadPanier();
    this.startCountdown();

    this.panierService.onPanierUpdated()
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.refreshPanier());
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  }

  // ─── Chargement ──────────────────────────────────────────

  loadPanier(): void {
    if (this.isLoading) return;

    this.isLoading = true;
    this.loading = true;

    this.panierService.getPanier().pipe(takeUntil(this.destroy$)).subscribe({
      next: async (response) => {
        Promise.resolve().then(async () => {
          this.panier = response.data;
          
          // Charger le stock disponible pour chaque produit via l'API
          if (this.panier && this.panier.produitsachete) {
            for (const item of this.panier.produitsachete) {
              try {
                const stockData = await this.loadProductStock(item.produit._id);
                // Stocker le stock disponible dans une propriété temporaire
                (item.produit as any).availableStock = stockData;
              } catch (error) {
                console.error(`Erreur chargement stock pour ${item.produit.nom}:`, error);
                // Utiliser le calcul local en secours
                (item.produit as any).availableStock = this.getAvailableStock(item.produit);
              }
            }
          }
          
          this.loading = false;
          this.isLoading = false;
          this.updateTimeRemaining();
          this.cdr.detectChanges();
        });
      },
      error: (error) => {
        Promise.resolve().then(() => {
          console.error('Erreur chargement panier:', error);
          this.loading = false;
          this.isLoading = false;
          this.panier = null;
          this.notificationService.error('Erreur lors du chargement du panier');
          this.cdr.detectChanges();
        });
      }
    });
  }

  refreshPanier(): void {
    this.isLoading = false;
    this.loadPanier();
  }

  // ─── Countdown ───────────────────────────────────────────

  startCountdown(): void {
    this.countdownInterval = setInterval(() => {
      this.updateTimeRemaining();
      this.cdr.detectChanges();
    }, 1000);
  }

  updateTimeRemaining(): void {
    let expiryTime: number | null = null;

    if (this.panier?.expiresAt) {
      // Cas 1 : le backend fournit directement expiresAt
      expiryTime = new Date(this.panier.expiresAt).getTime();
    } else if (this.panier?.createdAt) {
      // Cas 2 : on calcule 2h après la création
      expiryTime = new Date(this.panier.createdAt).getTime() + 2 * 60 * 60 * 1000;
    }

    if (expiryTime === null) {
      this.timeRemaining = 'Non défini';
      return;
    }

    const diff = expiryTime - Date.now();

    if (diff <= 0) {
      this.timeRemaining = 'Expiré';
      this.isExpired = true;
      clearInterval(this.countdownInterval);
      this.notificationService.error('Votre panier a expiré. Veuillez le recréer.');
      return;
    }

    const h = Math.floor(diff / 3_600_000);
    const m = Math.floor((diff % 3_600_000) / 60_000);
    const s = Math.floor((diff % 60_000) / 1000);

    this.timeRemaining = `${h}h ${String(m).padStart(2, '0')}m ${String(s).padStart(2, '0')}s`;
    this.isExpired = false;
  }


  private resolveVariantStock(variant: any): { total: number; reserved: number } {
    if (!variant) return { total: 0, reserved: 0 };

    // Le champ de quantité peut s'appeler qtt, quantity, stock, etc.
    const total =
      variant.qtt ??
      variant.quantity ??
      variant.stock ??
      variant.qty ??
      0;

    const reserved =
      variant.reserved ??
      variant.reservedQty ??
      variant.reservedQuantity ??
      0;

    return {
      total: Math.max(0, Number(total)),
      reserved: Math.max(0, Number(reserved))
    };
  }

  /**
   * Stock total d'un produit (affiché pour information)
   */
  getProductStock(produit: ProduitAchete['produit']): number {
    // On prend la première variante disponible
    const variant = produit.variant?.[0] ?? produit.variant ?? null;
    const { total } = this.resolveVariantStock(variant);
    return total;
  }

  /**
   * Stock réellement disponible = total - réservations
   * C'est cette valeur qui pilote l'affichage du badge et les boutons +/-
   */
  getAvailableStock(produit: ProduitAchete['produit']): number {
    // Utiliser d'abord le stock chargé via l'API, sinon le calcul local
    if ((produit as any).availableStock !== undefined) {
      return (produit as any).availableStock;
    }
    
    // Secours : calcul local
    const variant = produit.variant?.[0] ?? produit.variant ?? null;
    const { total, reserved } = this.resolveVariantStock(variant);
    const available = total - reserved;

    // Log discret pour aider au debug sans polluer la console
    console.debug(`[Stock] ${produit.nom} → total=${total} reserved=${reserved} available=${available}`);

    return Math.max(0, available);
  }

  /**
   * Méthode pour obtenir le stock total via l'API (si nécessaire)
   */
  private async loadProductStock(produitId: string): Promise<number> {
    try {
      const stockData = await lastValueFrom(this.productService.getProductStock(produitId));
      return stockData.availableStock;
    } catch (error) {
      console.error('Erreur chargement stock:', error);
      return 0; // En cas d'erreur, retourner 0
    }
  }

  // ─── Quantités ───────────────────────────────────────────

  updateQuantity(item: ProduitAchete, quantity: number): void {
    const maxStock = this.getAvailableStock(item.produit);

    if (quantity < 1) {
      quantity = 1;
    } else if (quantity > maxStock) {
      this.notificationService.warning(
        `Stock maximum atteint : ${maxStock} article${maxStock > 1 ? 's' : ''} disponible${maxStock > 1 ? 's' : ''}`
      );
      return;
    }

    this.panierService.updateQuantite(item.produit._id, quantity)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: async (response) => {
          this.panier = response.data;
          
          // Recharger les stocks disponibles pour tous les produits
          if (this.panier && this.panier.produitsachete) {
            for (const item of this.panier.produitsachete) {
              try {
                const stockData = await this.loadProductStock(item.produit._id);
                (item.produit as any).availableStock = stockData;
              } catch (error) {
                console.error(`Erreur chargement stock pour ${item.produit.nom}:`, error);
                (item.produit as any).availableStock = this.getAvailableStock(item.produit);
              }
            }
          }
          
          this.updateTimeRemaining();
          this.notificationService.success('Quantité mise à jour');
          this.cdr.detectChanges();
        },
        error: (error) => {
          console.error('Erreur mise à jour quantité:', error);
          this.notificationService.error('Erreur lors de la mise à jour de la quantité');
        }
      });
  }

  increaseQuantity(item: ProduitAchete): void {
    const maxStock = this.getAvailableStock(item.produit);
    if (item.qtt >= maxStock) {
      this.notificationService.warning(
        `Stock maximum atteint : ${maxStock} article${maxStock > 1 ? 's' : ''} disponible${maxStock > 1 ? 's' : ''}`
      );
      return;
    }
    this.updateQuantity(item, item.qtt + 1);
  }

  decreaseQuantity(item: ProduitAchete): void {
    this.updateQuantity(item, item.qtt - 1);
  }

  // ─── Suppression / vidage ────────────────────────────────

  removeItem(item: ProduitAchete): void {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cet article du panier ?')) return;

    this.panierService.removeFromPanier(item.produit._id)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: async (response) => {
          this.panier = response.data;
          
          // Recharger les stocks disponibles pour tous les produits restants
          if (this.panier && this.panier.produitsachete) {
            for (const item of this.panier.produitsachete) {
              try {
                const stockData = await this.loadProductStock(item.produit._id);
                (item.produit as any).availableStock = stockData;
              } catch (error) {
                console.error(`Erreur chargement stock pour ${item.produit.nom}:`, error);
                (item.produit as any).availableStock = this.getAvailableStock(item.produit);
              }
            }
          }
          
          this.updateTimeRemaining();
          this.notificationService.success('Article supprimé du panier');
          this.cdr.detectChanges();
        },
        error: (error) => {
          console.error('Erreur suppression article:', error);
          this.notificationService.error('Erreur lors de la suppression de l\'article');
        }
      });
  }

  viderPanier(): void {
    if (!confirm('Êtes-vous sûr de vouloir vider votre panier ?')) return;

    this.panierService.viderPanier()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {
          this.panier = null;
          this.notificationService.success('Panier vidé avec succès');
        },
        error: (error) => {
          console.error('Erreur vidage panier:', error);
          this.notificationService.error('Erreur lors du vidage du panier');
        }
      });
  }

  clearCart(): void {
    this.viderPanier();
  }

  // ─── Validation / navigation ─────────────────────────────

  validerCommande(): void {
    if (!this.panier || this.panier.produitsachete.length === 0) {
      this.notificationService.warning('Votre panier est vide');
      return;
    }

    if (this.isExpired) {
      this.notificationService.error('Votre panier a expiré. Veuillez le recréer.');
      return;
    }

    const outOfStockItems = this.panier.produitsachete.filter(
      item => item.qtt > this.getAvailableStock(item.produit)
    );

    if (outOfStockItems.length > 0) {
      const names = outOfStockItems.map(i => i.produit.nom).join(', ');
      this.notificationService.error(`Stock insuffisant pour : ${names}`);
      return;
    }

    this.panierService.validerPanier()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          this.panier = response.data;
          this.notificationService.success('Commande validée avec succès !');
          console.log('Redirection vers checkout...');
          // Rediriger immédiatement vers la page de checkout
          this.router.navigate(['/checkout']);
        },
        error: (error) => {
          console.error('Erreur validation commande:', error);
          this.notificationService.error('Erreur lors de la validation de la commande');
        }
      });
  }

  goToProducts(): void {
    this.router.navigate(['/produits']);
  }

  continuerAchats(): void {
    this.router.navigate(['/produits']);
  }

  proceedToCheckout(): void {
    if (!this.panier || this.panier.produitsachete.length === 0) {
      this.notificationService.warning('Votre panier est vide');
      return;
    }
    this.router.navigate(['/checkout']);
  }

  // ─── Calculs ─────────────────────────────────────────────

  getTotalItems(): number {
    return this.panier?.qtt || 0;
  }

  formatPrice(price: number): string {
    return this.panierService.formatMontant(price);
  }

  calculateSubtotal(): number {
    return this.panier ? this.panierService.getSousTotal(this.panier) : 0;
  }

  calculateTotal(): number {
    return this.panier ? this.panierService.getTotal(this.panier) : 0;
  }

  getFraisLivraison(): number {
    return this.panier ? this.panierService.getFraisLivraison(this.panier) : 0;
  }
}
