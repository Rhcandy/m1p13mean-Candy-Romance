import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminStatsService {
  private apiUrl = 'http://localhost:3000/api/admin/stats';

  constructor(private http: HttpClient) {}

  getGlobalStats(): Observable<any> {
    return this.http.get(`${this.apiUrl}/global`);
  }

  getRevenueByMonth(year: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/revenue-monthly?year=${year}`);
  }

  getRevenueByBoutique(): Observable<any> {
    return this.http.get(`${this.apiUrl}/revenue-boutique`);
  }

  getOccupancy(): Observable<any> {
    return this.http.get(`${this.apiUrl}/occupancy`);
  }

  getLoyerStatus(): Observable<any> {
    return this.http.get(`${this.apiUrl}/loyer-status`);
  }

  getRecentPayments(limit: number = 5): Observable<any> {
    return this.http.get(`${this.apiUrl}/recent-payments?limit=${limit}`);
  }
}
