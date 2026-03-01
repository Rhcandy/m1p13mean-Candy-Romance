"use strict";
(self["webpackChunkfree_version"] = self["webpackChunkfree_version"] || []).push([["src_app_demo_pages_checkout_checkout_component_ts"],{

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

/***/ 4879:
/*!***********************************************************!*\
  !*** ./src/app/demo/pages/checkout/checkout.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckoutComponent: () => (/* binding */ CheckoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _components_map_leaflet_map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/map/leaflet-map.component */ 389);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 3900);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 3305);
/* harmony import */ var _services_panier_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/panier.service */ 2619);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/auth.service */ 4796);
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../services/notification.service */ 7473);
/* harmony import */ var _services_livraison_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../services/livraison.service */ 7157);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../services/user.service */ 9885);














const _forTrack0 = ($index, $item) => $item.produit._id;
function CheckoutComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Chargement de votre commande...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function CheckoutComponent_Conditional_23_For_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 29)(3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", item_r2.produit.photo, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"])("alt", item_r2.produit.nom);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r2.produit.nom);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Quantite: ", item_r2.qtt);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.formatPrice(item_r2.sousTotal));
  }
}
function CheckoutComponent_Conditional_23_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 14)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Frais de livraison:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.formatPrice(ctx_r2.fraisLivraison));
  }
}
function CheckoutComponent_Conditional_23_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Livraison estimee: ", ctx_r2.formatDateLivraisonFr(ctx_r2.dateLivraisonEstimee), " (entre 06h00 et 18h00)");
  }
}
function CheckoutComponent_Conditional_23_Conditional_22_Conditional_17_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.getErrorMessage("nomEndroit"));
  }
}
function CheckoutComponent_Conditional_23_Conditional_22_Conditional_17_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 48)(1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" Position selectionnee: ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](3, 2, ctx_r2.selectedMapLocation.lat, "1.6-6"), ", ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](4, 5, ctx_r2.selectedMapLocation.lng, "1.6-6"), " ");
  }
}
function CheckoutComponent_Conditional_23_Conditional_22_Conditional_17_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.getErrorMessage("latitude"));
  }
}
function CheckoutComponent_Conditional_23_Conditional_22_Conditional_17_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.getErrorMessage("longitude"));
  }
}
function CheckoutComponent_Conditional_23_Conditional_22_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 34)(1, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Nom du lieu *");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](4, CheckoutComponent_Conditional_23_Conditional_22_Conditional_17_Conditional_4_Template, 2, 1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 34)(6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Position sur la carte");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "app-leaflet-map", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("mapClick", function CheckoutComponent_Conditional_23_Conditional_22_Conditional_17_Template_app_leaflet_map_mapClick_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.onMapClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](9, CheckoutComponent_Conditional_23_Conditional_22_Conditional_17_Conditional_9_Template, 5, 8, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 49)(11, "div", 34)(12, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Latitude *");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](15, CheckoutComponent_Conditional_23_Conditional_22_Conditional_17_Conditional_15_Template, 2, 1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 34)(17, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Longitude *");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](20, CheckoutComponent_Conditional_23_Conditional_22_Conditional_17_Conditional_20_Template, 2, 1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("is-invalid", ctx_r2.isFieldInvalid("nomEndroit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx_r2.isFieldInvalid("nomEndroit") ? 4 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("height", "260px")("zoom", ctx_r2.mapZoom)("initialPosition", ctx_r2.mapInitialPosition)("autoSetMarker", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx_r2.selectedMapLocation ? 9 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("is-invalid", ctx_r2.isFieldInvalid("latitude"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx_r2.isFieldInvalid("latitude") ? 15 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("is-invalid", ctx_r2.isFieldInvalid("longitude"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx_r2.isFieldInvalid("longitude") ? 20 : -1);
  }
}
function CheckoutComponent_Conditional_23_Conditional_22_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.getErrorMessage("telephone"));
  }
}
function CheckoutComponent_Conditional_23_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 19)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Adresse de livraison");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 34)(4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Mode de livraison");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 35)(7, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, " Retrait en boutique ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, " Livraison ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](17, CheckoutComponent_Conditional_23_Conditional_22_Conditional_17_Template, 21, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 34)(19, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Telephone *");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](22, CheckoutComponent_Conditional_23_Conditional_22_Conditional_22_Template, 2, 1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx_r2.modeLivraison === "livraison" ? 17 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("is-invalid", ctx_r2.isFieldInvalid("telephone"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx_r2.isFieldInvalid("telephone") ? 22 : -1);
  }
}
function CheckoutComponent_Conditional_23_Conditional_23_Conditional_14_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.getErrorMessage("carteNumero"));
  }
}
function CheckoutComponent_Conditional_23_Conditional_23_Conditional_14_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.getErrorMessage("carteNom"));
  }
}
function CheckoutComponent_Conditional_23_Conditional_23_Conditional_14_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.getErrorMessage("carteExpiry"));
  }
}
function CheckoutComponent_Conditional_23_Conditional_23_Conditional_14_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.getErrorMessage("carteCVV"));
  }
}
function CheckoutComponent_Conditional_23_Conditional_23_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 61)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Details de la carte");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 34)(4, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Numero de carte *");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](7, CheckoutComponent_Conditional_23_Conditional_23_Conditional_14_Conditional_7_Template, 2, 1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 34)(9, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Nom du titulaire *");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](12, CheckoutComponent_Conditional_23_Conditional_23_Conditional_14_Conditional_12_Template, 2, 1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 49)(14, "div", 34)(15, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Date d'expiration *");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](18, CheckoutComponent_Conditional_23_Conditional_23_Conditional_14_Conditional_18_Template, 2, 1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 34)(20, "label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "CVV *");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](23, CheckoutComponent_Conditional_23_Conditional_23_Conditional_14_Conditional_23_Template, 2, 1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("is-invalid", ctx_r2.isFieldInvalid("carteNumero"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx_r2.isFieldInvalid("carteNumero") ? 7 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("is-invalid", ctx_r2.isFieldInvalid("carteNom"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx_r2.isFieldInvalid("carteNom") ? 12 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("is-invalid", ctx_r2.isFieldInvalid("carteExpiry"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx_r2.isFieldInvalid("carteExpiry") ? 18 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("is-invalid", ctx_r2.isFieldInvalid("carteCVV"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx_r2.isFieldInvalid("carteCVV") ? 23 : -1);
  }
}
function CheckoutComponent_Conditional_23_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 19)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Methode de paiement");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 35)(4, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "label", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, " Carte bancaire ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, " Especes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](14, CheckoutComponent_Conditional_23_Conditional_23_Conditional_14_Template, 24, 12, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](((tmp_2_0 = ctx_r2.checkoutForm.get("methodePaiement")) == null ? null : tmp_2_0.value) === "carte" ? 14 : -1);
  }
}
function CheckoutComponent_Conditional_23_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 20)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Confirmation de la commande");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Votre commande est prete a etre validee.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Numero de commande: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Montant total: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.panier.numeroCommande);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.formatPrice(ctx_r2.getTotalWithFrais()));
  }
}
function CheckoutComponent_Conditional_23_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CheckoutComponent_Conditional_23_Conditional_26_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.previousStep());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Precedent ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CheckoutComponent_Conditional_23_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CheckoutComponent_Conditional_23_Conditional_27_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.nextStep());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Suivant ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function CheckoutComponent_Conditional_23_Conditional_28_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Traitement en cours... ");
  }
}
function CheckoutComponent_Conditional_23_Conditional_28_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Confirmer et payer ");
  }
}
function CheckoutComponent_Conditional_23_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CheckoutComponent_Conditional_23_Conditional_28_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.processPayment());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](1, CheckoutComponent_Conditional_23_Conditional_28_Conditional_1_Template, 2, 0)(2, CheckoutComponent_Conditional_23_Conditional_28_Conditional_2_Template, 2, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r2.processingPayment);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx_r2.processingPayment ? 1 : 2);
  }
}
function CheckoutComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 8)(1, "div", 10)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Recapitulatif de la commande");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterCreate"](5, CheckoutComponent_Conditional_23_For_6_Template, 9, 5, "div", 12, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 13)(8, "div", 14)(9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Sous-total:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](13, CheckoutComponent_Conditional_23_Conditional_13_Template, 5, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 15)(15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Total:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](19, CheckoutComponent_Conditional_23_Conditional_19_Template, 4, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 17)(21, "form", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](22, CheckoutComponent_Conditional_23_Conditional_22_Template, 23, 4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](23, CheckoutComponent_Conditional_23_Conditional_23_Template, 15, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](24, CheckoutComponent_Conditional_23_Conditional_24_Template, 15, 2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](26, CheckoutComponent_Conditional_23_Conditional_26_Template, 3, 0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](27, CheckoutComponent_Conditional_23_Conditional_27_Template, 3, 0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](28, CheckoutComponent_Conditional_23_Conditional_28_Template, 3, 2, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 25)(30, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CheckoutComponent_Conditional_23_Template_button_click_30_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.cancelOrder());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](31, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, " Annuler la commande ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeater"](ctx_r2.panier.produitsachete);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.formatPrice(ctx_r2.panier.sousTotal));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx_r2.shouldShowFraisLivraison() ? 13 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.formatPrice(ctx_r2.getTotalWithFrais()));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx_r2.shouldShowFraisLivraison() && ctx_r2.dateLivraisonEstimee ? 19 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r2.checkoutForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx_r2.currentStep === 1 ? 22 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx_r2.currentStep === 2 ? 23 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx_r2.currentStep === 3 ? 24 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx_r2.currentStep > 1 ? 26 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx_r2.currentStep < 3 ? 27 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx_r2.currentStep === 3 ? 28 : -1);
  }
}
class CheckoutComponent {
  constructor(router, route, fb, panierService, authService, notificationService, livraisonService, userService, cdr) {
    this.router = router;
    this.route = route;
    this.fb = fb;
    this.panierService = panierService;
    this.authService = authService;
    this.notificationService = notificationService;
    this.livraisonService = livraisonService;
    this.userService = userService;
    this.cdr = cdr;
    this.deliveryStartHour = 6;
    this.deliveryEndHour = 18;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.panier = null;
    this.loading = false;
    this.processingPayment = false;
    this.currentStep = 1; // 1: Adresse, 2: Paiement, 3: Confirmation
    this.fraisLivraison = 0;
    this.dateLivraisonEstimee = null;
    this.centreFraisLivraison = null;
    this.modeLivraison = 'retrait';
    this.currentUser = null;
    this.userTelephone = '';
    this.mapZoom = 16;
    this.defaultMapCenter = [-18.952783162227885, 47.528457818843464];
    this.selectedMapLocation = null;
    this.mapInitialPosition = this.defaultMapCenter;
    this.targetCommandeId = null;
    this.checkoutForm = this.fb.group({
      modeLivraison: ['retrait', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      nomEndroit: [''],
      latitude: [null],
      longitude: [null],
      telephone: [''],
      methodePaiement: ['carte', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      carteNumero: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.pattern('^[0-9]{16}$')]],
      carteNom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      carteExpiry: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.pattern('^(0[1-9]|1[0-2])\/[0-9]{2}$')]],
      carteCVV: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.pattern('^[0-9]{3,4}$')]]
    });
  }
  ngOnInit() {
    this.authService.ensureUserExists();
    this.targetCommandeId = this.route.snapshot.queryParamMap.get('commandeId');
    this.loadUser();
    this.refreshUserProfile();
    this.loadPanier();
    this.loadUserAddress();
    this.loadCentreFraisLivraison();
    this.onModeLivraisonChange();
    this.watchFormChanges();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadUser() {
    this.currentUser = this.authService.getUser();
    this.userTelephone = this.currentUser?.numtel?.[0] || '';
  }
  refreshUserProfile() {
    const userId = this.authService.getUserId();
    if (!userId) return;
    this.userService.getUserById(userId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe({
      next: response => {
        if (!response?.data) return;
        this.authService.updateStoredUser(response.data);
        this.loadUser();
        this.loadUserAddress();
        this.cdr.detectChanges();
      },
      error: error => {
        console.error('Erreur chargement utilisateur:', error);
      }
    });
  }
  loadCentreFraisLivraison() {
    this.livraisonService.getCentresDistribution().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe({
      next: centres => {
        const premierCentre = centres && centres.length > 0 ? centres[0] : null;
        if (premierCentre?.fraisLivraison) {
          this.centreFraisLivraison = premierCentre.fraisLivraison;
        }
      },
      error: error => {
        console.error('Erreur chargement centres:', error);
      }
    });
  }
  loadPanier() {
    this.loading = true;
    const source$ = this.targetCommandeId ? this.panierService.getCommandeById(this.targetCommandeId) : this.panierService.getCommande();
    source$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe({
      next: response => {
        this.panier = response.data;
        if (!this.panier || this.panier.produitsachete.length === 0 && this.panier.statut !== 'en_attente') {
          this.notificationService.warning('Votre panier est vide');
          this.loading = false;
          this.cdr.detectChanges();
          return;
        }
        if (this.panier.statut !== 'en_attente') {
          this.notificationService.warning('Cette commande n\'est plus en attente de paiement');
          this.router.navigate(['/commandes']);
          this.loading = false;
          this.cdr.detectChanges();
          return;
        }
        this.applyCommandeAddress();
        this.calculerFraisLivraison();
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: error => {
        console.error('Erreur chargement panier:', error);
        this.notificationService.error('Erreur lors du chargement du panier');
        this.router.navigate(['/panier']);
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }
  applyCommandeAddress() {
    const adresse = this.panier?.adresseLivraison;
    if (!adresse) return;
    const latitude = adresse.latitude ?? null;
    const longitude = adresse.longitude ?? null;
    const nomEndroit = adresse.nomEndroit || '';
    const telephone = adresse.telephone || this.userTelephone || '';
    const hasDeliveryData = !!nomEndroit || latitude != null || longitude != null;
    if (hasDeliveryData) {
      this.checkoutForm.patchValue({
        modeLivraison: 'livraison',
        nomEndroit,
        latitude,
        longitude,
        telephone
      });
      this.onModeLivraisonChange();
    }
    if (latitude != null && longitude != null) {
      this.mapInitialPosition = [Number(latitude), Number(longitude)];
      this.selectedMapLocation = {
        lat: Number(latitude),
        lng: Number(longitude)
      };
    }
  }
  loadUserAddress() {
    if (this.targetCommandeId && this.panier?.adresseLivraison) {
      return;
    }
    const user = this.authService.currentUser;
    if (user && 'adresse' in user && user.adresse) {
      const adresse = user.adresse;
      const latitude = adresse.latitude ?? null;
      const longitude = adresse.longitude ?? null;
      this.checkoutForm.patchValue({
        nomEndroit: adresse.nomEndroit || '',
        latitude,
        longitude,
        telephone: this.userTelephone || ''
      });
      if (latitude != null && longitude != null) {
        this.mapInitialPosition = [Number(latitude), Number(longitude)];
        this.selectedMapLocation = {
          lat: Number(latitude),
          lng: Number(longitude)
        };
      }
    } else {
      this.checkoutForm.patchValue({
        telephone: this.userTelephone
      });
    }
  }
  validerPanier() {
    if (!this.panier) return;
    this.panierService.validerPanier().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe({
      next: response => {
        this.panier = response.data;
        this.calculerFraisLivraison();
      },
      error: error => {
        console.error('Erreur validation panier:', error);
        this.notificationService.error('Erreur lors de la validation du panier');
      }
    });
  }
  calculerFraisLivraison() {
    if (!this.panier) return;
    if (this.modeLivraison !== 'livraison') {
      this.fraisLivraison = 0;
      this.dateLivraisonEstimee = null;
      this.updateTotal();
      return;
    }
    if (!this.hasCoordonneesLivraison()) {
      this.fraisLivraison = 0;
      this.dateLivraisonEstimee = null;
      this.updateTotal();
      return;
    }
    const adresse = {
      nomEndroit: this.checkoutForm.get('nomEndroit')?.value,
      latitude: Number(this.checkoutForm.get('latitude')?.value),
      longitude: Number(this.checkoutForm.get('longitude')?.value),
      telephone: this.checkoutForm.get('telephone')?.value
    };
    this.livraisonService.calculerFraisLivraison(adresse).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe({
      next: response => {
        this.fraisLivraison = response.fraisLivraison;
        const parsedDate = response.dateLivraison ? new Date(response.dateLivraison) : null;
        this.dateLivraisonEstimee = parsedDate && !Number.isNaN(parsedDate.getTime()) ? parsedDate : this.calculerDateLivraisonEstimee();
        if (response.centreDistribution?.fraisLivraison) {
          this.centreFraisLivraison = response.centreDistribution.fraisLivraison;
        }
        this.updateTotal();
      },
      error: error => {
        console.error('Erreur calcul frais livraison:', error);
        this.calculerFraisLivraisonSimulation();
        this.updateTotal();
      }
    });
  }
  calculerFraisLivraisonSimulation() {
    const frais = this.centreFraisLivraison || {
      baseFrais: 3000,
      coutParKm: 2,
      kmGratuits: 3
    };
    const {
      baseFrais,
      coutParKm,
      kmGratuits
    } = frais;
    const distance = 5;
    if (distance <= kmGratuits) {
      this.fraisLivraison = 0;
    } else if (coutParKm > 0) {
      this.fraisLivraison = Math.round(distance * baseFrais / coutParKm);
    } else {
      this.fraisLivraison = Math.round(baseFrais);
    }
    this.dateLivraisonEstimee = this.calculerDateLivraisonEstimee();
  }
  calculerDateLivraisonEstimee(baseDate = new Date()) {
    const date = new Date(baseDate);
    date.setDate(date.getDate() + 1);
    const heure = date.getHours();
    if (heure < this.deliveryStartHour) {
      date.setHours(this.deliveryStartHour, 0, 0, 0);
      return date;
    }
    if (heure >= this.deliveryEndHour) {
      date.setDate(date.getDate() + 1);
      date.setHours(this.deliveryStartHour, 0, 0, 0);
      return date;
    }
    return date;
  }
  formatDateLivraisonFr(date) {
    if (!date) return '';
    return date.toLocaleDateString('fr-FR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
  updateTotal() {
    if (!this.panier) return;
    this.panier.fraisLivraison = this.fraisLivraison;
    this.panier.total = this.panier.sousTotal + this.fraisLivraison;
  }
  setDefaultMapLocationIfEmpty() {
    if (this.hasCoordonneesLivraison()) return;
    const [lat, lng] = this.defaultMapCenter;
    this.mapInitialPosition = [lat, lng];
    this.selectedMapLocation = {
      lat,
      lng
    };
    this.checkoutForm.patchValue({
      latitude: lat,
      longitude: lng
    }, {
      emitEvent: false
    });
  }
  onModeLivraisonChange() {
    this.modeLivraison = this.checkoutForm.get('modeLivraison')?.value || 'retrait';
    const nomEndroitControl = this.checkoutForm.get('nomEndroit');
    const latitudeControl = this.checkoutForm.get('latitude');
    const longitudeControl = this.checkoutForm.get('longitude');
    const telephoneControl = this.checkoutForm.get('telephone');
    const telephoneValidators = [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.pattern('^[0-9]{10,13}$')];
    if (this.modeLivraison === 'livraison') {
      nomEndroitControl?.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]);
      latitudeControl?.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]);
      longitudeControl?.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]);
      telephoneControl?.setValidators(telephoneValidators);
      this.setDefaultMapLocationIfEmpty();
    } else {
      nomEndroitControl?.clearValidators();
      latitudeControl?.clearValidators();
      longitudeControl?.clearValidators();
      telephoneControl?.setValidators(telephoneValidators);
    }
    nomEndroitControl?.updateValueAndValidity();
    latitudeControl?.updateValueAndValidity();
    longitudeControl?.updateValueAndValidity();
    telephoneControl?.updateValueAndValidity();
    this.calculerFraisLivraison();
  }
  onMapClick(coords) {
    this.selectedMapLocation = coords;
    this.checkoutForm.patchValue({
      latitude: coords.lat,
      longitude: coords.lng
    });
    this.calculerFraisLivraison();
  }
  hasCoordonneesLivraison() {
    const latitudeRaw = this.checkoutForm.get('latitude')?.value;
    const longitudeRaw = this.checkoutForm.get('longitude')?.value;
    if (latitudeRaw === null || latitudeRaw === undefined || latitudeRaw === '') return false;
    if (longitudeRaw === null || longitudeRaw === undefined || longitudeRaw === '') return false;
    const latitude = Number(latitudeRaw);
    const longitude = Number(longitudeRaw);
    return Number.isFinite(latitude) && Number.isFinite(longitude);
  }
  shouldShowFraisLivraison() {
    return this.modeLivraison === 'livraison' && this.hasCoordonneesLivraison();
  }
  nextStep() {
    if (this.currentStep === 1) {
      if (this.checkAddressForm()) {
        this.updateCommandeAdresse();
        this.calculerFraisLivraison();
        this.currentStep = 2;
      }
    } else if (this.currentStep === 2) {
      if (this.checkPaymentForm()) {
        this.processPayment();
      }
    }
  }
  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }
  checkAddressForm() {
    const telephoneControl = this.checkoutForm.get('telephone');
    const hasTelephoneError = telephoneControl?.invalid;
    if (this.modeLivraison === 'retrait') {
      if (hasTelephoneError) {
        telephoneControl?.markAsTouched();
        this.notificationService.warning('Veuillez renseigner votre numero de telephone');
        return false;
      }
      return true;
    }
    const adresseFields = ['nomEndroit', 'latitude', 'longitude', 'telephone'];
    let isValid = true;
    for (const field of adresseFields) {
      const control = this.checkoutForm.get(field);
      if (control?.invalid) {
        control.markAsTouched();
        isValid = false;
      }
    }
    if (!isValid) {
      this.notificationService.warning('Veuillez completer correctement les coordonnees de livraison');
    }
    return isValid;
  }
  checkPaymentForm() {
    const methode = this.checkoutForm.get('methodePaiement')?.value;
    if (methode === 'carte') {
      const carteFields = ['carteNumero', 'carteNom', 'carteExpiry', 'carteCVV'];
      let isValid = true;
      for (const field of carteFields) {
        const control = this.checkoutForm.get(field);
        if (control?.invalid) {
          control.markAsTouched();
          isValid = false;
        }
      }
      if (!isValid) {
        this.notificationService.warning('Veuillez completer correctement les informations de paiement');
        return false;
      }
    }
    return true;
  }
  updateCommandeAdresse() {
    if (!this.panier) return;
    let adresseLivraison = null;
    if (this.modeLivraison === 'livraison') {
      adresseLivraison = {
        nomEndroit: this.checkoutForm.get('nomEndroit')?.value,
        latitude: Number(this.checkoutForm.get('latitude')?.value),
        longitude: Number(this.checkoutForm.get('longitude')?.value),
        telephone: this.checkoutForm.get('telephone')?.value
      };
    }
    const updateRequest$ = this.targetCommandeId ? this.panierService.mettreAJourCommandeById(this.targetCommandeId, {
      adresseLivraison,
      methodePaiement: this.checkoutForm.get('methodePaiement')?.value
    }) : this.panierService.mettreAJourCommande({
      adresseLivraison,
      methodePaiement: this.checkoutForm.get('methodePaiement')?.value
    });
    updateRequest$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe({
      next: response => {
        this.panier = response.data;
      },
      error: error => {
        console.error('Erreur mise a jour commande:', error);
        this.notificationService.error('Erreur lors de la mise a jour de la commande');
      }
    });
  }
  processPayment() {
    if (!this.panier) return;
    this.processingPayment = true;
    const methode = this.checkoutForm.get('methodePaiement')?.value;
    const paiementDetails = {
      methode
    };
    if (methode === 'carte') {
      paiementDetails.carte = {
        numero: this.checkoutForm.get('carteNumero')?.value,
        nom: this.checkoutForm.get('carteNom')?.value,
        expiry: this.checkoutForm.get('carteExpiry')?.value,
        cvv: this.checkoutForm.get('carteCVV')?.value
      };
    }
    const paymentRequest$ = this.targetCommandeId ? this.panierService.payerCommandeById(this.targetCommandeId, paiementDetails) : this.panierService.payerCommande(paiementDetails);
    paymentRequest$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe({
      next: response => {
        this.processingPayment = false;
        this.notificationService.success('Paiement effectue avec succes !');
        this.router.navigate(['/confirmation-commande'], {
          state: {
            commande: response.data.commande,
            facture: response.data.facture
          }
        });
      },
      error: error => {
        this.processingPayment = false;
        console.error('Erreur paiement:', error);
        this.notificationService.error('Erreur lors du paiement. Veuillez reessayer.');
      }
    });
  }
  cancelOrder() {
    if (confirm('Etes-vous sur de vouloir annuler cette commande ?')) {
      if (this.panier) {
        this.panierService.annulerCommande('Annulation par le client').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe({
          next: () => {
            this.notificationService.success('Commande annulee avec succes');
            this.router.navigate(['/panier']);
          },
          error: error => {
            console.error('Erreur annulation:', error);
            this.notificationService.error('Erreur lors de l\'annulation');
          }
        });
      }
    }
  }
  formatPrice(price) {
    return this.panierService.formatMontant(price);
  }
  getTotalWithFrais() {
    if (!this.panier) return 0;
    return this.panier.sousTotal + this.fraisLivraison;
  }
  isFieldInvalid(fieldName) {
    const field = this.checkoutForm.get(fieldName);
    return field ? field.invalid && (field.touched || field.dirty) : false;
  }
  getErrorMessage(fieldName) {
    const field = this.checkoutForm.get(fieldName);
    if (!field || !field.errors) return '';
    const errors = field.errors;
    if (errors['required']) return 'Ce champ est requis';
    if (errors['pattern']) {
      if (fieldName === 'telephone') return 'Numero de telephone invalide (10 a 13 chiffres)';
      if (fieldName === 'carteNumero') return 'Numero de carte invalide (16 chiffres)';
      if (fieldName === 'carteExpiry') return 'Date d\'expiration invalide (MM/AA)';
      if (fieldName === 'carteCVV') return 'CVV invalide (3-4 chiffres)';
    }
    return 'Champ invalide';
  }
  watchFormChanges() {
    const modeControl = this.checkoutForm.get('modeLivraison');
    modeControl?.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe(() => {
      this.onModeLivraisonChange();
    });
    const latitudeControl = this.checkoutForm.get('latitude');
    const longitudeControl = this.checkoutForm.get('longitude');
    latitudeControl?.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe(() => {
      if (this.modeLivraison === 'livraison') {
        this.calculerFraisLivraison();
      }
    });
    longitudeControl?.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe(() => {
      if (this.modeLivraison === 'livraison') {
        this.calculerFraisLivraison();
      }
    });
  }
  static {
    this.ɵfac = function CheckoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CheckoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_panier_service__WEBPACK_IMPORTED_MODULE_9__.PanierService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_10__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_11__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_livraison_service__WEBPACK_IMPORTED_MODULE_12__.LivraisonService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_13__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: CheckoutComponent,
      selectors: [["app-checkout"]],
      decls: 24,
      vars: 15,
      consts: [[1, "checkout-container"], [1, "checkout-header"], [1, "checkout-progress"], [1, "progress-step"], [1, "step-number"], [1, "step-label"], [1, "progress-line"], [1, "loading-state"], [1, "checkout-content"], [1, "spinner-border", "text-primary"], [1, "order-summary"], [1, "summary-items"], [1, "summary-item"], [1, "summary-totals"], [1, "total-line"], [1, "total-line", "total"], [1, "delivery-info"], [1, "checkout-form"], [3, "formGroup"], [1, "form-section"], [1, "confirmation-section"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-outline-secondary"], ["type", "button", 1, "btn", "btn-primary"], ["type", "button", 1, "btn", "btn-success", 3, "disabled"], [1, "cancel-section"], ["type", "button", 1, "btn", "btn-outline-danger", "btn-sm", 3, "click"], [1, "ti", "ti-x"], [1, "item-thumb", 3, "src", "alt"], [1, "item-details"], [1, "item-name"], [1, "item-quantity"], [1, "item-price"], [1, "ti", "ti-truck-delivery"], [1, "form-group"], [1, "payment-methods"], [1, "payment-method"], ["type", "radio", "id", "retrait", "value", "retrait", "formControlName", "modeLivraison"], ["for", "retrait", 1, "payment-label"], [1, "ti", "ti-package"], ["type", "radio", "id", "livraison", "value", "livraison", "formControlName", "modeLivraison"], ["for", "livraison", 1, "payment-label"], ["for", "telephone"], ["type", "tel", "id", "telephone", "formControlName", "telephone", "placeholder", "0612345678", "minlength", "10", "maxlength", "13", 1, "form-control"], [1, "invalid-feedback"], ["for", "nomEndroit"], ["type", "text", "id", "nomEndroit", "formControlName", "nomEndroit", "placeholder", "Ex: Maison, bureau, hotel", 1, "form-control"], [3, "mapClick", "height", "zoom", "initialPosition", "autoSetMarker"], [1, "mt-2"], [1, "form-row"], ["for", "latitude"], ["type", "number", "step", "any", "id", "latitude", "formControlName", "latitude", "placeholder", "Latitude", 1, "form-control"], ["for", "longitude"], ["type", "number", "step", "any", "id", "longitude", "formControlName", "longitude", "placeholder", "Longitude", 1, "form-control"], [1, "small", "text-muted"], ["type", "radio", "id", "carte", "value", "carte", "formControlName", "methodePaiement"], ["for", "carte", 1, "payment-label"], [1, "ti", "ti-credit-card"], ["type", "radio", "id", "espece", "value", "espece", "formControlName", "methodePaiement"], ["for", "espece", 1, "payment-label"], [1, "ti", "ti-cash"], [1, "card-details"], ["for", "carteNumero"], ["type", "text", "id", "carteNumero", "formControlName", "carteNumero", "placeholder", "1234 5678 9012 3456", "maxlength", "16", 1, "form-control"], ["for", "carteNom"], ["type", "text", "id", "carteNom", "formControlName", "carteNom", "placeholder", "Jean Dupont", 1, "form-control"], ["for", "carteExpiry"], ["type", "text", "id", "carteExpiry", "formControlName", "carteExpiry", "placeholder", "MM/AA", "maxlength", "5", 1, "form-control"], ["for", "carteCVV"], ["type", "text", "id", "carteCVV", "formControlName", "carteCVV", "placeholder", "123", "maxlength", "4", 1, "form-control"], [1, "confirmation-message"], [1, "ti", "ti-check-circle", "text-success"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "ti", "ti-arrow-left"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "ti", "ti-arrow-right"], ["type", "button", 1, "btn", "btn-success", 3, "click", "disabled"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "ti", "ti-check", "me-2"]],
      template: function CheckoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Finaliser ma commande");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 2)(5, "div", 3)(6, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "1");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Adresse");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 3)(12, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "2");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Paiement");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 3)(18, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "3");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Confirmation");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](22, CheckoutComponent_Conditional_22_Template, 4, 0, "div", 7)(23, CheckoutComponent_Conditional_23_Template, 33, 11, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx.currentStep >= 1)("completed", ctx.currentStep > 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("completed", ctx.currentStep > 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx.currentStep >= 2)("completed", ctx.currentStep > 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("completed", ctx.currentStep > 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx.currentStep >= 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx.loading ? 22 : ctx.panier ? 23 : -1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _components_map_leaflet_map_component__WEBPACK_IMPORTED_MODULE_2__.LeafletMapComponent, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DecimalPipe],
      styles: [".checkout-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 2rem;\n}\n\n.checkout-header[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.checkout-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2rem;\n  color: #333;\n  font-weight: 600;\n}\n\n.checkout-progress[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 3rem;\n}\n.checkout-progress[_ngcontent-%COMP%]   .progress-step[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n}\n.checkout-progress[_ngcontent-%COMP%]   .progress-step[_ngcontent-%COMP%]   .step-number[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: #e9ecef;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  color: #6c757d;\n  margin-bottom: 0.5rem;\n  transition: all 0.3s ease;\n}\n.checkout-progress[_ngcontent-%COMP%]   .progress-step[_ngcontent-%COMP%]   .step-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6c757d;\n  transition: all 0.3s ease;\n}\n.checkout-progress[_ngcontent-%COMP%]   .progress-step.active[_ngcontent-%COMP%]   .step-number[_ngcontent-%COMP%] {\n  background: #007bff;\n  color: white;\n}\n.checkout-progress[_ngcontent-%COMP%]   .progress-step.active[_ngcontent-%COMP%]   .step-label[_ngcontent-%COMP%] {\n  color: #007bff;\n  font-weight: 600;\n}\n.checkout-progress[_ngcontent-%COMP%]   .progress-step.completed[_ngcontent-%COMP%]   .step-number[_ngcontent-%COMP%] {\n  background: #28a745;\n  color: white;\n}\n.checkout-progress[_ngcontent-%COMP%]   .progress-step.completed[_ngcontent-%COMP%]   .step-label[_ngcontent-%COMP%] {\n  color: #28a745;\n}\n.checkout-progress[_ngcontent-%COMP%]   .progress-line[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 2px;\n  background: #e9ecef;\n  margin: 0 1rem;\n  margin-bottom: 2rem;\n}\n.checkout-progress[_ngcontent-%COMP%]   .progress-line.completed[_ngcontent-%COMP%] {\n  background: #28a745;\n}\n\n.loading-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 4rem 2rem;\n}\n.loading-state[_ngcontent-%COMP%]   .spinner-border[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  margin-bottom: 1rem;\n}\n\n.checkout-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  gap: 2rem;\n}\n@media (max-width: 768px) {\n  .checkout-content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n.order-summary[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  padding: 1.5rem;\n  border-radius: 8px;\n  height: fit-content;\n}\n.order-summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  color: #333;\n  font-weight: 600;\n}\n\n.summary-items[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n\n.summary-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0.75rem 0;\n  border-bottom: 1px solid #dee2e6;\n}\n.summary-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.item-thumb[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  object-fit: cover;\n  border-radius: 4px;\n  margin-right: 1rem;\n}\n\n.item-details[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.item-details[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  margin-bottom: 0.25rem;\n}\n.item-details[_ngcontent-%COMP%]   .item-quantity[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6c757d;\n}\n\n.item-price[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #333;\n}\n\n.summary-totals[_ngcontent-%COMP%] {\n  border-top: 2px solid #dee2e6;\n  padding-top: 1rem;\n  margin-top: 1rem;\n}\n\n.total-line[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 0.5rem;\n}\n.total-line.total[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 1.125rem;\n  color: #333;\n  border-top: 1px solid #dee2e6;\n  padding-top: 0.5rem;\n  margin-top: 0.5rem;\n}\n\n.delivery-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: #e7f3ff;\n  padding: 0.75rem;\n  border-radius: 4px;\n  margin-top: 1rem;\n  color: #0066cc;\n}\n.delivery-info[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n\n.checkout-form[_ngcontent-%COMP%] {\n  background: white;\n  padding: 1.5rem;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n.form-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.form-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  color: #333;\n  font-weight: 600;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.5rem;\n  font-weight: 500;\n  color: #333;\n}\n\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n@media (max-width: 576px) {\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 1rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: #007bff;\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.form-control.is-invalid[_ngcontent-%COMP%]:focus {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n\n.invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 0.875rem;\n  color: #dc3545;\n}\n\n.payment-methods[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 1rem;\n  margin-bottom: 2rem;\n}\n\n.payment-method[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] {\n  display: none;\n}\n.payment-method[_ngcontent-%COMP%]   .payment-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 1rem;\n  border: 2px solid #e9ecef;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.payment-method[_ngcontent-%COMP%]   .payment-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n  font-size: 1.25rem;\n}\n.payment-method[_ngcontent-%COMP%]   .payment-label[_ngcontent-%COMP%]:hover {\n  border-color: #007bff;\n  background: #f8f9ff;\n}\n.payment-method[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked    + .payment-label[_ngcontent-%COMP%] {\n  border-color: #007bff;\n  background: #f8f9ff;\n  color: #007bff;\n  font-weight: 500;\n}\n\n.card-details[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  padding: 1.5rem;\n  border-radius: 8px;\n  margin-top: 1rem;\n}\n.card-details[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  color: #333;\n}\n\n.confirmation-section[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem;\n}\n.confirmation-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  color: #333;\n}\n\n.confirmation-message[_ngcontent-%COMP%] {\n  background: #d4edda;\n  border: 1px solid #c3e6cb;\n  border-radius: 8px;\n  padding: 1.5rem;\n  color: #155724;\n}\n.confirmation-message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-bottom: 1rem;\n  display: block;\n}\n.confirmation-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.confirmation-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 2rem;\n  padding-top: 2rem;\n  border-top: 1px solid #dee2e6;\n}\n@media (max-width: 576px) {\n  .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .form-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n.cancel-section[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 1rem;\n}\n.cancel-section[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  font-size: 0.875rem;\n}\n\n.btn[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 4px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  text-decoration: none;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  background: #007bff;\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #0056b3;\n}\n\n.btn-success[_ngcontent-%COMP%] {\n  background: #28a745;\n  color: white;\n}\n.btn-success[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1e7e34;\n}\n\n.btn-outline-secondary[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #6c757d;\n  border: 1px solid #6c757d;\n}\n.btn-outline-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #6c757d;\n  color: white;\n}\n\n.btn-outline-danger[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #dc3545;\n  border: 1px solid #dc3545;\n}\n.btn-outline-danger[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #dc3545;\n  color: white;\n}\n\n.spinner-border[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 1rem;\n  height: 1rem;\n  border: 0.125em solid currentColor;\n  border-right-color: transparent;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spinner-border 0.75s linear infinite;\n}\n.spinner-border.sm[_ngcontent-%COMP%] {\n  width: 0.75rem;\n  height: 0.75rem;\n}\n\n@keyframes _ngcontent-%COMP%_spinner-border {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVtby9wYWdlcy9jaGVja291dC9jaGVja291dC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uL1dlYiUyMGF2YW5jZS9tMXAxM21lYW4tQ2FuZHktUm9tYW5jZS9mcm9udGVuZC9zcmMvYXBwL2RlbW8vcGFnZXMvY2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGO0FEQ0U7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDQ0o7O0FER0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDQUY7QURFRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNBSjtBREVJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FDQU47QURHSTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FDRE47QURLTTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQ0hSO0FES007RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNIUjtBRFFNO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FDTlI7QURRTTtFQUNFLGNBQUE7QUNOUjtBRFdFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ1RKO0FEV0k7RUFDRSxtQkFBQTtBQ1ROOztBRGNBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQ1hGO0FEYUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDWEo7O0FEZUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0FDWkY7QURjRTtFQUxGO0lBTUksMEJBQUE7RUNYRjtBQUNGOztBRGNBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ1hGO0FEYUU7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ1hKOztBRGVBO0VBQ0UscUJBQUE7QUNaRjs7QURlQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7QUNaRjtBRGNFO0VBQ0UsbUJBQUE7QUNaSjs7QURnQkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ2JGOztBRGdCQTtFQUNFLE9BQUE7QUNiRjtBRGVFO0VBQ0UsZ0JBQUE7RUFDQSxzQkFBQTtBQ2JKO0FEZ0JFO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FDZEo7O0FEa0JBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FDZkY7O0FEa0JBO0VBQ0UsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDZkY7O0FEa0JBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7QUNmRjtBRGlCRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDZko7O0FEbUJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDaEJGO0FEa0JFO0VBQ0Usb0JBQUE7QUNoQko7O0FEb0JBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtBQ2pCRjs7QURvQkE7RUFDRSxtQkFBQTtBQ2pCRjtBRG1CRTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDakJKOztBRHFCQTtFQUNFLHFCQUFBO0FDbEJGO0FEb0JFO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDbEJKOztBRHNCQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7QUNuQkY7QURxQkU7RUFMRjtJQU1JLDBCQUFBO0VDbEJGO0FBQ0Y7O0FEcUJBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx3RUFBQTtBQ2xCRjtBRG9CRTtFQUNFLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGdEQUFBO0FDbEJKO0FEcUJFO0VBQ0UscUJBQUE7QUNuQko7QURxQkk7RUFDRSxxQkFBQTtFQUNBLGdEQUFBO0FDbkJOOztBRHdCQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNyQkY7O0FEd0JBO0VBQ0UsYUFBQTtFQUNBLDJEQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FDckJGOztBRHlCRTtFQUNFLGFBQUE7QUN0Qko7QUR5QkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ3ZCSjtBRHlCSTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7QUN2Qk47QUQwQkk7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0FDeEJOO0FENEJFO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQzFCSjs7QUQ4QkE7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDM0JGO0FENkJFO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0FDM0JKOztBRCtCQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtBQzVCRjtBRDhCRTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtBQzVCSjs7QURnQ0E7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQzdCRjtBRCtCRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUM3Qko7QURnQ0U7RUFDRSxxQkFBQTtBQzlCSjtBRGdDSTtFQUNFLGdCQUFBO0FDOUJOOztBRG1DQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0FDaENGO0FEa0NFO0VBUkY7SUFTSSxzQkFBQTtJQUNBLFNBQUE7RUMvQkY7RURpQ0U7SUFDRSxXQUFBO0VDL0JKO0FBQ0Y7O0FEbUNBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQ2hDRjtBRGtDRTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7QUNoQ0o7O0FEb0NBO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQ2pDRjtBRG1DRTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQ2pDSjs7QURxQ0E7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUNsQ0Y7QURvQ0U7RUFDRSxtQkFBQTtBQ2xDSjs7QURzQ0E7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUNuQ0Y7QURxQ0U7RUFDRSxtQkFBQTtBQ25DSjs7QUR1Q0E7RUFDRSx1QkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQ3BDRjtBRHNDRTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQ3BDSjs7QUR3Q0E7RUFDRSx1QkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQ3JDRjtBRHVDRTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQ3JDSjs7QUR5Q0E7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0NBQUE7QUN0Q0Y7QUR3Q0U7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQ3RDSjs7QUQwQ0E7RUFDRTtJQUNFLHlCQUFBO0VDdkNGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hlY2tvdXQtY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nOiAycmVtO1xyXG59XHJcblxyXG4uY2hlY2tvdXQtaGVhZGVyIHtcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gIFxyXG4gIGgyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG59XHJcblxyXG4uY2hlY2tvdXQtcHJvZ3Jlc3Mge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG4gIFxyXG4gIC5wcm9ncmVzcy1zdGVwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIFxyXG4gICAgLnN0ZXAtbnVtYmVyIHtcclxuICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZTllY2VmO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnN0ZXAtbGFiZWwge1xyXG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgICBjb2xvcjogIzZjNzU3ZDtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgJi5hY3RpdmUge1xyXG4gICAgICAuc3RlcC1udW1iZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMwMDdiZmY7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICB9XHJcbiAgICAgIC5zdGVwLWxhYmVsIHtcclxuICAgICAgICBjb2xvcjogIzAwN2JmZjtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgICYuY29tcGxldGVkIHtcclxuICAgICAgLnN0ZXAtbnVtYmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMjhhNzQ1O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgfVxyXG4gICAgICAuc3RlcC1sYWJlbCB7XHJcbiAgICAgICAgY29sb3I6ICMyOGE3NDU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnByb2dyZXNzLWxpbmUge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTllY2VmO1xyXG4gICAgbWFyZ2luOiAwIDFyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgXHJcbiAgICAmLmNvbXBsZXRlZCB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMyOGE3NDU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubG9hZGluZy1zdGF0ZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDRyZW0gMnJlbTtcclxuICBcclxuICAuc3Bpbm5lci1ib3JkZXIge1xyXG4gICAgd2lkdGg6IDNyZW07XHJcbiAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxufVxyXG5cclxuLmNoZWNrb3V0LWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xyXG4gIGdhcDogMnJlbTtcclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gIH1cclxufVxyXG5cclxuLm9yZGVyLXN1bW1hcnkge1xyXG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgcGFkZGluZzogMS41cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gIFxyXG4gIGgzIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG59XHJcblxyXG4uc3VtbWFyeS1pdGVtcyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG59XHJcblxyXG4uc3VtbWFyeS1pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMC43NXJlbSAwO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gIFxyXG4gICY6bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLml0ZW0tdGh1bWIge1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG59XHJcblxyXG4uaXRlbS1kZXRhaWxzIHtcclxuICBmbGV4OiAxO1xyXG4gIFxyXG4gIC5pdGVtLW5hbWUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5pdGVtLXF1YW50aXR5IHtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICBjb2xvcjogIzZjNzU3ZDtcclxuICB9XHJcbn1cclxuXHJcbi5pdGVtLXByaWNlIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjMzMzO1xyXG59XHJcblxyXG4uc3VtbWFyeS10b3RhbHMge1xyXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZGVlMmU2O1xyXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuXHJcbi50b3RhbC1saW5lIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgXHJcbiAgJi50b3RhbCB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gIH1cclxufVxyXG5cclxuLmRlbGl2ZXJ5LWluZm8ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAjZTdmM2ZmO1xyXG4gIHBhZGRpbmc6IDAuNzVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgY29sb3I6ICMwMDY2Y2M7XHJcbiAgXHJcbiAgaSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5jaGVja291dC1mb3JtIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsMCwwLDAuMSk7XHJcbn1cclxuXHJcbi5mb3JtLXNlY3Rpb24ge1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgXHJcbiAgaDMge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxufVxyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICBcclxuICBsYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICB9XHJcbn1cclxuXHJcbi5mb3JtLXJvdyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgZ2FwOiAxcmVtO1xyXG4gIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgfVxyXG59XHJcblxyXG4uZm9ybS1jb250cm9sIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwLjc1cmVtO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XHJcbiAgXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMDdiZmY7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMCwgMTIzLCAyNTUsIDAuMjUpO1xyXG4gIH1cclxuICBcclxuICAmLmlzLWludmFsaWQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZGMzNTQ1O1xyXG4gICAgXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjZGMzNTQ1O1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgyMjAsIDUzLCA2OSwgMC4yNSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uaW52YWxpZC1mZWVkYmFjayB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogMC4yNXJlbTtcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gIGNvbG9yOiAjZGMzNTQ1O1xyXG59XHJcblxyXG4ucGF5bWVudC1tZXRob2RzIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xyXG4gIGdhcDogMXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcblxyXG4ucGF5bWVudC1tZXRob2Qge1xyXG4gIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBcclxuICAucGF5bWVudC1sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZTllY2VmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIFxyXG4gICAgaSB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gICAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBib3JkZXItY29sb3I6ICMwMDdiZmY7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmOGY5ZmY7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgLnBheW1lbnQtbGFiZWwge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmO1xyXG4gICAgYmFja2dyb3VuZDogI2Y4ZjlmZjtcclxuICAgIGNvbG9yOiAjMDA3YmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbn1cclxuXHJcbi5jYXJkLWRldGFpbHMge1xyXG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgcGFkZGluZzogMS41cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIFxyXG4gIGg0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBjb2xvcjogIzMzMztcclxuICB9XHJcbn1cclxuXHJcbi5jb25maXJtYXRpb24tc2VjdGlvbiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgXHJcbiAgaDMge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgfVxyXG59XHJcblxyXG4uY29uZmlybWF0aW9uLW1lc3NhZ2Uge1xyXG4gIGJhY2tncm91bmQ6ICNkNGVkZGE7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2MzZTZjYjtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgcGFkZGluZzogMS41cmVtO1xyXG4gIGNvbG9yOiAjMTU1NzI0O1xyXG4gIFxyXG4gIGkge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICBcclxuICBwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgIFxyXG4gICAgc3Ryb25nIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5mb3JtLWFjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxuICBwYWRkaW5nLXRvcDogMnJlbTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNjtcclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDFyZW07XHJcbiAgICBcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmNhbmNlbC1zZWN0aW9uIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICBcclxuICBidXR0b24ge1xyXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gIH1cclxufVxyXG5cclxuLmJ0biB7XHJcbiAgcGFkZGluZzogMC43NXJlbSAxLjVyZW07XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogMC41cmVtO1xyXG4gIFxyXG4gICY6ZGlzYWJsZWQge1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICB9XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeSB7XHJcbiAgYmFja2dyb3VuZDogIzAwN2JmZjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgXHJcbiAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA1NmIzO1xyXG4gIH1cclxufVxyXG5cclxuLmJ0bi1zdWNjZXNzIHtcclxuICBiYWNrZ3JvdW5kOiAjMjhhNzQ1O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBcclxuICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcclxuICAgIGJhY2tncm91bmQ6ICMxZTdlMzQ7XHJcbiAgfVxyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtc2Vjb25kYXJ5IHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogIzZjNzU3ZDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjNmM3NTdkO1xyXG4gIFxyXG4gICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xyXG4gICAgYmFja2dyb3VuZDogIzZjNzU3ZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1kYW5nZXIge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiAjZGMzNTQ1O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkYzM1NDU7XHJcbiAgXHJcbiAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGMzNTQ1O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxufVxyXG5cclxuLnNwaW5uZXItYm9yZGVyIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDFyZW07XHJcbiAgaGVpZ2h0OiAxcmVtO1xyXG4gIGJvcmRlcjogMC4xMjVlbSBzb2xpZCBjdXJyZW50Q29sb3I7XHJcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYW5pbWF0aW9uOiBzcGlubmVyLWJvcmRlciAwLjc1cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgXHJcbiAgJi5zbSB7XHJcbiAgICB3aWR0aDogMC43NXJlbTtcclxuICAgIGhlaWdodDogMC43NXJlbTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc3Bpbm5lci1ib3JkZXIge1xyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcbiIsIi5jaGVja291dC1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDJyZW07XG59XG5cbi5jaGVja291dC1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuLmNoZWNrb3V0LWhlYWRlciBoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgY29sb3I6ICMzMzM7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5jaGVja291dC1wcm9ncmVzcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xufVxuLmNoZWNrb3V0LXByb2dyZXNzIC5wcm9ncmVzcy1zdGVwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNoZWNrb3V0LXByb2dyZXNzIC5wcm9ncmVzcy1zdGVwIC5zdGVwLW51bWJlciB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogI2U5ZWNlZjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjNmM3NTdkO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG4uY2hlY2tvdXQtcHJvZ3Jlc3MgLnByb2dyZXNzLXN0ZXAgLnN0ZXAtbGFiZWwge1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBjb2xvcjogIzZjNzU3ZDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cbi5jaGVja291dC1wcm9ncmVzcyAucHJvZ3Jlc3Mtc3RlcC5hY3RpdmUgLnN0ZXAtbnVtYmVyIHtcbiAgYmFja2dyb3VuZDogIzAwN2JmZjtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmNoZWNrb3V0LXByb2dyZXNzIC5wcm9ncmVzcy1zdGVwLmFjdGl2ZSAuc3RlcC1sYWJlbCB7XG4gIGNvbG9yOiAjMDA3YmZmO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmNoZWNrb3V0LXByb2dyZXNzIC5wcm9ncmVzcy1zdGVwLmNvbXBsZXRlZCAuc3RlcC1udW1iZXIge1xuICBiYWNrZ3JvdW5kOiAjMjhhNzQ1O1xuICBjb2xvcjogd2hpdGU7XG59XG4uY2hlY2tvdXQtcHJvZ3Jlc3MgLnByb2dyZXNzLXN0ZXAuY29tcGxldGVkIC5zdGVwLWxhYmVsIHtcbiAgY29sb3I6ICMyOGE3NDU7XG59XG4uY2hlY2tvdXQtcHJvZ3Jlc3MgLnByb2dyZXNzLWxpbmUge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kOiAjZTllY2VmO1xuICBtYXJnaW46IDAgMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cbi5jaGVja291dC1wcm9ncmVzcyAucHJvZ3Jlc3MtbGluZS5jb21wbGV0ZWQge1xuICBiYWNrZ3JvdW5kOiAjMjhhNzQ1O1xufVxuXG4ubG9hZGluZy1zdGF0ZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNHJlbSAycmVtO1xufVxuLmxvYWRpbmctc3RhdGUgLnNwaW5uZXItYm9yZGVyIHtcbiAgd2lkdGg6IDNyZW07XG4gIGhlaWdodDogM3JlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLmNoZWNrb3V0LWNvbnRlbnQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XG4gIGdhcDogMnJlbTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY2hlY2tvdXQtY29udGVudCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cbn1cblxuLm9yZGVyLXN1bW1hcnkge1xuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICBwYWRkaW5nOiAxLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbn1cbi5vcmRlci1zdW1tYXJ5IGgzIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgY29sb3I6ICMzMzM7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5zdW1tYXJ5LWl0ZW1zIHtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xufVxuXG4uc3VtbWFyeS1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMC43NXJlbSAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcbn1cbi5zdW1tYXJ5LWl0ZW06bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5pdGVtLXRodW1iIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuXG4uaXRlbS1kZXRhaWxzIHtcbiAgZmxleDogMTtcbn1cbi5pdGVtLWRldGFpbHMgLml0ZW0tbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG59XG4uaXRlbS1kZXRhaWxzIC5pdGVtLXF1YW50aXR5IHtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgY29sb3I6ICM2Yzc1N2Q7XG59XG5cbi5pdGVtLXByaWNlIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi5zdW1tYXJ5LXRvdGFscyB7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZGVlMmU2O1xuICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuLnRvdGFsLWxpbmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cbi50b3RhbC1saW5lLnRvdGFsIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgY29sb3I6ICMzMzM7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVlMmU2O1xuICBwYWRkaW5nLXRvcDogMC41cmVtO1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG59XG5cbi5kZWxpdmVyeS1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2U3ZjNmZjtcbiAgcGFkZGluZzogMC43NXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBjb2xvcjogIzAwNjZjYztcbn1cbi5kZWxpdmVyeS1pbmZvIGkge1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbn1cblxuLmNoZWNrb3V0LWZvcm0ge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMS41cmVtO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5mb3JtLXNlY3Rpb24ge1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuLmZvcm0tc2VjdGlvbiBoMyB7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgY29sb3I6ICMzMzM7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xufVxuLmZvcm0tZ3JvdXAgbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzMzMztcbn1cblxuLmZvcm0tcm93IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBnYXA6IDFyZW07XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLmZvcm0tcm93IHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAuNzVyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XG59XG4uZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmO1xuICBvdXRsaW5lOiAwO1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgwLCAxMjMsIDI1NSwgMC4yNSk7XG59XG4uZm9ybS1jb250cm9sLmlzLWludmFsaWQge1xuICBib3JkZXItY29sb3I6ICNkYzM1NDU7XG59XG4uZm9ybS1jb250cm9sLmlzLWludmFsaWQ6Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICNkYzM1NDU7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDIyMCwgNTMsIDY5LCAwLjI1KTtcbn1cblxuLmludmFsaWQtZmVlZGJhY2sge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDAuMjVyZW07XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGNvbG9yOiAjZGMzNTQ1O1xufVxuXG4ucGF5bWVudC1tZXRob2RzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XG4gIGdhcDogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuLnBheW1lbnQtbWV0aG9kIGlucHV0W3R5cGU9cmFkaW9dIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5wYXltZW50LW1ldGhvZCAucGF5bWVudC1sYWJlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJvcmRlcjogMnB4IHNvbGlkICNlOWVjZWY7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuLnBheW1lbnQtbWV0aG9kIC5wYXltZW50LWxhYmVsIGkge1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xufVxuLnBheW1lbnQtbWV0aG9kIC5wYXltZW50LWxhYmVsOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmO1xuICBiYWNrZ3JvdW5kOiAjZjhmOWZmO1xufVxuLnBheW1lbnQtbWV0aG9kIGlucHV0W3R5cGU9cmFkaW9dOmNoZWNrZWQgKyAucGF5bWVudC1sYWJlbCB7XG4gIGJvcmRlci1jb2xvcjogIzAwN2JmZjtcbiAgYmFja2dyb3VuZDogI2Y4ZjlmZjtcbiAgY29sb3I6ICMwMDdiZmY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5jYXJkLWRldGFpbHMge1xuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICBwYWRkaW5nOiAxLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cbi5jYXJkLWRldGFpbHMgaDQge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBjb2xvcjogIzMzMztcbn1cblxuLmNvbmZpcm1hdGlvbi1zZWN0aW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAycmVtO1xufVxuLmNvbmZpcm1hdGlvbi1zZWN0aW9uIGgzIHtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICBjb2xvcjogIzMzMztcbn1cblxuLmNvbmZpcm1hdGlvbi1tZXNzYWdlIHtcbiAgYmFja2dyb3VuZDogI2Q0ZWRkYTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2MzZTZjYjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiAxLjVyZW07XG4gIGNvbG9yOiAjMTU1NzI0O1xufVxuLmNvbmZpcm1hdGlvbi1tZXNzYWdlIGkge1xuICBmb250LXNpemU6IDJyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmNvbmZpcm1hdGlvbi1tZXNzYWdlIHAge1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG4uY29uZmlybWF0aW9uLW1lc3NhZ2UgcCBzdHJvbmcge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uZm9ybS1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWUyZTY7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLmZvcm0tYWN0aW9ucyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDFyZW07XG4gIH1cbiAgLmZvcm0tYWN0aW9ucyBidXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi5jYW5jZWwtc2VjdGlvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cbi5jYW5jZWwtc2VjdGlvbiBidXR0b24ge1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbn1cblxuLmJ0biB7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMS41cmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG59XG4uYnRuOmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC42O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4uYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kOiAjMDA3YmZmO1xuICBjb2xvcjogd2hpdGU7XG59XG4uYnRuLXByaW1hcnk6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kOiAjMDA1NmIzO1xufVxuXG4uYnRuLXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kOiAjMjhhNzQ1O1xuICBjb2xvcjogd2hpdGU7XG59XG4uYnRuLXN1Y2Nlc3M6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kOiAjMWU3ZTM0O1xufVxuXG4uYnRuLW91dGxpbmUtc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjNmM3NTdkO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNmM3NTdkO1xufVxuLmJ0bi1vdXRsaW5lLXNlY29uZGFyeTpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQ6ICM2Yzc1N2Q7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ0bi1vdXRsaW5lLWRhbmdlciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2RjMzU0NTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RjMzU0NTtcbn1cbi5idG4tb3V0bGluZS1kYW5nZXI6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kOiAjZGMzNTQ1O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zcGlubmVyLWJvcmRlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDFyZW07XG4gIGhlaWdodDogMXJlbTtcbiAgYm9yZGVyOiAwLjEyNWVtIHNvbGlkIGN1cnJlbnRDb2xvcjtcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBhbmltYXRpb246IHNwaW5uZXItYm9yZGVyIDAuNzVzIGxpbmVhciBpbmZpbml0ZTtcbn1cbi5zcGlubmVyLWJvcmRlci5zbSB7XG4gIHdpZHRoOiAwLjc1cmVtO1xuICBoZWlnaHQ6IDAuNzVyZW07XG59XG5cbkBrZXlmcmFtZXMgc3Bpbm5lci1ib3JkZXIge1xuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 7157:
/*!***********************************************!*\
  !*** ./src/app/services/livraison.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LivraisonService: () => (/* binding */ LivraisonService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ 3366);



class LivraisonService {
  constructor(apiService) {
    this.apiService = apiService;
    this.endpoint = '/livraison';
  }
  /**
   * Calculer les frais de livraison en fonction de l'adresse
   */
  calculerFraisLivraison(adresse) {
    return this.apiService.post(`${this.endpoint}/calculer-frais`, {
      adresseLivraison: adresse
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(response => response.data));
  }
  /**
   * Recuperer tous les centres de distribution
   */
  getCentresDistribution() {
    return this.apiService.get(`${this.endpoint}/centres`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(response => response.data));
  }
  getCentreDistributionById(id) {
    return this.apiService.get(`${this.endpoint}/centres/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(response => response.data));
  }
  updateCentreFraisLivraison(id, fraisLivraison) {
    return this.apiService.put(`${this.endpoint}/centres/${id}/frais`, fraisLivraison).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(response => response.data));
  }
  /**
   * Formater une adresse pour l'affichage
   */
  formaterAdresse(adresse) {
    if (adresse.nomEndroit) return adresse.nomEndroit;
    if (adresse.latitude != null && adresse.longitude != null) {
      return `${adresse.latitude}, ${adresse.longitude}`;
    }
    return '';
  }
  /**
   * Valider un numero de telephone
   */
  validerTelephone(telephone) {
    return /^[0-9]{10,13}$/.test(telephone.replace(/\s/g, ''));
  }
  static {
    this.ɵfac = function LivraisonService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LivraisonService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: LivraisonService,
      factory: LivraisonService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_demo_pages_checkout_checkout_component_ts.js.map