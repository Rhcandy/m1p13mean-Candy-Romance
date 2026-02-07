import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import api from './api.service';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  shop: string;
  inStock: boolean;
  category?: string;
  tags?: string[];
}

export interface CreateProductData {
  name: string;
  description: string;
  price: number;
  shop: string;
  category?: string;
  tags?: string[];
  image?: File;
}

export interface UpdateProductData {
  name?: string;
  description?: string;
  price?: number;
  inStock?: boolean;
  category?: string;
  tags?: string[];
  image?: File;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // Récupérer tous les produits
  getAllProducts(): Observable<Product[]> {
    return from(api.get<Product[]>('/products')).pipe(
      map(response => response.data)
    );
  }

  // Récupérer un produit par ID
  getProductById(id: string): Observable<Product> {
    return from(api.get<Product>(`/products/${id}`)).pipe(
      map(response => response.data)
    );
  }

  // Créer un nouveau produit
  createProduct(data: CreateProductData): Observable<Product> {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('price', data.price.toString());
    formData.append('shop', data.shop);
    
    if (data.category) {
      formData.append('category', data.category);
    }
    
    if (data.tags && data.tags.length > 0) {
      data.tags.forEach((tag, index) => {
        formData.append(`tags[${index}]`, tag);
      });
    }
    
    if (data.image) {
      formData.append('image', data.image);
    }

    return from(api.post<Product>('/products', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })).pipe(
      map(response => response.data)
    );
  }

  // Mettre à jour un produit
  updateProduct(id: string, data: UpdateProductData): Observable<Product> {
    if (data.image) {
      const formData = new FormData();
      formData.append('name', data.name || '');
      formData.append('description', data.description || '');
      if (data.price !== undefined) {
        formData.append('price', data.price.toString());
      }
      if (data.inStock !== undefined) {
        formData.append('inStock', data.inStock.toString());
      }
      if (data.category) {
        formData.append('category', data.category);
      }
      if (data.tags && data.tags.length > 0) {
        data.tags.forEach((tag, index) => {
          formData.append(`tags[${index}]`, tag);
        });
      }
      formData.append('image', data.image);

      return from(api.put<Product>(`/products/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })).pipe(
        map(response => response.data)
      );
    } else {
      return from(api.put<Product>(`/products/${id}`, data)).pipe(
        map(response => response.data)
      );
    }
  }

  // Supprimer un produit
  deleteProduct(id: string): Observable<void> {
    return from(api.delete<void>(`/products/${id}`)).pipe(
      map(response => response.data)
    );
  }

  // Rechercher des produits
  searchProducts(query: string, category?: string): Observable<Product[]> {
    const params: any = { q: query };
    if (category) {
      params.category = category;
    }

    return from(api.get<Product[]>('/products/search', { params })).pipe(
      map(response => response.data)
    );
  }

  // Récupérer les produits par shop
  getProductsByShop(shopId: string): Observable<Product[]> {
    return from(api.get<Product[]>(`/shops/${shopId}/products`)).pipe(
      map(response => response.data)
    );
  }
}
