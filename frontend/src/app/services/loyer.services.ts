// src/app/services/loyer.services.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Loyer } from '../models/loyer.model';

@Injectable({
  providedIn: 'root'
})
export class LoyerService {
  private apiUrl = 'http://localhost:3000/api/loyers';
  boutiques: any[] = []; // pour getBoutiqueNameFromLoyer

  constructor(private http: HttpClient) {}

  getAll(boutiqueId?: string): Observable<{ success: boolean; data: Loyer[] }> {
    let params = new HttpParams();
    if (boutiqueId) params = params.set('boutiqueId', boutiqueId);
    return this.http.get<{ success: boolean; data: Loyer[] }>(this.apiUrl, { params });
  }

  create(data: any) {
    return this.http.post(`${this.apiUrl}`, data);
  }

  update(id: string, data: any) {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  delete(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // Helper functions
  getBoutiqueNameFromLoyer(loyer: any): string {
    if (loyer.boutiqueId && typeof loyer.boutiqueId === 'object') return loyer.boutiqueId.nom;
    const b = this.boutiques.find(x => x._id === loyer.boutiqueId);
    return b ? b.nom : '—';
  }

  getTotalMontantPaye(loyer: any): number {
    if (!loyer.details) return 0;
    return loyer.details.reduce((t, d) => t + (d.montantPaye || 0), 0);
  }

  getTotalRestePaye(loyer: any): number {
    if (!loyer.details) return 0;
    return loyer.details.reduce((t, d) => t + (d.restePaye || 0), 0);
  }
}