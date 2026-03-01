"use strict";
(self["webpackChunkfree_version"] = self["webpackChunkfree_version"] || []).push([["src_app_demo_pages_commande-detail_commande-detail_component_ts"],{

/***/ 2619:
/*!********************************************!*\
  !*** ./src/app/services/panier.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanierService: () => (/* binding */ PanierService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ 3366);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ 4796);




class PanierService {
  constructor(apiService, authService) {
    this.apiService = apiService;
    this.authService = authService;
    this.endpoint = '/paniers';
    this.panierUpdated$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(undefined);
  }
  /**
   * Ã‰mettre un Ã©vÃ©nement de mise Ã  jour du panier
   */
  notifyPanierUpdated() {
    this.panierUpdated$.next(undefined);
  }
  /**
   * Observer les mises Ã  jour du panier
   */
  onPanierUpdated() {
    return this.panierUpdated$.asObservable();
  }
  /**
   * RÃ©cupÃ©rer l'ID de l'utilisateur actuel
   */
  getCurrentUserId() {
    return this.authService.getUserId();
  }
  /**
   * RÃ©cupÃ©rer le panier de l'utilisateur
   */
  getPanier() {
    const userId = this.getCurrentUserId();
    const headers = {
      'X-User-Id': userId
    };
    return this.apiService.get(this.endpoint, {
      headers
    });
  }
  /**
  * RÃ©cupÃ©rer le commande de l'utilisateur
  */
  getCommande() {
    const userId = this.getCurrentUserId();
    const headers = {
      'X-User-Id': userId
    };
    return this.apiService.get(`${this.endpoint}/commande`, {
      headers
    });
  }
  /**
   * Ajouter un produit au panier
   */
  addToPanier(request) {
    const userId = this.getCurrentUserId();
    const requestWithUserId = {
      ...request,
      userId
    };
    return this.apiService.post(`${this.endpoint}/ajouter`, requestWithUserId);
  }
  /**
   * Ajouter un produit au panier (méthode de compatibilitÃ©)
   */
  ajouterProduit(productId, quantity = 1, attributes) {
    return this.addToPanier({
      productId,
      quantity,
      attributes
    });
  }
  /**
   * Mettre Ã  jour la quantitÃ© d'un produit dans le panier
   */
  updateQuantite(productId, quantity) {
    const userId = this.getCurrentUserId();
    return this.apiService.put(`${this.endpoint}/${productId}/quantite`, {
      quantity,
      userId
    });
  }
  /**
   * Supprimer un produit du panier
   */
  removeFromPanier(productId) {
    const userId = this.getCurrentUserId();
    return this.apiService.delete(`${this.endpoint}/${productId}?userId=${userId}`);
  }
  /**
   * Vider tout le panier
   */
  viderPanier() {
    const userId = this.getCurrentUserId();
    console.log('Vidage panier pour utilisateur:', userId);
    return this.apiService.delete(`${this.endpoint}/vider?userId=${userId}`);
  }
  /**
   * Valider la commande (marquer le panier comme livrÃ©)
   */
  validerPanier() {
    const userId = this.getCurrentUserId();
    return this.apiService.post(`${this.endpoint}/valider`, {
      userId
    });
  }
  /**
   * Mettre Ã  jour la commande (adresse et méthode de paiement)
   */
  mettreAJourCommande(data) {
    const userId = this.getCurrentUserId();
    return this.apiService.post(`${this.endpoint}/mettre-a-jour`, {
      ...data,
      userId
    });
  }
  /**
   * Mettre a jour une commande specifique (en attente) par ID
   */
  mettreAJourCommandeById(commandeId, data) {
    const userId = this.getCurrentUserId();
    return this.apiService.post(`${this.endpoint}/${commandeId}/mettre-a-jour`, {
      ...data,
      userId
    });
  }
  /**
   * Payer la commande
   */
  payerCommande(paiementDetails) {
    const userId = this.getCurrentUserId();
    return this.apiService.post(`${this.endpoint}/payer`, {
      userId,
      paiementDetails
    });
  }
  /**
   * Payer une commande specifique (en attente) par ID
   */
  payerCommandeById(commandeId, paiementDetails) {
    const userId = this.getCurrentUserId();
    return this.apiService.post(`${this.endpoint}/${commandeId}/payer`, {
      userId,
      paiementDetails
    });
  }
  /**
   * Annuler une commande
   */
  annulerCommande(motif) {
    const userId = this.getCurrentUserId();
    return this.apiService.post(`${this.endpoint}/annuler`, {
      userId,
      motif
    });
  }
  /**
   * RÃ©cupÃ©rer l'historique des commandes
   */
  getHistoriqueCommandes() {
    const userId = this.getCurrentUserId();
    const headers = {
      'X-User-Id': userId
    };
    return this.apiService.get(`${this.endpoint}/historique`, {
      headers
    });
  }
  /**
   * Calculer le nombre total d'articles dans le panier
   */
  getNombreArticles(panier) {
    return panier?.produitsachete?.reduce((total, item) => total + item.qtt, 0) ?? 0;
  }
  /**
   * Calculer le montant total du panier
   */
  getMontantTotal(panier) {
    return panier?.total ?? 0;
  }
  /**
   * VÃ©rifier si le panier est vide
   */
  isPanierVide(panier) {
    return !panier || !panier.produitsachete || panier.produitsachete.length === 0;
  }
  /**
   * Obtenir le sous-total des produits (sans frais de livraison)
   */
  getSousTotal(panier) {
    return panier?.sousTotal || 0;
  }
  /**
   * Obtenir les frais de livraison
   */
  getFraisLivraison(panier) {
    return panier?.fraisLivraison || 0;
  }
  /**
   * Obtenir le total final (sous-total + frais de livraison)
   */
  getTotal(panier) {
    return panier?.total || 0;
  }
  /**
   * Formater un montant en Ariary
   */
  formatMontant(montant) {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'MGA' // Code ISO pour l'Ariary malgache
    }).format(montant);
  }
  /**
   * Formater un montant pour PDF (separateur en ".")
   */
  formatMontantPdf(montant) {
    const safeValue = Number(montant ?? 0);
    const rounded = Math.round(safeValue);
    const absValue = Math.abs(rounded);
    const formatted = absValue.toLocaleString('fr-FR', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
    const withDots = formatted.replace(/[\u202f\u00a0\s]/g, '.');
    const sign = rounded < 0 ? '-' : '';
    return `${sign}${withDots} Ar`;
  }
  /**
   * Obtenir le libellé du statut en français
   */
  getStatutLibelle(statut) {
    const statuts = {
      'panier': 'Panier',
      'en_attente': 'En attente de paiement',
      'confirmee': 'Confirmée',
      'preparation': 'En préparation',
      'expedie': 'Expédiée',
      'livre': 'Livrée',
      'annule': 'Annulée'
    };
    return statuts[statut] || statut;
  }
  /**
   * Obtenir le libellé de la méthode de paiement en français
   */
  getMethodePaiementLibelle(methode) {
    const methodes = {
      'carte': 'Carte bancaire',
      'virement': 'Virement bancaire',
      'espece': 'Espèces'
    };
    return methodes[methode] || methode;
  }
  /**
   * Recuperer les commandes liees a la boutique de l'admin
   */
  getCommandesBoutique() {
    return this.apiService.get(`${this.endpoint}/boutique-commandes`);
  }
  /**
   * Recuperer une commande par ID
   */
  getCommandeById(commandeId) {
    return this.apiService.get(`${this.endpoint}/${commandeId}`);
  }
  static {
    this.ɵfac = function PanierService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PanierService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: PanierService,
      factory: PanierService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 4229:
/*!*************************************************************************!*\
  !*** ./src/app/demo/pages/commande-detail/commande-detail.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommandeDetailComponent: () => (/* binding */ CommandeDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 6264);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 3900);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 3305);
/* harmony import */ var _services_panier_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/panier.service */ 2619);
/* harmony import */ var _services_boutique_commande_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/boutique-commande.service */ 8807);
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/notification.service */ 7473);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../services/auth.service */ 4796);












function CommandeDetailComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElement"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Chargement de la commande...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementEnd"]()();
  }
}
function CommandeDetailComponent_Conditional_5_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElement"](1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", ctx_r0.commande.userId == null ? null : ctx_r0.commande.userId.nom, " (", ctx_r0.commande.userId == null ? null : ctx_r0.commande.userId.email, ")");
  }
}
function CommandeDetailComponent_Conditional_5_For_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElement"](1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementStart"](2, "div", 18)(3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementStart"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementStart"](7, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementEnd"]()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomProperty"]("src", (item_r2.produit == null ? null : item_r2.produit.photo) || "https://via.placeholder.com/80x80", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"])("alt", (item_r2.produit == null ? null : item_r2.produit.nom) || "Produit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]((item_r2.produit == null ? null : item_r2.produit.nom) || "Produit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Quantit\u00E9: ", item_r2.qtt);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.formatPrice(item_r2.sousTotal));
  }
}
function CommandeDetailComponent_Conditional_5_Conditional_23_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementStart"](0, "div", 22)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Part centre (1%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("-", ctx_r0.formatPrice(ctx_r0.getPartCentre(ctx_r0.commande)));
  }
}
function CommandeDetailComponent_Conditional_5_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementStart"](0, "div", 22)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Facture client - Sous-total");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementStart"](5, "div", 22)(6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Facture client - Livraison");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementStart"](10, "div", 22)(11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Facture client - Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementStart"](15, "div", 22)(16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Mes articles - Sous-total");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementStart"](20, "div", 22)(21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Livraison imput\u00E9e \u00E0 ma boutique");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementStart"](25, "div", 22)(26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "Total boutique brut");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementStart"](28, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](30, CommandeDetailComponent_Conditional_5_Conditional_23_Conditional_30_Template, 5, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementStart"](31, "div", 23)(32, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Total net boutique");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementStart"](34, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.formatPrice(ctx_r0.getFactureSousTotal(ctx_r0.commande)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.formatPrice(ctx_r0.getFactureFraisLivraison(ctx_r0.commande)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.formatPrice(ctx_r0.getFactureTotal(ctx_r0.commande)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.formatPrice(ctx_r0.getCommandeSousTotal(ctx_r0.commande)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.formatPrice(ctx_r0.getBoutiqueFraisLivraison(ctx_r0.commande)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.formatPrice(ctx_r0.getTotalBoutiqueBrut(ctx_r0.commande)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx_r0.getPartCentre(ctx_r0.commande) > 0 ? 30 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.formatPrice(ctx_r0.getCommandeTotal(ctx_r0.commande)));
  }
}
function CommandeDetailComponent_Conditional_5_Conditional_24_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementStart"](0, "div", 22)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Frais de livraison");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.formatPrice(ctx_r0.getFraisLivraison(ctx_r0.commande)));
  }
}
function CommandeDetailComponent_Conditional_5_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementStart"](0, "div", 22)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Sous-total");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](5, CommandeDetailComponent_Conditional_5_Conditional_24_Conditional_5_Template, 5, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementStart"](6, "div", 23)(7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.formatPrice(ctx_r0.getCommandeSousTotal(ctx_r0.commande)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx_r0.getFraisLivraison(ctx_r0.commande) > 0 ? 5 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.formatPrice(ctx_r0.getCommandeTotal(ctx_r0.commande)));
  }
}
function CommandeDetailComponent_Conditional_5_Conditional_25_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementStart"](0, "div")(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Adresse:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.commande.adresseLivraison.nomEndroit);
  }
}
function CommandeDetailComponent_Conditional_5_Conditional_25_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementStart"](0, "div")(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Coordonn\u00E9es:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", ctx_r0.commande.adresseLivraison.latitude, ", ", ctx_r0.commande.adresseLivraison.longitude);
  }
}
function CommandeDetailComponent_Conditional_5_Conditional_25_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementStart"](0, "div")(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "T\u00E9l\u00E9phone:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.commande.adresseLivraison.telephone);
  }
}
function CommandeDetailComponent_Conditional_5_Conditional_25_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementStart"](0, "div")(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Livraison pr\u00E9vue:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](4, 1, ctx_r0.commande.dateLivraison, "longDate"));
  }
}
function CommandeDetailComponent_Conditional_5_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementStart"](0, "div", 15)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Livraison");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementStart"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](4, CommandeDetailComponent_Conditional_5_Conditional_25_Conditional_4_Template, 4, 1, "div")(5, CommandeDetailComponent_Conditional_5_Conditional_25_Conditional_5_Template, 4, 2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](6, CommandeDetailComponent_Conditional_5_Conditional_25_Conditional_6_Template, 4, 1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](7, CommandeDetailComponent_Conditional_5_Conditional_25_Conditional_7_Template, 5, 4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx_r0.commande.adresseLivraison.nomEndroit ? 4 : ctx_r0.commande.adresseLivraison.latitude != null && ctx_r0.commande.adresseLivraison.longitude != null ? 5 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx_r0.commande.adresseLivraison.telephone ? 6 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx_r0.commande.dateLivraison && ctx_r0.commande.statut !== "panier" && ctx_r0.commande.statut !== "en_attente" ? 7 : -1);
  }
}
function CommandeDetailComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementStart"](0, "div", 6)(1, "div", 7)(2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementStart"](4, "div", 8)(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElement"](6, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](9, CommandeDetailComponent_Conditional_5_Conditional_9_Template, 3, 2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementStart"](10, "div", 10)(11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElement"](12, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementStart"](14, "div", 11)(15, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Produits");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementStart"](17, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterCreate"](18, CommandeDetailComponent_Conditional_5_For_19_Template, 9, 5, "div", 13, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterTrackByIndex"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementStart"](20, "div", 14)(21, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "R\u00E9capitulatif");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](23, CommandeDetailComponent_Conditional_5_Conditional_23_Template, 36, 8)(24, CommandeDetailComponent_Conditional_5_Conditional_24_Template, 11, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](25, CommandeDetailComponent_Conditional_5_Conditional_25_Template, 8, 3, "div", 15);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Commande ", ctx_r0.commande.numeroCommande);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](8, 11, ctx_r0.commande.createdAt, "longDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx_r0.isAdminBoutique && (ctx_r0.commande.userId == null ? null : ctx_r0.commande.userId.nom) ? 9 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinterpolate1"]("status-badge ", ctx_r0.getStatutClass(ctx_r0.commande.statut)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx_r0.getStatutIcon(ctx_r0.commande.statut));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.getStatutLabel(ctx_r0.commande.statut), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeater"](ctx_r0.getCommandeProduits(ctx_r0.commande));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx_r0.isAdminBoutique ? 23 : 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx_r0.commande.adresseLivraison ? 25 : -1);
  }
}
function CommandeDetailComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElement"](1, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Commande introuvable");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Impossible d'afficher les d\u00E9tails de la commande.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementEnd"]()();
  }
}
class CommandeDetailComponent {
  constructor(route, router, panierService, boutiqueCommandeService, notificationService, authService) {
    this.route = route;
    this.router = router;
    this.panierService = panierService;
    this.boutiqueCommandeService = boutiqueCommandeService;
    this.notificationService = notificationService;
    this.authService = authService;
    this.commande = null;
    this.loading = false;
    this.isAdminBoutique = false;
    this.isBoutiqueScope = false;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.cdr = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef);
  }
  ngOnInit() {
    this.isAdminBoutique = this.authService.currentUser?.role === 'admin_boutique';
    this.route.params.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe(params => {
      const id = params['id'];
      if (!id) {
        this.router.navigate(['/commandes']);
        return;
      }
      this.isBoutiqueScope = this.route.snapshot.queryParamMap.get('scope') === 'boutique';
      this.loadCommande(id);
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadCommande(id) {
    this.loading = true;
    const source$ = this.isBoutiqueScope ? this.boutiqueCommandeService.getMyBoutiqueCommandeById(id) : this.panierService.getCommandeById(id);
    source$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe({
      next: response => {
        this.commande = response.data;
        this.loading = false;
        Promise.resolve().then(() => {
          this.cdr.detectChanges();
        });
      },
      error: error => {
        console.error('Erreur chargement commande:', error);
        this.notificationService.error('Erreur lors du chargement de la commande');
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }
  getCommandeProduits(commande) {
    if (this.isAdminBoutique && Array.isArray(commande.produitsBoutique)) {
      return commande.produitsBoutique;
    }
    if (this.isAdminBoutique && Array.isArray(commande.produitsachete)) {
      return commande.produitsachete;
    }
    return commande.produitsachete || [];
  }
  getCommandeSousTotal(commande) {
    if (this.isAdminBoutique && typeof commande.sousTotalBoutique === 'number') {
      return commande.sousTotalBoutique;
    }
    if (this.isAdminBoutique && typeof commande.totalBoutique === 'number') {
      return commande.totalBoutique;
    }
    return commande.sousTotal || 0;
  }
  getCommandeTotal(commande) {
    if (this.isAdminBoutique) {
      const net = Number(commande.totalBoutiqueNet ?? commande.facture?.totalBoutiqueNet);
      if (Number.isFinite(net)) {
        return net;
      }
      return this.getTotalBoutiqueBrut(commande) - this.getPartCentre(commande);
    }
    return commande.total || 0;
  }
  getFraisLivraison(commande) {
    const rawFrais = Number(commande.fraisLivraison);
    if (Number.isFinite(rawFrais) && rawFrais >= 0) return rawFrais;
    const total = Number(commande.total);
    const sousTotal = Number(commande.sousTotal);
    const fallback = total - sousTotal;
    return Number.isFinite(fallback) && fallback > 0 ? fallback : 0;
  }
  formatPrice(price) {
    return this.panierService.formatMontant(price);
  }
  getFactureSousTotal(commande) {
    return Number(commande.facture?.sousTotalCommande ?? commande.sousTotal ?? 0);
  }
  getFactureFraisLivraison(commande) {
    return Number(commande.facture?.fraisLivraisonCommande ?? commande.fraisLivraison ?? 0);
  }
  getFactureTotal(commande) {
    return Number(commande.facture?.totalCommande ?? commande.total ?? 0);
  }
  getTotalBoutiqueBrut(commande) {
    return Number(commande.totalBoutique ?? commande.facture?.totalBoutique ?? 0);
  }
  getBoutiqueFraisLivraison(commande) {
    return Number(commande.fraisLivraisonBoutique ?? commande.facture?.fraisLivraisonBoutique ?? 0);
  }
  getPartCentre(commande) {
    return Number(commande.partCentre ?? commande.facture?.partCentre ?? 0);
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
  getStatutLabel(statut) {
    return this.panierService.getStatutLibelle(statut);
  }
  goBack() {
    if (this.isBoutiqueScope || this.isAdminBoutique) {
      this.router.navigate(['/boutique/commandes']);
      return;
    }
    this.router.navigate(['/commandes']);
  }
  static {
    this.ɵfac = function CommandeDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CommandeDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_panier_service__WEBPACK_IMPORTED_MODULE_8__.PanierService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_boutique_commande_service__WEBPACK_IMPORTED_MODULE_9__.BoutiqueCommandeService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_10__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_11__.AuthService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: CommandeDetailComponent,
      selectors: [["app-commande-detail"]],
      decls: 7,
      vars: 1,
      consts: [[1, "commande-detail-container"], ["type", "button", 1, "back-button", 3, "click"], [1, "ti", "ti-arrow-left"], [1, "loading-state"], [1, "error-state"], [1, "spinner-border", "text-primary"], [1, "commande-header"], [1, "header-main"], [1, "header-meta"], [1, "ti", "ti-calendar"], [1, "header-status"], [1, "section"], [1, "products-list"], [1, "product-row"], [1, "section", "summary"], [1, "section", "delivery"], [1, "ti", "ti-user"], [1, "product-thumb", 3, "src", "alt"], [1, "product-info"], [1, "product-name"], [1, "product-meta"], [1, "product-price"], [1, "summary-row"], [1, "summary-row", "total"], [1, "delivery-info"], [1, "ti", "ti-alert-circle"]],
      template: function CommandeDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementStart"](0, "div", 0)(1, "button", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomListener"]("click", function CommandeDetailComponent_Template_button_click_1_listener() {
            return ctx.goBack();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElement"](2, "i", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Retour aux commandes ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](4, CommandeDetailComponent_Conditional_4_Template, 4, 0, "div", 3)(5, CommandeDetailComponent_Conditional_5_Template, 26, 14)(6, CommandeDetailComponent_Conditional_6_Template, 6, 0, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdomElementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx.loading ? 4 : ctx.commande ? 5 : 6);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe],
      styles: [".commande-detail-container[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 2rem;\n  color: #1f2937;\n}\n\n.back-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  border: none;\n  background: transparent;\n  color: #2563eb;\n  font-weight: 600;\n  margin-bottom: 1.5rem;\n  cursor: pointer;\n}\n\n.loading-state[_ngcontent-%COMP%], \n.error-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem 1rem;\n}\n\n.commande-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n@media (max-width: 768px) {\n  .commande-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n  }\n}\n\n.header-main[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem 0;\n  font-size: 1.5rem;\n}\n\n.header-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  color: #6b7280;\n  font-size: 0.9rem;\n}\n.header-meta[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0.35rem;\n}\n\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  border-radius: 20px;\n  font-size: 0.875rem;\n  font-weight: 600;\n}\n.status-badge.status-pending[_ngcontent-%COMP%] {\n  background: #fff3cd;\n  color: #856404;\n}\n.status-badge.status-confirmed[_ngcontent-%COMP%] {\n  background: #d1ecf1;\n  color: #0c5460;\n}\n.status-badge.status-preparation[_ngcontent-%COMP%] {\n  background: #e2e3e5;\n  color: #383d41;\n}\n.status-badge.status-shipped[_ngcontent-%COMP%] {\n  background: #cce5ff;\n  color: #004085;\n}\n.status-badge.status-delivered[_ngcontent-%COMP%] {\n  background: #d4edda;\n  color: #155724;\n}\n.status-badge.status-cancelled[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  color: #721c24;\n}\n\n.section[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n.section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 1rem 0;\n  font-size: 1.2rem;\n}\n\n.products-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.product-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.75rem;\n  background: #f9fafb;\n  border-radius: 8px;\n}\n\n.product-thumb[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 8px;\n  object-fit: cover;\n}\n\n.product-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.product-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 0.25rem;\n}\n\n.product-meta[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.85rem;\n}\n\n.product-price[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #111827;\n}\n\n.summary-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.5rem 0;\n  border-bottom: 1px solid #f1f5f9;\n}\n.summary-row.total[_ngcontent-%COMP%] {\n  border-top: 1px solid #e5e7eb;\n  border-bottom: none;\n  font-weight: 700;\n  font-size: 1.1rem;\n}\n\n.delivery-info[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.5rem;\n  color: #374151;\n}\n\n@media (max-width: 576px) {\n  .commande-detail-container[_ngcontent-%COMP%] {\n    padding: 1.25rem;\n  }\n  .product-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .product-price[_ngcontent-%COMP%] {\n    align-self: flex-end;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVtby9wYWdlcy9jb21tYW5kZS1kZXRhaWwvY29tbWFuZGUtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vV2ViJTIwYXZhbmNlL20xcDEzbWVhbi1DYW5keS1Sb21hbmNlL2Zyb250ZW5kL3NyYy9hcHAvZGVtby9wYWdlcy9jb21tYW5kZS1kZXRhaWwvY29tbWFuZGUtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7O0VBRUUsa0JBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUNDRjtBRENFO0VBVkY7SUFXSSxzQkFBQTtJQUNBLFNBQUE7RUNFRjtBQUNGOztBREVFO0VBQ0Usb0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREdBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDQUY7QURFRTtFQUNFLHFCQUFBO0FDQUo7O0FESUE7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDREY7QURHRTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQ0RKO0FESUU7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUNGSjtBREtFO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FDSEo7QURNRTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQ0pKO0FET0U7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUNMSjtBRFFFO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FDTko7O0FEVUE7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUNQRjtBRFNFO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQ1BKOztBRFdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQ1JGOztBRFdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ1JGOztBRFdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDUkY7O0FEV0E7RUFDRSxPQUFBO0FDUkY7O0FEV0E7RUFDRSxnQkFBQTtFQUNBLHNCQUFBO0FDUkY7O0FEV0E7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUNSRjs7QURXQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQ1JGOztBRFdBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtBQ1JGO0FEVUU7RUFDRSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ1JKOztBRFlBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDVEY7O0FEWUE7RUFDRTtJQUNFLGdCQUFBO0VDVEY7RURZQTtJQUNFLHNCQUFBO0lBQ0EsdUJBQUE7RUNWRjtFRGFBO0lBQ0Usb0JBQUE7RUNYRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbW1hbmRlLWRldGFpbC1jb250YWluZXIge1xyXG4gIG1heC13aWR0aDogMTEwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgY29sb3I6ICMxZjI5Mzc7XHJcbn1cclxuXHJcbi5iYWNrLWJ1dHRvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDAuNXJlbTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6ICMyNTYzZWI7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubG9hZGluZy1zdGF0ZSxcclxuLmVycm9yLXN0YXRlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogM3JlbSAxcmVtO1xyXG59XHJcblxyXG4uY29tbWFuZGUtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU3ZWI7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDFyZW07XHJcbiAgfVxyXG59XHJcblxyXG4uaGVhZGVyLW1haW4ge1xyXG4gIGgxIHtcclxuICAgIG1hcmdpbjogMCAwIDAuNXJlbSAwO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgfVxyXG59XHJcblxyXG4uaGVhZGVyLW1ldGEge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGdhcDogMXJlbTtcclxuICBjb2xvcjogIzZiNzI4MDtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuXHJcbiAgaSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMzVyZW07XHJcbiAgfVxyXG59XHJcblxyXG4uc3RhdHVzLWJhZGdlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC41cmVtO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG5cclxuICAmLnN0YXR1cy1wZW5kaW5nIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmYzY2Q7XHJcbiAgICBjb2xvcjogIzg1NjQwNDtcclxuICB9XHJcblxyXG4gICYuc3RhdHVzLWNvbmZpcm1lZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZDFlY2YxO1xyXG4gICAgY29sb3I6ICMwYzU0NjA7XHJcbiAgfVxyXG5cclxuICAmLnN0YXR1cy1wcmVwYXJhdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTJlM2U1O1xyXG4gICAgY29sb3I6ICMzODNkNDE7XHJcbiAgfVxyXG5cclxuICAmLnN0YXR1cy1zaGlwcGVkIHtcclxuICAgIGJhY2tncm91bmQ6ICNjY2U1ZmY7XHJcbiAgICBjb2xvcjogIzAwNDA4NTtcclxuICB9XHJcblxyXG4gICYuc3RhdHVzLWRlbGl2ZXJlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZDRlZGRhO1xyXG4gICAgY29sb3I6ICMxNTU3MjQ7XHJcbiAgfVxyXG5cclxuICAmLnN0YXR1cy1jYW5jZWxsZWQge1xyXG4gICAgYmFja2dyb3VuZDogI2Y4ZDdkYTtcclxuICAgIGNvbG9yOiAjNzIxYzI0O1xyXG4gIH1cclxufVxyXG5cclxuLnNlY3Rpb24ge1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTdlYjtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDEuNXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcblxyXG4gIGgyIHtcclxuICAgIG1hcmdpbjogMCAwIDFyZW0gMDtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIH1cclxufVxyXG5cclxuLnByb2R1Y3RzLWxpc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbi5wcm9kdWN0LXJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMXJlbTtcclxuICBwYWRkaW5nOiAwLjc1cmVtO1xyXG4gIGJhY2tncm91bmQ6ICNmOWZhZmI7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4ucHJvZHVjdC10aHVtYiB7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLnByb2R1Y3QtaW5mbyB7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLnByb2R1Y3QtbmFtZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xyXG59XHJcblxyXG4ucHJvZHVjdC1tZXRhIHtcclxuICBjb2xvcjogIzZiNzI4MDtcclxuICBmb250LXNpemU6IDAuODVyZW07XHJcbn1cclxuXHJcbi5wcm9kdWN0LXByaWNlIHtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAjMTExODI3O1xyXG59XHJcblxyXG4uc3VtbWFyeS1yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAwO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmNWY5O1xyXG5cclxuICAmLnRvdGFsIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTVlN2ViO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5kZWxpdmVyeS1pbmZvIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdhcDogMC41cmVtO1xyXG4gIGNvbG9yOiAjMzc0MTUxO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAuY29tbWFuZGUtZGV0YWlsLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxLjI1cmVtO1xyXG4gIH1cclxuXHJcbiAgLnByb2R1Y3Qtcm93IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICB9XHJcblxyXG4gIC5wcm9kdWN0LXByaWNlIHtcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gIH1cclxufVxyXG4iLCIuY29tbWFuZGUtZGV0YWlsLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTEwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMnJlbTtcbiAgY29sb3I6ICMxZjI5Mzc7XG59XG5cbi5iYWNrLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICMyNTYzZWI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubG9hZGluZy1zdGF0ZSxcbi5lcnJvci1zdGF0ZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogM3JlbSAxcmVtO1xufVxuXG4uY29tbWFuZGUtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTdlYjtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZzogMS41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNvbW1hbmRlLWhlYWRlciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDFyZW07XG4gIH1cbn1cblxuLmhlYWRlci1tYWluIGgxIHtcbiAgbWFyZ2luOiAwIDAgMC41cmVtIDA7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uaGVhZGVyLW1ldGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMXJlbTtcbiAgY29sb3I6ICM2YjcyODA7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuLmhlYWRlci1tZXRhIGkge1xuICBtYXJnaW4tcmlnaHQ6IDAuMzVyZW07XG59XG5cbi5zdGF0dXMtYmFkZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLnN0YXR1cy1iYWRnZS5zdGF0dXMtcGVuZGluZyB7XG4gIGJhY2tncm91bmQ6ICNmZmYzY2Q7XG4gIGNvbG9yOiAjODU2NDA0O1xufVxuLnN0YXR1cy1iYWRnZS5zdGF0dXMtY29uZmlybWVkIHtcbiAgYmFja2dyb3VuZDogI2QxZWNmMTtcbiAgY29sb3I6ICMwYzU0NjA7XG59XG4uc3RhdHVzLWJhZGdlLnN0YXR1cy1wcmVwYXJhdGlvbiB7XG4gIGJhY2tncm91bmQ6ICNlMmUzZTU7XG4gIGNvbG9yOiAjMzgzZDQxO1xufVxuLnN0YXR1cy1iYWRnZS5zdGF0dXMtc2hpcHBlZCB7XG4gIGJhY2tncm91bmQ6ICNjY2U1ZmY7XG4gIGNvbG9yOiAjMDA0MDg1O1xufVxuLnN0YXR1cy1iYWRnZS5zdGF0dXMtZGVsaXZlcmVkIHtcbiAgYmFja2dyb3VuZDogI2Q0ZWRkYTtcbiAgY29sb3I6ICMxNTU3MjQ7XG59XG4uc3RhdHVzLWJhZGdlLnN0YXR1cy1jYW5jZWxsZWQge1xuICBiYWNrZ3JvdW5kOiAjZjhkN2RhO1xuICBjb2xvcjogIzcyMWMyNDtcbn1cblxuLnNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlN2ViO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAxLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cbi5zZWN0aW9uIGgyIHtcbiAgbWFyZ2luOiAwIDAgMXJlbSAwO1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLnByb2R1Y3RzLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDFyZW07XG59XG5cbi5wcm9kdWN0LXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbiAgcGFkZGluZzogMC43NXJlbTtcbiAgYmFja2dyb3VuZDogI2Y5ZmFmYjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4ucHJvZHVjdC10aHVtYiB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5wcm9kdWN0LWluZm8ge1xuICBmbGV4OiAxO1xufVxuXG4ucHJvZHVjdC1uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcbn1cblxuLnByb2R1Y3QtbWV0YSB7XG4gIGNvbG9yOiAjNmI3MjgwO1xuICBmb250LXNpemU6IDAuODVyZW07XG59XG5cbi5wcm9kdWN0LXByaWNlIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMxMTE4Mjc7XG59XG5cbi5zdW1tYXJ5LXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMC41cmVtIDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmNWY5O1xufVxuLnN1bW1hcnktcm93LnRvdGFsIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlNWU3ZWI7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuXG4uZGVsaXZlcnktaW5mbyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMC41cmVtO1xuICBjb2xvcjogIzM3NDE1MTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5jb21tYW5kZS1kZXRhaWwtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxLjI1cmVtO1xuICB9XG4gIC5wcm9kdWN0LXJvdyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgfVxuICAucHJvZHVjdC1wcmljZSB7XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_demo_pages_commande-detail_commande-detail_component_ts.js.map