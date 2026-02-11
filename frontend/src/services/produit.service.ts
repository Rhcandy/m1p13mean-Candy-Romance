import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getProduits(filtres?: any): Observable<any> {
    let params = '';
    if (filtres) {
      if (filtres.nom) params += `nom=${filtres.nom}&`;
      if (filtres.averageRating) params += `averageRating=${filtres.averageRating}&`;
      if (filtres.categorieId) params += `categorieId=${filtres.categorieId}&`;
      if (filtres.boutiqueId) params += `boutiqueId=${filtres.boutiqueId}&`;
    }
    
    return this.http.get(`${this.apiUrl}/produits?${params}`);
  }

  getProduitById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/produits/${id}`);
  }

  createProduit(produitData: any, file?: File): Observable<any> {
    const formData = new FormData();
    
    // Ajouter les champs textuels
    Object.keys(produitData).forEach(key => {
      if (key !== 'variant' && key !== 'prix') {
        formData.append(key, produitData[key]);
      }
    });
    
    // Ajouter les champs JSON comme strings
    if (produitData.variant) {
      formData.append('variant', JSON.stringify(produitData.variant));
    }
    
    if (produitData.prix) {
      formData.append('prix', JSON.stringify(produitData.prix));
    }
    
    // Ajouter le fichier si présent
    if (file) {
      formData.append('photo', file);
    }
    
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    
    return this.http.post(`${this.apiUrl}/produits`, formData, { headers });
  }

  updateProduit(id: string, produitData: any, file?: File): Observable<any> {
    const formData = new FormData();
    
    // Ajouter les champs textuels
    Object.keys(produitData).forEach(key => {
      if (key !== 'variant' && key !== 'prix') {
        formData.append(key, produitData[key]);
      }
    });
    
    // Ajouter les champs JSON comme strings
    if (produitData.variant) {
      formData.append('variant', JSON.stringify(produitData.variant));
    }
    
    if (produitData.prix) {
      formData.append('prix', JSON.stringify(produitData.prix));
    }
    
    // Ajouter le fichier si présent
    if (file) {
      formData.append('photo', file);
    }
    
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    
    return this.http.put(`${this.apiUrl}/produits/${id}`, formData, { headers });
  }

  deleteProduit(id: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    
    return this.http.delete(`${this.apiUrl}/produits/${id}`, { headers });
  }
}
