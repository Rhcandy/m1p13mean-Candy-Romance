"use strict";
(self["webpackChunkfree_version"] = self["webpackChunkfree_version"] || []).push([["common"],{

/***/ 1040:
/*!********************************************************!*\
  !*** ./src/app/services/boutique-promotion.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BoutiquePromotionService: () => (/* binding */ BoutiquePromotionService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ 3366);


class BoutiquePromotionService {
  constructor(api) {
    this.api = api;
  }
  appendQueryParam(queryParams, key, value) {
    if (value === undefined || value === null || value === '') {
      return;
    }
    queryParams.append(key, String(value));
  }
  getMyBoutiquePromotions(params = {}) {
    const queryParams = new URLSearchParams();
    this.appendQueryParam(queryParams, 'page', params.page);
    this.appendQueryParam(queryParams, 'limit', params.limit);
    this.appendQueryParam(queryParams, 'categorie', params.categorie);
    const url = `/promotions/my-boutique${queryParams.toString() ? '?' + queryParams.toString() : ''}`;
    return this.api.get(url);
  }
  createMyBoutiquePromotion(promotionData) {
    return this.api.post('/promotions/my-boutique', promotionData);
  }
  updateMyBoutiquePromotion(id, promotionData) {
    return this.api.put(`/promotions/my-boutique/${id}`, promotionData);
  }
  deleteMyBoutiquePromotion(id) {
    return this.api.delete(`/promotions/my-boutique/${id}`);
  }
  static {
    this.ɵfac = function BoutiquePromotionService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BoutiquePromotionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BoutiquePromotionService,
      factory: BoutiquePromotionService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 1124:
/*!********************************************!*\
  !*** ./src/app/services/loyer.services.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoyerService: () => (/* binding */ LoyerService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 698);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1817);



class LoyerService {
  constructor(http) {
    this.http = http;
    this.apiUrl = 'http://localhost:3000/api/loyers';
    this.boutiques = []; // pour getBoutiqueNameFromLoyer
  }
  getAll(boutiqueId) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams();
    if (boutiqueId) params = params.set('boutiqueId', boutiqueId);
    return this.http.get(this.apiUrl, {
      params
    });
  }
  create(data) {
    return this.http.post(`${this.apiUrl}`, data);
  }
  update(id, data) {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }
  delete(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  // Helper functions
  getBoutiqueNameFromLoyer(loyer) {
    if (loyer.boutiqueId && typeof loyer.boutiqueId === 'object') return loyer.boutiqueId.nom;
    const b = this.boutiques.find(x => x._id === loyer.boutiqueId);
    return b ? b.nom : '—';
  }
  getTotalMontantPaye(loyer) {
    if (!loyer.details) return 0;
    return loyer.details.reduce((t, d) => t + (d.montantPaye || 0), 0);
  }
  getTotalRestePaye(loyer) {
    if (!loyer.details) return 0;
    return loyer.details.reduce((t, d) => t + (d.restePaye || 0), 0);
  }
  static {
    this.ɵfac = function LoyerService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LoyerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: LoyerService,
      factory: LoyerService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 1317:
/*!**************************************************!*\
  !*** ./src/app/services/admin-center.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminCenterService: () => (/* binding */ AdminCenterService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ 3366);



class AdminCenterService {
  constructor(api) {
    this.api = api;
  }
  getBoxes(options) {
    const query = new URLSearchParams();
    query.set('page', String(options?.page ?? 1));
    query.set('limit', String(options?.limit ?? 100));
    query.set('sort', '-createdAt');
    if (options?.numRefSearch?.trim()) {
      query.set('numRef[regex]', options.numRefSearch.trim());
      query.set('numRef[options]', 'i');
    }
    if (typeof options?.isDisponible === 'boolean') {
      query.set('isDisponible', String(options.isDisponible));
    }
    return this.api.get(`/boxes?${query.toString()}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(response => ({
      items: response?.items || [],
      pagination: response?.pagination || {
        totalDocs: 0,
        totalPages: 0,
        page: 1,
        limit: options?.limit ?? 100
      }
    })));
  }
  createBox(payload) {
    return this.api.post('/boxes', payload);
  }
  updateBox(id, payload) {
    return this.api.put(`/boxes/${id}`, payload);
  }
  deleteBox(id) {
    return this.api.delete(`/boxes/${id}`);
  }
  getTypeBoxes(limit = 200) {
    return this.api.get(`/typebox?page=1&limit=${limit}&sort=nom`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(response => response?.items || []));
  }
  getBoutiques(options) {
    const query = new URLSearchParams();
    query.set('page', String(options?.page ?? 1));
    query.set('limit', String(options?.limit ?? 100));
    query.set('sort', '-createdAt');
    const status = options?.status ?? 'all';
    if (status === 'active') {
      query.set('isActive', 'true');
    } else if (status === 'inactive') {
      query.set('isActive', 'false');
    } else if (status === 'pending') {
      query.set('isPendingFirstActivation', 'true');
      query.set('isActive', 'false');
    }
    if (options?.nameSearch?.trim()) {
      query.set('nom[regex]', options.nameSearch.trim());
      query.set('nom[options]', 'i');
    }
    console.log('Query boutiques:', query.toString());
    return this.api.get(`/boutiques?${query.toString()}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(response => ({
      items: response?.items || [],
      pagination: response?.pagination || {
        totalDocs: 0,
        totalPages: 0,
        page: 1,
        limit: options?.limit ?? 100
      }
    })));
  }
  activateBoutique(id) {
    return this.api.patch(`/boutiques/${id}/activate`, {});
  }
  deleteBoutique(id) {
    return this.api.delete(`/boutiques/${id}`);
  }
  getLoyers(options) {
    const query = new URLSearchParams();
    query.set('page', String(options?.page ?? 1));
    query.set('limit', String(options?.limit ?? 100));
    query.set('sort', '-createdAt');
    if (options?.boutiqueId) {
      query.set('boutiqueId', options.boutiqueId);
    }
    return this.api.get(`/loyers?${query.toString()}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(response => ({
      items: response?.items || [],
      pagination: response?.pagination || {
        totalDocs: 0,
        totalPages: 0,
        page: 1,
        limit: options?.limit ?? 100
      }
    })));
  }
  createLoyer(payload) {
    return this.api.post('/loyers', payload);
  }
  updateLoyer(id, payload) {
    return this.api.put(`/loyers/${id}`, payload);
  }
  deleteLoyer(id) {
    return this.api.delete(`/loyers/${id}`);
  }
  static {
    this.ɵfac = function AdminCenterService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdminCenterService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AdminCenterService,
      factory: AdminCenterService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 2309:
/*!*******************************************************!*\
  !*** ./src/app/services/categorie-produit.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategorieProduitService: () => (/* binding */ CategorieProduitService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ 3366);



class CategorieProduitService {
  constructor(api) {
    this.api = api;
  }
  getAllCategories() {
    return this.api.get('/categories-produit').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(response => response?.data || []));
  }
  static {
    this.ɵfac = function CategorieProduitService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CategorieProduitService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: CategorieProduitService,
      factory: CategorieProduitService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 6104:
/*!******************************************************!*\
  !*** ./src/app/services/boutique-produit.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BoutiqueProduitService: () => (/* binding */ BoutiqueProduitService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ 3366);


class BoutiqueProduitService {
  constructor(api) {
    this.api = api;
  }
  appendQueryParam(queryParams, key, value) {
    if (value === undefined || value === null || value === '') {
      return;
    }
    if (Array.isArray(value)) {
      value.forEach(item => this.appendQueryParam(queryParams, key, item));
      return;
    }
    if (typeof value === 'object') {
      Object.entries(value).forEach(([nestedKey, nestedValue]) => {
        this.appendQueryParam(queryParams, `${key}[${nestedKey}]`, nestedValue);
      });
      return;
    }
    queryParams.append(key, String(value));
  }
  getMyBoutiqueProduits(params = {}) {
    const queryParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      this.appendQueryParam(queryParams, key, value);
    });
    const url = `/produits${queryParams.toString() ? '?' + queryParams.toString() : ''}`;
    return this.api.get(url);
  }
  createMyBoutiqueProduit(produitData) {
    return this.api.postFile('/produits', produitData);
  }
  updateMyBoutiqueProduit(id, produitData) {
    return this.api.putFile(`/produits/${id}`, produitData);
  }
  deleteMyBoutiqueProduit(id) {
    return this.api.delete(`/produits/${id}`);
  }
  updateProduitPromotions(id, promotionIds) {
    return this.api.put(`/produits/${id}/promotions`, {
      promotionIds
    });
  }
  createStockEntry(id, payload) {
    return this.api.post(`/produits/${id}/stock-entry`, payload);
  }
  static {
    this.ɵfac = function BoutiqueProduitService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BoutiqueProduitService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BoutiqueProduitService,
      factory: BoutiqueProduitService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 6334:
/*!*********************************************!*\
  !*** ./src/app/services/favoris.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FavorisService: () => (/* binding */ FavorisService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ 3366);



class FavorisService {
  constructor(apiService) {
    this.apiService = apiService;
    this.endpoint = '/favoris';
  }
  getFavoris() {
    return this.apiService.get(this.endpoint).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(response => response.data || []));
  }
  isFavori(produitId) {
    return this.apiService.get(`${this.endpoint}/${produitId}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(response => response.data?.isFavori ?? false));
  }
  addFavori(produitId) {
    return this.apiService.post(`${this.endpoint}/${produitId}`, {}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(response => response.data || []));
  }
  removeFavori(produitId) {
    return this.apiService.delete(`${this.endpoint}/${produitId}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(response => response.data || []));
  }
  static {
    this.ɵfac = function FavorisService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FavorisService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: FavorisService,
      factory: FavorisService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 8807:
/*!*******************************************************!*\
  !*** ./src/app/services/boutique-commande.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BoutiqueCommandeService: () => (/* binding */ BoutiqueCommandeService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ 3366);


class BoutiqueCommandeService {
  constructor(api) {
    this.api = api;
  }
  getMyBoutiqueCommandes(params) {
    const queryParams = new URLSearchParams();
    if (params?.page) queryParams.append('page', params.page.toString());
    if (params?.limit) queryParams.append('limit', params.limit.toString());
    if (params?.statut) queryParams.append('statut', params.statut);
    if (params?.dateDebut) queryParams.append('dateDebut', params.dateDebut);
    if (params?.dateFin) queryParams.append('dateFin', params.dateFin);
    if (params?.isPaye !== undefined) queryParams.append('isPaye', params.isPaye.toString());
    const url = `/commandes-boutique/my-boutique${queryParams.toString() ? '?' + queryParams.toString() : ''}`;
    return this.api.get(url);
  }
  getMyBoutiqueCommandeById(id) {
    return this.api.get(`/commandes-boutique/my-boutique/${id}`);
  }
  getMyBoutiqueStatistiques(params) {
    const queryParams = new URLSearchParams();
    if (params?.periode) queryParams.append('periode', params.periode);
    if (params?.dateDebut) queryParams.append('dateDebut', params.dateDebut);
    if (params?.dateFin) queryParams.append('dateFin', params.dateFin);
    const url = `/commandes-boutique/my-boutique/statistiques${queryParams.toString() ? '?' + queryParams.toString() : ''}`;
    return this.api.get(url);
  }
  static {
    this.ɵfac = function BoutiqueCommandeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BoutiqueCommandeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BoutiqueCommandeService,
      factory: BoutiqueCommandeService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 9885:
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserService: () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ 3366);


class UserService {
  constructor(api) {
    this.api = api;
  }
  getProfile() {
    return this.api.get('/users/profile');
  }
  getUserById(id) {
    return this.api.get(`/users/${id}`);
  }
  updateProfile(payload) {
    return this.api.put('/users/profile', payload);
  }
  updateProfileWithPicture(formData) {
    return this.api.putFile('/users/profile/with-profile', formData);
  }
  updateProfilePicture(file) {
    const formData = new FormData();
    formData.append('photo', file);
    return this.api.putFile('/users/profile-picture', formData);
  }
  static {
    this.ɵfac = function UserService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserService,
      factory: UserService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=common.js.map