import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import api from './api.service';

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

  // Récupérer toutes les commandes de l'utilisateur
  getUserOrders(): Observable<Order[]> {
    return from(api.get<Order[]>('/orders/user')).pipe(
      map(response => response.data)
    );
  }

  // Récupérer les commandes d'un shop
  getShopOrders(shopId: string): Observable<Order[]> {
    return from(api.get<Order[]>(`/shops/${shopId}/orders`)).pipe(
      map(response => response.data)
    );
  }

  // Récupérer une commande par ID
  getOrderById(id: string): Observable<Order> {
    return from(api.get<Order>(`/orders/${id}`)).pipe(
      map(response => response.data)
    );
  }

  // Créer une nouvelle commande
  createOrder(data: CreateOrderData): Observable<Order> {
    return from(api.post<Order>('/orders', data)).pipe(
      map(response => response.data)
    );
  }

  // Mettre à jour le statut d'une commande
  updateOrderStatus(id: string, data: UpdateOrderStatusData): Observable<Order> {
    return from(api.patch<Order>(`/orders/${id}/status`, data)).pipe(
      map(response => response.data)
    );
  }

  // Annuler une commande
  cancelOrder(id: string): Observable<Order> {
    return from(api.patch<Order>(`/orders/${id}/cancel`, {})).pipe(
      map(response => response.data)
    );
  }

  // Récupérer toutes les commandes (admin)
  getAllOrders(): Observable<Order[]> {
    return from(api.get<Order[]>('/admin/orders')).pipe(
      map(response => response.data)
    );
  }

  // Récupérer les statistiques des commandes pour un shop
  getShopOrderStats(shopId: string): Observable<any> {
    return from(api.get<any>(`/shops/${shopId}/orders/stats`)).pipe(
      map(response => response.data)
    );
  }
}
