"use strict";
(self["webpackChunkfree_version"] = self["webpackChunkfree_version"] || []).push([["src_app_demo_dashboard_default_default_component_ts"],{

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

/***/ 3129:
/*!***********************************************************************!*\
  !*** ./src/app/demo/pages/user/dashboard/user-dashboard.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserDashboardComponent: () => (/* binding */ UserDashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 6264);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 1873);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_panier_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/panier.service */ 2619);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/auth.service */ 4796);









function UserDashboardComponent_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("(", ctx_r0.userEmail, ")");
  }
}
function UserDashboardComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.error, " ");
  }
}
function UserDashboardComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Chargement du dashboard...");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function UserDashboardComponent_ng_container_13_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Aucune commande disponible. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function UserDashboardComponent_ng_container_13_div_44_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const commande_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](commande_r2.numeroCommande || "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](5, 4, commande_r2.createdAt, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.getStatutLabel(commande_r2.statut));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.formatPrice(commande_r2.total || 0));
  }
}
function UserDashboardComponent_ng_container_13_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 31)(1, "table", 32)(2, "thead")(3, "tr")(4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Commande");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Statut");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Montant");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, UserDashboardComponent_ng_container_13_div_44_tr_13_Template, 10, 7, "tr", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.commandesRecentes);
  }
}
function UserDashboardComponent_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 12)(2, "div", 13)(3, "div", 14)(4, "div", 15)(5, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Panier actif");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "h4", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 13)(12, "div", 14)(13, "div", 15)(14, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Commandes");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "h4", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 13)(21, "div", 14)(22, "div", 15)(23, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Depense totale");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "h4", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 13)(30, "div", 14)(31, "div", 15)(32, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "Livraisons");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "h4", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 19)(39, "div", 20)(40, "h5", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "Dernieres commandes");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](43, UserDashboardComponent_ng_container_13_div_43_Template, 2, 0, "div", 22)(44, UserDashboardComponent_ng_container_13_div_44_Template, 14, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 24)(46, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](47, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, " Produits ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](50, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, " Panier ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](53, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, " Mes commandes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r0.panierItems, " article(s)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.formatPrice(ctx_r0.panierTotal));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.stats.commandesTotal);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r0.stats.commandesPayees, " payee(s)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.formatPrice(ctx_r0.stats.depenseTotale));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Panier moyen: ", ctx_r0.formatPrice(ctx_r0.stats.panierMoyen));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.stats.commandesLivrees);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r0.stats.commandesAnnulees, " annulee(s)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.commandesRecentes.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.commandesRecentes.length > 0);
  }
}
class UserDashboardComponent {
  constructor(panierService, authService, cdr) {
    this.panierService = panierService;
    this.authService = authService;
    this.cdr = cdr;
    this.loading = false;
    this.error = null;
    this.currentPanier = null;
    this.historique = [];
    this.commandesRecentes = [];
    this.stats = {
      commandesTotal: 0,
      commandesPayees: 0,
      commandesLivrees: 0,
      commandesAnnulees: 0,
      depenseTotale: 0,
      panierMoyen: 0
    };
  }
  ngOnInit() {
    this.loadDashboard();
  }
  get userName() {
    return this.authService.currentUser?.nom || 'Utilisateur';
  }
  get userEmail() {
    return this.authService.currentUser?.email || '';
  }
  get panierItems() {
    return this.currentPanier ? this.panierService.getNombreArticles(this.currentPanier) : 0;
  }
  get panierTotal() {
    return this.currentPanier ? this.panierService.getTotal(this.currentPanier) : 0;
  }
  loadDashboard() {
    this.loading = true;
    this.error = null;
    (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.forkJoin)({
      panier: this.panierService.getPanier().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)({
        success: false,
        message: 'Erreur panier',
        data: null
      }))),
      historique: this.panierService.getHistoriqueCommandes().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)({
        success: false,
        message: 'Erreur historique',
        data: []
      })))
    }).subscribe({
      next: ({
        panier,
        historique
      }) => {
        this.currentPanier = panier?.success ? panier.data : null;
        this.historique = Array.isArray(historique?.data) ? historique.data : [];
        this.computeStats();
        Promise.resolve().then(() => {
          this.cdr.detectChanges();
        });
      },
      error: () => {
        this.error = 'Impossible de charger le dashboard utilisateur';
        this.cdr.detectChanges();
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
  formatPrice(value) {
    return this.panierService.formatMontant(value || 0);
  }
  getStatutLabel(statut) {
    return this.panierService.getStatutLibelle(statut);
  }
  computeStats() {
    const commandes = this.historique.filter(commande => commande.statut !== 'panier');
    const commandesPayees = commandes.filter(commande => !!commande.isPaye);
    const commandesLivrees = commandes.filter(commande => commande.statut === 'livre');
    const commandesAnnulees = commandes.filter(commande => commande.statut === 'annule');
    const commandesMonetisees = commandes.filter(commande => commande.statut !== 'annule');
    const depenseTotale = commandesMonetisees.reduce((sum, commande) => sum + (Number(commande.total) || 0), 0);
    this.stats = {
      commandesTotal: commandes.length,
      commandesPayees: commandesPayees.length,
      commandesLivrees: commandesLivrees.length,
      commandesAnnulees: commandesAnnulees.length,
      depenseTotale,
      panierMoyen: commandesMonetisees.length > 0 ? depenseTotale / commandesMonetisees.length : 0
    };
    this.commandesRecentes = [...commandes].sort((a, b) => {
      const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
      const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
      return dateB - dateA;
    }).slice(0, 5);
  }
  static {
    this.ɵfac = function UserDashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || UserDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_panier_service__WEBPACK_IMPORTED_MODULE_7__.PanierService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_8__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: UserDashboardComponent,
      selectors: [["app-user-dashboard"]],
      decls: 14,
      vars: 5,
      consts: [[1, "user-dashboard"], [1, "dashboard-header"], [1, "text-muted", "mb-0"], [4, "ngIf"], [1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [1, "ti", "ti-refresh"], ["class", "alert alert-danger mt-3 mb-0", 4, "ngIf"], ["class", "loading-state", 4, "ngIf"], [1, "alert", "alert-danger", "mt-3", "mb-0"], [1, "loading-state"], [1, "spinner-border", "text-primary"], [1, "text-muted", "mb-0", "mt-2"], [1, "row", "g-3", "mt-1"], [1, "col-md-6", "col-xl-3"], [1, "card", "dashboard-card"], [1, "card-body"], [1, "text-muted", "mb-1"], [1, "mb-1"], [1, "text-muted"], [1, "card", "mt-3"], [1, "card-header"], [1, "mb-0"], ["class", "text-muted", 4, "ngIf"], ["class", "table-responsive", 4, "ngIf"], [1, "quick-actions", "mt-3"], ["routerLink", "/produits", 1, "btn", "btn-primary", "btn-sm"], [1, "ti", "ti-shopping-cart"], ["routerLink", "/panier", 1, "btn", "btn-outline-primary", "btn-sm"], [1, "ti", "ti-basket"], ["routerLink", "/commandes", 1, "btn", "btn-outline-secondary", "btn-sm"], [1, "ti", "ti-receipt"], [1, "table-responsive"], [1, "table", "align-middle", "mb-0"], [1, "text-end"], [4, "ngFor", "ngForOf"]],
      template: function UserDashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Dashboard utilisateur");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, UserDashboardComponent_span_7_Template, 2, 1, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UserDashboardComponent_Template_button_click_8_listener() {
            return ctx.loadDashboard();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, " Actualiser ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, UserDashboardComponent_div_11_Template, 2, 1, "div", 6)(12, UserDashboardComponent_div_12_Template, 4, 0, "div", 7)(13, UserDashboardComponent_ng_container_13_Template, 55, 10, "ng-container", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx.userName, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.userEmail);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.error);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DatePipe],
      styles: [".user-dashboard[_ngcontent-%COMP%]   .dashboard-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.user-dashboard[_ngcontent-%COMP%]   .loading-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem 0;\n}\n.user-dashboard[_ngcontent-%COMP%]   .dashboard-card[_ngcontent-%COMP%] {\n  border: 1px solid #e9ecef;\n  box-shadow: none;\n}\n.user-dashboard[_ngcontent-%COMP%]   .quick-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVtby9wYWdlcy91c2VyL2Rhc2hib2FyZC91c2VyLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uL1dlYiUyMGF2YW5jZS9tMXAxM21lYW4tQ2FuZHktUm9tYW5jZS9mcm9udGVuZC9zcmMvYXBwL2RlbW8vcGFnZXMvdXNlci9kYXNoYm9hcmQvdXNlci1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FDQUo7QURHRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQ0RKO0FESUU7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0FDRko7QURLRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0hKIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXItZGFzaGJvYXJkIHtcclxuICAuZGFzaGJvYXJkLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMXJlbTtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICB9XHJcblxyXG4gIC5sb2FkaW5nLXN0YXRlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDJyZW0gMDtcclxuICB9XHJcblxyXG4gIC5kYXNoYm9hcmQtY2FyZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTllY2VmO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcblxyXG4gIC5xdWljay1hY3Rpb25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBnYXA6IDAuNzVyZW07XHJcbiAgfVxyXG59XHJcbiIsIi51c2VyLWRhc2hib2FyZCAuZGFzaGJvYXJkLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4udXNlci1kYXNoYm9hcmQgLmxvYWRpbmctc3RhdGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJyZW0gMDtcbn1cbi51c2VyLWRhc2hib2FyZCAuZGFzaGJvYXJkLWNhcmQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTllY2VmO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLnVzZXItZGFzaGJvYXJkIC5xdWljay1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDAuNzVyZW07XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 6193:
/*!*************************************************************!*\
  !*** ./src/app/demo/dashboard/default/default.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultComponent: () => (/* binding */ DefaultComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _pages_boutique_dashboard_boutique_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/boutique/dashboard/boutique-dashboard.component */ 6731);
/* harmony import */ var _pages_user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/user/dashboard/user-dashboard.component */ 3129);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ 4796);
/* harmony import */ var src_app_services_boutique_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/boutique.service */ 700);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 3305);








function DefaultComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function DefaultComponent_app_boutique_dashboard_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-boutique-dashboard");
  }
}
function DefaultComponent_app_user_dashboard_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-user-dashboard");
  }
}
class DefaultComponent {
  constructor(authService, boutiqueService, router) {
    this.authService = authService;
    this.boutiqueService = boutiqueService;
    this.router = router;
    this.loading = true;
    this.showBoutiqueDashboard = false;
    this.showUserDashboard = false;
  }
  ngOnInit() {
    const isAdminBoutique = this.authService.hasRole('admin_boutique');
    if (isAdminBoutique) {
      const boutiqueStatus = this.boutiqueService.getCachedBoutiqueStatus();
      if (!boutiqueStatus.hasBoutique) {
        this.router.navigate(['/boutique/boxes']);
        return;
      }
      if (!boutiqueStatus.isActive) {
        this.router.navigate(['/boutique/informations']);
        return;
      }
      this.showBoutiqueDashboard = true;
      this.loading = false;
      return;
    }
    this.showUserDashboard = true;
    this.loading = false;
  }
  static {
    this.ɵfac = function DefaultComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DefaultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_boutique_service__WEBPACK_IMPORTED_MODULE_5__.BoutiqueService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: DefaultComponent,
      selectors: [["app-default"]],
      decls: 4,
      vars: 3,
      consts: [[1, "default-dashboard"], ["class", "text-center py-5", 4, "ngIf"], [4, "ngIf"], [1, "text-center", "py-5"], [1, "spinner-border", "text-primary"]],
      template: function DefaultComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DefaultComponent_div_1_Template, 2, 0, "div", 1)(2, DefaultComponent_app_boutique_dashboard_2_Template, 1, 0, "app-boutique-dashboard", 2)(3, DefaultComponent_app_user_dashboard_3_Template, 1, 0, "app-user-dashboard", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.showBoutiqueDashboard);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.showUserDashboard);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _pages_boutique_dashboard_boutique_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.BoutiqueDashboardComponent, _pages_user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.UserDashboardComponent],
      styles: [".default-dashboard[_ngcontent-%COMP%] {\n  min-height: 240px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVtby9kYXNoYm9hcmQvZGVmYXVsdC9kZWZhdWx0LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vV2ViJTIwYXZhbmNlL20xcDEzbWVhbi1DYW5keS1Sb21hbmNlL2Zyb250ZW5kL3NyYy9hcHAvZGVtby9kYXNoYm9hcmQvZGVmYXVsdC9kZWZhdWx0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUNDRiIsInNvdXJjZXNDb250ZW50IjpbIi5kZWZhdWx0LWRhc2hib2FyZCB7XHJcbiAgbWluLWhlaWdodDogMjQwcHg7XHJcbn1cclxuIiwiLmRlZmF1bHQtZGFzaGJvYXJkIHtcbiAgbWluLWhlaWdodDogMjQwcHg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 6731:
/*!*******************************************************************************!*\
  !*** ./src/app/demo/pages/boutique/dashboard/boutique-dashboard.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BoutiqueDashboardComponent: () => (/* binding */ BoutiqueDashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_boutique_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/boutique.service */ 700);
/* harmony import */ var _services_boutique_commande_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/boutique-commande.service */ 8807);





function BoutiqueDashboardComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BoutiqueDashboardComponent_div_6_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.error = null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.error, " ");
  }
}
function BoutiqueDashboardComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13)(1, "div", 14)(2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Chargement...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
function BoutiqueDashboardComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2)(1, "div", 16)(2, "div", 17)(3, "div", 18)(4, "div", 19)(5, "div", 20)(6, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 23)(9, "h5", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p", 25)(12, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 20)(15, "div", 27)(16, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "ul", 30)(19, "li")(20, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BoutiqueDashboardComponent_div_8_Template_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      const logoInput_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](11);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](logoInput_r5.click());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Changer le logo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "li")(24, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BoutiqueDashboardComponent_div_8_Template_button_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.toggleBoutiqueStatus());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 34)(28, "div", 2)(29, "div", 35)(30, "div", 17)(31, "div", 18)(32, "div", 19)(33, "div", 20)(34, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 23)(37, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Commandes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "h4", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 35)(42, "div", 17)(43, "div", 18)(44, "div", 19)(45, "div", 20)(46, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 23)(49, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "Chiffre d'affaires brut");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "h4", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](53, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 35)(55, "div", 17)(56, "div", 18)(57, "div", 19)(58, "div", 20)(59, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](60, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 23)(62, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "Taux de conversion");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "h4", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](66, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 35)(68, "div", 17)(69, "div", 18)(70, "div", 19)(71, "div", 20)(72, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](73, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 23)(75, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "Part centre");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "h4", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](79, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 35)(81, "div", 17)(82, "div", 18)(83, "div", 19)(84, "div", 20)(85, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](86, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "div", 23)(88, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, "CA net boutique");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "h4", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](92, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "div", 35)(94, "div", 17)(95, "div", 18)(96, "div", 19)(97, "div", 20)(98, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](99, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "div", 23)(101, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, "Quantit\u00E9 vendue");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "h4", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r2.boutique.logo || "assets/images/boutique-placeholder.png", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", ctx_r2.boutique.nom);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.boutique.nom);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r2.boutique.isActive ? "bg-success" : "bg-danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.boutique.isActive ? "Active" : "Inactive", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r2.boutique.isActive ? "ri-pause-circle-line" : "ri-play-circle-line");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.boutique.isActive ? "D\u00E9sactiver" : "Activer", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((ctx_r2.stats == null ? null : ctx_r2.stats.generales == null ? null : ctx_r2.stats.generales.nombreCommandes) || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](53, 15, (ctx_r2.stats == null ? null : ctx_r2.stats.generales == null ? null : ctx_r2.stats.generales.chiffreAffaires) || 0, "1.0-0"), " Ar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](66, 18, (ctx_r2.stats == null ? null : ctx_r2.stats.generales == null ? null : ctx_r2.stats.generales.tauxConversion) || 0, "1.2-2"), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](79, 21, (ctx_r2.stats == null ? null : ctx_r2.stats.generales == null ? null : ctx_r2.stats.generales.partCentre) || 0, "1.0-0"), " Ar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](92, 24, (ctx_r2.stats == null ? null : ctx_r2.stats.generales == null ? null : ctx_r2.stats.generales.chiffreAffairesNetBoutique) || 0, "1.0-0"), " Ar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((ctx_r2.stats == null ? null : ctx_r2.stats.generales == null ? null : ctx_r2.stats.generales.quantiteVendue) || 0);
  }
}
function BoutiqueDashboardComponent_div_9_div_7_tr_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td")(2, "div", 19)(3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 59)(6, "h5", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const produit_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", produit_r6.photo || "assets/images/product-placeholder.png", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", produit_r6.nom);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](produit_r6.nom);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](produit_r6.quantiteVendue);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](12, 5, produit_r6.chiffreAffaires, "1.0-0"), " Ar");
  }
}
function BoutiqueDashboardComponent_div_9_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 55)(2, "table", 56)(3, "thead")(4, "tr")(5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Produit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Quantit\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "CA");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, BoutiqueDashboardComponent_div_9_div_7_tr_12_Template, 13, 8, "tr", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.stats.produitsPlusVendus);
  }
}
function BoutiqueDashboardComponent_div_9_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 60)(1, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Aucune vente enregistr\u00E9e");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function BoutiqueDashboardComponent_div_9_div_15_tr_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td")(2, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const stat_r7 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("bg-" + ctx_r2.getStatusColor(stat_r7.statut));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.getStatusLabel(stat_r7.statut), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](stat_r7.nombreCommandes);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](8, 5, stat_r7.chiffreAffaires, "1.0-0"), " Ar");
  }
}
function BoutiqueDashboardComponent_div_9_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 55)(2, "table", 56)(3, "thead")(4, "tr")(5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Statut");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "CA");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, BoutiqueDashboardComponent_div_9_div_15_tr_12_Template, 9, 8, "tr", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.stats.parStatut);
  }
}
function BoutiqueDashboardComponent_div_9_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 60)(1, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Aucune commande enregistr\u00E9e");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function BoutiqueDashboardComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 49)(1, "div", 50)(2, "div", 17)(3, "div", 51)(4, "h5", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Produits les plus vendus");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, BoutiqueDashboardComponent_div_9_div_7_Template, 13, 1, "div", 53)(8, BoutiqueDashboardComponent_div_9_div_8_Template, 3, 0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 50)(10, "div", 17)(11, "div", 51)(12, "h5", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Commandes par statut");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, BoutiqueDashboardComponent_div_9_div_15_Template, 13, 1, "div", 53)(16, BoutiqueDashboardComponent_div_9_div_16_Template, 3, 0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.stats.produitsPlusVendus && ctx_r2.stats.produitsPlusVendus.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r2.stats.produitsPlusVendus || ctx_r2.stats.produitsPlusVendus.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.stats.parStatut && ctx_r2.stats.parStatut.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r2.stats.parStatut || ctx_r2.stats.parStatut.length === 0);
  }
}
class BoutiqueDashboardComponent {
  constructor(boutiqueService, commandeService, cdr) {
    this.boutiqueService = boutiqueService;
    this.commandeService = commandeService;
    this.cdr = cdr;
    this.stats = null;
    this.loading = false;
    this.error = null;
  }
  ngOnInit() {
    this.loadBoutiqueData();
  }
  loadBoutiqueData() {
    this.loading = true;
    this.error = null;
    // Charger les informations de la boutique
    this.boutiqueService.getMyBoutique().subscribe({
      next: response => {
        if (response.success) {
          this.boutique = response.data;
          this.loadStats();
          Promise.resolve().then(() => {
            this.cdr.detectChanges();
          });
        } else {
          this.error = response.message;
          this.cdr.detectChanges();
        }
      },
      error: err => {
        this.error = 'Erreur lors du chargement de la boutique';
        this.cdr.detectChanges();
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
  loadStats() {
    this.commandeService.getMyBoutiqueStatistiques({
      periode: 'mois'
    }).subscribe({
      next: response => {
        if (response.success) {
          this.stats = response.data;
          this.cdr.detectChanges();
        } else {
          this.error = response.message;
          this.cdr.detectChanges();
        }
      },
      error: err => {
        this.error = 'Erreur lors du chargement des statistiques';
        this.cdr.detectChanges();
      }
    });
  }
  toggleBoutiqueStatus() {
    if (!this.boutique) return;
    const action = this.boutique.isActive ? this.boutiqueService.deactivateMyBoutique() : this.boutiqueService.activateMyBoutique();
    action.subscribe({
      next: response => {
        if (response.success) {
          this.boutique = response.data;
        } else {
          this.error = response.message;
        }
      },
      error: err => {
        this.error = 'Erreur lors du changement de statut';
        this.cdr.detectChanges();
      }
    });
  }
  onLogoUpload(event) {
    const file = event.target.files[0];
    if (file && this.boutique?._id) {
      this.boutiqueService.uploadLogo(this.boutique._id, file).subscribe({
        next: response => {
          if (response.success) {
            this.boutique = response.data;
          } else {
            this.error = response.message;
          }
        },
        error: err => {
          this.error = 'Erreur lors du téléchargement du logo';
          console.error('Erreur logo:', err);
        }
      });
    }
  }
  getStatusColor(statut) {
    const colors = {
      'en_attente': 'warning',
      'confirmee': 'info',
      'preparation': 'primary',
      'expedie': 'secondary',
      'livre': 'success',
      'annule': 'danger'
    };
    return colors[statut] || 'secondary';
  }
  getStatusLabel(statut) {
    const labels = {
      'en_attente': 'En attente',
      'confirmee': 'Confirmée',
      'preparation': 'En préparation',
      'expedie': 'Expédiée',
      'livre': 'Livrée',
      'annule': 'Annulée'
    };
    return labels[statut] || statut;
  }
  static {
    this.ɵfac = function BoutiqueDashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BoutiqueDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_boutique_service__WEBPACK_IMPORTED_MODULE_4__.BoutiqueService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_boutique_commande_service__WEBPACK_IMPORTED_MODULE_5__.BoutiqueCommandeService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: BoutiqueDashboardComponent,
      selectors: [["app-boutique-dashboard"]],
      decls: 12,
      vars: 4,
      consts: [["logoInput", ""], [1, "container-fluid"], [1, "row"], [1, "col-12"], [1, "page-title-box", "d-sm-flex", "align-items-center", "justify-content-between"], [1, "mb-sm-0"], ["class", "alert alert-danger alert-dismissible fade show", "role", "alert", 4, "ngIf"], ["class", "text-center py-5", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["class", "row mt-4", 4, "ngIf"], ["type", "file", "accept", "image/*", 2, "display", "none", 3, "change"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show"], ["type", "button", 1, "btn-close", 3, "click"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "col-xl-4"], [1, "card"], [1, "card-body"], [1, "d-flex", "align-items-center"], [1, "flex-shrink-0"], [1, "avatar-xl", "bg-light", "rounded", "p-1"], [1, "img-fluid", "rounded", 2, "max-height", "80px", "max-width", "80px", 3, "src", "alt"], [1, "flex-grow-1", "ms-3"], [1, "mb-1"], [1, "text-muted", "mb-0"], [1, "badge"], [1, "dropdown"], ["type", "button", "data-bs-toggle", "dropdown", 1, "btn", "btn-soft-secondary", "btn-sm", "dropdown"], [1, "ri-more-2-fill"], [1, "dropdown-menu", "dropdown-menu-end"], [1, "dropdown-item", 3, "click"], [1, "ri-image-line", "me-2"], [1, "me-2"], [1, "col-xl-8"], [1, "col-md-4"], [1, "avatar-sm", "bg-success-subtle", "rounded", "p-1"], [1, "ri-shopping-cart-2-line", "text-success", "fs-20"], [1, "text-muted", "mb-1"], [1, "mb-0"], [1, "avatar-sm", "bg-primary-subtle", "rounded", "p-1"], [1, "ri-money-dollar-circle-line", "text-primary", "fs-20"], [1, "avatar-sm", "bg-warning-subtle", "rounded", "p-1"], [1, "ri-percent-line", "text-warning", "fs-20"], [1, "avatar-sm", "bg-danger-subtle", "rounded", "p-1"], [1, "ri-building-line", "text-danger", "fs-20"], [1, "ri-wallet-3-line", "text-success", "fs-20"], [1, "avatar-sm", "bg-info-subtle", "rounded", "p-1"], [1, "ri-stack-line", "text-info", "fs-20"], [1, "row", "mt-4"], [1, "col-xl-6"], [1, "card-header"], [1, "card-title", "mb-0"], [4, "ngIf"], ["class", "text-center py-4", 4, "ngIf"], [1, "table-responsive"], [1, "table", "table-nowrap", "table-centered", "mb-0"], [4, "ngFor", "ngForOf"], [1, "avatar-xs", "rounded", 3, "src", "alt"], [1, "flex-grow-1", "ms-2"], [1, "text-center", "py-4"]],
      template: function BoutiqueDashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "h4", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Tableau de bord - Ma Boutique");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, BoutiqueDashboardComponent_div_6_Template, 3, 1, "div", 6)(7, BoutiqueDashboardComponent_div_7_Template, 4, 0, "div", 7)(8, BoutiqueDashboardComponent_div_8_Template, 105, 27, "div", 8)(9, BoutiqueDashboardComponent_div_9_Template, 17, 4, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "input", 10, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function BoutiqueDashboardComponent_Template_input_change_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.onLogoUpload($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.error);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.boutique);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.boutique && ctx.stats);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DecimalPipe],
      styles: [".boutique-dashboard[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  border: none;\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);\n  transition: all 0.3s ease;\n}\n.boutique-dashboard[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n}\n.boutique-dashboard[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.boutique-dashboard[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-bottom: 1px solid #e9ecef;\n  padding: 1rem 1.5rem;\n}\n.boutique-dashboard[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  color: #495057;\n  font-size: 1rem;\n  font-weight: 600;\n}\n.boutique-dashboard[_ngcontent-%COMP%]   .avatar-xl[_ngcontent-%COMP%] {\n  width: 5rem;\n  height: 5rem;\n}\n.boutique-dashboard[_ngcontent-%COMP%]   .avatar-sm[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n}\n.boutique-dashboard[_ngcontent-%COMP%]   .avatar-xs[_ngcontent-%COMP%] {\n  width: 1.5rem;\n  height: 1.5rem;\n}\n.boutique-dashboard[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.boutique-dashboard[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-top: none;\n  font-weight: 600;\n  color: #6c757d;\n  font-size: 0.875rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.boutique-dashboard[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  border-color: #e9ecef;\n}\n.boutique-dashboard[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  padding: 0.375rem 0.75rem;\n  border-radius: 0.375rem;\n  font-weight: 500;\n}\n.boutique-dashboard[_ngcontent-%COMP%]   .bg-success[_ngcontent-%COMP%] {\n  background-color: #10b981 !important;\n}\n.boutique-dashboard[_ngcontent-%COMP%]   .bg-danger[_ngcontent-%COMP%] {\n  background-color: #ef4444 !important;\n}\n.boutique-dashboard[_ngcontent-%COMP%]   .bg-primary[_ngcontent-%COMP%] {\n  background-color: #3b82f6 !important;\n}\n.boutique-dashboard[_ngcontent-%COMP%]   .bg-warning[_ngcontent-%COMP%] {\n  background-color: #f59e0b !important;\n}\n.boutique-dashboard[_ngcontent-%COMP%]   .bg-info[_ngcontent-%COMP%] {\n  background-color: #06b6d4 !important;\n}\n.boutique-dashboard[_ngcontent-%COMP%]   .bg-secondary[_ngcontent-%COMP%] {\n  background-color: #6b7280 !important;\n}\n.boutique-dashboard[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n  border-radius: 0.5rem;\n}\n.boutique-dashboard[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  font-size: 0.875rem;\n  color: #495057;\n  transition: all 0.15s ease;\n}\n.boutique-dashboard[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n  color: #212529;\n}\n.boutique-dashboard[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  text-align: center;\n}\n.boutique-dashboard[_ngcontent-%COMP%]   .spinner-border[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n}\n.boutique-dashboard[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 0.5rem;\n  font-weight: 500;\n}\n.boutique-dashboard[_ngcontent-%COMP%]   .text-muted[_ngcontent-%COMP%] {\n  color: #6c757d !important;\n}\n@media (max-width: 768px) {\n  .boutique-dashboard[_ngcontent-%COMP%]   .col-xl-4[_ngcontent-%COMP%], \n   .boutique-dashboard[_ngcontent-%COMP%]   .col-xl-6[_ngcontent-%COMP%], \n   .boutique-dashboard[_ngcontent-%COMP%]   .col-md-4[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n  }\n  .boutique-dashboard[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .boutique-dashboard[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVtby9wYWdlcy9ib3V0aXF1ZS9kYXNoYm9hcmQvYm91dGlxdWUtZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vV2ViJTIwYXZhbmNlL20xcDEzbWVhbi1DYW5keS1Sb21hbmNlL2Zyb250ZW5kL3NyYy9hcHAvZGVtby9wYWdlcy9ib3V0aXF1ZS9kYXNoYm9hcmQvYm91dGlxdWUtZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsbURBQUE7RUFDQSx5QkFBQTtBQ0FKO0FERUk7RUFDRSw2Q0FBQTtBQ0FOO0FER0k7RUFDRSxlQUFBO0FDRE47QURJSTtFQUNFLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQkFBQTtBQ0ZOO0FESU07RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDRlI7QURPRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDTEo7QURRRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDTko7QURTRTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FDUEo7QURVRTtFQUNFLGdCQUFBO0FDUko7QURVSTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FDUk47QURXSTtFQUNFLHNCQUFBO0VBQ0EscUJBQUE7QUNUTjtBRGFFO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNYSjtBRGNFO0VBQ0Usb0NBQUE7QUNaSjtBRGVFO0VBQ0Usb0NBQUE7QUNiSjtBRGdCRTtFQUNFLG9DQUFBO0FDZEo7QURpQkU7RUFDRSxvQ0FBQTtBQ2ZKO0FEa0JFO0VBQ0Usb0NBQUE7QUNoQko7QURtQkU7RUFDRSxvQ0FBQTtBQ2pCSjtBRG9CRTtFQUNFLFlBQUE7RUFDQSw2Q0FBQTtFQUNBLHFCQUFBO0FDbEJKO0FEb0JJO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtBQ2xCTjtBRG9CTTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQ2xCUjtBRHFCTTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNuQlI7QUR3QkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ3RCSjtBRHlCRTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FDdkJKO0FEMEJFO0VBQ0UseUJBQUE7QUN4Qko7QUQ0QkU7RUFDRTs7O0lBR0UsbUJBQUE7RUMxQko7RUQ2QkU7SUFDRSxhQUFBO0VDM0JKO0VEOEJFO0lBQ0UsbUJBQUE7RUM1Qko7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5ib3V0aXF1ZS1kYXNoYm9hcmQge1xyXG4gIC5jYXJkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IDAgMC4xMjVyZW0gMC4yNXJlbSByZ2JhKDAsIDAsIDAsIDAuMDc1KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC1ib2R5IHtcclxuICAgICAgcGFkZGluZzogMS41cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLWhlYWRlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZWNlZjtcclxuICAgICAgcGFkZGluZzogMXJlbSAxLjVyZW07XHJcblxyXG4gICAgICAuY2FyZC10aXRsZSB7XHJcbiAgICAgICAgY29sb3I6ICM0OTUwNTc7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5hdmF0YXIteGwge1xyXG4gICAgd2lkdGg6IDVyZW07XHJcbiAgICBoZWlnaHQ6IDVyZW07XHJcbiAgfVxyXG5cclxuICAuYXZhdGFyLXNtIHtcclxuICAgIHdpZHRoOiAycmVtO1xyXG4gICAgaGVpZ2h0OiAycmVtO1xyXG4gIH1cclxuXHJcbiAgLmF2YXRhci14cyB7XHJcbiAgICB3aWR0aDogMS41cmVtO1xyXG4gICAgaGVpZ2h0OiAxLjVyZW07XHJcbiAgfVxyXG5cclxuICAudGFibGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuXHJcbiAgICB0aCB7XHJcbiAgICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGNvbG9yOiAjNmM3NTdkO1xyXG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICB9XHJcblxyXG4gICAgdGQge1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICBib3JkZXItY29sb3I6ICNlOWVjZWY7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYmFkZ2Uge1xyXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgcGFkZGluZzogMC4zNzVyZW0gMC43NXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcblxyXG4gIC5iZy1zdWNjZXNzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMGI5ODEgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5iZy1kYW5nZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmNDQ0NCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmJnLXByaW1hcnkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNiODJmNiAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmJnLXdhcm5pbmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1OWUwYiAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmJnLWluZm8ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA2YjZkNCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmJnLXNlY29uZGFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmI3MjgwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuZHJvcGRvd24tbWVudSB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcblxyXG4gICAgLmRyb3Bkb3duLWl0ZW0ge1xyXG4gICAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgICAgY29sb3I6ICM0OTUwNTc7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuICAgICAgICBjb2xvcjogIzIxMjUyOTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIHdpZHRoOiAxcmVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNwaW5uZXItYm9yZGVyIHtcclxuICAgIHdpZHRoOiAzcmVtO1xyXG4gICAgaGVpZ2h0OiAzcmVtO1xyXG4gIH1cclxuXHJcbiAgLmFsZXJ0IHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG5cclxuICAudGV4dC1tdXRlZCB7XHJcbiAgICBjb2xvcjogIzZjNzU3ZCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLy8gUmVzcG9uc2l2ZVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmNvbC14bC00LFxyXG4gICAgLmNvbC14bC02LFxyXG4gICAgLmNvbC1tZC00IHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC1ib2R5IHtcclxuICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAudGFibGUtcmVzcG9uc2l2ZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5ib3V0aXF1ZS1kYXNoYm9hcmQgLmNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogMCAwLjEyNXJlbSAwLjI1cmVtIHJnYmEoMCwgMCwgMCwgMC4wNzUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuLmJvdXRpcXVlLWRhc2hib2FyZCAuY2FyZDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjE1KTtcbn1cbi5ib3V0aXF1ZS1kYXNoYm9hcmQgLmNhcmQgLmNhcmQtYm9keSB7XG4gIHBhZGRpbmc6IDEuNXJlbTtcbn1cbi5ib3V0aXF1ZS1kYXNoYm9hcmQgLmNhcmQgLmNhcmQtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllY2VmO1xuICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcbn1cbi5ib3V0aXF1ZS1kYXNoYm9hcmQgLmNhcmQgLmNhcmQtaGVhZGVyIC5jYXJkLXRpdGxlIHtcbiAgY29sb3I6ICM0OTUwNTc7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5ib3V0aXF1ZS1kYXNoYm9hcmQgLmF2YXRhci14bCB7XG4gIHdpZHRoOiA1cmVtO1xuICBoZWlnaHQ6IDVyZW07XG59XG4uYm91dGlxdWUtZGFzaGJvYXJkIC5hdmF0YXItc20ge1xuICB3aWR0aDogMnJlbTtcbiAgaGVpZ2h0OiAycmVtO1xufVxuLmJvdXRpcXVlLWRhc2hib2FyZCAuYXZhdGFyLXhzIHtcbiAgd2lkdGg6IDEuNXJlbTtcbiAgaGVpZ2h0OiAxLjVyZW07XG59XG4uYm91dGlxdWUtZGFzaGJvYXJkIC50YWJsZSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uYm91dGlxdWUtZGFzaGJvYXJkIC50YWJsZSB0aCB7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjNmM3NTdkO1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG59XG4uYm91dGlxdWUtZGFzaGJvYXJkIC50YWJsZSB0ZCB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJvcmRlci1jb2xvcjogI2U5ZWNlZjtcbn1cbi5ib3V0aXF1ZS1kYXNoYm9hcmQgLmJhZGdlIHtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5ib3V0aXF1ZS1kYXNoYm9hcmQgLmJnLXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTBiOTgxICFpbXBvcnRhbnQ7XG59XG4uYm91dGlxdWUtZGFzaGJvYXJkIC5iZy1kYW5nZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY0NDQ0ICFpbXBvcnRhbnQ7XG59XG4uYm91dGlxdWUtZGFzaGJvYXJkIC5iZy1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiODJmNiAhaW1wb3J0YW50O1xufVxuLmJvdXRpcXVlLWRhc2hib2FyZCAuYmctd2FybmluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNTllMGIgIWltcG9ydGFudDtcbn1cbi5ib3V0aXF1ZS1kYXNoYm9hcmQgLmJnLWluZm8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDZiNmQ0ICFpbXBvcnRhbnQ7XG59XG4uYm91dGlxdWUtZGFzaGJvYXJkIC5iZy1zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmI3MjgwICFpbXBvcnRhbnQ7XG59XG4uYm91dGlxdWUtZGFzaGJvYXJkIC5kcm9wZG93bi1tZW51IHtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbn1cbi5ib3V0aXF1ZS1kYXNoYm9hcmQgLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW0ge1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgY29sb3I6ICM0OTUwNTc7XG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xufVxuLmJvdXRpcXVlLWRhc2hib2FyZCAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gIGNvbG9yOiAjMjEyNTI5O1xufVxuLmJvdXRpcXVlLWRhc2hib2FyZCAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbSBpIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICB3aWR0aDogMXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmJvdXRpcXVlLWRhc2hib2FyZCAuc3Bpbm5lci1ib3JkZXIge1xuICB3aWR0aDogM3JlbTtcbiAgaGVpZ2h0OiAzcmVtO1xufVxuLmJvdXRpcXVlLWRhc2hib2FyZCAuYWxlcnQge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5ib3V0aXF1ZS1kYXNoYm9hcmQgLnRleHQtbXV0ZWQge1xuICBjb2xvcjogIzZjNzU3ZCAhaW1wb3J0YW50O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5ib3V0aXF1ZS1kYXNoYm9hcmQgLmNvbC14bC00LFxuICAuYm91dGlxdWUtZGFzaGJvYXJkIC5jb2wteGwtNixcbiAgLmJvdXRpcXVlLWRhc2hib2FyZCAuY29sLW1kLTQge1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIH1cbiAgLmJvdXRpcXVlLWRhc2hib2FyZCAuY2FyZC1ib2R5IHtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICB9XG4gIC5ib3V0aXF1ZS1kYXNoYm9hcmQgLnRhYmxlLXJlc3BvbnNpdmUge1xuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_demo_dashboard_default_default_component_ts.js.map