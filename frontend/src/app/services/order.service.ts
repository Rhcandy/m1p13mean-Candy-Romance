import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';


export interface OrderItem {
  product: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  user: string;
  shop: string;
  items: OrderItem[];
  totalAmount: number;
  status: 'pending' | 'confirmed' | 'preparing' | 'ready' | 'delivered' | 'cancelled';
  deliveryAddress?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateOrderData {
  shop: string;
  items: OrderItem[];
  deliveryAddress?: string;
}

export interface UpdateOrderStatusData {
  status: Order['status'];
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private readonly api: ApiService) {}

  // Récupérer toutes les commandes de l'utilisateur
  getUserOrders(): Observable<Order[]> {
    return this.api.get<Order[]>('/orders/user');
  }

  // Récupérer les commandes d'un shop
  getShopOrders(shopId: string): Observable<Order[]> {
    return this.api.get<Order[]>(`/shops/${shopId}/orders`);
  }

  // Récupérer une commande par ID
  getOrderById(id: string): Observable<Order> {
    return this.api.get<Order>(`/orders/${id}`);
  }

  // Créer une nouvelle commande
  createOrder(data: CreateOrderData): Observable<Order> {
    return this.api.post<Order>('/orders', data);
  }

  // Mettre à jour le statut d'une commande
  updateOrderStatus(id: string, data: UpdateOrderStatusData): Observable<Order> {
    return this.api.put<Order>(`/orders/${id}/status`, data);
  }

  // Annuler une commande
  cancelOrder(id: string): Observable<Order> {
    return this.api.put<Order>(`/orders/${id}/cancel`, {});
  }

  // Récupérer toutes les commandes (admin)
  getAllOrders(): Observable<Order[]> {
    return this.api.get<Order[]>('/admin/orders');
  }

  // Récupérer les statistiques des commandes pour un shop
  getShopOrderStats(shopId: string): Observable<any> {
    return this.api.get<any>(`/shops/${shopId}/orders/stats`);
  }
}
