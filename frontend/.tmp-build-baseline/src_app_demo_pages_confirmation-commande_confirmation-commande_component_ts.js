"use strict";
(self["webpackChunkfree_version"] = self["webpackChunkfree_version"] || []).push([["src_app_demo_pages_confirmation-commande_confirmation-commande_component_ts"],{

/***/ 1149:
/*!*************************************************************************************!*\
  !*** ./src/app/demo/pages/confirmation-commande/confirmation-commande.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfirmationCommandeComponent: () => (/* binding */ ConfirmationCommandeComponent)
/* harmony export */ });
/* harmony import */ var D_Master_Web_avance_m1p13mean_Candy_Romance_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jspdf */ 2752);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jspdf-autotable */ 8198);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 3305);
/* harmony import */ var _services_panier_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/panier.service */ 2619);
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/notification.service */ 7473);









const _forTrack0 = ($index, $item) => $item.produit._id;
function ConfirmationCommandeComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElement"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Chargement...");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]()();
  }
}
function ConfirmationCommandeComponent_Conditional_2_For_43_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]();
  }
  if (rf & 2) {
    const produit_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Boutique: ", produit_r2.produit == null ? null : produit_r2.produit.boutiqueId == null ? null : produit_r2.produit.boutiqueId.nom);
  }
}
function ConfirmationCommandeComponent_Conditional_2_For_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](0, "div", 20)(1, "div", 42)(2, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](4, ConfirmationCommandeComponent_Conditional_2_For_43_Conditional_4_Template, 2, 1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](5, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](7, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]()();
  }
  if (rf & 2) {
    const produit_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((produit_r2.produit == null ? null : produit_r2.produit.nom) || "Produit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"]((produit_r2.produit == null ? null : produit_r2.produit.boutiqueId == null ? null : produit_r2.produit.boutiqueId.nom) ? 4 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" Quantit\u00E9: ", produit_r2.qtt, " x ", ctx_r2.formatPrice(produit_r2.prixUnitaire), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.formatPrice(produit_r2.sousTotal));
  }
}
function ConfirmationCommandeComponent_Conditional_2_Conditional_87_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.facture.livraison.adresse.nomEndroit);
  }
}
function ConfirmationCommandeComponent_Conditional_2_Conditional_87_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Latitude: ", ctx_r2.facture.livraison.adresse.latitude);
  }
}
function ConfirmationCommandeComponent_Conditional_2_Conditional_87_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Longitude: ", ctx_r2.facture.livraison.adresse.longitude);
  }
}
function ConfirmationCommandeComponent_Conditional_2_Conditional_87_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Tel: ", ctx_r2.facture.livraison.adresse.telephone);
  }
}
function ConfirmationCommandeComponent_Conditional_2_Conditional_87_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](1, ConfirmationCommandeComponent_Conditional_2_Conditional_87_Conditional_1_Template, 2, 1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](2, ConfirmationCommandeComponent_Conditional_2_Conditional_87_Conditional_2_Template, 2, 1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](3, ConfirmationCommandeComponent_Conditional_2_Conditional_87_Conditional_3_Template, 2, 1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](4, ConfirmationCommandeComponent_Conditional_2_Conditional_87_Conditional_4_Template, 2, 1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx_r2.facture.livraison.adresse.nomEndroit ? 1 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx_r2.facture.livraison.adresse.latitude != null ? 2 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx_r2.facture.livraison.adresse.longitude != null ? 3 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx_r2.facture.livraison.adresse.telephone ? 4 : -1);
  }
}
function ConfirmationCommandeComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElement"](2, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Merci pour votre commande !");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](5, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Votre commande a \u00E9t\u00E9 confirm\u00E9e avec succ\u00E8s et est maintenant en pr\u00E9paration.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](7, "div", 8)(8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Num\u00E9ro de commande:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](11, "div", 9)(12, "div", 10)(13, "div", 11)(14, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "FACTURE");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](16, "div", 12)(17, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](19, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](21, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](22, "div", 15)(23, "div", 16)(24, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "D\u00E9tails de la commande");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](26, "div", 17)(27, "div", 18)(28, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Num\u00E9ro de commande:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](30, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](32, "div", 18)(33, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Date de commande:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](35, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](37, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](38, "div", 16)(39, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "Produits command\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](41, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](42, ConfirmationCommandeComponent_Conditional_2_For_43_Template, 9, 5, "div", 20, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](44, "div", 16)(45, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46, "R\u00E9capitulatif");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](47, "div", 21)(48, "div", 22)(49, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "Sous-total:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](51, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](53, "div", 22)(54, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55, "Frais de livraison:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](56, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](58, "div", 23)(59, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "Total pay\u00E9:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](61, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](63, "div", 16)(64, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65, "Paiement");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](66, "div", 24)(67, "div", 18)(68, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](69, "M\u00E9thode de paiement:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](70, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](72, "div", 18)(73, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74, "Date de paiement:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](75, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](77, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](78, "div", 18)(79, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](80, "Montant:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](81, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](83, "div", 16)(84, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](85, "Livraison");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](86, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](87, ConfirmationCommandeComponent_Conditional_2_Conditional_87_Template, 5, 4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](88, "div", 27)(89, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](90, "Date de livraison estim\u00E9e:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](91, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](92);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](93, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](94, "div", 28)(95, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](96, "Actions disponibles");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](97, "div", 29)(98, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomListener"]("click", function ConfirmationCommandeComponent_Conditional_2_Template_button_click_98_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.downloadFacture());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElement"](99, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](100, " T\u00E9l\u00E9charger la facture ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](101, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomListener"]("click", function ConfirmationCommandeComponent_Conditional_2_Template_button_click_101_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.printFacture());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElement"](102, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](103, " Imprimer la facture ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](104, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomListener"]("click", function ConfirmationCommandeComponent_Conditional_2_Template_button_click_104_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.goToOrders());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElement"](105, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](106, " Voir mes commandes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](107, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomListener"]("click", function ConfirmationCommandeComponent_Conditional_2_Template_button_click_107_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.continueShopping());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElement"](108, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](109, " Continuer mes achats ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](110, "div", 37)(111, "div", 38)(112, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElement"](113, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](114, " Suivi de votre commande");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](115, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](116, "Vous recevrez un email lorsque votre commande sera exp\u00E9di\u00E9e. Vous pourrez alors suivre votre colis en temps r\u00E9el.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](117, "div", 38)(118, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElement"](119, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](120, " Service client");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](121, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](122, "Pour toute question concernant votre commande, notre service client est disponible 7j/7 par email ou par t\u00E9l\u00E9phone.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](123, "div", 38)(124, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElement"](125, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](126, " Politique de retour");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](127, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](128, "Vous disposez de 14 jours pour retourner les articles qui ne vous conviennent pas. Consultez nos conditions de retour.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r2.commande.numeroCommande, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("N\u00B0 ", ctx_r2.facture.numeroFacture);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Date: ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](21, 13, ctx_r2.facture.dateFacture, "longDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.facture.commande.numero);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](37, 16, ctx_r2.facture.commande.date, "longDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx_r2.facture.commande.produits);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.formatPrice(ctx_r2.facture.commande.sousTotal));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.formatPrice(ctx_r2.getFraisLivraison()));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.formatPrice(ctx_r2.facture.commande.total));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.facture.paiement.methode === "carte" ? "Carte bancaire" : ctx_r2.facture.paiement.methode);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](77, 19, ctx_r2.facture.paiement.date, "longDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.formatPrice(ctx_r2.facture.paiement.montant));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx_r2.facture.livraison.adresse ? 87 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](93, 22, ctx_r2.facture.livraison.dateEstimee, "longDate"));
  }
}
function ConfirmationCommandeComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElement"](1, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Erreur");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Impossible d'afficher les d\u00E9tails de la commande.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](6, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomListener"]("click", function ConfirmationCommandeComponent_Conditional_3_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.goToHome());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Retour \u00E0 l'accueil");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]()();
  }
}
class ConfirmationCommandeComponent {
  constructor(router, panierService, notificationService) {
    this.router = router;
    this.panierService = panierService;
    this.notificationService = notificationService;
    this.commande = null;
    this.facture = null;
    this.loading = false;
  }
  ngOnInit() {
    const state = history.state;
    this.commande = state?.commande || null;
    this.facture = state?.facture || null;
    if (!this.commande || !this.facture) {
      this.notificationService.warning('Aucune commande a confirmer');
      this.router.navigate(['/panier']);
    }
  }
  formatPrice(price) {
    return this.panierService.formatMontant(price);
  }
  formatPricePdf(price) {
    return this.panierService.formatMontantPdf(price);
  }
  getFraisLivraison() {
    if (!this.facture) return 0;
    return this.getFraisLivraisonPdf(this.facture);
  }
  getFraisLivraisonPdf(facture) {
    const rawFrais = Number(facture.commande?.fraisLivraison);
    if (Number.isFinite(rawFrais) && rawFrais >= 0) {
      return rawFrais;
    }
    const total = Number(facture.commande?.total);
    const sousTotal = Number(facture.commande?.sousTotal);
    const fallback = total - sousTotal;
    return Number.isFinite(fallback) && fallback > 0 ? fallback : 0;
  }
  downloadFacture() {
    var _this = this;
    return (0,D_Master_Web_avance_m1p13mean_Candy_Romance_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this.facture) return;
      const doc = yield _this.buildFacturePdf();
      doc.save(`Facture-${_this.facture.numeroFacture}.pdf`);
      _this.notificationService.success('Facture telechargee avec succes');
    })();
  }
  buildFacturePdf() {
    var _this2 = this;
    return (0,D_Master_Web_avance_m1p13mean_Candy_Romance_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const doc = new jspdf__WEBPACK_IMPORTED_MODULE_2__.jsPDF();
      const facture = _this2.facture;
      if (!facture) return doc;
      const adresse = facture.livraison?.adresse;
      const adresseText = adresse?.nomEndroit || 'Non renseignee';
      const latitudeText = _this2.formatCoordonnee(adresse?.latitude);
      const longitudeText = _this2.formatCoordonnee(adresse?.longitude);
      const telephoneText = adresse?.telephone || 'Non renseigne';
      const fraisLivraison = _this2.getFraisLivraisonPdf(facture);
      const dateFacture = facture.dateFacture ? new Date(facture.dateFacture).toLocaleDateString('fr-FR') : 'N/A';
      const produits = Array.isArray(facture.commande?.produits) ? facture.commande.produits : [];
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
      doc.text(`#${facture.commande?.numero || facture.numeroFacture || 'N/A'}`, 196, 27, {
        align: 'right'
      });
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.text(`Date facture: ${dateFacture}`, 14, 42);
      doc.text(`Commande: ${facture.commande?.numero || 'N/A'}`, 14, 48);
      doc.text(`Boutique(s): ${boutiques.length ? boutiques.join(', ') : 'N/A'}`, 14, 54);
      doc.text(`Paiement: ${_this2.panierService.getMethodePaiementLibelle(facture.paiement?.methode || 'carte')}`, 196, 48, {
        align: 'right'
      });
      doc.text(`Date paiement: ${facture.paiement?.date ? new Date(facture.paiement.date).toLocaleDateString('fr-FR') : 'N/A'}`, 196, 54, {
        align: 'right'
      });
      doc.setDrawColor(223, 227, 233);
      doc.line(14, 59, 196, 59);
      const rows = produits.map(produit => [produit.produit?.nom || 'Produit', _this2.getBoutiqueNom(produit), String(produit.qtt), _this2.formatPricePdf(produit.prixUnitaire), _this2.formatPricePdf(produit.sousTotal)]);
      (0,jspdf_autotable__WEBPACK_IMPORTED_MODULE_3__["default"])(doc, {
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
      doc.text(_this2.formatPricePdf(facture.commande?.sousTotal || 0), 194, summaryY + 9, {
        align: 'right'
      });
      doc.text('Frais livraison:', 126, summaryY + 15);
      doc.text(_this2.formatPricePdf(fraisLivraison), 194, summaryY + 15, {
        align: 'right'
      });
      doc.setFont('helvetica', 'bold');
      doc.text('TOTAL:', 126, summaryY + 22);
      doc.text(_this2.formatPricePdf(facture.commande?.total || 0), 194, summaryY + 22, {
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
      doc.text(`Date estimee: ${facture.livraison?.dateEstimee ? new Date(facture.livraison.dateEstimee).toLocaleDateString('fr-FR') : 'N/A'}`, 18, infoY + 33);
      doc.text(`Methode: ${_this2.panierService.getMethodePaiementLibelle(facture.paiement?.methode || 'carte')}`, 112, infoY + 9);
      doc.text(`Date: ${facture.paiement?.date ? new Date(facture.paiement.date).toLocaleDateString('fr-FR') : 'N/A'}`, 112, infoY + 15);
      doc.text(`Montant: ${_this2.formatPricePdf(facture.paiement?.montant || 0)}`, 112, infoY + 21);
      doc.setFont('helvetica', 'italic');
      doc.text('Merci pour votre confiance.', 112, infoY + 31);
      return doc;
    })();
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
  goToOrders() {
    this.router.navigate(['/commandes']);
  }
  goToHome() {
    this.router.navigate(['/']);
  }
  continueShopping() {
    this.router.navigate(['/produits']);
  }
  printFacture() {
    if (!this.facture) return;
    const printContent = document.getElementById('facture-content');
    if (printContent) {
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        printWindow.document.write(`
          <html>
            <head>
              <title>Facture ${this.facture.numeroFacture}</title>
              <style>
                body { font-family: Arial, sans-serif; margin: 20px; }
                .header { text-align: center; margin-bottom: 30px; }
                .section { margin-bottom: 20px; }
                .product { margin-bottom: 10px; padding: 10px; border-bottom: 1px solid #ddd; }
                .total { font-weight: bold; font-size: 18px; }
                @media print { body { margin: 10px; } }
              </style>
            </head>
            <body>
              ${printContent.innerHTML}
            </body>
          </html>
        `);
        printWindow.document.close();
        printWindow.print();
      }
    }
  }
  static {
    this.ɵfac = function ConfirmationCommandeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ConfirmationCommandeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_panier_service__WEBPACK_IMPORTED_MODULE_7__.PanierService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_8__.NotificationService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: ConfirmationCommandeComponent,
      selectors: [["app-confirmation-commande"]],
      decls: 4,
      vars: 1,
      consts: [[1, "confirmation-container"], [1, "loading-state"], [1, "error-state"], [1, "spinner-border", "text-primary"], [1, "success-header"], [1, "success-icon"], [1, "ti", "ti-circle-check"], [1, "success-message"], [1, "order-number"], [1, "confirmation-content"], ["id", "facture-content", 1, "facture-section"], [1, "facture-header"], [1, "facture-meta"], [1, "facture-number"], [1, "facture-date"], [1, "facture-body"], [1, "section"], [1, "commande-info"], [1, "info-row"], [1, "products-list"], [1, "product-item"], [1, "summary"], [1, "summary-row"], [1, "summary-row", "total"], [1, "payment-info"], [1, "delivery-info"], [1, "address"], [1, "delivery-date"], [1, "actions-section"], [1, "actions-grid"], [1, "action-btn", "primary", 3, "click"], [1, "ti", "ti-download"], [1, "action-btn", "secondary", 3, "click"], [1, "ti", "ti-printer"], [1, "ti", "ti-list"], [1, "action-btn", "outline", 3, "click"], [1, "ti", "ti-shopping-cart"], [1, "info-section"], [1, "info-card"], [1, "ti", "ti-truck-delivery"], [1, "ti", "ti-headset"], [1, "ti", "ti-rotate-clockwise"], [1, "product-info"], [1, "product-name"], [1, "product-details"], [1, "product-total"], [1, "ti", "ti-alert-circle"], [1, "btn", "btn-primary", 3, "click"]],
      template: function ConfirmationCommandeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](1, ConfirmationCommandeComponent_Conditional_1_Template, 4, 0, "div", 1)(2, ConfirmationCommandeComponent_Conditional_2_Template, 129, 25)(3, ConfirmationCommandeComponent_Conditional_3_Template, 8, 0, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdomElementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx.loading ? 1 : ctx.commande && ctx.facture ? 2 : 3);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe],
      styles: [".confirmation-container[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: 2rem;\n}\n\n.success-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 3rem;\n  padding: 2rem;\n  background: linear-gradient(135deg, #28a745 0%, #20c997 100%);\n  border-radius: 12px;\n  color: white;\n}\n.success-header[_ngcontent-%COMP%]   .success-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  margin-bottom: 1rem;\n}\n.success-header[_ngcontent-%COMP%]   .success-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background: white;\n  color: #28a745;\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 3rem;\n}\n.success-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  font-weight: 700;\n  font-size: 2.5rem;\n}\n.success-header[_ngcontent-%COMP%]   .success-message[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  margin-bottom: 1.5rem;\n  opacity: 0.9;\n}\n.success-header[_ngcontent-%COMP%]   .order-number[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  display: inline-block;\n  font-size: 1.125rem;\n}\n.success-header[_ngcontent-%COMP%]   .order-number[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n.confirmation-content[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 2rem;\n}\n\n.facture-section[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n\n.facture-header[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  padding: 2rem;\n  border-bottom: 2px solid #dee2e6;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n@media (max-width: 768px) {\n  .facture-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n    gap: 1rem;\n  }\n}\n.facture-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #333;\n  font-size: 1.75rem;\n  font-weight: 700;\n}\n.facture-header[_ngcontent-%COMP%]   .facture-meta[_ngcontent-%COMP%] {\n  text-align: right;\n}\n@media (max-width: 768px) {\n  .facture-header[_ngcontent-%COMP%]   .facture-meta[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n.facture-header[_ngcontent-%COMP%]   .facture-number[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #007bff;\n  margin-bottom: 0.5rem;\n}\n.facture-header[_ngcontent-%COMP%]   .facture-date[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 0.875rem;\n}\n\n.facture-body[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.section[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #333;\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin-bottom: 1rem;\n  padding-bottom: 0.5rem;\n  border-bottom: 2px solid #007bff;\n  display: inline-block;\n}\n\n.commande-info[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%], \n.payment-info[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.75rem 0;\n  border-bottom: 1px solid #f1f3f4;\n}\n.commande-info[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]:last-child, \n.payment-info[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.commande-info[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child, \n.payment-info[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  color: #6c757d;\n  font-weight: 500;\n}\n.commande-info[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child, \n.payment-info[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  color: #333;\n  font-weight: 600;\n}\n\n.products-list[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n  background: #f8f9fa;\n  border-radius: 8px;\n  margin-bottom: 0.75rem;\n}\n.products-list[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.products-list[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #333;\n  margin-bottom: 0.25rem;\n}\n.products-list[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .product-details[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 0.875rem;\n}\n.products-list[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]   .product-total[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #333;\n  font-size: 1.125rem;\n}\n\n.summary[_ngcontent-%COMP%]   .summary-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.75rem 0;\n  border-bottom: 1px solid #f1f3f4;\n}\n.summary[_ngcontent-%COMP%]   .summary-row.total[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1.25rem;\n  color: #28a745;\n  border-top: 2px solid #dee2e6;\n  margin-top: 0.5rem;\n  padding-top: 1rem;\n}\n.summary[_ngcontent-%COMP%]   .summary-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  color: #6c757d;\n}\n.summary[_ngcontent-%COMP%]   .summary-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  color: #333;\n  font-weight: 600;\n}\n\n.delivery-info[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 2rem;\n}\n@media (max-width: 768px) {\n  .delivery-info[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.delivery-info[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  color: #333;\n}\n.delivery-info[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\n  font-weight: 600;\n}\n.delivery-info[_ngcontent-%COMP%]   .delivery-date[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.5rem;\n  color: #333;\n}\n.delivery-info[_ngcontent-%COMP%]   .delivery-date[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  color: #007bff;\n  font-weight: 600;\n  font-size: 1.125rem;\n}\n\n.actions-section[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 2rem;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n}\n.actions-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #333;\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin-bottom: 1.5rem;\n  text-align: center;\n}\n\n.actions-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1rem;\n}\n\n.action-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n  padding: 1rem 1.5rem;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  text-decoration: none;\n}\n.action-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.action-btn.primary[_ngcontent-%COMP%] {\n  background: #007bff;\n  color: white;\n}\n.action-btn.primary[_ngcontent-%COMP%]:hover {\n  background: #0056b3;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 8px rgba(0, 123, 255, 0.3);\n}\n.action-btn.secondary[_ngcontent-%COMP%] {\n  background: #6c757d;\n  color: white;\n}\n.action-btn.secondary[_ngcontent-%COMP%]:hover {\n  background: #545b62;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 8px rgba(108, 117, 125, 0.3);\n}\n.action-btn.outline[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #007bff;\n  border: 2px solid #007bff;\n}\n.action-btn.outline[_ngcontent-%COMP%]:hover {\n  background: #007bff;\n  color: white;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 8px rgba(0, 123, 255, 0.3);\n}\n\n.info-section[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n  margin-top: 2rem;\n}\n\n.info-card[_ngcontent-%COMP%] {\n  background: white;\n  padding: 1.5rem;\n  border-radius: 12px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  border-left: 4px solid #007bff;\n}\n.info-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  color: #333;\n  font-size: 1.125rem;\n  font-weight: 600;\n  margin-bottom: 1rem;\n}\n.info-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #007bff;\n  font-size: 1.25rem;\n}\n.info-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6c757d;\n  line-height: 1.6;\n  margin: 0;\n}\n\n.loading-state[_ngcontent-%COMP%], \n.error-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 4rem 2rem;\n}\n.loading-state[_ngcontent-%COMP%]   .spinner-border[_ngcontent-%COMP%], \n.error-state[_ngcontent-%COMP%]   .spinner-border[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  margin-bottom: 1rem;\n}\n.loading-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.error-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  color: #dc3545;\n  margin-bottom: 1rem;\n}\n.loading-state[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.error-state[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #333;\n  margin-bottom: 1rem;\n}\n.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.error-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6c757d;\n  margin-bottom: 2rem;\n}\n\n.btn[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 6px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background: #007bff;\n  color: white;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #0056b3;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVtby9wYWdlcy9jb25maXJtYXRpb24tY29tbWFuZGUvY29uZmlybWF0aW9uLWNvbW1hbmRlLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vV2ViJTIwYXZhbmNlL20xcDEzbWVhbi1DYW5keS1Sb21hbmNlL2Zyb250ZW5kL3NyYy9hcHAvZGVtby9wYWdlcy9jb25maXJtYXRpb24tY29tbWFuZGUvY29uZmlybWF0aW9uLWNvbW1hbmRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw2REFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0NGO0FEQ0U7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUNDSjtBRENJO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUNDTjtBREdFO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDREo7QURJRTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FDRko7QURLRTtFQUNFLG9DQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNISjtBREtJO0VBQ0UsZ0JBQUE7QUNITjs7QURRQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0FDTEY7O0FEUUE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0NBQUE7RUFDQSxnQkFBQTtBQ0xGOztBRFFBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ0xGO0FET0U7RUFSRjtJQVNJLHNCQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0VDSkY7QUFDRjtBRE1FO0VBQ0UsU0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDSko7QURPRTtFQUNFLGlCQUFBO0FDTEo7QURPSTtFQUhGO0lBSUksa0JBQUE7RUNKSjtBQUNGO0FET0U7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FDTEo7QURRRTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQ05KOztBRFVBO0VBQ0UsYUFBQTtBQ1BGOztBRFVBO0VBQ0UsbUJBQUE7QUNQRjtBRFNFO0VBQ0UsZ0JBQUE7QUNQSjtBRFVFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQkFBQTtBQ1JKOztBRGNFOztFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7QUNWSjtBRFlJOztFQUNFLG1CQUFBO0FDVE47QURZSTs7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNUTjtBRFlJOztFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQ1ROOztBRGVFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FDWko7QURjSTtFQUNFLE9BQUE7QUNaTjtBRGNNO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUNaUjtBRGVNO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FDYlI7QURpQkk7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ2ZOOztBRHFCRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7QUNsQko7QURvQkk7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ2xCTjtBRHFCSTtFQUNFLGNBQUE7QUNuQk47QURzQkk7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUNwQk47O0FEeUJBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtBQ3RCRjtBRHdCRTtFQUxGO0lBTUksMEJBQUE7RUNyQkY7QUFDRjtBRHdCSTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtBQ3RCTjtBRHdCTTtFQUNFLGdCQUFBO0FDdEJSO0FENEJJO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQzFCTjtBRDZCSTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDM0JOOztBRGdDQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esd0NBQUE7QUM3QkY7QUQrQkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUM3Qko7O0FEaUNBO0VBQ0UsYUFBQTtFQUNBLDJEQUFBO0VBQ0EsU0FBQTtBQzlCRjs7QURpQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUM5QkY7QURnQ0U7RUFDRSxrQkFBQTtBQzlCSjtBRGlDRTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQy9CSjtBRGlDSTtFQUNFLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSw0Q0FBQTtBQy9CTjtBRG1DRTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQ2pDSjtBRG1DSTtFQUNFLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSw4Q0FBQTtBQ2pDTjtBRHFDRTtFQUNFLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FDbkNKO0FEcUNJO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSw0Q0FBQTtBQ25DTjs7QUR3Q0E7RUFDRSxhQUFBO0VBQ0EsMkRBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNyQ0Y7O0FEd0NBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSx3Q0FBQTtFQUNBLDhCQUFBO0FDckNGO0FEdUNFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNyQ0o7QUR1Q0k7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUNyQ047QUR5Q0U7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FDdkNKOztBRDJDQTs7RUFFRSxrQkFBQTtFQUNBLGtCQUFBO0FDeENGO0FEMENFOztFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUN2Q0o7QUQwQ0U7O0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ3ZDSjtBRDBDRTs7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7QUN2Q0o7QUQwQ0U7O0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FDdkNKOztBRDJDQTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUN4Q0Y7QUQwQ0U7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUN4Q0o7QUQwQ0k7RUFDRSxtQkFBQTtBQ3hDTiIsInNvdXJjZXNDb250ZW50IjpbIi5jb25maXJtYXRpb24tY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nOiAycmVtO1xyXG59XHJcblxyXG4uc3VjY2Vzcy1oZWFkZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzI4YTc0NSAwJSwgIzIwYzk5NyAxMDAlKTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBcclxuICAuc3VjY2Vzcy1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBcclxuICAgIGkge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgY29sb3I6ICMyOGE3NDU7XHJcbiAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGgxIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5zdWNjZXNzLW1lc3NhZ2Uge1xyXG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICAgIG9wYWNpdHk6IDAuOTtcclxuICB9XHJcbiAgXHJcbiAgLm9yZGVyLW51bWJlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDEuNXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbiAgICBcclxuICAgIHN0cm9uZyB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY29uZmlybWF0aW9uLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ2FwOiAycmVtO1xyXG59XHJcblxyXG4uZmFjdHVyZS1zZWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmZhY3R1cmUtaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkZWUyZTY7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBnYXA6IDFyZW07XHJcbiAgfVxyXG4gIFxyXG4gIGgyIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcbiAgXHJcbiAgLmZhY3R1cmUtbWV0YSB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIFxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmZhY3R1cmUtbnVtYmVyIHtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzAwN2JmZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmZhY3R1cmUtZGF0ZSB7XHJcbiAgICBjb2xvcjogIzZjNzU3ZDtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgfVxyXG59XHJcblxyXG4uZmFjdHVyZS1ib2R5IHtcclxuICBwYWRkaW5nOiAycmVtO1xyXG59XHJcblxyXG4uc2VjdGlvbiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICBcclxuICAmOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbiAgXHJcbiAgaDMge1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwN2JmZjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbn1cclxuXHJcbi5jb21tYW5kZS1pbmZvLFxyXG4ucGF5bWVudC1pbmZvIHtcclxuICAuaW5mby1yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDAuNzVyZW0gMDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmM2Y0O1xyXG4gICAgXHJcbiAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzcGFuOmZpcnN0LWNoaWxkIHtcclxuICAgICAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNwYW46bGFzdC1jaGlsZCB7XHJcbiAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnByb2R1Y3RzLWxpc3Qge1xyXG4gIC5wcm9kdWN0LWl0ZW0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XHJcbiAgICBcclxuICAgIC5wcm9kdWN0LWluZm8ge1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgICBcclxuICAgICAgLnByb2R1Y3QtbmFtZSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAucHJvZHVjdC1kZXRhaWxzIHtcclxuICAgICAgICBjb2xvcjogIzZjNzU3ZDtcclxuICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5wcm9kdWN0LXRvdGFsIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uc3VtbWFyeSB7XHJcbiAgLnN1bW1hcnktcm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjNmNDtcclxuICAgIFxyXG4gICAgJi50b3RhbCB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgICAgY29sb3I6ICMyOGE3NDU7XHJcbiAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZGVlMmU2O1xyXG4gICAgICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzcGFuOmZpcnN0LWNoaWxkIHtcclxuICAgICAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNwYW46bGFzdC1jaGlsZCB7XHJcbiAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmRlbGl2ZXJ5LWluZm8ge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gIGdhcDogMnJlbTtcclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gIH1cclxuICBcclxuICAuYWRkcmVzcyB7XHJcbiAgICBkaXYge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICBcclxuICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuZGVsaXZlcnktZGF0ZSB7XHJcbiAgICBzdHJvbmcge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgICBjb2xvcjogIzMzMztcclxuICAgIH1cclxuICAgIFxyXG4gICAgZGl2IHtcclxuICAgICAgY29sb3I6ICMwMDdiZmY7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYWN0aW9ucy1zZWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBcclxuICBoMyB7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4uYWN0aW9ucy1ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xyXG4gIGdhcDogMXJlbTtcclxufVxyXG5cclxuLmFjdGlvbi1idG4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDAuNzVyZW07XHJcbiAgcGFkZGluZzogMXJlbSAxLjVyZW07XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBcclxuICBpIHtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICB9XHJcbiAgXHJcbiAgJi5wcmltYXJ5IHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDdiZmY7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMDA1NmIzO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDEyMywgMjU1LCAwLjMpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAmLnNlY29uZGFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNmM3NTdkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogIzU0NWI2MjtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgxMDgsIDExNywgMTI1LCAwLjMpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAmLm91dGxpbmUge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogIzAwN2JmZjtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDdiZmY7XHJcbiAgICBcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMDA3YmZmO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICAgICAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMTIzLCAyNTUsIDAuMyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uaW5mby1zZWN0aW9uIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xyXG4gIGdhcDogMS41cmVtO1xyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcbn1cclxuXHJcbi5pbmZvLWNhcmQge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDEuNXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjMDA3YmZmO1xyXG4gIFxyXG4gIGg0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAwLjc1cmVtO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBcclxuICAgIGkge1xyXG4gICAgICBjb2xvcjogIzAwN2JmZjtcclxuICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBwIHtcclxuICAgIGNvbG9yOiAjNmM3NTdkO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbn1cclxuXHJcbi5sb2FkaW5nLXN0YXRlLFxyXG4uZXJyb3Itc3RhdGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiA0cmVtIDJyZW07XHJcbiAgXHJcbiAgLnNwaW5uZXItYm9yZGVyIHtcclxuICAgIHdpZHRoOiAzcmVtO1xyXG4gICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcbiAgXHJcbiAgaSB7XHJcbiAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICBjb2xvcjogI2RjMzU0NTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgfVxyXG4gIFxyXG4gIGgyIHtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcbiAgXHJcbiAgcCB7XHJcbiAgICBjb2xvcjogIzZjNzU3ZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgfVxyXG59XHJcblxyXG4uYnRuIHtcclxuICBwYWRkaW5nOiAwLjc1cmVtIDEuNXJlbTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgXHJcbiAgJi5idG4tcHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA3YmZmO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogIzAwNTZiMztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLmNvbmZpcm1hdGlvbi1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDJyZW07XG59XG5cbi5zdWNjZXNzLWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgcGFkZGluZzogMnJlbTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzI4YTc0NSAwJSwgIzIwYzk5NyAxMDAlKTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnN1Y2Nlc3MtaGVhZGVyIC5zdWNjZXNzLWljb24ge1xuICBmb250LXNpemU6IDRyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4uc3VjY2Vzcy1oZWFkZXIgLnN1Y2Nlc3MtaWNvbiBpIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiAjMjhhNzQ1O1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzcmVtO1xufVxuLnN1Y2Nlc3MtaGVhZGVyIGgxIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAyLjVyZW07XG59XG4uc3VjY2Vzcy1oZWFkZXIgLnN1Y2Nlc3MtbWVzc2FnZSB7XG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgb3BhY2l0eTogMC45O1xufVxuLnN1Y2Nlc3MtaGVhZGVyIC5vcmRlci1udW1iZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMS41cmVtO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcbn1cbi5zdWNjZXNzLWhlYWRlciAub3JkZXItbnVtYmVyIHN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5jb25maXJtYXRpb24tY29udGVudCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMnJlbTtcbn1cblxuLmZhY3R1cmUtc2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZmFjdHVyZS1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICBwYWRkaW5nOiAycmVtO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2RlZTJlNjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5mYWN0dXJlLWhlYWRlciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZ2FwOiAxcmVtO1xuICB9XG59XG4uZmFjdHVyZS1oZWFkZXIgaDIge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjMzMzO1xuICBmb250LXNpemU6IDEuNzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4uZmFjdHVyZS1oZWFkZXIgLmZhY3R1cmUtbWV0YSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5mYWN0dXJlLWhlYWRlciAuZmFjdHVyZS1tZXRhIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cbi5mYWN0dXJlLWhlYWRlciAuZmFjdHVyZS1udW1iZXIge1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMDA3YmZmO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG4uZmFjdHVyZS1oZWFkZXIgLmZhY3R1cmUtZGF0ZSB7XG4gIGNvbG9yOiAjNmM3NTdkO1xuICBmb250LXNpemU6IDAuODc1cmVtO1xufVxuXG4uZmFjdHVyZS1ib2R5IHtcbiAgcGFkZGluZzogMnJlbTtcbn1cblxuLnNlY3Rpb24ge1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuLnNlY3Rpb246bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uc2VjdGlvbiBoMyB7XG4gIGNvbG9yOiAjMzMzO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDA3YmZmO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5jb21tYW5kZS1pbmZvIC5pbmZvLXJvdyxcbi5wYXltZW50LWluZm8gLmluZm8tcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAwLjc1cmVtIDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmM2Y0O1xufVxuLmNvbW1hbmRlLWluZm8gLmluZm8tcm93Omxhc3QtY2hpbGQsXG4ucGF5bWVudC1pbmZvIC5pbmZvLXJvdzpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cbi5jb21tYW5kZS1pbmZvIC5pbmZvLXJvdyBzcGFuOmZpcnN0LWNoaWxkLFxuLnBheW1lbnQtaW5mbyAuaW5mby1yb3cgc3BhbjpmaXJzdC1jaGlsZCB7XG4gIGNvbG9yOiAjNmM3NTdkO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmNvbW1hbmRlLWluZm8gLmluZm8tcm93IHNwYW46bGFzdC1jaGlsZCxcbi5wYXltZW50LWluZm8gLmluZm8tcm93IHNwYW46bGFzdC1jaGlsZCB7XG4gIGNvbG9yOiAjMzMzO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ucHJvZHVjdHMtbGlzdCAucHJvZHVjdC1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxcmVtO1xuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XG59XG4ucHJvZHVjdHMtbGlzdCAucHJvZHVjdC1pdGVtIC5wcm9kdWN0LWluZm8ge1xuICBmbGV4OiAxO1xufVxuLnByb2R1Y3RzLWxpc3QgLnByb2R1Y3QtaXRlbSAucHJvZHVjdC1pbmZvIC5wcm9kdWN0LW5hbWUge1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzMzMztcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcbn1cbi5wcm9kdWN0cy1saXN0IC5wcm9kdWN0LWl0ZW0gLnByb2R1Y3QtaW5mbyAucHJvZHVjdC1kZXRhaWxzIHtcbiAgY29sb3I6ICM2Yzc1N2Q7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG59XG4ucHJvZHVjdHMtbGlzdCAucHJvZHVjdC1pdGVtIC5wcm9kdWN0LXRvdGFsIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMzMzM7XG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XG59XG5cbi5zdW1tYXJ5IC5zdW1tYXJ5LXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMC43NXJlbSAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjNmNDtcbn1cbi5zdW1tYXJ5IC5zdW1tYXJ5LXJvdy50b3RhbCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgY29sb3I6ICMyOGE3NDU7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZGVlMmU2O1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xufVxuLnN1bW1hcnkgLnN1bW1hcnktcm93IHNwYW46Zmlyc3QtY2hpbGQge1xuICBjb2xvcjogIzZjNzU3ZDtcbn1cbi5zdW1tYXJ5IC5zdW1tYXJ5LXJvdyBzcGFuOmxhc3QtY2hpbGQge1xuICBjb2xvcjogIzMzMztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmRlbGl2ZXJ5LWluZm8ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdhcDogMnJlbTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuZGVsaXZlcnktaW5mbyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cbn1cbi5kZWxpdmVyeS1pbmZvIC5hZGRyZXNzIGRpdiB7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgY29sb3I6ICMzMzM7XG59XG4uZGVsaXZlcnktaW5mbyAuYWRkcmVzcyBkaXY6Zmlyc3QtY2hpbGQge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmRlbGl2ZXJ5LWluZm8gLmRlbGl2ZXJ5LWRhdGUgc3Ryb25nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgY29sb3I6ICMzMzM7XG59XG4uZGVsaXZlcnktaW5mbyAuZGVsaXZlcnktZGF0ZSBkaXYge1xuICBjb2xvcjogIzAwN2JmZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcbn1cblxuLmFjdGlvbnMtc2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAycmVtO1xuICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuLmFjdGlvbnMtc2VjdGlvbiBoMyB7XG4gIGNvbG9yOiAjMzMzO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYWN0aW9ucy1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XG4gIGdhcDogMXJlbTtcbn1cblxuLmFjdGlvbi1idG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAwLjc1cmVtO1xuICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmFjdGlvbi1idG4gaSB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbn1cbi5hY3Rpb24tYnRuLnByaW1hcnkge1xuICBiYWNrZ3JvdW5kOiAjMDA3YmZmO1xuICBjb2xvcjogd2hpdGU7XG59XG4uYWN0aW9uLWJ0bi5wcmltYXJ5OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzAwNTZiMztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAxMjMsIDI1NSwgMC4zKTtcbn1cbi5hY3Rpb24tYnRuLnNlY29uZGFyeSB7XG4gIGJhY2tncm91bmQ6ICM2Yzc1N2Q7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5hY3Rpb24tYnRuLnNlY29uZGFyeTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM1NDViNjI7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMTA4LCAxMTcsIDEyNSwgMC4zKTtcbn1cbi5hY3Rpb24tYnRuLm91dGxpbmUge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICMwMDdiZmY7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDdiZmY7XG59XG4uYWN0aW9uLWJ0bi5vdXRsaW5lOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzAwN2JmZjtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDEyMywgMjU1LCAwLjMpO1xufVxuXG4uaW5mby1zZWN0aW9uIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XG4gIGdhcDogMS41cmVtO1xuICBtYXJnaW4tdG9wOiAycmVtO1xufVxuXG4uaW5mby1jYXJkIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDEuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjMDA3YmZmO1xufVxuLmluZm8tY2FyZCBoNCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC43NXJlbTtcbiAgY29sb3I6ICMzMzM7XG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4uaW5mby1jYXJkIGg0IGkge1xuICBjb2xvcjogIzAwN2JmZjtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xufVxuLmluZm8tY2FyZCBwIHtcbiAgY29sb3I6ICM2Yzc1N2Q7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG4gIG1hcmdpbjogMDtcbn1cblxuLmxvYWRpbmctc3RhdGUsXG4uZXJyb3Itc3RhdGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDRyZW0gMnJlbTtcbn1cbi5sb2FkaW5nLXN0YXRlIC5zcGlubmVyLWJvcmRlcixcbi5lcnJvci1zdGF0ZSAuc3Bpbm5lci1ib3JkZXIge1xuICB3aWR0aDogM3JlbTtcbiAgaGVpZ2h0OiAzcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLmxvYWRpbmctc3RhdGUgaSxcbi5lcnJvci1zdGF0ZSBpIHtcbiAgZm9udC1zaXplOiA0cmVtO1xuICBjb2xvcjogI2RjMzU0NTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi5sb2FkaW5nLXN0YXRlIGgyLFxuLmVycm9yLXN0YXRlIGgyIHtcbiAgY29sb3I6ICMzMzM7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4ubG9hZGluZy1zdGF0ZSBwLFxuLmVycm9yLXN0YXRlIHAge1xuICBjb2xvcjogIzZjNzU3ZDtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuLmJ0biB7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMS41cmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuLmJ0bi5idG4tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQ6ICMwMDdiZmY7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5idG4uYnRuLXByaW1hcnk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMDA1NmIzO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_demo_pages_confirmation-commande_confirmation-commande_component_ts.js.map