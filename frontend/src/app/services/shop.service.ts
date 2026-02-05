import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Shop {
  id: string;
  name: string;
  description: string;
  address: string;
  phone?: string;
  email?: string;
  image?: string;
  ownerId: string;
  owner?: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
  };
  rating: number;
  products: Product[];
  createdAt: string;
  updatedAt: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  stock: number;
  shopId: string;
  rating: number;
  createdAt: string;
  updatedAt: string;
}

export interface CreateShopRequest {
  name: string;
  description: string;
  address: string;
  phone?: string;
  email?: string;
  image?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  private apiUrl = 'http://localhost:3000/api/shops';

  constructor(private http: HttpClient) {}

  getAllShops(): Observable<Shop[]> {
    return this.http.get<Shop[]>(this.apiUrl);
  }

  getShopById(id: string): Observable<Shop> {
    return this.http.get<Shop>(`${this.apiUrl}/${id}`);
  }

  getMyShop(): Observable<Shop> {
    return this.http.get<Shop>(`${this.apiUrl}/my`);
  }

  createShop(shopData: CreateShopRequest): Observable<Shop> {
    return this.http.post<Shop>(this.apiUrl, shopData);
  }

  updateShop(id: string, shopData: Partial<CreateShopRequest>): Observable<Shop> {
    return this.http.put<Shop>(`${this.apiUrl}/${id}`, shopData);
  }

  deleteShop(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getShopProducts(shopId: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/${shopId}/products`);
  }

  getTopShops(limit: number = 10): Observable<Shop[]> {
    return this.http.get<Shop[]>(`${this.apiUrl}/top?limit=${limit}`);
  }

  searchShops(query: string): Observable<Shop[]> {
    return this.http.get<Shop[]>(`${this.apiUrl}/search?q=${query}`);
  }
}
