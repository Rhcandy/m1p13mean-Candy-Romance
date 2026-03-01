"use strict";
(self["webpackChunkfree_version"] = self["webpackChunkfree_version"] || []).push([["src_app_demo_pages_boutique_produits_boutique-produits_component_ts"],{

/***/ 4555:
/*!*****************************************************************************!*\
  !*** ./src/app/demo/pages/boutique/produits/boutique-produits.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BoutiqueProduitsComponent: () => (/* binding */ BoutiqueProduitsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 1873);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_boutique_produit_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../services/boutique-produit.service */ 6104);
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/notification.service */ 7473);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 3305);
/* harmony import */ var src_app_services_categorie_produit_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/categorie-produit.service */ 2309);
/* harmony import */ var _services_boutique_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../services/boutique.service */ 700);
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/services/product.service */ 6241);
/* harmony import */ var src_app_services_boutique_promotion_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/services/boutique-promotion.service */ 1040);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/services/auth.service */ 4796);















const _c0 = () => [1, 2, 3, 4, 5];
function BoutiqueProduitsComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Chargement des produits...");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function BoutiqueProduitsComponent_div_10_option_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cat_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", cat_r3._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](cat_r3.nom);
  }
}
function BoutiqueProduitsComponent_div_10_div_15_tr_18_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const produit_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", produit_r5.photo, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"])("alt", produit_r5.nom);
  }
}
function BoutiqueProduitsComponent_div_10_div_15_tr_18_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function BoutiqueProduitsComponent_div_10_div_15_tr_18_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const produit_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind3"](2, 2, produit_r5.description, 0, 55), "", produit_r5.description.length > 55 ? "\u2026" : "", " ");
  }
}
function BoutiqueProduitsComponent_div_10_div_15_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BoutiqueProduitsComponent_div_10_div_15_tr_18_Template_tr_click_0_listener() {
      const produit_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.openDetail(produit_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, BoutiqueProduitsComponent_div_10_div_15_tr_18_ng_container_2_Template, 2, 2, "ng-container", 100)(3, BoutiqueProduitsComponent_div_10_div_15_tr_18_ng_template_3_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "td")(6, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, BoutiqueProduitsComponent_div_10_div_15_tr_18_div_8_Template, 3, 6, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "td")(10, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "td", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](14, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Ar");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "td")(18, "span", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "td", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BoutiqueProduitsComponent_div_10_div_15_tr_18_Template_td_click_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 108)(22, "button", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BoutiqueProduitsComponent_div_10_div_15_tr_18_Template_button_click_22_listener() {
      const produit_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.editProduit(produit_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](23, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "button", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BoutiqueProduitsComponent_div_10_div_15_tr_18_Template_button_click_24_listener() {
      const produit_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.openPromotionModal(produit_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](25, "i", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "button", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BoutiqueProduitsComponent_div_10_div_15_tr_18_Template_button_click_26_listener() {
      const produit_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.openStockEntryModal(produit_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](27, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "button", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BoutiqueProduitsComponent_div_10_div_15_tr_18_Template_button_click_28_listener() {
      const produit_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.deleteProduit(produit_r5._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](29, "i", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const produit_r5 = ctx.$implicit;
    const noPhoto_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](4);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", produit_r5.photo)("ngIfElse", noPhoto_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](produit_r5.nom);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", produit_r5.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.getCategorieNom(produit_r5.categorieId), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](14, 8, produit_r5.prix == null ? null : produit_r5.prix[0] == null ? null : produit_r5.prix[0].prixUnitaire), "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx_r1.getAvailableStock(produit_r5) <= 3 ? "bg-danger" : "bg-success");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.getAvailableStock(produit_r5), " ");
  }
}
function BoutiqueProduitsComponent_div_10_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 91)(1, "div", 92)(2, "div", 93)(3, "table", 94)(4, "thead", 95)(5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "th", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Produit");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Cat\u00E9gorie");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Prix");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "th", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, BoutiqueProduitsComponent_div_10_div_15_tr_18_Template, 30, 10, "tr", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.produits);
  }
}
function BoutiqueProduitsComponent_div_10_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Aucun produit trouv\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Ajoutez votre premier produit ou modifiez les filtres.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "button", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BoutiqueProduitsComponent_div_10_div_16_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.addProduit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, " Ajouter un produit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function BoutiqueProduitsComponent_div_10_div_17_li_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li", 125)(1, "button", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BoutiqueProduitsComponent_div_10_div_17_li_6_Template_button_click_1_listener() {
      const p_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onPageChange(p_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const p_r10 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", p_r10 === ctx_r1.pagination.page);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](p_r10);
  }
}
function BoutiqueProduitsComponent_div_10_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 123)(1, "nav")(2, "ul", 124)(3, "li", 125)(4, "button", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BoutiqueProduitsComponent_div_10_div_17_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onPageChange(ctx_r1.pagination.page - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "i", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, BoutiqueProduitsComponent_div_10_div_17_li_6_Template, 3, 3, "li", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "li", 125)(8, "button", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BoutiqueProduitsComponent_div_10_div_17_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onPageChange(ctx_r1.pagination.page + 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "i", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("disabled", ctx_r1.pagination.page <= 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.getPagesArray());
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("disabled", ctx_r1.pagination.page >= ctx_r1.pagination.totalPages);
  }
}
function BoutiqueProduitsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "div", 77)(2, "div", 78)(3, "div", 79)(4, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function BoutiqueProduitsComponent_div_10_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r1.filters.nom, $event) || (ctx_r1.filters.nom = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup", function BoutiqueProduitsComponent_div_10_Template_input_keyup_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 83)(8, "select", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function BoutiqueProduitsComponent_div_10_Template_select_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r1.filters.categorieId, $event) || (ctx_r1.filters.categorieId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function BoutiqueProduitsComponent_div_10_Template_select_change_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Toutes les cat\u00E9gories");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, BoutiqueProduitsComponent_div_10_option_11_Template, 2, 2, "option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "i", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, BoutiqueProduitsComponent_div_10_div_15_Template, 19, 1, "div", 87)(16, BoutiqueProduitsComponent_div_10_div_16_Template, 9, 0, "div", 88)(17, BoutiqueProduitsComponent_div_10_div_17_Template, 10, 5, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.filters.nom);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.filters.categorieId);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.categories);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r1.pagination.total, " produit(s) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.produits.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.produits.length === 0 && !ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.pagination.totalPages > 1);
  }
}
function BoutiqueProduitsComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 130)(1, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.selectedProduitForPromotion.nom);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Categorie: ", ctx_r1.getCategorieNom(ctx_r1.selectedProduitForPromotion.categorieId), " ");
  }
}
function BoutiqueProduitsComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Chargement des promotions...");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function BoutiqueProduitsComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Aucune promotion produit creee par votre compte. Creez une promotion d'abord dans la page Promotions. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function BoutiqueProduitsComponent_div_23_label_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "label", 138)(1, "div", 139)(2, "input", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function BoutiqueProduitsComponent_div_23_label_1_Template_input_change_2_listener($event) {
      const promotion_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.togglePromotionSelection(promotion_r12._id, $event.target.checked));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 141)(4, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "span", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const promotion_r12 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx_r1.isPromotionSelected(promotion_r12._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](promotion_r12.nom);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate3"](" -", promotion_r12.taux, "% | Du ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](8, 10, promotion_r12.dateDebut, "dd/MM/yyyy"), " au ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](9, 13, promotion_r12.dateFin, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("bg-success", ctx_r1.isPromotionActive(promotion_r12))("bg-secondary", !ctx_r1.isPromotionActive(promotion_r12));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.isPromotionActive(promotion_r12) ? "Active" : "Inactive", " ");
  }
}
function BoutiqueProduitsComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, BoutiqueProduitsComponent_div_23_label_1_Template, 12, 16, "label", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.promotionsDisponibles);
  }
}
function BoutiqueProduitsComponent_span_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Valider");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function BoutiqueProduitsComponent_span_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "span", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Enregistrement... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function BoutiqueProduitsComponent_div_41_option_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const variant_r14 = ctx.$implicit;
    const i_r15 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngValue", i_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.getVariantDisplayLabel(variant_r14, i_r15), " ");
  }
}
function BoutiqueProduitsComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 17)(1, "div", 130)(2, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Selectionnez la variante puis la quantite a ajouter.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 144)(7, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Variante");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "select", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function BoutiqueProduitsComponent_div_41_Template_select_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r1.selectedStockVariantIndex, $event) || (ctx_r1.selectedStockVariantIndex = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, BoutiqueProduitsComponent_div_41_option_10_Template, 2, 2, "option", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div")(12, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Quantite a ajouter");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "input", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function BoutiqueProduitsComponent_div_41_Template_input_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r1.stockEntryQuantity, $event) || (ctx_r1.stockEntryQuantity = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.selectedProduitForStock.nom);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.selectedStockVariantIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.selectedProduitForStock.variant);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.stockEntryQuantity);
  }
}
function BoutiqueProduitsComponent_span_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Valider");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function BoutiqueProduitsComponent_span_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "span", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Enregistrement... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function BoutiqueProduitsComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BoutiqueProduitsComponent_div_48_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.closeDetail());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function BoutiqueProduitsComponent_div_55_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "img", 170);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r1.selectedProduit.photo, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"])("alt", ctx_r1.selectedProduit.nom);
  }
}
function BoutiqueProduitsComponent_div_55_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function BoutiqueProduitsComponent_div_55_div_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const s_r17 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("color", s_r17 <= ctx_r1.selectedProduit.averageRating ? "#f59e0b" : "#e5e7eb");
  }
}
function BoutiqueProduitsComponent_div_55_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, BoutiqueProduitsComponent_div_55_div_10_ng_container_1_Template, 2, 2, "ng-container", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r1.selectedProduit.averageRating, "/5");
  }
}
function BoutiqueProduitsComponent_div_55_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Pas encore de note ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function BoutiqueProduitsComponent_div_55_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 177)(1, "p", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "p", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.selectedProduit.description);
  }
}
function BoutiqueProduitsComponent_div_55_div_30_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const promo_r18 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.getPromotionLineLabel(promo_r18), " ");
  }
}
function BoutiqueProduitsComponent_div_55_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 177)(1, "p", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Promotions associees ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, BoutiqueProduitsComponent_div_55_div_30_span_6_Template, 2, 1, "span", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("-", ctx_r1.getProduitTotalTauxPromotion(ctx_r1.selectedProduit), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.getProduitActivePromotions(ctx_r1.selectedProduit));
  }
}
function BoutiqueProduitsComponent_div_55_div_31_div_6_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 190)(1, "span", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const attr_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](attr_r19.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](attr_r19.value);
  }
}
function BoutiqueProduitsComponent_div_55_div_31_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 185)(1, "div", 186)(2, "span", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, BoutiqueProduitsComponent_div_55_div_31_div_6_div_7_Template, 5, 2, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const v_r20 = ctx.$implicit;
    const i_r21 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](i_r21 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("text-success", v_r20.qtt - (v_r20.reserved || 0) > 2)("text-danger", v_r20.qtt - (v_r20.reserved || 0) <= 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", v_r20.qtt - (v_r20.reserved || 0), " dispo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.getVariantAttrs(v_r20.attributes));
  }
}
function BoutiqueProduitsComponent_div_55_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 144)(1, "p", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Variantes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, BoutiqueProduitsComponent_div_55_div_31_div_6_Template, 8, 7, "div", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.selectedProduit.variant.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.selectedProduit.variant);
  }
}
function BoutiqueProduitsComponent_div_55_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Aucune variante d\u00E9finie. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function BoutiqueProduitsComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 150)(1, "div", 151)(2, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, BoutiqueProduitsComponent_div_55_img_3_Template, 1, 2, "img", 153)(4, BoutiqueProduitsComponent_div_55_div_4_Template, 2, 0, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 155)(6, "h5", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "span", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, BoutiqueProduitsComponent_div_55_div_10_Template, 4, 3, "div", 158)(11, BoutiqueProduitsComponent_div_55_div_11_Template, 2, 0, "div", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 160)(13, "div", 161)(14, "div", 162)(15, "div", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Prix");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](19, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "span", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "Ar");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 161)(23, "div", 162)(24, "div", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "Stock disponible");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](28, "span", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](29, BoutiqueProduitsComponent_div_55_div_29_Template, 5, 1, "div", 167)(30, BoutiqueProduitsComponent_div_55_div_30_Template, 7, 2, "div", 167)(31, BoutiqueProduitsComponent_div_55_div_31_Template, 7, 2, "div", 168)(32, BoutiqueProduitsComponent_div_55_div_32_Template, 3, 0, "div", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.selectedProduit.photo);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r1.selectedProduit.photo);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.selectedProduit.nom);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.getCategorieNom(ctx_r1.selectedProduit.categorieId), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.selectedProduit.averageRating > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r1.selectedProduit.averageRating);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](19, 16, ctx_r1.selectedProduit.prix == null ? null : ctx_r1.selectedProduit.prix[0] == null ? null : ctx_r1.selectedProduit.prix[0].prixUnitaire), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("text-danger", ctx_r1.getAvailableStock(ctx_r1.selectedProduit) <= 3)("text-success", ctx_r1.getAvailableStock(ctx_r1.selectedProduit) > 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.getAvailableStock(ctx_r1.selectedProduit));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.selectedProduit.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.getProduitActivePromotions(ctx_r1.selectedProduit).length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r1.selectedProduit.variant == null ? null : ctx_r1.selectedProduit.variant.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !(ctx_r1.selectedProduit.variant == null ? null : ctx_r1.selectedProduit.variant.length));
  }
}
function BoutiqueProduitsComponent_div_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 194)(1, "div", 195)(2, "button", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BoutiqueProduitsComponent_div_56_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r22);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      ctx_r1.deleteProduit(ctx_r1.selectedProduit._id);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.closeDetail());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "i", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Supprimer");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "button", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BoutiqueProduitsComponent_div_56_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r22);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      ctx_r1.openPromotionModal(ctx_r1.selectedProduit);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.closeDetail());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "i", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Associer promotions");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "button", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BoutiqueProduitsComponent_div_56_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r22);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      ctx_r1.openStockEntryModal(ctx_r1.selectedProduit);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.closeDetail());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "i", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Entree stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "button", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BoutiqueProduitsComponent_div_56_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r22);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      ctx_r1.editProduit(ctx_r1.selectedProduit);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.closeDetail());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "i", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Modifier");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
}
function BoutiqueProduitsComponent_div_91_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "div", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "small", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Chargement...");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function BoutiqueProduitsComponent_select_92_option_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cat_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", cat_r24._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](cat_r24.nom);
  }
}
function BoutiqueProduitsComponent_select_92_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "select", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function BoutiqueProduitsComponent_select_92_Template_select_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r1.addProduitForm.categorieId, $event) || (ctx_r1.addProduitForm.categorieId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "S\u00E9lectionner une cat\u00E9gorie");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, BoutiqueProduitsComponent_select_92_option_3_Template, 2, 2, "option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.addProduitForm.categorieId);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.categories);
  }
}
function BoutiqueProduitsComponent_div_111_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Aucune variante. Cliquez \"Ajouter\" pour d\u00E9finir couleur, taille, etc. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function BoutiqueProduitsComponent_div_112_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 219)(1, "div", 220)(2, "input", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function BoutiqueProduitsComponent_div_112_div_7_Template_input_ngModelChange_2_listener($event) {
      const attr_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r27).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](attr_r28.key, $event) || (attr_r28.key = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 220)(4, "input", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function BoutiqueProduitsComponent_div_112_div_7_Template_input_ngModelChange_4_listener($event) {
      const attr_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r27).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](attr_r28.value, $event) || (attr_r28.value = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 223)(6, "button", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BoutiqueProduitsComponent_div_112_div_7_Template_button_click_6_listener() {
      const ai_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r27).index;
      const i_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.removeAttr(i_r26, ai_r29));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "i", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const attr_r28 = ctx.$implicit;
    const ai_r29 = ctx.index;
    const i_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", attr_r28.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("name", "add_key_" + i_r26 + "_" + ai_r29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", attr_r28.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("name", "add_val_" + i_r26 + "_" + ai_r29);
  }
}
function BoutiqueProduitsComponent_div_112_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 210)(1, "div", 211)(2, "div", 186)(3, "span", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "button", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BoutiqueProduitsComponent_div_112_Template_button_click_5_listener() {
      const i_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r25).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.removeVariant(i_r26));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "i", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, BoutiqueProduitsComponent_div_112_div_7_Template, 8, 4, "div", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "button", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BoutiqueProduitsComponent_div_112_Template_button_click_8_listener() {
      const i_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r25).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.addAttr(i_r26));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Ajouter un attribut ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 216)(12, "label", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, " Quantit\u00E9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "input", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function BoutiqueProduitsComponent_div_112_Template_input_ngModelChange_16_listener($event) {
      const variant_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r25).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](variant_r30.qtt, $event) || (variant_r30.qtt = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const variant_r30 = ctx.$implicit;
    const i_r26 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Variante ", i_r26 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", variant_r30.attrList);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", variant_r30.qtt);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("name", "add_qtt_" + i_r26);
  }
}
function BoutiqueProduitsComponent_span_117_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Ajouter");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function BoutiqueProduitsComponent_span_118_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "span", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Ajout... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function BoutiqueProduitsComponent_option_156_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cat_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", cat_r31._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](cat_r31.nom);
  }
}
function BoutiqueProduitsComponent_div_161_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "small", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Photo actuelle");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r1.editProduitForm.currentPhoto, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"])("alt", ctx_r1.editProduitForm.nom);
  }
}
function BoutiqueProduitsComponent_div_176_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Aucune variante d\u00E9finie. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function BoutiqueProduitsComponent_div_177_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 219)(1, "div", 220)(2, "input", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function BoutiqueProduitsComponent_div_177_div_7_Template_input_ngModelChange_2_listener($event) {
      const attr_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r34).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](attr_r35.key, $event) || (attr_r35.key = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 220)(4, "input", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function BoutiqueProduitsComponent_div_177_div_7_Template_input_ngModelChange_4_listener($event) {
      const attr_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r34).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](attr_r35.value, $event) || (attr_r35.value = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 223)(6, "button", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BoutiqueProduitsComponent_div_177_div_7_Template_button_click_6_listener() {
      const ai_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r34).index;
      const i_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.removeEditAttr(i_r33, ai_r36));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "i", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const attr_r35 = ctx.$implicit;
    const ai_r36 = ctx.index;
    const i_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", attr_r35.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("name", "edit_key_" + i_r33 + "_" + ai_r36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", attr_r35.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("name", "edit_val_" + i_r33 + "_" + ai_r36);
  }
}
function BoutiqueProduitsComponent_div_177_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 210)(1, "div", 211)(2, "div", 186)(3, "span", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "button", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BoutiqueProduitsComponent_div_177_Template_button_click_5_listener() {
      const i_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r32).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.removeEditVariant(i_r33));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "i", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, BoutiqueProduitsComponent_div_177_div_7_Template, 8, 4, "div", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "button", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BoutiqueProduitsComponent_div_177_Template_button_click_8_listener() {
      const i_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r32).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.addEditAttr(i_r33));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "i", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Ajouter un attribut ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 216)(12, "label", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, " Quantit\u00E9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "input", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function BoutiqueProduitsComponent_div_177_Template_input_ngModelChange_16_listener($event) {
      const variant_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r32).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](variant_r37.qtt, $event) || (variant_r37.qtt = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const variant_r37 = ctx.$implicit;
    const i_r33 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Variante ", i_r33 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", variant_r37.attrList);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", variant_r37.qtt);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("name", "edit_qtt_" + i_r33);
  }
}
function BoutiqueProduitsComponent_span_182_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Enregistrer");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function BoutiqueProduitsComponent_span_183_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "span", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Enregistrement... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
class BoutiqueProduitsComponent {
  openDetail(produit) {
    this.selectedProduit = produit;
    this.showDetail = true;
  }
  closeDetail() {
    this.showDetail = false;
    // Petit dÃ©lai pour laisser l'animation se terminer
    setTimeout(() => {
      this.selectedProduit = null;
    }, 300);
  }
  constructor(boutiqueProduitService, cdr, notificationService, router, categorieService, boutiqueService, productService, boutiquePromotionService, authService) {
    this.boutiqueProduitService = boutiqueProduitService;
    this.cdr = cdr;
    this.notificationService = notificationService;
    this.router = router;
    this.categorieService = categorieService;
    this.boutiqueService = boutiqueService;
    this.productService = productService;
    this.boutiquePromotionService = boutiquePromotionService;
    this.authService = authService;
    this.boutique = null;
    this.produits = [];
    this.categories = [];
    this.loading = false;
    this.loadingCategories = false;
    this.pagination = {
      total: 0,
      page: 1,
      limit: 12,
      totalPages: 0
    };
    this.filters = {
      nom: '',
      categorieId: ''
    };
    this.stockByProduitId = {};
    this.loadingStocks = false;
    // â”€â”€ Fiche dÃ©tail â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    this.showDetail = false;
    this.selectedProduit = null;
    this.showPromotionModal = false;
    this.selectedProduitForPromotion = null;
    this.promotionsDisponibles = [];
    this.selectedPromotionIds = new Set();
    this.loadingPromotionsDisponibles = false;
    this.savingPromotions = false;
    this.showStockEntryModal = false;
    this.selectedProduitForStock = null;
    this.selectedStockVariantIndex = 0;
    this.stockEntryQuantity = 1;
    this.savingStockEntry = false;
    // â”€â”€ Modal Ajout â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    this.showAddModal = false;
    this.addProduitForm = {
      nom: '',
      description: '',
      prix: 0,
      categorieId: '',
      photo: null,
      variant: []
    };
    this.isSubmitting = false;
    // â”€â”€ Modal Modification â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    this.showEditModal = false;
    this.editProduitForm = {
      id: '',
      nom: '',
      description: '',
      prix: 0,
      categorieId: '',
      photo: null,
      currentPhoto: '',
      variant: []
    };
    this.isUpdating = false;
    this.currentUserId = this.authService.currentUser?.id || this.authService.getUser()?.id || null;
  }
  ngOnInit() {
    this.checkBoutiqueExists();
  }
  // â”€â”€ Initialisation â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  checkBoutiqueExists() {
    this.boutiqueService.getMyBoutique().subscribe({
      next: response => {
        if (response.success && response.data) {
          this.boutique = response.data;
          if (!response.data.isActive) {
            this.notificationService.info('Boutique inactive', 'Votre boutique doit etre active pour gerer les produits.');
            this.router.navigate(['/boutique/informations']);
            return;
          }
          this.loadCategories();
          this.loadProduits();
        } else {
          this.notificationService.warning('Attention', 'Vous devez creer une boutique avant de gerer des produits');
          this.router.navigate(['/boutique/boxes']);
        }
      },
      error: err => {
        if (err.status === 404 || err.error?.message?.includes('Boutique non trouvee')) {
          this.notificationService.warning('Attention', 'Vous devez creer une boutique avant de gerer des produits');
          this.router.navigate(['/boutique/boxes']);
        } else {
          this.notificationService.error('Erreur', 'Erreur lors de la verification de la boutique');
        }
      }
    });
  }
  loadCategories() {
    this.loadingCategories = true;
    this.categorieService.getAllCategories().subscribe({
      next: response => {
        this.categories = response;
      },
      error: () => {
        this.notificationService.error('Erreur', 'Erreur lors du chargement des catÃ©gories');
      },
      complete: () => {
        this.loadingCategories = false;
      }
    });
  }
  loadProduits() {
    this.loading = true;
    const params = {
      page: this.pagination.page,
      limit: this.pagination.limit,
      boutiqueId: this.boutique?._id,
      sort: 'nom'
    };
    if (this.filters.categorieId?.trim()) params.categorieId = this.filters.categorieId.trim();
    if (this.filters.nom?.trim()) params.nom = {
      regex: this.filters.nom.trim(),
      options: 'i'
    };
    this.boutiqueProduitService.getMyBoutiqueProduits(params).subscribe({
      next: response => {
        if (response.success) {
          this.produits = response.items;
          this.pagination = response.pagination;
          this.loadStocksDisponibles();
          // Mettre Ã  jour le produit sÃ©lectionnÃ© si la fiche est ouverte
          if (this.selectedProduit) {
            const updated = this.produits.find(p => p._id === this.selectedProduit._id);
            if (updated) this.selectedProduit = updated;
          }
          Promise.resolve().then(() => this.cdr.detectChanges());
        }
        this.loading = false;
      },
      error: () => {
        this.notificationService.error('Erreur', 'Erreur lors du chargement des produits');
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }
  onPageChange(page) {
    this.pagination.page = page;
    this.loadProduits();
  }
  onSearch() {
    this.pagination.page = 1;
    this.loadProduits();
  }
  // â”€â”€ Suppression â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  deleteProduit(id) {
    if (confirm('ÃŠtes-vous sÃ»r de vouloir supprimer ce produit ?')) {
      this.boutiqueProduitService.deleteMyBoutiqueProduit(id).subscribe({
        next: response => {
          if (response.success) {
            this.notificationService.success('Produit supprimÃ© avec succÃ¨s');
            this.loadProduits();
          } else {
            this.notificationService.error('Erreur', response.message || 'Erreur lors de la suppression');
          }
        },
        error: () => {
          this.notificationService.error('Erreur', 'Erreur lors de la suppression');
        }
      });
    }
  }
  // â”€â”€ Helpers affichage â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  calculateTotalStock(produit) {
    if (!produit.variant || !Array.isArray(produit.variant)) return 0;
    return produit.variant.reduce((sum, v) => sum + (v.qtt || 0), 0);
  }
  calculateAvailableStockLocal(produit) {
    if (!produit.variant || !Array.isArray(produit.variant)) return 0;
    return produit.variant.reduce((sum, v) => {
      const qtt = Number(v?.qtt) || 0;
      const reserved = Number(v?.reserved) || 0;
      return sum + Math.max(0, qtt - reserved);
    }, 0);
  }
  loadStocksDisponibles() {
    if (!this.produits.length) {
      this.stockByProduitId = {};
      return;
    }
    this.loadingStocks = true;
    const requests = this.produits.map(produit => this.productService.getProductStock(produit._id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(stock => ({
      productId: produit._id,
      totalStock: Number(stock.totalStock) || 0,
      availableStock: Number(stock.availableStock) || 0
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)({
      productId: produit._id,
      totalStock: this.calculateTotalStock(produit),
      availableStock: this.calculateAvailableStockLocal(produit)
    }))));
    (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.forkJoin)(requests).subscribe({
      next: stocks => {
        const nextMap = {};
        stocks.forEach(stock => {
          nextMap[stock.productId] = {
            totalStock: stock.totalStock,
            availableStock: stock.availableStock
          };
        });
        this.stockByProduitId = nextMap;
      },
      error: error => {
        console.error('Erreur chargement stocks produits:', error);
      },
      complete: () => {
        this.loadingStocks = false;
        this.cdr.detectChanges();
      }
    });
  }
  getAvailableStock(produit) {
    if (!produit) return 0;
    return this.stockByProduitId[produit._id]?.availableStock ?? this.calculateAvailableStockLocal(produit);
  }
  getTotalStock(produit) {
    if (!produit) return 0;
    return this.stockByProduitId[produit._id]?.totalStock ?? this.calculateTotalStock(produit);
  }
  getPagesArray() {
    return Array.from({
      length: this.pagination.totalPages
    }, (_, i) => i + 1);
  }
  getCategorieNom(categorieId) {
    if (categorieId && typeof categorieId === 'object' && categorieId.nom) {
      return categorieId.nom;
    }
    const cat = this.categories.find(c => c._id === categorieId);
    return cat ? cat.nom : 'Non catÃ©gorisÃ©';
  }
  /** Transforme un objet attributes en tableau [{key, value}] pour l'affichage */
  getVariantAttrs(attributes) {
    if (!attributes) return [];
    return Object.entries(attributes).map(([key, value]) => ({
      key,
      value: String(value)
    }));
  }
  openPromotionModal(produit) {
    this.selectedProduitForPromotion = produit;
    this.selectedPromotionIds = new Set(this.extractPromotionIds(produit.promotions));
    this.showPromotionModal = true;
    this.loadPromotionsDisponibles();
  }
  closePromotionModal() {
    this.showPromotionModal = false;
    this.selectedProduitForPromotion = null;
    this.selectedPromotionIds = new Set();
    this.savingPromotions = false;
  }
  loadPromotionsDisponibles() {
    this.loadingPromotionsDisponibles = true;
    this.boutiquePromotionService.getMyBoutiquePromotions({
      page: 1,
      limit: 1000,
      categorie: 'produit'
    }).subscribe({
      next: response => {
        const allPromotions = response?.data || [];
        this.promotionsDisponibles = allPromotions.filter(promotion => this.isPromotionOwnedByCurrentUser(promotion));
      },
      error: error => {
        console.error('Erreur chargement promotions disponibles:', error);
        this.notificationService.error('Erreur', 'Impossible de charger les promotions');
        this.promotionsDisponibles = [];
      },
      complete: () => {
        this.loadingPromotionsDisponibles = false;
        this.cdr.detectChanges();
      }
    });
  }
  isPromotionSelected(promotionId) {
    return this.selectedPromotionIds.has(promotionId);
  }
  togglePromotionSelection(promotionId, checked) {
    if (checked) {
      this.selectedPromotionIds.add(promotionId);
      return;
    }
    this.selectedPromotionIds.delete(promotionId);
  }
  saveProduitPromotions() {
    if (!this.selectedProduitForPromotion?._id) {
      return;
    }
    this.savingPromotions = true;
    const promotionIds = Array.from(this.selectedPromotionIds);
    this.boutiqueProduitService.updateProduitPromotions(this.selectedProduitForPromotion._id, promotionIds).subscribe({
      next: response => {
        if (!response.success) {
          this.notificationService.error('Erreur', response.message || 'Association impossible');
          return;
        }
        const updatedPromotions = response.data?.promotions || [];
        this.produits = this.produits.map(produit => produit._id === this.selectedProduitForPromotion._id ? {
          ...produit,
          promotions: updatedPromotions
        } : produit);
        if (this.selectedProduit?._id === this.selectedProduitForPromotion._id) {
          this.selectedProduit = {
            ...this.selectedProduit,
            promotions: updatedPromotions
          };
        }
        this.notificationService.success('Promotions associees avec succes');
        this.closePromotionModal();
      },
      error: error => {
        console.error('Erreur association promotions:', error);
        this.notificationService.error('Erreur', 'Erreur lors de l association des promotions');
      },
      complete: () => {
        this.savingPromotions = false;
        this.cdr.detectChanges();
      }
    });
  }
  isPromotionActive(promotion) {
    const now = new Date();
    const debut = new Date(promotion.dateDebut);
    const fin = new Date(promotion.dateFin);
    return !Number.isNaN(debut.getTime()) && !Number.isNaN(fin.getTime()) && now >= debut && now <= fin;
  }
  getSelectedPromotionsTotalTaux() {
    const selectedIds = this.selectedPromotionIds;
    const total = this.promotionsDisponibles.filter(promotion => selectedIds.has(promotion._id)).reduce((sum, promotion) => sum + (Number(promotion.taux) || 0), 0);
    return Math.min(100, total);
  }
  getProduitActivePromotions(produit) {
    const promotions = Array.isArray(produit?.promotions) ? produit.promotions : [];
    return promotions.filter(promotion => this.isPromotionActive(promotion));
  }
  getProduitTotalTauxPromotion(produit) {
    const total = this.getProduitActivePromotions(produit).reduce((sum, promotion) => sum + (Number(promotion.taux) || 0), 0);
    return Math.min(100, total);
  }
  getPromotionLineLabel(promotion) {
    return `${promotion.nom} (-${promotion.taux}%)`;
  }
  extractPromotionIds(promotions) {
    if (!Array.isArray(promotions)) return [];
    return promotions.map(promotion => {
      if (typeof promotion === 'string') return promotion;
      return promotion?._id || null;
    }).filter(id => !!id);
  }
  isPromotionOwnedByCurrentUser(promotion) {
    if (!this.currentUserId) return true;
    if (typeof promotion.createdBy === 'string') {
      return promotion.createdBy === this.currentUserId;
    }
    return promotion.createdBy?._id === this.currentUserId;
  }
  openStockEntryModal(produit) {
    if (!Array.isArray(produit.variant) || produit.variant.length === 0) {
      this.notificationService.warning('Aucune variante disponible pour ce produit');
      return;
    }
    this.selectedProduitForStock = produit;
    this.selectedStockVariantIndex = 0;
    this.stockEntryQuantity = 1;
    this.showStockEntryModal = true;
  }
  closeStockEntryModal() {
    this.showStockEntryModal = false;
    this.selectedProduitForStock = null;
    this.selectedStockVariantIndex = 0;
    this.stockEntryQuantity = 1;
    this.savingStockEntry = false;
  }
  getVariantDisplayLabel(variant, index) {
    const attrs = this.getVariantAttrs(variant?.attributes);
    if (!attrs.length) {
      return `Variante ${index + 1}`;
    }
    return attrs.map(attr => `${attr.key}: ${attr.value}`).join(' | ');
  }
  submitStockEntry() {
    const produit = this.selectedProduitForStock;
    if (!produit?._id) {
      return;
    }
    const quantity = Number(this.stockEntryQuantity);
    if (!Number.isFinite(quantity) || quantity <= 0) {
      this.notificationService.warning('La quantite doit etre superieure a 0');
      return;
    }
    this.savingStockEntry = true;
    this.boutiqueProduitService.createStockEntry(produit._id, {
      quantity,
      variantIndex: this.selectedStockVariantIndex
    }).subscribe({
      next: response => {
        if (!response.success) {
          this.notificationService.error('Erreur', response.message || 'Entree stock impossible');
          return;
        }
        const updatedProduct = this.produits.find(item => item._id === produit._id);
        if (updatedProduct?.variant?.[response.data.variantIndex]) {
          updatedProduct.variant[response.data.variantIndex].qtt = response.data.variant.qtt;
          updatedProduct.variant[response.data.variantIndex].reserved = response.data.variant.reserved;
        }
        if (this.selectedProduit?._id === produit._id && this.selectedProduit.variant?.[response.data.variantIndex]) {
          this.selectedProduit.variant[response.data.variantIndex].qtt = response.data.variant.qtt;
          this.selectedProduit.variant[response.data.variantIndex].reserved = response.data.variant.reserved;
        }
        this.stockByProduitId[produit._id] = {
          totalStock: response.data.totalStock,
          availableStock: response.data.availableStock
        };
        this.notificationService.success('Entree en stock enregistree avec succes');
        this.closeStockEntryModal();
      },
      error: error => {
        console.error('Erreur entree stock:', error);
        this.notificationService.error('Erreur', 'Impossible d enregistrer l entree stock');
      },
      complete: () => {
        this.savingStockEntry = false;
        this.cdr.detectChanges();
      }
    });
  }
  // â”€â”€ Conversion : objet attributes â†” attrList â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  attrsToList(attributes) {
    if (!attributes) return [];
    return Object.entries(attributes).map(([key, value]) => ({
      key,
      value: String(value)
    }));
  }
  listToAttrs(attrList) {
    const obj = {};
    attrList.forEach(({
      key,
      value
    }) => {
      if (key.trim()) obj[key.trim()] = value;
    });
    return obj;
  }
  variantsToFormData(variants) {
    return variants.filter(v => v.qtt > 0).map(v => ({
      attributes: this.listToAttrs(v.attrList),
      qtt: v.qtt
    }));
  }
  // â”€â”€ Modal Ajout â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  addProduit() {
    this.resetAddForm();
    this.showAddModal = true;
  }
  resetAddForm() {
    this.addProduitForm = {
      nom: '',
      description: '',
      prix: 0,
      categorieId: '',
      photo: null,
      variant: []
    };
  }
  closeAddModal() {
    this.showAddModal = false;
    this.resetAddForm();
  }
  onFileSelected(event) {
    const file = event.target.files[0];
    if (file) this.addProduitForm.photo = file;
  }
  addVariant() {
    this.addProduitForm.variant.push({
      attrList: [],
      qtt: 1
    });
  }
  removeVariant(index) {
    this.addProduitForm.variant.splice(index, 1);
  }
  addAttr(variantIndex) {
    this.addProduitForm.variant[variantIndex].attrList.push({
      key: '',
      value: ''
    });
  }
  removeAttr(variantIndex, attrIndex) {
    this.addProduitForm.variant[variantIndex].attrList.splice(attrIndex, 1);
  }
  submitNewProduit() {
    if (!this.addProduitForm.nom || !this.addProduitForm.prix) {
      this.notificationService.error('Erreur', 'Veuillez remplir les champs obligatoires (nom et prix)');
      return;
    }
    if (!this.addProduitForm.categorieId?.trim()) {
      this.notificationService.error('Erreur', 'Veuillez selectionner une categorie');
      return;
    }
    for (let i = 0; i < this.addProduitForm.variant.length; i++) {
      if (!this.addProduitForm.variant[i].qtt || this.addProduitForm.variant[i].qtt < 1) {
        this.notificationService.error('Erreur', `La variante ${i + 1} doit avoir une quantitÃ© supÃ©rieure Ã  0`);
        return;
      }
    }
    this.isSubmitting = true;
    const formData = new FormData();
    formData.append('nom', this.addProduitForm.nom);
    formData.append('description', this.addProduitForm.description);
    formData.append('prix', JSON.stringify([{
      prixUnitaire: this.addProduitForm.prix
    }]));
    formData.append('boutiqueId', this.boutique?._id || '');
    formData.append('categorieId', this.addProduitForm.categorieId.trim());
    if (this.addProduitForm.variant.length > 0) {
      formData.append('variant', JSON.stringify(this.variantsToFormData(this.addProduitForm.variant)));
    }
    if (this.addProduitForm.photo) {
      formData.append('photo', this.addProduitForm.photo);
    }
    this.boutiqueProduitService.createMyBoutiqueProduit(formData).subscribe({
      next: response => {
        if (response.success) {
          this.notificationService.success('Produit ajouté avec succès');
          this.closeAddModal();
          this.loadProduits();
        } else {
          this.notificationService.error('Erreur', response.message);
        }
        this.isSubmitting = false;
      },
      error: err => {
        this.notificationService.error('Erreur', 'Erreur lors de l\'ajout du produit');
        console.error(err);
        this.isSubmitting = false;
      }
    });
  }
  editProduit(produit) {
    const catId = typeof produit.categorieId === 'object' ? produit.categorieId._id : produit.categorieId;
    this.editProduitForm = {
      id: produit._id,
      nom: produit.nom,
      description: produit.description || '',
      prix: produit.prix?.[0]?.prixUnitaire || 0,
      categorieId: catId,
      photo: null,
      currentPhoto: produit.photo || '',
      variant: (produit.variant || []).map(v => ({
        attrList: this.attrsToList(v.attributes),
        qtt: v.qtt || 1
      }))
    };
    this.showEditModal = true;
  }
  closeEditModal() {
    this.showEditModal = false;
    this.editProduitForm = {
      id: '',
      nom: '',
      description: '',
      prix: 0,
      categorieId: '',
      photo: null,
      currentPhoto: '',
      variant: []
    };
  }
  onEditFileSelected(event) {
    const file = event.target.files[0];
    if (file) this.editProduitForm.photo = file;
  }
  addEditVariant() {
    this.editProduitForm.variant.push({
      attrList: [],
      qtt: 1
    });
  }
  removeEditVariant(index) {
    this.editProduitForm.variant.splice(index, 1);
  }
  addEditAttr(variantIndex) {
    this.editProduitForm.variant[variantIndex].attrList.push({
      key: '',
      value: ''
    });
  }
  removeEditAttr(variantIndex, attrIndex) {
    this.editProduitForm.variant[variantIndex].attrList.splice(attrIndex, 1);
  }
  updateProduit() {
    if (!this.editProduitForm.nom || !this.editProduitForm.prix) {
      this.notificationService.error('Erreur', 'Veuillez remplir les champs obligatoires');
      return;
    }
    if (!this.editProduitForm.categorieId?.trim()) {
      this.notificationService.error('Erreur', 'Veuillez selectionner une categorie');
      return;
    }
    for (let i = 0; i < this.editProduitForm.variant.length; i++) {
      if (!this.editProduitForm.variant[i].qtt || this.editProduitForm.variant[i].qtt < 1) {
        this.notificationService.error('Erreur', `La variante ${i + 1} doit avoir une quantitÃ© supÃ©rieure Ã  0`);
        return;
      }
    }
    this.isUpdating = true;
    const formData = new FormData();
    formData.append('nom', this.editProduitForm.nom);
    formData.append('description', this.editProduitForm.description);
    formData.append('prix', JSON.stringify([{
      prixUnitaire: this.editProduitForm.prix
    }]));
    formData.append('categorieId', this.editProduitForm.categorieId.trim());
    if (this.editProduitForm.variant.length > 0) {
      formData.append('variant', JSON.stringify(this.variantsToFormData(this.editProduitForm.variant)));
    }
    if (this.editProduitForm.photo) {
      formData.append('photo', this.editProduitForm.photo);
    }
    this.boutiqueProduitService.updateMyBoutiqueProduit(this.editProduitForm.id, formData).subscribe({
      next: response => {
        if (response.success) {
          this.notificationService.success('Produit modifiÃ© avec succÃ¨s');
          this.closeEditModal();
          this.loadProduits();
        } else {
          this.notificationService.error('Erreur', response.message);
        }
        this.isUpdating = false;
      },
      error: err => {
        this.notificationService.error('Erreur', 'Erreur lors de la modification du produit');
        console.error(err);
        this.isUpdating = false;
      }
    });
  }
  static {
    this.ɵfac = function BoutiqueProduitsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BoutiqueProduitsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_boutique_produit_service__WEBPACK_IMPORTED_MODULE_9__.BoutiqueProduitService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_10__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_categorie_produit_service__WEBPACK_IMPORTED_MODULE_12__.CategorieProduitService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_boutique_service__WEBPACK_IMPORTED_MODULE_13__.BoutiqueService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_14__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_boutique_promotion_service__WEBPACK_IMPORTED_MODULE_15__.BoutiquePromotionService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_16__.AuthService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: BoutiqueProduitsComponent,
      selectors: [["app-boutique-produits"]],
      decls: 184,
      vars: 66,
      consts: [["noPhoto", ""], [1, "container-fluid"], [1, "row", "mb-4"], [1, "col-12"], [1, "page-title-box", "d-sm-flex", "align-items-center", "justify-content-between"], [1, "mb-sm-0"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "ri-add-line", "me-1"], ["class", "text-center py-5", 4, "ngIf"], [4, "ngIf"], ["tabindex", "-1", 1, "modal", "fade"], [1, "modal-dialog", "modal-lg", "modal-dialog-scrollable"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], [1, "ri-percent-line", "text-warning", "me-2"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body"], ["class", "mb-3 p-3 rounded bg-light border", 4, "ngIf"], ["class", "text-center py-4", 4, "ngIf"], ["class", "alert alert-info mb-0", 4, "ngIf"], ["class", "d-flex flex-column gap-2", 4, "ngIf"], [1, "modal-footer", "d-flex", "justify-content-between"], [1, "fw-semibold", "text-success"], [1, "d-flex", "gap-2"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn-warning", 3, "click", "disabled"], [1, "modal-dialog"], [1, "ri-add-circle-line", "text-success", "me-2"], ["class", "modal-body", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-success", 3, "click", "disabled"], ["class", "detail-backdrop", 3, "click", 4, "ngIf"], [1, "detail-offcanvas"], [1, "offcanvas-header", "border-bottom"], [1, "offcanvas-title", "d-flex", "align-items-center", "gap-2", "mb-0"], [1, "ri-file-list-3-line", "text-primary"], ["class", "offcanvas-body", 4, "ngIf"], ["class", "detail-footer border-top", 4, "ngIf"], [1, "ri-add-circle-line", "text-primary", "me-2"], [1, "p-3", "bg-light", "rounded-3", "mb-3"], [1, "text-uppercase", "fw-bold", "text-muted", "small", "mb-3"], [1, "ri-information-line", "me-1"], [1, "row", "g-3"], [1, "col-md-6"], [1, "form-label"], [1, "text-danger"], ["type", "text", "name", "add_nom", "placeholder", "Ex: Cherry Blossom Ring", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "input-group"], ["type", "number", "name", "add_prix", "min", "0", "placeholder", "0", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "input-group-text"], ["class", "d-flex align-items-center gap-2", 4, "ngIf"], ["class", "form-select", "name", "add_cat", "required", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["type", "file", "accept", "image/*", 1, "form-control", 3, "change"], ["rows", "2", "name", "add_desc", "placeholder", "D\u00E9crivez votre produit...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "p-3", "bg-light", "rounded-3"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "text-uppercase", "fw-bold", "text-muted", "small", "mb-0"], [1, "ri-stack-line", "me-1"], [1, "fw-normal", "text-lowercase"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-primary", 3, "click"], [1, "ti", "ti-plus"], ["class", "alert alert-info py-2 small mb-0", 4, "ngIf"], ["class", "card border mb-2", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"], [1, "ri-edit-line", "text-primary", "me-2"], ["type", "text", "name", "edit_nom", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "edit_prix", "min", "0", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "edit_cat", "required", "", 1, "form-select", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "mt-2 d-flex align-items-center gap-2", 4, "ngIf"], ["rows", "2", "name", "edit_desc", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "text-muted", "mt-2"], [1, "filters-bar", "mb-4"], [1, "row", "g-3", "align-items-center"], [1, "col-md-5"], [1, "search-input-wrap"], [1, "ri-search-line", "search-icon"], ["type", "text", "placeholder", "Rechercher un produit...", 1, "form-control", "search-input", 3, "ngModelChange", "keyup", "ngModel"], [1, "col-md-4"], [1, "form-select", 3, "ngModelChange", "change", "ngModel"], [1, "col-md-3", "text-end", "text-muted", "small"], [1, "ri-archive-line", "me-1"], ["class", "card shadow-sm border-0", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "pagination-wrap mt-4", 4, "ngIf"], [3, "value"], [1, "card", "shadow-sm", "border-0"], [1, "card-body", "p-0"], [1, "table-responsive"], [1, "table", "produits-table", "align-middle", "mb-0"], [1, "table-light"], [2, "width", "60px"], [1, "text-center", 2, "width", "170px"], ["class", "produit-row", 3, "click", 4, "ngFor", "ngForOf"], [1, "produit-row", 3, "click"], [4, "ngIf", "ngIfElse"], [1, "produit-nom-cell"], ["class", "produit-desc-cell", 4, "ngIf"], [1, "badge", "bg-info", "bg-opacity-10", "text-dark", "fw-semibold"], [1, "prix-cell"], [1, "currency-label"], [1, "badge", "rounded-pill", 3, "ngClass"], [1, "text-center", "action-cell", 3, "click"], ["role", "group", "aria-label", "Actions produit", 1, "action-buttons", "action-buttons--table"], ["type", "button", "title", "Modifier", "aria-label", "Modifier", 1, "action-btn", "action-btn--edit", 3, "click"], [1, "ti", "ti-pencil"], ["type", "button", "title", "Associer promotions", "aria-label", "Associer promotions", 1, "action-btn", "action-btn--promo", 3, "click"], [1, "ti", "ti-percentage"], ["type", "button", "title", "Entree stock", "aria-label", "Entree stock", 1, "action-btn", "action-btn--stock", 3, "click"], ["type", "button", "title", "Supprimer", "aria-label", "Supprimer", 1, "action-btn", "action-btn--delete", 3, "click"], [1, "ti", "ti-trash"], [1, "produit-thumb", 3, "src", "alt"], [1, "produit-thumb", "produit-thumb-placeholder"], [1, "ri-image-line"], [1, "produit-desc-cell"], [1, "empty-state"], [1, "ri-shopping-bag-line"], [1, "btn", "btn-primary", "mt-2", 3, "click"], [1, "pagination-wrap", "mt-4"], [1, "pagination", "justify-content-center", "mb-0"], [1, "page-item"], [1, "page-link", 3, "click"], [1, "ri-arrow-left-s-line"], ["class", "page-item", 3, "active", 4, "ngFor", "ngForOf"], [1, "ri-arrow-right-s-line"], [1, "mb-3", "p-3", "rounded", "bg-light", "border"], [1, "fw-semibold"], [1, "small", "text-muted"], [1, "text-center", "py-4"], [1, "spinner-border", "text-primary"], [1, "alert", "alert-info", "mb-0"], [1, "d-flex", "flex-column", "gap-2"], ["class", "border rounded p-3 d-flex align-items-start justify-content-between", 4, "ngFor", "ngForOf"], [1, "border", "rounded", "p-3", "d-flex", "align-items-start", "justify-content-between"], [1, "form-check", "me-3"], ["type", "checkbox", 1, "form-check-input", 3, "change", "checked"], [1, "flex-grow-1"], [1, "badge"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "mb-3"], ["name", "stock_variant", 1, "form-select", 3, "ngModelChange", "ngModel"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["type", "number", "name", "stock_quantity", "min", "1", 1, "form-control", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [1, "detail-backdrop", 3, "click"], [1, "offcanvas-body"], [1, "detail-hero", "mb-4"], [1, "detail-photo-wrap"], ["class", "detail-photo", 3, "src", "alt", 4, "ngIf"], ["class", "detail-photo-placeholder", 4, "ngIf"], [1, "detail-hero-info"], [1, "mb-1", "fw-bold"], [1, "badge", "bg-secondary", "ms-1"], ["class", "d-flex align-items-center gap-1 mt-1", 4, "ngIf"], ["class", "small text-muted mt-1", 4, "ngIf"], [1, "row", "g-3", "mb-4"], [1, "col-6"], [1, "detail-stat-card"], [1, "stat-label"], [1, "stat-value", "text-primary"], [1, "stat-unit"], [1, "stat-value"], ["class", "mb-4", 4, "ngIf"], ["class", "mb-3", 4, "ngIf"], ["class", "alert alert-light py-2 small", 4, "ngIf"], [1, "detail-photo", 3, "src", "alt"], [1, "detail-photo-placeholder"], [1, "d-flex", "align-items-center", "gap-1", "mt-1"], [4, "ngFor", "ngForOf"], [1, "ms-1", "small", "text-muted"], [1, "ri-star-fill", 2, "font-size", "0.95rem"], [1, "small", "text-muted", "mt-1"], [1, "mb-4"], [1, "detail-section-title"], [1, "text-muted", "mb-0", 2, "line-height", "1.65"], [1, "badge", "bg-success", "ms-1"], [1, "d-flex", "flex-wrap", "gap-2"], ["class", "badge bg-info ms-1", 4, "ngFor", "ngForOf"], [1, "badge", "bg-info", "ms-1"], ["class", "variant-detail-card", 4, "ngFor", "ngForOf"], [1, "variant-detail-card"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-2"], [1, "badge", "bg-primary"], [1, "small", "fw-semibold"], ["class", "variant-attr-chip", 4, "ngFor", "ngForOf"], [1, "variant-attr-chip"], [1, "chip-key"], [1, "chip-val"], [1, "alert", "alert-light", "py-2", "small"], [1, "detail-footer", "border-top"], ["role", "group", "aria-label", "Actions fiche produit", 1, "action-buttons", "action-buttons--detail"], ["type", "button", 1, "action-btn", "action-btn--delete", "action-btn--with-label", 3, "click"], [1, "ri-delete-bin-line"], ["type", "button", 1, "action-btn", "action-btn--promo", "action-btn--with-label", 3, "click"], [1, "ri-percent-line"], ["type", "button", 1, "action-btn", "action-btn--stock", "action-btn--with-label", 3, "click"], [1, "ri-add-line"], ["type", "button", 1, "action-btn", "action-btn--edit", "action-btn--with-label", 3, "click"], [1, "ri-edit-line"], [1, "d-flex", "align-items-center", "gap-2"], [1, "spinner-border", "spinner-border-sm", "text-primary"], [1, "text-muted"], ["name", "add_cat", "required", "", 1, "form-select", 3, "ngModelChange", "ngModel"], [1, "alert", "alert-info", "py-2", "small", "mb-0"], [1, "ti", "ti-info-circle", "me-1"], [1, "card", "border", "mb-2"], [1, "card-body", "p-3"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [1, "ti", "ti-x"], ["class", "row g-2 mb-2 align-items-center", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-secondary", "mb-3", 3, "click"], [1, "d-flex", "align-items-center", "gap-3", "pt-2", "border-top"], [1, "form-label", "fw-semibold", "mb-0"], ["type", "number", "min", "1", 1, "form-control", "form-control-sm", 2, "width", "90px", 3, "ngModelChange", "ngModel", "name"], [1, "row", "g-2", "mb-2", "align-items-center"], [1, "col"], ["type", "text", "placeholder", "Attribut (ex: Couleur)", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "name"], ["type", "text", "placeholder", "Valeur (ex: Rouge)", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel", "name"], [1, "col-auto"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], [1, "ri-save-line", "me-1"], [1, "mt-2", "d-flex", "align-items-center", "gap-2"], [1, "rounded", 2, "width", "52px", "height", "52px", "object-fit", "cover", "border", "1px solid #dee2e6", 3, "src", "alt"], [1, "ti", "ti-info-circle"], [1, "ti", "ti-plus", "me-1"]],
      template: function BoutiqueProduitsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "h4", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Produits de ma Boutique");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BoutiqueProduitsComponent_Template_button_click_6_listener() {
            return ctx.addProduit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "i", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, " Ajouter un produit ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, BoutiqueProduitsComponent_div_9_Template, 4, 0, "div", 8)(10, BoutiqueProduitsComponent_div_10_Template, 18, 7, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 10)(12, "div", 11)(13, "div", 12)(14, "div", 13)(15, "h5", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Associer promotions ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BoutiqueProduitsComponent_Template_button_click_18_listener() {
            return ctx.closePromotionModal();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, BoutiqueProduitsComponent_div_20_Template, 5, 2, "div", 18)(21, BoutiqueProduitsComponent_div_21_Template, 4, 0, "div", 19)(22, BoutiqueProduitsComponent_div_22_Template, 2, 0, "div", 20)(23, BoutiqueProduitsComponent_div_23_Template, 2, 1, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 22)(25, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 24)(28, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BoutiqueProduitsComponent_Template_button_click_28_listener() {
            return ctx.closePromotionModal();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, " Annuler ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "button", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BoutiqueProduitsComponent_Template_button_click_30_listener() {
            return ctx.saveProduitPromotions();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](31, BoutiqueProduitsComponent_span_31_Template, 2, 0, "span", 9)(32, BoutiqueProduitsComponent_span_32_Template, 3, 0, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "div", 10)(34, "div", 27)(35, "div", 12)(36, "div", 13)(37, "h5", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](38, "i", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, "Entree en stock ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BoutiqueProduitsComponent_Template_button_click_40_listener() {
            return ctx.closeStockEntryModal();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](41, BoutiqueProduitsComponent_div_41_Template, 15, 4, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "div", 30)(43, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BoutiqueProduitsComponent_Template_button_click_43_listener() {
            return ctx.closeStockEntryModal();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44, " Annuler ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "button", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BoutiqueProduitsComponent_Template_button_click_45_listener() {
            return ctx.submitStockEntry();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](46, BoutiqueProduitsComponent_span_46_Template, 2, 0, "span", 9)(47, BoutiqueProduitsComponent_span_47_Template, 3, 0, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](48, BoutiqueProduitsComponent_div_48_Template, 1, 0, "div", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "div", 33)(50, "div", 34)(51, "h5", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](52, "i", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](53, " Fiche produit ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BoutiqueProduitsComponent_Template_button_click_54_listener() {
            return ctx.closeDetail();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](55, BoutiqueProduitsComponent_div_55_Template, 33, 18, "div", 37)(56, BoutiqueProduitsComponent_div_56_Template, 18, 0, "div", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "div", 10)(58, "div", 11)(59, "div", 12)(60, "div", 13)(61, "h5", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](62, "i", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](63, "Ajouter un produit ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BoutiqueProduitsComponent_Template_button_click_64_listener() {
            return ctx.closeAddModal();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](65, "div", 17)(66, "div", 40)(67, "p", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](68, "i", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](69, "Informations g\u00E9n\u00E9rales ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "div", 43)(71, "div", 44)(72, "label", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](73, "Nom du produit ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](74, "span", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](75, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](76, "input", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function BoutiqueProduitsComponent_Template_input_ngModelChange_76_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.addProduitForm.nom, $event) || (ctx.addProduitForm.nom = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](77, "div", 44)(78, "label", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](79, "Prix (Ar) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](80, "span", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](81, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](82, "div", 48)(83, "input", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function BoutiqueProduitsComponent_Template_input_ngModelChange_83_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.addProduitForm.prix, $event) || (ctx.addProduitForm.prix = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](84, "span", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](85, "Ar");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](86, "div", 44)(87, "label", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](88, "Cat\u00E9gorie ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](89, "span", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](90, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](91, BoutiqueProduitsComponent_div_91_Template, 4, 0, "div", 51)(92, BoutiqueProduitsComponent_select_92_Template, 4, 2, "select", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](93, "div", 44)(94, "label", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](95, "Photo du produit");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](96, "input", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function BoutiqueProduitsComponent_Template_input_change_96_listener($event) {
            return ctx.onFileSelected($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](97, "div", 3)(98, "label", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](99, "Description");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](100, "textarea", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function BoutiqueProduitsComponent_Template_textarea_ngModelChange_100_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.addProduitForm.description, $event) || (ctx.addProduitForm.description = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](101, "div", 55)(102, "div", 56)(103, "p", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](104, "i", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](105, "Variantes ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](106, "span", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](107, "(optionnel)");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](108, "button", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BoutiqueProduitsComponent_Template_button_click_108_listener() {
            return ctx.addVariant();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](109, "i", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](110, "Ajouter ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](111, BoutiqueProduitsComponent_div_111_Template, 3, 0, "div", 62)(112, BoutiqueProduitsComponent_div_112_Template, 17, 4, "div", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](113, "div", 30)(114, "button", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BoutiqueProduitsComponent_Template_button_click_114_listener() {
            return ctx.closeAddModal();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](115, "Annuler");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](116, "button", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BoutiqueProduitsComponent_Template_button_click_116_listener() {
            return ctx.submitNewProduit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](117, BoutiqueProduitsComponent_span_117_Template, 3, 0, "span", 9)(118, BoutiqueProduitsComponent_span_118_Template, 3, 0, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](119, "div", 10)(120, "div", 11)(121, "div", 12)(122, "div", 13)(123, "h5", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](124, "i", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](125, "Modifier le produit ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](126, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BoutiqueProduitsComponent_Template_button_click_126_listener() {
            return ctx.closeEditModal();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](127, "div", 17)(128, "div", 40)(129, "p", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](130, "i", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](131, "Informations g\u00E9n\u00E9rales ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](132, "div", 43)(133, "div", 44)(134, "label", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](135, "Nom du produit ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](136, "span", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](137, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](138, "input", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function BoutiqueProduitsComponent_Template_input_ngModelChange_138_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.editProduitForm.nom, $event) || (ctx.editProduitForm.nom = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](139, "div", 44)(140, "label", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](141, "Prix (Ar) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](142, "span", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](143, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](144, "div", 48)(145, "input", 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function BoutiqueProduitsComponent_Template_input_ngModelChange_145_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.editProduitForm.prix, $event) || (ctx.editProduitForm.prix = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](146, "span", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](147, "Ar");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](148, "div", 44)(149, "label", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](150, "Cat\u00E9gorie ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](151, "span", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](152, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](153, "select", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function BoutiqueProduitsComponent_Template_select_ngModelChange_153_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.editProduitForm.categorieId, $event) || (ctx.editProduitForm.categorieId = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](154, "option", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](155, "S\u00E9lectionner une cat\u00E9gorie");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](156, BoutiqueProduitsComponent_option_156_Template, 2, 2, "option", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](157, "div", 44)(158, "label", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](159, "Changer la photo");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](160, "input", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function BoutiqueProduitsComponent_Template_input_change_160_listener($event) {
            return ctx.onEditFileSelected($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](161, BoutiqueProduitsComponent_div_161_Template, 4, 2, "div", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](162, "div", 3)(163, "label", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](164, "Description");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](165, "textarea", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function BoutiqueProduitsComponent_Template_textarea_ngModelChange_165_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.editProduitForm.description, $event) || (ctx.editProduitForm.description = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](166, "div", 55)(167, "div", 56)(168, "p", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](169, "i", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](170, "Variantes ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](171, "span", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](172, "(optionnel)");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](173, "button", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BoutiqueProduitsComponent_Template_button_click_173_listener() {
            return ctx.addEditVariant();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](174, "i", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](175, "Ajouter ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](176, BoutiqueProduitsComponent_div_176_Template, 3, 0, "div", 62)(177, BoutiqueProduitsComponent_div_177_Template, 17, 4, "div", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](178, "div", 30)(179, "button", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BoutiqueProduitsComponent_Template_button_click_179_listener() {
            return ctx.closeEditModal();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](180, "Annuler");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](181, "button", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BoutiqueProduitsComponent_Template_button_click_181_listener() {
            return ctx.updateProduit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](182, BoutiqueProduitsComponent_span_182_Template, 3, 0, "span", 9)(183, BoutiqueProduitsComponent_span_183_Template, 3, 0, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.loading && ctx.produits.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.loading || ctx.produits.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background", ctx.showPromotionModal ? "rgba(0,0,0,0.5)" : "");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("show", ctx.showPromotionModal)("d-block", ctx.showPromotionModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.selectedProduitForPromotion);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.loadingPromotionsDisponibles);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.loadingPromotionsDisponibles && ctx.promotionsDisponibles.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.loadingPromotionsDisponibles && ctx.promotionsDisponibles.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Remise totale selectionnee: -", ctx.getSelectedPromotionsTotalTaux(), "% ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.savingPromotions);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.savingPromotions);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.savingPromotions);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.savingPromotions);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background", ctx.showStockEntryModal ? "rgba(0,0,0,0.5)" : "");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("show", ctx.showStockEntryModal)("d-block", ctx.showStockEntryModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.selectedProduitForStock);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.savingStockEntry);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.savingStockEntry);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.savingStockEntry);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.savingStockEntry);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showDetail);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("detail-offcanvas--open", ctx.showDetail);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.selectedProduit);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.selectedProduit);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background", ctx.showAddModal ? "rgba(0,0,0,0.5)" : "");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("show", ctx.showAddModal)("d-block", ctx.showAddModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.addProduitForm.nom);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.addProduitForm.prix);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.loadingCategories);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.loadingCategories);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.addProduitForm.description);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.addProduitForm.variant.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.addProduitForm.variant);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.isSubmitting);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isSubmitting);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isSubmitting);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background", ctx.showEditModal ? "rgba(0,0,0,0.5)" : "");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("show", ctx.showEditModal)("d-block", ctx.showEditModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.editProduitForm.nom);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.editProduitForm.prix);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.editProduitForm.categorieId);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.categories);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.editProduitForm.currentPhoto && !ctx.editProduitForm.photo);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.editProduitForm.description);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.editProduitForm.variant.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.editProduitForm.variant);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.isUpdating);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isUpdating);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isUpdating);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.SlicePipe, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe],
      styles: [".filters-bar[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  padding: 1rem 1.25rem;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n  border: 1px solid #e5e7eb;\n}\n.filters-bar[_ngcontent-%COMP%]   .search-input-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.filters-bar[_ngcontent-%COMP%]   .search-input-wrap[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6b7280;\n}\n.filters-bar[_ngcontent-%COMP%]   .search-input-wrap[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  padding-left: 2.2rem;\n}\n\n.produits-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: #6b7280;\n  padding: 12px 16px;\n  white-space: nowrap;\n  border-bottom: 2px solid #e5e7eb;\n}\n.produits-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  vertical-align: middle;\n}\n.produits-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e5e7eb;\n}\n.produits-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.produit-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.produit-row[_ngcontent-%COMP%]:hover {\n  background: #f5f5ff !important;\n}\n.produit-row[_ngcontent-%COMP%]:hover   .produit-nom-cell[_ngcontent-%COMP%] {\n  color: #6366f1;\n  text-decoration: underline;\n}\n\n.produit-thumb[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  object-fit: cover;\n  border-radius: 10px;\n  border: 1px solid #e5e7eb;\n  display: block;\n}\n\n.produit-thumb-placeholder[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  border-radius: 10px;\n  background: #f3f4f6;\n  border: 1px solid #e5e7eb;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #adb5bd;\n  font-size: 1.1rem;\n}\n\n.produit-nom-cell[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  font-weight: 600;\n  color: #1e1b4b;\n  transition: color 0.12s;\n}\n\n.produit-desc-cell[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6b7280;\n  margin-top: 2px;\n}\n\n.prix-cell[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: #6366f1;\n  white-space: nowrap;\n}\n.prix-cell[_ngcontent-%COMP%]   .currency-label[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 400;\n  color: #6b7280;\n}\n\n.action-cell[_ngcontent-%COMP%] {\n  min-width: 182px;\n}\n\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n\n.action-buttons--table[_ngcontent-%COMP%] {\n  flex-wrap: nowrap;\n}\n\n.action-buttons--detail[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.action-btn[_ngcontent-%COMP%] {\n  border: 1px solid transparent;\n  border-radius: 10px;\n  height: 34px;\n  min-width: 34px;\n  padding: 0 10px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;\n}\n.action-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1;\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 10px rgba(15, 23, 42, 0.12);\n}\n.action-btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid rgba(37, 99, 235, 0.35);\n  outline-offset: 2px;\n}\n\n.action-btn--with-label[_ngcontent-%COMP%] {\n  height: 40px;\n  min-width: 120px;\n  padding: 0 14px;\n  font-size: 0.86rem;\n  font-weight: 600;\n}\n.action-btn--with-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n\n.action-btn--edit[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  border-color: #bfdbfe;\n  color: #2563eb;\n}\n.action-btn--edit[_ngcontent-%COMP%]:hover {\n  background: #2563eb;\n  border-color: #2563eb;\n  color: #fff;\n}\n\n.action-btn--promo[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  border-color: #fde68a;\n  color: #b45309;\n}\n.action-btn--promo[_ngcontent-%COMP%]:hover {\n  background: #b45309;\n  border-color: #b45309;\n  color: #fff;\n}\n\n.action-btn--stock[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  border-color: #a7f3d0;\n  color: #047857;\n}\n.action-btn--stock[_ngcontent-%COMP%]:hover {\n  background: #047857;\n  border-color: #047857;\n  color: #fff;\n}\n\n.action-btn--delete[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  border-color: #fecaca;\n  color: #b91c1c;\n}\n.action-btn--delete[_ngcontent-%COMP%]:hover {\n  background: #b91c1c;\n  border-color: #b91c1c;\n  color: #fff;\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 4rem 2rem;\n  background: #fff;\n  border-radius: 14px;\n  border: 1px dashed #e5e7eb;\n  color: #6b7280;\n}\n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: #d1d5db;\n  display: block;\n  margin-bottom: 1rem;\n}\n.empty-state[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #374151;\n}\n\n.pagination-wrap[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  margin: 0 2px;\n  color: #6366f1;\n  border-color: #e5e7eb;\n}\n.pagination-wrap[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]:hover {\n  background: #eef2ff;\n}\n\n.pagination-wrap[_ngcontent-%COMP%]   .page-item.active[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  background: #6366f1;\n  border-color: #6366f1;\n  color: #fff;\n}\n\n.detail-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.35);\n  z-index: 1040;\n}\n\n.detail-offcanvas[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  width: 420px;\n  max-width: 95vw;\n  background: #fff;\n  z-index: 1045;\n  display: flex;\n  flex-direction: column;\n  box-shadow: -8px 0 32px rgba(0, 0, 0, 0.12);\n  transform: translateX(100%);\n  transition: transform 0.28s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.detail-offcanvas.detail-offcanvas--open[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n.detail-offcanvas[_ngcontent-%COMP%]   .offcanvas-header[_ngcontent-%COMP%] {\n  padding: 18px 20px;\n  flex-shrink: 0;\n}\n.detail-offcanvas[_ngcontent-%COMP%]   .offcanvas-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 20px;\n}\n\n.detail-footer[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  padding: 14px 20px;\n  display: flex;\n  justify-content: center;\n  gap: 0;\n  background: linear-gradient(180deg, #fafafa 0%, #f3f4f6 100%);\n  border-top: 1px solid #e5e7eb;\n}\n\n.detail-hero[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  align-items: flex-start;\n}\n.detail-hero[_ngcontent-%COMP%]   .detail-photo-wrap[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.detail-hero[_ngcontent-%COMP%]   .detail-photo[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 90px;\n  object-fit: cover;\n  border-radius: 12px;\n  border: 1px solid #e5e7eb;\n}\n.detail-hero[_ngcontent-%COMP%]   .detail-photo-placeholder[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 90px;\n  border-radius: 12px;\n  border: 1px dashed #e5e7eb;\n  background: #f3f4f6;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n  color: #d1d5db;\n}\n.detail-hero[_ngcontent-%COMP%]   .detail-hero-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n\n.detail-stat-card[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n  padding: 12px 16px;\n}\n.detail-stat-card[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: #6b7280;\n  font-weight: 600;\n  margin-bottom: 4px;\n}\n.detail-stat-card[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 800;\n}\n.detail-stat-card[_ngcontent-%COMP%]   .stat-unit[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 400;\n  color: #6b7280;\n}\n\n.detail-section-title[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  font-weight: 700;\n  color: #6b7280;\n  margin-bottom: 10px;\n}\n\n.variant-detail-card[_ngcontent-%COMP%] {\n  background: #eef2ff;\n  border: 1px solid rgba(99, 102, 241, 0.15);\n  border-radius: 10px;\n  padding: 12px 14px;\n}\n\n.variant-attr-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  background: #fff;\n  border: 1px solid rgba(99, 102, 241, 0.2);\n  border-radius: 20px;\n  padding: 2px 10px;\n  font-size: 0.78rem;\n  gap: 4px;\n}\n.variant-attr-chip[_ngcontent-%COMP%]   .chip-key[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-weight: 500;\n  text-transform: capitalize;\n}\n.variant-attr-chip[_ngcontent-%COMP%]   .chip-val[_ngcontent-%COMP%] {\n  color: #1e1b4b;\n  font-weight: 600;\n}\n\n@media (max-width: 576px) {\n  .action-cell[_ngcontent-%COMP%] {\n    min-width: 162px;\n  }\n  .action-buttons[_ngcontent-%COMP%] {\n    gap: 6px;\n  }\n  .action-buttons--table[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n    height: 30px;\n    min-width: 30px;\n    padding: 0;\n  }\n  .detail-offcanvas[_ngcontent-%COMP%] {\n    width: 100vw;\n    max-width: 100vw;\n  }\n  .detail-footer[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .action-buttons--detail[_ngcontent-%COMP%]   .action-btn--with-label[_ngcontent-%COMP%] {\n    flex: 1 1 calc(50% - 4px);\n    min-width: 0;\n    padding: 0 10px;\n  }\n}\n@media (max-width: 420px) {\n  .action-buttons--detail[_ngcontent-%COMP%]   .action-btn--with-label[_ngcontent-%COMP%] {\n    flex-basis: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVtby9wYWdlcy9ib3V0aXF1ZS9wcm9kdWl0cy9ib3V0aXF1ZS1wcm9kdWl0cy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uL1dlYiUyMGF2YW5jZS9tMXAxM21lYW4tQ2FuZHktUm9tYW5jZS9mcm9udGVuZC9zcmMvYXBwL2RlbW8vcGFnZXMvYm91dGlxdWUvcHJvZHVpdHMvYm91dGlxdWUtcHJvZHVpdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFUTztFQVVQLHFCQUFBO0VBQ0EseUNBQUE7RUFDQSx5QkFBQTtBQ2ZGO0FEaUJFO0VBQ0Usa0JBQUE7QUNmSjtBRGdCSTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLGNBdkJPO0FDU2I7QURnQkk7RUFBZ0Isb0JBQUE7QUNicEI7O0FEb0JJO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQXJDTztFQXNDUCxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7QUNqQk47QURzQkk7RUFBSyxrQkFBQTtFQUFvQixzQkFBQTtBQ2xCN0I7QURpQkU7RUFFRSxnQ0FBQTtBQ2hCSjtBRGlCSTtFQUFlLG1CQUFBO0FDZG5COztBRG1CQTtFQUNFLGVBQUE7RUFDQSw0QkFBQTtBQ2hCRjtBRGtCRTtFQUNFLDhCQUFBO0FDaEJKO0FEa0JJO0VBQ0UsY0FsRUk7RUFtRUosMEJBQUE7QUNoQk47O0FEcUJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FDbEJGOztBRHFCQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNsQkY7O0FEcUJBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBNUZVO0VBNkZWLHVCQUFBO0FDbEJGOztBRHFCQTtFQUNFLGtCQUFBO0VBQ0EsY0FqR1c7RUFrR1gsZUFBQTtBQ2xCRjs7QURxQkE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0E5R1E7RUErR1IsbUJBQUE7QUNsQkY7QURtQkU7RUFBa0Isa0JBQUE7RUFBb0IsZ0JBQUE7RUFBa0IsY0ExRzdDO0FDNEZiOztBRGtCQTtFQUNFLGdCQUFBO0FDZkY7O0FEa0JBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxRQUFBO0FDZkY7O0FEa0JBO0VBQ0UsaUJBQUE7QUNmRjs7QURrQkE7RUFDRSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FDZkY7O0FEa0JBO0VBQ0UsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFFBQUE7RUFDQSwwSEFDRTtBQ2hCSjtBRHNCRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDcEJKO0FEdUJFO0VBQ0UsMkJBQUE7RUFDQSw2Q0FBQTtBQ3JCSjtBRHdCRTtFQUNFLDBDQUFBO0VBQ0EsbUJBQUE7QUN0Qko7O0FEMEJBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUN2QkY7QUR5QkU7RUFDRSxtQkFBQTtBQ3ZCSjs7QUQyQkE7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FoTFk7QUN3SmQ7QUQwQkU7RUFDRSxtQkFuTFU7RUFvTFYscUJBcExVO0VBcUxWLFdBQUE7QUN4Qko7O0FENEJBO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBM0xhO0FDa0tmO0FEMkJFO0VBQ0UsbUJBOUxXO0VBK0xYLHFCQS9MVztFQWdNWCxXQUFBO0FDekJKOztBRDZCQTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxjQXRNYTtBQzRLZjtBRDRCRTtFQUNFLG1CQXpNVztFQTBNWCxxQkExTVc7RUEyTVgsV0FBQTtBQzFCSjs7QUQ4QkE7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FqTmM7QUNzTGhCO0FENkJFO0VBQ0UsbUJBcE5ZO0VBcU5aLHFCQXJOWTtFQXNOWixXQUFBO0FDM0JKOztBRGdDQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQW5PTztFQW9PUCwwQkFBQTtFQUNBLGNBdk9XO0FDME1iO0FEK0JFO0VBQUksZUFBQTtFQUFpQixjQUFBO0VBQWdCLGNBQUE7RUFBZ0IsbUJBQUE7QUN6QnZEO0FEMEJFO0VBQUssY0FBQTtBQ3ZCUDs7QUQyQkE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxjQXZQUTtFQXdQUixxQkFqUE87QUN5TlQ7QUR5QkU7RUFBVSxtQkF4UEk7QUNrT2hCOztBRHdCQTtFQUNFLG1CQTVQUTtFQTZQUixxQkE3UFE7RUE4UFIsV0FBQTtBQ3JCRjs7QUR5QkE7RUFDRSxlQUFBO0VBQ0EsUUFBQTtFQUNBLCtCQUFBO0VBQ0EsYUFBQTtBQ3RCRjs7QUR5QkE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esd0RBQUE7QUN0QkY7QUR3QkU7RUFDRSx3QkFBQTtBQ3RCSjtBRHlCRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQ3ZCSjtBRDBCRTtFQUNFLE9BQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUN4Qko7O0FENkJBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsTUFBQTtFQUNBLDZEQUFBO0VBQ0EsNkJBQUE7QUMxQkY7O0FEOEJBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtBQzNCRjtBRDZCRTtFQUNFLGNBQUE7QUMzQko7QUQ4QkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQzVCSjtBRCtCRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQzdCSjtBRGdDRTtFQUNFLE9BQUE7RUFDQSxZQUFBO0FDOUJKOztBRG1DQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDaENGO0FEa0NFO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0E3VlM7RUE4VlQsZ0JBQUE7RUFDQSxrQkFBQTtBQ2hDSjtBRG1DRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUNqQ0o7QURvQ0U7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0ExV1M7QUN3VWI7O0FEdUNBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQXBYVztFQXFYWCxtQkFBQTtBQ3BDRjs7QUR3Q0E7RUFDRSxtQkEvWGM7RUFnWWQsMENBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDckNGOztBRHlDQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQ3RDRjtBRHdDRTtFQUNFLGNBNVlTO0VBNllULGdCQUFBO0VBQ0EsMEJBQUE7QUN0Q0o7QUR5Q0U7RUFDRSxjQW5aUTtFQW9aUixnQkFBQTtBQ3ZDSjs7QUQyQ0E7RUFDRTtJQUNFLGdCQUFBO0VDeENGO0VEMkNBO0lBQ0UsUUFBQTtFQ3pDRjtFRDRDQTtJQUNFLFlBQUE7SUFDQSxlQUFBO0lBQ0EsVUFBQTtFQzFDRjtFRDZDQTtJQUNFLFlBQUE7SUFDQSxnQkFBQTtFQzNDRjtFRDhDQTtJQUNFLGFBQUE7RUM1Q0Y7RUQrQ0E7SUFDRSx5QkFBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0VDN0NGO0FBQ0Y7QURnREE7RUFDRTtJQUNFLGdCQUFBO0VDOUNGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyDDosKUwoDDosKUwoDDosKUwoAgVmFyaWFibGVzIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxyXG4kcHJpbWFyeTogIzYzNjZmMTtcclxuJHByaW1hcnktbGlnaHQ6ICNlZWYyZmY7XHJcbiRkYW5nZXI6ICNlZjQ0NDQ7XHJcbiRkYW5nZXItbGlnaHQ6ICNmZWYyZjI7XHJcbiRzdWNjZXNzOiAjMjJjNTVlO1xyXG4kdGV4dC1kYXJrOiAjMWUxYjRiO1xyXG4kdGV4dC1tdXRlZDogIzZiNzI4MDtcclxuJGJvcmRlcjogI2U1ZTdlYjtcclxuJHJhZGl1czogMTRweDtcclxuJGFjdGlvbi1lZGl0OiAjMjU2M2ViO1xyXG4kYWN0aW9uLXByb21vOiAjYjQ1MzA5O1xyXG4kYWN0aW9uLXN0b2NrOiAjMDQ3ODU3O1xyXG4kYWN0aW9uLWRlbGV0ZTogI2I5MWMxYztcclxuXHJcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBGaWx0cmVzIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxyXG4uZmlsdGVycy1iYXIge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogJHJhZGl1cztcclxuICBwYWRkaW5nOiAxcmVtIDEuMjVyZW07XHJcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwwLDAsMC4wNik7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGJvcmRlcjtcclxuXHJcbiAgLnNlYXJjaC1pbnB1dC13cmFwIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC5zZWFyY2gtaWNvbiB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogMTJweDtcclxuICAgICAgdG9wOiA1MCU7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgY29sb3I6ICR0ZXh0LW11dGVkO1xyXG4gICAgfVxyXG4gICAgLnNlYXJjaC1pbnB1dCB7IHBhZGRpbmctbGVmdDogMi4ycmVtOyB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyDDosKUwoDDosKUwoDDosKUwoAgVGFibGVhdSDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcclxuLnByb2R1aXRzLXRhYmxlIHtcclxuICB0aGVhZCB0ciB7XHJcbiAgICB0aCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDZlbTtcclxuICAgICAgY29sb3I6ICR0ZXh0LW11dGVkO1xyXG4gICAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkYm9yZGVyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdGJvZHkgdHIge1xyXG4gICAgdGQgeyBwYWRkaW5nOiAxMnB4IDE2cHg7IHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IH1cclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkYm9yZGVyO1xyXG4gICAgJjpsYXN0LWNoaWxkIHsgYm9yZGVyLWJvdHRvbTogbm9uZTsgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gTGlnbmUgY2xpcXVhYmxlXHJcbi5wcm9kdWl0LXJvdyB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4xMnM7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmZiAhaW1wb3J0YW50O1xyXG5cclxuICAgIC5wcm9kdWl0LW5vbS1jZWxsIHtcclxuICAgICAgY29sb3I6ICRwcmltYXJ5O1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5wcm9kdWl0LXRodW1iIHtcclxuICB3aWR0aDogNDZweDtcclxuICBoZWlnaHQ6IDQ2cHg7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ucHJvZHVpdC10aHVtYi1wbGFjZWhvbGRlciB7XHJcbiAgd2lkdGg6IDQ2cHg7XHJcbiAgaGVpZ2h0OiA0NnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogI2YzZjRmNjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjb2xvcjogI2FkYjViZDtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxufVxyXG5cclxuLnByb2R1aXQtbm9tLWNlbGwge1xyXG4gIGZvbnQtc2l6ZTogMC44OHJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAkdGV4dC1kYXJrO1xyXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMTJzO1xyXG59XHJcblxyXG4ucHJvZHVpdC1kZXNjLWNlbGwge1xyXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICBjb2xvcjogJHRleHQtbXV0ZWQ7XHJcbiAgbWFyZ2luLXRvcDogMnB4O1xyXG59XHJcblxyXG4ucHJpeC1jZWxsIHtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAkcHJpbWFyeTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIC5jdXJyZW5jeS1sYWJlbCB7IGZvbnQtc2l6ZTogMC43MnJlbTsgZm9udC13ZWlnaHQ6IDQwMDsgY29sb3I6ICR0ZXh0LW11dGVkOyB9XHJcbn1cclxuXHJcbi8vIEFjdGlvbnNcclxuLmFjdGlvbi1jZWxsIHtcclxuICBtaW4td2lkdGg6IDE4MnB4O1xyXG59XHJcblxyXG4uYWN0aW9uLWJ1dHRvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDhweDtcclxufVxyXG5cclxuLmFjdGlvbi1idXR0b25zLS10YWJsZSB7XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbn1cclxuXHJcbi5hY3Rpb24tYnV0dG9ucy0tZGV0YWlsIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uYWN0aW9uLWJ0biB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBoZWlnaHQ6IDM0cHg7XHJcbiAgbWluLXdpZHRoOiAzNHB4O1xyXG4gIHBhZGRpbmc6IDAgMTBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogNnB4O1xyXG4gIHRyYW5zaXRpb246XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZSxcclxuICAgIGNvbG9yIDAuMnMgZWFzZSxcclxuICAgIGJvcmRlci1jb2xvciAwLjJzIGVhc2UsXHJcbiAgICB0cmFuc2Zvcm0gMC4ycyBlYXNlLFxyXG4gICAgYm94LXNoYWRvdyAwLjJzIGVhc2U7XHJcblxyXG4gIGkge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDEwcHggcmdiYSgxNSwgMjMsIDQyLCAwLjEyKTtcclxuICB9XHJcblxyXG4gICY6Zm9jdXMtdmlzaWJsZSB7XHJcbiAgICBvdXRsaW5lOiAycHggc29saWQgcmdiYSgzNywgOTksIDIzNSwgMC4zNSk7XHJcbiAgICBvdXRsaW5lLW9mZnNldDogMnB4O1xyXG4gIH1cclxufVxyXG5cclxuLmFjdGlvbi1idG4tLXdpdGgtbGFiZWwge1xyXG4gIGhlaWdodDogNDBweDtcclxuICBtaW4td2lkdGg6IDEyMHB4O1xyXG4gIHBhZGRpbmc6IDAgMTRweDtcclxuICBmb250LXNpemU6IDAuODZyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuXHJcbiAgc3BhbiB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIH1cclxufVxyXG5cclxuLmFjdGlvbi1idG4tLWVkaXQge1xyXG4gIGJhY2tncm91bmQ6ICNkYmVhZmU7XHJcbiAgYm9yZGVyLWNvbG9yOiAjYmZkYmZlO1xyXG4gIGNvbG9yOiAkYWN0aW9uLWVkaXQ7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogJGFjdGlvbi1lZGl0O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkYWN0aW9uLWVkaXQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbn1cclxuXHJcbi5hY3Rpb24tYnRuLS1wcm9tbyB7XHJcbiAgYmFja2dyb3VuZDogI2ZlZjNjNztcclxuICBib3JkZXItY29sb3I6ICNmZGU2OGE7XHJcbiAgY29sb3I6ICRhY3Rpb24tcHJvbW87XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogJGFjdGlvbi1wcm9tbztcclxuICAgIGJvcmRlci1jb2xvcjogJGFjdGlvbi1wcm9tbztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxufVxyXG5cclxuLmFjdGlvbi1idG4tLXN0b2NrIHtcclxuICBiYWNrZ3JvdW5kOiAjZDFmYWU1O1xyXG4gIGJvcmRlci1jb2xvcjogI2E3ZjNkMDtcclxuICBjb2xvcjogJGFjdGlvbi1zdG9jaztcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYWN0aW9uLXN0b2NrO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkYWN0aW9uLXN0b2NrO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG59XHJcblxyXG4uYWN0aW9uLWJ0bi0tZGVsZXRlIHtcclxuICBiYWNrZ3JvdW5kOiAjZmVlMmUyO1xyXG4gIGJvcmRlci1jb2xvcjogI2ZlY2FjYTtcclxuICBjb2xvcjogJGFjdGlvbi1kZWxldGU7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogJGFjdGlvbi1kZWxldGU7XHJcbiAgICBib3JkZXItY29sb3I6ICRhY3Rpb24tZGVsZXRlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG59XHJcblxyXG4vLyDDosKUwoDDosKUwoDDosKUwoAgRW1wdHkgc3RhdGUgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXHJcbi5lbXB0eS1zdGF0ZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDRyZW0gMnJlbTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XHJcbiAgYm9yZGVyOiAxcHggZGFzaGVkICRib3JkZXI7XHJcbiAgY29sb3I6ICR0ZXh0LW11dGVkO1xyXG5cclxuICBpIHsgZm9udC1zaXplOiAzcmVtOyBjb2xvcjogI2QxZDVkYjsgZGlzcGxheTogYmxvY2s7IG1hcmdpbi1ib3R0b206IDFyZW07IH1cclxuICBoNSB7IGNvbG9yOiAjMzc0MTUxOyB9XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBQYWdpbmF0aW9uIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxyXG4ucGFnaW5hdGlvbi13cmFwIC5wYWdlLWxpbmsge1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBtYXJnaW46IDAgMnB4O1xyXG4gIGNvbG9yOiAkcHJpbWFyeTtcclxuICBib3JkZXItY29sb3I6ICRib3JkZXI7XHJcbiAgJjpob3ZlciB7IGJhY2tncm91bmQ6ICRwcmltYXJ5LWxpZ2h0OyB9XHJcbn1cclxuLnBhZ2luYXRpb24td3JhcCAucGFnZS1pdGVtLmFjdGl2ZSAucGFnZS1saW5rIHtcclxuICBiYWNrZ3JvdW5kOiAkcHJpbWFyeTtcclxuICBib3JkZXItY29sb3I6ICRwcmltYXJ5O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4vLyDDosKUwoDDosKUwoDDosKUwoAgT0ZGQ0FOVkFTIEZJQ0hFIETDg8KJVEFJTCDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcclxuLmRldGFpbC1iYWNrZHJvcCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGluc2V0OiAwO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zNSk7XHJcbiAgei1pbmRleDogMTA0MDtcclxufVxyXG5cclxuLmRldGFpbC1vZmZjYW52YXMge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiA0MjBweDtcclxuICBtYXgtd2lkdGg6IDk1dnc7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICB6LWluZGV4OiAxMDQ1O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBib3gtc2hhZG93OiAtOHB4IDAgMzJweCByZ2JhKDAsMCwwLDAuMTIpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yOHMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxuXHJcbiAgJi5kZXRhaWwtb2ZmY2FudmFzLS1vcGVuIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICB9XHJcblxyXG4gIC5vZmZjYW52YXMtaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDE4cHggMjBweDtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gIH1cclxuXHJcbiAgLm9mZmNhbnZhcy1ib2R5IHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcbn1cclxuXHJcbi8vIEZvb3RlciBkZSBsJ29mZmNhbnZhc1xyXG4uZGV0YWlsLWZvb3RlciB7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbiAgcGFkZGluZzogMTRweCAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiAwO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmYWZhZmEgMCUsICNmM2Y0ZjYgMTAwJSk7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlNWU3ZWI7XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBDb250ZW51IGZpY2hlIGTDg8KpdGFpbCDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcclxuLmRldGFpbC1oZXJvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMTZweDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHJcbiAgLmRldGFpbC1waG90by13cmFwIHtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gIH1cclxuXHJcbiAgLmRldGFpbC1waG90byB7XHJcbiAgICB3aWR0aDogOTBweDtcclxuICAgIGhlaWdodDogOTBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICRib3JkZXI7XHJcbiAgfVxyXG5cclxuICAuZGV0YWlsLXBob3RvLXBsYWNlaG9sZGVyIHtcclxuICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGJvcmRlcjogMXB4IGRhc2hlZCAkYm9yZGVyO1xyXG4gICAgYmFja2dyb3VuZDogI2YzZjRmNjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBjb2xvcjogI2QxZDVkYjtcclxuICB9XHJcblxyXG4gIC5kZXRhaWwtaGVyby1pbmZvIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBtaW4td2lkdGg6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBDYXJ0ZXMgc3RhdFxyXG4uZGV0YWlsLXN0YXQtY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZzogMTJweCAxNnB4O1xyXG5cclxuICAuc3RhdC1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDAuNzJyZW07XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDZlbTtcclxuICAgIGNvbG9yOiAkdGV4dC1tdXRlZDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgfVxyXG5cclxuICAuc3RhdC12YWx1ZSB7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgfVxyXG5cclxuICAuc3RhdC11bml0IHtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAkdGV4dC1tdXRlZDtcclxuICB9XHJcbn1cclxuXHJcbi8vIFRpdHJlIGRlIHNlY3Rpb25cclxuLmRldGFpbC1zZWN0aW9uLXRpdGxlIHtcclxuICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wN2VtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6ICR0ZXh0LW11dGVkO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi8vIFZhcmlhbnRlIGTDg8KpdGFpbFxyXG4udmFyaWFudC1kZXRhaWwtY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogJHByaW1hcnktbGlnaHQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgkcHJpbWFyeSwgMC4xNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nOiAxMnB4IDE0cHg7XHJcbn1cclxuXHJcbi8vIENoaXAgYXR0cmlidXQgZGFucyBsYSBmaWNoZSBkw4PCqXRhaWxcclxuLnZhcmlhbnQtYXR0ci1jaGlwIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgkcHJpbWFyeSwgMC4yKTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDJweCAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMC43OHJlbTtcclxuICBnYXA6IDRweDtcclxuXHJcbiAgLmNoaXAta2V5IHtcclxuICAgIGNvbG9yOiAkdGV4dC1tdXRlZDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICB9XHJcblxyXG4gIC5jaGlwLXZhbCB7XHJcbiAgICBjb2xvcjogJHRleHQtZGFyaztcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAuYWN0aW9uLWNlbGwge1xyXG4gICAgbWluLXdpZHRoOiAxNjJweDtcclxuICB9XHJcblxyXG4gIC5hY3Rpb24tYnV0dG9ucyB7XHJcbiAgICBnYXA6IDZweDtcclxuICB9XHJcblxyXG4gIC5hY3Rpb24tYnV0dG9ucy0tdGFibGUgLmFjdGlvbi1idG4ge1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWluLXdpZHRoOiAzMHB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcblxyXG4gIC5kZXRhaWwtb2ZmY2FudmFzIHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIG1heC13aWR0aDogMTAwdnc7XHJcbiAgfVxyXG5cclxuICAuZGV0YWlsLWZvb3RlciB7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgLmFjdGlvbi1idXR0b25zLS1kZXRhaWwgLmFjdGlvbi1idG4tLXdpdGgtbGFiZWwge1xyXG4gICAgZmxleDogMSAxIGNhbGMoNTAlIC0gNHB4KTtcclxuICAgIG1pbi13aWR0aDogMDtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xyXG4gIC5hY3Rpb24tYnV0dG9ucy0tZGV0YWlsIC5hY3Rpb24tYnRuLS13aXRoLWxhYmVsIHtcclxuICAgIGZsZXgtYmFzaXM6IDEwMCU7XHJcbiAgfVxyXG59XHJcbiIsIi5maWx0ZXJzLWJhciB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIHBhZGRpbmc6IDFyZW0gMS4yNXJlbTtcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU3ZWI7XG59XG4uZmlsdGVycy1iYXIgLnNlYXJjaC1pbnB1dC13cmFwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmZpbHRlcnMtYmFyIC5zZWFyY2gtaW5wdXQtd3JhcCAuc2VhcmNoLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDEycHg7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGNvbG9yOiAjNmI3MjgwO1xufVxuLmZpbHRlcnMtYmFyIC5zZWFyY2gtaW5wdXQtd3JhcCAuc2VhcmNoLWlucHV0IHtcbiAgcGFkZGluZy1sZWZ0OiAyLjJyZW07XG59XG5cbi5wcm9kdWl0cy10YWJsZSB0aGVhZCB0ciB0aCB7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDZlbTtcbiAgY29sb3I6ICM2YjcyODA7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlNWU3ZWI7XG59XG4ucHJvZHVpdHMtdGFibGUgdGJvZHkgdHIgdGQge1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4ucHJvZHVpdHMtdGFibGUgdGJvZHkgdHIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U1ZTdlYjtcbn1cbi5wcm9kdWl0cy10YWJsZSB0Ym9keSB0cjpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLnByb2R1aXQtcm93IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTJzO1xufVxuLnByb2R1aXQtcm93OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2Y1ZjVmZiAhaW1wb3J0YW50O1xufVxuLnByb2R1aXQtcm93OmhvdmVyIC5wcm9kdWl0LW5vbS1jZWxsIHtcbiAgY29sb3I6ICM2MzY2ZjE7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4ucHJvZHVpdC10aHVtYiB7XG4gIHdpZHRoOiA0NnB4O1xuICBoZWlnaHQ6IDQ2cHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlN2ViO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnByb2R1aXQtdGh1bWItcGxhY2Vob2xkZXIge1xuICB3aWR0aDogNDZweDtcbiAgaGVpZ2h0OiA0NnB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZjNmNGY2O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlN2ViO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6ICNhZGI1YmQ7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuXG4ucHJvZHVpdC1ub20tY2VsbCB7XG4gIGZvbnQtc2l6ZTogMC44OHJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMxZTFiNGI7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMTJzO1xufVxuXG4ucHJvZHVpdC1kZXNjLWNlbGwge1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGNvbG9yOiAjNmI3MjgwO1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG5cbi5wcml4LWNlbGwge1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICM2MzY2ZjE7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4ucHJpeC1jZWxsIC5jdXJyZW5jeS1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC43MnJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICM2YjcyODA7XG59XG5cbi5hY3Rpb24tY2VsbCB7XG4gIG1pbi13aWR0aDogMTgycHg7XG59XG5cbi5hY3Rpb24tYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDhweDtcbn1cblxuLmFjdGlvbi1idXR0b25zLS10YWJsZSB7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xufVxuXG4uYWN0aW9uLWJ1dHRvbnMtLWRldGFpbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmFjdGlvbi1idG4ge1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgaGVpZ2h0OiAzNHB4O1xuICBtaW4td2lkdGg6IDM0cHg7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDZweDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UsIGNvbG9yIDAuMnMgZWFzZSwgYm9yZGVyLWNvbG9yIDAuMnMgZWFzZSwgdHJhbnNmb3JtIDAuMnMgZWFzZSwgYm94LXNoYWRvdyAwLjJzIGVhc2U7XG59XG4uYWN0aW9uLWJ0biBpIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBsaW5lLWhlaWdodDogMTtcbn1cbi5hY3Rpb24tYnRuOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICBib3gtc2hhZG93OiAwIDRweCAxMHB4IHJnYmEoMTUsIDIzLCA0MiwgMC4xMik7XG59XG4uYWN0aW9uLWJ0bjpmb2N1cy12aXNpYmxlIHtcbiAgb3V0bGluZTogMnB4IHNvbGlkIHJnYmEoMzcsIDk5LCAyMzUsIDAuMzUpO1xuICBvdXRsaW5lLW9mZnNldDogMnB4O1xufVxuXG4uYWN0aW9uLWJ0bi0td2l0aC1sYWJlbCB7XG4gIGhlaWdodDogNDBweDtcbiAgbWluLXdpZHRoOiAxMjBweDtcbiAgcGFkZGluZzogMCAxNHB4O1xuICBmb250LXNpemU6IDAuODZyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uYWN0aW9uLWJ0bi0td2l0aC1sYWJlbCBzcGFuIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmFjdGlvbi1idG4tLWVkaXQge1xuICBiYWNrZ3JvdW5kOiAjZGJlYWZlO1xuICBib3JkZXItY29sb3I6ICNiZmRiZmU7XG4gIGNvbG9yOiAjMjU2M2ViO1xufVxuLmFjdGlvbi1idG4tLWVkaXQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMjU2M2ViO1xuICBib3JkZXItY29sb3I6ICMyNTYzZWI7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYWN0aW9uLWJ0bi0tcHJvbW8ge1xuICBiYWNrZ3JvdW5kOiAjZmVmM2M3O1xuICBib3JkZXItY29sb3I6ICNmZGU2OGE7XG4gIGNvbG9yOiAjYjQ1MzA5O1xufVxuLmFjdGlvbi1idG4tLXByb21vOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2I0NTMwOTtcbiAgYm9yZGVyLWNvbG9yOiAjYjQ1MzA5O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmFjdGlvbi1idG4tLXN0b2NrIHtcbiAgYmFja2dyb3VuZDogI2QxZmFlNTtcbiAgYm9yZGVyLWNvbG9yOiAjYTdmM2QwO1xuICBjb2xvcjogIzA0Nzg1Nztcbn1cbi5hY3Rpb24tYnRuLS1zdG9jazpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMwNDc4NTc7XG4gIGJvcmRlci1jb2xvcjogIzA0Nzg1NztcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5hY3Rpb24tYnRuLS1kZWxldGUge1xuICBiYWNrZ3JvdW5kOiAjZmVlMmUyO1xuICBib3JkZXItY29sb3I6ICNmZWNhY2E7XG4gIGNvbG9yOiAjYjkxYzFjO1xufVxuLmFjdGlvbi1idG4tLWRlbGV0ZTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNiOTFjMWM7XG4gIGJvcmRlci1jb2xvcjogI2I5MWMxYztcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5lbXB0eS1zdGF0ZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNHJlbSAycmVtO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBib3JkZXI6IDFweCBkYXNoZWQgI2U1ZTdlYjtcbiAgY29sb3I6ICM2YjcyODA7XG59XG4uZW1wdHktc3RhdGUgaSB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgY29sb3I6ICNkMWQ1ZGI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLmVtcHR5LXN0YXRlIGg1IHtcbiAgY29sb3I6ICMzNzQxNTE7XG59XG5cbi5wYWdpbmF0aW9uLXdyYXAgLnBhZ2UtbGluayB7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWFyZ2luOiAwIDJweDtcbiAgY29sb3I6ICM2MzY2ZjE7XG4gIGJvcmRlci1jb2xvcjogI2U1ZTdlYjtcbn1cbi5wYWdpbmF0aW9uLXdyYXAgLnBhZ2UtbGluazpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNlZWYyZmY7XG59XG5cbi5wYWdpbmF0aW9uLXdyYXAgLnBhZ2UtaXRlbS5hY3RpdmUgLnBhZ2UtbGluayB7XG4gIGJhY2tncm91bmQ6ICM2MzY2ZjE7XG4gIGJvcmRlci1jb2xvcjogIzYzNjZmMTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5kZXRhaWwtYmFja2Ryb3Age1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGluc2V0OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMzUpO1xuICB6LWluZGV4OiAxMDQwO1xufVxuXG4uZGV0YWlsLW9mZmNhbnZhcyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogNDIwcHg7XG4gIG1heC13aWR0aDogOTV2dztcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgei1pbmRleDogMTA0NTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm94LXNoYWRvdzogLThweCAwIDMycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yOHMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbn1cbi5kZXRhaWwtb2ZmY2FudmFzLmRldGFpbC1vZmZjYW52YXMtLW9wZW4ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG59XG4uZGV0YWlsLW9mZmNhbnZhcyAub2ZmY2FudmFzLWhlYWRlciB7XG4gIHBhZGRpbmc6IDE4cHggMjBweDtcbiAgZmxleC1zaHJpbms6IDA7XG59XG4uZGV0YWlsLW9mZmNhbnZhcyAub2ZmY2FudmFzLWJvZHkge1xuICBmbGV4OiAxO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uZGV0YWlsLWZvb3RlciB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDA7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmYWZhZmEgMCUsICNmM2Y0ZjYgMTAwJSk7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTVlN2ViO1xufVxuXG4uZGV0YWlsLWhlcm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDE2cHg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLmRldGFpbC1oZXJvIC5kZXRhaWwtcGhvdG8td3JhcCB7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuLmRldGFpbC1oZXJvIC5kZXRhaWwtcGhvdG8ge1xuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OiA5MHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTdlYjtcbn1cbi5kZXRhaWwtaGVybyAuZGV0YWlsLXBob3RvLXBsYWNlaG9sZGVyIHtcbiAgd2lkdGg6IDkwcHg7XG4gIGhlaWdodDogOTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm9yZGVyOiAxcHggZGFzaGVkICNlNWU3ZWI7XG4gIGJhY2tncm91bmQ6ICNmM2Y0ZjY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDJyZW07XG4gIGNvbG9yOiAjZDFkNWRiO1xufVxuLmRldGFpbC1oZXJvIC5kZXRhaWwtaGVyby1pbmZvIHtcbiAgZmxleDogMTtcbiAgbWluLXdpZHRoOiAwO1xufVxuXG4uZGV0YWlsLXN0YXQtY2FyZCB7XG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU3ZWI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbn1cbi5kZXRhaWwtc3RhdC1jYXJkIC5zdGF0LWxhYmVsIHtcbiAgZm9udC1zaXplOiAwLjcycmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNmVtO1xuICBjb2xvcjogIzZiNzI4MDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuLmRldGFpbC1zdGF0LWNhcmQgLnN0YXQtdmFsdWUge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cbi5kZXRhaWwtc3RhdC1jYXJkIC5zdGF0LXVuaXQge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICM2YjcyODA7XG59XG5cbi5kZXRhaWwtc2VjdGlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDdlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICM2YjcyODA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi52YXJpYW50LWRldGFpbC1jYXJkIHtcbiAgYmFja2dyb3VuZDogI2VlZjJmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg5OSwgMTAyLCAyNDEsIDAuMTUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAxMnB4IDE0cHg7XG59XG5cbi52YXJpYW50LWF0dHItY2hpcCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDk5LCAxMDIsIDI0MSwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogMnB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMC43OHJlbTtcbiAgZ2FwOiA0cHg7XG59XG4udmFyaWFudC1hdHRyLWNoaXAgLmNoaXAta2V5IHtcbiAgY29sb3I6ICM2YjcyODA7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuLnZhcmlhbnQtYXR0ci1jaGlwIC5jaGlwLXZhbCB7XG4gIGNvbG9yOiAjMWUxYjRiO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLmFjdGlvbi1jZWxsIHtcbiAgICBtaW4td2lkdGg6IDE2MnB4O1xuICB9XG4gIC5hY3Rpb24tYnV0dG9ucyB7XG4gICAgZ2FwOiA2cHg7XG4gIH1cbiAgLmFjdGlvbi1idXR0b25zLS10YWJsZSAuYWN0aW9uLWJ0biB7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIG1pbi13aWR0aDogMzBweDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIC5kZXRhaWwtb2ZmY2FudmFzIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgbWF4LXdpZHRoOiAxMDB2dztcbiAgfVxuICAuZGV0YWlsLWZvb3RlciB7XG4gICAgcGFkZGluZzogMTJweDtcbiAgfVxuICAuYWN0aW9uLWJ1dHRvbnMtLWRldGFpbCAuYWN0aW9uLWJ0bi0td2l0aC1sYWJlbCB7XG4gICAgZmxleDogMSAxIGNhbGMoNTAlIC0gNHB4KTtcbiAgICBtaW4td2lkdGg6IDA7XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgLmFjdGlvbi1idXR0b25zLS1kZXRhaWwgLmFjdGlvbi1idG4tLXdpdGgtbGFiZWwge1xuICAgIGZsZXgtYmFzaXM6IDEwMCU7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
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
//# sourceMappingURL=src_app_demo_pages_boutique_produits_boutique-produits_component_ts.js.map