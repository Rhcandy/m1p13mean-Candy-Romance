"use strict";
(self["webpackChunkfree_version"] = self["webpackChunkfree_version"] || []).push([["src_app_demo_pages_produits_produits_component_ts"],{

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

/***/ 5297:
/*!*********************************************************************************!*\
  !*** ./src/app/components/product/product-display/product-display.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductDisplayComponent: () => (/* binding */ ProductDisplayComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/notification.service */ 7473);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3305);
/* harmony import */ var _services_panier_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/panier.service */ 2619);







function ProductDisplayComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Promo ", ctx_r0.getPromotionBadgeText(), " ");
  }
}
function ProductDisplayComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.formatPrice(ctx_r0.getBasePrice()), " ");
  }
}
function ProductDisplayComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Livraison gratuite avant le ", ctx_r0.product.deliveryDate, " ");
  }
}
function ProductDisplayComponent_Conditional_18_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 24);
  }
  if (rf & 2) {
    const star_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](star_r2 === 1 ? "ti-star-filled" : star_r2 === 0.5 ? "ti-star-half-filled" : "ti-star");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("star-filled", star_r2 === 1)("star-half", star_r2 === 0.5)("star-empty", star_r2 === 0);
  }
}
function ProductDisplayComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterCreate"](1, ProductDisplayComponent_Conditional_18_For_2_Template, 1, 8, "i", 22, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterTrackByIndex"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeater"](ctx_r0.getStars());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.product.averageRating.toFixed(1));
  }
}
function ProductDisplayComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.product.description);
  }
}
function ProductDisplayComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.getPromotionDetailsText(), " ");
  }
}
function ProductDisplayComponent_span_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tag_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", tag_r3.label, " ");
  }
}
function ProductDisplayComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
class ProductDisplayComponent {
  constructor(router, panierService) {
    this.router = router;
    this.panierService = panierService;
    this.notificationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_2__.NotificationService);
    this.variantTags = [];
    this.isAddingToCart = false; // État de chargement pour l'ajout au panier
  }
  ngOnInit() {
    this.variantTags = this.getVariantTags();
  }
  // Formater le prix
  formatPrice(price) {
    return new Intl.NumberFormat('fr-FR', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price) + ' Ar';
  }
  // Récupérer tous les attributs du variant sous forme de tags
  getVariantTags() {
    if (!this.product.variant[0]?.attributes) {
      return [];
    }
    return Object.entries(this.product.variant[0].attributes).map(([key, value]) => ({
      label: this.formatVariantLabel(key, value),
      key: key
    }));
  }
  // Formater le label du variant (ex: M -> Homme, F -> Femme)
  formatVariantLabel(key, value) {
    // Si c'est le sexe, convertir M -> Homme, F -> Femme
    if (key.toLowerCase() === 'sexe') {
      if (value.toUpperCase() === 'M') {
        return 'Homme';
      } else if (value.toUpperCase() === 'F') {
        return 'Femme';
      }
    }
    return value;
  }
  // Vérifier si le produit a du stock
  hasStock() {
    return this.getStockQuantity() > 0;
  }
  // Gestionnaire du clic sur "Order Now"
  onOrderNow() {
    const stock = this.getStockQuantity();
    if (stock <= 0) {
      this.notificationService.error('Erreur', 'Ce produit n\'est pas disponible en stock');
      return;
    }
    this.isAddingToCart = true;
    this.panierService.ajouterProduit(this.product._id, 1).subscribe({
      next: panier => {
        console.log('Produit ajouté au panier:', this.product.nom);
        this.notificationService.success('Success', `"${this.product.nom}" a été ajouté à votre panier !`);
      },
      error: error => {
        console.error('Erreur lors de l\'ajout au panier:', error);
        this.notificationService.error('Erreur', 'Erreur lors de l\'ajout au panier. Veuillez réessayer.');
      }
    }).add(() => {
      // Toujours exécuté (success ou error)
      this.isAddingToCart = false;
    });
  }
  // Gérer le clic sur la carte produit pour afficher les détails
  onProductClick() {
    this.router.navigate(['/product', this.product._id]);
  }
  // Ajouter au panier rapidement (achat express)
  onBuyNow(event) {
    event.stopPropagation(); // Empêcher la navigation vers la page détail
  }
  // Obtenir la quantité en stock
  getStockQuantity() {
    if (!Array.isArray(this.product?.variant)) return 0;
    return this.product.variant.reduce((sum, variant) => {
      const qtt = Number(variant?.qtt) || 0;
      const reserved = Number(variant?.reserved) || 0;
      return sum + Math.max(0, qtt - reserved);
    }, 0);
  }
  // Générer les étoiles de rating
  getStars() {
    const rating = this.product.averageRating || 0;
    const fullStars = Math.floor(rating);
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(1); // Étoile pleine
      } else if (i - 0.5 <= rating) {
        stars.push(0.5); // Demi-étoile
      } else {
        stars.push(0); // Étoile vide
      }
    }
    return stars;
  }
  // Vérifier si le produit a un rating
  hasRating() {
    return this.product.averageRating && this.product.averageRating > 0;
  }
  getActivePromotions() {
    if (!this.product?.promotions?.length) return [];
    const now = new Date();
    return this.product.promotions.filter(promo => this.isPromotionActive(promo, now));
  }
  hasActivePromotions() {
    return this.getActivePromotions().length > 0;
  }
  getTotalPromotionTaux() {
    const total = this.getActivePromotions().reduce((sum, promo) => sum + (Number(promo.taux) || 0), 0);
    return Math.min(100, total);
  }
  getBasePrice() {
    return Number(this.product?.prix?.[0]?.prixUnitaire) || 0;
  }
  getDiscountedPrice() {
    const basePrice = this.getBasePrice();
    const totalTaux = this.getTotalPromotionTaux();
    const discounted = basePrice * (1 - totalTaux / 100);
    return Math.max(0, Math.round(discounted));
  }
  getPromotionDetailsText() {
    return this.getActivePromotions().map(promo => `${promo.nom} (-${promo.taux}%)`).join(', ');
  }
  getPromotionBadgeText() {
    const taux = this.getTotalPromotionTaux();
    return taux > 0 ? `-${taux}%` : '';
  }
  isPromotionActive(promo, now) {
    if (promo.categorie && promo.categorie !== 'produit') return false;
    const debut = new Date(promo.dateDebut);
    const fin = new Date(promo.dateFin);
    if (Number.isNaN(debut.getTime()) || Number.isNaN(fin.getTime())) return false;
    return now >= debut && now <= fin;
  }
  static {
    this.ɵfac = function ProductDisplayComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ProductDisplayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_panier_service__WEBPACK_IMPORTED_MODULE_5__.PanierService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: ProductDisplayComponent,
      selectors: [["app-product-display"]],
      inputs: {
        product: "product"
      },
      decls: 26,
      vars: 23,
      consts: [[1, "product-wrapper"], ["tabindex", "0", "role", "button", 1, "product-card", "clickable-card", 3, "click", "keydown"], [1, "image-section"], [1, "promo-badge"], [1, "price-badge"], [1, "price-text"], [1, "d-block", "text-muted", "text-decoration-line-through"], [1, "product-image-container"], [1, "product-image", 3, "src", "alt"], [1, "delivery-badge"], [1, "info-section"], [1, "header-row"], [1, "product-name"], ["type", "button", 1, "order-button", 3, "click", "disabled"], [1, "ti"], [1, "rating-container"], [1, "product-description"], [1, "small", "text-success", "mb-2"], [1, "tags-container"], [1, "tag", "tag-category"], ["class", "tag tag-variant", 4, "ngFor", "ngForOf"], [1, "tag", "tag-favori"], [1, "ti", "star-icon", 3, "class", "star-filled", "star-half", "star-empty"], [1, "rating-text"], [1, "ti", "star-icon"], [1, "tag", "tag-variant"], [1, "ti", "ti-heart-filled"]],
      template: function ProductDisplayComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductDisplayComponent_Template_div_click_1_listener() {
            return ctx.onProductClick();
          })("keydown", function ProductDisplayComponent_Template_div_keydown_1_listener() {
            return ctx.onProductClick();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditionalCreate"](3, ProductDisplayComponent_Conditional_3_Template, 2, 1, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4)(5, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditionalCreate"](7, ProductDisplayComponent_Conditional_7_Template, 2, 1, "small", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "img", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditionalCreate"](10, ProductDisplayComponent_Conditional_10_Template, 2, 1, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 10)(12, "div", 11)(13, "h3", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductDisplayComponent_Template_button_click_15_listener($event) {
            ctx.onOrderNow();
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "i", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditionalCreate"](18, ProductDisplayComponent_Conditional_18_Template, 5, 1, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditionalCreate"](19, ProductDisplayComponent_Conditional_19_Template, 2, 1, "p", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditionalCreate"](20, ProductDisplayComponent_Conditional_20_Template, 2, 1, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 18)(22, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, ProductDisplayComponent_span_24_Template, 2, 1, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditionalCreate"](25, ProductDisplayComponent_Conditional_25_Template, 2, 0, "span", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-label", "Voir les d\u00E9tails du produit " + ctx.product.nom);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](ctx.hasActivePromotions() ? 3 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.formatPrice(ctx.hasActivePromotions() ? ctx.getDiscountedPrice() : ctx.getBasePrice()), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](ctx.hasActivePromotions() ? 7 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinterpolate"](ctx.product.nom))("src", ctx.product.photo || "https://via.placeholder.com/400x400", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](ctx.product.deliveryDate ? 10 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.product.nom, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("loading", ctx.isAddingToCart);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.isAddingToCart || !ctx.hasStock());
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ti-shopping-cart-plus", !ctx.isAddingToCart)("ti-loader", ctx.isAddingToCart);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.isAddingToCart ? "Ajout..." : "Ajouter Panier", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](ctx.hasRating() ? 18 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](ctx.product.description ? 19 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](ctx.hasActivePromotions() ? 20 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.product.categorieId.nom, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.variantTags);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](ctx.product.isFavori ? 25 : -1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
      styles: [".product-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.product-card[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  border-radius: 18px;\n  border: 1px solid #e7e5e0;\n  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.08);\n  overflow: hidden;\n  padding: 0.9rem;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  transition: transform 0.25s ease, box-shadow 0.25s ease;\n  cursor: pointer;\n}\n.product-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 18px 28px rgba(15, 23, 42, 0.12);\n}\n.product-card[_ngcontent-%COMP%]:focus {\n  outline: 2px solid #2563eb;\n  outline-offset: 2px;\n}\n\n.image-section[_ngcontent-%COMP%] {\n  position: relative;\n  background: linear-gradient(140deg, #fef3c7 0%, #f8fafc 52%, #e0f2fe 100%);\n  border-radius: 14px;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n\n.price-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.65rem;\n  right: 0.65rem;\n  background-color: rgba(255, 255, 255, 0.95);\n  border-radius: 999px;\n  padding: 0.45rem 0.9rem;\n  box-shadow: 0 6px 14px rgba(15, 23, 42, 0.12);\n  z-index: 10;\n}\n.price-badge[_ngcontent-%COMP%]   .price-text[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #111827;\n}\n\n.promo-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.65rem;\n  left: 0.65rem;\n  padding: 0.35rem 0.75rem;\n  border-radius: 999px;\n  background: linear-gradient(135deg, #ef4444 0%, #f97316 100%);\n  color: #ffffff;\n  font-weight: 700;\n  font-size: 0.75rem;\n  letter-spacing: 0.2px;\n  box-shadow: 0 8px 16px rgba(239, 68, 68, 0.25);\n  z-index: 10;\n}\n\n.product-image-container[_ngcontent-%COMP%] {\n  height: 15rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1.75rem;\n}\n.product-image-container[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%] {\n  max-height: 100%;\n  max-width: 100%;\n  object-fit: contain;\n  filter: drop-shadow(0 18px 18px rgba(15, 23, 42, 0.18));\n}\n\n.delivery-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0.75rem;\n  left: 0.75rem;\n  background-color: rgba(15, 23, 42, 0.8);\n  color: #ffffff;\n  padding: 0.35rem 0.65rem;\n  border-radius: 0.5rem;\n  font-size: 0.72rem;\n}\n\n.info-section[_ngcontent-%COMP%] {\n  margin-top: 0.4rem;\n  padding: 0 0.25rem 0.4rem;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0.6rem;\n}\n\n.header-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 0.5rem;\n}\n.header-row[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: #111827;\n  margin: 0;\n  line-height: 1.35;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  line-clamp: 2;\n  -webkit-box-orient: vertical;\n  flex: 1;\n}\n.header-row[_ngcontent-%COMP%]   .order-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #ffffff;\n  background: #2563eb;\n  border: none;\n  cursor: pointer;\n  padding: 0.4rem 0.75rem;\n  border-radius: 999px;\n  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;\n  flex-shrink: 0;\n}\n.header-row[_ngcontent-%COMP%]   .order-button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1d4ed8;\n  transform: translateY(-1px);\n  box-shadow: 0 6px 12px rgba(37, 99, 235, 0.25);\n}\n.header-row[_ngcontent-%COMP%]   .order-button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n.tags-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n\n.rating-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  color: #f59e0b;\n  font-size: 0.85rem;\n}\n\n.rating-text[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-weight: 600;\n  font-size: 0.78rem;\n}\n\n.product-description[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #6b7280;\n  font-size: 0.82rem;\n  line-height: 1.4;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n.star-icon.star-filled[_ngcontent-%COMP%], .star-icon.star-half[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.star-icon.star-empty[_ngcontent-%COMP%] {\n  color: #e5e7eb;\n}\n\n.tag[_ngcontent-%COMP%] {\n  padding: 0.35rem 0.7rem;\n  border-radius: 999px;\n  font-size: 0.72rem;\n  font-weight: 600;\n}\n.tag.tag-category[_ngcontent-%COMP%] {\n  background-color: #fef3c7;\n  color: #78350f;\n}\n.tag.tag-variant[_ngcontent-%COMP%] {\n  background-color: #f3f4f6;\n  color: #374151;\n}\n.tag.tag-favori[_ngcontent-%COMP%] {\n  background-color: #ffe4e6;\n  color: #9f1239;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.3rem;\n}\n.tag.tag-stock[_ngcontent-%COMP%] {\n  background-color: #dcfce7;\n  color: #166534;\n}\n\n@media (max-width: 700px) {\n  .product-card[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n  .product-image-container[_ngcontent-%COMP%] {\n    height: 13rem;\n    padding: 1.25rem;\n  }\n  .header-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.5rem;\n  }\n  .header-row[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .header-row[_ngcontent-%COMP%]   .order-button[_ngcontent-%COMP%] {\n    align-self: flex-start;\n  }\n  .header-row[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n    font-size: 3rem;\n  }\n}\n@media (max-width: 576px) {\n  .product-image-container[_ngcontent-%COMP%] {\n    height: 11rem;\n    padding: 1rem;\n  }\n  .header-row[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%] {\n    font-size: 0.95rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QtZGlzcGxheS9wcm9kdWN0LWRpc3BsYXkuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi9XZWIlMjBhdmFuY2UvbTFwMTNtZWFuLUNhbmR5LVJvbWFuY2UvZnJvbnRlbmQvc3JjL2FwcC9jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC1kaXNwbGF5L3Byb2R1Y3QtZGlzcGxheS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDQUY7O0FER0E7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSw2Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsdURBQUE7RUFDQSxlQUFBO0FDQUY7QURFRTtFQUNFLDJCQUFBO0VBQ0EsOENBQUE7QUNBSjtBREdFO0VBQ0UsMEJBQUE7RUFDQSxtQkFBQTtBQ0RKOztBRE1BO0VBQ0Usa0JBQUE7RUFDQSwwRUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDSEY7O0FETUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsMkNBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNkNBQUE7RUFDQSxXQUFBO0FDSEY7QURLRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNISjs7QURPQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0VBQ0EsNkRBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsOENBQUE7RUFDQSxXQUFBO0FDSkY7O0FET0E7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ0pGO0FETUU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHVEQUFBO0FDSko7O0FEUUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUNBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDTEY7O0FEU0E7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUNORjs7QURTQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtBQ05GO0FEUUU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0EsT0FBQTtBQ05KO0FEU0U7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSwyRUFBQTtFQUNBLGNBQUE7QUNQSjtBRFNJO0VBQ0UsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLDhDQUFBO0FDUE47QURVSTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQ1JOOztBRGNBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDWEY7O0FEY0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDWEY7O0FEY0E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ1hGOztBRGNBO0VBQ0UsU0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0FDWEY7O0FEZUU7RUFFRSxjQUFBO0FDYko7QURnQkU7RUFDRSxjQUFBO0FDZEo7O0FEa0JBO0VBQ0UsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNmRjtBRGlCRTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQ2ZKO0FEa0JFO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FDaEJKO0FEbUJFO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNqQko7QURvQkU7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUNsQko7O0FEdUJBO0VBQ0U7SUFDRSxnQkFBQTtFQ3BCRjtFRHVCQTtJQUNFLGFBQUE7SUFDQSxnQkFBQTtFQ3JCRjtFRHdCQTtJQUNFLHNCQUFBO0lBQ0EsdUJBQUE7SUFDQSxXQUFBO0VDdEJGO0VEd0JFO0lBQ0UsZUFBQTtFQ3RCSjtFRHlCRTtJQUNFLHNCQUFBO0VDdkJKO0VEMEJFO0lBQ0UsZUFBQTtFQ3hCSjtBQUNGO0FENEJBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsYUFBQTtFQzFCRjtFRDZCQTtJQUNFLGtCQUFBO0VDM0JGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBXcmFwcGVyIGV0IENhcmRcclxuLnByb2R1Y3Qtd3JhcHBlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ucHJvZHVjdC1jYXJkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U3ZTVlMDtcclxuICBib3gtc2hhZG93OiAwIDhweCAyMHB4IHJnYmEoMTUsIDIzLCA0MiwgMC4wOCk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwYWRkaW5nOiAwLjlyZW07XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDAuNzVyZW07XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzIGVhc2UsIGJveC1zaGFkb3cgMC4yNXMgZWFzZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpO1xyXG4gICAgYm94LXNoYWRvdzogMCAxOHB4IDI4cHggcmdiYSgxNSwgMjMsIDQyLCAwLjEyKTtcclxuICB9XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogMnB4IHNvbGlkICMyNTYzZWI7XHJcbiAgICBvdXRsaW5lLW9mZnNldDogMnB4O1xyXG4gIH1cclxufVxyXG5cclxuLy8gU2VjdGlvbiBJbWFnZVxyXG4uaW1hZ2Utc2VjdGlvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDBkZWcsICNmZWYzYzcgMCUsICNmOGZhZmMgNTIlLCAjZTBmMmZlIDEwMCUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBmbGV4LXNocmluazogMDtcclxufVxyXG5cclxuLnByaWNlLWJhZGdlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwLjY1cmVtO1xyXG4gIHJpZ2h0OiAwLjY1cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSk7XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgcGFkZGluZzogMC40NXJlbSAwLjlyZW07XHJcbiAgYm94LXNoYWRvdzogMCA2cHggMTRweCByZ2JhKDE1LCAyMywgNDIsIDAuMTIpO1xyXG4gIHotaW5kZXg6IDEwO1xyXG5cclxuICAucHJpY2UtdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6ICMxMTE4Mjc7XHJcbiAgfVxyXG59XHJcblxyXG4ucHJvbW8tYmFkZ2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDAuNjVyZW07XHJcbiAgbGVmdDogMC42NXJlbTtcclxuICBwYWRkaW5nOiAwLjM1cmVtIDAuNzVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2VmNDQ0NCAwJSwgI2Y5NzMxNiAxMDAlKTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCByZ2JhKDIzOSwgNjgsIDY4LCAwLjI1KTtcclxuICB6LWluZGV4OiAxMDtcclxufVxyXG5cclxuLnByb2R1Y3QtaW1hZ2UtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDE1cmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxLjc1cmVtO1xyXG5cclxuICAucHJvZHVjdC1pbWFnZSB7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMCAxOHB4IDE4cHggcmdiYSgxNSwgMjMsIDQyLCAwLjE4KSk7XHJcbiAgfVxyXG59XHJcblxyXG4uZGVsaXZlcnktYmFkZ2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDAuNzVyZW07XHJcbiAgbGVmdDogMC43NXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1LCAyMywgNDIsIDAuOCk7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgcGFkZGluZzogMC4zNXJlbSAwLjY1cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICBmb250LXNpemU6IDAuNzJyZW07XHJcbn1cclxuXHJcbi8vIFNlY3Rpb24gSW5mb1xyXG4uaW5mby1zZWN0aW9uIHtcclxuICBtYXJnaW4tdG9wOiAwLjRyZW07XHJcbiAgcGFkZGluZzogMCAwLjI1cmVtIDAuNHJlbTtcclxuICBmbGV4OiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDAuNnJlbTtcclxufVxyXG5cclxuLmhlYWRlci1yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGdhcDogMC41cmVtO1xyXG5cclxuICAucHJvZHVjdC1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMS4wNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzExMTgyNztcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjM1O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XHJcbiAgICBsaW5lLWNsYW1wOiAyO1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIGZsZXg6IDE7XHJcbiAgfVxyXG5cclxuICAub3JkZXItYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMC4zNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYmFja2dyb3VuZDogIzI1NjNlYjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmc6IDAuNHJlbSAwLjc1cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLCBib3gtc2hhZG93IDAuMnMgZWFzZSwgYmFja2dyb3VuZCAwLjJzIGVhc2U7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuXHJcbiAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcclxuICAgICAgYmFja2dyb3VuZDogIzFkNGVkODtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDZweCAxMnB4IHJnYmEoMzcsIDk5LCAyMzUsIDAuMjUpO1xyXG4gICAgfVxyXG5cclxuICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBUYWdzL0NoaXBzXHJcbi50YWdzLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbn1cclxuXHJcbi5yYXRpbmctY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjM1cmVtO1xyXG4gIGNvbG9yOiAjZjU5ZTBiO1xyXG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcclxufVxyXG5cclxuLnJhdGluZy10ZXh0IHtcclxuICBjb2xvcjogIzZiNzI4MDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMC43OHJlbTtcclxufVxyXG5cclxuLnByb2R1Y3QtZGVzY3JpcHRpb24ge1xyXG4gIG1hcmdpbjogMDtcclxuICBjb2xvcjogIzZiNzI4MDtcclxuICBmb250LXNpemU6IDAuODJyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XHJcbiAgbGluZS1jbGFtcDogMjtcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5zdGFyLWljb24ge1xyXG4gICYuc3Rhci1maWxsZWQsXHJcbiAgJi5zdGFyLWhhbGYge1xyXG4gICAgY29sb3I6ICNmNTllMGI7XHJcbiAgfVxyXG5cclxuICAmLnN0YXItZW1wdHkge1xyXG4gICAgY29sb3I6ICNlNWU3ZWI7XHJcbiAgfVxyXG59XHJcblxyXG4udGFnIHtcclxuICBwYWRkaW5nOiAwLjM1cmVtIDAuN3JlbTtcclxuICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICBmb250LXNpemU6IDAuNzJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuXHJcbiAgJi50YWctY2F0ZWdvcnkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZjNjNztcclxuICAgIGNvbG9yOiAjNzgzNTBmO1xyXG4gIH1cclxuXHJcbiAgJi50YWctdmFyaWFudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmNGY2O1xyXG4gICAgY29sb3I6ICMzNzQxNTE7XHJcbiAgfVxyXG5cclxuICAmLnRhZy1mYXZvcmkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZTRlNjtcclxuICAgIGNvbG9yOiAjOWYxMjM5O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAwLjNyZW07XHJcbiAgfVxyXG5cclxuICAmLnRhZy1zdG9jayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNmY2U3O1xyXG4gICAgY29sb3I6ICMxNjY1MzQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBSZXNwb25zaXZlXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gIC5wcm9kdWN0LWNhcmQge1xyXG4gICAgcGFkZGluZzogMC43NXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLnByb2R1Y3QtaW1hZ2UtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTNyZW07XHJcbiAgICBwYWRkaW5nOiAxLjI1cmVtO1xyXG4gIH1cclxuICBcclxuICAuaGVhZGVyLXJvdyB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBnYXA6IDAuNXJlbTtcclxuICAgIFxyXG4gICAgLnByb2R1Y3QtbmFtZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm9yZGVyLWJ1dHRvbiB7XHJcbiAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5lbXB0eS1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgLnByb2R1Y3QtaW1hZ2UtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTFyZW07XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gIH1cclxuICBcclxuICAuaGVhZGVyLXJvdyAucHJvZHVjdC1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICB9XHJcbn1cclxuIiwiLnByb2R1Y3Qtd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5wcm9kdWN0LWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTdlNWUwO1xuICBib3gtc2hhZG93OiAwIDhweCAyMHB4IHJnYmEoMTUsIDIzLCA0MiwgMC4wOCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDAuOXJlbTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDAuNzVyZW07XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cyBlYXNlLCBib3gtc2hhZG93IDAuMjVzIGVhc2U7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wcm9kdWN0LWNhcmQ6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7XG4gIGJveC1zaGFkb3c6IDAgMThweCAyOHB4IHJnYmEoMTUsIDIzLCA0MiwgMC4xMik7XG59XG4ucHJvZHVjdC1jYXJkOmZvY3VzIHtcbiAgb3V0bGluZTogMnB4IHNvbGlkICMyNTYzZWI7XG4gIG91dGxpbmUtb2Zmc2V0OiAycHg7XG59XG5cbi5pbWFnZS1zZWN0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQwZGVnLCAjZmVmM2M3IDAlLCAjZjhmYWZjIDUyJSwgI2UwZjJmZSAxMDAlKTtcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5wcmljZS1iYWRnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwLjY1cmVtO1xuICByaWdodDogMC42NXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk1KTtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIHBhZGRpbmc6IDAuNDVyZW0gMC45cmVtO1xuICBib3gtc2hhZG93OiAwIDZweCAxNHB4IHJnYmEoMTUsIDIzLCA0MiwgMC4xMik7XG4gIHotaW5kZXg6IDEwO1xufVxuLnByaWNlLWJhZGdlIC5wcmljZS10ZXh0IHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzExMTgyNztcbn1cblxuLnByb21vLWJhZGdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDAuNjVyZW07XG4gIGxlZnQ6IDAuNjVyZW07XG4gIHBhZGRpbmc6IDAuMzVyZW0gMC43NXJlbTtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlZjQ0NDQgMCUsICNmOTczMTYgMTAwJSk7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCByZ2JhKDIzOSwgNjgsIDY4LCAwLjI1KTtcbiAgei1pbmRleDogMTA7XG59XG5cbi5wcm9kdWN0LWltYWdlLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAxLjc1cmVtO1xufVxuLnByb2R1Y3QtaW1hZ2UtY29udGFpbmVyIC5wcm9kdWN0LWltYWdlIHtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMThweCAxOHB4IHJnYmEoMTUsIDIzLCA0MiwgMC4xOCkpO1xufVxuXG4uZGVsaXZlcnktYmFkZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMC43NXJlbTtcbiAgbGVmdDogMC43NXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNSwgMjMsIDQyLCAwLjgpO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMC4zNXJlbSAwLjY1cmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIGZvbnQtc2l6ZTogMC43MnJlbTtcbn1cblxuLmluZm8tc2VjdGlvbiB7XG4gIG1hcmdpbi10b3A6IDAuNHJlbTtcbiAgcGFkZGluZzogMCAwLjI1cmVtIDAuNHJlbTtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwLjZyZW07XG59XG5cbi5oZWFkZXItcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAwLjVyZW07XG59XG4uaGVhZGVyLXJvdyAucHJvZHVjdC1uYW1lIHtcbiAgZm9udC1zaXplOiAxLjA1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzExMTgyNztcbiAgbWFyZ2luOiAwO1xuICBsaW5lLWhlaWdodDogMS4zNTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gIGxpbmUtY2xhbXA6IDI7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIGZsZXg6IDE7XG59XG4uaGVhZGVyLXJvdyAub3JkZXItYnV0dG9uIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC4zNXJlbTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kOiAjMjU2M2ViO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMC40cmVtIDAuNzVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLCBib3gtc2hhZG93IDAuMnMgZWFzZSwgYmFja2dyb3VuZCAwLjJzIGVhc2U7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuLmhlYWRlci1yb3cgLm9yZGVyLWJ1dHRvbjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQ6ICMxZDRlZDg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgYm94LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDM3LCA5OSwgMjM1LCAwLjI1KTtcbn1cbi5oZWFkZXItcm93IC5vcmRlci1idXR0b246ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjY7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi50YWdzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAwLjVyZW07XG59XG5cbi5yYXRpbmctY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjM1cmVtO1xuICBjb2xvcjogI2Y1OWUwYjtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xufVxuXG4ucmF0aW5nLXRleHQge1xuICBjb2xvcjogIzZiNzI4MDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAwLjc4cmVtO1xufVxuXG4ucHJvZHVjdC1kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICM2YjcyODA7XG4gIGZvbnQtc2l6ZTogMC44MnJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgbGluZS1jbGFtcDogMjtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnN0YXItaWNvbi5zdGFyLWZpbGxlZCwgLnN0YXItaWNvbi5zdGFyLWhhbGYge1xuICBjb2xvcjogI2Y1OWUwYjtcbn1cbi5zdGFyLWljb24uc3Rhci1lbXB0eSB7XG4gIGNvbG9yOiAjZTVlN2ViO1xufVxuXG4udGFnIHtcbiAgcGFkZGluZzogMC4zNXJlbSAwLjdyZW07XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBmb250LXNpemU6IDAuNzJyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4udGFnLnRhZy1jYXRlZ29yeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWYzYzc7XG4gIGNvbG9yOiAjNzgzNTBmO1xufVxuLnRhZy50YWctdmFyaWFudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2Y0ZjY7XG4gIGNvbG9yOiAjMzc0MTUxO1xufVxuLnRhZy50YWctZmF2b3JpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZTRlNjtcbiAgY29sb3I6ICM5ZjEyMzk7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuM3JlbTtcbn1cbi50YWcudGFnLXN0b2NrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjZmNlNztcbiAgY29sb3I6ICMxNjY1MzQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xuICAucHJvZHVjdC1jYXJkIHtcbiAgICBwYWRkaW5nOiAwLjc1cmVtO1xuICB9XG4gIC5wcm9kdWN0LWltYWdlLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxM3JlbTtcbiAgICBwYWRkaW5nOiAxLjI1cmVtO1xuICB9XG4gIC5oZWFkZXItcm93IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGdhcDogMC41cmVtO1xuICB9XG4gIC5oZWFkZXItcm93IC5wcm9kdWN0LW5hbWUge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxuICAuaGVhZGVyLXJvdyAub3JkZXItYnV0dG9uIHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICB9XG4gIC5oZWFkZXItcm93IC5lbXB0eS1pY29uIHtcbiAgICBmb250LXNpemU6IDNyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAucHJvZHVjdC1pbWFnZS1jb250YWluZXIge1xuICAgIGhlaWdodDogMTFyZW07XG4gICAgcGFkZGluZzogMXJlbTtcbiAgfVxuICAuaGVhZGVyLXJvdyAucHJvZHVjdC1uYW1lIHtcbiAgICBmb250LXNpemU6IDAuOTVyZW07XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 6127:
/*!***********************************************************!*\
  !*** ./src/app/demo/pages/produits/produits.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProduitsComponent: () => (/* binding */ ProduitsComponent)
/* harmony export */ });
/* harmony import */ var D_Master_Web_avance_m1p13mean_Candy_Romance_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 6264);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 3305);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/product.service */ 6241);
/* harmony import */ var _components_product_product_display_product_display_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/product/product-display/product-display.component */ 5297);
/* harmony import */ var _services_panier_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/panier.service */ 2619);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 6196);
/* harmony import */ var _services_favoris_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../services/favoris.service */ 6334);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../services/auth.service */ 4796);
/* harmony import */ var _services_categorie_produit_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../services/categorie-produit.service */ 2309);
/* harmony import */ var _services_boutique_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../services/boutique.service */ 700);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 6124);

















const _forTrack0 = ($index, $item) => $item._id;
function ProduitsComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "span")(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, "Boutique s\u00E9lectionn\u00E9e :");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProduitsComponent_Conditional_5_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.clearBoutiqueFilter());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](7, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8, " Effacer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r1.selectedBoutiqueName);
  }
}
function ProduitsComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.getActiveFiltersCount());
  }
}
function ProduitsComponent_Conditional_23_For_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const category_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", category_r4._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](category_r4.nom);
  }
}
function ProduitsComponent_Conditional_23_For_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const boutique_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", boutique_r5._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](boutique_r5.nom);
  }
}
function ProduitsComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "div", 19)(3, "div", 20)(4, "h5", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](5, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6, "Filtres de recherche ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "form", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngSubmit", function ProduitsComponent_Conditional_23_Template_form_ngSubmit_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.applyFilters());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "div", 24)(9, "div", 25)(10, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](11, "Nom du produit");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "div", 27)(13, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](14, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](15, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "div", 25)(17, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](18, "Cat\u00E9gorie");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](19, "select", 32)(20, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](21, "Toutes les cat\u00E9gories");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrepeaterCreate"](22, ProduitsComponent_Conditional_23_For_23_Template, 2, 2, "option", 13, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](24, "div", 25)(25, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](26, "Boutique");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](27, "select", 35)(28, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](29, "Toutes les boutiques");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrepeaterCreate"](30, ProduitsComponent_Conditional_23_For_31_Template, 2, 2, "option", 13, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](32, "div", 25)(33, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](34, "Prix (Ar)");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](35, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](36, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](37, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](38, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](39, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](40, "div", 25)(41, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](42, "Trier par");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](43, "div", 27)(44, "select", 40)(45, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](46, "Nom");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](47, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](48, "Date de cr\u00E9ation");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](49, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](50, "Prix");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](51, "select", 44)(52, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](53, "\u2191");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](54, "option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](55, "\u2193");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](56, "div", 4)(57, "div", 47)(58, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProduitsComponent_Conditional_23_Template_button_click_58_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.resetFilters());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](59, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](60, "R\u00E9initialiser ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](61, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](62, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](63, "Appliquer les filtres ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("formGroup", ctx_r1.filterForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrepeater"](ctx_r1.filterOptions.categories);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrepeater"](ctx_r1.filterOptions.boutiques);
  }
}
function ProduitsComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 4)(1, "div", 52)(2, "div", 53)(3, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, "Chargement...");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6, "Chargement des produits...");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
}
function ProduitsComponent_Conditional_26_Conditional_0_For_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "app-product-display", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("product", product_r6);
  }
}
function ProduitsComponent_Conditional_26_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrepeaterCreate"](0, ProduitsComponent_Conditional_26_Conditional_0_For_1_Template, 2, 1, "div", 56, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrepeater"](ctx_r1.produits);
  }
}
function ProduitsComponent_Conditional_26_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 4)(1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "h5", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, "Aucun produit trouv\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6, "Essayez de modifier vos filtres ou crit\u00E8res de recherche");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProduitsComponent_Conditional_26_Conditional_1_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.resetFilters());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8, " R\u00E9initialiser les filtres ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
}
function ProduitsComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵconditionalCreate"](0, ProduitsComponent_Conditional_26_Conditional_0_Template, 2, 0)(1, ProduitsComponent_Conditional_26_Conditional_1_Template, 9, 0, "div", 4);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵconditional"](ctx_r1.produits.length > 0 ? 0 : 1);
  }
}
function ProduitsComponent_Conditional_27_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "li", 65)(1, "a", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProduitsComponent_Conditional_27_For_9_Template_a_click_1_listener($event) {
      const page_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      ctx_r1.changePage(page_r10);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event.preventDefault());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const page_r10 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("active", page_r10 === ctx_r1.pagination.page);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵariaProperty"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinterpolate1"]("Page ", page_r10));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", page_r10, " ");
  }
}
function ProduitsComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 15)(1, "div", 2)(2, "div", 62)(3, "nav", 63)(4, "ul", 64)(5, "li", 65)(6, "a", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProduitsComponent_Conditional_27_Template_a_click_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      ctx_r1.changePage(ctx_r1.pagination.page - 1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event.preventDefault());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](7, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrepeaterCreate"](8, ProduitsComponent_Conditional_27_For_9_Template, 3, 5, "li", 68, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "li", 65)(11, "a", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProduitsComponent_Conditional_27_Template_a_click_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      ctx_r1.changePage(ctx_r1.pagination.page + 1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event.preventDefault());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](12, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](13, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("disabled", ctx_r1.pagination.page <= 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrepeater"](ctx_r1.getPagesArray());
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("disabled", ctx_r1.pagination.page >= ctx_r1.pagination.totalPages);
  }
}
class ProduitsComponent {
  constructor() {
    this.productService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_services_product_service__WEBPACK_IMPORTED_MODULE_7__.ProductService);
    this.cdr = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef);
    this.fb = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder);
    this.panierService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_services_panier_service__WEBPACK_IMPORTED_MODULE_9__.PanierService);
    this.favorisService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_services_favoris_service__WEBPACK_IMPORTED_MODULE_11__.FavorisService);
    this.authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_services_auth_service__WEBPACK_IMPORTED_MODULE_12__.AuthService);
    this.categorieService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_services_categorie_produit_service__WEBPACK_IMPORTED_MODULE_13__.CategorieProduitService);
    this.boutiqueService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_services_boutique_service__WEBPACK_IMPORTED_MODULE_14__.BoutiqueService);
    this.route = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute);
    this.produits = [];
    this.pagination = null;
    this.currentPage = 1;
    this.pageSize = 10;
    this.showFilters = false;
    this.filterOptions = {
      categories: [],
      boutiques: []
    };
    // États de chargement
    this.isLoading = false;
    this.isLoadingFilters = false;
    // État du panier
    this.panierItemCount = 0;
    this.favorisIds = new Set();
    // Informations sur la boutique sélectionnée
    this.selectedBoutiqueName = null;
  }
  ngOnInit() {
    this.initializeFilterForm();
    this.loadFilterOptions();
    this.checkQueryParams();
    this.loadProducts();
  }
  checkQueryParams() {
    this.route.queryParams.subscribe(params => {
      // Si on vient de la page boutiques avec un paramètre boutique
      if (params['boutique']) {
        this.filterForm.patchValue({
          boutiqueId: params['boutique']
        });
        this.selectedBoutiqueName = params['nomBoutique'] || null;
      }
    });
  }
  initializeFilterForm() {
    this.filterForm = this.fb.group({
      nom: [''],
      categorieId: [''],
      boutiqueId: [''],
      prixMin: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.min(0)]],
      prixMax: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.min(0)]],
      sortBy: ['nom'],
      sortOrder: ['asc']
    });
  }
  loadFilterOptions() {
    var _this = this;
    return (0,D_Master_Web_avance_m1p13mean_Candy_Romance_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.isLoadingFilters = true;
      try {
        const [categories, boutiques] = yield Promise.all([(0,rxjs__WEBPACK_IMPORTED_MODULE_10__.firstValueFrom)(_this.categorieService.getAllCategories()), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.firstValueFrom)(_this.boutiqueService.getAllBoutiques())]);
        _this.filterOptions.categories = categories;
        _this.filterOptions.boutiques = boutiques;
        Promise.resolve().then(() => {
          _this.cdr.detectChanges();
        });
      } catch (error) {
        console.error('Erreur lors du chargement des options de filtre:', error);
        _this.filterOptions = {
          categories: [],
          boutiques: []
        };
        _this.cdr.detectChanges();
      } finally {
        _this.isLoadingFilters = false;
        _this.cdr.detectChanges();
      }
    })();
  }
  loadProducts() {
    this.isLoading = true;
    const params = this.buildQueryParams();
    this.productService.getAllProducts(params).subscribe({
      next: result => {
        this.produits = result.items;
        this.pagination = result.pagination;
        this.isLoading = false;
        this.loadFavoris();
        Promise.resolve().then(() => {
          this.cdr.detectChanges();
        });
      },
      error: error => {
        console.error('Erreur lors de la récupération des produits:', error);
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }
  loadFavoris() {
    if (!this.authService.isAuthenticated) {
      this.applyFavorisToProducts([]);
      return;
    }
    this.favorisService.getFavoris().subscribe({
      next: favoris => {
        this.applyFavorisToProducts(favoris.map(fav => fav._id));
      },
      error: error => {
        console.error('Erreur chargement favoris:', error);
        this.applyFavorisToProducts([]);
      }
    });
  }
  applyFavorisToProducts(favoriIds) {
    this.favorisIds = new Set(favoriIds);
    this.produits = this.produits.map(product => ({
      ...product,
      isFavori: this.favorisIds.has(product._id)
    }));
    this.cdr.detectChanges();
  }
  buildQueryParams() {
    const params = {
      page: this.currentPage,
      limit: this.pageSize
    };
    const formValues = this.filterForm.value;
    // Filtre par nom (recherche texte)
    if (formValues.nom?.trim()) {
      params['nom[regex]'] = formValues.nom.trim();
      params['nom[options]'] = 'i';
    }
    // Filtre par catégorie
    if (formValues.categorieId) {
      params.categorieId = formValues.categorieId;
    }
    // Filtre par boutique
    if (formValues.boutiqueId) {
      params.boutiqueId = formValues.boutiqueId;
    }
    // Filtre par prix (intervalle)
    const hasPrixMin = formValues.prixMin !== null && formValues.prixMin !== undefined && formValues.prixMin !== '';
    const prixMin = Number(formValues.prixMin);
    if (hasPrixMin && !Number.isNaN(prixMin) && prixMin >= 0) {
      params['prix.prixUnitaire[gte]'] = prixMin;
    }
    const hasPrixMax = formValues.prixMax !== null && formValues.prixMax !== undefined && formValues.prixMax !== '';
    const prixMax = Number(formValues.prixMax);
    if (hasPrixMax && !Number.isNaN(prixMax) && prixMax >= 0) {
      params['prix.prixUnitaire[lte]'] = prixMax;
    }
    // Tri
    if (formValues.sortBy) {
      const sortOrder = formValues.sortOrder === 'desc' ? '-' : '';
      const sortField = formValues.sortBy === 'prix' ? 'prix.prixUnitaire' : formValues.sortBy;
      params.sort = `${sortOrder}${sortField}`;
    }
    return params;
  }
  applyFilters() {
    this.currentPage = 1; // Réinitialiser à la première page
    this.loadProducts();
  }
  resetFilters() {
    this.filterForm.reset();
    this.filterForm.patchValue({
      sortBy: 'nom',
      sortOrder: 'asc'
    });
    this.selectedBoutiqueName = null;
    this.currentPage = 1;
    this.loadProducts();
  }
  clearBoutiqueFilter() {
    this.filterForm.patchValue({
      boutiqueId: ''
    });
    this.selectedBoutiqueName = null;
    this.currentPage = 1;
    this.loadProducts();
  }
  toggleFilters() {
    this.showFilters = !this.showFilters;
  }
  changePage(page) {
    if (page >= 1 && this.pagination && page <= this.pagination.totalPages) {
      this.currentPage = page;
      this.loadProducts();
    }
  }
  onPageSizeChange() {
    this.pageSize = Number(this.pageSize) || 10;
    this.currentPage = 1;
    this.loadProducts();
  }
  getPagesArray() {
    if (!this.pagination) return [];
    const pages = [];
    const start = Math.max(1, this.pagination.page - 2);
    const end = Math.min(this.pagination.totalPages, this.pagination.page + 2);
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  }
  trackProductById(index, product) {
    return product._id;
  }
  trackPageById(index, page) {
    return page;
  }
  // Méthodes pour gérer l'état des filtres
  hasActiveFilters() {
    const formValues = this.filterForm.value;
    const hasPrixMin = formValues.prixMin !== null && formValues.prixMin !== undefined && formValues.prixMin !== '';
    const hasPrixMax = formValues.prixMax !== null && formValues.prixMax !== undefined && formValues.prixMax !== '';
    return !!(formValues.nom?.trim() || formValues.categorieId || formValues.boutiqueId || hasPrixMin || hasPrixMax);
  }
  getActiveFiltersCount() {
    const formValues = this.filterForm.value;
    let count = 0;
    const hasPrixMin = formValues.prixMin !== null && formValues.prixMin !== undefined && formValues.prixMin !== '';
    const hasPrixMax = formValues.prixMax !== null && formValues.prixMax !== undefined && formValues.prixMax !== '';
    if (formValues.nom?.trim()) count++;
    if (formValues.categorieId) count++;
    if (formValues.boutiqueId) count++;
    if (hasPrixMin) count++;
    if (hasPrixMax) count++;
    return count;
  }
  /**
   * Ajouter un produit au panier
   */
  addToPanier(product, quantity = 1) {
    if (!product._id) {
      console.error('Produit invalide');
      return;
    }
    // Vérifier le stock disponible
    const stockDisponible = product.variant?.[0]?.qtt || 999;
    if (quantity > stockDisponible) {
      alert(`Stock insuffisant. Seulement ${stockDisponible} articles disponibles.`);
      return;
    }
    this.panierService.addToPanier({
      productId: product._id,
      quantity: quantity
    }).subscribe({
      next: response => {
        // Mettre à jour le compteur d'articles si nécessaire
        this.updatePanierItemCount();
        // Afficher une notification de succès
        this.showNotification('Produit ajouté au panier avec succès !', 'success');
      },
      error: error => {
        console.error('Erreur lors de l\'ajout au panier:', error);
        this.showNotification('Erreur lors de l\'ajout au panier', 'error');
      }
    });
  }
  /**
   * Ajouter rapidement un produit au panier (quantité = 1)
   */
  quickAddToPanier(product) {
    this.addToPanier(product, 1);
  }
  /**
   * Mettre à jour le compteur d'articles dans le panier
   */
  updatePanierItemCount() {
    this.panierService.getPanier().subscribe({
      next: response => {
        this.panierItemCount = response.data.qtt || 0;
      },
      error: error => {
        console.error('Erreur lors de la mise à jour du compteur:', error);
      }
    });
  }
  /**
   * Afficher une notification à l'utilisateur
   */
  showNotification(message, type = 'success') {
    // Implémenter selon votre système de notification
    // Pour l'instant, on utilise une simple alerte
    if (type === 'success') {
      // Vous pourriez utiliser un toast service ici
      alert(message);
    } else {
      alert(message);
    }
  }
  /**
   * Vérifier si un produit est en stock
   */
  isProductInStock(product) {
    const stock = product.variant?.[0]?.qtt || 0;
    return stock > 0;
  }
  /**
   * Obtenir le stock disponible d'un produit
   */
  getProductStock(product) {
    return product.variant?.[0]?.qtt || 0;
  }
  /**
   * Formater le prix d'un produit
   */
  formatProductPrice(product) {
    const prix = product.prix?.[0]?.prixUnitaire || 0;
    return this.panierService.formatMontant(prix);
  }
  static {
    this.ɵfac = function ProduitsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ProduitsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
      type: ProduitsComponent,
      selectors: [["app-produits"]],
      decls: 28,
      vars: 12,
      consts: [[1, "produits-page-wrapper"], [1, "produits-page-content"], [1, "container-fluid"], [1, "row", "mb-4"], [1, "col-12"], [1, "alert", "alert-info", "d-flex", "align-items-center", "gap-2", "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "gap-2", "flex-wrap"], ["type", "button", 1, "btn", "btn-outline-primary", "d-flex", "align-items-center", "gap-2", 3, "click"], [1, "ti", "ti-filter"], [1, "badge", "bg-primary", "rounded-pill"], [1, "d-flex", "align-items-center", "gap-2"], [1, "form-label", "mb-0", "text-muted", "small"], [1, "form-select", "form-select-sm", "per-page-select", 3, "ngModelChange", "change", "ngModel"], [3, "value"], [1, "row"], [1, "produits-pagination-bar"], [1, "ti", "ti-store"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-secondary", "ms-auto", 3, "click"], [1, "ti", "ti-x"], [1, "card", "border-0", "shadow-sm", "filters-card"], [1, "card-body"], [1, "card-title", "mb-4"], [1, "ti", "ti-filter", "me-2"], [3, "ngSubmit", "formGroup"], [1, "row", "g-3"], [1, "col-md-6", "col-lg-3"], ["for", "nom", 1, "form-label"], [1, "input-group"], [1, "input-group-text"], [1, "ti", "ti-search"], ["type", "text", "id", "nom", "placeholder", "Rechercher...", "formControlName", "nom", 1, "form-control"], ["for", "categorieId", 1, "form-label"], ["id", "categorieId", "formControlName", "categorieId", 1, "form-select"], ["value", ""], ["for", "boutiqueId", 1, "form-label"], ["id", "boutiqueId", "formControlName", "boutiqueId", 1, "form-select"], [1, "form-label"], ["type", "number", "placeholder", "Min", "formControlName", "prixMin", "min", "0", 1, "form-control"], ["type", "number", "placeholder", "Max", "formControlName", "prixMax", "min", "0", 1, "form-control"], ["for", "sortBy", 1, "form-label"], ["id", "sortBy", "formControlName", "sortBy", 1, "form-select"], ["value", "nom"], ["value", "createdAt"], ["value", "prix"], ["formControlName", "sortOrder", 1, "form-select", "sort-order"], ["value", "asc"], ["value", "desc"], [1, "d-flex", "gap-2", "justify-content-end"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "ti", "ti-refresh", "me-1"], ["type", "submit", 1, "btn", "btn-primary"], [1, "ti", "ti-search", "me-1"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "mt-2", "text-muted"], [1, "col-xl-4", "col-md-6", "mb-4"], [3, "product"], [1, "ti", "ti-package-off", "text-muted", "empty-icon"], [1, "mt-3", "text-muted"], [1, "text-muted"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-2"], ["aria-label", "Pagination des produits"], [1, "pagination", "mb-0", "align-items-center", "gap-1"], [1, "page-item"], ["href", "#", "aria-label", "Page pr\u00E9c\u00E9dente", 1, "page-link", "rounded-circle", "d-flex", "align-items-center", "justify-content-center", "page-nav-btn", 3, "click"], [1, "ti", "ti-chevron-left"], [1, "page-item", 3, "active"], ["href", "#", "aria-label", "Page suivante", 1, "page-link", "rounded-circle", "d-flex", "align-items-center", "justify-content-center", "page-nav-btn", 3, "click"], [1, "ti", "ti-chevron-right"], [2, "min-width", "120px"], ["href", "#", 1, "page-link", "rounded-circle", "d-flex", "align-items-center", "justify-content-center", "fw-semibold", "page-nav-btn", 3, "click", "aria-label"]],
      template: function ProduitsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵconditionalCreate"](5, ProduitsComponent_Conditional_5_Template, 9, 1, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "div", 6)(7, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProduitsComponent_Template_button_click_7_listener() {
            return ctx.toggleFilters();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](8, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](9, " Filtres ");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵconditionalCreate"](10, ProduitsComponent_Conditional_10_Template, 2, 1, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "div", 10)(12, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](13, "Produits par page :");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](14, "select", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("ngModelChange", function ProduitsComponent_Template_select_ngModelChange_14_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx.pageSize, $event) || (ctx.pageSize = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("change", function ProduitsComponent_Template_select_change_14_listener() {
            return ctx.onPageSizeChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "option", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](16, "6");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](17, "option", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](18, "10");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](19, "option", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](20, "20");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](21, "option", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](22, "50");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵconditionalCreate"](23, ProduitsComponent_Conditional_23_Template, 64, 1, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](24, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵconditionalCreate"](25, ProduitsComponent_Conditional_25_Template, 7, 0, "div", 4)(26, ProduitsComponent_Conditional_26_Template, 2, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵconditionalCreate"](27, ProduitsComponent_Conditional_27_Template, 14, 4, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵconditional"](ctx.selectedBoutiqueName ? 5 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("active", ctx.showFilters);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵconditional"](ctx.hasActiveFilters() ? 10 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("ngModel", ctx.pageSize);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵconditional"](ctx.showFilters ? 23 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵconditional"](ctx.isLoading ? 25 : 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵconditional"](ctx.pagination && ctx.pagination.totalPages > 1 ? 27 : -1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _components_product_product_display_product_display_component__WEBPACK_IMPORTED_MODULE_8__.ProductDisplayComponent],
      styles: [".produits-page-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: calc(100vh - 70px);\n  overflow: hidden;\n}\n\n.produits-page-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding-bottom: 1rem;\n}\n\n.produits-pagination-bar[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  background: rgba(138, 132, 132, 0);\n  border-top: 1px solid #e9ecef;\n  padding: 10px 0;\n  z-index: 10;\n}\n\n.per-page-select[_ngcontent-%COMP%] {\n  width: auto;\n  min-width: 72px;\n  border-color: #dee2e6;\n  border-radius: 0.5rem;\n  cursor: pointer;\n}\n.per-page-select[_ngcontent-%COMP%]:focus {\n  border-color: #5d87ff;\n  box-shadow: 0 0 0 0.2rem rgba(93, 135, 255, 0.15);\n}\n\n.pagination[_ngcontent-%COMP%] {\n  --bs-pagination-padding-x: 0;\n  --bs-pagination-padding-y: 0;\n  --bs-pagination-border-radius: 50%;\n}\n\n.page-link[_ngcontent-%COMP%] {\n  border: 2px solid #e0e0e0;\n  color: #5a6a85;\n  transition: all 0.3s ease;\n  margin: 0 2px;\n}\n\n.page-link[_ngcontent-%COMP%]:hover {\n  background-color: #f5f7fa;\n  border-color: #5d87ff;\n  color: #5d87ff;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 8px rgba(93, 135, 255, 0.2);\n}\n\n.page-item.active[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  background-color: #5d87ff;\n  border-color: #5d87ff;\n  color: white;\n  box-shadow: 0 4px 12px rgba(93, 135, 255, 0.3);\n}\n\n.page-item.disabled[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  border-color: #e0e0e0;\n  color: #ccc;\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n\n.page-link[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n\n.page-nav-btn[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n}\n\n.filters-card[_ngcontent-%COMP%] {\n  border-radius: 1rem !important;\n  transition: box-shadow 0.3s ease;\n}\n.filters-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.12) !important;\n}\n.filters-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);\n  border-radius: 1rem;\n}\n.filters-card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  color: #2c3e50;\n  margin-bottom: 1.5rem !important;\n  padding-bottom: 1rem;\n  border-bottom: 2px solid #e9ecef;\n}\n.filters-card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n\n.form-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #495057;\n  margin-bottom: 0.5rem;\n}\n.form-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n\n.input-group[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  border-color: #dee2e6;\n  transition: all 0.3s ease;\n}\n.input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], \n.input-group[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] {\n  border-color: #dee2e6;\n  transition: all 0.3s ease;\n}\n.input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus, \n.input-group[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]:focus {\n  border-color: #5d87ff;\n  box-shadow: 0 0 0 0.2rem rgba(93, 135, 255, 0.15);\n}\n.input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::placeholder, \n.input-group[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]::placeholder {\n  color: #adb5bd;\n  font-style: italic;\n}\n\n.form-select[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border-color: #dee2e6;\n  transition: all 0.3s ease;\n}\n.form-select[_ngcontent-%COMP%]:focus {\n  border-color: #5d87ff;\n  box-shadow: 0 0 0 0.2rem rgba(93, 135, 255, 0.15);\n}\n\n.sort-order[_ngcontent-%COMP%] {\n  max-width: 80px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  font-weight: 600;\n  padding: 0.625rem 1.25rem;\n  border-radius: 0.5rem;\n  transition: all 0.3s ease;\n}\n.btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #5d87ff 0%, #4570ea 100%);\n  border: none;\n  box-shadow: 0 4px 12px rgba(93, 135, 255, 0.3);\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(135deg, #4570ea 0%, #3461d9 100%);\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(93, 135, 255, 0.4);\n}\n.btn-primary[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n}\n\n@media (max-width: 991.98px) {\n  .filters-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    padding: 1.5rem !important;\n  }\n  .filters-card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n    font-size: 1.125rem;\n  }\n}\n@media (max-width: 767.98px) {\n  .produits-page-wrapper[_ngcontent-%COMP%] {\n    height: calc(100vh - 56px);\n  }\n  .filters-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    padding: 1.25rem !important;\n  }\n  .filters-card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .filters-card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .form-label[_ngcontent-%COMP%] {\n    font-size: 0.8125rem;\n  }\n  .d-flex.justify-content-end[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .d-flex.justify-content-end[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .produits-pagination-bar[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%] {\n    justify-content: center !important;\n    flex-direction: column;\n    align-items: center;\n    gap: 8px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVtby9wYWdlcy9wcm9kdWl0cy9wcm9kdWl0cy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uL1dlYiUyMGF2YW5jZS9tMXAxM21lYW4tQ2FuZHktUm9tYW5jZS9mcm9udGVuZC9zcmMvYXBwL2RlbW8vcGFnZXMvcHJvZHVpdHMvcHJvZHVpdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0FDRkY7O0FES0E7RUFDRSxPQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQ0ZGOztBRE1BO0VBQ0UsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ0hGOztBRE9BO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQ0pGO0FETUU7RUFDRSxxQkFBQTtFQUNBLGlEQUFBO0FDSko7O0FEU0E7RUFDRSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7QUNORjs7QURTQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQ05GOztBRFNBO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtFQUNBLDZDQUFBO0FDTkY7O0FEU0E7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLDhDQUFBO0FDTkY7O0FEU0E7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ05GOztBRFNBO0VBQ0Usc0JBQUE7QUNORjs7QURTQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDTkY7O0FEVUE7RUFDRSw4QkFBQTtFQUNBLGdDQUFBO0FDUEY7QURTRTtFQUNFLDBEQUFBO0FDUEo7QURVRTtFQUNFLDZEQUFBO0VBQ0EsbUJBQUE7QUNSSjtBRFdFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQkFBQTtFQUNBLGdDQUFBO0FDVEo7QURXSTtFQUFJLGlCQUFBO0FDUlI7O0FEWUE7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQ1RGO0FEVUU7RUFBSSxlQUFBO0FDUE47O0FEV0U7RUFDRSxxQkFBQTtFQUNBLHlCQUFBO0FDUko7QURXRTs7RUFFRSxxQkFBQTtFQUNBLHlCQUFBO0FDVEo7QURXSTs7RUFDRSxxQkFBQTtFQUNBLGlEQUFBO0FDUk47QURXSTs7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUNSTjs7QURhQTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FDVkY7QURZRTtFQUNFLHFCQUFBO0VBQ0EsaURBQUE7QUNWSjs7QURjQTtFQUFjLGVBQUE7QUNWZDs7QURhQTtFQUNFLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FDVkY7QURXRTtFQUFJLG1CQUFBO0FDUk47O0FEV0E7RUFDRSw2REFBQTtFQUNBLFlBQUE7RUFDQSw4Q0FBQTtBQ1JGO0FEVUU7RUFDRSw2REFBQTtFQUNBLDJCQUFBO0VBQ0EsOENBQUE7QUNSSjtBRFdFO0VBQVcsd0JBQUE7QUNSYjs7QURZQTtFQUFjLGVBQUE7QUNSZDs7QURXQTtFQUNFO0lBQTJCLDBCQUFBO0VDUDNCO0VEUUE7SUFBNEIsbUJBQUE7RUNMNUI7QUFDRjtBRE9BO0VBQ0U7SUFDRSwwQkFBQTtFQ0xGO0VEUUE7SUFBMkIsMkJBQUE7RUNMM0I7RURNQTtJQUE0QixlQUFBO0VDSDVCO0VERzZDO0lBQUksa0JBQUE7RUNBakQ7RURDQTtJQUFjLG9CQUFBO0VDRWQ7RURBQTtJQUNFLHNCQUFBO0VDRUY7RURERTtJQUFPLFdBQUE7RUNJVDtFREFFO0lBQVUsa0NBQUE7SUFBb0Msc0JBQUE7SUFBd0IsbUJBQUE7SUFBcUIsUUFBQTtFQ003RjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gw6LClMKAw6LClMKAw6LClMKAIExheW91dCBwYWdlIHdyYXBwZXIgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXHJcbi8vIExhIHBhZ2Ugb2NjdXBlIHRvdXRlIGxhIGhhdXRldXIgZGlzcG9uaWJsZSxcclxuLy8gbGUgY29udGVudSBzY3JvbGwsIGxhIHBhZ2luYXRpb24gcmVzdGUgZml4w4PCqWUgZW4gYmFzLlxyXG4ucHJvZHVpdHMtcGFnZS13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzBweCk7IC8vIEFqdXN0ZXogNzBweCBzZWxvbiBsYSBoYXV0ZXVyIGRlIHZvdHJlIG5hdmJhci9zaWRlYmFyIGhlYWRlclxyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5wcm9kdWl0cy1wYWdlLWNvbnRlbnQge1xyXG4gIGZsZXg6IDE7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLy8gQmFycmUgZGUgcGFnaW5hdGlvbiBjb2xsw4PCqWUgYXUgYmFzXHJcbi5wcm9kdWl0cy1wYWdpbmF0aW9uLWJhciB7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbiAgYmFja2dyb3VuZDogIzhhODQ4NDAwO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTllY2VmO1xyXG4gIHBhZGRpbmc6IDEwcHggMDtcclxuICB6LWluZGV4OiAxMDtcclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAw6LClMKAIFPDg8KpbGVjdGV1ciBwcm9kdWl0cyBwYXIgcGFnZSDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcclxuLnBlci1wYWdlLXNlbGVjdCB7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgbWluLXdpZHRoOiA3MnB4O1xyXG4gIGJvcmRlci1jb2xvcjogI2RlZTJlNjtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAmOmZvY3VzIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzVkODdmZjtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDkzLCAxMzUsIDI1NSwgMC4xNSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyDDosKUwoDDosKUwoDDosKUwoAgUGFnaW5hdGlvbiBtb2Rlcm5lIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxyXG4ucGFnaW5hdGlvbiB7XHJcbiAgLS1icy1wYWdpbmF0aW9uLXBhZGRpbmcteDogMDtcclxuICAtLWJzLXBhZ2luYXRpb24tcGFkZGluZy15OiAwO1xyXG4gIC0tYnMtcGFnaW5hdGlvbi1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5wYWdlLWxpbmsge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNlMGUwZTA7XHJcbiAgY29sb3I6ICM1YTZhODU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICBtYXJnaW46IDAgMnB4O1xyXG59XHJcblxyXG4ucGFnZS1saW5rOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmN2ZhO1xyXG4gIGJvcmRlci1jb2xvcjogIzVkODdmZjtcclxuICBjb2xvcjogIzVkODdmZjtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoOTMsIDEzNSwgMjU1LCAwLjIpO1xyXG59XHJcblxyXG4ucGFnZS1pdGVtLmFjdGl2ZSAucGFnZS1saW5rIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWQ4N2ZmO1xyXG4gIGJvcmRlci1jb2xvcjogIzVkODdmZjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDkzLCAxMzUsIDI1NSwgMC4zKTtcclxufVxyXG5cclxuLnBhZ2UtaXRlbS5kaXNhYmxlZCAucGFnZS1saW5rIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gIGJvcmRlci1jb2xvcjogI2UwZTBlMDtcclxuICBjb2xvcjogI2NjYztcclxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gIG9wYWNpdHk6IDAuNjtcclxufVxyXG5cclxuLnBhZ2UtbGluazphY3RpdmUge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbn1cclxuXHJcbi5wYWdlLW5hdi1idG4ge1xyXG4gIHdpZHRoOiAzOHB4O1xyXG4gIGhlaWdodDogMzhweDtcclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAw6LClMKAIEZpbHRyZXMgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXHJcbi5maWx0ZXJzLWNhcmQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW0gIWltcG9ydGFudDtcclxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuM3MgZWFzZTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAuNXJlbSAxLjVyZW0gcmdiYSgwLCAwLCAwLCAwLjEyKSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmZmZmZmIDAlLCAjZjhmOWZhIDEwMCUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICB9XHJcblxyXG4gIC5jYXJkLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgIGNvbG9yOiAjMmMzZTUwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZTllY2VmO1xyXG5cclxuICAgIGkgeyBmb250LXNpemU6IDEuNXJlbTsgfVxyXG4gIH1cclxufVxyXG5cclxuLmZvcm0tbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgY29sb3I6ICM0OTUwNTc7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gIGkgeyBmb250LXNpemU6IDFyZW07IH1cclxufVxyXG5cclxuLmlucHV0LWdyb3VwIHtcclxuICAuaW5wdXQtZ3JvdXAtdGV4dCB7XHJcbiAgICBib3JkZXItY29sb3I6ICNkZWUyZTY7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIH1cclxuXHJcbiAgLmZvcm0tY29udHJvbCxcclxuICAuZm9ybS1zZWxlY3Qge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZGVlMmU2O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjNWQ4N2ZmO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSg5MywgMTM1LCAyNTUsIDAuMTUpO1xyXG4gICAgfVxyXG5cclxuICAgICY6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgY29sb3I6ICNhZGI1YmQ7XHJcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5mb3JtLXNlbGVjdCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlci1jb2xvcjogI2RlZTJlNjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG5cclxuICAmOmZvY3VzIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzVkODdmZjtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDkzLCAxMzUsIDI1NSwgMC4xNSk7XHJcbiAgfVxyXG59XHJcblxyXG4uc29ydC1vcmRlciB7IG1heC13aWR0aDogODBweDsgfVxyXG5cclxuLy8gw6LClMKAw6LClMKAw6LClMKAIEJvdXRvbnMgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXHJcbi5idG4ge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgcGFkZGluZzogMC42MjVyZW0gMS4yNXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICBpIHsgZm9udC1zaXplOiAxLjEyNXJlbTsgfVxyXG59XHJcblxyXG4uYnRuLXByaW1hcnkge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM1ZDg3ZmYgMCUsICM0NTcwZWEgMTAwJSk7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSg5MywgMTM1LCAyNTUsIDAuMyk7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzQ1NzBlYSAwJSwgIzM0NjFkOSAxMDAlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgNnB4IDE2cHggcmdiYSg5MywgMTM1LCAyNTUsIDAuNCk7XHJcbiAgfVxyXG5cclxuICAmOmFjdGl2ZSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxyXG59XHJcblxyXG4vLyDDosKUwoDDosKUwoDDosKUwoAgSWPDg8K0bmUgw4PCqXRhdCB2aWRlIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxyXG4uZW1wdHktaWNvbiB7IGZvbnQtc2l6ZTogM3JlbTsgfVxyXG5cclxuLy8gw6LClMKAw6LClMKAw6LClMKAIFJlc3BvbnNpdmUgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xyXG4gIC5maWx0ZXJzLWNhcmQgLmNhcmQtYm9keSB7IHBhZGRpbmc6IDEuNXJlbSAhaW1wb3J0YW50OyB9XHJcbiAgLmZpbHRlcnMtY2FyZCAuY2FyZC10aXRsZSB7IGZvbnQtc2l6ZTogMS4xMjVyZW07IH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XHJcbiAgLnByb2R1aXRzLXBhZ2Utd3JhcHBlciB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1NnB4KTtcclxuICB9XHJcblxyXG4gIC5maWx0ZXJzLWNhcmQgLmNhcmQtYm9keSB7IHBhZGRpbmc6IDEuMjVyZW0gIWltcG9ydGFudDsgfVxyXG4gIC5maWx0ZXJzLWNhcmQgLmNhcmQtdGl0bGUgeyBmb250LXNpemU6IDFyZW07IGkgeyBmb250LXNpemU6IDEuMjVyZW07IH0gfVxyXG4gIC5mb3JtLWxhYmVsIHsgZm9udC1zaXplOiAwLjgxMjVyZW07IH1cclxuXHJcbiAgLmQtZmxleC5qdXN0aWZ5LWNvbnRlbnQtZW5kIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAuYnRuIHsgd2lkdGg6IDEwMCU7IH1cclxuICB9XHJcblxyXG4gIC5wcm9kdWl0cy1wYWdpbmF0aW9uLWJhciB7XHJcbiAgICAuZC1mbGV4IHsganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA4cHg7IH1cclxuICB9XHJcbn1cclxuIiwiLnByb2R1aXRzLXBhZ2Utd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDcwcHgpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucHJvZHVpdHMtcGFnZS1jb250ZW50IHtcbiAgZmxleDogMTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG59XG5cbi5wcm9kdWl0cy1wYWdpbmF0aW9uLWJhciB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEzOCwgMTMyLCAxMzIsIDApO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U5ZWNlZjtcbiAgcGFkZGluZzogMTBweCAwO1xuICB6LWluZGV4OiAxMDtcbn1cblxuLnBlci1wYWdlLXNlbGVjdCB7XG4gIHdpZHRoOiBhdXRvO1xuICBtaW4td2lkdGg6IDcycHg7XG4gIGJvcmRlci1jb2xvcjogI2RlZTJlNjtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucGVyLXBhZ2Utc2VsZWN0OmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiAjNWQ4N2ZmO1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSg5MywgMTM1LCAyNTUsIDAuMTUpO1xufVxuXG4ucGFnaW5hdGlvbiB7XG4gIC0tYnMtcGFnaW5hdGlvbi1wYWRkaW5nLXg6IDA7XG4gIC0tYnMtcGFnaW5hdGlvbi1wYWRkaW5nLXk6IDA7XG4gIC0tYnMtcGFnaW5hdGlvbi1ib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5wYWdlLWxpbmsge1xuICBib3JkZXI6IDJweCBzb2xpZCAjZTBlMGUwO1xuICBjb2xvcjogIzVhNmE4NTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgbWFyZ2luOiAwIDJweDtcbn1cblxuLnBhZ2UtbGluazpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY3ZmE7XG4gIGJvcmRlci1jb2xvcjogIzVkODdmZjtcbiAgY29sb3I6ICM1ZDg3ZmY7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoOTMsIDEzNSwgMjU1LCAwLjIpO1xufVxuXG4ucGFnZS1pdGVtLmFjdGl2ZSAucGFnZS1saW5rIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVkODdmZjtcbiAgYm9yZGVyLWNvbG9yOiAjNWQ4N2ZmO1xuICBjb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSg5MywgMTM1LCAyNTUsIDAuMyk7XG59XG5cbi5wYWdlLWl0ZW0uZGlzYWJsZWQgLnBhZ2UtbGluayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIGJvcmRlci1jb2xvcjogI2UwZTBlMDtcbiAgY29sb3I6ICNjY2M7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIG9wYWNpdHk6IDAuNjtcbn1cblxuLnBhZ2UtbGluazphY3RpdmUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xufVxuXG4ucGFnZS1uYXYtYnRuIHtcbiAgd2lkdGg6IDM4cHg7XG4gIGhlaWdodDogMzhweDtcbn1cblxuLmZpbHRlcnMtY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW0gIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjNzIGVhc2U7XG59XG4uZmlsdGVycy1jYXJkOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwLjVyZW0gMS41cmVtIHJnYmEoMCwgMCwgMCwgMC4xMikgIWltcG9ydGFudDtcbn1cbi5maWx0ZXJzLWNhcmQgLmNhcmQtYm9keSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmZmZmZmYgMCUsICNmOGY5ZmEgMTAwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG59XG4uZmlsdGVycy1jYXJkIC5jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBjb2xvcjogIzJjM2U1MDtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2U5ZWNlZjtcbn1cbi5maWx0ZXJzLWNhcmQgLmNhcmQtdGl0bGUgaSB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uZm9ybS1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGNvbG9yOiAjNDk1MDU3O1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG4uZm9ybS1sYWJlbCBpIHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4uaW5wdXQtZ3JvdXAgLmlucHV0LWdyb3VwLXRleHQge1xuICBib3JkZXItY29sb3I6ICNkZWUyZTY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG4uaW5wdXQtZ3JvdXAgLmZvcm0tY29udHJvbCxcbi5pbnB1dC1ncm91cCAuZm9ybS1zZWxlY3Qge1xuICBib3JkZXItY29sb3I6ICNkZWUyZTY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG4uaW5wdXQtZ3JvdXAgLmZvcm0tY29udHJvbDpmb2N1cyxcbi5pbnB1dC1ncm91cCAuZm9ybS1zZWxlY3Q6Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICM1ZDg3ZmY7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDkzLCAxMzUsIDI1NSwgMC4xNSk7XG59XG4uaW5wdXQtZ3JvdXAgLmZvcm0tY29udHJvbDo6cGxhY2Vob2xkZXIsXG4uaW5wdXQtZ3JvdXAgLmZvcm0tc2VsZWN0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjYWRiNWJkO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5mb3JtLXNlbGVjdCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLWNvbG9yOiAjZGVlMmU2O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuLmZvcm0tc2VsZWN0OmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiAjNWQ4N2ZmO1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSg5MywgMTM1LCAyNTUsIDAuMTUpO1xufVxuXG4uc29ydC1vcmRlciB7XG4gIG1heC13aWR0aDogODBweDtcbn1cblxuLmJ0biB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDAuNjI1cmVtIDEuMjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cbi5idG4gaSB7XG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM1ZDg3ZmYgMCUsICM0NTcwZWEgMTAwJSk7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDkzLCAxMzUsIDI1NSwgMC4zKTtcbn1cbi5idG4tcHJpbWFyeTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM0NTcwZWEgMCUsICMzNDYxZDkgMTAwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgYm94LXNoYWRvdzogMCA2cHggMTZweCByZ2JhKDkzLCAxMzUsIDI1NSwgMC40KTtcbn1cbi5idG4tcHJpbWFyeTphY3RpdmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG59XG5cbi5lbXB0eS1pY29uIHtcbiAgZm9udC1zaXplOiAzcmVtO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpIHtcbiAgLmZpbHRlcnMtY2FyZCAuY2FyZC1ib2R5IHtcbiAgICBwYWRkaW5nOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAuZmlsdGVycy1jYXJkIC5jYXJkLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcbiAgLnByb2R1aXRzLXBhZ2Utd3JhcHBlciB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTZweCk7XG4gIH1cbiAgLmZpbHRlcnMtY2FyZCAuY2FyZC1ib2R5IHtcbiAgICBwYWRkaW5nOiAxLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZpbHRlcnMtY2FyZCAuY2FyZC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG4gIC5maWx0ZXJzLWNhcmQgLmNhcmQtdGl0bGUgaSB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICB9XG4gIC5mb3JtLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDAuODEyNXJlbTtcbiAgfVxuICAuZC1mbGV4Lmp1c3RpZnktY29udGVudC1lbmQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLmQtZmxleC5qdXN0aWZ5LWNvbnRlbnQtZW5kIC5idG4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5wcm9kdWl0cy1wYWdpbmF0aW9uLWJhciAuZC1mbGV4IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDhweDtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 6196:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/firstValueFrom.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   firstValueFrom: () => (/* binding */ firstValueFrom)
/* harmony export */ });
/* harmony import */ var _util_EmptyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/EmptyError */ 3335);
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Subscriber */ 9285);


function firstValueFrom(source, config) {
  const hasConfig = typeof config === 'object';
  return new Promise((resolve, reject) => {
    const subscriber = new _Subscriber__WEBPACK_IMPORTED_MODULE_1__.SafeSubscriber({
      next: value => {
        resolve(value);
        subscriber.unsubscribe();
      },
      error: reject,
      complete: () => {
        if (hasConfig) {
          resolve(config.defaultValue);
        } else {
          reject(new _util_EmptyError__WEBPACK_IMPORTED_MODULE_0__.EmptyError());
        }
      }
    });
    source.subscribe(subscriber);
  });
}

/***/ }),

/***/ 6241:
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductService: () => (/* binding */ ProductService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ 3366);



class ProductService {
  constructor(api) {
    this.api = api;
  }
  // Récupérer tous les produits
  getAllProducts(params) {
    return this.api.get('/produits', {
      params
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(response => response));
  }
  // Récupérer un produit par ID
  getProductById(id) {
    return this.api.get(`/produits/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(response => response.data));
  }
  // Créer un nouveau produit
  createProduct(data) {
    const formData = new FormData();
    formData.append('nom', data.nom);
    if (data.description) {
      formData.append('description', data.description);
    }
    formData.append('boutiqueId', data.boutiqueId);
    formData.append('categorieId', data.categorieId);
    if (data.photo) {
      formData.append('profilePicture', data.photo);
    }
    return this.api.postFile('/produits', formData);
  }
  // Mettre à jour un produit
  updateProduct(id, data) {
    if (data.photo) {
      const formData = new FormData();
      formData.append('nom', data.nom || '');
      if (data.description) {
        formData.append('description', data.description);
      }
      if (data.boutiqueId) {
        formData.append('boutiqueId', data.boutiqueId);
      }
      if (data.categorieId) {
        formData.append('categorieId', data.categorieId);
      }
      formData.append('profilePicture', data.photo);
      return this.api.putFile(`/produits/${id}`, formData);
    } else {
      return this.api.put(`/produits/${id}`, data);
    }
  }
  // Supprimer un produit
  deleteProduct(id) {
    return this.api.delete(`/produits/${id}`);
  }
  // Récupérer les produits par shop
  getProductsByShop(shopId) {
    return this.api.get(`/produits?boutiqueId=${shopId}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(response => response));
  }
  // Récupérer le stock d'un produit
  getProductStock(productId) {
    return this.api.get(`/produits/${productId}/stock`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(response => response.data));
  }
  static {
    this.ɵfac = function ProductService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ProductService,
      factory: ProductService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_demo_pages_produits_produits_component_ts.js.map