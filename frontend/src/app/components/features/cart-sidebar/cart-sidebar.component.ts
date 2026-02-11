import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Services
import { PanierService } from '../../../services/panier.service';
import { AuthService } from '../../../services/auth.service';

// Models
import { Panier } from '../../../models/panier.model';

@Component({
  selector: 'app-cart-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './cart-sidebar.component.html',
  styleUrls: ['./cart-sidebar.component.scss']
})
export class CartSidebarComponent implements OnInit {
  panier: Panier | null = null;
  isLoading = false;
  isCartOpen = false;

  constructor(
    private panierService: PanierService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.chargerPanier();
  }

  chargerPanier(): void {
    if (this.authService.isLoggedIn()) {
      this.isLoading = true;
      this.panierService.getPanier().subscribe({
        next: (response) => {
          this.panier = response.data;
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Erreur chargement panier:', error);
          this.isLoading = false;
        }
      });
    }
  }

  toggleCart(): void {
    this.isCartOpen = !this.isCartOpen;
  }

  closeCart(): void {
    this.isCartOpen = false;
  }

  updateQuantite(itemId: string, quantite: number): void {
    if (quantite <= 0) {
      this.supprimerArticle(itemId);
      return;
    }

    this.panierService.updatePanierItem(itemId, quantite).subscribe({
      next: () => {
        this.chargerPanier();
      },
      error: (error) => {
        console.error('Erreur mise à jour panier:', error);
      }
    });
  }

  supprimerArticle(itemId: string): void {
    this.panierService.removeFromPanier(itemId).subscribe({
      next: () => {
        this.chargerPanier();
      },
      error: (error) => {
        console.error('Erreur suppression panier:', error);
      }
    });
  }

  viderPanier(): void {
    this.panierService.clearPanier().subscribe({
      next: () => {
        this.chargerPanier();
      },
      error: (error) => {
        console.error('Erreur vidage panier:', error);
      }
    });
  }

  getNombreArticles(): number {
    if (!this.panier || !this.panier.produitsachete) {
      return 0;
    }
    return this.panier.produitsachete.reduce((total, item) => total + item.qtt, 0);
  }

  getTotal(): number {
    return this.panier?.total || 0;
  }
}
