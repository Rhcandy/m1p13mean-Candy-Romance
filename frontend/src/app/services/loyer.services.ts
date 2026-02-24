import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Loyer } from '../models/loyer.model';

@Injectable({
  providedIn: 'root'
})
export class LoyerService {

  private apiUrl = 'http://localhost:3000/api/loyers';

  constructor(private http: HttpClient) {}

  getAll(boutiqueId?: string): Observable<{ success: boolean; data: Loyer[] }> {
    let params = new HttpParams();
    if (boutiqueId) {
      params = params.set('boutiqueId', boutiqueId);
    }
    return this.http.get<{ success: boolean; data: Loyer[] }>(this.apiUrl, { params });
  }
}