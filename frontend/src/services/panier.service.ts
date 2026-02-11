import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getPanier(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    
    return this.http.get(`${this.apiUrl}/panier`, { headers });
  }

  addToPanier(itemData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    
    return this.http.post(`${this.apiUrl}/panier`, itemData, { headers });
  }

  updatePanierItem(itemId: string, quantite: number): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    
    return this.http.put(`${this.apiUrl}/panier/${itemId}`, { quantite }, { headers });
  }

  removeFromPanier(itemId: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    
    return this.http.delete(`${this.apiUrl}/panier/${itemId}`, { headers });
  }

  clearPanier(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    
    return this.http.delete(`${this.apiUrl}/panier/clear`, { headers });
  }
}
