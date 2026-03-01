"use strict";
(self["webpackChunkfree_version"] = self["webpackChunkfree_version"] || []).push([["src_app_demo_pages_product-detail_product-detail-page_component_ts"],{

/***/ 7071:
/*!****************************************************************************!*\
  !*** ./src/app/demo/pages/product-detail/product-detail-page.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductDetailPageComponent: () => (/* binding */ ProductDetailPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 6264);
/* harmony import */ var _components_product_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/product/product-detail/product-detail.component */ 9081);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6124);




class ProductDetailPageComponent {
  constructor() {}
  static {
    this.ɵfac = function ProductDetailPageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ProductDetailPageComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: ProductDetailPageComponent,
      selectors: [["app-product-detail-page"]],
      decls: 2,
      vars: 0,
      consts: [[1, "product-detail-page"]],
      template: function ProductDetailPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-product-detail");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule, _components_product_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_2__.ProductDetailComponent],
      styles: [".product-detail-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background-color: #f8f9fa;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVtby9wYWdlcy9wcm9kdWN0LWRldGFpbC9wcm9kdWN0LWRldGFpbC1wYWdlLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vV2ViJTIwYXZhbmNlL20xcDEzbWVhbi1DYW5keS1Sb21hbmNlL2Zyb250ZW5kL3NyYy9hcHAvZGVtby9wYWdlcy9wcm9kdWN0LWRldGFpbC9wcm9kdWN0LWRldGFpbC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtBQ0NGIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3QtZGV0YWlsLXBhZ2Uge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbn1cclxuIiwiLnByb2R1Y3QtZGV0YWlsLXBhZ2Uge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 7677:
/*!******************************************!*\
  !*** ./src/app/services/avis.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AvisService: () => (/* binding */ AvisService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 698);




class AvisService {
  constructor(http) {
    this.http = http;
    this.apiUrl = 'http://localhost:3000/api/avis';
  }
  getAvisByProduit(produitId) {
    return this.http.get(`${this.apiUrl}/produit/${produitId}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => response.data || []), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)([])));
  }
  createAvis(avis) {
    return this.http.post(`${this.apiUrl}`, avis).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => response.data), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(null)));
  }
  updateAvis(id, avis) {
    return this.http.put(`${this.apiUrl}/${id}`, avis).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => response.data), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(null)));
  }
  deleteAvis(id) {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(() => true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(false)));
  }
  canReview(produitId) {
    return this.http.get(`${this.apiUrl}/produit/${produitId}/can-review`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => response.data?.canReview ?? false), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(false)));
  }
  hasUserReviewed(produitId) {
    return this.http.get(`${this.apiUrl}/produit/${produitId}/has-reviewed`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => response.data?.hasReviewed ?? false), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(false)));
  }
  formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays === 0) {
      return "Aujourd'hui";
    } else if (diffDays === 1) {
      return 'Hier';
    } else if (diffDays < 7) {
      return `Il y a ${diffDays} jours`;
    } else if (diffDays < 30) {
      const weeks = Math.floor(diffDays / 7);
      return `Il y a ${weeks} semaine${weeks > 1 ? 's' : ''}`;
    } else if (diffDays < 365) {
      const months = Math.floor(diffDays / 30);
      return `Il y a ${months} mois`;
    } else {
      const years = Math.floor(diffDays / 365);
      return `Il y a ${years} an${years > 1 ? 's' : ''}`;
    }
  }
  getStars(rating) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(1);
      } else if (i - 0.5 <= rating) {
        stars.push(0.5);
      } else {
        stars.push(0);
      }
    }
    return stars;
  }
  static {
    this.ɵfac = function AvisService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AvisService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: AvisService,
      factory: AvisService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 8129:
/*!***************************************************!*\
  !*** ./src/app/components/avis/avis.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AvisComponent: () => (/* binding */ AvisComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ 8130);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 1873);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _services_avis_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/avis.service */ 7677);
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/notification.service */ 7473);









const _c0 = () => [1, 2, 3, 4, 5];
const _forTrack0 = ($index, $item) => $item._id;
function AvisComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Chargement des avis...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function AvisComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 3)(1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Aucun avis pour le moment");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Soyez le premier a partager votre experience avec ce produit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AvisComponent_Conditional_3_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.openReviewForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Ecrire un avis");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
}
function AvisComponent_Conditional_4_For_2_For_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "i", 29);
  }
  if (rf & 2) {
    const star_r3 = ctx.$implicit;
    const review_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("ti-star-filled", star_r3 <= review_r4.note)("ti-star", star_r3 > review_r4.note);
  }
}
function AvisComponent_Conditional_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 14)(1, "div", 16)(2, "div", 17)(3, "div", 18)(4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 20)(7, "h4", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 22)(10, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterCreate"](11, AvisComponent_Conditional_4_For_2_For_12_Template, 1, 4, "i", 24, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 27)(17, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const review_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("@itemAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.getInitials(ctx_r1.getUserName(review_r4)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.getUserName(review_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeater"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.formatDate(review_r4.createdAt), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](review_r4.commentaire);
  }
}
function AvisComponent_Conditional_4_Conditional_3_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AvisComponent_Conditional_4_Conditional_3_For_5_Template_button_click_0_listener() {
      const page_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.changePage(page_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const page_r7 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", page_r7 === ctx_r1.currentPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", "Aller a la page " + page_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", page_r7, " ");
  }
}
function AvisComponent_Conditional_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 15)(1, "div", 30)(2, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AvisComponent_Conditional_4_Conditional_3_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.changePage(ctx_r1.currentPage - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterCreate"](4, AvisComponent_Conditional_4_Conditional_3_For_5_Template, 2, 4, "button", 33, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AvisComponent_Conditional_4_Conditional_3_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.changePage(ctx_r1.currentPage + 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r1.currentPage === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeater"](ctx_r1.getPagesArray());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
  }
}
function AvisComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterCreate"](1, AvisComponent_Conditional_4_For_2_Template, 19, 6, "div", 14, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](3, AvisComponent_Conditional_4_Conditional_3_Template, 8, 2, "div", 15);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeater"](ctx_r1.filteredAvis);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx_r1.totalPages > 1 ? 3 : -1);
  }
}
function AvisComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.reviewError);
  }
}
function AvisComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Verification des conditions...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AvisComponent_Conditional_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AvisComponent_Conditional_8_Conditional_0_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.openReviewForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Ajouter un avis");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function AvisComponent_Conditional_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 38)(1, "div", 40)(2, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Note *");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "select", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function AvisComponent_Conditional_8_Conditional_1_Template_select_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r1.reviewNote, $event) || (ctx_r1.reviewNote = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Selectionner une note");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "5 - Excellent");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "4 - Tres bien");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "3 - Bien");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "2 - Moyen");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "1 - Mauvais");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 40)(18, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Commentaire *");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "textarea", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function AvisComponent_Conditional_8_Conditional_1_Template_textarea_ngModelChange_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r1.reviewComment, $event) || (ctx_r1.reviewComment = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 46)(22, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AvisComponent_Conditional_8_Conditional_1_Template_button_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.submitReview());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AvisComponent_Conditional_8_Conditional_1_Template_button_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.showReviewForm = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, " Annuler ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.reviewNote);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.reviewComment);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r1.submittingReview);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.submittingReview ? "Envoi..." : "Publier l'avis", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r1.submittingReview);
  }
}
function AvisComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](0, AvisComponent_Conditional_8_Conditional_0_Template, 4, 0, "button", 37)(1, AvisComponent_Conditional_8_Conditional_1_Template, 26, 11, "div", 38);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](!ctx_r1.showReviewForm ? 0 : 1);
  }
}
function AvisComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Vous avez deja laisse un avis pour ce produit.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AvisComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Vous devez avoir commande ce produit pour laisser un avis.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AvisComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Connectez-vous pour laisser un avis.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
class AvisComponent {
  get filteredAvis() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.avis.slice(startIndex, endIndex);
  }
  constructor(avisService, notificationService) {
    this.avisService = avisService;
    this.notificationService = notificationService;
    this.cdr = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef);
    this.produitId = '';
    this.currentUserId = '';
    this.currentUserName = '';
    this.avis = [];
    this.loading = false;
    this.checkingEligibility = false;
    this.canReview = false;
    this.hasReviewed = false;
    this.showReviewForm = false;
    this.submittingReview = false;
    this.reviewNote = 0;
    this.reviewComment = '';
    this.reviewError = '';
    this.currentPage = 1;
    this.itemsPerPage = 5;
    this.totalPages = 1;
  }
  ngOnInit() {
    if (!this.avis || this.avis.length === 0) {
      this.loadAvis();
    } else {
      this.calculatePagination();
    }
    this.loadEligibility();
  }
  loadAvis() {
    if (!this.produitId) {
      console.warn('produitId non fourni, impossible de charger les avis');
      return;
    }
    this.loading = true;
    this.avisService.getAvisByProduit(this.produitId).subscribe({
      next: response => {
        this.avis = response.map(avis => ({
          _id: avis._id,
          userId: typeof avis.userId === 'string' ? avis.userId : avis.userId?._id,
          userName: typeof avis.userId === 'string' ? undefined : avis.userId?.nom,
          produitId: avis.produitId,
          note: avis.note,
          commentaire: avis.commentaire,
          createdAt: avis.createdAt,
          updatedAt: avis.updatedAt
        }));
        this.calculatePagination();
        this.loading = false;
        Promise.resolve().then(() => {
          this.cdr.detectChanges();
        });
      },
      error: error => {
        console.error('Erreur lors du chargement des avis:', error);
        this.avis = [];
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }
  loadEligibility() {
    if (!this.produitId || !this.currentUserId) {
      this.canReview = false;
      this.hasReviewed = false;
      return;
    }
    this.checkingEligibility = true;
    (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.forkJoin)({
      canReview: this.avisService.canReview(this.produitId),
      hasReviewed: this.avisService.hasUserReviewed(this.produitId)
    }).subscribe({
      next: ({
        canReview,
        hasReviewed
      }) => {
        this.canReview = canReview;
        this.hasReviewed = hasReviewed;
        this.checkingEligibility = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.canReview = false;
        this.hasReviewed = false;
        this.checkingEligibility = false;
        this.cdr.detectChanges();
      }
    });
  }
  getUserName(review) {
    if (review.userName) return review.userName;
    if (review.userId === this.currentUserId && this.currentUserName) {
      return this.currentUserName;
    }
    const mockUsers = {
      'user1': 'Marie Dupont',
      'user2': 'Jean Martin',
      'user3': 'Sophie Bernard',
      'user4': 'Pierre Durand',
      'user5': 'Amelie Rousseau'
    };
    return mockUsers[review.userId] || 'Utilisateur';
  }
  getAverageRating() {
    if (!this.avis || this.avis.length === 0) return 0;
    const sum = this.avis.reduce((total, review) => total + review.note, 0);
    return Math.round(sum / this.avis.length * 10) / 10;
  }
  getRatingCount(rating) {
    if (!this.avis) return 0;
    return this.avis.filter(review => review.note === rating).length;
  }
  calculatePagination() {
    this.totalPages = Math.ceil(this.avis.length / this.itemsPerPage) || 1;
  }
  changePage(page) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
  getPagesArray() {
    return Array.from({
      length: this.totalPages
    }, (_, i) => i + 1);
  }
  formatDate(dateString) {
    return this.avisService.formatDate(dateString);
  }
  getInitials(nom) {
    if (!nom) return '?';
    const parts = nom.trim().split(' ');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return nom.substring(0, 2).toUpperCase();
  }
  canEdit(review) {
    return review.userId === this.currentUserId;
  }
  openReviewForm() {
    if (!this.currentUserId) {
      this.notificationService.warning('Attention !', 'Veuillez vous connecter pour laisser un avis.');
      return;
    }
    if (!this.canReview) {
      this.notificationService.warning('Attention !', 'Vous devez avoir commandé ce produit pour laisser un avis.');
      return;
    }
    if (this.hasReviewed) {
      this.notificationService.warning('Vous avez déjà laissé un avis pour ce produit.');
      return;
    }
    this.showReviewForm = true;
  }
  submitReview() {
    if (!this.reviewNote || this.reviewNote < 1 || this.reviewNote > 5) {
      this.notificationService.warning('Attention !', 'Veuillez sélectionner une note entre 1 et 5.');
      return;
    }
    if (!this.reviewComment || !this.reviewComment.trim()) {
      this.notificationService.warning('Attention !', 'Veuillez ajouter un commentaire.');
      return;
    }
    this.submittingReview = true;
    this.avisService.createAvis({
      produitId: this.produitId,
      note: this.reviewNote,
      commentaire: this.reviewComment.trim()
    }).subscribe({
      next: avis => {
        this.submittingReview = false;
        if (!avis) {
          this.reviewError = 'Impossible d\'ajouter l\'avis.';
          this.cdr.detectChanges();
          return;
        }
        const newAvis = {
          _id: avis._id,
          userId: typeof avis.userId === 'string' ? avis.userId : avis.userId?._id,
          userName: typeof avis.userId === 'string' ? this.currentUserName || undefined : avis.userId?.nom,
          produitId: avis.produitId,
          note: avis.note,
          commentaire: avis.commentaire,
          createdAt: avis.createdAt,
          updatedAt: avis.updatedAt
        };
        this.avis.unshift(newAvis);
        this.calculatePagination();
        this.hasReviewed = true;
        this.showReviewForm = false;
        this.reviewNote = 0;
        this.reviewComment = '';
        this.cdr.detectChanges();
      },
      error: () => {
        this.submittingReview = false;
        this.reviewError = 'Erreur lors de l\'ajout de l\'avis.';
        this.cdr.detectChanges();
      }
    });
  }
  static {
    this.ɵfac = function AvisComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AvisComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_avis_service__WEBPACK_IMPORTED_MODULE_7__.AvisService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_8__.NotificationService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: AvisComponent,
      selectors: [["app-avis"]],
      inputs: {
        produitId: "produitId",
        currentUserId: "currentUserId",
        currentUserName: "currentUserName",
        avis: "avis"
      },
      decls: 12,
      vars: 4,
      consts: [[1, "avis-container"], [1, "avis-body"], [1, "loading-state"], [1, "empty-state"], [1, "write-review-section"], [1, "alert", "alert-warning", "mb-3"], [1, "text-muted", "small", "mb-2"], [1, "text-muted"], [1, "spinner"], [1, "empty-icon"], [1, "ti", "ti-message-off"], [1, "btn-write-review-large", 3, "click"], [1, "ti", "ti-pencil"], [1, "avis-list"], [1, "avis-card"], [1, "pagination-container"], [1, "review-header"], [1, "user-info"], [1, "user-avatar"], [1, "avatar-placeholder"], [1, "user-details"], [1, "user-name"], [1, "review-meta"], [1, "rating-display"], [1, "ti", 3, "ti-star-filled", "ti-star"], [1, "review-date"], [1, "ti", "ti-calendar"], [1, "review-content"], [1, "review-text"], [1, "ti"], [1, "pagination"], ["title", "Page precedente", 1, "page-btn", 3, "click", "disabled"], [1, "ti", "ti-chevron-left"], [1, "page-btn", 3, "active", "title"], ["title", "Page suivante", 1, "page-btn", 3, "click", "disabled"], [1, "ti", "ti-chevron-right"], [1, "page-btn", 3, "click", "title"], [1, "btn-write-review"], [1, "review-form"], [1, "btn-write-review", 3, "click"], [1, "form-group", "mb-3"], ["for", "reviewNote"], ["id", "reviewNote", "name", "reviewNote", 1, "form-control", 3, "ngModelChange", "ngModel"], [3, "ngValue"], ["for", "reviewComment"], ["id", "reviewComment", "name", "reviewComment", "rows", "4", "placeholder", "Partagez votre experience...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "d-flex", "gap-2"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "btn", "btn-outline-secondary", 3, "click", "disabled"]],
      template: function AvisComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](2, AvisComponent_Conditional_2_Template, 4, 0, "div", 2)(3, AvisComponent_Conditional_3_Template, 11, 0, "div", 3)(4, AvisComponent_Conditional_4_Template, 4, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](6, AvisComponent_Conditional_6_Template, 2, 1, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](7, AvisComponent_Conditional_7_Template, 2, 0, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](8, AvisComponent_Conditional_8_Template, 2, 1)(9, AvisComponent_Conditional_9_Template, 2, 0, "div", 7)(10, AvisComponent_Conditional_10_Template, 2, 0, "div", 7)(11, AvisComponent_Conditional_11_Template, 2, 0, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx.loading ? 2 : !ctx.avis || ctx.avis.length === 0 ? 3 : 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx.reviewError ? 6 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx.checkingEligibility ? 7 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx.canReview && !ctx.hasReviewed ? 8 : ctx.hasReviewed ? 9 : ctx.currentUserId ? 10 : 11);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel],
      styles: [".avis-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 2rem 1rem;\n}\n\n.avis-header[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.avis-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  padding: 2rem;\n  background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);\n  border-radius: 1.5rem;\n  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.2);\n}\n.avis-header[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin: 0 0 2rem 0;\n  font-size: 2rem;\n  font-weight: 800;\n  color: white;\n}\n.avis-header[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n}\n\n.stats-summary[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  gap: 3rem;\n  align-items: center;\n}\n@media (max-width: 768px) {\n  .stats-summary[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 2rem;\n  }\n}\n\n.average-rating[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1.5rem;\n  background: rgba(255, 255, 255, 0.15);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  border: 2px solid rgba(255, 255, 255, 0.2);\n  border-radius: 1rem;\n}\n.average-rating[_ngcontent-%COMP%]   .rating-number[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  font-weight: 900;\n  color: white;\n  line-height: 1;\n}\n.average-rating[_ngcontent-%COMP%]   .rating-stars[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.25rem;\n}\n.average-rating[_ngcontent-%COMP%]   .rating-stars[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: #fbbf24;\n}\n.average-rating[_ngcontent-%COMP%]   .rating-count[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.9);\n  font-size: 0.875rem;\n  font-weight: 600;\n}\n\n.rating-bars[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n\n.rating-bar-item[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto auto 1fr auto;\n  align-items: center;\n  gap: 0.75rem;\n}\n.rating-bar-item[_ngcontent-%COMP%]   .rating-label[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 0.875rem;\n  font-weight: 600;\n  width: 1rem;\n}\n.rating-bar-item[_ngcontent-%COMP%]   .star-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #fbbf24;\n}\n.rating-bar-item[_ngcontent-%COMP%]   .bar-container[_ngcontent-%COMP%] {\n  height: 0.5rem;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 1rem;\n  overflow: hidden;\n  min-width: 200px;\n}\n.rating-bar-item[_ngcontent-%COMP%]   .bar-container[_ngcontent-%COMP%]   .bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: linear-gradient(90deg, #fbbf24 0%, rgb(231.7668161435, 168.269058296, 4.2331838565) 100%);\n  border-radius: 1rem;\n  transition: width 0.5s ease;\n}\n.rating-bar-item[_ngcontent-%COMP%]   .rating-percent[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 0.875rem;\n  font-weight: 600;\n  min-width: 2rem;\n  text-align: right;\n}\n\n.filters-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 2rem;\n  padding: 1.5rem;\n  background: #ffffff;\n  border: 2px solid #e5e7eb;\n  border-radius: 1rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n}\n@media (max-width: 768px) {\n  .filters-bar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n}\n\n.filter-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n\n.filter-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.625rem 1rem;\n  background: #f9fafb;\n  border: 2px solid transparent;\n  border-radius: 0.75rem;\n  color: #6b7280;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.filter-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #fbbf24;\n}\n.filter-btn[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  padding: 0.125rem 0.5rem;\n  background: #f3f4f6;\n  border-radius: 1rem;\n  color: #1f2937;\n  font-size: 0.75rem;\n}\n.filter-btn[_ngcontent-%COMP%]:hover {\n  background: #ffffff;\n  border-color: #6366f1;\n  color: #6366f1;\n}\n.filter-btn.active[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);\n  border-color: #4f46e5;\n  color: white;\n}\n.filter-btn.active[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  color: white;\n}\n.filter-btn.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.sort-select[_ngcontent-%COMP%] {\n  padding: 0.625rem 1rem;\n  background: #ffffff;\n  border: 2px solid #e5e7eb;\n  border-radius: 0.75rem;\n  color: #1f2937;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.sort-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #6366f1;\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);\n}\n\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n}\n.loading-state[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border: 4px solid #e5e7eb;\n  border-top-color: #6366f1;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  color: #6b7280;\n  font-size: 1.125rem;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 4rem 2rem;\n  text-align: center;\n}\n.empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 2rem;\n  background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);\n  border-radius: 50%;\n}\n.empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  color: #9ca3af;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem;\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: #1f2937;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n  color: #6b7280;\n  font-size: 1.125rem;\n}\n\n.avis-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-bottom: 2rem;\n}\n\n.avis-card[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n  background: #ffffff;\n  border: 2px solid #e5e7eb;\n  border-radius: 1rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n  transition: all 0.3s ease;\n}\n.avis-card[_ngcontent-%COMP%]:hover {\n  border-color: rgb(202.7739130435, 206.7913043478, 214.8260869565);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n  transform: translateY(-1px);\n}\n\n.review-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 1rem;\n}\n@media (max-width: 576px) {\n  .review-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n  }\n}\n\n.user-info[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n\n.user-avatar[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.user-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.avatar-placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);\n  color: white;\n  font-size: 1rem;\n  font-weight: 700;\n}\n\n.user-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n.user-name[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #1f2937;\n}\n\n.review-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n\n.rating-display[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.25rem;\n}\n.rating-display[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.rating-display[_ngcontent-%COMP%]   i.ti-star-filled[_ngcontent-%COMP%] {\n  color: #fbbf24;\n}\n.rating-display[_ngcontent-%COMP%]   i.ti-star[_ngcontent-%COMP%] {\n  color: #e5e7eb;\n}\n\n.review-date[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n  color: #9ca3af;\n  font-size: 0.875rem;\n}\n.review-date[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n\n.verified-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(5, 150, 105, 0.1) 100%);\n  border: 2px solid rgba(16, 185, 129, 0.3);\n  border-radius: 2rem;\n  color: #10b981;\n  font-size: 0.875rem;\n  font-weight: 600;\n}\n.verified-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n\n.review-content[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.review-text[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #1f2937;\n  font-size: 0.9375rem;\n  line-height: 1.6;\n}\n\n.review-images[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n\n.review-image[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  border-radius: 0.75rem;\n  overflow: hidden;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.review-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.review-image[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);\n}\n\n.review-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid #e5e7eb;\n  flex-wrap: wrap;\n}\n\n.action-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  background: transparent;\n  border: 2px solid #e5e7eb;\n  border-radius: 0.75rem;\n  color: #6b7280;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.action-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n}\n.action-btn[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  font-size: 0.8125rem;\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  background: #f9fafb;\n  border-color: #6366f1;\n  color: #6366f1;\n}\n.action-btn.active[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(79, 70, 229, 0.1) 100%);\n  border-color: #6366f1;\n  color: #6366f1;\n}\n.action-btn.danger[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.1);\n  border-color: #ef4444;\n  color: #ef4444;\n}\n\n.vendor-response[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  padding: 1.5rem;\n  background: linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(79, 70, 229, 0.05) 100%);\n  border-left: 4px solid #6366f1;\n  border-radius: 0.75rem;\n}\n\n.response-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 0.75rem;\n  color: #6366f1;\n  font-size: 0.875rem;\n  font-weight: 700;\n}\n.response-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.response-header[_ngcontent-%COMP%]   .response-date[_ngcontent-%COMP%] {\n  margin-left: auto;\n  color: #9ca3af;\n  font-weight: 600;\n}\n\n.response-text[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #1f2937;\n  font-size: 0.9375rem;\n  line-height: 1.6;\n}\n\n.pagination-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 2rem 0;\n}\n\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\n\n.page-btn[_ngcontent-%COMP%] {\n  min-width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 0.75rem;\n  background: #ffffff;\n  border: 2px solid #e5e7eb;\n  border-radius: 0.75rem;\n  color: #1f2937;\n  font-size: 0.9375rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.page-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n}\n.page-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f9fafb;\n  border-color: #6366f1;\n  color: #6366f1;\n}\n.page-btn.active[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);\n  border-color: #4f46e5;\n  color: white;\n}\n.page-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n\n.write-review-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 2rem;\n}\n\n.btn-write-review[_ngcontent-%COMP%], \n.btn-write-review-large[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem 2rem;\n  background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);\n  border: none;\n  border-radius: 0.75rem;\n  color: white;\n  font-size: 1rem;\n  font-weight: 700;\n  cursor: pointer;\n  box-shadow: 0 8px 20px rgba(99, 102, 241, 0.3);\n  transition: all 0.3s ease;\n}\n.btn-write-review[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.btn-write-review-large[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.btn-write-review[_ngcontent-%COMP%]:hover, \n.btn-write-review-large[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 12px 28px rgba(99, 102, 241, 0.4);\n}\n.btn-write-review[_ngcontent-%COMP%]:active, \n.btn-write-review-large[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n\n.btn-write-review-large[_ngcontent-%COMP%] {\n  padding: 1.25rem 3rem;\n  font-size: 1.125rem;\n}\n\n@media (max-width: 768px) {\n  .avis-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .avis-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n  .avis-header[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .avis-header[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .rating-bar-item[_ngcontent-%COMP%]   .bar-container[_ngcontent-%COMP%] {\n    min-width: 100px;\n  }\n  .avis-card[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .filter-buttons[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .filter-buttons[_ngcontent-%COMP%]   .filter-btn[_ngcontent-%COMP%] {\n    flex: 1;\n    justify-content: center;\n  }\n}\n@media (max-width: 576px) {\n  .review-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n    flex: 1;\n    justify-content: center;\n    min-width: calc(50% - 0.5rem);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hdmlzL2F2aXMuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi9XZWIlMjBhdmFuY2UvbTFwMTNtZWFuLUNhbmR5LVJvbWFuY2UvZnJvbnRlbmQvc3JjL2FwcC9jb21wb25lbnRzL2F2aXMvYXZpcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQkE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ2pCRjs7QURxQkE7RUFDRSxtQkFBQTtBQ2xCRjtBRG9CRTtFQUNFLGFBQUE7RUFDQSw2REFBQTtFQUNBLHFCQUFBO0VBQ0EsK0NBQUE7QUNsQko7QURxQkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDbkJKO0FEcUJJO0VBQ0UsaUJBQUE7QUNuQk47O0FEeUJBO0VBQ0UsYUFBQTtFQUNBLCtCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FDdEJGO0FEd0JFO0VBTkY7SUFPSSwwQkFBQTtJQUNBLFNBQUE7RUNyQkY7QUFDRjs7QUR3QkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EscUNBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsMENBQUE7RUFDQSxtQkFBQTtBQ3JCRjtBRHVCRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDckJKO0FEd0JFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUN0Qko7QUR3Qkk7RUFDRSxpQkFBQTtFQUNBLGNBeEVPO0FDa0RiO0FEMEJFO0VBQ0UsK0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDeEJKOztBRDRCQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUN6QkY7O0FENEJBO0VBQ0UsYUFBQTtFQUNBLHlD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QUFBO0lBQ0EsdUJBQUE7RUNuRko7QUFDRjtBRHVGQTtFQUVJO0lBQ0UsT0FBQTtJQUNBLHVCQUFBO0lBQ0EsNkJBQUE7RUN0Rko7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgXCJzYXNzOmNvbG9yXCI7XHJcblxyXG4vLyBWYXJpYWJsZXNcclxuJHByaW1hcnktY29sb3I6ICM2MzY2ZjE7XHJcbiRwcmltYXJ5LWRhcms6ICM0ZjQ2ZTU7XHJcbiRzdWNjZXNzLWNvbG9yOiAjMTBiOTgxO1xyXG4kd2FybmluZy1jb2xvcjogI2Y1OWUwYjtcclxuJGRhbmdlci1jb2xvcjogI2VmNDQ0NDtcclxuJHRleHQtcHJpbWFyeTogIzFmMjkzNztcclxuJHRleHQtc2Vjb25kYXJ5OiAjNmI3MjgwO1xyXG4kdGV4dC1tdXRlZDogIzljYTNhZjtcclxuJGJnLXdoaXRlOiAjZmZmZmZmO1xyXG4kYmctbGlnaHQ6ICNmOWZhZmI7XHJcbiRiZy1ncmF5OiAjZjNmNGY2O1xyXG4kYm9yZGVyLWNvbG9yOiAjZTVlN2ViO1xyXG4kc3Rhci1jb2xvcjogI2ZiYmYyNDtcclxuXHJcbi8vIENvbnRhaW5lciBwcmluY2lwYWxcclxuLmF2aXMtY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nOiAycmVtIDFyZW07XHJcbn1cclxuXHJcbi8vIEhlYWRlclxyXG4uYXZpcy1oZWFkZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgXHJcbiAgLmhlYWRlci1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAkcHJpbWFyeS1jb2xvciAwJSwgJHByaW1hcnktZGFyayAxMDAlKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IHJnYmEoOTksIDEwMiwgMjQxLCAwLjIpO1xyXG4gIH1cclxuICBcclxuICAuc2VjdGlvbi10aXRsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMC43NXJlbTtcclxuICAgIG1hcmdpbjogMCAwIDJyZW0gMDtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBcclxuICAgIGkge1xyXG4gICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIFN0YXRzIHN1bW1hcnlcclxuLnN0YXRzLXN1bW1hcnkge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcclxuICBnYXA6IDNyZW07XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgZ2FwOiAycmVtO1xyXG4gIH1cclxufVxyXG5cclxuLmF2ZXJhZ2UtcmF0aW5nIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDAuNzVyZW07XHJcbiAgcGFkZGluZzogMS41cmVtO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIFxyXG4gIC5yYXRpbmctbnVtYmVyIHtcclxuICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICB9XHJcbiAgXHJcbiAgLnJhdGluZy1zdGFycyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAwLjI1cmVtO1xyXG4gICAgXHJcbiAgICBpIHtcclxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgIGNvbG9yOiAkc3Rhci1jb2xvcjtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnJhdGluZy1jb3VudCB7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xyXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG59XHJcblxyXG4ucmF0aW5nLWJhcnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDAuNzVyZW07XHJcbn1cclxuXHJcbi5yYXRpbmctYmFyLWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gMWZyIGF1dG87XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDAuNzVyZW07XHJcbiAgXHJcbiAgLnJhdGluZy1sYWJlbCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHdpZHRoOiAxcmVtO1xyXG4gIH1cclxuICBcclxuICAuc3Rhci1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGNvbG9yOiAkc3Rhci1jb2xvcjtcclxuICB9XHJcbiAgXHJcbiAgLmJhci1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAwLjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgICBcclxuICAgIC5iYXItZmlsbCB7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAkc3Rhci1jb2xvciAwJSwgY29sb3IuYWRqdXN0KCRzdGFyLWNvbG9yLCAkbGlnaHRuZXNzOiAtMTAlKSAxMDAlKTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC41cyBlYXNlO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAucmF0aW5nLXBlcmNlbnQge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtaW4td2lkdGg6IDJyZW07XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB9XHJcbn1cclxuXHJcbi8vIEZpbHRlcnMgYmFyXHJcbi5maWx0ZXJzLWJhciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDFyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgYmFja2dyb3VuZDogJGJnLXdoaXRlO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICRib3JkZXItY29sb3I7XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICB9XHJcbn1cclxuXHJcbi5maWx0ZXItYnV0dG9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbn1cclxuXHJcbi5maWx0ZXItYnRuIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbiAgcGFkZGluZzogMC42MjVyZW0gMXJlbTtcclxuICBiYWNrZ3JvdW5kOiAkYmctbGlnaHQ7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMC43NXJlbTtcclxuICBjb2xvcjogJHRleHQtc2Vjb25kYXJ5O1xyXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICBcclxuICBpIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGNvbG9yOiAkc3Rhci1jb2xvcjtcclxuICB9XHJcbiAgXHJcbiAgLmJhZGdlIHtcclxuICAgIHBhZGRpbmc6IDAuMTI1cmVtIDAuNXJlbTtcclxuICAgIGJhY2tncm91bmQ6ICRiZy1ncmF5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgIGNvbG9yOiAkdGV4dC1wcmltYXJ5O1xyXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gIH1cclxuICBcclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICRiZy13aGl0ZTtcclxuICAgIGJvcmRlci1jb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgfVxyXG4gIFxyXG4gICYuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICRwcmltYXJ5LWNvbG9yIDAlLCAkcHJpbWFyeS1kYXJrIDEwMCUpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkcHJpbWFyeS1kYXJrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgXHJcbiAgICAuYmFkZ2Uge1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaSB7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5zb3J0LXNlbGVjdCB7XHJcbiAgcGFkZGluZzogMC42MjVyZW0gMXJlbTtcclxuICBiYWNrZ3JvdW5kOiAkYmctd2hpdGU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgJGJvcmRlci1jb2xvcjtcclxuICBib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xyXG4gIGNvbG9yOiAkdGV4dC1wcmltYXJ5O1xyXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICBcclxuICAmOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXItY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoOTksIDEwMiwgMjQxLCAwLjEpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gTG9hZGluZyBzdGF0ZVxyXG4ubG9hZGluZy1zdGF0ZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNHJlbSAycmVtO1xyXG4gIFxyXG4gIC5zcGlubmVyIHtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgYm9yZGVyOiA0cHggc29saWQgJGJvcmRlci1jb2xvcjtcclxuICAgIGJvcmRlci10b3AtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYW5pbWF0aW9uOiBzcGluIDAuOHMgbGluZWFyIGluZmluaXRlO1xyXG4gIH1cclxuICBcclxuICBwIHtcclxuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcclxuICAgIGNvbG9yOiAkdGV4dC1zZWNvbmRhcnk7XHJcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzcGluIHtcclxuICB0byB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxufVxyXG5cclxuLy8gRW1wdHkgc3RhdGVcclxuLmVtcHR5LXN0YXRlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiA0cmVtIDJyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIFxyXG4gIC5lbXB0eS1pY29uIHtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICRiZy1saWdodCAwJSwgJGJnLWdyYXkgMTAwJSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBcclxuICAgIGkge1xyXG4gICAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICAgIGNvbG9yOiAkdGV4dC1tdXRlZDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgaDMge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogJHRleHQtcHJpbWFyeTtcclxuICB9XHJcbiAgXHJcbiAgcCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgY29sb3I6ICR0ZXh0LXNlY29uZGFyeTtcclxuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbiAgfVxyXG59XHJcblxyXG4vLyBMaXN0ZSBkZXMgYXZpc1xyXG4uYXZpcy1saXN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAxcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuXHJcbi5hdmlzLWNhcmQge1xyXG4gIHBhZGRpbmc6IDEuMjVyZW07XHJcbiAgYmFja2dyb3VuZDogJGJnLXdoaXRlO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICRib3JkZXItY29sb3I7XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIFxyXG4gICY6aG92ZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiBjb2xvci5zY2FsZSgkYm9yZGVyLWNvbG9yLCAkbGlnaHRuZXNzOiAtMTAlKTtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICB9XHJcbn1cclxuXHJcbi8vIFJldmlldyBoZWFkZXJcclxuLnJldmlldy1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gIH1cclxufVxyXG5cclxuLnVzZXItaW5mbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbi51c2VyLWF2YXRhciB7XHJcbiAgd2lkdGg6IDQycHg7XHJcbiAgaGVpZ2h0OiA0MnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIFxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIH1cclxufVxyXG5cclxuLmF2YXRhci1wbGFjZWhvbGRlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAkcHJpbWFyeS1jb2xvciAwJSwgJHByaW1hcnktZGFyayAxMDAlKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi51c2VyLWRldGFpbHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDAuNXJlbTtcclxufVxyXG5cclxuLnVzZXItbmFtZSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAkdGV4dC1wcmltYXJ5O1xyXG59XHJcblxyXG4ucmV2aWV3LW1ldGEge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDFyZW07XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4ucmF0aW5nLWRpc3BsYXkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAwLjI1cmVtO1xyXG4gIFxyXG4gIGkge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgXHJcbiAgICAmLnRpLXN0YXItZmlsbGVkIHtcclxuICAgICAgY29sb3I6ICRzdGFyLWNvbG9yO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmLnRpLXN0YXIge1xyXG4gICAgICBjb2xvcjogJGJvcmRlci1jb2xvcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5yZXZpZXctZGF0ZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC4zNzVyZW07XHJcbiAgY29sb3I6ICR0ZXh0LW11dGVkO1xyXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgXHJcbiAgaSB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgfVxyXG59XHJcblxyXG4udmVyaWZpZWQtYmFkZ2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDAuNXJlbTtcclxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDE2LCAxODUsIDEyOSwgMC4xKSAwJSwgcmdiYSg1LCAxNTAsIDEwNSwgMC4xKSAxMDAlKTtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDE2LCAxODUsIDEyOSwgMC4zKTtcclxuICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG4gIGNvbG9yOiAkc3VjY2Vzcy1jb2xvcjtcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgXHJcbiAgaSB7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgfVxyXG59XHJcblxyXG4vLyBSZXZpZXcgY29udGVudFxyXG4ucmV2aWV3LWNvbnRlbnQge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5yZXZpZXctdGV4dCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGNvbG9yOiAkdGV4dC1wcmltYXJ5O1xyXG4gIGZvbnQtc2l6ZTogMC45Mzc1cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbn1cclxuXHJcbi5yZXZpZXctaW1hZ2VzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMC43NXJlbTtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5yZXZpZXctaW1hZ2Uge1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNzVyZW07XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICBcclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcbiAgXHJcbiAgJjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gUmV2aWV3IGFjdGlvbnNcclxuLnJldmlldy1hY3Rpb25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMXJlbTtcclxuICBwYWRkaW5nLXRvcDogMS41cmVtO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmFjdGlvbi1idG4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDAuNXJlbTtcclxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNzVyZW07XHJcbiAgY29sb3I6ICR0ZXh0LXNlY29uZGFyeTtcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgXHJcbiAgaSB7XHJcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gIH1cclxuICBcclxuICAuY291bnQge1xyXG4gICAgY29sb3I6ICR0ZXh0LW11dGVkO1xyXG4gICAgZm9udC1zaXplOiAwLjgxMjVyZW07XHJcbiAgfVxyXG4gIFxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogJGJnLWxpZ2h0O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICB9XHJcbiAgXHJcbiAgJi5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSg5OSwgMTAyLCAyNDEsIDAuMSkgMCUsIHJnYmEoNzksIDcwLCAyMjksIDAuMSkgMTAwJSk7XHJcbiAgICBib3JkZXItY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gIH1cclxuICBcclxuICAmLmRhbmdlciB7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgyMzksIDY4LCA2OCwgMC4xKTtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAkZGFuZ2VyLWNvbG9yO1xyXG4gICAgICBjb2xvcjogJGRhbmdlci1jb2xvcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIFZlbmRvciByZXNwb25zZVxyXG4udmVuZG9yLXJlc3BvbnNlIHtcclxuICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbiAgcGFkZGluZzogMS41cmVtO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoOTksIDEwMiwgMjQxLCAwLjA1KSAwJSwgcmdiYSg3OSwgNzAsIDIyOSwgMC4wNSkgMTAwJSk7XHJcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAkcHJpbWFyeS1jb2xvcjtcclxuICBib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xyXG59XHJcblxyXG4ucmVzcG9uc2UtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcclxuICBjb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIFxyXG4gIGkge1xyXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gIH1cclxuICBcclxuICAucmVzcG9uc2UtZGF0ZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIGNvbG9yOiAkdGV4dC1tdXRlZDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG59XHJcblxyXG4ucmVzcG9uc2UtdGV4dCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGNvbG9yOiAkdGV4dC1wcmltYXJ5O1xyXG4gIGZvbnQtc2l6ZTogMC45Mzc1cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbn1cclxuXHJcbi8vIFBhZ2luYXRpb25cclxuLnBhZ2luYXRpb24tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogMnJlbSAwO1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDAuNXJlbTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ucGFnZS1idG4ge1xyXG4gIG1pbi13aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAgMC43NXJlbTtcclxuICBiYWNrZ3JvdW5kOiAkYmctd2hpdGU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgJGJvcmRlci1jb2xvcjtcclxuICBib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xyXG4gIGNvbG9yOiAkdGV4dC1wcmltYXJ5O1xyXG4gIGZvbnQtc2l6ZTogMC45Mzc1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgXHJcbiAgaSB7XHJcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gIH1cclxuICBcclxuICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcclxuICAgIGJhY2tncm91bmQ6ICRiZy1saWdodDtcclxuICAgIGJvcmRlci1jb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgfVxyXG4gIFxyXG4gICYuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICRwcmltYXJ5LWNvbG9yIDAlLCAkcHJpbWFyeS1kYXJrIDEwMCUpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkcHJpbWFyeS1kYXJrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAmOmRpc2FibGVkIHtcclxuICAgIG9wYWNpdHk6IDAuNDtcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBXcml0ZSByZXZpZXcgc2VjdGlvblxyXG4ud3JpdGUtcmV2aWV3LXNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxufVxyXG5cclxuLmJ0bi13cml0ZS1yZXZpZXcsXHJcbi5idG4td3JpdGUtcmV2aWV3LWxhcmdlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMXJlbSAycmVtO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICRwcmltYXJ5LWNvbG9yIDAlLCAkcHJpbWFyeS1kYXJrIDEwMCUpO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMjBweCByZ2JhKDk5LCAxMDIsIDI0MSwgMC4zKTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIFxyXG4gIGkge1xyXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gIH1cclxuICBcclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMTJweCAyOHB4IHJnYmEoOTksIDEwMiwgMjQxLCAwLjQpO1xyXG4gIH1cclxuICBcclxuICAmOmFjdGl2ZSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG59XHJcblxyXG4uYnRuLXdyaXRlLXJldmlldy1sYXJnZSB7XHJcbiAgcGFkZGluZzogMS4yNXJlbSAzcmVtO1xyXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbn1cclxuXHJcbi8vIFJlc3BvbnNpdmVcclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmF2aXMtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5hdmlzLWhlYWRlciB7XHJcbiAgICAuaGVhZGVyLWNvbnRlbnQge1xyXG4gICAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zZWN0aW9uLXRpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgIFxyXG4gICAgICBpIHtcclxuICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnJhdGluZy1iYXItaXRlbSB7XHJcbiAgICAuYmFyLWNvbnRhaW5lciB7XHJcbiAgICAgIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5hdmlzLWNhcmQge1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmZpbHRlci1idXR0b25zIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgXHJcbiAgICAuZmlsdGVyLWJ0biB7XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgLnJldmlldy1hY3Rpb25zIHtcclxuICAgIC5hY3Rpb24tYnRuIHtcclxuICAgICAgZmxleDogMTtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIG1pbi13aWR0aDogY2FsYyg1MCUgLSAwLjVyZW0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIuYXZpcy1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDJyZW0gMXJlbTtcbn1cblxuLmF2aXMtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cbi5hdmlzLWhlYWRlciAuaGVhZGVyLWNvbnRlbnQge1xuICBwYWRkaW5nOiAycmVtO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjM2NmYxIDAlLCAjNGY0NmU1IDEwMCUpO1xuICBib3JkZXItcmFkaXVzOiAxLjVyZW07XG4gIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IHJnYmEoOTksIDEwMiwgMjQxLCAwLjIpO1xufVxuLmF2aXMtaGVhZGVyIC5zZWN0aW9uLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjc1cmVtO1xuICBtYXJnaW46IDAgMCAycmVtIDA7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmF2aXMtaGVhZGVyIC5zZWN0aW9uLXRpdGxlIGkge1xuICBmb250LXNpemU6IDIuNXJlbTtcbn1cblxuLnN0YXRzLXN1bW1hcnkge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xuICBnYXA6IDNyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnN0YXRzLXN1bW1hcnkge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdhcDogMnJlbTtcbiAgfVxufVxuXG4uYXZlcmFnZS1yYXRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNzVyZW07XG4gIHBhZGRpbmc6IDEuNXJlbTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG59XG4uYXZlcmFnZS1yYXRpbmcgLnJhdGluZy1udW1iZXIge1xuICBmb250LXNpemU6IDRyZW07XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG4uYXZlcmFnZS1yYXRpbmcgLnJhdGluZy1zdGFycyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMC4yNXJlbTtcbn1cbi5hdmVyYWdlLXJhdGluZyAucmF0aW5nLXN0YXJzIGkge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgY29sb3I6ICNmYmJmMjQ7XG59XG4uYXZlcmFnZS1yYXRpbmcgLnJhdGluZy1jb3VudCB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5yYXRpbmctYmFycyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC43NXJlbTtcbn1cblxuLnJhdGluZy1iYXItaXRlbSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIDFmciBhdXRvO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNzVyZW07XG59XG4ucmF0aW5nLWJhci1pdGVtIC5yYXRpbmctbGFiZWwge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHdpZHRoOiAxcmVtO1xufVxuLnJhdGluZy1iYXItaXRlbSAuc3Rhci1pY29uIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogI2ZiYmYyNDtcbn1cbi5yYXRpbmctYmFyLWl0ZW0gLmJhci1jb250YWluZXIge1xuICBoZWlnaHQ6IDAuNXJlbTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtaW4td2lkdGg6IDIwMHB4O1xufVxuLnJhdGluZy1iYXItaXRlbSAuYmFyLWNvbnRhaW5lciAuYmFyLWZpbGwge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2ZiYmYyNCAwJSwgcmdiKDIzMS43NjY4MTYxNDM1LCAxNjguMjY5MDU4Mjk2LCA0LjIzMzE4Mzg1NjUpIDEwMCUpO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjVzIGVhc2U7XG59XG4ucmF0aW5nLWJhci1pdGVtIC5yYXRpbmctcGVyY2VudCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWluLXdpZHRoOiAycmVtO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmZpbHRlcnMtYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIHBhZGRpbmc6IDEuNXJlbTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyOiAycHggc29saWQgI2U1ZTdlYjtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmZpbHRlcnMtYmFyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICB9XG59XG5cbi5maWx0ZXItYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAwLjVyZW07XG59XG5cbi5maWx0ZXItYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG4gIHBhZGRpbmc6IDAuNjI1cmVtIDFyZW07XG4gIGJhY2tncm91bmQ6ICNmOWZhZmI7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xuICBjb2xvcjogIzZiNzI4MDtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuLmZpbHRlci1idG4gaSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6ICNmYmJmMjQ7XG59XG4uZmlsdGVyLWJ0biAuYmFkZ2Uge1xuICBwYWRkaW5nOiAwLjEyNXJlbSAwLjVyZW07XG4gIGJhY2tncm91bmQ6ICNmM2Y0ZjY7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIGNvbG9yOiAjMWYyOTM3O1xuICBmb250LXNpemU6IDAuNzVyZW07XG59XG4uZmlsdGVyLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1jb2xvcjogIzYzNjZmMTtcbiAgY29sb3I6ICM2MzY2ZjE7XG59XG4uZmlsdGVyLWJ0bi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjM2NmYxIDAlLCAjNGY0NmU1IDEwMCUpO1xuICBib3JkZXItY29sb3I6ICM0ZjQ2ZTU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5maWx0ZXItYnRuLmFjdGl2ZSAuYmFkZ2Uge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5maWx0ZXItYnRuLmFjdGl2ZSBpIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc29ydC1zZWxlY3Qge1xuICBwYWRkaW5nOiAwLjYyNXJlbSAxcmVtO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZTVlN2ViO1xuICBib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xuICBjb2xvcjogIzFmMjkzNztcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuLnNvcnQtc2VsZWN0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLWNvbG9yOiAjNjM2NmYxO1xuICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSg5OSwgMTAyLCAyNDEsIDAuMSk7XG59XG5cbi5sb2FkaW5nLXN0YXRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDRyZW0gMnJlbTtcbn1cbi5sb2FkaW5nLXN0YXRlIC5zcGlubmVyIHtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgYm9yZGVyOiA0cHggc29saWQgI2U1ZTdlYjtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzYzNjZmMTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBhbmltYXRpb246IHNwaW4gMC44cyBsaW5lYXIgaW5maW5pdGU7XG59XG4ubG9hZGluZy1zdGF0ZSBwIHtcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xuICBjb2xvcjogIzZiNzI4MDtcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbi5lbXB0eS1zdGF0ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDRyZW0gMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmVtcHR5LXN0YXRlIC5lbXB0eS1pY29uIHtcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDEyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y5ZmFmYiAwJSwgI2YzZjRmNiAxMDAlKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLmVtcHR5LXN0YXRlIC5lbXB0eS1pY29uIGkge1xuICBmb250LXNpemU6IDRyZW07XG4gIGNvbG9yOiAjOWNhM2FmO1xufVxuLmVtcHR5LXN0YXRlIGgzIHtcbiAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzFmMjkzNztcbn1cbi5lbXB0eS1zdGF0ZSBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgY29sb3I6ICM2YjcyODA7XG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XG59XG5cbi5hdmlzLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi5hdmlzLWNhcmQge1xuICBwYWRkaW5nOiAxLjI1cmVtO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZTVlN2ViO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cbi5hdmlzLWNhcmQ6aG92ZXIge1xuICBib3JkZXItY29sb3I6IHJnYigyMDIuNzczOTEzMDQzNSwgMjA2Ljc5MTMwNDM0NzgsIDIxNC44MjYwODY5NTY1KTtcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG59XG5cbi5yZXZpZXctaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAucmV2aWV3LWhlYWRlciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDFyZW07XG4gIH1cbn1cblxuLnVzZXItaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMXJlbTtcbn1cblxuLnVzZXItYXZhdGFyIHtcbiAgd2lkdGg6IDQycHg7XG4gIGhlaWdodDogNDJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmbGV4LXNocmluazogMDtcbn1cbi51c2VyLWF2YXRhciBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmF2YXRhci1wbGFjZWhvbGRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjM2NmYxIDAlLCAjNGY0NmU1IDEwMCUpO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnVzZXItZGV0YWlscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC41cmVtO1xufVxuXG4udXNlci1uYW1lIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMWYyOTM3O1xufVxuXG4ucmV2aWV3LW1ldGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDFyZW07XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLnJhdGluZy1kaXNwbGF5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAwLjI1cmVtO1xufVxuLnJhdGluZy1kaXNwbGF5IGkge1xuICBmb250LXNpemU6IDFyZW07XG59XG4ucmF0aW5nLWRpc3BsYXkgaS50aS1zdGFyLWZpbGxlZCB7XG4gIGNvbG9yOiAjZmJiZjI0O1xufVxuLnJhdGluZy1kaXNwbGF5IGkudGktc3RhciB7XG4gIGNvbG9yOiAjZTVlN2ViO1xufVxuXG4ucmV2aWV3LWRhdGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuMzc1cmVtO1xuICBjb2xvcjogIzljYTNhZjtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbn1cbi5yZXZpZXctZGF0ZSBpIHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4udmVyaWZpZWQtYmFkZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMTYsIDE4NSwgMTI5LCAwLjEpIDAlLCByZ2JhKDUsIDE1MCwgMTA1LCAwLjEpIDEwMCUpO1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDE2LCAxODUsIDEyOSwgMC4zKTtcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgY29sb3I6ICMxMGI5ODE7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4udmVyaWZpZWQtYmFkZ2UgaSB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbn1cblxuLnJldmlldy1jb250ZW50IHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLnJldmlldy10ZXh0IHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogIzFmMjkzNztcbiAgZm9udC1zaXplOiAwLjkzNzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG59XG5cbi5yZXZpZXctaW1hZ2VzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAwLjc1cmVtO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5yZXZpZXctaW1hZ2Uge1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDAuNzVyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cbi5yZXZpZXctaW1hZ2UgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4ucmV2aWV3LWltYWdlOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xufVxuXG4ucmV2aWV3LWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDFyZW07XG4gIHBhZGRpbmctdG9wOiAxLjVyZW07XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTVlN2ViO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5hY3Rpb24tYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAycHggc29saWQgI2U1ZTdlYjtcbiAgYm9yZGVyLXJhZGl1czogMC43NXJlbTtcbiAgY29sb3I6ICM2YjcyODA7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cbi5hY3Rpb24tYnRuIGkge1xuICBmb250LXNpemU6IDEuMTI1cmVtO1xufVxuLmFjdGlvbi1idG4gLmNvdW50IHtcbiAgY29sb3I6ICM5Y2EzYWY7XG4gIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xufVxuLmFjdGlvbi1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZjlmYWZiO1xuICBib3JkZXItY29sb3I6ICM2MzY2ZjE7XG4gIGNvbG9yOiAjNjM2NmYxO1xufVxuLmFjdGlvbi1idG4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSg5OSwgMTAyLCAyNDEsIDAuMSkgMCUsIHJnYmEoNzksIDcwLCAyMjksIDAuMSkgMTAwJSk7XG4gIGJvcmRlci1jb2xvcjogIzYzNjZmMTtcbiAgY29sb3I6ICM2MzY2ZjE7XG59XG4uYWN0aW9uLWJ0bi5kYW5nZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIzOSwgNjgsIDY4LCAwLjEpO1xuICBib3JkZXItY29sb3I6ICNlZjQ0NDQ7XG4gIGNvbG9yOiAjZWY0NDQ0O1xufVxuXG4udmVuZG9yLXJlc3BvbnNlIHtcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xuICBwYWRkaW5nOiAxLjVyZW07XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoOTksIDEwMiwgMjQxLCAwLjA1KSAwJSwgcmdiYSg3OSwgNzAsIDIyOSwgMC4wNSkgMTAwJSk7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzYzNjZmMTtcbiAgYm9yZGVyLXJhZGl1czogMC43NXJlbTtcbn1cblxuLnJlc3BvbnNlLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xuICBjb2xvcjogIzYzNjZmMTtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5yZXNwb25zZS1oZWFkZXIgaSB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbn1cbi5yZXNwb25zZS1oZWFkZXIgLnJlc3BvbnNlLWRhdGUge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgY29sb3I6ICM5Y2EzYWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5yZXNwb25zZS10ZXh0IHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogIzFmMjkzNztcbiAgZm9udC1zaXplOiAwLjkzNzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG59XG5cbi5wYWdpbmF0aW9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDJyZW0gMDtcbn1cblxuLnBhZ2luYXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDAuNXJlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnBhZ2UtYnRuIHtcbiAgbWluLXdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwIDAuNzVyZW07XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNlNWU3ZWI7XG4gIGJvcmRlci1yYWRpdXM6IDAuNzVyZW07XG4gIGNvbG9yOiAjMWYyOTM3O1xuICBmb250LXNpemU6IDAuOTM3NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuLnBhZ2UtYnRuIGkge1xuICBmb250LXNpemU6IDEuMTI1cmVtO1xufVxuLnBhZ2UtYnRuOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZDogI2Y5ZmFmYjtcbiAgYm9yZGVyLWNvbG9yOiAjNjM2NmYxO1xuICBjb2xvcjogIzYzNjZmMTtcbn1cbi5wYWdlLWJ0bi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjM2NmYxIDAlLCAjNGY0NmU1IDEwMCUpO1xuICBib3JkZXItY29sb3I6ICM0ZjQ2ZTU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5wYWdlLWJ0bjpkaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNDtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLndyaXRlLXJldmlldy1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG5cbi5idG4td3JpdGUtcmV2aWV3LFxuLmJ0bi13cml0ZS1yZXZpZXctbGFyZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMXJlbSAycmVtO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjM2NmYxIDAlLCAjNGY0NmU1IDEwMCUpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDAuNzVyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDIwcHggcmdiYSg5OSwgMTAyLCAyNDEsIDAuMyk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG4uYnRuLXdyaXRlLXJldmlldyBpLFxuLmJ0bi13cml0ZS1yZXZpZXctbGFyZ2UgaSB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbn1cbi5idG4td3JpdGUtcmV2aWV3OmhvdmVyLFxuLmJ0bi13cml0ZS1yZXZpZXctbGFyZ2U6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gIGJveC1zaGFkb3c6IDAgMTJweCAyOHB4IHJnYmEoOTksIDEwMiwgMjQxLCAwLjQpO1xufVxuLmJ0bi13cml0ZS1yZXZpZXc6YWN0aXZlLFxuLmJ0bi13cml0ZS1yZXZpZXctbGFyZ2U6YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xufVxuXG4uYnRuLXdyaXRlLXJldmlldy1sYXJnZSB7XG4gIHBhZGRpbmc6IDEuMjVyZW0gM3JlbTtcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5hdmlzLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgfVxuICAuYXZpcy1oZWFkZXIgLmhlYWRlci1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG4gIH1cbiAgLmF2aXMtaGVhZGVyIC5zZWN0aW9uLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxuICAuYXZpcy1oZWFkZXIgLnNlY3Rpb24tdGl0bGUgaSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG4gIC5yYXRpbmctYmFyLWl0ZW0gLmJhci1jb250YWluZXIge1xuICAgIG1pbi13aWR0aDogMTAwcHg7XG4gIH1cbiAgLmF2aXMtY2FyZCB7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgfVxuICAuZmlsdGVyLWJ1dHRvbnMge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5maWx0ZXItYnV0dG9ucyAuZmlsdGVyLWJ0biB7XG4gICAgZmxleDogMTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5yZXZpZXctYWN0aW9ucyAuYWN0aW9uLWJ0biB7XG4gICAgZmxleDogMTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtaW4td2lkdGg6IGNhbGMoNTAlIC0gMC41cmVtKTtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"],
      data: {
        animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('itemAnimation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
          opacity: 0,
          transform: 'translateY(10px)'
        }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)('300ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
          opacity: 1,
          transform: 'translateY(0)'
        }))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)('200ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
          opacity: 0,
          transform: 'translateY(-10px)'
        }))])])]
      }
    });
  }
}

/***/ }),

/***/ 9081:
/*!*******************************************************************************!*\
  !*** ./src/app/components/product/product-detail/product-detail.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductDetailComponent: () => (/* binding */ ProductDetailComponent)
/* harmony export */ });
/* harmony import */ var D_Master_Web_avance_m1p13mean_Candy_Romance_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 6264);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/notification.service */ 7473);
/* harmony import */ var _avis_avis_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../avis/avis.component */ 8129);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 5342);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 3900);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 3305);
/* harmony import */ var _services_panier_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../services/panier.service */ 2619);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../services/product.service */ 6241);
/* harmony import */ var _services_avis_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../services/avis.service */ 7677);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../services/auth.service */ 4796);
/* harmony import */ var _services_favoris_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../services/favoris.service */ 6334);

















function ProductDetailComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 4)(1, "div", 7)(2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Chargement...");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "output", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "Chargement du produit...");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}
function ProductDetailComponent_Conditional_6_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" Promo ", ctx_r1.getPromotionBadgeText(), " ");
  }
}
function ProductDetailComponent_Conditional_6_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" En stock (", ctx_r1.getAvailableStock(), " disponibles) ");
  }
}
function ProductDetailComponent_Conditional_6_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Rupture de stock ");
  }
}
function ProductDetailComponent_Conditional_6_Conditional_15_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "i", 57);
  }
  if (rf & 2) {
    const star_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("star-filled", star_r3 === 1)("star-half", star_r3 === 0.5)("star-empty", star_r3 === 0);
  }
}
function ProductDetailComponent_Conditional_6_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrepeaterCreate"](1, ProductDetailComponent_Conditional_6_Conditional_15_For_2_Template, 1, 6, "i", 55, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrepeaterTrackByIndex"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrepeater"](ctx_r1.getStars());
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", ctx_r1.product.averageRating.toFixed(1), "/5");
  }
}
function ProductDetailComponent_Conditional_6_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.formatPrice(ctx_r1.getBasePrice()), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.getPromotionDetailsText(), " ");
  }
}
function ProductDetailComponent_Conditional_6_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" Livraison gratuite avant le ", ctx_r1.product.deliveryDate, " ");
  }
}
function ProductDetailComponent_Conditional_6_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 29)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r1.product.description);
  }
}
function ProductDetailComponent_Conditional_6_Conditional_29_For_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const attribute_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", attribute_r4, " ");
  }
}
function ProductDetailComponent_Conditional_6_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 30)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Caract\u00E9ristiques");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrepeaterCreate"](4, ProductDetailComponent_Conditional_6_Conditional_29_For_5_Template, 2, 1, "div", 63, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrepeaterTrackByIndex"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrepeater"](ctx_r1.getVariantAttributes());
  }
}
function ProductDetailComponent_Conditional_6_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, " Ce produit est actuellement en rupture de stock ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ProductDetailComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 5)(1, "div", 10)(2, "div", 11)(3, "div", 12)(4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditionalCreate"](6, ProductDetailComponent_Conditional_6_Conditional_6_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditionalCreate"](8, ProductDetailComponent_Conditional_6_Conditional_8_Template, 2, 1)(9, ProductDetailComponent_Conditional_6_Conditional_9_Template, 2, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "div", 11)(11, "div", 17)(12, "div", 18)(13, "h1", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditionalCreate"](15, ProductDetailComponent_Conditional_6_Conditional_15_Template, 5, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "div", 21)(17, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](18, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](21, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](23, "div", 26)(24, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditionalCreate"](26, ProductDetailComponent_Conditional_6_Conditional_26_Template, 4, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditionalCreate"](27, ProductDetailComponent_Conditional_6_Conditional_27_Template, 3, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditionalCreate"](28, ProductDetailComponent_Conditional_6_Conditional_28_Template, 5, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditionalCreate"](29, ProductDetailComponent_Conditional_6_Conditional_29_Template, 6, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](30, "div", 31)(31, "form", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngSubmit", function ProductDetailComponent_Conditional_6_Template_form_ngSubmit_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.onAddToCart());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](32, "div", 33)(33, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](34, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](35, " Quantit\u00E9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](36, "div", 36)(37, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProductDetailComponent_Conditional_6_Template_button_click_37_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.decrementQuantity());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](38, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](39, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function ProductDetailComponent_Conditional_6_Template_input_change_39_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.onQuantityChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](40, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProductDetailComponent_Conditional_6_Template_button_click_40_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.incrementQuantity());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](41, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](42, "small", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](43, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](45, "div", 44)(46, "button", 45)(47, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](48, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](49, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](51, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProductDetailComponent_Conditional_6_Template_button_click_51_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.toggleFavori());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](52, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditionalCreate"](53, ProductDetailComponent_Conditional_6_Conditional_53_Template, 3, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](54, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](55, "app-avis", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    let tmp_17_0;
    let tmp_19_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinterpolate"](ctx_r1.product.nom))("src", ctx_r1.product.photo || "https://via.placeholder.com/400x400", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditional"](ctx_r1.hasActivePromotions() ? 6 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("in-stock", ctx_r1.hasStock())("out-of-stock", !ctx_r1.hasStock());
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditional"](ctx_r1.hasStock() ? 8 : 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r1.product.nom);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditional"](ctx_r1.hasRating() ? 15 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.product.categorieId.nom, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.product.boutiqueId.nom, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.formatPrice(ctx_r1.hasActivePromotions() ? ctx_r1.getDiscountedPrice() : ctx_r1.getBasePrice()), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditional"](ctx_r1.hasActivePromotions() ? 26 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditional"](ctx_r1.product.deliveryDate ? 27 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditional"](ctx_r1.product.description ? 28 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditional"](ctx_r1.getVariantAttributes().length > 0 ? 29 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx_r1.addToCartForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ((tmp_17_0 = ctx_r1.addToCartForm.get("quantity")) == null ? null : tmp_17_0.value) <= 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("max", ctx_r1.getAvailableStock());
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ((tmp_19_0 = ctx_r1.addToCartForm.get("quantity")) == null ? null : tmp_19_0.value) >= ctx_r1.getAvailableStock());
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.getAvailableStock(), " articles en stock ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("loading", ctx_r1.isAddingToCart);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", !ctx_r1.hasStock() || ctx_r1.addToCartForm.invalid || ctx_r1.isAddingToCart);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("ti-shopping-cart-plus", !ctx_r1.isAddingToCart)("ti-loader-3", ctx_r1.isAddingToCart)("spinner", ctx_r1.isAddingToCart);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.isAddingToCart ? "Ajout en cours..." : "Ajouter au panier", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx_r1.favorisLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("ti-heart", !ctx_r1.isFavori)("ti-heart-filled", ctx_r1.isFavori);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditional"](!ctx_r1.hasStock() ? 53 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("avis", ctx_r1.productAvis)("produitId", ctx_r1.product == null ? null : ctx_r1.product._id)("currentUserId", ctx_r1.currentUserId)("currentUserName", ctx_r1.currentUserName);
  }
}
function ProductDetailComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Produit non trouv\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "Le produit que vous recherchez n'existe pas ou a \u00E9t\u00E9 supprim\u00E9.");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProductDetailComponent_Conditional_7_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.onBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, " Retour aux produits ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}
class ProductDetailComponent {
  constructor(route, router, fb, panierService, productService, avisService, authService, favorisService) {
    this.route = route;
    this.router = router;
    this.fb = fb;
    this.panierService = panierService;
    this.productService = productService;
    this.avisService = avisService;
    this.authService = authService;
    this.favorisService = favorisService;
    this.cdr = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef);
    this.notificationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_notification_service__WEBPACK_IMPORTED_MODULE_6__.NotificationService);
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.product = null;
    this.isLoading = true;
    this.selectedQuantity = 1;
    this.productAvis = [];
    this.isAddingToCart = false;
    this.currentUserId = '';
    this.currentUserName = '';
    this.isFavori = false;
    this.favorisLoading = false;
    this.currentAvailableStock = 0;
    this.addToCartForm = this.fb.group({
      quantity: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.max(10)]]
    });
  }
  ngOnInit() {
    const user = this.authService.getUser();
    this.currentUserId = user?.id || '';
    this.currentUserName = user?.nom || '';
    this.route.params.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(params => {
      const productId = params['id'];
      if (productId) {
        this.loadProductDetail(productId);
      } else {
        this.router.navigate(['/produits']);
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadProductDetail(productId) {
    var _this = this;
    return (0,D_Master_Web_avance_m1p13mean_Candy_Romance_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.isLoading = true;
      try {
        _this.product = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.lastValueFrom)(_this.productService.getProductById(productId));
        if (!_this.product) {
          _this.router.navigate(['/produits']);
          return;
        }
        // Récupérer le stock disponible via l'API
        try {
          const stockData = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.lastValueFrom)(_this.productService.getProductStock(productId));
          _this.currentAvailableStock = stockData.availableStock;
        } catch (stockError) {
          console.error('Erreur récupération stock:', stockError);
          // En cas d'erreur, calculer localement
          _this.calculateLocalStock();
        }
        // Valider le formulaire avec le stock disponible
        const maxStock = _this.getAvailableStock();
        const validators = [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.min(1)];
        // N'ajouter la validation max que s'il y a du stock
        if (maxStock > 0) {
          validators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.max(maxStock));
        }
        _this.addToCartForm.get('quantity')?.setValidators(validators);
        _this.addToCartForm.get('quantity')?.updateValueAndValidity();
        // Charger les avis du produit
        _this.loadProductAvis(_this.product.avis);
        _this.loadFavoriStatus();
        Promise.resolve().then(() => {
          _this.cdr.detectChanges();
        });
      } catch (error) {
        console.error('Erreur lors du chargement du produit:', error);
        _this.router.navigate(['/produits']);
        _this.cdr.detectChanges();
      } finally {
        _this.isLoading = false;
        _this.cdr.detectChanges();
      }
    })();
  }
  // Méthode de secours pour calculer le stock localement
  calculateLocalStock() {
    if (!this.product?.variant || this.product.variant.length === 0) {
      this.currentAvailableStock = 0;
      return;
    }
    let totalAvailable = 0;
    for (const variant of this.product.variant) {
      const variantStock = variant.qtt || 0;
      const variantReserved = variant.reserved || 0;
      const variantAvailable = Math.max(0, variantStock - variantReserved);
      totalAvailable += variantAvailable;
    }
    this.currentAvailableStock = totalAvailable;
  }
  formatPrice(price) {
    return new Intl.NumberFormat('fr-FR', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price) + ' Ar';
  }
  getStars() {
    if (!this.product?.averageRating) return [];
    const rating = this.product.averageRating;
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(1);
      } else if (i - 0.5 <= rating) {
        stars.push(0.5);
      } else {
        stars.push(0);
      }
    }
    return stars;
  }
  hasRating() {
    return this.product?.averageRating && this.product.averageRating > 0;
  }
  hasStock() {
    const availableStock = this.getAvailableStock();
    return availableStock > 0;
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
    const discounted = basePrice * (1 - this.getTotalPromotionTaux() / 100);
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
  getStockQuantity() {
    return this.getAvailableStock();
  }
  getAvailableStock() {
    return this.currentAvailableStock || 0;
  }
  onQuantityChange() {
    const quantity = this.addToCartForm.get('quantity')?.value;
    const maxStock = this.getAvailableStock();
    if (quantity > maxStock) {
      this.addToCartForm.get('quantity')?.setValue(maxStock);
    }
  }
  onAddToCart() {
    if (!this.product || !this.hasStock() || this.addToCartForm.invalid) {
      this.notificationService.warning('Stock insuffisant ou panier invalide');
      return;
    }
    const quantity = this.addToCartForm.get('quantity')?.value || 1;
    const availableStock = this.getAvailableStock();
    // Vérifier si la quantité demandée est disponible
    if (quantity > availableStock) {
      this.notificationService.error(`Stock insuffisant. Seulement ${availableStock} articles disponibles.`);
      return;
    }
    this.isAddingToCart = true;
    this.panierService.ajouterProduit(this.product._id, quantity).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe({
      next: response => {
        this.notificationService.success(`✅ ${this.product?.nom} ajouté au panier (x${quantity})`);
        // Réinitialiser la quantité
        this.addToCartForm.get('quantity')?.setValue(1);
        // Émettre un événement global pour rafraîchir le panier
        this.panierService.notifyPanierUpdated();
      },
      error: error => {
        console.error('Erreur lors de l\'ajout au panier:', error);
        this.notificationService.error('Erreur lors de l\'ajout au panier. Veuillez réessayer.');
      }
    }).add(() => {
      this.isAddingToCart = false;
      this.cdr.detectChanges();
    });
  }
  incrementQuantity() {
    const currentValue = this.addToCartForm.get('quantity')?.value || 1;
    const maxValue = this.getAvailableStock();
    if (currentValue < maxValue) {
      this.addToCartForm.get('quantity')?.setValue(currentValue + 1);
    }
  }
  decrementQuantity() {
    const currentValue = this.addToCartForm.get('quantity')?.value || 1;
    if (currentValue > 1) {
      this.addToCartForm.get('quantity')?.setValue(currentValue - 1);
    }
  }
  onBack() {
    this.router.navigate(['/produits']);
  }
  getVariantAttributes() {
    if (!this.product?.variant?.length || !this.product.variant[0]?.attributes) {
      return [];
    }
    return Object.entries(this.product.variant[0].attributes).map(([key, value]) => {
      // Formater les clés pour l'affichage
      let formattedKey = key.charAt(0).toUpperCase() + key.slice(1);
      if (formattedKey === 'Sexe') {
        return `${formattedKey}: ${value === 'M' ? 'Homme' : 'Femme'}`;
      }
      return `${formattedKey}: ${value}`;
    });
  }
  /**
   * Charger les avis du produit
   */
  loadProductAvis(productAvis) {
    // Laisser l'API charger les avis pour avoir les infos utilisateur
    this.productAvis = [];
    this.cdr.detectChanges();
  }
  loadFavoriStatus() {
    if (!this.product || !this.currentUserId) {
      this.isFavori = false;
      return;
    }
    this.favorisService.isFavori(this.product._id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe({
      next: isFavori => {
        this.isFavori = isFavori;
        this.cdr.detectChanges();
      },
      error: () => {
        this.isFavori = false;
        this.cdr.detectChanges();
      }
    });
  }
  toggleFavori() {
    if (!this.product) return;
    if (!this.currentUserId) {
      this.notificationService.warning('Veuillez vous connecter pour gerer les favoris');
      return;
    }
    this.favorisLoading = true;
    const action$ = this.isFavori ? this.favorisService.removeFavori(this.product._id) : this.favorisService.addFavori(this.product._id);
    action$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe({
      next: () => {
        this.isFavori = !this.isFavori;
        this.favorisLoading = false;
        this.notificationService.success(this.isFavori ? 'Ajoute aux favoris' : 'Retire des favoris');
        this.cdr.detectChanges();
      },
      error: () => {
        this.favorisLoading = false;
        this.notificationService.error('Erreur lors de la mise a jour des favoris');
        this.cdr.detectChanges();
      }
    });
  }
  static {
    this.ɵfac = function ProductDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ProductDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_panier_service__WEBPACK_IMPORTED_MODULE_13__.PanierService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_14__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_avis_service__WEBPACK_IMPORTED_MODULE_15__.AvisService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_16__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_favoris_service__WEBPACK_IMPORTED_MODULE_17__.FavorisService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
      type: ProductDetailComponent,
      selectors: [["app-product-detail"]],
      decls: 8,
      vars: 1,
      consts: [[1, "product-detail-container"], [1, "header-section"], ["type", "button", 1, "back-button", 3, "click"], [1, "ti", "ti-arrow-left"], [1, "loading-container"], [1, "product-detail-content"], [1, "error-container"], ["role", "status", "aria-live", "polite", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "mt-3"], [1, "row", "g-4"], [1, "col-lg-6"], [1, "image-section"], [1, "main-image-container"], [1, "main-image", 3, "src", "alt"], [1, "promo-badge"], [1, "stock-badge"], [1, "info-section"], [1, "product-header"], [1, "product-title"], [1, "rating-container"], [1, "tags-container"], [1, "tag", "tag-category"], [1, "ti", "ti-tag"], [1, "tag", "tag-boutique"], [1, "ti", "ti-building-store"], [1, "price-section"], [1, "current-price"], [1, "delivery-info"], [1, "description-section"], [1, "attributes-section"], [1, "add-to-cart-section"], [3, "ngSubmit", "formGroup"], [1, "quantity-selector"], ["for", "quantity", 1, "quantity-label"], [1, "ti", "ti-package"], [1, "quantity-controls"], ["type", "button", "aria-label", "R\u00E9duire la quantit\u00E9", "title", "R\u00E9duire", 1, "quantity-btn", "qty-btn-minus", 3, "click", "disabled"], [1, "ti", "ti-minus"], ["type", "number", "id", "quantity", "formControlName", "quantity", "min", "1", "readonly", "", 1, "quantity-input", 3, "change", "max"], ["type", "button", "aria-label", "Augmenter la quantit\u00E9", "title", "Augmenter", 1, "quantity-btn", "qty-btn-plus", 3, "click", "disabled"], [1, "ti", "ti-plus"], [1, "stock-info"], [1, "ti", "ti-package-check"], [1, "action-buttons"], ["type", "submit", 1, "btn", "btn-success", "add-to-cart-btn", 3, "disabled"], [1, "btn-icon"], [1, "ti"], [1, "btn-text"], ["type", "button", "title", "Favoris", "aria-label", "Favoris", 1, "btn", "btn-outline-danger", "wishlist-btn", 3, "click", "disabled"], [1, "alert", "alert-danger", "mt-3"], [1, "avis-section", "mt-5", "col-12"], [3, "avis", "produitId", "currentUserId", "currentUserName"], [1, "ti", "ti-check"], [1, "ti", "ti-x"], [1, "ti", "star-icon", 3, "star-filled", "star-half", "star-empty"], [1, "rating-text"], [1, "ti", "star-icon"], [1, "text-muted", "text-decoration-line-through"], [1, "small", "text-success", "mt-1"], [1, "ti", "ti-truck-delivery"], [1, "product-description"], [1, "attributes-list"], [1, "attribute-item"], [1, "ti", "ti-alert-triangle"], [1, "ti", "ti-error-404"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]],
      template: function ProductDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProductDetailComponent_Template_button_click_2_listener() {
            return ctx.onBack();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "i", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, " Retour aux produits ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditionalCreate"](5, ProductDetailComponent_Conditional_5_Template, 6, 0, "div", 4)(6, ProductDetailComponent_Conditional_6_Template, 56, 43, "div", 5)(7, ProductDetailComponent_Conditional_7_Template, 8, 0, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵconditional"](ctx.isLoading ? 5 : ctx.product ? 6 : 7);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _avis_avis_component__WEBPACK_IMPORTED_MODULE_7__.AvisComponent],
      styles: [".product-detail-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 2rem 1rem;\n  color: #1f2937;\n}\n\n\n\n.header-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n\n.back-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: none;\n  border: none;\n  color: #666;\n  font-size: 1rem;\n  cursor: pointer;\n  padding: 0.5rem 1rem;\n  border-radius: 0.5rem;\n  transition: all 0.3s ease;\n}\n.back-button[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n  color: #333;\n}\n.back-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n\n\n\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 400px;\n  color: #666;\n}\n\n\n\n.product-detail-content[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 1.25rem;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.08);\n  overflow: hidden;\n}\n\n\n\n.image-section[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.main-image-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 500px;\n  overflow: hidden;\n  border-radius: 1.25rem;\n  background: #f8fafc;\n}\n\n.main-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.3s ease;\n}\n\n.main-image[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n\n.stock-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  padding: 0.5rem 1rem;\n  border-radius: 2rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.stock-badge.in-stock[_ngcontent-%COMP%] {\n  background-color: #dcfce7;\n  color: #166534;\n}\n.stock-badge.out-of-stock[_ngcontent-%COMP%] {\n  background-color: #fee2e2;\n  color: #991b1b;\n}\n\n.promo-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  left: 1rem;\n  padding: 0.4rem 0.85rem;\n  border-radius: 999px;\n  background: linear-gradient(135deg, #ef4444 0%, #f97316 100%);\n  color: #ffffff;\n  font-weight: 700;\n  font-size: 0.85rem;\n  box-shadow: 0 8px 16px rgba(239, 68, 68, 0.25);\n}\n\n\n\n.info-section[_ngcontent-%COMP%] {\n  padding: 2rem;\n  height: 100%;\n}\n\n.product-header[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n\n.product-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 1rem;\n  line-height: 1.2;\n}\n\n\n\n.rating-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n}\n\n.star-icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.star-icon.star-filled[_ngcontent-%COMP%] {\n  color: #ffc107;\n}\n.star-icon.star-half[_ngcontent-%COMP%] {\n  color: #ffc107;\n}\n.star-icon.star-empty[_ngcontent-%COMP%] {\n  color: #ddd;\n}\n\n.rating-text[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #495057;\n}\n\n\n\n.tags-container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n\n.tag[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  border-radius: 1rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n}\n.tag.tag-category[_ngcontent-%COMP%] {\n  background-color: #e0f2fe;\n  color: #0c4a6e;\n}\n.tag.tag-boutique[_ngcontent-%COMP%] {\n  background-color: #fef3c7;\n  color: #92400e;\n}\n\n\n\n.price-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n\n.current-price[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 0.5rem;\n}\n\n.delivery-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: #16a34a;\n  font-weight: 500;\n}\n\n\n\n.description-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n\n.description-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #333;\n  margin-bottom: 1rem;\n}\n\n.product-description[_ngcontent-%COMP%] {\n  color: #666;\n  line-height: 1.6;\n}\n\n\n\n.attributes-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n\n.attributes-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #333;\n  margin-bottom: 1rem;\n}\n\n.attributes-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n.attribute-item[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  background-color: #f8f9fa;\n  border-radius: 0.5rem;\n  color: #495057;\n  font-size: 0.875rem;\n}\n\n\n\n.add-to-cart-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n  padding: 1.5rem;\n  background-color: #f8fafc;\n  border-radius: 0.9rem;\n  border: 1px solid #e5e7eb;\n}\n\n.quantity-selector[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n\n.quantity-selector[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 600;\n  color: #333;\n  margin-bottom: 0.5rem;\n}\n\n.quantity-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0;\n  width: fit-content;\n}\n\n.quantity-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 1px solid #e5e7eb;\n  background: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.quantity-btn[_ngcontent-%COMP%]:first-child {\n  border-radius: 0.5rem 0 0 0.5rem;\n}\n.quantity-btn[_ngcontent-%COMP%]:last-child {\n  border-radius: 0 0.5rem 0.5rem 0;\n}\n.quantity-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #f3f4f6;\n}\n.quantity-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.quantity-input[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 40px;\n  border: 1px solid #e5e7eb;\n  border-left: none;\n  border-right: none;\n  text-align: center;\n  font-weight: 600;\n}\n.quantity-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #2563eb;\n}\n\n.stock-info[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 0.25rem;\n  color: #666;\n  font-size: 0.875rem;\n}\n\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n\n.add-to-cart-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n  padding: 1rem 2rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n.add-to-cart-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n.wishlist-btn[_ngcontent-%COMP%] {\n  min-width: 50px;\n  padding: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n\n\n.additional-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.info-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  color: #666;\n  font-size: 0.875rem;\n}\n.info-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  color: #28a745;\n}\n\n\n\n.error-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 400px;\n  text-align: center;\n  color: #666;\n}\n.error-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  color: #ddd;\n  margin-bottom: 1rem;\n}\n.error-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n}\n.error-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n\n\n\n@media (max-width: 768px) {\n  .product-detail-container[_ngcontent-%COMP%] {\n    padding: 1rem 0.5rem;\n  }\n  .info-section[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n  .product-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .current-price[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .main-image-container[_ngcontent-%COMP%] {\n    height: 300px;\n  }\n  .action-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .add-to-cart-btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .wishlist-btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (max-width: 576px) {\n  .main-image-container[_ngcontent-%COMP%] {\n    height: 250px;\n  }\n  .product-title[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .current-price[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n  }\n  .quantity-controls[_ngcontent-%COMP%] {\n    margin: 0 auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QtZGV0YWlsL3Byb2R1Y3QtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vV2ViJTIwYXZhbmNlL20xcDEzbWVhbi1DYW5keS1Sb21hbmNlL2Zyb250ZW5kL3NyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QtZGV0YWlsL3Byb2R1Y3QtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUEsbUJBQUE7QUFDQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FDQ0Y7QURDRTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtBQ0NKO0FERUU7RUFDRSxrQkFBQTtBQ0FKOztBRElBLGtCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDREY7O0FESUEsMkJBQUE7QUFDQTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLDhDQUFBO0VBQ0EsZ0JBQUE7QUNERjs7QURJQSxrQkFBQTtBQUNBO0VBQ0Usa0JBQUE7QUNERjs7QURJQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNERjs7QURJQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtBQ0RGOztBRElBO0VBQ0Usc0JBQUE7QUNERjs7QURJQTtFQUNFLGtCQUFB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Y0FBQTtFQzdCRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3QtZGV0YWlsLWNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMnJlbSAxcmVtO1xyXG4gIGNvbG9yOiAjMWYyOTM3O1xyXG59XHJcblxyXG4vKiBIZWFkZXIgU2VjdGlvbiAqL1xyXG4uaGVhZGVyLXNlY3Rpb24ge1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuXHJcbi5iYWNrLWJ1dHRvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC41cmVtO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiAjNjY2O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gIH1cclxuXHJcbiAgaSB7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgfVxyXG59XHJcblxyXG4vKiBMb2FkaW5nIFN0YXRlICovXHJcbi5sb2FkaW5nLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWluLWhlaWdodDogNDAwcHg7XHJcbiAgY29sb3I6ICM2NjY7XHJcbn1cclxuXHJcbi8qIFByb2R1Y3QgRGV0YWlsIENvbnRlbnQgKi9cclxuLnByb2R1Y3QtZGV0YWlsLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMS4yNXJlbTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlN2ViO1xyXG4gIGJveC1zaGFkb3c6IDAgMTJweCAyNHB4IHJnYmEoMTUsIDIzLCA0MiwgMC4wOCk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLyogSW1hZ2UgU2VjdGlvbiAqL1xyXG4uaW1hZ2Utc2VjdGlvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubWFpbi1pbWFnZS1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDUwMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm9yZGVyLXJhZGl1czogMS4yNXJlbTtcclxuICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xyXG59XHJcblxyXG4ubWFpbi1pbWFnZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5tYWluLWltYWdlOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG59XHJcblxyXG4uc3RvY2stYmFkZ2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDFyZW07XHJcbiAgcmlnaHQ6IDFyZW07XHJcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC4yNXJlbTtcclxuXHJcbiAgJi5pbi1zdG9jayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNmY2U3O1xyXG4gICAgY29sb3I6ICMxNjY1MzQ7XHJcbiAgfVxyXG5cclxuICAmLm91dC1vZi1zdG9jayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVlMmUyO1xyXG4gICAgY29sb3I6ICM5OTFiMWI7XHJcbiAgfVxyXG59XHJcblxyXG4ucHJvbW8tYmFkZ2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDFyZW07XHJcbiAgbGVmdDogMXJlbTtcclxuICBwYWRkaW5nOiAwLjRyZW0gMC44NXJlbTtcclxuICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZWY0NDQ0IDAlLCAjZjk3MzE2IDEwMCUpO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggcmdiYSgyMzksIDY4LCA2OCwgMC4yNSk7XHJcbn1cclxuXHJcbi8qIEluZm8gU2VjdGlvbiAqL1xyXG4uaW5mby1zZWN0aW9uIHtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnByb2R1Y3QtaGVhZGVyIHtcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcblxyXG4ucHJvZHVjdC10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6ICMxMTE4Mjc7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICBsaW5lLWhlaWdodDogMS4yO1xyXG59XHJcblxyXG4vKiBSYXRpbmcgKi9cclxuLnJhdGluZy1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDAuNXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4uc3Rhci1pY29uIHtcclxuICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgXHJcbiAgJi5zdGFyLWZpbGxlZCB7XHJcbiAgICBjb2xvcjogI2ZmYzEwNztcclxuICB9XHJcbiAgXHJcbiAgJi5zdGFyLWhhbGYge1xyXG4gICAgY29sb3I6ICNmZmMxMDc7XHJcbiAgfVxyXG4gIFxyXG4gICYuc3Rhci1lbXB0eSB7XHJcbiAgICBjb2xvcjogI2RkZDtcclxuICB9XHJcbn1cclxuXHJcbi5yYXRpbmctdGV4dCB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICM0OTUwNTc7XHJcbn1cclxuXHJcbi8qIFRhZ3MgKi9cclxuLnRhZ3MtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMC41cmVtO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLnRhZyB7XHJcbiAgcGFkZGluZzogMC4yNXJlbSAwLjc1cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjRyZW07XHJcbiAgXHJcbiAgJi50YWctY2F0ZWdvcnkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZjJmZTtcclxuICAgIGNvbG9yOiAjMGM0YTZlO1xyXG4gIH1cclxuICBcclxuICAmLnRhZy1ib3V0aXF1ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmM2M3O1xyXG4gICAgY29sb3I6ICM5MjQwMGU7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBQcmljZSBTZWN0aW9uICovXHJcbi5wcmljZS1zZWN0aW9uIHtcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcblxyXG4uY3VycmVudC1wcmljZSB7XHJcbiAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogIzExMTgyNztcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbn1cclxuXHJcbi5kZWxpdmVyeS1pbmZvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbiAgY29sb3I6ICMxNmEzNGE7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLyogRGVzY3JpcHRpb24gU2VjdGlvbiAqL1xyXG4uZGVzY3JpcHRpb24tc2VjdGlvbiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uLXNlY3Rpb24gaDMge1xyXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5wcm9kdWN0LWRlc2NyaXB0aW9uIHtcclxuICBjb2xvcjogIzY2NjtcclxuICBsaW5lLWhlaWdodDogMS42O1xyXG59XHJcblxyXG4vKiBBdHRyaWJ1dGVzIFNlY3Rpb24gKi9cclxuLmF0dHJpYnV0ZXMtc2VjdGlvbiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxufVxyXG5cclxuLmF0dHJpYnV0ZXMtc2VjdGlvbiBoMyB7XHJcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLmF0dHJpYnV0ZXMtbGlzdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMC41cmVtO1xyXG59XHJcblxyXG4uYXR0cmlidXRlLWl0ZW0ge1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gIGNvbG9yOiAjNDk1MDU3O1xyXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbn1cclxuXHJcbi8qIEFkZCB0byBDYXJ0IFNlY3Rpb24gKi9cclxuLmFkZC10by1jYXJ0LXNlY3Rpb24ge1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgcGFkZGluZzogMS41cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmM7XHJcbiAgYm9yZGVyLXJhZGl1czogMC45cmVtO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU3ZWI7XHJcbn1cclxuXHJcbi5xdWFudGl0eS1zZWxlY3RvciB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG59XHJcblxyXG4ucXVhbnRpdHktc2VsZWN0b3IgbGFiZWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG59XHJcblxyXG4ucXVhbnRpdHktY29udHJvbHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDA7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG59XHJcblxyXG4ucXVhbnRpdHktYnRuIHtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTdlYjtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuXHJcbiAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW0gMCAwIDAuNXJlbTtcclxuICB9XHJcblxyXG4gICY6bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDAuNXJlbSAwLjVyZW0gMDtcclxuICB9XHJcblxyXG4gICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjRmNjtcclxuICB9XHJcblxyXG4gICY6ZGlzYWJsZWQge1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICB9XHJcbn1cclxuXHJcbi5xdWFudGl0eS1pbnB1dCB7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU3ZWI7XHJcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG5cclxuICAmOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXItY29sb3I6ICMyNTYzZWI7XHJcbiAgfVxyXG59XHJcblxyXG4uc3RvY2staW5mbyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLXRvcDogMC4yNXJlbTtcclxuICBjb2xvcjogIzY2NjtcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG59XHJcblxyXG4uYWN0aW9uLWJ1dHRvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAxcmVtO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmFkZC10by1jYXJ0LWJ0biB7XHJcbiAgZmxleDogMTtcclxuICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDAuNXJlbTtcclxuXHJcbiAgJjpkaXNhYmxlZCB7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gIH1cclxufVxyXG5cclxuLndpc2hsaXN0LWJ0biB7XHJcbiAgbWluLXdpZHRoOiA1MHB4O1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4vKiBBZGRpdGlvbmFsIEluZm8gKi9cclxuLmFkZGl0aW9uYWwtaW5mbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMXJlbTtcclxufVxyXG5cclxuLmluZm8taXRlbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC43NXJlbTtcclxuICBjb2xvcjogIzY2NjtcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG5cclxuICBpIHtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgIGNvbG9yOiAjMjhhNzQ1O1xyXG4gIH1cclxufVxyXG5cclxuLyogRXJyb3IgU3RhdGUgKi9cclxuLmVycm9yLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWluLWhlaWdodDogNDAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjNjY2O1xyXG5cclxuICBpIHtcclxuICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgIGNvbG9yOiAjZGRkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcblxyXG4gIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICB9XHJcbn1cclxuXHJcbi8qIFJlc3BvbnNpdmUgRGVzaWduICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5wcm9kdWN0LWRldGFpbC1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMXJlbSAwLjVyZW07XHJcbiAgfVxyXG5cclxuICAuaW5mby1zZWN0aW9uIHtcclxuICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICB9XHJcblxyXG4gIC5wcm9kdWN0LXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIH1cclxuXHJcbiAgLmN1cnJlbnQtcHJpY2Uge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gIH1cclxuXHJcbiAgLm1haW4taW1hZ2UtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgfVxyXG5cclxuICAuYWN0aW9uLWJ1dHRvbnMge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gIC5hZGQtdG8tY2FydC1idG4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAud2lzaGxpc3QtYnRuIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgLm1haW4taW1hZ2UtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgfVxyXG5cclxuICAucHJvZHVjdC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgfVxyXG5cclxuICAuY3VycmVudC1wcmljZSB7XHJcbiAgICBmb250LXNpemU6IDEuNzVyZW07XHJcbiAgfVxyXG5cclxuICAucXVhbnRpdHktY29udHJvbHMge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG59XHJcbiIsIi5wcm9kdWN0LWRldGFpbC1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDJyZW0gMXJlbTtcbiAgY29sb3I6ICMxZjI5Mzc7XG59XG5cbi8qIEhlYWRlciBTZWN0aW9uICovXG4uaGVhZGVyLXNlY3Rpb24ge1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG4uYmFjay1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogIzY2NjtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG4uYmFjay1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xuICBjb2xvcjogIzMzMztcbn1cbi5iYWNrLWJ1dHRvbiBpIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xufVxuXG4vKiBMb2FkaW5nIFN0YXRlICovXG4ubG9hZGluZy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogNDAwcHg7XG4gIGNvbG9yOiAjNjY2O1xufVxuXG4vKiBQcm9kdWN0IERldGFpbCBDb250ZW50ICovXG4ucHJvZHVjdC1kZXRhaWwtY29udGVudCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEuMjVyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU3ZWI7XG4gIGJveC1zaGFkb3c6IDAgMTJweCAyNHB4IHJnYmEoMTUsIDIzLCA0MiwgMC4wOCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi8qIEltYWdlIFNlY3Rpb24gKi9cbi5pbWFnZS1zZWN0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubWFpbi1pbWFnZS1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiAxLjI1cmVtO1xuICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xufVxuXG4ubWFpbi1pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xufVxuXG4ubWFpbi1pbWFnZTpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG59XG5cbi5zdG9jay1iYWRnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxcmVtO1xuICByaWdodDogMXJlbTtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC4yNXJlbTtcbn1cbi5zdG9jay1iYWRnZS5pbi1zdG9jayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkY2ZjZTc7XG4gIGNvbG9yOiAjMTY2NTM0O1xufVxuLnN0b2NrLWJhZGdlLm91dC1vZi1zdG9jayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWUyZTI7XG4gIGNvbG9yOiAjOTkxYjFiO1xufVxuXG4ucHJvbW8tYmFkZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMXJlbTtcbiAgbGVmdDogMXJlbTtcbiAgcGFkZGluZzogMC40cmVtIDAuODVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZWY0NDQ0IDAlLCAjZjk3MzE2IDEwMCUpO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICBib3gtc2hhZG93OiAwIDhweCAxNnB4IHJnYmEoMjM5LCA2OCwgNjgsIDAuMjUpO1xufVxuXG4vKiBJbmZvIFNlY3Rpb24gKi9cbi5pbmZvLXNlY3Rpb24ge1xuICBwYWRkaW5nOiAycmVtO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5wcm9kdWN0LWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi5wcm9kdWN0LXRpdGxlIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzExMTgyNztcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cblxuLyogUmF0aW5nICovXG4ucmF0aW5nLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4uc3Rhci1pY29uIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xufVxuLnN0YXItaWNvbi5zdGFyLWZpbGxlZCB7XG4gIGNvbG9yOiAjZmZjMTA3O1xufVxuLnN0YXItaWNvbi5zdGFyLWhhbGYge1xuICBjb2xvcjogI2ZmYzEwNztcbn1cbi5zdGFyLWljb24uc3Rhci1lbXB0eSB7XG4gIGNvbG9yOiAjZGRkO1xufVxuXG4ucmF0aW5nLXRleHQge1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjNDk1MDU3O1xufVxuXG4vKiBUYWdzICovXG4udGFncy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDAuNXJlbTtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4udGFnIHtcbiAgcGFkZGluZzogMC4yNXJlbSAwLjc1cmVtO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjRyZW07XG59XG4udGFnLnRhZy1jYXRlZ29yeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGYyZmU7XG4gIGNvbG9yOiAjMGM0YTZlO1xufVxuLnRhZy50YWctYm91dGlxdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmM2M3O1xuICBjb2xvcjogIzkyNDAwZTtcbn1cblxuLyogUHJpY2UgU2VjdGlvbiAqL1xuLnByaWNlLXNlY3Rpb24ge1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG4uY3VycmVudC1wcmljZSB7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzExMTgyNztcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuXG4uZGVsaXZlcnktaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xuICBjb2xvcjogIzE2YTM0YTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLyogRGVzY3JpcHRpb24gU2VjdGlvbiAqL1xuLmRlc2NyaXB0aW9uLXNlY3Rpb24ge1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG4uZGVzY3JpcHRpb24tc2VjdGlvbiBoMyB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMzMzM7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5wcm9kdWN0LWRlc2NyaXB0aW9uIHtcbiAgY29sb3I6ICM2NjY7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG59XG5cbi8qIEF0dHJpYnV0ZXMgU2VjdGlvbiAqL1xuLmF0dHJpYnV0ZXMtc2VjdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi5hdHRyaWJ1dGVzLXNlY3Rpb24gaDMge1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMzMzO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4uYXR0cmlidXRlcy1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwLjVyZW07XG59XG5cbi5hdHRyaWJ1dGUtaXRlbSB7XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIGNvbG9yOiAjNDk1MDU3O1xuICBmb250LXNpemU6IDAuODc1cmVtO1xufVxuXG4vKiBBZGQgdG8gQ2FydCBTZWN0aW9uICovXG4uYWRkLXRvLWNhcnQtc2VjdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIHBhZGRpbmc6IDEuNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmFmYztcbiAgYm9yZGVyLXJhZGl1czogMC45cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlN2ViO1xufVxuXG4ucXVhbnRpdHktc2VsZWN0b3Ige1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5cbi5xdWFudGl0eS1zZWxlY3RvciBsYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzMzMztcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuXG4ucXVhbnRpdHktY29udHJvbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDA7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbn1cblxuLnF1YW50aXR5LWJ0biB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU3ZWI7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG4ucXVhbnRpdHktYnRuOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtIDAgMCAwLjVyZW07XG59XG4ucXVhbnRpdHktYnRuOmxhc3QtY2hpbGQge1xuICBib3JkZXItcmFkaXVzOiAwIDAuNXJlbSAwLjVyZW0gMDtcbn1cbi5xdWFudGl0eS1idG46aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmNGY2O1xufVxuLnF1YW50aXR5LWJ0bjpkaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLnF1YW50aXR5LWlucHV0IHtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTdlYjtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLnF1YW50aXR5LWlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLWNvbG9yOiAjMjU2M2ViO1xufVxuXG4uc3RvY2staW5mbyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xuICBjb2xvcjogIzY2NjtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbn1cblxuLmFjdGlvbi1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxcmVtO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5hZGQtdG8tY2FydC1idG4ge1xuICBmbGV4OiAxO1xuICBtaW4td2lkdGg6IDIwMHB4O1xuICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbn1cbi5hZGQtdG8tY2FydC1idG46ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjY7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi53aXNobGlzdC1idG4ge1xuICBtaW4td2lkdGg6IDUwcHg7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4vKiBBZGRpdGlvbmFsIEluZm8gKi9cbi5hZGRpdGlvbmFsLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDFyZW07XG59XG5cbi5pbmZvLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNzVyZW07XG4gIGNvbG9yOiAjNjY2O1xuICBmb250LXNpemU6IDAuODc1cmVtO1xufVxuLmluZm8taXRlbSBpIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBjb2xvcjogIzI4YTc0NTtcbn1cblxuLyogRXJyb3IgU3RhdGUgKi9cbi5lcnJvci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogNDAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM2NjY7XG59XG4uZXJyb3ItY29udGFpbmVyIGkge1xuICBmb250LXNpemU6IDRyZW07XG4gIGNvbG9yOiAjZGRkO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLmVycm9yLWNvbnRhaW5lciBoMyB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLmVycm9yLWNvbnRhaW5lciBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuLyogUmVzcG9uc2l2ZSBEZXNpZ24gKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucHJvZHVjdC1kZXRhaWwtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxcmVtIDAuNXJlbTtcbiAgfVxuICAuaW5mby1zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG4gIH1cbiAgLnByb2R1Y3QtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG4gIC5jdXJyZW50LXByaWNlIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cbiAgLm1haW4taW1hZ2UtY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICB9XG4gIC5hY3Rpb24tYnV0dG9ucyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAuYWRkLXRvLWNhcnQtYnRuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAud2lzaGxpc3QtYnRuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5tYWluLWltYWdlLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgfVxuICAucHJvZHVjdC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICB9XG4gIC5jdXJyZW50LXByaWNlIHtcbiAgICBmb250LXNpemU6IDEuNzVyZW07XG4gIH1cbiAgLnF1YW50aXR5LWNvbnRyb2xzIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_demo_pages_product-detail_product-detail-page_component_ts.js.map