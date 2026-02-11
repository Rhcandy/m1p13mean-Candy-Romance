import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvisService {
  private readonly apiUrl = 'http://localhost:3000/api';

  constructor(private readonly http: HttpClient) {}

  getAvisByProduit(produitId: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    
    return this.http.get(`${this.apiUrl}/avis/produit/${produitId}`, { headers });
  }

  createAvis(avisData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    
    return this.http.post(`${this.apiUrl}/avis`, avisData, { headers });
  }

  updateAvis(avisId: string, avisData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    
    return this.http.put(`${this.apiUrl}/avis/${avisId}`, avisData, { headers });
  }

  deleteAvis(avisId: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    
    return this.http.delete(`${this.apiUrl}/avis/${avisId}`, { headers });
  }
}
