import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from './api.service';

export interface Product {
  averageRating: number;
  avis: any[];
  _id: string;
  boutiqueId: { _id: string; nom: string };
  categorieId: { _id: string; nom: string };
  nom: string;
  photo: string;
  variant: any[];
  prix: any[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  deliveryDate?: string;
}

export interface CreateProductData {
  nom: string;
  description?: string;
  boutiqueId: string;
  categorieId: string;
  photo?: File;
  variant?: any[];
  prix?: any[];
}

export interface UpdateProductData {
  nom?: string;
  description?: string;
  boutiqueId?: string;
  categorieId?: string;
  photo?: File;
  variant?: any[];
  prix?: any[];
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private readonly api: ApiService) {}

  // Récupérer tous les produits
  getAllProducts(params?: any): Observable<{items: Product[], pagination: any}> {
    return this.api.get<{items: Product[], pagination: any}>('/produits', { params }).pipe(
      map(response => response)
    );
  }

  // Récupérer un produit par ID
  getProductById(id: string): Observable<Product> {
    return this.api.get<{data: Product}>(`/produits/${id}`).pipe(
      map(response => response.data)
    );
  }

  // Créer un nouveau produit
  createProduct(data: CreateProductData): Observable<Product> {
    const formData = new FormData();
    formData.append('nom', data.nom);
    
    if (data.description) {
      formData.append('description', data.description);
    }
    
    formData.append('boutiqueId', data.boutiqueId);
    formData.append('categorieId', data.categorieId);
    
    if (data.photo) {
      formData.append('profilePicture', data.photo);
    }

    return this.api.postFile<Product>('/produits', formData);
  }

  // Mettre à jour un produit
  updateProduct(id: string, data: UpdateProductData): Observable<Product> {
    if (data.photo) {
      const formData = new FormData();
      formData.append('nom', data.nom || '');
      
      if (data.description) {
        formData.append('description', data.description);
      }
      
      if (data.boutiqueId) {
        formData.append('boutiqueId', data.boutiqueId);
      }
      
      if (data.categorieId) {
        formData.append('categorieId', data.categorieId);
      }
      
      formData.append('profilePicture', data.photo);

      return this.api.putFile<Product>(`/produits/${id}`, formData);
    } else {
      return this.api.put<Product>(`/produits/${id}`, data);
    }
  }

  // Supprimer un produit
  deleteProduct(id: string): Observable<void> {
    return this.api.delete<void>(`/produits/${id}`);
  }

  // Récupérer les produits par shop
  getProductsByShop(shopId: string): Observable<Product[]> {
    return this.api.get<Product[]>(`/produits?boutiqueId=${shopId}`).pipe(
      map(response => response)
    );
  }

  // Récupérer le stock d'un produit
  getProductStock(productId: string): Observable<{
    totalStock: number;
    availableStock: number;
  }> {
    return this.api.get<{data: any}>(`/produits/${productId}/stock`).pipe(
      map(response => response.data)
    );
  }
}
