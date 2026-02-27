// src/app/services/loyer.services.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoyerService {

  private apiUrl = 'http://localhost:3000/api/loyers';

  constructor(private http: HttpClient) {}

  // ===============================
  // GET ALL
  // ===============================
  getAll(filters?: any) {
    let params = new HttpParams();

    if (filters?.periode) {
      params = params.set('periode', filters.periode);
    }

    if (filters?.boutiqueId) {
      params = params.set('boutiqueId', filters.boutiqueId);
    }

    return this.http.get(this.apiUrl, { params });

  }

  // ===============================
  // CREATE
  // ===============================
  create(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  // ===============================
  // UPDATE
  // ===============================
  update(id: string, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  // ===============================
  // DELETE
  // ===============================
  delete(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // ===============================
  // PAY
  // ===============================
  pay(loyerId: string, data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/pay/${loyerId}`, data);
  }

  // ===============================
  // GENERATE
  // ===============================
  generate(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/generate`, data);
  }

}