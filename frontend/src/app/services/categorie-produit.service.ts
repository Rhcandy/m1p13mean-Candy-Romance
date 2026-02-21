import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from './api.service';

export interface CategorieProduit {
  _id: string;
  nom: string;
  description?: string;
}

@Injectable({
  providedIn: 'root'
})
export class CategorieProduitService {
  constructor(private readonly api: ApiService) {}

  getAllCategories(): Observable<CategorieProduit[]> {
    return this.api.get<{ data: CategorieProduit[] }>('/categories-produit').pipe(
      map((response) => response?.data || [])
    );
  }
}
