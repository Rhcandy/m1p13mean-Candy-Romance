import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import api from './api.service';

export interface Shop {
  id: string;
  name: string;
  description: string;
  owner: string;
  products: Product[];
  createdAt: string;
  updatedAt: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  shop: string;
  inStock: boolean;
}

export interface CreateShopData {
  name: string;
  description: string;
  image?: File;
}

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  // Récupérer tous les shops
  getAllShops(): Observable<Shop[]> {
    return from(api.get<Shop[]>('/shops')).pipe(
      map(response => response.data)
    );
  }

  // Récupérer un shop par ID
  getShopById(id: string): Observable<Shop> {
    return from(api.get<Shop>(`/shops/${id}`)).pipe(
      map(response => response.data)
    );
  }

  // Créer un nouveau shop
  createShop(data: CreateShopData): Observable<Shop> {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('description', data.description);
    
    if (data.image) {
      formData.append('image', data.image);
    }

    return from(api.post<Shop>('/shops', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })).pipe(
      map(response => response.data)
    );
  }

  // Mettre à jour un shop
  updateShop(id: string, data: Partial<CreateShopData>): Observable<Shop> {
    if (data.image) {
      const formData = new FormData();
      formData.append('name', data.name || '');
      formData.append('description', data.description || '');
      formData.append('image', data.image);

      return from(api.put<Shop>(`/shops/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })).pipe(
        map(response => response.data)
      );
    } else {
      return from(api.put<Shop>(`/shops/${id}`, data)).pipe(
        map(response => response.data)
      );
    }
  }

  // Supprimer un shop
  deleteShop(id: string): Observable<void> {
    return from(api.delete<void>(`/shops/${id}`)).pipe(
      map(response => response.data)
    );
  }

  // Récupérer les produits d'un shop
  getShopProducts(shopId: string): Observable<Product[]> {
    return from(api.get<Product[]>(`/shops/${shopId}/products`)).pipe(
      map(response => response.data)
    );
  }
}
