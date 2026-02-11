import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Services
import { ProduitService } from '../../../services/produit.service';
import { PanierService } from '../../../services/panier.service';
import { AuthService } from '../../../services/auth.service';

// Models
import { Produit } from '../../../models/produit.model';
import { Panier } from '../../../models/panier.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  produits: Produit[] = [];
  produitsFiltres: Produit[] = [];
  panier: Panier | null = null;
  isLoading = false;
  currentPage = 1;
  itemsPerPage = 5;
  totalPages = 0;
  totalItems = 0;
  filtreNom = '';
  filtreNote = '';
  filtreNoteMin = 0;
  filtreNoteMax = 5;

  constructor(
    private produitService: ProduitService,
    private panierService: PanierService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.chargerProduits();
    this.chargerPanier();
  }

  chargerProduits(): void {
    this.isLoading = true;
    const filtres = this.construireFiltres();
    
    this.produitService.getProduits(filtres).subscribe({
      next: (response) => {
        this.produits = response.data;
        this.produitsFiltres = response.data;
        this.totalItems = response.pagination?.total || 0;
        this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Erreur chargement produits:', error);
        this.isLoading = false;
      }
    });
  }

  chargerPanier(): void {
    if (this.authService.isLoggedIn()) {
      this.panierService.getPanier().subscribe({
        next: (response) => {
          this.panier = response.data;
        },
        error: (error) => {
          console.error('Erreur chargement panier:', error);
        }
      });
    }
  }

  construireFiltres(): any {
    const filtres: any = {};
    
    if (this.filtreNom) {
      filtres.nom = { $regex: this.filtreNom, $options: 'i' };
    }
    
    if (this.filtreNote) {
      filtres.averageRating = this.filtreNote;
    }
    
    return filtres;
  }

  onFiltreNomChange(event: any): void {
    this.filtreNom = event.target.value;
    this.currentPage = 1;
    this.chargerProduits();
  }

  onFiltreNoteChange(event: any): void {
    this.filtreNote = event.target.value;
    this.currentPage = 1;
    this.chargerProduits();
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.chargerProduits();
  }

  ajouterAuPanier(produit: Produit): void {
    if (!this.authService.isLoggedIn()) {
      return;
    }

    this.panierService.addToPanier({
      produitId: produit._id,
      quantite: 1,
      variant: {}
    }).subscribe({
      next: () => {
        this.chargerPanier();
      },
      error: (error) => {
        console.error('Erreur ajout panier:', error);
      }
    });
  }

  getNoteColor(notes: number): string {
    if (notes >= 4.5) return '#7B1E3A'; // Vert
    if (notes >= 3.5) return '#FFC107'; // Orange
    if (notes >= 2.5) return '#FFD700'; // Jaune
    return '#FFA500'; // Rouge par défaut
  }

  getProduitColorClass(produit: Produit): string {
    const color = this.getNoteColor(produit.averageRating || 0);
    return `border-color: ${color}`;
  }

  voirDetailsProduit(produitId: string): void {
    // Navigation vers les détails du produit
    // TODO: Implémenter la navigation vers la page de détails
    console.log('Voir détails du produit:', produitId);
  }
}
