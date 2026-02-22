import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
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
  private logoDataUrlCache: string | null | undefined;

  constructor(
    private readonly router: Router,
    private readonly panierService: PanierService,
    private readonly notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    const state = history.state;
    this.commande = state?.commande || null;
    this.facture = state?.facture || null;

    if (!this.commande || !this.facture) {
      this.notificationService.warning('Aucune commande a confirmer');
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

  async downloadFacture(): Promise<void> {
    if (!this.facture) return;

    const doc = await this.buildFacturePdf();
    doc.save(`Facture-${this.facture.numeroFacture}.pdf`);

    this.notificationService.success('Facture telechargee avec succes');
  }

  private async buildFacturePdf(): Promise<jsPDF> {
    const doc = new jsPDF();
    const facture = this.facture;
    if (!facture) return doc;

    const adresse = facture.livraison?.adresse;
    const adresseText = adresse?.nomEndroit || 'Non renseignee';
    const latitudeText = this.formatCoordonnee(adresse?.latitude);
    const longitudeText = this.formatCoordonnee(adresse?.longitude);
    const telephoneText = adresse?.telephone || 'Non renseigne';
    const fraisLivraison = this.getFraisLivraisonPdf(facture);
    const dateFacture = facture.dateFacture ? new Date(facture.dateFacture).toLocaleDateString('fr-FR') : 'N/A';

    const produits = Array.isArray(facture.commande?.produits) ? facture.commande.produits : [];
    const boutiques = Array.from(new Set(
      produits
        .map((p: any) => this.getBoutiqueNom(p))
        .filter((nom: string) => !!nom && nom !== 'N/A')
    ));

    doc.setDrawColor(208, 213, 221);
    doc.roundedRect(8, 8, 194, 280, 2, 2, 'S');

    const logoDataUrl = await this.getLogoDataUrl();
    if (logoDataUrl) {
      doc.addImage(logoDataUrl, 'JPEG', 14, 13, 28, 20);
    }

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(24);
    doc.text('FACTURE', 196, 20, { align: 'right' });
    doc.setFontSize(12);
    doc.text(`#${facture.commande?.numero || facture.numeroFacture || 'N/A'}`, 196, 27, { align: 'right' });

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.text(`Date facture: ${dateFacture}`, 14, 42);
    doc.text(`Commande: ${facture.commande?.numero || 'N/A'}`, 14, 48);
    doc.text(`Boutique(s): ${boutiques.length ? boutiques.join(', ') : 'N/A'}`, 14, 54);
    doc.text(`Paiement: ${this.panierService.getMethodePaiementLibelle(facture.paiement?.methode || 'carte')}`, 196, 48, { align: 'right' });
    doc.text(`Date paiement: ${facture.paiement?.date ? new Date(facture.paiement.date).toLocaleDateString('fr-FR') : 'N/A'}`, 196, 54, { align: 'right' });

    doc.setDrawColor(223, 227, 233);
    doc.line(14, 59, 196, 59);

    const rows = produits.map((produit: any) => ([
      produit.produit?.nom || 'Produit',
      this.getBoutiqueNom(produit),
      String(produit.qtt),
      this.formatPricePdf(produit.prixUnitaire),
      this.formatPricePdf(produit.sousTotal)
    ]));

    autoTable(doc, {
      startY: 64,
      head: [['Description', 'Boutique', 'Qte', 'Prix', 'Montant']],
      body: rows,
      styles: { fontSize: 9, cellPadding: 2.4, textColor: [55, 65, 81] },
      headStyles: { fillColor: [243, 244, 246], textColor: [17, 24, 39], fontStyle: 'bold' },
      columnStyles: {
        0: { cellWidth: 62 },
        1: { cellWidth: 40 },
        2: { cellWidth: 16, halign: 'center' },
        3: { cellWidth: 28, halign: 'right' },
        4: { cellWidth: 32, halign: 'right' }
      }
    });

    const finalY = (doc as jsPDF & { lastAutoTable?: { finalY: number } }).lastAutoTable?.finalY || 64;
    const summaryY = finalY + 8;

    doc.setDrawColor(223, 227, 233);
    doc.roundedRect(122, summaryY - 3, 74, 28, 1.5, 1.5, 'S');

    doc.setFont('helvetica', 'bold');
    doc.text('Resume', 126, summaryY + 2);
    doc.setFont('helvetica', 'normal');
    doc.text('Sous-total:', 126, summaryY + 9);
    doc.text(this.formatPricePdf(facture.commande?.sousTotal || 0), 194, summaryY + 9, { align: 'right' });
    doc.text('Frais livraison:', 126, summaryY + 15);
    doc.text(this.formatPricePdf(fraisLivraison), 194, summaryY + 15, { align: 'right' });
    doc.setFont('helvetica', 'bold');
    doc.text('TOTAL:', 126, summaryY + 22);
    doc.text(this.formatPricePdf(facture.commande?.total || 0), 194, summaryY + 22, { align: 'right' });

    const infoY = summaryY + 36;
    doc.setDrawColor(223, 227, 233);
    doc.roundedRect(14, infoY - 3, 88, 40, 1.5, 1.5, 'S');
    doc.roundedRect(108, infoY - 3, 88, 40, 1.5, 1.5, 'S');

    doc.setFont('helvetica', 'bold');
    doc.text('Livraison', 18, infoY + 2);
    doc.text('Paiement', 112, infoY + 2);

    doc.setFont('helvetica', 'normal');
    doc.text(`Adresse: ${adresseText}`, 18, infoY + 9);
    doc.text(`Latitude: ${latitudeText}`, 18, infoY + 15);
    doc.text(`Longitude: ${longitudeText}`, 18, infoY + 21);
    doc.text(`Telephone: ${telephoneText}`, 18, infoY + 27);
    doc.text(
      `Date estimee: ${facture.livraison?.dateEstimee ? new Date(facture.livraison.dateEstimee).toLocaleDateString('fr-FR') : 'N/A'}`,
      18,
      infoY + 33
    );

    doc.text(`Methode: ${this.panierService.getMethodePaiementLibelle(facture.paiement?.methode || 'carte')}`, 112, infoY + 9);
    doc.text(`Date: ${facture.paiement?.date ? new Date(facture.paiement.date).toLocaleDateString('fr-FR') : 'N/A'}`, 112, infoY + 15);
    doc.text(`Montant: ${this.formatPricePdf(facture.paiement?.montant || 0)}`, 112, infoY + 21);

    doc.setFont('helvetica', 'italic');
    doc.text('Merci pour votre confiance.', 112, infoY + 31);

    return doc;
  }

  private getBoutiqueNom(produitLigne: any): string {
    const boutique = produitLigne?.produit?.boutiqueId;
    if (boutique && typeof boutique === 'object' && boutique.nom) {
      return boutique.nom;
    }
    return 'N/A';
  }

  private formatCoordonnee(value: unknown): string {
    const numeric = Number(value);
    return Number.isFinite(numeric) ? numeric.toFixed(6) : 'N/A';
  }

  private async getLogoDataUrl(): Promise<string | null> {
    if (this.logoDataUrlCache !== undefined) {
      return this.logoDataUrlCache;
    }

    try {
      const response = await fetch('assets/images/logo 3.jpg');
      if (!response.ok) {
        this.logoDataUrlCache = null;
        return null;
      }
      const blob = await response.blob();
      this.logoDataUrlCache = await this.blobToDataUrl(blob);
      return this.logoDataUrlCache;
    } catch (error) {
      console.error('Erreur chargement logo facture:', error);
      this.logoDataUrlCache = null;
      return null;
    }
  }

  private blobToDataUrl(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result));
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(blob);
    });
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
