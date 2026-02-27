// src/app/services/admin-stats.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminStatsService {
  private apiUrl = 'http://localhost:3000/api/admin/stats';

  constructor(private http: HttpClient) {}

  getGlobalStats() {
    return this.http.get<any>('http://localhost:3000/api/admin/stats/global');
  }

  getRevenueByMonth(year?: number) {
  // si year non fourni, utiliser l'année courante
  const currentYear = new Date().getFullYear();
  const y = year || currentYear;
  return this.http.get<any>(`${this.apiUrl}/revenue-monthly?year=${y}`);
}

  getRecentPayments(limit: number = 5): Observable<any> {
    return this.http.get(`${this.apiUrl}/recent-payments?limit=${limit}`);
  }

  getRevenueByBoutique(): Observable<any> {
    return this.http.get(`${this.apiUrl}/revenue-boutique`);
  }

  getOccupancyRate(): Observable<any> {
    return this.http.get(`${this.apiUrl}/occupancy`);
  }

  getLoyerStatusStats(): Observable<any> {
    return this.http.get(`${this.apiUrl}/loyer-status`);
  }
}