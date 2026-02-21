import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  get<T>(endpoint: string, options?: any): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}${endpoint}`, options) as Observable<T>;
  }

  post<T>(endpoint: string, body: any, options?: any): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}${endpoint}`, body, options) as Observable<T>;
  }

  put<T>(endpoint: string, body: any, options?: any): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}${endpoint}`, body, options) as Observable<T>;
  }

  patch<T>(endpoint: string, body: any, options?: any): Observable<T> {
    return this.http.patch<T>(`${this.baseUrl}${endpoint}`, body, options) as Observable<T>;
  }

  delete<T>(endpoint: string, body?: any, options?: any): Observable<T> {
    const httpOptions = body ? { body, ...options } : options;
    return this.http.delete(`${this.baseUrl}${endpoint}`, httpOptions) as Observable<T>;
  }

  // Méthode spécifique pour l'envoi de fichiers
  postFile<T>(endpoint: string, formData: FormData): Observable<T> {
    const headers = new HttpHeaders();
    // Ne pas définir Content-Type pour FormData, le navigateur le fera automatiquement avec boundary
    return this.http.post<T>(`${this.baseUrl}${endpoint}`, formData, { headers });
  }

  putFile<T>(endpoint: string, formData: FormData): Observable<T> {
    const headers = new HttpHeaders();
    // Ne pas définir Content-Type pour FormData, le navigateur le fera automatiquement avec boundary
    return this.http.put<T>(`${this.baseUrl}${endpoint}`, formData, { headers });
  }
}
