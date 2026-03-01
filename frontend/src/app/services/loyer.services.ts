import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Loyer } from '../models/loyer.model';

export interface LoyerPaymentPayload {
  montant: number;
  reference: string;
  title?: string;
  libelle?: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoyerService {
  private readonly endpoint = '/loyers';

  constructor(private readonly apiService: ApiService) {}

  getAll(boutiqueId?: string): Observable<{ success: boolean; data: Loyer[] }> {
    const suffix = boutiqueId ? `?boutiqueId=${encodeURIComponent(boutiqueId)}` : '';
    return this.apiService.get<{ success: boolean; data: Loyer[] }>(`${this.endpoint}${suffix}`);
  }

  getSummaryAll(): Observable<{ success: boolean; data: any[] }> {
    return this.apiService.get<{ success: boolean; data: any[] }>(`${this.endpoint}/summary`);
  }

  getSummaryByBoutique(boutiqueId: string): Observable<{ success: boolean; data: any }> {
    return this.apiService.get<{ success: boolean; data: any }>(`${this.endpoint}/summary/${boutiqueId}`);
  }

  getMySummary(): Observable<{ success: boolean; data: any }> {
    return this.apiService.get<{ success: boolean; data: any }>(`${this.endpoint}/my-summary`);
  }

  generateLoyer(boutiqueId: string, periode: string): Observable<any> {
    return this.apiService.post<any>(`${this.endpoint}/generate`, { boutiqueId, periode });
  }

  runMonthlyGeneration(): Observable<any> {
    return this.apiService.post<any>(`${this.endpoint}/generate-monthly`, {});
  }

  payMyBoutique(payload: LoyerPaymentPayload): Observable<any> {
    return this.apiService.post<any>(`${this.endpoint}/my-boutique/pay`, payload);
  }

  setStatus(loyerId: string, statut: 'IMPAYE' | 'PARTIEL' | 'PAYE' | 'RETARD'): Observable<any> {
    return this.apiService.patch<any>(`${this.endpoint}/status/${loyerId}`, { statut });
  }
}
