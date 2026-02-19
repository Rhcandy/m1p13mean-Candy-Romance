import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { PanierService } from '../../../services/panier.service';
import { NotificationService } from '../../../services/notification.service';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

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

  formatPricePdf(price: number): string {
    return this.panierService.formatMontantPdf(price);
  }

  getFraisLivraison(): number {
    if (!this.facture) return 0;
    return this.getFraisLivraisonPdf(this.facture);
  }

  private getFraisLivraisonPdf(facture: Facture): number {
    const rawFrais = Number(facture.commande?.fraisLivraison);
    if (Number.isFinite(rawFrais) && rawFrais >= 0) {
      return rawFrais;
    }
    const total = Number(facture.commande?.total);
    const sousTotal = Number(facture.commande?.sousTotal);
    const fallback = total - sousTotal;
    return Number.isFinite(fallback) && fallback > 0 ? fallback : 0;
  }

  downloadFacture(): void {
    if (!this.facture) return;

    const doc = this.buildFacturePdf();
    doc.save(`Facture-${this.facture.numeroFacture}.pdf`);

    this.notificationService.success('Facture téléchargée avec succès');
  }

  private buildFacturePdf(): jsPDF {
    const doc = new jsPDF();
    const facture = this.facture;
    if (!facture) return doc;

    const adresse = facture.livraison?.adresse;
    const adresseText = adresse?.nomEndroit
      ? adresse.nomEndroit
      : (adresse?.latitude != null && adresse?.longitude != null)
        ? `${adresse.latitude}, ${adresse.longitude}`
        : 'Non renseignee';
    const telephoneText = adresse?.telephone ? adresse.telephone : 'Non renseigne';

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.text('Facture', 14, 18);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(`Numero: ${facture.numeroFacture}`, 14, 26);
    doc.text(`Date: ${new Date(facture.dateFacture).toLocaleDateString('fr-FR')}`, 14, 32);
    doc.text(`Commande: ${facture.commande.numero}`, 14, 38);

    const rows = facture.commande.produits.map((produit: any, index: number) => ([
      String(index + 1),
      produit.produit?.nom || 'Produit',
      String(produit.qtt),
      this.formatPricePdf(produit.prixUnitaire),
      this.formatPricePdf(produit.sousTotal)
    ]));

    autoTable(doc, {
      startY: 44,
      head: [['#', 'Produit', 'Qte', 'Prix', 'Sous-total']],
      body: rows,
      styles: { fontSize: 9 },
      headStyles: { fillColor: [47, 111, 237] }
    });

    const finalY = (doc as any).lastAutoTable?.finalY || 44;
    const summaryY = finalY + 8;
    doc.setFont('helvetica', 'bold');
    doc.text('Resume', 14, summaryY);
    doc.setFont('helvetica', 'normal');
    const fraisLivraison = this.getFraisLivraisonPdf(facture);
    doc.text(`Sous-total: ${this.formatPricePdf(facture.commande.sousTotal)}`, 14, summaryY + 6);
    doc.text(`Frais livraison: ${this.formatPricePdf(fraisLivraison)}`, 14, summaryY + 12);
    doc.setFont('helvetica', 'bold');
    doc.text(`Total: ${this.formatPricePdf(facture.commande.total)}`, 14, summaryY + 18);

    const paiementY = summaryY + 28;
    doc.setFont('helvetica', 'bold');
    doc.text('Paiement', 14, paiementY);
    doc.setFont('helvetica', 'normal');
    doc.text(`Methode: ${this.panierService.getMethodePaiementLibelle(facture.paiement.methode || 'carte')}`, 14, paiementY + 6);
    doc.text(`Date: ${new Date(facture.paiement.date).toLocaleDateString('fr-FR')}`, 14, paiementY + 12);
    doc.text(`Montant: ${this.formatPricePdf(facture.paiement.montant)}`, 14, paiementY + 18);

    const livraisonY = paiementY + 28;
    doc.setFont('helvetica', 'bold');
    doc.text('Livraison', 14, livraisonY);
    doc.setFont('helvetica', 'normal');
    doc.text(`Adresse: ${adresseText}`, 14, livraisonY + 6);
    doc.text(`Telephone: ${telephoneText}`, 14, livraisonY + 12);
    doc.text(`Date estimee: ${new Date(facture.livraison.dateEstimee).toLocaleDateString('fr-FR')}`, 14, livraisonY + 18);

    return doc;
  }

  goToOrders(): void {
    this.router.navigate(['/commandes']);
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
