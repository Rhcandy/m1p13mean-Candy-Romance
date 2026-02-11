import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

// Services
import { ProduitService } from '../../../services/produit.service';
import { AvisService } from '../../../services/avis.service';
import { PanierService } from '../../../services/panier.service';
import { AuthService } from '../../../services/auth.service';

// Models
import { Produit } from '../../../models/produit.model';
import { Avis } from '../../../models/avis.model';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  produit: Produit | null = null;
  avis: Avis[] = [];
  isLoading = false;
  isAddingToCart = false;
  
  // Formulaire d'avis
  newAvis = {
    note: 5,
    commentaire: ''
  };
  
  showAvisForm = false;
  hasOrderedProduct = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private produitService: ProduitService,
    private avisService: AvisService,
    private panierService: PanierService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const produitId = this.route.snapshot.paramMap.get('id');
    if (produitId) {
      this.chargerDetailsProduit(produitId);
      this.chargerAvisProduit(produitId);
    }
  }

  chargerDetailsProduit(produitId: string): void {
    this.isLoading = true;
    this.produitService.getProduitById(produitId).subscribe({
      next: (response) => {
        this.produit = response.data;
        this.verifierSiProduitCommande();
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Erreur chargement produit:', error);
        this.isLoading = false;
      }
    });
  }

  chargerAvisProduit(produitId: string): void {
    this.avisService.getAvisByProduit(produitId).subscribe({
      next: (response) => {
        this.avis = response.data;
      },
      error: (error) => {
        console.error('Erreur chargement avis:', error);
      }
    });
  }

  verifierSiProduitCommande(): void {
    // TODO: Implémenter la logique pour vérifier si l'utilisateur a commandé ce produit
    // Pour l'instant, on suppose que l'utilisateur peut laisser un avis
    this.hasOrderedProduct = this.authService.isLoggedIn();
  }

  ajouterAuPanier(): void {
    if (!this.produit || !this.authService.isLoggedIn()) {
      return;
    }

    this.isAddingToCart = true;
    this.panierService.addToPanier({
      produitId: this.produit._id,
      quantite: 1,
      variant: {}
    }).subscribe({
      next: () => {
        this.isAddingToCart = false;
        // TODO: Afficher une notification de succès
        console.log('Produit ajouté au panier');
      },
      error: (error) => {
        this.isAddingToCart = false;
        console.error('Erreur ajout panier:', error);
      }
    });
  }

  ajouterAvis(): void {
    if (!this.produit || !this.authService.isLoggedIn()) {
      return;
    }

    if (!this.hasOrderedProduct) {
      // TODO: Afficher un message d'erreur
      console.error('Vous devez avoir commandé ce produit pour laisser un avis');
      return;
    }

    const avisData = {
      produitId: this.produit._id,
      note: this.newAvis.note,
      commentaire: this.newAvis.commentaire
    };

    this.avisService.createAvis(avisData).subscribe({
      next: () => {
        this.newAvis = { note: 5, commentaire: '' };
        this.showAvisForm = false;
        this.chargerAvisProduit(this.produit._id);
        // TODO: Afficher une notification de succès
        console.log('Avis ajouté avec succès');
      },
      error: (error) => {
        console.error('Erreur ajout avis:', error);
      }
    });
  }

  getNoteColor(notes: number): string {
    if (notes >= 4.5) return '#7B1E3A'; // Vert
    if (notes >= 3.5) return '#FFC107'; // Orange
    if (notes >= 2.5) return '#FFD700'; // Jaune
    return '#FFA500'; // Rouge par défaut
  }

  getEtoiles(note: number): {pleines: number, vides: number} {
    const pleines = Math.floor(note);
    const vides = 5 - pleines;
    return { pleines, vides };
  }

  toggleAvisForm(): void {
    this.showAvisForm = !this.showAvisForm;
  }
}
