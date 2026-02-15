import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

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
  constructor(private readonly api: ApiService) {}

  // Récupérer tous les shops
  getAllShops(): Observable<Shop[]> {
    return this.api.get<Shop[]>('/shops');
  }

  // Récupérer un shop par ID
  getShopById(id: string): Observable<Shop> {
    return this.api.get<Shop>(`/shops/${id}`);
  }

  // Créer un nouveau shop
  createShop(data: CreateShopData): Observable<Shop> {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('description', data.description);
    
    if (data.image) {
      formData.append('image', data.image);
    }

    return this.api.postFile<Shop>('/shops', formData);
  }

  // Mettre à jour un shop
  updateShop(id: string, data: Partial<CreateShopData>): Observable<Shop> {
    if (data.image) {
      const formData = new FormData();
      formData.append('name', data.name || '');
      formData.append('description', data.description || '');
      formData.append('image', data.image);

      return this.api.putFile<Shop>(`/shops/${id}`, formData);
    } else {
      return this.api.put<Shop>(`/shops/${id}`, data);
    }
  }

  // Supprimer un shop
  deleteShop(id: string): Observable<void> {
    return this.api.delete<void>(`/shops/${id}`);
  }

  // Récupérer les produits d'un shop
  getShopProducts(shopId: string): Observable<Product[]> {
    return this.api.get<Product[]>(`/shops/${shopId}/products`);
  }
}
