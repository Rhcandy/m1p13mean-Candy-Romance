import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Prix {
  _id?: string;
  boutiqueId: string;
  typeboxId: { _id: string, nom: string } | string;
  prixParM2: number;
}


@Injectable({
  providedIn: 'root'
})
export class HistoPrixService {
  private apiUrl = 'http://localhost:3000/api/histo-prix';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Prix[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(res => res.data || []) // <- récupère bien le tableau
    );
  }

  create(prix: Prix): Observable<any> {
    return this.http.post(this.apiUrl, prix);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  
}







