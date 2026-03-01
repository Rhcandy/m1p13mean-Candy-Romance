"use strict";
(self["webpackChunkfree_version"] = self["webpackChunkfree_version"] || []).push([["src_app_demo_pages_boutique_commandes_boutique-commandes_component_ts"],{

/***/ 3333:
/*!*******************************************************************************!*\
  !*** ./src/app/demo/pages/boutique/commandes/boutique-commandes.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BoutiqueCommandesComponent: () => (/* binding */ BoutiqueCommandesComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_boutique_commande_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/boutique-commande.service */ 8807);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 3305);
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/notification.service */ 7473);








function BoutiqueCommandesComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BoutiqueCommandesComponent_div_10_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.error = null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.error, " ");
  }
}
function BoutiqueCommandesComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14)(1, "div", 15)(2, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Chargement...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}
function BoutiqueCommandesComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17)(1, "div", 18)(2, "select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function BoutiqueCommandesComponent_div_12_Template_select_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r1.filters.statut, $event) || (ctx_r1.filters.statut = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function BoutiqueCommandesComponent_div_12_Template_select_change_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.onFilter());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Tous les statuts");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "En attente");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Confirm\u00E9e");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "En pr\u00E9paration");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Exp\u00E9di\u00E9e");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Livr\u00E9e");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Annul\u00E9e");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 18)(18, "select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function BoutiqueCommandesComponent_div_12_Template_select_ngModelChange_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r1.filters.isPaye, $event) || (ctx_r1.filters.isPaye = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function BoutiqueCommandesComponent_div_12_Template_select_change_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.onFilter());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Tous les paiements");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Pay\u00E9es");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Non pay\u00E9es");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 18)(26, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function BoutiqueCommandesComponent_div_12_Template_input_ngModelChange_26_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r1.filters.dateDebut, $event) || (ctx_r1.filters.dateDebut = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function BoutiqueCommandesComponent_div_12_Template_input_change_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.onFilter());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 18)(28, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function BoutiqueCommandesComponent_div_12_Template_input_ngModelChange_28_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r1.filters.dateFin, $event) || (ctx_r1.filters.dateFin = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function BoutiqueCommandesComponent_div_12_Template_input_change_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.onFilter());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.filters.statut);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.filters.isPaye);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngValue", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngValue", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.filters.dateDebut);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.filters.dateFin);
  }
}
function BoutiqueCommandesComponent_div_13_tr_21_small_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const produit_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", produit_r5.qtt, "x ", produit_r5.produit == null ? null : produit_r5.produit.nom, " ");
  }
}
function BoutiqueCommandesComponent_div_13_tr_21_small_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const commande_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Part centre (1%): -", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 1, ctx_r1.getPartCentre(commande_r6), "1.0-0"), " Ar ");
  }
}
function BoutiqueCommandesComponent_div_13_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td")(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "small", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td")(7, "div", 38)(8, "div", 39)(9, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 42)(12, "h6", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "small", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "td")(17, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, BoutiqueCommandesComponent_div_13_tr_21_small_18_Template, 2, 2, "small", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "td")(20, "small", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](22, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, BoutiqueCommandesComponent_div_13_tr_21_small_23_Template, 3, 4, "small", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "strong", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](26, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "small", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](29, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](30, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](31, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "td")(33, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "td")(36, "small", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](38, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "td", 49)(40, "div", 50)(41, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BoutiqueCommandesComponent_div_13_tr_21_Template_button_click_41_listener() {
      const commande_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.getCommandeDetails(commande_r6._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](42, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const commande_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](commande_r6.numeroCommande);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Facture: ", ctx_r1.getNumeroFacture(commande_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](commande_r6.userId == null ? null : commande_r6.userId.nom);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](commande_r6.userId == null ? null : commande_r6.userId.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.getCommandeProduits(commande_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" Mes articles (", commande_r6.quantiteBoutique, "): ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](22, 17, ctx_r1.getTotalBoutique(commande_r6), "1.0-0"), " Ar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.getPartCentre(commande_r6) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Net boutique: ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](26, 20, ctx_r1.getNetBoutique(commande_r6), "1.0-0"), " Ar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate3"](" Facture client: ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](29, 23, ctx_r1.getFactureSousTotal(commande_r6), "1.0-0"), " + ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](30, 26, ctx_r1.getFactureFraisLivraison(commande_r6), "1.0-0"), " = ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](31, 29, ctx_r1.getFactureTotal(commande_r6), "1.0-0"), " Ar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinterpolate1"]("badge bg-", ctx_r1.getStatusColor(commande_r6.statut)));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.getStatusLabel(commande_r6.statut), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](38, 32, commande_r6.createdAt, "dd/MM/yyyy"));
  }
}
function BoutiqueCommandesComponent_div_13_div_22_li_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 56)(1, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BoutiqueCommandesComponent_div_13_div_22_li_7_Template_button_click_1_listener() {
      const page_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.onPageChange(page_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const page_r9 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", page_r9 === ctx_r1.pagination.page);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](page_r9);
  }
}
function BoutiqueCommandesComponent_div_13_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 54)(1, "div", 2)(2, "nav")(3, "ul", 55)(4, "li", 56)(5, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BoutiqueCommandesComponent_div_13_div_22_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.onPageChange(ctx_r1.pagination.page - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Pr\u00E9c\u00E9dent");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, BoutiqueCommandesComponent_div_13_div_22_li_7_Template, 3, 3, "li", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "li", 56)(9, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BoutiqueCommandesComponent_div_13_div_22_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.onPageChange(ctx_r1.pagination.page + 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Suivant");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("disabled", ctx_r1.pagination.page <= 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.getPagesArray());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("disabled", ctx_r1.pagination.page >= ctx_r1.pagination.totalPages);
  }
}
function BoutiqueCommandesComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 30)(1, "div", 31)(2, "div", 32)(3, "table", 33)(4, "thead")(5, "tr")(6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Commande");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Client");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Produits");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Statut");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, BoutiqueCommandesComponent_div_13_tr_21_Template, 43, 35, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, BoutiqueCommandesComponent_div_13_div_22_Template, 11, 5, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.commandes);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.pagination.totalPages > 1);
  }
}
class BoutiqueCommandesComponent {
  constructor(boutiqueCommandeService, router, cdr, notificationService) {
    this.boutiqueCommandeService = boutiqueCommandeService;
    this.router = router;
    this.cdr = cdr;
    this.notificationService = notificationService;
    this.commandes = [];
    this.loading = false;
    this.error = null;
    this.pagination = {
      total: 0,
      page: 1,
      limit: 10,
      totalPages: 0
    };
    this.filters = {
      statut: '',
      dateDebut: '',
      dateFin: '',
      isPaye: undefined
    };
  }
  ngOnInit() {
    this.loadCommandes();
  }
  loadCommandes() {
    this.loading = true;
    this.error = null;
    const params = {
      page: this.pagination.page,
      limit: this.pagination.limit,
      ...Object.fromEntries(Object.entries(this.filters).filter(([_, v]) => v !== '' && v !== undefined))
    };
    this.boutiqueCommandeService.getMyBoutiqueCommandes(params).subscribe({
      next: response => {
        if (response.success) {
          this.commandes = response.data;
          this.pagination = response.pagination;
          this.loading = false;
          this.cdr.detectChanges();
        } else {
          this.error = response.message;
          this.notificationService.error('Erreur', 'Erreur lors du chargement de la boutique');
          this.loading = false;
          this.cdr.detectChanges();
        }
      },
      error: () => {
        this.error = 'Erreur lors du chargement des commandes';
        this.notificationService.error('Erreur', 'Erreur lors du chargement des commandes');
        this.cdr.detectChanges();
      },
      complete: () => {
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }
  onPageChange(page) {
    this.pagination.page = page;
    this.loadCommandes();
  }
  onFilter() {
    this.pagination.page = 1;
    this.loadCommandes();
  }
  goToStats() {
    this.router.navigate(['/default']);
  }
  getCommandeDetails(id) {
    if (!id) {
      this.notificationService.warning('Commande introuvable');
      return;
    }
    this.router.navigate(['/commande', id], {
      queryParams: {
        scope: 'boutique'
      }
    });
  }
  getStatusColor(statut) {
    const colors = {
      en_attente: 'warning',
      confirmee: 'info',
      preparation: 'primary',
      expedie: 'secondary',
      livre: 'success',
      annule: 'danger'
    };
    return colors[statut] || 'secondary';
  }
  getStatusLabel(statut) {
    const labels = {
      en_attente: 'En attente',
      confirmee: 'Confirmee',
      preparation: 'En preparation',
      expedie: 'Expediee',
      livre: 'Livree',
      annule: 'Annulee'
    };
    return labels[statut] || statut;
  }
  getPagesArray() {
    return Array.from({
      length: this.pagination.totalPages
    }, (_, i) => i + 1);
  }
  getCommandeProduits(commande) {
    if (Array.isArray(commande.produitsBoutique) && commande.produitsBoutique.length > 0) {
      return commande.produitsBoutique;
    }
    return commande.produitsachete || [];
  }
  getNumeroFacture(commande) {
    if (commande.facture?.numeroFacture) {
      return commande.facture.numeroFacture;
    }
    return commande.numeroCommande ? `FAC-${commande.numeroCommande}` : 'N/A';
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
  getTotalBoutique(commande) {
    return Number(commande.totalBoutique ?? commande.facture?.totalBoutique ?? 0);
  }
  getPartCentre(commande) {
    return Number(commande.partCentre ?? commande.facture?.partCentre ?? 0);
  }
  getNetBoutique(commande) {
    const net = Number(commande.totalBoutiqueNet ?? commande.facture?.totalBoutiqueNet);
    if (Number.isFinite(net)) {
      return net;
    }
    return this.getTotalBoutique(commande) - this.getPartCentre(commande);
  }
  static {
    this.ɵfac = function BoutiqueCommandesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BoutiqueCommandesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_boutique_commande_service__WEBPACK_IMPORTED_MODULE_5__.BoutiqueCommandeService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_7__.NotificationService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: BoutiqueCommandesComponent,
      selectors: [["app-boutique-commandes"]],
      decls: 14,
      vars: 4,
      consts: [[1, "container-fluid", "boutique-commandes"], [1, "row"], [1, "col-12"], [1, "page-title-box", "d-sm-flex", "align-items-center", "justify-content-between"], [1, "mb-sm-0"], [1, "page-title-right"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "ri-bar-chart-line", "me-2"], ["class", "alert alert-danger alert-dismissible fade show", "role", "alert", 4, "ngIf"], ["class", "text-center py-5", 4, "ngIf"], ["class", "row mb-3", 4, "ngIf"], ["class", "card", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show"], ["type", "button", 1, "btn-close", 3, "click"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "row", "mb-3"], [1, "col-md-3"], [1, "form-select", 3, "ngModelChange", "change", "ngModel"], ["value", ""], ["value", "en_attente"], ["value", "confirmee"], ["value", "preparation"], ["value", "expedie"], ["value", "livre"], ["value", "annule"], [3, "ngValue"], ["type", "date", "placeholder", "Date de d\u00E9but...", 1, "form-control", 3, "ngModelChange", "change", "ngModel"], ["type", "date", "placeholder", "Date de fin...", 1, "form-control", 3, "ngModelChange", "change", "ngModel"], [1, "card"], [1, "card-body"], [1, "table-responsive"], [1, "table", "table-nowrap", "table-centered", "mb-0"], [1, "text-center"], [4, "ngFor", "ngForOf"], ["class", "row mt-3", 4, "ngIf"], [1, "text-muted", "d-block"], [1, "d-flex", "align-items-center"], [1, "flex-shrink-0"], [1, "avatar-xs", "bg-light", "rounded", "p-1"], [1, "ri-user-line"], [1, "flex-grow-1", "ms-2"], [1, "mb-0"], [1, "text-muted"], [1, "d-flex", "flex-column"], ["class", "mb-1", 4, "ngFor", "ngForOf"], ["class", "text-muted d-block", 4, "ngIf"], [1, "d-block"], [1, "text-center", "action-cell"], ["role", "group", "aria-label", "Actions commande", 1, "action-buttons"], ["type", "button", "title", "Voir details", "aria-label", "Voir details", 1, "action-btn", "action-btn--view", 3, "click"], [1, "ti", "ti-eye"], [1, "mb-1"], [1, "row", "mt-3"], [1, "pagination", "justify-content-center", "mb-0"], [1, "page-item"], [1, "page-link", 3, "click"], ["class", "page-item", 3, "active", 4, "ngFor", "ngForOf"]],
      template: function BoutiqueCommandesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Commandes de ma Boutique");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5)(7, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BoutiqueCommandesComponent_Template_button_click_7_listener() {
            return ctx.goToStats();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "i", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Statistiques ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, BoutiqueCommandesComponent_div_10_Template, 3, 1, "div", 8)(11, BoutiqueCommandesComponent_div_11_Template, 4, 0, "div", 9)(12, BoutiqueCommandesComponent_div_12_Template, 29, 6, "div", 10)(13, BoutiqueCommandesComponent_div_13_Template, 23, 2, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.error);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe],
      styles: [".boutique-commandes[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.boutique-commandes[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.boutique-commandes[_ngcontent-%COMP%]   .filters-section[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  padding: 1rem;\n  border-radius: 0.375rem;\n  margin-bottom: 1.5rem;\n}\n.boutique-commandes[_ngcontent-%COMP%]   .commandes-table[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  padding: 0.25rem 0.5rem;\n  border-radius: 0.25rem;\n}\n.boutique-commandes[_ngcontent-%COMP%]   .commandes-table[_ngcontent-%COMP%]   .commande-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-right: 0.25rem;\n}\n.boutique-commandes[_ngcontent-%COMP%]   .action-cell[_ngcontent-%COMP%] {\n  min-width: 70px;\n}\n.boutique-commandes[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.boutique-commandes[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n  border: 1px solid transparent;\n  border-radius: 10px;\n  height: 34px;\n  min-width: 34px;\n  padding: 0;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;\n}\n.boutique-commandes[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1;\n}\n.boutique-commandes[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 10px rgba(15, 23, 42, 0.12);\n}\n.boutique-commandes[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid rgba(37, 99, 235, 0.35);\n  outline-offset: 2px;\n}\n.boutique-commandes[_ngcontent-%COMP%]   .action-btn--view[_ngcontent-%COMP%] {\n  background: #fff7ed;\n  border-color: #fed7aa;\n  color: #c2410c;\n}\n.boutique-commandes[_ngcontent-%COMP%]   .action-btn--view[_ngcontent-%COMP%]:hover {\n  background: #c2410c;\n  border-color: #c2410c;\n  color: #fff;\n}\n.boutique-commandes[_ngcontent-%COMP%]   .pagination-container[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.boutique-commandes[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 200px;\n}\n.boutique-commandes[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  color: #721c24;\n  padding: 1rem;\n  border-radius: 0.375rem;\n  margin-bottom: 1rem;\n}\n\n@media (max-width: 576px) {\n  .boutique-commandes[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n    height: 30px;\n    min-width: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVtby9wYWdlcy9ib3V0aXF1ZS9jb21tYW5kZXMvYm91dGlxdWUtY29tbWFuZGVzLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vV2ViJTIwYXZhbmNlL20xcDEzbWVhbi1DYW5keS1Sb21hbmNlL2Zyb250ZW5kL3NyYy9hcHAvZGVtby9wYWdlcy9ib3V0aXF1ZS9jb21tYW5kZXMvYm91dGlxdWUtY29tbWFuZGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFOztFQUVFLHNCQUFBO0FDREo7QURJRTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7QUNGSjtBRE1JO0VBQ0UsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FDSk47QURRTTtFQUNFLHFCQUFBO0FDTlI7QURXRTtFQUNFLGVBQUE7QUNUSjtBRFlFO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsUUFBQTtBQ1ZKO0FEYUU7RUFDRSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMEhBQ0U7QUNaTjtBRGtCSTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDaEJOO0FEbUJJO0VBQ0UsMkJBQUE7RUFDQSw2Q0FBQTtBQ2pCTjtBRG9CSTtFQUNFLDBDQUFBO0VBQ0EsbUJBQUE7QUNsQk47QURzQkU7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQ3BCSjtBRHNCSTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FDcEJOO0FEd0JFO0VBQ0UsZ0JBQUE7QUN0Qko7QUR5QkU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDdkJKO0FEMEJFO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUN4Qko7O0FENEJBO0VBRUk7SUFDRSxZQUFBO0lBQ0EsZUFBQTtFQzFCSjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gU3R5bGVzIGZvciBCb3V0aXF1ZUNvbW1hbmRlc0NvbXBvbmVudFxyXG4uYm91dGlxdWUtY29tbWFuZGVzIHtcclxuICAudGFibGUgdGgsXHJcbiAgLnRhYmxlIHRkIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfVxyXG5cclxuICAuZmlsdGVycy1zZWN0aW9uIHtcclxuICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgfVxyXG5cclxuICAuY29tbWFuZGVzLXRhYmxlIHtcclxuICAgIC5zdGF0dXMtYmFkZ2Uge1xyXG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuY29tbWFuZGUtYWN0aW9ucyB7XHJcbiAgICAgIC5idG4ge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMC4yNXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmFjdGlvbi1jZWxsIHtcclxuICAgIG1pbi13aWR0aDogNzBweDtcclxuICB9XHJcblxyXG4gIC5hY3Rpb24tYnV0dG9ucyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGdhcDogOHB4O1xyXG4gIH1cclxuXHJcbiAgLmFjdGlvbi1idG4ge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAzNHB4O1xyXG4gICAgbWluLXdpZHRoOiAzNHB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjpcclxuICAgICAgYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UsXHJcbiAgICAgIGNvbG9yIDAuMnMgZWFzZSxcclxuICAgICAgYm9yZGVyLWNvbG9yIDAuMnMgZWFzZSxcclxuICAgICAgdHJhbnNmb3JtIDAuMnMgZWFzZSxcclxuICAgICAgYm94LXNoYWRvdyAwLjJzIGVhc2U7XHJcblxyXG4gICAgaSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICAgICAgYm94LXNoYWRvdzogMCA0cHggMTBweCByZ2JhKDE1LCAyMywgNDIsIDAuMTIpO1xyXG4gICAgfVxyXG5cclxuICAgICY6Zm9jdXMtdmlzaWJsZSB7XHJcbiAgICAgIG91dGxpbmU6IDJweCBzb2xpZCByZ2JhKDM3LCA5OSwgMjM1LCAwLjM1KTtcclxuICAgICAgb3V0bGluZS1vZmZzZXQ6IDJweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5hY3Rpb24tYnRuLS12aWV3IHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY3ZWQ7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZWQ3YWE7XHJcbiAgICBjb2xvcjogI2MyNDEwYztcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogI2MyNDEwYztcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjYzI0MTBjO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wYWdpbmF0aW9uLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgLmxvYWRpbmctc3Bpbm5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgfVxyXG5cclxuICAuZXJyb3ItbWVzc2FnZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjhkN2RhO1xyXG4gICAgY29sb3I6ICM3MjFjMjQ7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgLmJvdXRpcXVlLWNvbW1hbmRlcyB7XHJcbiAgICAuYWN0aW9uLWJ0biB7XHJcbiAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgbWluLXdpZHRoOiAzMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIuYm91dGlxdWUtY29tbWFuZGVzIC50YWJsZSB0aCxcbi5ib3V0aXF1ZS1jb21tYW5kZXMgLnRhYmxlIHRkIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5ib3V0aXF1ZS1jb21tYW5kZXMgLmZpbHRlcnMtc2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG4uYm91dGlxdWUtY29tbWFuZGVzIC5jb21tYW5kZXMtdGFibGUgLnN0YXR1cy1iYWRnZSB7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xufVxuLmJvdXRpcXVlLWNvbW1hbmRlcyAuY29tbWFuZGVzLXRhYmxlIC5jb21tYW5kZS1hY3Rpb25zIC5idG4ge1xuICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XG59XG4uYm91dGlxdWUtY29tbWFuZGVzIC5hY3Rpb24tY2VsbCB7XG4gIG1pbi13aWR0aDogNzBweDtcbn1cbi5ib3V0aXF1ZS1jb21tYW5kZXMgLmFjdGlvbi1idXR0b25zIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDhweDtcbn1cbi5ib3V0aXF1ZS1jb21tYW5kZXMgLmFjdGlvbi1idG4ge1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgaGVpZ2h0OiAzNHB4O1xuICBtaW4td2lkdGg6IDM0cHg7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UsIGNvbG9yIDAuMnMgZWFzZSwgYm9yZGVyLWNvbG9yIDAuMnMgZWFzZSwgdHJhbnNmb3JtIDAuMnMgZWFzZSwgYm94LXNoYWRvdyAwLjJzIGVhc2U7XG59XG4uYm91dGlxdWUtY29tbWFuZGVzIC5hY3Rpb24tYnRuIGkge1xuICBmb250LXNpemU6IDFyZW07XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuLmJvdXRpcXVlLWNvbW1hbmRlcyAuYWN0aW9uLWJ0bjpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgYm94LXNoYWRvdzogMCA0cHggMTBweCByZ2JhKDE1LCAyMywgNDIsIDAuMTIpO1xufVxuLmJvdXRpcXVlLWNvbW1hbmRlcyAuYWN0aW9uLWJ0bjpmb2N1cy12aXNpYmxlIHtcbiAgb3V0bGluZTogMnB4IHNvbGlkIHJnYmEoMzcsIDk5LCAyMzUsIDAuMzUpO1xuICBvdXRsaW5lLW9mZnNldDogMnB4O1xufVxuLmJvdXRpcXVlLWNvbW1hbmRlcyAuYWN0aW9uLWJ0bi0tdmlldyB7XG4gIGJhY2tncm91bmQ6ICNmZmY3ZWQ7XG4gIGJvcmRlci1jb2xvcjogI2ZlZDdhYTtcbiAgY29sb3I6ICNjMjQxMGM7XG59XG4uYm91dGlxdWUtY29tbWFuZGVzIC5hY3Rpb24tYnRuLS12aWV3OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2MyNDEwYztcbiAgYm9yZGVyLWNvbG9yOiAjYzI0MTBjO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5ib3V0aXF1ZS1jb21tYW5kZXMgLnBhZ2luYXRpb24tY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cbi5ib3V0aXF1ZS1jb21tYW5kZXMgLmxvYWRpbmctc3Bpbm5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbn1cbi5ib3V0aXF1ZS1jb21tYW5kZXMgLmVycm9yLW1lc3NhZ2Uge1xuICBiYWNrZ3JvdW5kOiAjZjhkN2RhO1xuICBjb2xvcjogIzcyMWMyNDtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuYm91dGlxdWUtY29tbWFuZGVzIC5hY3Rpb24tYnRuIHtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgbWluLXdpZHRoOiAzMHB4O1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_demo_pages_boutique_commandes_boutique-commandes_component_ts.js.map