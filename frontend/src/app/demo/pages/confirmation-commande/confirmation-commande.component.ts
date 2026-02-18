import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { PanierService } from '../../../services/panier.service';
import { NotificationService } from '../../../services/notification.service';

interface Facture {
  numeroFacture: string;
  dateFacture: string;
  commande: {
    numero: string;
    date: string;
    produits: any[];
    sousTotal: number;
    fraisLivraison: number;
    total: number;
  };
  paiement: {
    methode: string;
    date: string;
    montant: number;
  };
  livraison: {
    adresse: any;
    dateEstimee: string;
  };
  client?: {
    id: string;
    [key: string]: any;
  };
}

@Component({
  selector: 'app-confirmation-commande',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './confirmation-commande.component.html',
  styleUrls: ['./confirmation-commande.component.scss']
})
export class ConfirmationCommandeComponent implements OnInit {
  
  commande: any = null;
  facture: Facture | null = null;
  loading = false;

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly panierService: PanierService,
    private readonly notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    // Récupérer les données de commande depuis l'état de navigation
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state) {
      this.commande = navigation.extras.state['commande'];
      this.facture = navigation.extras.state['facture'];
    } else {
      // Si pas d'état, rediriger vers le panier
      this.notificationService.warning('Aucune commande à confirmer');
      this.router.navigate(['/panier']);
    }
  }

  formatPrice(price: number): string {
    return this.panierService.formatMontant(price);
  }

  downloadFacture(): void {
    if (!this.facture) return;

    // Créer le contenu de la facture en format texte
    const factureContent = this.generateFactureContent();
    
    // Créer un blob et télécharger
    const blob = new Blob([factureContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Facture-${this.facture.numeroFacture}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    this.notificationService.success('Facture téléchargée avec succès');
  }

  private generateFactureContent(): string {
    if (!this.facture) return '';

    let content = `FACTURE N°${this.facture.numeroFacture}\n`;
    content += `Date: ${new Date(this.facture.dateFacture).toLocaleDateString('fr-FR')}\n`;
    content += `Client ID: ${this.facture.client?.id || 'N/A'}\n\n`;
    
    content += `COMMANDE N°${this.facture.commande.numero}\n`;
    content += `Date commande: ${new Date(this.facture.commande.date).toLocaleDateString('fr-FR')}\n\n`;
    
    content += `PRODUITS:\n`;
    this.facture.commande.produits.forEach((produit, index) => {
      content += `${index + 1}. ${produit.produit?.nom || 'Produit'}\n`;
      content += `   Quantité: ${produit.qtt}\n`;
      content += `   Prix unitaire: ${this.formatPrice(produit.prixUnitaire)}\n`;
      content += `   Sous-total: ${this.formatPrice(produit.sousTotal)}\n\n`;
    });
    
    content += `RÉCAPITULATIF:\n`;
    content += `Sous-total: ${this.formatPrice(this.facture.commande.sousTotal)}\n`;
    content += `Frais de livraison: ${this.formatPrice(this.facture.commande.fraisLivraison)}\n`;
    content += `Total: ${this.formatPrice(this.facture.commande.total)}\n\n`;
    
    content += `PAIEMENT:\n`;
    content += `Méthode: ${this.facture.paiement.methode}\n`;
    content += `Date: ${new Date(this.facture.paiement.date).toLocaleDateString('fr-FR')}\n`;
    content += `Montant: ${this.formatPrice(this.facture.paiement.montant)}\n\n`;
    
    content += `LIVRAISON:\n`;
    if (this.facture.livraison.adresse) {
      content += `${this.facture.livraison.adresse.rue}\n`;
      content += `${this.facture.livraison.adresse.codePostal} ${this.facture.livraison.adresse.ville}\n`;
      content += `${this.facture.livraison.adresse.pays}\n`;
    }
    content += `Date estimée: ${new Date(this.facture.livraison.dateEstimee).toLocaleDateString('fr-FR')}\n`;
    
    return content;
  }

  goToOrders(): void {
    this.router.navigate(['/mes-commandes']);
  }

  goToHome(): void {
    this.router.navigate(['/']);
  }

  continueShopping(): void {
    this.router.navigate(['/produits']);
  }

  printFacture(): void {
    if (!this.facture) return;

    const printContent = document.getElementById('facture-content');
    if (printContent) {
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        printWindow.document.write(`
          <html>
            <head>
              <title>Facture ${this.facture!.numeroFacture}</title>
              <style>
                body { font-family: Arial, sans-serif; margin: 20px; }
                .header { text-align: center; margin-bottom: 30px; }
                .section { margin-bottom: 20px; }
                .product { margin-bottom: 10px; padding: 10px; border-bottom: 1px solid #ddd; }
                .total { font-weight: bold; font-size: 18px; }
                @media print { body { margin: 10px; } }
              </style>
            </head>
            <body>
              ${printContent.innerHTML}
            </body>
          </html>
        `);
        printWindow.document.close();
        printWindow.print();
      }
    }
  }
}
