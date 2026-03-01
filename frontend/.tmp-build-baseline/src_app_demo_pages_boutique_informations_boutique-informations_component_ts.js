"use strict";
(self["webpackChunkfree_version"] = self["webpackChunkfree_version"] || []).push([["src_app_demo_pages_boutique_informations_boutique-informations_component_ts"],{

/***/ 311:
/*!*************************************************************************************!*\
  !*** ./src/app/demo/pages/boutique/informations/boutique-informations.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BoutiqueInformationsComponent: () => (/* binding */ BoutiqueInformationsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_boutique_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/boutique.service */ 700);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 3305);
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/notification.service */ 7473);








const _c0 = a0 => ({
  "is-invalid": a0
});
function BoutiqueInformationsComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BoutiqueInformationsComponent_div_6_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.success = null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.success, " ");
  }
}
function BoutiqueInformationsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12)(1, "div", 13)(2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Chargement...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}
function BoutiqueInformationsComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 15)(3, "div", 16)(4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h5", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Vous n'avez pas encore de boutique");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " Cr??ez votre boutique pour commencer ?? vendre vos produits sur la plateforme, chercher votre Box. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BoutiqueInformationsComponent_div_8_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.goToBoxesList());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " Voir les boxes disponibles ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
}
function BoutiqueInformationsComponent_div_9_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 58)(1, "div", 59)(2, "div", 60)(3, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Numero Box");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 59)(9, "div", 60)(10, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "\u00E9age");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 59)(16, "div", 60)(17, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Superficie");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const box_r5 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](box_r5.numRef);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](box_r5.etage);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", box_r5.Superficie, " m\u00B2");
  }
}
function BoutiqueInformationsComponent_div_9_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 58)(1, "div", 59)(2, "div", 60)(3, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "D\u00E9but de location");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 59)(10, "div", 60)(11, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Fin de location");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 59)(18, "div", 60)(19, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Cr\u00E9\u00E9 le");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](24, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](8, 3, ctx_r1.boutique.contratlocation.dateDebutLocation, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](16, 6, ctx_r1.boutique.contratlocation.dateFinLocation, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](24, 9, ctx_r1.boutique.createdAt, "dd/MM/yyyy"));
  }
}
function BoutiqueInformationsComponent_div_9_div_12_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const jour_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r1.boutique.contratlocation.jLocation[jour_r6.key] ? "badge-jour-ouvert" : "badge-jour-ferme");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", jour_r6.label, " ");
  }
}
function BoutiqueInformationsComponent_div_9_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Jours d'ouverture");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, BoutiqueInformationsComponent_div_9_div_12_span_5_Template, 2, 2, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.joursOuverture);
  }
}
function BoutiqueInformationsComponent_div_9_div_26_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Le nom est requis");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function BoutiqueInformationsComponent_div_9_div_26_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Le nom ne doit pas d\u00E9passer 100 caract\u00E8res");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function BoutiqueInformationsComponent_div_9_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, BoutiqueInformationsComponent_div_9_div_26_div_1_Template, 2, 0, "div", 31)(2, BoutiqueInformationsComponent_div_9_div_26_div_2_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.nom == null ? null : ctx_r1.nom.errors == null ? null : ctx_r1.nom.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.nom == null ? null : ctx_r1.nom.errors == null ? null : ctx_r1.nom.errors["maxlength"]);
  }
}
function BoutiqueInformationsComponent_div_9_span_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Enregistrer les modifications ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function BoutiqueInformationsComponent_div_9_span_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Enregistrement... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function BoutiqueInformationsComponent_div_9_span_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r1.boutique.isActive ? "ri-pause-circle-line" : "ri-play-circle-line");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.boutique.isActive ? "D\u00E9sactiver la boutique" : "Activer la boutique", " ");
  }
}
function BoutiqueInformationsComponent_div_9_span_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Traitement... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function BoutiqueInformationsComponent_div_9_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 50);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r1.boutique.logo, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", ctx_r1.boutique.nom);
  }
}
function BoutiqueInformationsComponent_div_9_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function BoutiqueInformationsComponent_div_9_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Votre boutique est en attente de la premiere activation par admin centre. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function BoutiqueInformationsComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 22)(1, "div", 23)(2, "div", 24)(3, "div", 25)(4, "h5", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Localisation dans le centre ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, BoutiqueInformationsComponent_div_9_div_8_Template, 22, 3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "hr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, BoutiqueInformationsComponent_div_9_div_10_Template, 25, 12, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "hr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, BoutiqueInformationsComponent_div_9_div_12_Template, 6, 1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 15)(14, "div", 25)(15, "h5", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Modifier les informations ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 28)(19, "form", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function BoutiqueInformationsComponent_div_9_Template_form_ngSubmit_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 2)(21, "div", 34)(22, "div", 35)(23, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Nom de la boutique");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, BoutiqueInformationsComponent_div_9_div_26_Template, 3, 2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 39)(28, "div", 3)(29, "div", 40)(30, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, BoutiqueInformationsComponent_div_9_span_31_Template, 3, 0, "span", 42)(32, BoutiqueInformationsComponent_div_9_span_32_Template, 3, 0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BoutiqueInformationsComponent_div_9_Template_button_click_33_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.toggleBoutiqueStatus());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, BoutiqueInformationsComponent_div_9_span_34_Template, 3, 2, "span", 42)(35, BoutiqueInformationsComponent_div_9_span_35_Template, 3, 0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BoutiqueInformationsComponent_div_9_Template_button_click_36_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.goToChangeBox());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, " Changer de box ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BoutiqueInformationsComponent_div_9_Template_button_click_39_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.quitterCentre());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, " Quitter le centre ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 48)(43, "div", 15)(44, "div", 25)(45, "h5", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Logo de la boutique");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditionalCreate"](48, BoutiqueInformationsComponent_div_9_Conditional_48_Template, 1, 2, "img", 50)(49, BoutiqueInformationsComponent_div_9_Conditional_49_Template, 2, 0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 35)(51, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](52, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditionalCreate"](54, BoutiqueInformationsComponent_div_9_Conditional_54_Template, 2, 0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "input", 55, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function BoutiqueInformationsComponent_div_9_Template_input_change_55_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.onLogoUpload($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BoutiqueInformationsComponent_div_9_Template_button_click_57_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const logoInput_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](56);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](logoInput_r7.click());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](58, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, " Changer le logo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.boutique.contratlocation == null ? null : ctx_r1.boutique.contratlocation.boxes == null ? null : ctx_r1.boutique.contratlocation.boxes[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.boutique.contratlocation);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.boutique.contratlocation == null ? null : ctx_r1.boutique.contratlocation.jLocation);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r1.boutiqueForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](21, _c0, (ctx_r1.nom == null ? null : ctx_r1.nom.invalid) && (ctx_r1.nom == null ? null : ctx_r1.nom.touched)));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r1.nom == null ? null : ctx_r1.nom.invalid) && (ctx_r1.nom == null ? null : ctx_r1.nom.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r1.saving || ctx_r1.boutiqueForm.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.saving);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.saving);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r1.boutique.isActive ? "btn-danger" : "btn-success")("disabled", ctx_r1.saving);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.saving);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.saving);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r1.saving);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r1.saving);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](ctx_r1.boutique.logo ? 48 : 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r1.boutique.isActive ? "bg-success" : "bg-danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx_r1.boutique.isActive ? "ri-checkbox-circle-line" : "ri-close-circle-line");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.boutique.isActive ? "Active" : "Inactive", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](ctx_r1.boutique.isPendingFirstActivation ? 54 : -1);
  }
}
class BoutiqueInformationsComponent {
  constructor(fb, boutiqueService, router, cdr, notificationService) {
    this.fb = fb;
    this.boutiqueService = boutiqueService;
    this.router = router;
    this.cdr = cdr;
    this.notificationService = notificationService;
    this.boutique = null;
    this.loading = false;
    this.saving = false;
    this.error = null;
    this.success = null;
    this.joursOuverture = [{
      key: 'lundi',
      label: 'Lun'
    }, {
      key: 'mardi',
      label: 'Mar'
    }, {
      key: 'mercredi',
      label: 'Mer'
    }, {
      key: 'jeudi',
      label: 'Jeu'
    }, {
      key: 'vendredi',
      label: 'Ven'
    }, {
      key: 'samedi',
      label: 'Sam'
    }, {
      key: 'dimanche',
      label: 'Dim'
    }];
    this.boutiqueForm = this.fb.group({
      nom: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.maxLength(100)]]
    });
  }
  ngOnInit() {
    this.loadBoutique();
  }
  loadBoutique() {
    this.loading = true;
    this.boutiqueService.getMyBoutique().subscribe({
      next: response => {
        if (response.success) {
          this.boutique = response.data;
          this.boutiqueForm.patchValue({
            nom: response.data.nom
          });
        } else {
          this.notificationService.info('Info', 'Aucune boutique trouvÃ©e pour votre compte. Veuillez en crÃ©er une.');
        }
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: err => {
        console.error('Erreur boutique:', err);
        if (err.status !== 404) {
          this.notificationService.error('Erreur', 'Erreur lors du chargement de la boutique');
        }
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }
  get nom() {
    return this.boutiqueForm.get('nom');
  }
  onSubmit() {
    if (this.boutiqueForm.invalid || !this.boutique) return;
    this.saving = true;
    const updateData = {
      nom: this.boutiqueForm.value.nom
    };
    this.boutiqueService.updateMyBoutique(updateData).subscribe({
      next: response => {
        if (response.success) {
          this.boutique = response.data;
          this.notificationService.success('Informations mises a jour avec succes');
          this.boutiqueForm.patchValue({
            nom: response.data.nom
          });
        } else {
          this.notificationService.error('Erreur', response.message);
        }
        this.saving = false;
        this.cdr.detectChanges();
      },
      error: err => {
        this.notificationService.error('Erreur', 'Erreur lors de la mise Ã  jour');
        console.error('Erreur mise Ã  jour:', err);
        this.saving = false;
        this.cdr.detectChanges();
      }
    });
  }
  onLogoUpload(event) {
    const file = event.target.files[0];
    if (file && this.boutique) {
      this.saving = true;
      this.boutiqueService.uploadLogo(this.boutique._id, file).subscribe({
        next: response => {
          if (response.success) {
            const payload = response.data;
            this.boutique = payload?.boutique || payload;
            this.notificationService.success('Logo mis a jour avec succes');
          } else {
            this.notificationService.error('Erreur', response.message);
          }
          this.saving = false;
          this.cdr.detectChanges();
        },
        error: err => {
          this.notificationService.error('Erreur', 'Erreur lors du tÃ©lÃ©chargement du logo');
          console.error('Erreur logo:', err);
          this.saving = false;
          this.cdr.detectChanges();
        }
      });
    }
  }
  toggleBoutiqueStatus() {
    if (!this.boutique) return;
    if (!this.boutique.isActive && this.boutique.isPendingFirstActivation) {
      this.notificationService.info('Activation en attente', 'La premiere activation doit etre faite par admin centre.');
      return;
    }
    this.saving = true;
    const action = this.boutique.isActive ? this.boutiqueService.deactivateMyBoutique() : this.boutiqueService.activateMyBoutique();
    action.subscribe({
      next: response => {
        if (response.success) {
          this.boutique = response.data;
          this.notificationService.success(`Boutique ${response.data.isActive ? 'activÃ©e' : 'dÃ©sactivÃ©e'} avec succÃ¨s`);
        } else {
          this.notificationService.error('Erreur', response.message);
        }
        this.saving = false;
        this.cdr.detectChanges();
      },
      error: err => {
        this.notificationService.error('Erreur', 'Erreur lors du changement de statut');
        console.error('Erreur statut:', err);
        this.saving = false;
        this.cdr.detectChanges();
      }
    });
  }
  goToChangeBox() {
    this.router.navigate(['/boutique/boxes'], {
      queryParams: {
        mode: 'change'
      }
    });
  }
  goToBoxesList() {
    this.router.navigate(['/boutique/boxes']);
  }
  quitterCentre() {
    if (!this.boutique) return;
    const confirmed = confirm('Quitter le centre supprimera la boutique et liberera la box. ' + 'Condition: tous les produits doivent etre supprimes avant. Continuer ?');
    if (!confirmed) return;
    this.saving = true;
    this.boutiqueService.quitterCentre().subscribe({
      next: response => {
        if (response.success) {
          this.notificationService.success('Centre quitte avec succes');
          this.boutique = null;
          this.router.navigate(['/boutique/boxes']);
        } else {
          this.notificationService.error('Erreur', response.message);
        }
      },
      error: err => {
        const message = err?.error?.message || 'Impossible de quitter le centre.';
        this.notificationService.error('Erreur', message);
      },
      complete: () => {
        this.saving = false;
        this.cdr.detectChanges();
      }
    });
  }
  static {
    this.ɵfac = function BoutiqueInformationsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BoutiqueInformationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_boutique_service__WEBPACK_IMPORTED_MODULE_5__.BoutiqueService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_7__.NotificationService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: BoutiqueInformationsComponent,
      selectors: [["app-boutique-informations"]],
      decls: 10,
      vars: 4,
      consts: [["logoInput", ""], [1, "container-fluid"], [1, "row"], [1, "col-12"], [1, "page-title-box", "d-sm-flex", "align-items-center", "justify-content-between"], [1, "mb-sm-0"], ["class", "alert alert-success alert-dismissible fade show", "role", "alert", 4, "ngIf"], ["class", "text-center py-5", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["class", "row g-4", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show"], ["type", "button", 1, "btn-close", 3, "click"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "card"], [1, "card-body", "text-center", "py-5"], [1, "mb-4"], [1, "ri-store-2-line", "text-primary", 2, "font-size", "4rem"], [1, "card-title", "mb-3"], [1, "text-muted", "mb-4"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "row", "g-4"], [1, "col-xl-8"], [1, "card", "mb-4"], [1, "card-header"], [1, "card-title", "mb-0"], [1, "ri-map-pin-line", "me-2", "text-primary"], [1, "card-body"], ["class", "row g-3", 4, "ngIf"], [1, "my-3"], [4, "ngIf"], [1, "ri-edit-line", "me-2", "text-primary"], [3, "ngSubmit", "formGroup"], [1, "col-md-6"], [1, "mb-3"], ["for", "nom", 1, "form-label"], ["type", "text", "id", "nom", "formControlName", "nom", "placeholder", "Entrez le nom de votre boutique", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], [1, "row", "mt-3"], [1, "d-flex", "justify-content-between", "align-items-center", "flex-wrap", "gap-2"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "d-flex align-items-center", 4, "ngIf"], ["type", "button", 1, "btn", 3, "click", "ngClass", "disabled"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click", "disabled"], [1, "ri-shape-line", "me-2"], ["type", "button", 1, "btn", "btn-outline-danger", 3, "click", "disabled"], [1, "ri-logout-box-r-line", "me-2"], [1, "col-xl-4"], [1, "card-body", "text-center"], [1, "boutique-logo", "mb-3", 3, "src", "alt"], [1, "boutique-logo-placeholder", "mb-3"], [1, "badge", "fs-6", "px-3", "py-2", 3, "ngClass"], [1, "me-1"], [1, "alert", "alert-warning", "text-start", "py-2", "px-3", "small", "mb-3"], ["type", "file", "accept", "image/*", 1, "d-none", 3, "change"], ["type", "button", 1, "btn", "btn-soft-primary", "w-100", 3, "click"], [1, "ri-image-line", "me-2"], [1, "row", "g-3"], [1, "col-sm-4"], [1, "info-block"], [1, "info-label"], [1, "ri-hashtag", "me-1"], [1, "info-value", "fw-semibold", "text-primary", "fs-5"], [1, "ri-building-line", "me-1"], [1, "info-value", "fw-semibold"], [1, "ri-ruler-line", "me-1"], [1, "ri-calendar-line", "me-1"], [1, "info-value"], [1, "ri-calendar-check-line", "me-1"], [1, "ri-time-line", "me-1"], [1, "info-label", "d-block", "mb-2"], [1, "ri-door-open-line", "me-1"], [1, "d-flex", "flex-wrap", "gap-2"], ["class", "badge rounded-pill px-3 py-2", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "badge", "rounded-pill", "px-3", "py-2", 3, "ngClass"], [1, "invalid-feedback"], [1, "d-flex", "align-items-center"], [1, "ri-save-line", "me-2"], ["role", "status", 1, "spinner-border", "spinner-border-sm", "me-2"], [1, "me-2", 3, "ngClass"], [1, "ti", "ti-building-store"]],
      template: function BoutiqueInformationsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "h4", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Informations de ma Boutique");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, BoutiqueInformationsComponent_div_6_Template, 3, 1, "div", 6)(7, BoutiqueInformationsComponent_div_7_Template, 4, 0, "div", 7)(8, BoutiqueInformationsComponent_div_8_Template, 12, 0, "div", 8)(9, BoutiqueInformationsComponent_div_9_Template, 60, 23, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.success);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.boutique);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.boutique);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe],
      styles: [".boutique-logo[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  object-fit: cover;\n  border-radius: 12px;\n  border: 2px solid #e9ecef;\n}\n\n.boutique-logo-placeholder[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  border-radius: 12px;\n  background: #f0f4ff;\n  border: 2px dashed #c5d0e6;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 1rem;\n}\n.boutique-logo-placeholder[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: #7b93c4;\n}\n\n.info-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding: 12px 16px;\n  background: #f8f9fa;\n  border-radius: 10px;\n  height: 100%;\n}\n.info-block[_ngcontent-%COMP%]   .info-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6c757d;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.info-block[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: #212529;\n}\n\n.badge-jour-ouvert[_ngcontent-%COMP%] {\n  background-color: #d1fae5;\n  color: #065f46;\n  font-size: 0.8rem;\n  font-weight: 600;\n  border: 1px solid #6ee7b7;\n}\n\n.badge-jour-ferme[_ngcontent-%COMP%] {\n  background-color: #f1f3f5;\n  color: #adb5bd;\n  font-size: 0.8rem;\n  font-weight: 500;\n  border: 1px solid #dee2e6;\n  text-decoration: line-through;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVtby9wYWdlcy9ib3V0aXF1ZS9pbmZvcm1hdGlvbnMvYm91dGlxdWUtaW5mb3JtYXRpb25zLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vV2ViJTIwYXZhbmNlL20xcDEzbWVhbi1DYW5keS1Sb21hbmNlL2Zyb250ZW5kL3NyYy9hcHAvZGVtby9wYWdlcy9ib3V0aXF1ZS9pbmZvcm1hdGlvbnMvYm91dGlxdWUtaW5mb3JtYXRpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQ0U7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNBRjtBREVFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0FDQUo7QURHRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQ0RKOztBREtBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FDRkY7O0FES0E7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtBQ0ZGIiwic291cmNlc0NvbnRlbnQiOlsiLmJvdXRpcXVlLWxvZ28ge1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2U5ZWNlZjtcclxufVxyXG5cclxuLmJvdXRpcXVlLWxvZ28tcGxhY2Vob2xkZXIge1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgYmFja2dyb3VuZDogI2YwZjRmZjtcclxuICBib3JkZXI6IDJweCBkYXNoZWQgI2M1ZDBlNjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwIGF1dG8gMXJlbTtcclxuXHJcbiAgaSB7XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICBjb2xvcjogIzdiOTNjNDtcclxuICB9XHJcbn1cclxuXHJcbi5pbmZvLWJsb2NrIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiA0cHg7XHJcbiAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gIC5pbmZvLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgIGNvbG9yOiAjNmM3NTdkO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xyXG4gIH1cclxuXHJcbiAgLmluZm8tdmFsdWUge1xyXG4gICAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG4gICAgY29sb3I6ICMyMTI1Mjk7XHJcbiAgfVxyXG59XHJcblxyXG4uYmFkZ2Utam91ci1vdXZlcnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkMWZhZTU7XHJcbiAgY29sb3I6ICMwNjVmNDY7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjNmVlN2I3O1xyXG59XHJcblxyXG4uYmFkZ2Utam91ci1mZXJtZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjNmNTtcclxuICBjb2xvcjogI2FkYjViZDtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbn1cclxuIiwiLmJvdXRpcXVlLWxvZ28ge1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZTllY2VmO1xufVxuXG4uYm91dGlxdWUtbG9nby1wbGFjZWhvbGRlciB7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYmFja2dyb3VuZDogI2YwZjRmZjtcbiAgYm9yZGVyOiAycHggZGFzaGVkICNjNWQwZTY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDAgYXV0byAxcmVtO1xufVxuLmJvdXRpcXVlLWxvZ28tcGxhY2Vob2xkZXIgaSB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgY29sb3I6ICM3YjkzYzQ7XG59XG5cbi5pbmZvLWJsb2NrIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA0cHg7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmluZm8tYmxvY2sgLmluZm8tbGFiZWwge1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGNvbG9yOiAjNmM3NTdkO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xufVxuLmluZm8tYmxvY2sgLmluZm8tdmFsdWUge1xuICBmb250LXNpemU6IDAuOTVyZW07XG4gIGNvbG9yOiAjMjEyNTI5O1xufVxuXG4uYmFkZ2Utam91ci1vdXZlcnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFmYWU1O1xuICBjb2xvcjogIzA2NWY0NjtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM2ZWU3Yjc7XG59XG5cbi5iYWRnZS1qb3VyLWZlcm1lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjNmNTtcbiAgY29sb3I6ICNhZGI1YmQ7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_demo_pages_boutique_informations_boutique-informations_component_ts.js.map