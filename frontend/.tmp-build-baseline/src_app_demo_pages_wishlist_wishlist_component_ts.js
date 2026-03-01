"use strict";
(self["webpackChunkfree_version"] = self["webpackChunkfree_version"] || []).push([["src_app_demo_pages_wishlist_wishlist_component_ts"],{

/***/ 3521:
/*!***********************************************************!*\
  !*** ./src/app/demo/pages/wishlist/wishlist.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WishlistComponent: () => (/* binding */ WishlistComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 6264);
/* harmony import */ var _services_favoris_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/favoris.service */ 6334);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 6124);






const _c0 = a0 => ["/product", a0];
const _forTrack0 = ($index, $item) => $item._id;
function WishlistComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r0.favoris.length, " produit(s)");
  }
}
function WishlistComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 4)(1, "div", 7)(2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Chargement...");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Chargement de votre wishlist...");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function WishlistComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Aucun favori pour le moment");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Ajoutez des produits en favoris puis revenez ici.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Voir les produits");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function WishlistComponent_Conditional_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 13)(1, "a", 14)(2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 17)(5, "h6", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 20)(10, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Voir details");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const favori_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](6, _c0, favori_r2._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", favori_r2.photo || "https://via.placeholder.com/640x420?text=Produit", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"])("alt", favori_r2.nom);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](favori_r2.nom);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((favori_r2.categorieId == null ? null : favori_r2.categorieId.nom) || "Produit favori");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.formatPrice(ctx_r0.getProductPrice(favori_r2)));
  }
}
function WishlistComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](1, WishlistComponent_Conditional_7_For_2_Template, 14, 8, "div", 13, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx_r0.favoris);
  }
}
class WishlistComponent {
  constructor() {
    this.favorisService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_favoris_service__WEBPACK_IMPORTED_MODULE_4__.FavorisService);
    this.cdr = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef);
    this.favoris = [];
    this.isLoading = false;
  }
  ngOnInit() {
    this.loadFavoris();
  }
  loadFavoris() {
    this.isLoading = true;
    this.favorisService.getFavoris().subscribe({
      next: favoris => {
        this.favoris = favoris;
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: error => {
        console.error('Erreur chargement wishlist:', error);
        this.favoris = [];
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }
  getProductPrice(produit) {
    const prix = Array.isArray(produit.prix) ? produit.prix : [];
    if (!prix.length) return 0;
    const latestPrice = prix[prix.length - 1];
    return Number(latestPrice?.prixUnitaire) || 0;
  }
  formatPrice(price) {
    return new Intl.NumberFormat('fr-FR', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price) + ' Ar';
  }
  static {
    this.ɵfac = function WishlistComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || WishlistComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: WishlistComponent,
      selectors: [["app-wishlist"]],
      decls: 8,
      vars: 2,
      consts: [[1, "wishlist-page", "container-fluid", "py-4"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-2", "mb-4"], [1, "mb-0"], [1, "badge", "text-bg-light"], [1, "text-center", "py-5"], [1, "empty-state", "text-center", "py-5"], [1, "row", "g-3"], ["role", "status", 1, "spinner-border", "text-danger"], [1, "visually-hidden"], [1, "text-muted", "mt-2", "mb-0"], [1, "ti", "ti-heart-off", "mb-3"], [1, "text-muted", "mb-3"], ["routerLink", "/produits", 1, "btn", "btn-primary"], [1, "col-xl-3", "col-lg-4", "col-md-6"], [1, "wishlist-card", "text-decoration-none", "d-block", "h-100", 3, "routerLink"], [1, "wishlist-image-wrapper"], ["loading", "lazy", 3, "src", "alt"], [1, "wishlist-card-body"], [1, "wishlist-title", "mb-1"], [1, "wishlist-subtitle", "mb-2"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "wishlist-price"], [1, "wishlist-link"]],
      template: function WishlistComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Mes produits favoris");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](4, WishlistComponent_Conditional_4_Template, 2, 1, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](5, WishlistComponent_Conditional_5_Template, 6, 0, "div", 4)(6, WishlistComponent_Conditional_6_Template, 8, 0, "div", 5)(7, WishlistComponent_Conditional_7_Template, 3, 0, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](!ctx.isLoading ? 4 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx.isLoading ? 5 : ctx.favoris.length === 0 ? 6 : 7);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
      styles: [".wishlist-card[_ngcontent-%COMP%] {\n  border: 1px solid #eceff5;\n  border-radius: 14px;\n  overflow: hidden;\n  background: #fff;\n  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;\n}\n.wishlist-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  border-color: #d8deea;\n  box-shadow: 0 12px 28px rgba(24, 35, 58, 0.12);\n}\n\n.wishlist-image-wrapper[_ngcontent-%COMP%] {\n  height: 190px;\n  background: #f4f7fb;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.wishlist-image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.wishlist-card-body[_ngcontent-%COMP%] {\n  padding: 0.95rem;\n}\n\n.wishlist-title[_ngcontent-%COMP%] {\n  color: #1f2a44;\n}\n\n.wishlist-subtitle[_ngcontent-%COMP%] {\n  color: #6c778f;\n  font-size: 0.84rem;\n}\n\n.wishlist-price[_ngcontent-%COMP%] {\n  color: #10203d;\n  font-weight: 700;\n}\n\n.wishlist-link[_ngcontent-%COMP%] {\n  color: #c0392b;\n  font-size: 0.84rem;\n  font-weight: 600;\n}\n\n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: #e44d4d;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVtby9wYWdlcy93aXNobGlzdC93aXNobGlzdC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uL1dlYiUyMGF2YW5jZS9tMXAxM21lYW4tQ2FuZHktUm9tYW5jZS9mcm9udGVuZC9zcmMvYXBwL2RlbW8vcGFnZXMvd2lzaGxpc3Qvd2lzaGxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDZFQUFBO0FDQ0Y7QURDRTtFQUNFLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSw4Q0FBQTtBQ0NKOztBREdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNBRjtBREVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0FKOztBRElBO0VBQ0UsZ0JBQUE7QUNERjs7QURJQTtFQUNFLGNBQUE7QUNERjs7QURJQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQ0RGOztBRElBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDREY7O0FESUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0RGOztBREtFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNGSiIsInNvdXJjZXNDb250ZW50IjpbIi53aXNobGlzdC1jYXJkIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZWNlZmY1O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UsIGJveC1zaGFkb3cgMC4ycyBlYXNlLCBib3JkZXItY29sb3IgMC4ycyBlYXNlO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KTtcclxuICAgIGJvcmRlci1jb2xvcjogI2Q4ZGVlYTtcclxuICAgIGJveC1zaGFkb3c6IDAgMTJweCAyOHB4IHJnYmEoMjQsIDM1LCA1OCwgMC4xMik7XHJcbiAgfVxyXG59XHJcblxyXG4ud2lzaGxpc3QtaW1hZ2Utd3JhcHBlciB7XHJcbiAgaGVpZ2h0OiAxOTBweDtcclxuICBiYWNrZ3JvdW5kOiAjZjRmN2ZiO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4ud2lzaGxpc3QtY2FyZC1ib2R5IHtcclxuICBwYWRkaW5nOiAwLjk1cmVtO1xyXG59XHJcblxyXG4ud2lzaGxpc3QtdGl0bGUge1xyXG4gIGNvbG9yOiAjMWYyYTQ0O1xyXG59XHJcblxyXG4ud2lzaGxpc3Qtc3VidGl0bGUge1xyXG4gIGNvbG9yOiAjNmM3NzhmO1xyXG4gIGZvbnQtc2l6ZTogMC44NHJlbTtcclxufVxyXG5cclxuLndpc2hsaXN0LXByaWNlIHtcclxuICBjb2xvcjogIzEwMjAzZDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4ud2lzaGxpc3QtbGluayB7XHJcbiAgY29sb3I6ICNjMDM5MmI7XHJcbiAgZm9udC1zaXplOiAwLjg0cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5lbXB0eS1zdGF0ZSB7XHJcbiAgaSB7XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICBjb2xvcjogI2U0NGQ0ZDtcclxuICB9XHJcbn1cclxuIiwiLndpc2hsaXN0LWNhcmQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWNlZmY1O1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLCBib3gtc2hhZG93IDAuMnMgZWFzZSwgYm9yZGVyLWNvbG9yIDAuMnMgZWFzZTtcbn1cbi53aXNobGlzdC1jYXJkOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpO1xuICBib3JkZXItY29sb3I6ICNkOGRlZWE7XG4gIGJveC1zaGFkb3c6IDAgMTJweCAyOHB4IHJnYmEoMjQsIDM1LCA1OCwgMC4xMik7XG59XG5cbi53aXNobGlzdC1pbWFnZS13cmFwcGVyIHtcbiAgaGVpZ2h0OiAxOTBweDtcbiAgYmFja2dyb3VuZDogI2Y0ZjdmYjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ud2lzaGxpc3QtaW1hZ2Utd3JhcHBlciBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLndpc2hsaXN0LWNhcmQtYm9keSB7XG4gIHBhZGRpbmc6IDAuOTVyZW07XG59XG5cbi53aXNobGlzdC10aXRsZSB7XG4gIGNvbG9yOiAjMWYyYTQ0O1xufVxuXG4ud2lzaGxpc3Qtc3VidGl0bGUge1xuICBjb2xvcjogIzZjNzc4ZjtcbiAgZm9udC1zaXplOiAwLjg0cmVtO1xufVxuXG4ud2lzaGxpc3QtcHJpY2Uge1xuICBjb2xvcjogIzEwMjAzZDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLndpc2hsaXN0LWxpbmsge1xuICBjb2xvcjogI2MwMzkyYjtcbiAgZm9udC1zaXplOiAwLjg0cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uZW1wdHktc3RhdGUgaSB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgY29sb3I6ICNlNDRkNGQ7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_demo_pages_wishlist_wishlist_component_ts.js.map