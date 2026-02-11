import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

// Services
import { AuthService } from '../../../../services/auth.service';
import { PanierService } from '../../../../services/panier.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  userName = '';
  cartItemCount = 0;

  constructor(
    private authService: AuthService,
    private panierService: PanierService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.updateAuthStatus();
    this.updateCartCount();
  }

  updateAuthStatus(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    if (this.isLoggedIn) {
      const user = this.authService.getCurrentUser();
      this.userName = user?.nom || 'Utilisateur';
    }
  }

  updateCartCount(): void {
    if (this.isLoggedIn) {
      this.panierService.getPanier().subscribe({
        next: (response) => {
          if (response.data && response.data.produitsachete) {
            this.cartItemCount = response.data.produitsachete.reduce((total, item) => total + item.qtt, 0);
          } else {
            this.cartItemCount = 0;
          }
        },
        error: (error) => {
          console.error('Erreur chargement panier:', error);
          this.cartItemCount = 0;
        }
      });
    }
  }

  toggleCart(): void {
    // Émettre un événement pour ouvrir/fermer le panier
    const cartSidebar = document.querySelector('app-cart-sidebar');
    if (cartSidebar) {
      const component = cartSidebar as any;
      if (component.toggleCart) {
        component.toggleCart();
      }
    }
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
