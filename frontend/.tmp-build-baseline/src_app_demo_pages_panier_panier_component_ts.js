"use strict";
(self["webpackChunkfree_version"] = self["webpackChunkfree_version"] || []).push([["src_app_demo_pages_panier_panier_component_ts"],{

/***/ 1778:
/*!*******************************************************!*\
  !*** ./src/app/demo/pages/panier/panier.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanierComponent: () => (/* binding */ PanierComponent)
/* harmony export */ });
/* harmony import */ var D_Master_Web_avance_m1p13mean_Candy_Romance_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 3900);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ 8130);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 5342);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 3305);
/* harmony import */ var _services_panier_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../services/panier.service */ 2619);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../services/product.service */ 6241);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../services/auth.service */ 4796);
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../services/notification.service */ 7473);













const _forTrack0 = ($index, $item) => $item.produit._id;
function PanierComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElement"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Chargement du panier...");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementEnd"]()();
  }
}
function PanierComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElement"](1, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Votre panier est vide");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementStart"](4, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomListener"]("click", function PanierComponent_Conditional_3_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.goToProducts());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, " D\u00E9couvrir nos produits ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementEnd"]()();
  }
}
function PanierComponent_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0, " Panier Expir\u00E9 ");
  }
}
function PanierComponent_Conditional_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0, " Temps Restant ");
  }
}
function PanierComponent_Conditional_4_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElement"](1, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Votre panier a expir\u00E9. Veuillez le recr\u00E9er. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementEnd"]();
  }
}
function PanierComponent_Conditional_4_For_23_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementStart"](0, "small", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElement"](1, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementEnd"]();
  }
  if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r5.produit.boutiqueId.nom, " ");
  }
}
function PanierComponent_Conditional_4_For_23_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElement"](0, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Rupture de stock ");
  }
}
function PanierComponent_Conditional_4_For_23_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElement"](0, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
  }
  if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", ctx_r1.getAvailableStock(item_r5.produit), " restant", ctx_r1.getAvailableStock(item_r5.produit) > 1 ? "s" : "", " ");
  }
}
function PanierComponent_Conditional_4_For_23_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElement"](0, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
  }
  if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.getAvailableStock(item_r5.produit), " disponibles ");
  }
}
function PanierComponent_Conditional_4_For_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementStart"](0, "tr")(1, "td", 26)(2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElement"](3, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementStart"](4, "div", 29)(5, "h6", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementStart"](7, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](8, PanierComponent_Conditional_4_For_23_Conditional_8_Template, 3, 1, "small", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementStart"](9, "small", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](10, PanierComponent_Conditional_4_For_23_Conditional_10_Template, 2, 0)(11, PanierComponent_Conditional_4_For_23_Conditional_11_Template, 2, 2)(12, PanierComponent_Conditional_4_For_23_Conditional_12_Template, 2, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementStart"](13, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementStart"](15, "td", 35)(16, "div", 36)(17, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomListener"]("click", function PanierComponent_Conditional_4_For_23_Template_button_click_17_listener() {
      const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.decreaseQuantity(item_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElement"](18, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementStart"](19, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementStart"](21, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomListener"]("click", function PanierComponent_Conditional_4_For_23_Template_button_click_21_listener() {
      const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.increaseQuantity(item_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElement"](22, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementStart"](23, "td", 41)(24, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementStart"](26, "td", 43)(27, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomListener"]("click", function PanierComponent_Conditional_4_For_23_Template_button_click_27_listener() {
      const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.removeItem(item_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElement"](28, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementEnd"]()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("@itemAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomProperty"]("src", item_r5.produit.photo, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"])("alt", item_r5.produit.nom);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomProperty"]("title", item_r5.produit.nom);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r5.produit.nom, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](item_r5.produit.boutiqueId ? 8 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("low-stock", ctx_r1.getAvailableStock(item_r5.produit) > 0 && ctx_r1.getAvailableStock(item_r5.produit) <= 3)("out-of-stock", ctx_r1.getAvailableStock(item_r5.produit) === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx_r1.getAvailableStock(item_r5.produit) === 0 ? 10 : ctx_r1.getAvailableStock(item_r5.produit) <= 3 ? 11 : 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.formatPrice(item_r5.prixUnitaire), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomProperty"]("disabled", item_r5.qtt <= 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r5.qtt);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomProperty"]("disabled", item_r5.qtt >= ctx_r1.getAvailableStock(item_r5.produit));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.formatPrice(item_r5.sousTotal));
  }
}
function PanierComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementStart"](0, "div", 7)(1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](2, PanierComponent_Conditional_4_Conditional_2_Template, 1, 0)(3, PanierComponent_Conditional_4_Conditional_3_Template, 1, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](6, PanierComponent_Conditional_4_Conditional_6_Template, 3, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementStart"](7, "div", 11)(8, "table", 12)(9, "thead")(10, "tr")(11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "Produit");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementStart"](13, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "Prix");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementStart"](15, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "Quantit\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementStart"](17, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementStart"](19, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementStart"](21, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterCreate"](22, PanierComponent_Conditional_4_For_23_Template, 29, 16, "tr", null, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementStart"](24, "tfoot")(25, "tr")(26, "td", 14)(27, "div", 15)(28, "div", 16)(29, "div", 17)(30, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31, "Total :");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementStart"](32, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementStart"](34, "div", 18)(35, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomListener"]("click", function PanierComponent_Conditional_4_Template_button_click_35_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.goToProducts());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElement"](36, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37, " Continuer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementStart"](38, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomListener"]("click", function PanierComponent_Conditional_4_Template_button_click_38_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.viderPanier());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElement"](39, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](40, " Vider le panier ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementStart"](41, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomListener"]("click", function PanierComponent_Conditional_4_Template_button_click_41_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.validerCommande());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](42, " Commander ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElement"](43, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementEnd"]()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("expired", ctx_r1.isExpired);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx_r1.isExpired ? 2 : 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("expired", ctx_r1.isExpired);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.timeRemaining, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx_r1.isExpired ? 6 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeater"](ctx_r1.panier.produitsachete);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.formatPrice(ctx_r1.calculateTotal()));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomProperty"]("disabled", !ctx_r1.panier || ctx_r1.panier.produitsachete.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomProperty"]("disabled", ctx_r1.panier.produitsachete.length === 0 || ctx_r1.isExpired);
  }
}
class PanierComponent {
  constructor(router, panierService, productService, authService, notificationService, cdr) {
    this.router = router;
    this.panierService = panierService;
    this.productService = productService;
    this.authService = authService;
    this.notificationService = notificationService;
    this.cdr = cdr;
    this.panier = null;
    this.loading = false;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.isLoading = false;
    this.timeRemaining = '';
    this.isExpired = false;
  }
  ngOnInit() {
    this.authService.ensureUserExists();
    this.loadPanier();
    this.startCountdown();
    this.panierService.onPanierUpdated().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe(() => this.refreshPanier());
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  }
  // ─── Chargement ──────────────────────────────────────────
  loadPanier() {
    var _this = this;
    if (this.isLoading) return;
    this.isLoading = true;
    this.loading = true;
    this.panierService.getPanier().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe({
      next: function () {
        var _ref = (0,D_Master_Web_avance_m1p13mean_Candy_Romance_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
          Promise.resolve().then(/*#__PURE__*/(0,D_Master_Web_avance_m1p13mean_Candy_Romance_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            _this.panier = response.data;
            // Charger le stock disponible pour chaque produit via l'API
            if (_this.panier && _this.panier.produitsachete) {
              for (const item of _this.panier.produitsachete) {
                try {
                  const stockData = yield _this.loadProductStock(item.produit._id);
                  // Stocker le stock disponible dans une propriété temporaire
                  item.produit.availableStock = stockData;
                } catch (error) {
                  console.error(`Erreur chargement stock pour ${item.produit.nom}:`, error);
                  // Utiliser le calcul local en secours
                  item.produit.availableStock = _this.getAvailableStock(item.produit);
                }
              }
            }
            _this.loading = false;
            _this.isLoading = false;
            _this.updateTimeRemaining();
            _this.cdr.detectChanges();
          }));
        });
        return function next(_x) {
          return _ref.apply(this, arguments);
        };
      }(),
      error: error => {
        Promise.resolve().then(() => {
          console.error('Erreur chargement panier:', error);
          this.loading = false;
          this.isLoading = false;
          this.panier = null;
          this.notificationService.error('Erreur lors du chargement du panier');
          this.cdr.detectChanges();
        });
      }
    });
  }
  refreshPanier() {
    this.isLoading = false;
    this.loadPanier();
  }
  // ─── Countdown ───────────────────────────────────────────
  startCountdown() {
    this.countdownInterval = setInterval(() => {
      this.updateTimeRemaining();
      this.cdr.detectChanges();
    }, 1000);
  }
  updateTimeRemaining() {
    let expiryTime = null;
    let shouldCheckExpiration = false;
    // Logique d'expiration selon le statut du panier
    if (this.panier?.statut === 'panier') {
      // Pour les paniers actifs : on vérifie expiresAt (2h par défaut)
      shouldCheckExpiration = true;
      if (this.panier?.expiresAt) {
        // Cas 1 : le backend fournit directement expiresAt
        expiryTime = new Date(this.panier.expiresAt).getTime();
      } else if (this.panier?.createdAt) {
        // Cas 2 : on calcule 2h après la création
        expiryTime = new Date(this.panier.createdAt).getTime() + 2 * 60 * 60 * 1000;
      }
    } else if (this.panier?.statut === 'en_attente') {
      // Pour les paniers en attente : on vérifie expiresAt (24h par défaut)
      shouldCheckExpiration = true;
      if (this.panier?.expiresAt) {
        expiryTime = new Date(this.panier.expiresAt).getTime();
      } else if (this.panier?.createdAt) {
        // Cas 2 : on calcule 24h après la validation
        expiryTime = new Date(this.panier.createdAt).getTime() + 24 * 60 * 60 * 1000;
      }
    } else {
      // Pour les autres statuts (confirmee, preparation, expedie, livre, annule) : pas d'expiration
      shouldCheckExpiration = false;
    }
    if (!shouldCheckExpiration || expiryTime === null) {
      this.timeRemaining = 'Non défini';
      this.isExpired = false;
      return;
    }
    const diff = expiryTime - Date.now();
    const tenMinutesInMs = 10 * 60 * 1000;
    if (diff <= 0) {
      this.timeRemaining = 'Expiré';
      this.isExpired = true;
      clearInterval(this.countdownInterval);
      // Action différente selon le statut
      if (this.panier?.statut === 'panier') {
        this.notificationService.error('Votre panier a expiré. Veuillez le recréer.');
        // Supprimer automatiquement le panier expiré
        this.supprimerPanierExpiré();
      } else if (this.panier?.statut === 'en_attente') {
        this.notificationService.warning('Votre commande a expiré. Veuillez contacter le support.');
        // Ne pas supprimer automatiquement les commandes en attente
        // Laisser l'admin boutique gérer manuellement
      }
      return;
    }
    // Afficher un warning si moins de 10 minutes
    if (diff <= tenMinutesInMs && diff > 0) {
      const h = Math.floor(diff / 3_600_000);
      const m = Math.floor(diff % 3_600_000 / 60_000);
      const s = Math.floor(diff % 60_000 / 1000);
      this.timeRemaining = `⚠️ ${h}h ${String(m).padStart(2, '0')}m ${String(s).padStart(2, '0')}s`;
    } else {
      const h = Math.floor(diff / 3_600_000);
      const m = Math.floor(diff % 3_600_000 / 60_000);
      const s = Math.floor(diff % 60_000 / 1000);
      this.timeRemaining = `${h}h ${String(m).padStart(2, '0')}m ${String(s).padStart(2, '0')}s`;
    }
    this.isExpired = false;
  }
  resolveVariantStock(variant) {
    if (!variant) return {
      total: 0,
      reserved: 0
    };
    // Le champ de quantité peut s'appeler qtt, quantity, stock, etc.
    const total = variant.qtt ?? variant.quantity ?? variant.stock ?? variant.qty ?? 0;
    const reserved = variant.reserved ?? variant.reservedQty ?? variant.reservedQuantity ?? 0;
    return {
      total: Math.max(0, Number(total)),
      reserved: Math.max(0, Number(reserved))
    };
  }
  /**
   * Stock total d'un produit (affiché pour information)
   */
  getProductStock(produit) {
    // On prend la première variante disponible
    const variant = produit.variant?.[0] ?? produit.variant ?? null;
    const {
      total
    } = this.resolveVariantStock(variant);
    return total;
  }
  /**
   * Stock réellement disponible = total - réservations
   * C'est cette valeur qui pilote l'affichage du badge et les boutons +/-
   */
  getAvailableStock(produit) {
    // Utiliser d'abord le stock chargé via l'API, sinon le calcul local
    if (produit.availableStock !== undefined) {
      return produit.availableStock;
    }
    // Secours : calcul local
    const variant = produit.variant?.[0] ?? produit.variant ?? null;
    const {
      total,
      reserved
    } = this.resolveVariantStock(variant);
    const available = total - reserved;
    // Log discret pour aider au debug sans polluer la console
    console.debug(`[Stock] ${produit.nom} → total=${total} reserved=${reserved} available=${available}`);
    return Math.max(0, available);
  }
  /**
   * Méthode pour obtenir le stock total via l'API (si nécessaire)
   */
  loadProductStock(produitId) {
    var _this2 = this;
    return (0,D_Master_Web_avance_m1p13mean_Candy_Romance_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const stockData = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.lastValueFrom)(_this2.productService.getProductStock(produitId));
        return stockData.availableStock;
      } catch (error) {
        console.error('Erreur chargement stock:', error);
        return 0; // En cas d'erreur, retourner 0
      }
    })();
  }
  // ─── Quantités ───────────────────────────────────────────
  updateQuantity(item, quantity) {
    var _this3 = this;
    const maxStock = this.getAvailableStock(item.produit);
    if (quantity < 1) {
      quantity = 1;
    } else if (quantity > maxStock) {
      this.notificationService.warning(`Stock maximum atteint : ${maxStock} article${maxStock > 1 ? 's' : ''} disponible${maxStock > 1 ? 's' : ''}`);
      return;
    }
    this.panierService.updateQuantite(item.produit._id, quantity).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe({
      next: function () {
        var _ref3 = (0,D_Master_Web_avance_m1p13mean_Candy_Romance_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
          _this3.panier = response.data;
          // Recharger les stocks disponibles pour tous les produits
          if (_this3.panier && _this3.panier.produitsachete) {
            for (const item of _this3.panier.produitsachete) {
              try {
                const stockData = yield _this3.loadProductStock(item.produit._id);
                item.produit.availableStock = stockData;
              } catch (error) {
                console.error(`Erreur chargement stock pour ${item.produit.nom}:`, error);
                item.produit.availableStock = _this3.getAvailableStock(item.produit);
              }
            }
          }
          _this3.updateTimeRemaining();
          _this3.notificationService.success('Quantité mise à jour');
          _this3.cdr.detectChanges();
        });
        return function next(_x2) {
          return _ref3.apply(this, arguments);
        };
      }(),
      error: error => {
        console.error('Erreur mise à jour quantité:', error);
        this.notificationService.error('Erreur lors de la mise à jour de la quantité');
      }
    });
  }
  increaseQuantity(item) {
    const maxStock = this.getAvailableStock(item.produit);
    if (item.qtt >= maxStock) {
      this.notificationService.warning(`Stock maximum atteint : ${maxStock} article${maxStock > 1 ? 's' : ''} disponible${maxStock > 1 ? 's' : ''}`);
      return;
    }
    this.updateQuantity(item, item.qtt + 1);
  }
  decreaseQuantity(item) {
    this.updateQuantity(item, item.qtt - 1);
  }
  // ─── Suppression / vidage ────────────────────────────────
  removeItem(item) {
    var _this4 = this;
    if (!confirm('Êtes-vous sûr de vouloir supprimer cet article du panier ?')) return;
    this.panierService.removeFromPanier(item.produit._id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe({
      next: function () {
        var _ref4 = (0,D_Master_Web_avance_m1p13mean_Candy_Romance_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
          _this4.panier = response.data;
          // Recharger les stocks disponibles pour tous les produits restants
          if (_this4.panier && _this4.panier.produitsachete) {
            for (const item of _this4.panier.produitsachete) {
              try {
                const stockData = yield _this4.loadProductStock(item.produit._id);
                item.produit.availableStock = stockData;
              } catch (error) {
                console.error(`Erreur chargement stock pour ${item.produit.nom}:`, error);
                item.produit.availableStock = _this4.getAvailableStock(item.produit);
              }
            }
          }
          _this4.updateTimeRemaining();
          _this4.notificationService.success('Article supprimé du panier');
          _this4.cdr.detectChanges();
        });
        return function next(_x3) {
          return _ref4.apply(this, arguments);
        };
      }(),
      error: error => {
        console.error('Erreur suppression article:', error);
        this.notificationService.error('Erreur lors de la suppression de l\'article');
      }
    });
  }
  viderPanier() {
    if (!confirm('Êtes-vous sûr de vouloir vider votre panier ?')) return;
    this.panierService.viderPanier().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe({
      next: () => {
        this.panier = null;
        this.notificationService.success('Panier vidé avec succès');
      },
      error: error => {
        console.error('Erreur vidage panier:', error);
        this.notificationService.error('Erreur lors du vidage du panier');
      }
    });
  }
  clearCart() {
    this.viderPanier();
  }
  // ─── Validation / navigation ─────────────────────────────
  validerCommande() {
    if (!this.panier || this.panier.produitsachete.length === 0) {
      this.notificationService.warning('Votre panier est vide');
      return;
    }
    if (this.isExpired) {
      this.notificationService.error('Votre panier a expiré. Veuillez le recréer.');
      return;
    }
    const outOfStockItems = this.panier.produitsachete.filter(item => item.qtt > this.getAvailableStock(item.produit));
    if (outOfStockItems.length > 0) {
      const names = outOfStockItems.map(i => i.produit.nom).join(', ');
      this.notificationService.error(`Stock insuffisant pour : ${names}`);
      return;
    }
    this.panierService.validerPanier().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe({
      next: response => {
        this.panier = response.data;
        this.notificationService.success('Commande validée avec succès !');
        this.router.navigate(['/checkout']);
      },
      error: error => {
        console.error('Erreur validation commande:', error);
        this.notificationService.error('Erreur lors de la validation de la commande');
      }
    });
  }
  goToProducts() {
    this.router.navigate(['/produits']);
  }
  // ─── Gestion expiration ───────────────────────────────────
  supprimerPanierExpiré() {
    if (!this.panier?._id) return;
    this.panierService.viderPanier().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe({
      next: () => {
        this.panier = null;
        this.notificationService.info('Le panier expiré a été supprimé automatiquement.');
        this.cdr.detectChanges();
      },
      error: error => {
        console.error('Erreur suppression panier expiré:', error);
        // Ne pas afficher d'erreur à l'utilisateur, le panier est déjà expiré
      }
    });
  }
  continuerAchats() {
    this.router.navigate(['/produits']);
  }
  proceedToCheckout() {
    if (!this.panier || this.panier.produitsachete.length === 0) {
      this.notificationService.warning('Votre panier est vide');
      return;
    }
    this.router.navigate(['/checkout']);
  }
  // ─── Calculs ─────────────────────────────────────────────
  getTotalItems() {
    return this.panier?.qtt || 0;
  }
  formatPrice(price) {
    return this.panierService.formatMontant(price);
  }
  calculateSubtotal() {
    return this.panier ? this.panierService.getSousTotal(this.panier) : 0;
  }
  calculateTotal() {
    return this.panier ? this.panierService.getTotal(this.panier) : 0;
  }
  static {
    this.ɵfac = function PanierComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PanierComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_panier_service__WEBPACK_IMPORTED_MODULE_11__.PanierService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_12__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_13__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_14__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: PanierComponent,
      selectors: [["app-panier"]],
      decls: 5,
      vars: 1,
      consts: [[1, "container-fluid"], [1, "panier-wrapper"], [1, "loading-state"], [1, "empty-cart-mini"], [1, "spinner-border", "text-primary"], [1, "ti", "ti-shopping-cart-off"], [1, "btn", "btn-sm", "btn-primary", 3, "click"], [1, "countdown-timer"], [1, "countdown-label"], [1, "countdown-time"], [1, "countdown-warning"], [1, "table-responsive"], [1, "cart-table"], [1, "text-center"], ["colspan", "5"], [1, "cart-footer"], [1, "cart-summary"], [1, "summary-item", "total"], [1, "cart-actions"], [1, "btn", "btn-outline-secondary", "btn-sm", 3, "click"], [1, "ti", "ti-arrow-left"], [1, "btn", "btn-outline-danger", "btn-sm", "me-2", 3, "click", "disabled"], [1, "ti", "ti-trash"], [1, "btn", "btn-outline-success", "btn-sm", 3, "click", "disabled"], [1, "ti", "ti-arrow-right"], [1, "ti", "ti-alert-circle"], [1, "product-cell"], [1, "product-info"], ["onerror", "this.src='assets/images/default-product.jpg'", 1, "product-thumb", 3, "src", "alt"], [1, "product-details"], [1, "product-name", 3, "title"], [1, "product-meta"], [1, "shop-name"], [1, "stock-status"], [1, "text-center", "price-cell"], [1, "text-center", "quantity-cell"], [1, "quantity-controls"], [1, "qty-btn", 3, "click", "disabled"], [1, "ti", "ti-minus"], [1, "quantity"], [1, "ti", "ti-plus"], [1, "text-center", "total-cell"], [1, "item-total"], [1, "text-center", "action-cell"], ["title", "Supprimer cet article", 1, "btn", "btn-outline-danger", 3, "click"], [1, "ti", "ti-building-store"], [1, "ti", "ti-alert-triangle"], [1, "ti", "ti-package"]],
      template: function PanierComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](2, PanierComponent_Conditional_2_Template, 4, 0, "div", 2)(3, PanierComponent_Conditional_3_Template, 6, 0, "div", 3)(4, PanierComponent_Conditional_4_Template, 44, 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdomElementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx.loading ? 2 : !ctx.panier || ctx.panier.produitsachete.length === 0 ? 3 : 4);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule],
      styles: ["@import url(https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500[_ngcontent-%COMP%];600[_ngcontent-%COMP%];700&family=DM[_ngcontent-%COMP%] + Mono[_ngcontent-%COMP%]:wght@400;500&display=swap)[_ngcontent-%COMP%];[_ngcontent-%COMP%]:root {\n  --cart-bg: #fafaf9;\n  --cart-surface: #ffffff;\n  --cart-border: #e7e5e0;\n  --cart-border-soft: #f0ede8;\n  --cart-text: #1c1917;\n  --cart-text-muted: #78716c;\n  --cart-accent: #2563eb;\n  --cart-accent-hover: #1d4ed8;\n  --cart-danger: #dc2626;\n  --cart-danger-soft: #fef2f2;\n  --cart-warning: #d97706;\n  --cart-warning-soft: #fffbeb;\n  --cart-success: #059669;\n  --cart-success-soft: #ecfdf5;\n  --cart-shadow: 0 1px 3px rgba(0,0,0,.08), 0 4px 16px rgba(0,0,0,.05);\n  --cart-radius: 12px;\n}\n\n.panier-wrapper[_ngcontent-%COMP%] {\n  font-family: \"DM Sans\", sans-serif;\n  padding: 1.5rem 0 2rem;\n  min-height: 60vh;\n  color: var(--cart-text);\n}\n\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 5rem 2rem;\n  gap: 1rem;\n}\n.loading-state[_ngcontent-%COMP%]   .spinner-border[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  height: 2.5rem;\n  border-width: 3px;\n  color: var(--cart-accent);\n}\n.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--cart-text-muted);\n  font-size: 0.95rem;\n  letter-spacing: 0.01em;\n  margin: 0;\n}\n\n.empty-cart-mini[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 5rem 2rem;\n  background: var(--cart-surface);\n  border-radius: var(--cart-radius);\n  border: 2px dashed var(--cart-border);\n}\n.empty-cart-mini[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 3.5rem;\n  color: #d4cfc9;\n  margin-bottom: 1.25rem;\n}\n.empty-cart-mini[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--cart-text-muted);\n  font-size: 1.1rem;\n  margin-bottom: 1.75rem;\n  font-weight: 500;\n}\n.empty-cart-mini[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 0.65rem 2rem;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 0.875rem;\n  letter-spacing: 0.01em;\n  transition: all 0.2s ease;\n}\n\n.countdown-timer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%);\n  border: 1px solid #fde68a;\n  border-radius: var(--cart-radius);\n  padding: 0.85rem 1.25rem;\n  margin-bottom: 1.25rem;\n}\n.countdown-timer.expired[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #fff5f5 0%, var(--cart-danger-soft) 100%);\n  border-color: #fca5a5;\n}\n.countdown-timer[_ngcontent-%COMP%]   .countdown-label[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #92400e;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.expired[_ngcontent-%COMP%]   .countdown-timer[_ngcontent-%COMP%]   .countdown-label[_ngcontent-%COMP%] {\n  color: var(--cart-danger);\n}\n.countdown-timer[_ngcontent-%COMP%]   .countdown-time[_ngcontent-%COMP%] {\n  font-family: \"DM Mono\", monospace;\n  font-size: 1.3rem;\n  font-weight: 500;\n  color: #78350f;\n  background: rgba(255, 255, 255, 0.6);\n  padding: 0.2rem 0.75rem;\n  border-radius: 6px;\n}\n.countdown-timer[_ngcontent-%COMP%]   .countdown-time.expired[_ngcontent-%COMP%] {\n  color: var(--cart-danger);\n}\n.countdown-timer[_ngcontent-%COMP%]   .countdown-warning[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--cart-danger);\n  font-weight: 500;\n}\n\n.table-responsive[_ngcontent-%COMP%] {\n  background: var(--cart-surface);\n  border-radius: var(--cart-radius);\n  box-shadow: var(--cart-shadow);\n  border: 1px solid var(--cart-border-soft);\n  overflow: hidden;\n  overflow-x: auto;\n  max-height: 540px;\n  overflow-y: auto;\n}\n.table-responsive[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 5px;\n  height: 5px;\n}\n.table-responsive[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f5f5f4;\n}\n.table-responsive[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #d4cfc9;\n  border-radius: 10px;\n}\n.table-responsive[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #a8a29e;\n}\n\n.cart-table[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 580px;\n  border-collapse: collapse;\n}\n.cart-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n.cart-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  background: #fafaf9;\n  border-bottom: 1.5px solid var(--cart-border);\n}\n.cart-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 11px 16px;\n  font-size: 0.73rem;\n  font-weight: 600;\n  color: var(--cart-text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  white-space: nowrap;\n}\n.cart-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  text-align: left;\n}\n.cart-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--cart-border-soft);\n  transition: background-color 0.15s ease;\n}\n.cart-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #fafaf9;\n}\n.cart-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.cart-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  vertical-align: middle;\n}\n.cart-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0;\n  border-top: 1.5px solid var(--cart-border);\n  background: #fafaf9;\n}\n\n.product-cell[_ngcontent-%COMP%] {\n  min-width: 240px;\n}\n.product-cell[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.product-cell[_ngcontent-%COMP%]   .product-thumb[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  object-fit: cover;\n  border-radius: 8px;\n  border: 1px solid var(--cart-border-soft);\n  flex-shrink: 0;\n  background: #f5f5f4;\n}\n.product-cell[_ngcontent-%COMP%]   .product-details[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.product-cell[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%] {\n  margin: 0 0 5px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--cart-text);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 1.3;\n}\n.product-cell[_ngcontent-%COMP%]   .product-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.product-cell[_ngcontent-%COMP%]   .product-meta[_ngcontent-%COMP%]   .shop-name[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  color: var(--cart-text-muted);\n  font-size: 0.72rem;\n  font-weight: 500;\n}\n.product-cell[_ngcontent-%COMP%]   .product-meta[_ngcontent-%COMP%]   .shop-name[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.product-cell[_ngcontent-%COMP%]   .product-meta[_ngcontent-%COMP%]   .stock-status[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 2px 7px;\n  border-radius: 20px;\n  font-size: 0.71rem;\n  font-weight: 600;\n  letter-spacing: 0.01em;\n  white-space: nowrap;\n  background: var(--cart-success-soft);\n  color: var(--cart-success);\n}\n.product-cell[_ngcontent-%COMP%]   .product-meta[_ngcontent-%COMP%]   .stock-status[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n}\n.product-cell[_ngcontent-%COMP%]   .product-meta[_ngcontent-%COMP%]   .stock-status.low-stock[_ngcontent-%COMP%] {\n  background: var(--cart-warning-soft);\n  color: var(--cart-warning);\n}\n.product-cell[_ngcontent-%COMP%]   .product-meta[_ngcontent-%COMP%]   .stock-status.out-of-stock[_ngcontent-%COMP%] {\n  background: var(--cart-danger-soft);\n  color: var(--cart-danger);\n}\n\n.price-cell[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--cart-text-muted);\n  font-size: 0.875rem;\n  white-space: nowrap;\n}\n\n.total-cell[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.total-cell[_ngcontent-%COMP%]   .item-total[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--cart-text);\n  font-size: 0.9rem;\n}\n\n.quantity-cell[_ngcontent-%COMP%]   .quantity-controls[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0;\n  border: 1px solid var(--cart-border);\n  border-radius: 8px;\n  overflow: hidden;\n  background: var(--cart-surface);\n}\n.quantity-cell[_ngcontent-%COMP%]   .quantity-controls[_ngcontent-%COMP%]   .qty-btn[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f5f5f4;\n  border: none;\n  color: var(--cart-text-muted);\n  cursor: pointer;\n  transition: all 0.15s ease;\n  flex-shrink: 0;\n}\n.quantity-cell[_ngcontent-%COMP%]   .quantity-controls[_ngcontent-%COMP%]   .qty-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.quantity-cell[_ngcontent-%COMP%]   .quantity-controls[_ngcontent-%COMP%]   .qty-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--cart-accent);\n  color: white;\n}\n.quantity-cell[_ngcontent-%COMP%]   .quantity-controls[_ngcontent-%COMP%]   .qty-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.35;\n  cursor: not-allowed;\n}\n.quantity-cell[_ngcontent-%COMP%]   .quantity-controls[_ngcontent-%COMP%]   .quantity[_ngcontent-%COMP%] {\n  min-width: 34px;\n  text-align: center;\n  font-weight: 600;\n  color: var(--cart-text);\n  font-size: 0.875rem;\n  line-height: 30px;\n  border-left: 1px solid var(--cart-border);\n  border-right: 1px solid var(--cart-border);\n}\n\n.action-cell[_ngcontent-%COMP%]   .btn-remove[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: none;\n  border: 1px solid var(--cart-border);\n  border-radius: 7px;\n  color: #c4b9b2;\n  cursor: pointer;\n  transition: all 0.18s ease;\n}\n.action-cell[_ngcontent-%COMP%]   .btn-remove[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.action-cell[_ngcontent-%COMP%]   .btn-remove[_ngcontent-%COMP%]:hover {\n  background: var(--cart-danger-soft);\n  border-color: #fca5a5;\n  color: var(--cart-danger);\n  transform: scale(1.05);\n}\n\n.cart-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 12px;\n  padding: 14px 16px;\n}\n.cart-footer[_ngcontent-%COMP%]   .cart-summary[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  align-items: center;\n}\n.cart-footer[_ngcontent-%COMP%]   .cart-summary[_ngcontent-%COMP%]   .summary-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  font-size: 0.875rem;\n}\n.cart-footer[_ngcontent-%COMP%]   .cart-summary[_ngcontent-%COMP%]   .summary-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--cart-text-muted);\n  font-weight: 400;\n}\n.cart-footer[_ngcontent-%COMP%]   .cart-summary[_ngcontent-%COMP%]   .summary-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--cart-text);\n  font-weight: 600;\n}\n.cart-footer[_ngcontent-%COMP%]   .cart-summary[_ngcontent-%COMP%]   .summary-item.total[_ngcontent-%COMP%] {\n  padding-left: 16px;\n  border-left: 1.5px solid var(--cart-border);\n}\n.cart-footer[_ngcontent-%COMP%]   .cart-summary[_ngcontent-%COMP%]   .summary-item.total[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--cart-accent);\n  font-size: 1.05rem;\n}\n.cart-footer[_ngcontent-%COMP%]   .cart-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.cart-footer[_ngcontent-%COMP%]   .cart-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 7px 14px;\n  font-size: 0.82rem;\n  font-weight: 600;\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n  letter-spacing: 0.01em;\n}\n.cart-footer[_ngcontent-%COMP%]   .cart-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n}\n.cart-footer[_ngcontent-%COMP%]   .cart-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background: var(--cart-accent);\n  border-color: var(--cart-accent);\n}\n.cart-footer[_ngcontent-%COMP%]   .cart-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--cart-accent-hover);\n  border-color: var(--cart-accent-hover);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.25);\n}\n.cart-footer[_ngcontent-%COMP%]   .cart-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.cart-footer[_ngcontent-%COMP%]   .cart-actions[_ngcontent-%COMP%]   .btn.btn-outline-secondary[_ngcontent-%COMP%] {\n  color: var(--cart-text-muted);\n  border-color: var(--cart-border);\n}\n.cart-footer[_ngcontent-%COMP%]   .cart-actions[_ngcontent-%COMP%]   .btn.btn-outline-secondary[_ngcontent-%COMP%]:hover {\n  background: #f5f5f4;\n  color: var(--cart-text);\n}\n\n@media (max-width: 640px) {\n  .countdown-timer[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n    gap: 0.5rem;\n  }\n  .cart-footer[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .cart-footer[_ngcontent-%COMP%]   .cart-summary[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 12px;\n  }\n  .cart-footer[_ngcontent-%COMP%]   .cart-summary[_ngcontent-%COMP%]   .summary-item.total[_ngcontent-%COMP%] {\n    border-left: none;\n    padding-left: 0;\n    padding-top: 8px;\n    border-top: 1px solid var(--cart-border);\n    width: 100%;\n    justify-content: space-between;\n  }\n  .cart-footer[_ngcontent-%COMP%]   .cart-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVtby9wYWdlcy9wYW5pZXIvcGFuaWVyLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vV2ViJTIwYXZhbmNlL20xcDEzbWVhbi1DYW5keS1Sb21hbmNlL2Zyb250ZW5kL3NyYy9hcHAvZGVtby9wYWdlcy9wYW5pZXIvcGFuaWVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLG9FQUFBO0VBQ0EsbUJBQUE7QUNGRjs7QURNQTtFQUNFLGtDQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDSEY7O0FET0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FDSkY7QURNRTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQ0pKO0FET0U7RUFDRSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FDTEo7O0FEVUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHFDQUFBO0FDUEY7QURTRTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtBQ1BKO0FEVUU7RUFDRSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ1JKO0FEV0U7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7QUNUSjs7QURjQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtFQUNBLDZEQUFBO0VBQ0EseUJBQUE7RUFDQSxpQ0FBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7QUNYRjtBRGFFO0VBQ0UsNkVBQUE7RUFDQSxxQkFBQTtBQ1hKO0FEY0U7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7QUNaSjtBRGNJO0VBQ0UseUJBQUE7QUNaTjtBRGdCRTtFQUNFLGlDQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxvQ0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNkSjtBRGdCSTtFQUNFLHlCQUFBO0FDZE47QURrQkU7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUNoQko7O0FEcUJBO0VBQ0UsK0JBQUE7RUFDQSxpQ0FBQTtFQUNBLDhCQUFBO0VBQ0EseUNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ2xCRjtBRG9CRTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FDbEJKO0FEb0JFO0VBQ0UsbUJBQUE7QUNsQko7QURvQkU7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0FDbEJKO0FEbUJJO0VBQVUsbUJBQUE7QUNoQmQ7O0FEcUJBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUNsQkY7QURxQkU7RUFDRSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0FDbkJKO0FEcUJJO0VBQ0UsbUJBQUE7RUFDQSw2Q0FBQTtBQ25CTjtBRHNCSTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDcEJOO0FEc0JNO0VBQWdCLGdCQUFBO0FDbkJ0QjtBRHlCSTtFQUNFLGdEQUFBO0VBQ0EsdUNBQUE7QUN2Qk47QUR5Qk07RUFBVSx5QkFBQTtBQ3RCaEI7QUR1Qk07RUFBZSxtQkFBQTtBQ3BCckI7QURzQk07RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0FDcEJSO0FEMkJJO0VBQ0UsVUFBQTtFQUNBLDBDQUFBO0VBQ0EsbUJBQUE7QUN6Qk47O0FEK0JBO0VBQ0UsZ0JBQUE7QUM1QkY7QUQ4QkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FDNUJKO0FEK0JFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUM3Qko7QURnQ0U7RUFDRSxPQUFBO0VBQ0EsWUFBQTtBQzlCSjtBRGlDRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQy9CSjtBRGtDRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0FDaENKO0FEa0NJO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNoQ047QURrQ007RUFBSSxrQkFBQTtBQy9CVjtBRGtDSTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBR0Esb0NBQUE7RUFDQSwwQkFBQTtBQ2xDTjtBRG9DTTtFQUFJLGtCQUFBO0FDakNWO0FEb0NNO0VBQ0Usb0NBQUE7RUFDQSwwQkFBQTtBQ2xDUjtBRHNDTTtFQUNFLG1DQUFBO0VBQ0EseUJBQUE7QUNwQ1I7O0FEMkNBO0VBQ0UsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUN4Q0Y7O0FEMkNBO0VBQ0UsbUJBQUE7QUN4Q0Y7QUQwQ0U7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUN4Q0o7O0FEOENFO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLE1BQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtBQzNDSjtBRDZDSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7QUMzQ047QUQ2Q007RUFBSSxpQkFBQTtBQzFDVjtBRDRDTTtFQUNFLDhCQUFBO0VBQ0EsWUFBQTtBQzFDUjtBRDZDTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQzNDUjtBRCtDSTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUNBQUE7RUFDQSwwQ0FBQTtBQzdDTjs7QURvREU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QUNqREo7QURtREk7RUFBSSxlQUFBO0FDaERSO0FEa0RJO0VBQ0UsbUNBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7QUNoRE47O0FEc0RBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FDbkRGO0FEcURFO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQ25ESjtBRHFESTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtBQ25ETjtBRHFETTtFQUNFLDZCQUFBO0VBQ0EsZ0JBQUE7QUNuRFI7QURzRE07RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0FDcERSO0FEdURNO0VBQ0Usa0JBQUE7RUFDQSwyQ0FBQTtBQ3JEUjtBRHVEUTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7QUNyRFY7QUQyREU7RUFDRSxhQUFBO0VBQ0EsUUFBQTtBQ3pESjtBRDJESTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0FDekROO0FEMkRNO0VBQUksa0JBQUE7QUN4RFY7QUQwRE07RUFDRSw4QkFBQTtFQUNBLGdDQUFBO0FDeERSO0FEeURRO0VBQ0Usb0NBQUE7RUFDQSxzQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsOENBQUE7QUN2RFY7QUR5RFE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUN2RFY7QUQyRE07RUFDRSw2QkFBQTtFQUNBLGdDQUFBO0FDekRSO0FEMERRO0VBQ0UsbUJBQUE7RUFDQSx1QkFBQTtBQ3hEVjs7QURnRUE7RUFDRTtJQUNFLHNCQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0VDN0RGO0VEZ0VBO0lBQ0Usc0JBQUE7SUFDQSxvQkFBQTtFQzlERjtFRGdFRTtJQUNFLGVBQUE7SUFDQSxTQUFBO0VDOURKO0VEZ0VJO0lBQ0UsaUJBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSx3Q0FBQTtJQUNBLFdBQUE7SUFDQSw4QkFBQTtFQzlETjtFRG1FSTtJQUNFLE9BQUE7SUFDQSx1QkFBQTtFQ2pFTjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFuaWVyLmNvbXBvbmVudC5zY3NzIMOiwoDClCBWZXJzaW9uIGFtw4PCqWxpb3LDg8KpZSAmIHJlZGVzaWduXHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURNK1NhbnM6d2dodEA0MDA7NTAwOzYwMDs3MDAmZmFtaWx5PURNK01vbm86d2dodEA0MDA7NTAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuLy8gw6LClMKAw6LClMKAw6LClMKAIFZhcmlhYmxlcyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcclxuOnJvb3Qge1xyXG4gIC0tY2FydC1iZzogI2ZhZmFmOTtcclxuICAtLWNhcnQtc3VyZmFjZTogI2ZmZmZmZjtcclxuICAtLWNhcnQtYm9yZGVyOiAjZTdlNWUwO1xyXG4gIC0tY2FydC1ib3JkZXItc29mdDogI2YwZWRlODtcclxuICAtLWNhcnQtdGV4dDogIzFjMTkxNztcclxuICAtLWNhcnQtdGV4dC1tdXRlZDogIzc4NzE2YztcclxuICAtLWNhcnQtYWNjZW50OiAjMjU2M2ViO1xyXG4gIC0tY2FydC1hY2NlbnQtaG92ZXI6ICMxZDRlZDg7XHJcbiAgLS1jYXJ0LWRhbmdlcjogI2RjMjYyNjtcclxuICAtLWNhcnQtZGFuZ2VyLXNvZnQ6ICNmZWYyZjI7XHJcbiAgLS1jYXJ0LXdhcm5pbmc6ICNkOTc3MDY7XHJcbiAgLS1jYXJ0LXdhcm5pbmctc29mdDogI2ZmZmJlYjtcclxuICAtLWNhcnQtc3VjY2VzczogIzA1OTY2OTtcclxuICAtLWNhcnQtc3VjY2Vzcy1zb2Z0OiAjZWNmZGY1O1xyXG4gIC0tY2FydC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsMCwwLC4wOCksIDAgNHB4IDE2cHggcmdiYSgwLDAsMCwuMDUpO1xyXG4gIC0tY2FydC1yYWRpdXM6IDEycHg7XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBXcmFwcGVyIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxyXG4ucGFuaWVyLXdyYXBwZXIge1xyXG4gIGZvbnQtZmFtaWx5OiAnRE0gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgcGFkZGluZzogMS41cmVtIDAgMnJlbTtcclxuICBtaW4taGVpZ2h0OiA2MHZoO1xyXG4gIGNvbG9yOiB2YXIoLS1jYXJ0LXRleHQpO1xyXG59XHJcblxyXG4vLyDDosKUwoDDosKUwoDDosKUwoAgTG9hZGluZyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcclxuLmxvYWRpbmctc3RhdGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDVyZW0gMnJlbTtcclxuICBnYXA6IDFyZW07XHJcblxyXG4gIC5zcGlubmVyLWJvcmRlciB7XHJcbiAgICB3aWR0aDogMi41cmVtO1xyXG4gICAgaGVpZ2h0OiAyLjVyZW07XHJcbiAgICBib3JkZXItd2lkdGg6IDNweDtcclxuICAgIGNvbG9yOiB2YXIoLS1jYXJ0LWFjY2VudCk7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIGNvbG9yOiB2YXIoLS1jYXJ0LXRleHQtbXV0ZWQpO1xyXG4gICAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBQYW5pZXIgdmlkZSDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcclxuLmVtcHR5LWNhcnQtbWluaSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDVyZW0gMnJlbTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXJ0LXN1cmZhY2UpO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWNhcnQtcmFkaXVzKTtcclxuICBib3JkZXI6IDJweCBkYXNoZWQgdmFyKC0tY2FydC1ib3JkZXIpO1xyXG5cclxuICBpIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAzLjVyZW07XHJcbiAgICBjb2xvcjogI2Q0Y2ZjOTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIGNvbG9yOiB2YXIoLS1jYXJ0LXRleHQtbXV0ZWQpO1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjc1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcblxyXG4gIC5idG4ge1xyXG4gICAgcGFkZGluZzogMC42NXJlbSAycmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICB9XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBDb3VudGRvd24gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXHJcbi5jb3VudGRvd24tdGltZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZ2FwOiAxcmVtO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmZmZiZWIgMCUsICNmZWYzYzcgMTAwJSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZkZTY4YTtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1jYXJ0LXJhZGl1cyk7XHJcbiAgcGFkZGluZzogMC44NXJlbSAxLjI1cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XHJcblxyXG4gICYuZXhwaXJlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmZmNWY1IDAlLCB2YXIoLS1jYXJ0LWRhbmdlci1zb2Z0KSAxMDAlKTtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZjYTVhNTtcclxuICB9XHJcblxyXG4gIC5jb3VudGRvd24tbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAwLjc4cmVtO1xyXG4gICAgY29sb3I6ICM5MjQwMGU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjA2ZW07XHJcblxyXG4gICAgLmV4cGlyZWQgJiB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1jYXJ0LWRhbmdlcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY291bnRkb3duLXRpbWUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdETSBNb25vJywgbW9ub3NwYWNlO1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICM3ODM1MGY7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuNik7XHJcbiAgICBwYWRkaW5nOiAwLjJyZW0gMC43NXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuXHJcbiAgICAmLmV4cGlyZWQge1xyXG4gICAgICBjb2xvcjogdmFyKC0tY2FydC1kYW5nZXIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNvdW50ZG93bi13YXJuaW5nIHtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgY29sb3I6IHZhcigtLWNhcnQtZGFuZ2VyKTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG59XHJcblxyXG4vLyDDosKUwoDDosKUwoDDosKUwoAgVGFibGUgY29udGFpbmVyIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxyXG4udGFibGUtcmVzcG9uc2l2ZSB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tY2FydC1zdXJmYWNlKTtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1jYXJ0LXJhZGl1cyk7XHJcbiAgYm94LXNoYWRvdzogdmFyKC0tY2FydC1zaGFkb3cpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNhcnQtYm9yZGVyLXNvZnQpO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxuICBtYXgtaGVpZ2h0OiA1NDBweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG5cclxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogNXB4O1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgfVxyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIGJhY2tncm91bmQ6ICNmNWY1ZjQ7XHJcbiAgfVxyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQ6ICNkNGNmYzk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgJjpob3ZlciB7IGJhY2tncm91bmQ6ICNhOGEyOWU7IH1cclxuICB9XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBUYWJsZSDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcclxuLmNhcnQtdGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi13aWR0aDogNTgwcHg7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuXHJcbiAgLy8gSGVhZGVyXHJcbiAgdGhlYWQge1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHRvcDogMDtcclxuICAgIHotaW5kZXg6IDEwO1xyXG5cclxuICAgIHRyIHtcclxuICAgICAgYmFja2dyb3VuZDogI2ZhZmFmOTtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMS41cHggc29saWQgdmFyKC0tY2FydC1ib3JkZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoIHtcclxuICAgICAgcGFkZGluZzogMTFweCAxNnB4O1xyXG4gICAgICBmb250LXNpemU6IDAuNzNyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1jYXJ0LXRleHQtbXV0ZWQpO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4wN2VtO1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cclxuICAgICAgJjpmaXJzdC1jaGlsZCB7IHRleHQtYWxpZ246IGxlZnQ7IH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEJvZHlcclxuICB0Ym9keSB7XHJcbiAgICB0ciB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jYXJ0LWJvcmRlci1zb2Z0KTtcclxuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlO1xyXG5cclxuICAgICAgJjpob3ZlciB7IGJhY2tncm91bmQtY29sb3I6ICNmYWZhZjk7IH1cclxuICAgICAgJjpsYXN0LWNoaWxkIHsgYm9yZGVyLWJvdHRvbTogbm9uZTsgfVxyXG5cclxuICAgICAgdGQge1xyXG4gICAgICAgIHBhZGRpbmc6IDEycHggMTZweDtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBGb290ZXJcclxuICB0Zm9vdCB7XHJcbiAgICB0ZCB7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIGJvcmRlci10b3A6IDEuNXB4IHNvbGlkIHZhcigtLWNhcnQtYm9yZGVyKTtcclxuICAgICAgYmFja2dyb3VuZDogI2ZhZmFmOTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBDZWxsdWxlIHByb2R1aXQgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXHJcbi5wcm9kdWN0LWNlbGwge1xyXG4gIG1pbi13aWR0aDogMjQwcHg7XHJcblxyXG4gIC5wcm9kdWN0LWluZm8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDEycHg7XHJcbiAgfVxyXG5cclxuICAucHJvZHVjdC10aHVtYiB7XHJcbiAgICB3aWR0aDogNTJweDtcclxuICAgIGhlaWdodDogNTJweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2FydC1ib3JkZXItc29mdCk7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICAgIGJhY2tncm91bmQ6ICNmNWY1ZjQ7XHJcbiAgfVxyXG5cclxuICAucHJvZHVjdC1kZXRhaWxzIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBtaW4td2lkdGg6IDA7XHJcbiAgfVxyXG5cclxuICAucHJvZHVjdC1uYW1lIHtcclxuICAgIG1hcmdpbjogMCAwIDVweDtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6IHZhcigtLWNhcnQtdGV4dCk7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMztcclxuICB9XHJcblxyXG4gIC5wcm9kdWN0LW1ldGEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDZweDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICAuc2hvcC1uYW1lIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGdhcDogM3B4O1xyXG4gICAgICBjb2xvcjogdmFyKC0tY2FydC10ZXh0LW11dGVkKTtcclxuICAgICAgZm9udC1zaXplOiAwLjcycmVtO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG5cclxuICAgICAgaSB7IGZvbnQtc2l6ZTogMC43NXJlbTsgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zdG9jay1zdGF0dXMge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZ2FwOiA0cHg7XHJcbiAgICAgIHBhZGRpbmc6IDJweCA3cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC43MXJlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHJcbiAgICAgIC8vIEVuIHN0b2NrIChkw4PCqWZhdXQpXHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNhcnQtc3VjY2Vzcy1zb2Z0KTtcclxuICAgICAgY29sb3I6IHZhcigtLWNhcnQtc3VjY2Vzcyk7XHJcblxyXG4gICAgICBpIHsgZm9udC1zaXplOiAwLjcycmVtOyB9XHJcblxyXG4gICAgICAvLyBTdG9jayBmYWlibGVcclxuICAgICAgJi5sb3ctc3RvY2sge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNhcnQtd2FybmluZy1zb2Z0KTtcclxuICAgICAgICBjb2xvcjogdmFyKC0tY2FydC13YXJuaW5nKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gUnVwdHVyZSBkZSBzdG9ja1xyXG4gICAgICAmLm91dC1vZi1zdG9jayB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY2FydC1kYW5nZXItc29mdCk7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWNhcnQtZGFuZ2VyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAw6LClMKAIENlbGx1bGVzIHByaXggLyB0b3RhbCDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcclxuLnByaWNlLWNlbGwge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6IHZhcigtLWNhcnQtdGV4dC1tdXRlZCk7XHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4udG90YWwtY2VsbCB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHJcbiAgLml0ZW0tdG90YWwge1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiB2YXIoLS1jYXJ0LXRleHQpO1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgfVxyXG59XHJcblxyXG4vLyDDosKUwoDDosKUwoDDosKUwoAgQ2VsbHVsZSBxdWFudGl0w4PCqSDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcclxuLnF1YW50aXR5LWNlbGwge1xyXG4gIC5xdWFudGl0eS1jb250cm9scyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDA7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jYXJ0LWJvcmRlcik7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2FydC1zdXJmYWNlKTtcclxuXHJcbiAgICAucXR5LWJ0biB7XHJcbiAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZjVmNWY0O1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1jYXJ0LXRleHQtbXV0ZWQpO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xyXG4gICAgICBmbGV4LXNocmluazogMDtcclxuXHJcbiAgICAgIGkgeyBmb250LXNpemU6IDAuOHJlbTsgfVxyXG5cclxuICAgICAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY2FydC1hY2NlbnQpO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgICAgb3BhY2l0eTogMC4zNTtcclxuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnF1YW50aXR5IHtcclxuICAgICAgbWluLXdpZHRoOiAzNHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1jYXJ0LXRleHQpO1xyXG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1jYXJ0LWJvcmRlcik7XHJcbiAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWNhcnQtYm9yZGVyKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBDZWxsdWxlIGFjdGlvbiDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcclxuLmFjdGlvbi1jZWxsIHtcclxuICAuYnRuLXJlbW92ZSB7XHJcbiAgICB3aWR0aDogMzJweDtcclxuICAgIGhlaWdodDogMzJweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNhcnQtYm9yZGVyKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIGNvbG9yOiAjYzRiOWIyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMThzIGVhc2U7XHJcblxyXG4gICAgaSB7IGZvbnQtc2l6ZTogMXJlbTsgfVxyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXJ0LWRhbmdlci1zb2Z0KTtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjZmNhNWE1O1xyXG4gICAgICBjb2xvcjogdmFyKC0tY2FydC1kYW5nZXIpO1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAw6LClMKAIEZvb3RlciBwYW5pZXIgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXHJcbi5jYXJ0LWZvb3RlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZ2FwOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDE0cHggMTZweDtcclxuXHJcbiAgLmNhcnQtc3VtbWFyeSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAyMHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAuc3VtbWFyeS1pdGVtIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZ2FwOiA3cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcblxyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0tY2FydC10ZXh0LW11dGVkKTtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzdHJvbmcge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1jYXJ0LXRleHQpO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYudG90YWwge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuICAgICAgICBib3JkZXItbGVmdDogMS41cHggc29saWQgdmFyKC0tY2FydC1ib3JkZXIpO1xyXG5cclxuICAgICAgICBzdHJvbmcge1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWNhcnQtYWNjZW50KTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4wNXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jYXJ0LWFjdGlvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogOHB4O1xyXG5cclxuICAgIC5idG4ge1xyXG4gICAgICBwYWRkaW5nOiA3cHggMTRweDtcclxuICAgICAgZm9udC1zaXplOiAwLjgycmVtO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZ2FwOiA1cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcclxuXHJcbiAgICAgIGkgeyBmb250LXNpemU6IDAuOTVyZW07IH1cclxuXHJcbiAgICAgICYuYnRuLXByaW1hcnkge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNhcnQtYWNjZW50KTtcclxuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWNhcnQtYWNjZW50KTtcclxuICAgICAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNhcnQtYWNjZW50LWhvdmVyKTtcclxuICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY2FydC1hY2NlbnQtaG92ZXIpO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDM3LDk5LDIzNSwuMjUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmRpc2FibGVkIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDAuNTU7XHJcbiAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJi5idG4tb3V0bGluZS1zZWNvbmRhcnkge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1jYXJ0LXRleHQtbXV0ZWQpO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY2FydC1ib3JkZXIpO1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2Y1ZjVmNDtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1jYXJ0LXRleHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAw6LClMKAIFJlc3BvbnNpdmUgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xyXG4gIC5jb3VudGRvd24tdGltZXIge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGdhcDogMC41cmVtO1xyXG4gIH1cclxuXHJcbiAgLmNhcnQtZm9vdGVyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuXHJcbiAgICAuY2FydC1zdW1tYXJ5IHtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICBnYXA6IDEycHg7XHJcblxyXG4gICAgICAuc3VtbWFyeS1pdGVtLnRvdGFsIHtcclxuICAgICAgICBib3JkZXItbGVmdDogbm9uZTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tY2FydC1ib3JkZXIpO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jYXJ0LWFjdGlvbnMge1xyXG4gICAgICAuYnRuIHtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1ETStTYW5zOndnaHRANDAwOzUwMDs2MDA7NzAwJmZhbWlseT1ETStNb25vOndnaHRANDAwOzUwMCZkaXNwbGF5PXN3YXBcIik7XG46cm9vdCB7XG4gIC0tY2FydC1iZzogI2ZhZmFmOTtcbiAgLS1jYXJ0LXN1cmZhY2U6ICNmZmZmZmY7XG4gIC0tY2FydC1ib3JkZXI6ICNlN2U1ZTA7XG4gIC0tY2FydC1ib3JkZXItc29mdDogI2YwZWRlODtcbiAgLS1jYXJ0LXRleHQ6ICMxYzE5MTc7XG4gIC0tY2FydC10ZXh0LW11dGVkOiAjNzg3MTZjO1xuICAtLWNhcnQtYWNjZW50OiAjMjU2M2ViO1xuICAtLWNhcnQtYWNjZW50LWhvdmVyOiAjMWQ0ZWQ4O1xuICAtLWNhcnQtZGFuZ2VyOiAjZGMyNjI2O1xuICAtLWNhcnQtZGFuZ2VyLXNvZnQ6ICNmZWYyZjI7XG4gIC0tY2FydC13YXJuaW5nOiAjZDk3NzA2O1xuICAtLWNhcnQtd2FybmluZy1zb2Z0OiAjZmZmYmViO1xuICAtLWNhcnQtc3VjY2VzczogIzA1OTY2OTtcbiAgLS1jYXJ0LXN1Y2Nlc3Mtc29mdDogI2VjZmRmNTtcbiAgLS1jYXJ0LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsLjA4KSwgMCA0cHggMTZweCByZ2JhKDAsMCwwLC4wNSk7XG4gIC0tY2FydC1yYWRpdXM6IDEycHg7XG59XG5cbi5wYW5pZXItd3JhcHBlciB7XG4gIGZvbnQtZmFtaWx5OiBcIkRNIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgcGFkZGluZzogMS41cmVtIDAgMnJlbTtcbiAgbWluLWhlaWdodDogNjB2aDtcbiAgY29sb3I6IHZhcigtLWNhcnQtdGV4dCk7XG59XG5cbi5sb2FkaW5nLXN0YXRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDVyZW0gMnJlbTtcbiAgZ2FwOiAxcmVtO1xufVxuLmxvYWRpbmctc3RhdGUgLnNwaW5uZXItYm9yZGVyIHtcbiAgd2lkdGg6IDIuNXJlbTtcbiAgaGVpZ2h0OiAyLjVyZW07XG4gIGJvcmRlci13aWR0aDogM3B4O1xuICBjb2xvcjogdmFyKC0tY2FydC1hY2NlbnQpO1xufVxuLmxvYWRpbmctc3RhdGUgcCB7XG4gIGNvbG9yOiB2YXIoLS1jYXJ0LXRleHQtbXV0ZWQpO1xuICBmb250LXNpemU6IDAuOTVyZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIG1hcmdpbjogMDtcbn1cblxuLmVtcHR5LWNhcnQtbWluaSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNXJlbSAycmVtO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXJ0LXN1cmZhY2UpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1jYXJ0LXJhZGl1cyk7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCB2YXIoLS1jYXJ0LWJvcmRlcik7XG59XG4uZW1wdHktY2FydC1taW5pIGkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAzLjVyZW07XG4gIGNvbG9yOiAjZDRjZmM5O1xuICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xufVxuLmVtcHR5LWNhcnQtbWluaSBwIHtcbiAgY29sb3I6IHZhcigtLWNhcnQtdGV4dC1tdXRlZCk7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxLjc1cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmVtcHR5LWNhcnQtbWluaSAuYnRuIHtcbiAgcGFkZGluZzogMC42NXJlbSAycmVtO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG5cbi5jb3VudGRvd24tdGltZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMXJlbTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2ZmZmJlYiAwJSwgI2ZlZjNjNyAxMDAlKTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZkZTY4YTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tY2FydC1yYWRpdXMpO1xuICBwYWRkaW5nOiAwLjg1cmVtIDEuMjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XG59XG4uY291bnRkb3duLXRpbWVyLmV4cGlyZWQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmZmNWY1IDAlLCB2YXIoLS1jYXJ0LWRhbmdlci1zb2Z0KSAxMDAlKTtcbiAgYm9yZGVyLWNvbG9yOiAjZmNhNWE1O1xufVxuLmNvdW50ZG93bi10aW1lciAuY291bnRkb3duLWxhYmVsIHtcbiAgZm9udC1zaXplOiAwLjc4cmVtO1xuICBjb2xvcjogIzkyNDAwZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDZlbTtcbn1cbi5leHBpcmVkIC5jb3VudGRvd24tdGltZXIgLmNvdW50ZG93bi1sYWJlbCB7XG4gIGNvbG9yOiB2YXIoLS1jYXJ0LWRhbmdlcik7XG59XG4uY291bnRkb3duLXRpbWVyIC5jb3VudGRvd24tdGltZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkRNIE1vbm9cIiwgbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICM3ODM1MGY7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgcGFkZGluZzogMC4ycmVtIDAuNzVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cbi5jb3VudGRvd24tdGltZXIgLmNvdW50ZG93bi10aW1lLmV4cGlyZWQge1xuICBjb2xvcjogdmFyKC0tY2FydC1kYW5nZXIpO1xufVxuLmNvdW50ZG93bi10aW1lciAuY291bnRkb3duLXdhcm5pbmcge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgY29sb3I6IHZhcigtLWNhcnQtZGFuZ2VyKTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnRhYmxlLXJlc3BvbnNpdmUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXJ0LXN1cmZhY2UpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1jYXJ0LXJhZGl1cyk7XG4gIGJveC1zaGFkb3c6IHZhcigtLWNhcnQtc2hhZG93KTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2FydC1ib3JkZXItc29mdCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIG1heC1oZWlnaHQ6IDU0MHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuLnRhYmxlLXJlc3BvbnNpdmU6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiA1cHg7XG59XG4udGFibGUtcmVzcG9uc2l2ZTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY0O1xufVxuLnRhYmxlLXJlc3BvbnNpdmU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogI2Q0Y2ZjOTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi50YWJsZS1yZXNwb25zaXZlOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNhOGEyOWU7XG59XG5cbi5jYXJ0LXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogNTgwcHg7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG4uY2FydC10YWJsZSB0aGVhZCB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTA7XG59XG4uY2FydC10YWJsZSB0aGVhZCB0ciB7XG4gIGJhY2tncm91bmQ6ICNmYWZhZjk7XG4gIGJvcmRlci1ib3R0b206IDEuNXB4IHNvbGlkIHZhcigtLWNhcnQtYm9yZGVyKTtcbn1cbi5jYXJ0LXRhYmxlIHRoZWFkIHRoIHtcbiAgcGFkZGluZzogMTFweCAxNnB4O1xuICBmb250LXNpemU6IDAuNzNyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS1jYXJ0LXRleHQtbXV0ZWQpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC4wN2VtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLmNhcnQtdGFibGUgdGhlYWQgdGg6Zmlyc3QtY2hpbGQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmNhcnQtdGFibGUgdGJvZHkgdHIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY2FydC1ib3JkZXItc29mdCk7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZTtcbn1cbi5jYXJ0LXRhYmxlIHRib2R5IHRyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmOTtcbn1cbi5jYXJ0LXRhYmxlIHRib2R5IHRyOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuLmNhcnQtdGFibGUgdGJvZHkgdHIgdGQge1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uY2FydC10YWJsZSB0Zm9vdCB0ZCB7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlci10b3A6IDEuNXB4IHNvbGlkIHZhcigtLWNhcnQtYm9yZGVyKTtcbiAgYmFja2dyb3VuZDogI2ZhZmFmOTtcbn1cblxuLnByb2R1Y3QtY2VsbCB7XG4gIG1pbi13aWR0aDogMjQwcHg7XG59XG4ucHJvZHVjdC1jZWxsIC5wcm9kdWN0LWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEycHg7XG59XG4ucHJvZHVjdC1jZWxsIC5wcm9kdWN0LXRodW1iIHtcbiAgd2lkdGg6IDUycHg7XG4gIGhlaWdodDogNTJweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2FydC1ib3JkZXItc29mdCk7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY0O1xufVxuLnByb2R1Y3QtY2VsbCAucHJvZHVjdC1kZXRhaWxzIHtcbiAgZmxleDogMTtcbiAgbWluLXdpZHRoOiAwO1xufVxuLnByb2R1Y3QtY2VsbCAucHJvZHVjdC1uYW1lIHtcbiAgbWFyZ2luOiAwIDAgNXB4O1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0tY2FydC10ZXh0KTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG59XG4ucHJvZHVjdC1jZWxsIC5wcm9kdWN0LW1ldGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDZweDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLnByb2R1Y3QtY2VsbCAucHJvZHVjdC1tZXRhIC5zaG9wLW5hbWUge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAzcHg7XG4gIGNvbG9yOiB2YXIoLS1jYXJ0LXRleHQtbXV0ZWQpO1xuICBmb250LXNpemU6IDAuNzJyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4ucHJvZHVjdC1jZWxsIC5wcm9kdWN0LW1ldGEgLnNob3AtbmFtZSBpIHtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xufVxuLnByb2R1Y3QtY2VsbCAucHJvZHVjdC1tZXRhIC5zdG9jay1zdGF0dXMge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA0cHg7XG4gIHBhZGRpbmc6IDJweCA3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMC43MXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgYmFja2dyb3VuZDogdmFyKC0tY2FydC1zdWNjZXNzLXNvZnQpO1xuICBjb2xvcjogdmFyKC0tY2FydC1zdWNjZXNzKTtcbn1cbi5wcm9kdWN0LWNlbGwgLnByb2R1Y3QtbWV0YSAuc3RvY2stc3RhdHVzIGkge1xuICBmb250LXNpemU6IDAuNzJyZW07XG59XG4ucHJvZHVjdC1jZWxsIC5wcm9kdWN0LW1ldGEgLnN0b2NrLXN0YXR1cy5sb3ctc3RvY2sge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXJ0LXdhcm5pbmctc29mdCk7XG4gIGNvbG9yOiB2YXIoLS1jYXJ0LXdhcm5pbmcpO1xufVxuLnByb2R1Y3QtY2VsbCAucHJvZHVjdC1tZXRhIC5zdG9jay1zdGF0dXMub3V0LW9mLXN0b2NrIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY2FydC1kYW5nZXItc29mdCk7XG4gIGNvbG9yOiB2YXIoLS1jYXJ0LWRhbmdlcik7XG59XG5cbi5wcmljZS1jZWxsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLWNhcnQtdGV4dC1tdXRlZCk7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi50b3RhbC1jZWxsIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi50b3RhbC1jZWxsIC5pdGVtLXRvdGFsIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLWNhcnQtdGV4dCk7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4ucXVhbnRpdHktY2VsbCAucXVhbnRpdHktY29udHJvbHMge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jYXJ0LWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogdmFyKC0tY2FydC1zdXJmYWNlKTtcbn1cbi5xdWFudGl0eS1jZWxsIC5xdWFudGl0eS1jb250cm9scyAucXR5LWJ0biB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY0O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1jYXJ0LXRleHQtbXV0ZWQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuICBmbGV4LXNocmluazogMDtcbn1cbi5xdWFudGl0eS1jZWxsIC5xdWFudGl0eS1jb250cm9scyAucXR5LWJ0biBpIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG4ucXVhbnRpdHktY2VsbCAucXVhbnRpdHktY29udHJvbHMgLnF0eS1idG46aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXJ0LWFjY2VudCk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5xdWFudGl0eS1jZWxsIC5xdWFudGl0eS1jb250cm9scyAucXR5LWJ0bjpkaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuMzU7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG4ucXVhbnRpdHktY2VsbCAucXVhbnRpdHktY29udHJvbHMgLnF1YW50aXR5IHtcbiAgbWluLXdpZHRoOiAzNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS1jYXJ0LXRleHQpO1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1jYXJ0LWJvcmRlcik7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWNhcnQtYm9yZGVyKTtcbn1cblxuLmFjdGlvbi1jZWxsIC5idG4tcmVtb3ZlIHtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jYXJ0LWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgY29sb3I6ICNjNGI5YjI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMThzIGVhc2U7XG59XG4uYWN0aW9uLWNlbGwgLmJ0bi1yZW1vdmUgaSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbi5hY3Rpb24tY2VsbCAuYnRuLXJlbW92ZTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNhcnQtZGFuZ2VyLXNvZnQpO1xuICBib3JkZXItY29sb3I6ICNmY2E1YTU7XG4gIGNvbG9yOiB2YXIoLS1jYXJ0LWRhbmdlcik7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG59XG5cbi5jYXJ0LWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDEycHg7XG4gIHBhZGRpbmc6IDE0cHggMTZweDtcbn1cbi5jYXJ0LWZvb3RlciAuY2FydC1zdW1tYXJ5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAyMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNhcnQtZm9vdGVyIC5jYXJ0LXN1bW1hcnkgLnN1bW1hcnktaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogN3B4O1xuICBmb250LXNpemU6IDAuODc1cmVtO1xufVxuLmNhcnQtZm9vdGVyIC5jYXJ0LXN1bW1hcnkgLnN1bW1hcnktaXRlbSBzcGFuIHtcbiAgY29sb3I6IHZhcigtLWNhcnQtdGV4dC1tdXRlZCk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4uY2FydC1mb290ZXIgLmNhcnQtc3VtbWFyeSAuc3VtbWFyeS1pdGVtIHN0cm9uZyB7XG4gIGNvbG9yOiB2YXIoLS1jYXJ0LXRleHQpO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmNhcnQtZm9vdGVyIC5jYXJ0LXN1bW1hcnkgLnN1bW1hcnktaXRlbS50b3RhbCB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgYm9yZGVyLWxlZnQ6IDEuNXB4IHNvbGlkIHZhcigtLWNhcnQtYm9yZGVyKTtcbn1cbi5jYXJ0LWZvb3RlciAuY2FydC1zdW1tYXJ5IC5zdW1tYXJ5LWl0ZW0udG90YWwgc3Ryb25nIHtcbiAgY29sb3I6IHZhcigtLWNhcnQtYWNjZW50KTtcbiAgZm9udC1zaXplOiAxLjA1cmVtO1xufVxuLmNhcnQtZm9vdGVyIC5jYXJ0LWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDhweDtcbn1cbi5jYXJ0LWZvb3RlciAuY2FydC1hY3Rpb25zIC5idG4ge1xuICBwYWRkaW5nOiA3cHggMTRweDtcbiAgZm9udC1zaXplOiAwLjgycmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbn1cbi5jYXJ0LWZvb3RlciAuY2FydC1hY3Rpb25zIC5idG4gaSB7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbn1cbi5jYXJ0LWZvb3RlciAuY2FydC1hY3Rpb25zIC5idG4uYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXJ0LWFjY2VudCk7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY2FydC1hY2NlbnQpO1xufVxuLmNhcnQtZm9vdGVyIC5jYXJ0LWFjdGlvbnMgLmJ0bi5idG4tcHJpbWFyeTpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNhcnQtYWNjZW50LWhvdmVyKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jYXJ0LWFjY2VudC1ob3Zlcik7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDM3LCA5OSwgMjM1LCAwLjI1KTtcbn1cbi5jYXJ0LWZvb3RlciAuY2FydC1hY3Rpb25zIC5idG4uYnRuLXByaW1hcnk6ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjU1O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuLmNhcnQtZm9vdGVyIC5jYXJ0LWFjdGlvbnMgLmJ0bi5idG4tb3V0bGluZS1zZWNvbmRhcnkge1xuICBjb2xvcjogdmFyKC0tY2FydC10ZXh0LW11dGVkKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jYXJ0LWJvcmRlcik7XG59XG4uY2FydC1mb290ZXIgLmNhcnQtYWN0aW9ucyAuYnRuLmJ0bi1vdXRsaW5lLXNlY29uZGFyeTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjQ7XG4gIGNvbG9yOiB2YXIoLS1jYXJ0LXRleHQpO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgLmNvdW50ZG93bi10aW1lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZ2FwOiAwLjVyZW07XG4gIH1cbiAgLmNhcnQtZm9vdGVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICB9XG4gIC5jYXJ0LWZvb3RlciAuY2FydC1zdW1tYXJ5IHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZ2FwOiAxMnB4O1xuICB9XG4gIC5jYXJ0LWZvb3RlciAuY2FydC1zdW1tYXJ5IC5zdW1tYXJ5LWl0ZW0udG90YWwge1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1jYXJ0LWJvcmRlcik7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG4gIC5jYXJ0LWZvb3RlciAuY2FydC1hY3Rpb25zIC5idG4ge1xuICAgIGZsZXg6IDE7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"],
      data: {
        animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.trigger)('itemAnimation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
          opacity: 0,
          transform: 'translateX(-16px)'
        }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('280ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
          opacity: 1,
          transform: 'translateX(0)'
        }))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('220ms ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
          opacity: 0,
          transform: 'translateX(-16px)'
        }))])])]
      }
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_demo_pages_panier_panier_component_ts.js.map