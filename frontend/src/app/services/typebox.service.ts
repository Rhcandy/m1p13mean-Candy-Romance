import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface TypeBoxModel {
  _id: string;
  nom: string;
  periode?: number;
  description?: string;
  remuneration?: number;
}

@Injectable({
  providedIn: 'root'
})
export class TypeBoxService {
  // L'URL doit correspondre à ton endpoint Node.js
  private apiUrl = 'http://localhost:3000/api/typebox/all'; 

  constructor(private http: HttpClient) {}

  // Récupérer tous les types de box sans pagination
  getAll(): Observable<TypeBoxModel[]> {
    return this.http.get<{ success: boolean, data: TypeBoxModel[] }>(this.apiUrl)
      .pipe(
        map(res => res.data) // ne renvoie que le tableau
      );
  }
}