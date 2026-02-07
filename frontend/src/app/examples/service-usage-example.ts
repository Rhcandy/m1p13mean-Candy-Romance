import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ShopService, Shop, CreateShopData } from '../services/shop.service';
import { ProductService, Product, CreateProductData } from '../services/product.service';
import { OrderService, Order, CreateOrderData } from '../services/order.service';

@Component({
  selector: 'app-service-usage-example',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container">
      <h2>Exemple d'utilisation des services</h2>
      
      <!-- Exemple Shop Service -->
      <div class="section">
        <h3>Shop Service</h3>
        <button (click)="loadShops()">Charger les shops</button>
        <button (click)="createShop()">Créer un shop</button>
        <div *ngIf="shops.length > 0">
          <h4>Shops:</h4>
          <ul>
            <li *ngFor="let shop of shops">{{ shop.name }} - {{ shop.description }}</li>
          </ul>
        </div>
      </div>

      <!-- Exemple Product Service -->
      <div class="section">
        <h3>Product Service</h3>
        <button (click)="loadProducts()">Charger les produits</button>
        <button (click)="createProduct()">Créer un produit</button>
        <div *ngIf="products.length > 0">
          <h4>Produits:</h4>
          <ul>
            <li *ngFor="let product of products">{{ product.name }} - {{ product.price }}€</li>
          </ul>
        </div>
      </div>

      <!-- Exemple Order Service -->
      <div class="section">
        <h3>Order Service</h3>
        <button (click)="loadOrders()">Charger les commandes</button>
        <button (click)="createOrder()">Créer une commande</button>
        <div *ngIf="orders.length > 0">
          <h4>Commandes:</h4>
          <ul>
            <li *ngFor="let order of orders">Commande {{ order.id }} - {{ order.totalAmount }}€ - {{ order.status }}</li>
          </ul>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .container {
      padding: 20px;
      max-width: 800px;
      margin: 0 auto;
    }
    .section {
      margin-bottom: 30px;
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 8px;
    }
    button {
      margin-right: 10px;
      padding: 8px 16px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover {
      background-color: #0056b3;
    }
    ul {
      margin-top: 10px;
    }
    li {
      margin-bottom: 5px;
    }
  `]
})
export class ServiceUsageExampleComponent {
  private authService = inject(AuthService);
  private shopService = inject(ShopService);
  private productService = inject(ProductService);
  private orderService = inject(OrderService);

  shops: Shop[] = [];
  products: Product[] = [];
  orders: Order[] = [];

  // Exemple d'utilisation du Shop Service
  loadShops(): void {
    this.shopService.getAllShops().subscribe({
      next: (shops) => {
        this.shops = shops;
        console.log('Shops chargés:', shops);
      },
      error: (error) => {
        console.error('Erreur lors du chargement des shops:', error);
      }
    });
  }

  createShop(): void {
    const shopData: CreateShopData = {
      name: 'Mon Shop Exemple',
      description: 'Description de mon shop'
    };

    this.shopService.createShop(shopData).subscribe({
      next: (shop) => {
        console.log('Shop créé:', shop);
        this.loadShops(); // Recharger la liste
      },
      error: (error) => {
        console.error('Erreur lors de la création du shop:', error);
      }
    });
  }

  // Exemple d'utilisation du Product Service
  loadProducts(): void {
    this.productService.getAllProducts().subscribe({
      next: (products) => {
        this.products = products;
        console.log('Produits chargés:', products);
      },
      error: (error) => {
        console.error('Erreur lors du chargement des produits:', error);
      }
    });
  }

  createProduct(): void {
    const productData: CreateProductData = {
      name: 'Mon Produit Exemple',
      description: 'Description de mon produit',
      price: 29.99,
      shop: 'shop-id-here', // Remplacer par un ID de shop réel
      category: 'categorie-exemple'
    };

    this.productService.createProduct(productData).subscribe({
      next: (product) => {
        console.log('Produit créé:', product);
        this.loadProducts(); // Recharger la liste
      },
      error: (error) => {
        console.error('Erreur lors de la création du produit:', error);
      }
    });
  }

  // Exemple d'utilisation du Order Service
  loadOrders(): void {
    this.orderService.getUserOrders().subscribe({
      next: (orders) => {
        this.orders = orders;
        console.log('Commandes chargées:', orders);
      },
      error: (error) => {
        console.error('Erreur lors du chargement des commandes:', error);
      }
    });
  }

  createOrder(): void {
    const orderData: CreateOrderData = {
      shop: 'shop-id-here', // Remplacer par un ID de shop réel
      items: [
        {
          product: 'product-id-here', // Remplacer par un ID de produit réel
          quantity: 2,
          price: 29.99
        }
      ],
      deliveryAddress: '123 rue Exemple, 75000 Paris'
    };

    this.orderService.createOrder(orderData).subscribe({
      next: (order) => {
        console.log('Commande créée:', order);
        this.loadOrders(); // Recharger la liste
      },
      error: (error) => {
        console.error('Erreur lors de la création de la commande:', error);
      }
    });
  }

  // Exemple d'utilisation du Auth Service
  checkAuthStatus(): void {
    console.log('Utilisateur actuel:', this.authService.currentUser);
    console.log('Est authentifié:', this.authService.isAuthenticated);
  }

  logout(): void {
    this.authService.logout();
  }
}
