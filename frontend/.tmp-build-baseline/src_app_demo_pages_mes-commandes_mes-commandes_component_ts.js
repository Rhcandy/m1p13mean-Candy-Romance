"use strict";
(self["webpackChunkfree_version"] = self["webpackChunkfree_version"] || []).push([["src_app_demo_pages_mes-commandes_mes-commandes_component_ts"],{

/***/ 3921:
/*!*********************************************************************!*\
  !*** ./src/app/demo/pages/mes-commandes/mes-commandes.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MesCommandesComponent: () => (/* binding */ MesCommandesComponent)
/* harmony export */ });
/* harmony import */ var D_Master_Web_avance_m1p13mean_Candy_Romance_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 3900);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jspdf */ 2752);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jspdf-autotable */ 8198);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 3305);
/* harmony import */ var _services_panier_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/panier.service */ 2619);
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../services/notification.service */ 7473);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../services/auth.service */ 4796);













const _forTrack0 = ($index, $item) => $item._id;
function MesCommandesComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElement"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Chargement des commandes...");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementEnd"]()();
  }
}
function MesCommandesComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElement"](1, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementStart"](6, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomListener"]("click", function MesCommandesComponent_Conditional_12_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.goToProducts());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElement"](7, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, " Voir les produits ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.isAdminBoutique ? "Aucune commande pour votre boutique" : "Vous n'avez pas encore de commandes");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.isAdminBoutique ? "Vos produits n'ont pas encore ete commandes." : "Decouvrez nos produits et passez votre premiere commande !");
  }
}
function MesCommandesComponent_Conditional_13_For_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementEnd"]();
  }
  if (rf & 2) {
    const commande_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", commande_r4.userId == null ? null : commande_r4.userId.nom, " (", commande_r4.userId == null ? null : commande_r4.userId.email, ") ");
  }
}
function MesCommandesComponent_Conditional_13_For_2_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomListener"]("click", function MesCommandesComponent_Conditional_13_For_2_Conditional_20_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const commande_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.payerCommande(commande_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElement"](1, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Payer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementEnd"]();
  }
}
function MesCommandesComponent_Conditional_13_For_2_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomListener"]("click", function MesCommandesComponent_Conditional_13_For_2_Conditional_21_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const commande_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.telechargerFacture(commande_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElement"](1, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Facture ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementEnd"]();
  }
}
function MesCommandesComponent_Conditional_13_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementStart"](0, "div", 14)(1, "div", 15)(2, "div", 16)(3, "div", 17)(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Facture:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementStart"](7, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElement"](8, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](11, MesCommandesComponent_Conditional_13_For_2_Conditional_11_Template, 3, 2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementStart"](12, "div", 20)(13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElement"](14, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementStart"](16, "div", 21)(17, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomListener"]("click", function MesCommandesComponent_Conditional_13_For_2_Template_button_click_17_listener() {
      const commande_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.voirDetails(commande_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElement"](18, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, " D\u00E9tails ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](20, MesCommandesComponent_Conditional_13_For_2_Conditional_20_Template, 3, 0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](21, MesCommandesComponent_Conditional_13_For_2_Conditional_21_Template, 3, 0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementEnd"]()();
  }
  if (rf & 2) {
    const commande_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.getNumeroFacture(commande_r4), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](10, 11, commande_r4.createdAt, "longDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx_r1.isAdminBoutique && (commande_r4.userId == null ? null : commande_r4.userId.nom) ? 11 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinterpolate1"]("status-badge ", ctx_r1.getStatutClass(commande_r4.statut)));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx_r1.getStatutIcon(commande_r4.statut));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.panierService.getStatutLibelle(commande_r4.statut), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx_r1.canPayerCommande(commande_r4) ? 20 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](commande_r4.isPaye ? 21 : -1);
  }
}
function MesCommandesComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterCreate"](1, MesCommandesComponent_Conditional_13_For_2_Template, 22, 14, "div", 14, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeater"](ctx_r1.commandes);
  }
}
class MesCommandesComponent {
  constructor(router, panierServiceInstance, notificationService, authService) {
    this.router = router;
    this.panierServiceInstance = panierServiceInstance;
    this.notificationService = notificationService;
    this.authService = authService;
    this.commandes = [];
    this.loading = false;
    this.isAdminBoutique = false;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.panierService = this.panierServiceInstance;
    this.cdr = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef);
  }
  ngOnInit() {
    this.isAdminBoutique = this.authService.currentUser?.role === 'admin_boutique';
    this.loadCommandes();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadCommandes() {
    this.loading = true;
    const source$ = this.isAdminBoutique ? this.panierService.getCommandesBoutique() : this.panierService.getHistoriqueCommandes();
    source$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe({
      next: response => {
        this.commandes = response.data || [];
        this.loading = false;
        Promise.resolve().then(() => {
          this.cdr.detectChanges();
        });
      },
      error: error => {
        console.error('Erreur chargement commandes:', error);
        this.notificationService.error('Erreur lors du chargement de vos commandes');
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }
  voirDetails(commande) {
    this.router.navigate(['/commande', commande._id]);
  }
  telechargerFacture(commande) {
    var _this = this;
    return (0,D_Master_Web_avance_m1p13mean_Candy_Romance_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const doc = yield _this.buildFacturePdf(commande);
      doc.save(`Facture-${commande.numeroCommande}.pdf`);
      _this.notificationService.success('Facture telechargee avec succes');
    })();
  }
  buildFacturePdf(commande) {
    var _this2 = this;
    return (0,D_Master_Web_avance_m1p13mean_Candy_Romance_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const doc = new jspdf__WEBPACK_IMPORTED_MODULE_6__.jsPDF();
      const produits = _this2.getCommandeProduits(commande);
      const adresse = commande.adresseLivraison;
      const adresseText = adresse?.nomEndroit || 'Non renseignee';
      const latitudeText = _this2.formatCoordonnee(adresse?.latitude);
      const longitudeText = _this2.formatCoordonnee(adresse?.longitude);
      const telephoneText = adresse?.telephone || 'Non renseigne';
      const clientText = _this2.getClientText(commande);
      const fraisLivraison = _this2.getFraisLivraisonPdf(commande);
      const commandeDate = commande.createdAt ? new Date(commande.createdAt).toLocaleDateString('fr-FR') : 'N/A';
      const boutiques = Array.from(new Set(produits.map(p => _this2.getBoutiqueNom(p)).filter(nom => !!nom && nom !== 'N/A')));
      doc.setDrawColor(208, 213, 221);
      doc.roundedRect(8, 8, 194, 280, 2, 2, 'S');
      const logoDataUrl = yield _this2.getLogoDataUrl();
      if (logoDataUrl) {
        doc.addImage(logoDataUrl, 'JPEG', 14, 13, 28, 20);
      }
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(24);
      doc.text('FACTURE', 196, 20, {
        align: 'right'
      });
      doc.setFontSize(12);
      doc.text(`#${commande.numeroCommande || 'N/A'}`, 196, 27, {
        align: 'right'
      });
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.text(`Client: ${clientText}`, 14, 42);
      doc.text(`Date facture: ${commandeDate}`, 14, 48);
      doc.text(`Boutique(s): ${boutiques.length ? boutiques.join(', ') : 'N/A'}`, 14, 54);
      doc.text(`Paiement: ${_this2.panierService.getMethodePaiementLibelle(commande.methodePaiement || 'carte')}`, 196, 48, {
        align: 'right'
      });
      doc.text(`Date paiement: ${commande.datePaiement ? new Date(commande.datePaiement).toLocaleDateString('fr-FR') : 'N/A'}`, 196, 54, {
        align: 'right'
      });
      doc.setDrawColor(223, 227, 233);
      doc.line(14, 59, 196, 59);
      const rows = produits.map(produit => [produit.produit?.nom || 'Produit', _this2.getBoutiqueNom(produit), String(produit.qtt), _this2.panierService.formatMontantPdf(produit.prixUnitaire), _this2.panierService.formatMontantPdf(produit.sousTotal)]);
      (0,jspdf_autotable__WEBPACK_IMPORTED_MODULE_7__["default"])(doc, {
        startY: 64,
        head: [['Description', 'Boutique', 'Qte', 'Prix', 'Montant']],
        body: rows,
        styles: {
          fontSize: 9,
          cellPadding: 2.4,
          textColor: [55, 65, 81]
        },
        headStyles: {
          fillColor: [243, 244, 246],
          textColor: [17, 24, 39],
          fontStyle: 'bold'
        },
        columnStyles: {
          0: {
            cellWidth: 62
          },
          1: {
            cellWidth: 40
          },
          2: {
            cellWidth: 16,
            halign: 'center'
          },
          3: {
            cellWidth: 28,
            halign: 'right'
          },
          4: {
            cellWidth: 32,
            halign: 'right'
          }
        }
      });
      const finalY = doc.lastAutoTable?.finalY || 64;
      const summaryY = finalY + 8;
      doc.setDrawColor(223, 227, 233);
      doc.roundedRect(122, summaryY - 3, 74, 28, 1.5, 1.5, 'S');
      doc.setFont('helvetica', 'bold');
      doc.text('Resume', 126, summaryY + 2);
      doc.setFont('helvetica', 'normal');
      doc.text('Sous-total:', 126, summaryY + 9);
      doc.text(_this2.panierService.formatMontantPdf(_this2.getCommandeSousTotal(commande)), 194, summaryY + 9, {
        align: 'right'
      });
      doc.text('Frais livraison:', 126, summaryY + 15);
      doc.text(_this2.panierService.formatMontantPdf(fraisLivraison), 194, summaryY + 15, {
        align: 'right'
      });
      doc.setFont('helvetica', 'bold');
      doc.text('TOTAL:', 126, summaryY + 22);
      doc.text(_this2.panierService.formatMontantPdf(_this2.getCommandeTotal(commande)), 194, summaryY + 22, {
        align: 'right'
      });
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
      doc.text(`Date estimee: ${commande.dateLivraison ? new Date(commande.dateLivraison).toLocaleDateString('fr-FR') : 'N/A'}`, 18, infoY + 33);
      doc.text(`Methode: ${_this2.panierService.getMethodePaiementLibelle(commande.methodePaiement || 'carte')}`, 112, infoY + 9);
      doc.text(`Date: ${commande.datePaiement ? new Date(commande.datePaiement).toLocaleDateString('fr-FR') : 'N/A'}`, 112, infoY + 15);
      doc.text(`Montant: ${_this2.panierService.formatMontantPdf(_this2.getCommandeTotal(commande))}`, 112, infoY + 21);
      doc.setFont('helvetica', 'italic');
      doc.text('Merci pour votre confiance.', 112, infoY + 31);
      return doc;
    })();
  }
  getNumeroFacture(commande) {
    return commande.numeroCommande ? `FAC-${commande.numeroCommande}` : 'N/A';
  }
  getFraisLivraisonPdf(commande) {
    if (this.isAdminBoutique) return 0;
    const rawFrais = Number(commande.fraisLivraison);
    if (Number.isFinite(rawFrais) && rawFrais >= 0) {
      return rawFrais;
    }
    const total = this.getCommandeTotal(commande);
    const sousTotal = this.getCommandeSousTotal(commande);
    const fallback = total - sousTotal;
    return Number.isFinite(fallback) && fallback > 0 ? fallback : 0;
  }
  getClientText(commande) {
    const userObject = commande.userId && typeof commande.userId === 'object' ? commande.userId : null;
    const nom = userObject?.nom || this.authService.currentUser?.nom;
    const email = userObject?.email || this.authService.currentUser?.email;
    if (nom && email) {
      return `${nom} (${email})`;
    }
    if (nom) {
      return nom;
    }
    if (email) {
      return email;
    }
    if (typeof commande.userId === 'string' && commande.userId) {
      return commande.userId;
    }
    return 'Client';
  }
  getBoutiqueNom(produitLigne) {
    const boutique = produitLigne?.produit?.boutiqueId;
    if (boutique && typeof boutique === 'object' && boutique.nom) {
      return boutique.nom;
    }
    return 'N/A';
  }
  formatCoordonnee(value) {
    const numeric = Number(value);
    return Number.isFinite(numeric) ? numeric.toFixed(6) : 'N/A';
  }
  getLogoDataUrl() {
    var _this3 = this;
    return (0,D_Master_Web_avance_m1p13mean_Candy_Romance_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this3.logoDataUrlCache !== undefined) {
        return _this3.logoDataUrlCache;
      }
      try {
        const response = yield fetch('assets/images/logo3.png');
        if (!response.ok) {
          _this3.logoDataUrlCache = null;
          return null;
        }
        const blob = yield response.blob();
        _this3.logoDataUrlCache = yield _this3.blobToDataUrl(blob);
        return _this3.logoDataUrlCache;
      } catch (error) {
        console.error('Erreur chargement logo facture:', error);
        _this3.logoDataUrlCache = null;
        return null;
      }
    })();
  }
  blobToDataUrl(blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result));
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(blob);
    });
  }
  getCommandeProduits(commande) {
    if (this.isAdminBoutique && Array.isArray(commande.produitsBoutique)) {
      return commande.produitsBoutique;
    }
    return commande.produitsachete || [];
  }
  getCommandeSousTotal(commande) {
    if (this.isAdminBoutique && typeof commande.sousTotalBoutique === 'number') {
      return commande.sousTotalBoutique;
    }
    return commande.sousTotal || 0;
  }
  getCommandeTotal(commande) {
    if (this.isAdminBoutique && typeof commande.totalBoutique === 'number') {
      return commande.totalBoutique;
    }
    return commande.total || 0;
  }
  formatPrice(price) {
    return this.panierService.formatMontant(price);
  }
  getStatutClass(statut) {
    switch (statut) {
      case 'confirmee':
        return 'status-confirmed';
      case 'preparation':
        return 'status-preparation';
      case 'expedie':
        return 'status-shipped';
      case 'livre':
        return 'status-delivered';
      case 'annule':
        return 'status-cancelled';
      default:
        return 'status-pending';
    }
  }
  getStatutIcon(statut) {
    switch (statut) {
      case 'confirmee':
        return 'ti ti-check';
      case 'preparation':
        return 'ti ti-package';
      case 'expedie':
        return 'ti ti-truck-delivery';
      case 'livre':
        return 'ti ti-home-check';
      case 'annule':
        return 'ti ti-x';
      default:
        return 'ti ti-clock';
    }
  }
  canPayerCommande(commande) {
    return !this.isAdminBoutique && !!commande._id && commande.statut === 'en_attente' && !commande.isPaye;
  }
  payerCommande(commande) {
    if (!this.canPayerCommande(commande) || !commande._id) {
      this.notificationService.warning('Cette commande ne peut pas etre payee');
      return;
    }
    this.router.navigate(['/checkout'], {
      queryParams: {
        commandeId: commande._id
      }
    });
  }
  goToProducts() {
    this.router.navigate(['/produits']);
  }
  refreshCommandes() {
    this.loadCommandes();
  }
  static {
    this.ɵfac = function MesCommandesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MesCommandesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_panier_service__WEBPACK_IMPORTED_MODULE_10__.PanierService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_11__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_12__.AuthService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: MesCommandesComponent,
      selectors: [["app-mes-commandes"]],
      decls: 14,
      vars: 3,
      consts: [[1, "commandes-container"], [1, "commandes-header"], [1, "header-actions"], [1, "btn", "btn-outline-primary", 3, "click"], [1, "ti", "ti-refresh"], [1, "btn", "btn-primary", 3, "click"], [1, "ti", "ti-shopping-cart-plus"], [1, "loading-state"], [1, "empty-state"], [1, "commandes-list"], [1, "spinner-border", "text-primary"], [1, "ti", "ti-package-off"], [1, "btn", "btn-primary", "sm", 3, "click"], [1, "ti", "ti-shopping-cart"], [1, "commande-card"], [1, "commande-header"], [1, "commande-info"], [1, "commande-number"], [1, "commande-date"], [1, "ti", "ti-calendar"], [1, "commande-status"], [1, "commande-actions"], [1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [1, "ti", "ti-eye"], [1, "btn", "btn-outline-success", "btn-sm"], [1, "btn", "btn-outline-secondary", "btn-sm"], [1, "ti", "ti-user"], [1, "btn", "btn-outline-success", "btn-sm", 3, "click"], [1, "ti", "ti-credit-card"], [1, "btn", "btn-outline-secondary", "btn-sm", 3, "click"], [1, "ti", "ti-download"]],
      template: function MesCommandesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementStart"](4, "div", 2)(5, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomListener"]("click", function MesCommandesComponent_Template_button_click_5_listener() {
            return ctx.refreshCommandes();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElement"](6, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, " Actualiser ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementStart"](8, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomListener"]("click", function MesCommandesComponent_Template_button_click_8_listener() {
            return ctx.goToProducts();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElement"](9, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](11, MesCommandesComponent_Conditional_11_Template, 4, 0, "div", 7)(12, MesCommandesComponent_Conditional_12_Template, 9, 2, "div", 8)(13, MesCommandesComponent_Conditional_13_Template, 3, 0, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.isAdminBoutique ? "Commandes boutique" : "Mes commandes");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.isAdminBoutique ? "Voir produits" : "Nouvelles commandes", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx.loading ? 11 : ctx.commandes.length === 0 ? 12 : 13);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe],
      styles: [".commandes-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 2rem;\n}\n\n.commandes-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2rem;\n}\n@media (max-width: 768px) {\n  .commandes-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n  }\n}\n.commandes-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #333;\n  font-weight: 700;\n  margin: 0;\n}\n\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n@media (max-width: 768px) {\n  .header-actions[_ngcontent-%COMP%] {\n    justify-content: stretch;\n  }\n  .header-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n}\n\n.loading-state[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 4rem 2rem;\n}\n.loading-state[_ngcontent-%COMP%]   .spinner-border[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%]   .spinner-border[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  margin-bottom: 1rem;\n}\n.loading-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  color: #6c757d;\n  margin-bottom: 1rem;\n}\n.loading-state[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #333;\n  margin-bottom: 1rem;\n}\n.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6c757d;\n  margin-bottom: 2rem;\n}\n\n.commandes-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1.5rem;\n}\n\n.commande-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  padding: 1.5rem;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n.commande-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);\n}\n\n.commande-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 0.75rem;\n}\n@media (max-width: 768px) {\n  .commande-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n  }\n}\n\n.commande-info[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.35rem;\n}\n.commande-info[_ngcontent-%COMP%]   .commande-number[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #333;\n  margin-bottom: 0.25rem;\n}\n.commande-info[_ngcontent-%COMP%]   .commande-number[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #007bff;\n}\n.commande-info[_ngcontent-%COMP%]   .commande-date[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: #6c757d;\n  font-size: 0.875rem;\n}\n.commande-info[_ngcontent-%COMP%]   .commande-date[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n\n.commande-status[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  border-radius: 20px;\n  font-size: 0.875rem;\n  font-weight: 600;\n}\n.commande-status[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.commande-status[_ngcontent-%COMP%]   .status-badge.status-pending[_ngcontent-%COMP%] {\n  background: #fff3cd;\n  color: #856404;\n}\n.commande-status[_ngcontent-%COMP%]   .status-badge.status-confirmed[_ngcontent-%COMP%] {\n  background: #d1ecf1;\n  color: #0c5460;\n}\n.commande-status[_ngcontent-%COMP%]   .status-badge.status-preparation[_ngcontent-%COMP%] {\n  background: #e2e3e5;\n  color: #383d41;\n}\n.commande-status[_ngcontent-%COMP%]   .status-badge.status-shipped[_ngcontent-%COMP%] {\n  background: #cce5ff;\n  color: #004085;\n}\n.commande-status[_ngcontent-%COMP%]   .status-badge.status-delivered[_ngcontent-%COMP%] {\n  background: #d4edda;\n  color: #155724;\n}\n.commande-status[_ngcontent-%COMP%]   .status-badge.status-cancelled[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  color: #721c24;\n}\n\n.commande-products[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n  padding: 1rem;\n  background: #f8f9fa;\n  border-radius: 8px;\n  overflow-x: auto;\n}\n\n.product-mini[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex-shrink: 0;\n}\n\n.product-thumb[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  object-fit: cover;\n  border-radius: 4px;\n}\n\n.product-info[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #333;\n  font-size: 0.875rem;\n  margin-bottom: 0.25rem;\n  max-width: 150px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.product-info[_ngcontent-%COMP%]   .product-qty[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 0.75rem;\n}\n\n.more-products[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 0.875rem;\n  font-style: italic;\n  flex-shrink: 0;\n}\n\n.commande-summary[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  padding: 1rem;\n  border-radius: 8px;\n  margin-bottom: 1.5rem;\n}\n.commande-summary[_ngcontent-%COMP%]   .summary-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 0.5rem;\n}\n.commande-summary[_ngcontent-%COMP%]   .summary-row.total[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1.125rem;\n  color: #333;\n  border-top: 1px solid #dee2e6;\n  padding-top: 0.5rem;\n  margin-top: 0.5rem;\n}\n.commande-summary[_ngcontent-%COMP%]   .summary-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  color: #6c757d;\n}\n.commande-summary[_ngcontent-%COMP%]   .summary-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  color: #333;\n  font-weight: 600;\n}\n\n.commande-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  margin-top: 0.25rem;\n}\n@media (max-width: 576px) {\n  .commande-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .commande-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n.commande-delivery[_ngcontent-%COMP%], \n.commande-delivery-date[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem;\n  background: #e7f3ff;\n  border-radius: 6px;\n  margin-bottom: 0.5rem;\n  color: #0066cc;\n  font-size: 0.875rem;\n}\n.commande-delivery[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.commande-delivery-date[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n\n.commande-delivery-date[_ngcontent-%COMP%] {\n  background: #f0f8f0;\n  color: #28a745;\n}\n\n.btn[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  border: none;\n  border-radius: 6px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  text-decoration: none;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n.btn.btn-sm[_ngcontent-%COMP%] {\n  padding: 0.375rem 0.75rem;\n  font-size: 0.875rem;\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background: #007bff;\n  color: white;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #0056b3;\n}\n.btn.btn-outline-primary[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #007bff;\n  border: 1px solid #007bff;\n}\n.btn.btn-outline-primary[_ngcontent-%COMP%]:hover {\n  background: #007bff;\n  color: white;\n}\n.btn.btn-outline-secondary[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #6c757d;\n  border: 1px solid #6c757d;\n}\n.btn.btn-outline-secondary[_ngcontent-%COMP%]:hover {\n  background: #6c757d;\n  color: white;\n}\n.btn.btn-outline-success[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #28a745;\n  border: 1px solid #28a745;\n}\n.btn.btn-outline-success[_ngcontent-%COMP%]:hover {\n  background: #28a745;\n  color: white;\n}\n\n.spinner-border[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 2rem;\n  height: 2rem;\n  border: 0.125em solid currentColor;\n  border-right-color: transparent;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spinner-border 0.75s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_spinner-border {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVtby9wYWdlcy9tZXMtY29tbWFuZGVzL21lcy1jb21tYW5kZXMuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi9XZWIlMjBhdmFuY2UvbTFwMTNtZWFuLUNhbmR5LVJvbWFuY2UvZnJvbnRlbmQvc3JjL2FwcC9kZW1vL3BhZ2VzL21lcy1jb21tYW5kZXMvbWVzLWNvbW1hbmRlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNDRjtBRENFO0VBTkY7SUFPSSxzQkFBQTtJQUNBLFNBQUE7SUFDQSxvQkFBQTtFQ0VGO0FBQ0Y7QURBRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUNFSjs7QURFQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0FDQ0Y7QURDRTtFQUpGO0lBS0ksd0JBQUE7RUNFRjtFREFFO0lBQ0UsT0FBQTtFQ0VKO0FBQ0Y7O0FERUE7O0VBRUUsa0JBQUE7RUFDQSxrQkFBQTtBQ0NGO0FEQ0U7O0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0VKO0FEQ0U7O0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0VKO0FEQ0U7O0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0FDRUo7QURDRTs7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUNFSjs7QURFQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0NBQUE7RUFDQSxlQUFBO0VBQ0EscURBQUE7QUNDRjtBRENFO0VBQ0UsMkJBQUE7RUFDQSwwQ0FBQTtBQ0NKOztBREdBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBQ0FGO0FERUU7RUFORjtJ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NEJJO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FDMUJOOztBRCtCQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQ0FBQTtBQzVCRjs7QUQrQkE7RUFDRTtJQUNFLHlCQUFBO0VDNUJGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuY29tbWFuZGVzLWNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMnJlbTtcclxufVxyXG5cclxuLmNvbW1hbmRlcy1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDFyZW07XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICB9XHJcbiAgXHJcbiAgaDEge1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxufVxyXG5cclxuLmhlYWRlci1hY3Rpb25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMXJlbTtcclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcclxuICAgIFxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgZmxleDogMTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5sb2FkaW5nLXN0YXRlLFxyXG4uZW1wdHktc3RhdGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiA0cmVtIDJyZW07XHJcbiAgXHJcbiAgLnNwaW5uZXItYm9yZGVyIHtcclxuICAgIHdpZHRoOiAzcmVtO1xyXG4gICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcbiAgXHJcbiAgaSB7XHJcbiAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICBjb2xvcjogIzZjNzU3ZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgfVxyXG4gIFxyXG4gIGgyIHtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcbiAgXHJcbiAgcCB7XHJcbiAgICBjb2xvcjogIzZjNzU3ZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgfVxyXG59XHJcblxyXG4uY29tbWFuZGVzLWxpc3Qge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ2FwOiAxLjVyZW07XHJcbn1cclxuXHJcbi5jb21tYW5kZS1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgcGFkZGluZzogMS41cmVtO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UsIGJveC1zaGFkb3cgMC4zcyBlYXNlO1xyXG4gIFxyXG4gICY6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gIH1cclxufVxyXG5cclxuLmNvbW1hbmRlLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDFyZW07XHJcbiAgfVxyXG59XHJcblxyXG4uY29tbWFuZGUtaW5mbyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBnYXA6IDAuMzVyZW07XHJcblxyXG4gIC5jb21tYW5kZS1udW1iZXIge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcclxuICAgIFxyXG4gICAgc3Ryb25nIHtcclxuICAgICAgY29sb3I6ICMwMDdiZmY7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5jb21tYW5kZS1kYXRlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAwLjVyZW07XHJcbiAgICBjb2xvcjogIzZjNzU3ZDtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICBcclxuICAgIGkge1xyXG4gICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY29tbWFuZGUtc3RhdHVzIHtcclxuICAuc3RhdHVzLWJhZGdlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMC41cmVtO1xyXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBcclxuICAgIGkge1xyXG4gICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgICYuc3RhdHVzLXBlbmRpbmcge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmM2NkO1xyXG4gICAgICBjb2xvcjogIzg1NjQwNDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgJi5zdGF0dXMtY29uZmlybWVkIHtcclxuICAgICAgYmFja2dyb3VuZDogI2QxZWNmMTtcclxuICAgICAgY29sb3I6ICMwYzU0NjA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICYuc3RhdHVzLXByZXBhcmF0aW9uIHtcclxuICAgICAgYmFja2dyb3VuZDogI2UyZTNlNTtcclxuICAgICAgY29sb3I6ICMzODNkNDE7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICYuc3RhdHVzLXNoaXBwZWQge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjY2NlNWZmO1xyXG4gICAgICBjb2xvcjogIzAwNDA4NTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgJi5zdGF0dXMtZGVsaXZlcmVkIHtcclxuICAgICAgYmFja2dyb3VuZDogI2Q0ZWRkYTtcclxuICAgICAgY29sb3I6ICMxNTU3MjQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICYuc3RhdHVzLWNhbmNlbGxlZCB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmOGQ3ZGE7XHJcbiAgICAgIGNvbG9yOiAjNzIxYzI0O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmNvbW1hbmRlLXByb2R1Y3RzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbn1cclxuXHJcbi5wcm9kdWN0LW1pbmkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDAuNzVyZW07XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbn1cclxuXHJcbi5wcm9kdWN0LXRodW1iIHtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4ucHJvZHVjdC1pbmZvIHtcclxuICAucHJvZHVjdC1uYW1lIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xyXG4gICAgbWF4LXdpZHRoOiAxNTBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9kdWN0LXF0eSB7XHJcbiAgICBjb2xvcjogIzZjNzU3ZDtcclxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5tb3JlLXByb2R1Y3RzIHtcclxuICBjb2xvcjogIzZjNzU3ZDtcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBmbGV4LXNocmluazogMDtcclxufVxyXG5cclxuLmNvbW1hbmRlLXN1bW1hcnkge1xyXG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gIFxyXG4gIC5zdW1tYXJ5LXJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgXHJcbiAgICAmLnRvdGFsIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgZm9udC1zaXplOiAxLjEyNXJlbTtcclxuICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gICAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xyXG4gICAgICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNwYW46Zmlyc3QtY2hpbGQge1xyXG4gICAgICBjb2xvcjogIzZjNzU3ZDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc3BhbjpsYXN0LWNoaWxkIHtcclxuICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY29tbWFuZGUtYWN0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDAuNzVyZW07XHJcbiAgbWFyZ2luLXRvcDogMC4yNXJlbTtcclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmNvbW1hbmRlLWRlbGl2ZXJ5LFxyXG4uY29tbWFuZGUtZGVsaXZlcnktZGF0ZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC41cmVtO1xyXG4gIHBhZGRpbmc6IDAuNzVyZW07XHJcbiAgYmFja2dyb3VuZDogI2U3ZjNmZjtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gIGNvbG9yOiAjMDA2NmNjO1xyXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgXHJcbiAgaSB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgfVxyXG59XHJcblxyXG4uY29tbWFuZGUtZGVsaXZlcnktZGF0ZSB7XHJcbiAgYmFja2dyb3VuZDogI2YwZjhmMDtcclxuICBjb2xvcjogIzI4YTc0NTtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogMC41cmVtO1xyXG4gIFxyXG4gICYuYnRuLXNtIHtcclxuICAgIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XHJcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gIH1cclxuICBcclxuICAmLmJ0bi1wcmltYXJ5IHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDdiZmY7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMDA1NmIzO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAmLmJ0bi1vdXRsaW5lLXByaW1hcnkge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogIzAwN2JmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDdiZmY7XHJcbiAgICBcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMDA3YmZmO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gICYuYnRuLW91dGxpbmUtc2Vjb25kYXJ5IHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNmM3NTdkO1xyXG4gICAgXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogIzZjNzU3ZDtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5idG4tb3V0bGluZS1zdWNjZXNzIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6ICMyOGE3NDU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMjhhNzQ1O1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMjhhNzQ1O1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uc3Bpbm5lci1ib3JkZXIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMnJlbTtcclxuICBoZWlnaHQ6IDJyZW07XHJcbiAgYm9yZGVyOiAwLjEyNWVtIHNvbGlkIGN1cnJlbnRDb2xvcjtcclxuICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBhbmltYXRpb246IHNwaW5uZXItYm9yZGVyIDAuNzVzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBzcGlubmVyLWJvcmRlciB7XHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuIiwiLmNvbW1hbmRlcy1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDJyZW07XG59XG5cbi5jb21tYW5kZXMtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jb21tYW5kZXMtaGVhZGVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMXJlbTtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgfVxufVxuLmNvbW1hbmRlcy1oZWFkZXIgaDEge1xuICBjb2xvcjogIzMzMztcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uaGVhZGVyLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDFyZW07XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmhlYWRlci1hY3Rpb25zIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XG4gIH1cbiAgLmhlYWRlci1hY3Rpb25zIGJ1dHRvbiB7XG4gICAgZmxleDogMTtcbiAgfVxufVxuXG4ubG9hZGluZy1zdGF0ZSxcbi5lbXB0eS1zdGF0ZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNHJlbSAycmVtO1xufVxuLmxvYWRpbmctc3RhdGUgLnNwaW5uZXItYm9yZGVyLFxuLmVtcHR5LXN0YXRlIC5zcGlubmVyLWJvcmRlciB7XG4gIHdpZHRoOiAzcmVtO1xuICBoZWlnaHQ6IDNyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4ubG9hZGluZy1zdGF0ZSBpLFxuLmVtcHR5LXN0YXRlIGkge1xuICBmb250LXNpemU6IDRyZW07XG4gIGNvbG9yOiAjNmM3NTdkO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLmxvYWRpbmctc3RhdGUgaDIsXG4uZW1wdHktc3RhdGUgaDIge1xuICBjb2xvcjogIzMzMztcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi5sb2FkaW5nLXN0YXRlIHAsXG4uZW1wdHktc3RhdGUgcCB7XG4gIGNvbG9yOiAjNmM3NTdkO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG4uY29tbWFuZGVzLWxpc3Qge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDEuNXJlbTtcbn1cblxuLmNvbW1hbmRlLWNhcmQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgcGFkZGluZzogMS41cmVtO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLCBib3gtc2hhZG93IDAuM3MgZWFzZTtcbn1cbi5jb21tYW5kZS1jYXJkOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG59XG5cbi5jb21tYW5kZS1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jb21tYW5kZS1oZWFkZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxcmVtO1xuICB9XG59XG5cbi5jb21tYW5kZS1pbmZvIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAwLjM1cmVtO1xufVxuLmNvbW1hbmRlLWluZm8gLmNvbW1hbmRlLW51bWJlciB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMzMzO1xuICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xufVxuLmNvbW1hbmRlLWluZm8gLmNvbW1hbmRlLW51bWJlciBzdHJvbmcge1xuICBjb2xvcjogIzAwN2JmZjtcbn1cbi5jb21tYW5kZS1pbmZvIC5jb21tYW5kZS1kYXRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG4gIGNvbG9yOiAjNmM3NTdkO1xuICBmb250LXNpemU6IDAuODc1cmVtO1xufVxuLmNvbW1hbmRlLWluZm8gLmNvbW1hbmRlLWRhdGUgaSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLmNvbW1hbmRlLXN0YXR1cyAuc3RhdHVzLWJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5jb21tYW5kZS1zdGF0dXMgLnN0YXR1cy1iYWRnZSBpIHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuLmNvbW1hbmRlLXN0YXR1cyAuc3RhdHVzLWJhZGdlLnN0YXR1cy1wZW5kaW5nIHtcbiAgYmFja2dyb3VuZDogI2ZmZjNjZDtcbiAgY29sb3I6ICM4NTY0MDQ7XG59XG4uY29tbWFuZGUtc3RhdHVzIC5zdGF0dXMtYmFkZ2Uuc3RhdHVzLWNvbmZpcm1lZCB7XG4gIGJhY2tncm91bmQ6ICNkMWVjZjE7XG4gIGNvbG9yOiAjMGM1NDYwO1xufVxuLmNvbW1hbmRlLXN0YXR1cyAuc3RhdHVzLWJhZGdlLnN0YXR1cy1wcmVwYXJhdGlvbiB7XG4gIGJhY2tncm91bmQ6ICNlMmUzZTU7XG4gIGNvbG9yOiAjMzgzZDQxO1xufVxuLmNvbW1hbmRlLXN0YXR1cyAuc3RhdHVzLWJhZGdlLnN0YXR1cy1zaGlwcGVkIHtcbiAgYmFja2dyb3VuZDogI2NjZTVmZjtcbiAgY29sb3I6ICMwMDQwODU7XG59XG4uY29tbWFuZGUtc3RhdHVzIC5zdGF0dXMtYmFkZ2Uuc3RhdHVzLWRlbGl2ZXJlZCB7XG4gIGJhY2tncm91bmQ6ICNkNGVkZGE7XG4gIGNvbG9yOiAjMTU1NzI0O1xufVxuLmNvbW1hbmRlLXN0YXR1cyAuc3RhdHVzLWJhZGdlLnN0YXR1cy1jYW5jZWxsZWQge1xuICBiYWNrZ3JvdW5kOiAjZjhkN2RhO1xuICBjb2xvcjogIzcyMWMyNDtcbn1cblxuLmNvbW1hbmRlLXByb2R1Y3RzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbn1cblxuLnByb2R1Y3QtbWluaSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC43NXJlbTtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5wcm9kdWN0LXRodW1iIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLnByb2R1Y3QtaW5mbyAucHJvZHVjdC1uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMzMzM7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG4gIG1heC13aWR0aDogMTUwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLnByb2R1Y3QtaW5mbyAucHJvZHVjdC1xdHkge1xuICBjb2xvcjogIzZjNzU3ZDtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xufVxuXG4ubW9yZS1wcm9kdWN0cyB7XG4gIGNvbG9yOiAjNmM3NTdkO1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4uY29tbWFuZGUtc3VtbWFyeSB7XG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xufVxuLmNvbW1hbmRlLXN1bW1hcnkgLnN1bW1hcnktcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG4uY29tbWFuZGUtc3VtbWFyeSAuc3VtbWFyeS1yb3cudG90YWwge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDEuMTI1cmVtO1xuICBjb2xvcjogIzMzMztcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWUyZTY7XG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cbi5jb21tYW5kZS1zdW1tYXJ5IC5zdW1tYXJ5LXJvdyBzcGFuOmZpcnN0LWNoaWxkIHtcbiAgY29sb3I6ICM2Yzc1N2Q7XG59XG4uY29tbWFuZGUtc3VtbWFyeSAuc3VtbWFyeS1yb3cgc3BhbjpsYXN0LWNoaWxkIHtcbiAgY29sb3I6ICMzMzM7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5jb21tYW5kZS1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAwLjc1cmVtO1xuICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5jb21tYW5kZS1hY3Rpb25zIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5jb21tYW5kZS1hY3Rpb25zIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuLmNvbW1hbmRlLWRlbGl2ZXJ5LFxuLmNvbW1hbmRlLWRlbGl2ZXJ5LWRhdGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbiAgcGFkZGluZzogMC43NXJlbTtcbiAgYmFja2dyb3VuZDogI2U3ZjNmZjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIGNvbG9yOiAjMDA2NmNjO1xuICBmb250LXNpemU6IDAuODc1cmVtO1xufVxuLmNvbW1hbmRlLWRlbGl2ZXJ5IGksXG4uY29tbWFuZGUtZGVsaXZlcnktZGF0ZSBpIHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4uY29tbWFuZGUtZGVsaXZlcnktZGF0ZSB7XG4gIGJhY2tncm91bmQ6ICNmMGY4ZjA7XG4gIGNvbG9yOiAjMjhhNzQ1O1xufVxuXG4uYnRuIHtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbn1cbi5idG4uYnRuLXNtIHtcbiAgcGFkZGluZzogMC4zNzVyZW0gMC43NXJlbTtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbn1cbi5idG4uYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kOiAjMDA3YmZmO1xuICBjb2xvcjogd2hpdGU7XG59XG4uYnRuLmJ0bi1wcmltYXJ5OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzAwNTZiMztcbn1cbi5idG4uYnRuLW91dGxpbmUtcHJpbWFyeSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogIzAwN2JmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwN2JmZjtcbn1cbi5idG4uYnRuLW91dGxpbmUtcHJpbWFyeTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMwMDdiZmY7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5idG4uYnRuLW91dGxpbmUtc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjNmM3NTdkO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNmM3NTdkO1xufVxuLmJ0bi5idG4tb3V0bGluZS1zZWNvbmRhcnk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNmM3NTdkO1xuICBjb2xvcjogd2hpdGU7XG59XG4uYnRuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICMyOGE3NDU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyOGE3NDU7XG59XG4uYnRuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3M6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMjhhNzQ1O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zcGlubmVyLWJvcmRlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDJyZW07XG4gIGhlaWdodDogMnJlbTtcbiAgYm9yZGVyOiAwLjEyNWVtIHNvbGlkIGN1cnJlbnRDb2xvcjtcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBhbmltYXRpb246IHNwaW5uZXItYm9yZGVyIDAuNzVzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBzcGlubmVyLWJvcmRlciB7XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_demo_pages_mes-commandes_mes-commandes_component_ts.js.map