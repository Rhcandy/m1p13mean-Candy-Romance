import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AdminStatsService {
  private readonly endpoint = '/admin/stats';

  constructor(private readonly apiService: ApiService) {}

  getGlobalStats(): Observable<any> {
    return this.apiService.get<any>(`${this.endpoint}/global`);
  }

  getRevenueByMonth(year?: number): Observable<any> {
    const suffix = year ? `?year=${year}` : '';
    return this.apiService.get<any>(`${this.endpoint}/revenue-monthly${suffix}`);
  }

  getRevenueByBoutique(): Observable<any> {
    return this.apiService.get<any>(`${this.endpoint}/revenue-boutique`);
  }

  getOccupancy(): Observable<any> {
    return this.apiService.get<any>(`${this.endpoint}/occupancy`);
  }

  getLoyerStatus(): Observable<any> {
    return this.apiService.get<any>(`${this.endpoint}/loyer-status`);
  }

  getRecentPayments(limit: number = 5): Observable<any> {
    return this.apiService.get<any>(`${this.endpoint}/recent-payments?limit=${limit}`);
  }
}
