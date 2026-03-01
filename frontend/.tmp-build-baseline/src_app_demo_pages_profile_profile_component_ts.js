"use strict";
(self["webpackChunkfree_version"] = self["webpackChunkfree_version"] || []).push([["src_app_demo_pages_profile_profile_component_ts"],{

/***/ 6909:
/*!*********************************************************!*\
  !*** ./src/app/demo/pages/profile/profile.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileComponent: () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 6264);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/user.service */ 9885);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/auth.service */ 4796);
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/notification.service */ 7473);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 6124);










function ProfileComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ProfileComponent_Conditional_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.startEdit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Modifier ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Chargement du profil...");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function ProfileComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.error);
  }
}
function ProfileComponent_Conditional_10_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Homme ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_Conditional_10_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Femme ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_Conditional_10_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.profile.sexe || "\u2014");
  }
}
function ProfileComponent_Conditional_10_Conditional_41_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const phone_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](phone_r3);
  }
}
function ProfileComponent_Conditional_10_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterCreate"](1, ProfileComponent_Conditional_10_Conditional_41_For_2_Template, 2, 1, "span", 35, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeater"](ctx_r1.profile.numtel);
  }
}
function ProfileComponent_Conditional_10_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_Conditional_10_Conditional_55_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", ctx_r1.profile.adresse == null ? null : ctx_r1.profile.adresse.latitude, ", ", ctx_r1.profile.adresse == null ? null : ctx_r1.profile.adresse.longitude, " ");
  }
}
function ProfileComponent_Conditional_10_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](3, ProfileComponent_Conditional_10_Conditional_55_Conditional_3_Template, 3, 2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"]((ctx_r1.profile.adresse == null ? null : ctx_r1.profile.adresse.nomEndroit) || "Lieu");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"]((ctx_r1.profile.adresse == null ? null : ctx_r1.profile.adresse.latitude) != null || (ctx_r1.profile.adresse == null ? null : ctx_r1.profile.adresse.longitude) != null ? 3 : -1);
  }
}
function ProfileComponent_Conditional_10_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Photo de profil");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 17)(6, "div", 18)(7, "table", 19)(8, "tbody", 20)(9, "tr")(10, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "Nom ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "tr")(16, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "tr")(22, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](23, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24, "Role ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "td", 23)(26, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "tr")(29, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](30, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31, "Genre ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](33, ProfileComponent_Conditional_10_Conditional_33_Template, 3, 0, "span")(34, ProfileComponent_Conditional_10_Conditional_34_Template, 3, 0, "span")(35, ProfileComponent_Conditional_10_Conditional_35_Template, 2, 1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "tr")(37, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](38, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](39, "Phone(s) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](41, ProfileComponent_Conditional_10_Conditional_41_Template, 3, 0, "div", 29)(42, ProfileComponent_Conditional_10_Conditional_42_Template, 2, 0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "tr")(44, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](45, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](46, " Date de naissance ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](49, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "tr")(51, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](52, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](53, "Address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](55, ProfileComponent_Conditional_10_Conditional_55_Template, 4, 2, "div")(56, ProfileComponent_Conditional_10_Conditional_56_Template, 2, 0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx_r1.profileImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.profile.nom);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.profile.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.roleLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx_r1.profile.sexe === "M" ? 33 : ctx_r1.profile.sexe === "F" ? 34 : 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"]((ctx_r1.profile.numtel == null ? null : ctx_r1.profile.numtel.length) ? 41 : 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.profile.dtnaissance ? _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](49, 8, ctx_r1.profile.dtnaissance, "longDate") : "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"]((ctx_r1.profile.adresse == null ? null : ctx_r1.profile.adresse.nomEndroit) || (ctx_r1.profile.adresse == null ? null : ctx_r1.profile.adresse.latitude) != null || (ctx_r1.profile.adresse == null ? null : ctx_r1.profile.adresse.longitude) != null ? 55 : 56);
  }
}
function ProfileComponent_Conditional_11_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Nom requis");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_Conditional_11_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Email valide requis");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_Conditional_11_For_41_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ProfileComponent_Conditional_11_For_41_Conditional_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const $index_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.removePhone($index_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_Conditional_11_For_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](2, ProfileComponent_Conditional_11_For_41_Conditional_2_Template, 2, 0, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const $index_r6 = ctx.$index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControlName", $index_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx_r1.numtelArray.length > 1 ? 2 : -1);
  }
}
function ProfileComponent_Conditional_11_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.error);
  }
}
function ProfileComponent_Conditional_11_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "span", 75);
  }
}
function ProfileComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "form", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function ProfileComponent_Conditional_11_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.saveProfile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 0)(2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 40)(5, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, " Changer la photo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function ProfileComponent_Conditional_11_Template_input_change_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onProfilePictureChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "JPEG, PNG, GIF ou WebP \u2014 max 5 Mo");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 17)(12, "div", 44)(13, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "Nom ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](18, ProfileComponent_Conditional_11_Conditional_18_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 44)(20, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](24, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](25, ProfileComponent_Conditional_11_Conditional_25_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 44)(27, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28, "Sexe");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "select", 52)(30, "option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31, "Masculin");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33, "F\u00E9minin");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35, "Autre");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "div", 44)(37, "label", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38, "Num\u00E9ros de t\u00E9l\u00E9phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterCreate"](40, ProfileComponent_Conditional_11_For_41_Template, 3, 2, "div", 58, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeaterTrackByIndex"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ProfileComponent_Conditional_11_Template_button_click_42_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.addPhone());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](43, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](44, " Ajouter un num\u00E9ro ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "div", 44)(46, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](47, "Date de naissance");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](48, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](49, "hr", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "h6", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](51, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](52, "Adresse ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](53, "div", 44)(54, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](55, "Nom du lieu");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](56, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](57, "div", 0)(58, "div", 67)(59, "label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](60, "Latitude");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](61, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](62, "div", 67)(63, "label", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](64, "Longitude");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](65, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](66, ProfileComponent_Conditional_11_Conditional_66_Template, 2, 1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](67, "div", 73)(68, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](69, ProfileComponent_Conditional_11_Conditional_69_Template, 1, 0, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](70, " Enregistrer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](71, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ProfileComponent_Conditional_11_Template_button_click_71_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.cancelEdit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](72, " Annuler ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r1.profileForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx_r1.profileImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](((tmp_3_0 = ctx_r1.profileForm.get("nom")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r1.profileForm.get("nom")) == null ? null : tmp_3_0.touched) ? 18 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](((tmp_4_0 = ctx_r1.profileForm.get("email")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r1.profileForm.get("email")) == null ? null : tmp_4_0.touched) ? 25 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrepeater"](ctx_r1.numtelArray.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx_r1.error ? 66 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r1.saving);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx_r1.saving ? 69 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r1.saving);
  }
}
class ProfileComponent {
  constructor() {
    this.userService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService);
    this.authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService);
    this.notificationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_notification_service__WEBPACK_IMPORTED_MODULE_7__.NotificationService);
    this.fb = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder);
    this.cdr = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef);
    this.profile = null;
    this.loading = true;
    this.editMode = false;
    this.saving = false;
    this.error = '';
    this.profilePictureFile = null;
    this.defaultAvatar = 'assets/images/user/user.png';
  }
  ngOnInit() {
    this.initForm();
    this.loadProfile();
  }
  initForm() {
    this.profileForm = this.fb.group({
      nom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]],
      sexe: ['M'],
      numtel: this.fb.array([this.fb.control('')]),
      dtnaissance: [''],
      nomEndroit: [''],
      latitude: [null],
      longitude: [null]
    });
  }
  get numtelArray() {
    return this.profileForm.get('numtel');
  }
  addPhone() {
    this.numtelArray.push(this.fb.control(''));
  }
  removePhone(index) {
    if (this.numtelArray.length > 1) {
      this.numtelArray.removeAt(index);
    }
  }
  loadProfile() {
    this.loading = true;
    this.error = '';
    // Timeout de 3 secondes
    const timeout = setTimeout(() => {
      this.loading = false;
      this.error = 'Le chargement prend trop de temps. Veuillez réessayer.';
    }, 1000);
    this.userService.getProfile().subscribe({
      next: res => {
        clearTimeout(timeout);
        if (res.success && res.data) {
          this.profile = res.data;
          this.patchFormFromProfile(res.data);
        }
        this.loading = false;
        Promise.resolve().then(() => {
          this.cdr.detectChanges();
        });
      },
      error: err => {
        clearTimeout(timeout);
        this.error = err.response?.data?.message || err.message || 'Impossible de charger le profil';
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }
  patchFormFromProfile(p) {
    const numtel = p.numtel && p.numtel.length ? p.numtel : [''];
    this.profileForm.patchValue({
      nom: p.nom ?? '',
      email: p.email ?? '',
      sexe: p.sexe ?? 'M',
      dtnaissance: p.dtnaissance ? typeof p.dtnaissance === 'string' ? p.dtnaissance.split('T')[0] : new Date(p.dtnaissance).toISOString().split('T')[0] : '',
      nomEndroit: p.adresse?.nomEndroit ?? '',
      latitude: p.adresse?.latitude ?? null,
      longitude: p.adresse?.longitude ?? null
    });
    this.profileForm.setControl('numtel', this.fb.array(numtel.map(t => this.fb.control(t))));
  }
  get roleLabel() {
    if (!this.profile?.role) return 'User';
    const r = typeof this.profile.role === 'string' ? this.profile.role : this.profile.role.nom;
    const map = {
      user: 'Client',
      admin_boutique: 'Shop Owner',
      admin_center: 'Royal Center Admin',
      admin_centre: 'Royal Center Owner',
      super_admin: 'Project Admin'
    };
    return map[r] ?? r;
  }
  get profileImageUrl() {
    if (this.profilePictureFile) {
      return URL.createObjectURL(this.profilePictureFile);
    }
    if (this.profile?.pdppath) {
      return this.profile.pdppath;
    }
    return this.defaultAvatar;
  }
  startEdit() {
    this.editMode = true;
    this.profilePictureFile = null;
  }
  cancelEdit() {
    this.editMode = false;
    this.profilePictureFile = null;
    if (this.profile) {
      this.patchFormFromProfile(this.profile);
    }
  }
  onProfilePictureChange(event) {
    const input = event.target;
    if (input.files?.length) {
      this.profilePictureFile = input.files[0];
    }
  }
  saveProfile() {
    if (this.profileForm.invalid) {
      this.profileForm.markAllAsTouched();
      return;
    }
    const v = this.profileForm.value;
    const numtel = v.numtel.filter(t => t && String(t).trim() !== '');
    if (numtel.length === 0) {
      this.notificationService.error('Erreur', 'Au moins un numéro de téléphone est requis.');
      return;
    }
    this.saving = true;
    this.error = '';
    const payload = {
      nom: v.nom,
      email: v.email,
      sexe: v.sexe,
      numtel,
      dtnaissance: v.dtnaissance || undefined,
      adresse: v.nomEndroit || v.latitude != null || v.longitude != null ? {
        nomEndroit: v.nomEndroit || undefined,
        latitude: v.latitude != null && v.latitude !== '' ? Number(v.latitude) : undefined,
        longitude: v.longitude != null && v.longitude !== '' ? Number(v.longitude) : undefined
      } : undefined
    };
    if (this.profilePictureFile) {
      const formData = new FormData();
      formData.append('nom', payload.nom);
      formData.append('email', payload.email);
      formData.append('sexe', payload.sexe ?? 'M');
      formData.append('numtel', JSON.stringify(payload.numtel));
      if (payload.dtnaissance) formData.append('dtnaissance', payload.dtnaissance);
      if (payload.adresse) formData.append('adresse', JSON.stringify(payload.adresse));
      formData.append('profilePicture', this.profilePictureFile);
      this.userService.updateProfileWithPicture(formData).subscribe({
        next: res => {
          if (res.success && res.data) {
            this.profile = res.data;
            this.authService.updateStoredUser?.({
              ...res.data,
              sexe: res.data.sexe === 'M' || res.data.sexe === 'F' ? res.data.sexe : 'M'
            });
            this.editMode = false;
            this.profilePictureFile = null;
            this.notificationService.success('Profil', 'Profil et photo mis à jour.');
          }
          this.saving = false;
          Promise.resolve().then(() => {
            this.cdr.detectChanges();
          });
        },
        error: err => {
          this.error = err.response?.data?.message || err.message || 'Erreur lors de la mise à jour';
          this.saving = false;
          this.cdr.detectChanges();
        }
      });
    } else {
      this.userService.updateProfile(payload).subscribe({
        next: res => {
          if (res.success && res.data) {
            this.profile = res.data;
            this.authService.updateStoredUser?.({
              ...res.data,
              sexe: res.data.sexe === 'M' || res.data.sexe === 'F' ? res.data.sexe : 'M'
            });
            this.editMode = false;
            this.notificationService.success('Profil', 'Profil mis à jour.');
          }
          this.saving = false;
          Promise.resolve().then(() => {
            this.cdr.detectChanges();
          });
        },
        error: err => {
          this.error = err.response?.data?.message || err.message || 'Erreur lors de la mise à jour';
          this.saving = false;
          this.cdr.detectChanges();
        }
      });
    }
  }
  static {
    this.ɵfac = function ProfileComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ProfileComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: ProfileComponent,
      selectors: [["app-profile"]],
      decls: 12,
      vars: 2,
      consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between"], [1, "mb-0"], ["type", "button", 1, "btn", "btn-primary"], [1, "card-body"], [1, "text-center", "py-5"], [1, "alert", "alert-danger"], [3, "formGroup"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "ti", "ti-edit"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "mt-3", "text-muted"], [1, "col-md-4", "text-center", "mb-4", "mb-md-0"], ["alt", "Photo de profil", 1, "rounded-circle", "border", "shadow-sm", "mb-4", 2, "width", "180px", "height", "180px", "object-fit", "cover", 3, "src"], [1, "text-muted", "small"], [1, "col-md-8"], [1, "table-responsive"], [1, "table", "table-borderless"], [2, "border-left-width", "18px"], [1, "text-muted", "fw-normal", "ps-0"], [1, "ti", "ti-user", "me-2"], [1, "ps-4"], [1, "ti", "ti-mail", "me-2"], [1, "ti", "ti-user-circle", "me-2"], [1, "badge", "bg-primary-subtle", "text-primary"], [1, "ti", "ti-gender-bigender"], [1, "ti", "ti-phone", "me-2"], [1, "d-flex", "flex-wrap", "gap-2"], [1, "text-muted"], [1, "ti", "ti-calendar", "me-2"], [1, "ti", "ti-map-pin", "me-2"], [1, "ti", "ti-mars", "ms-1", "text-primary"], [1, "ti", "ti-venus", "ms-1", "text-danger"], [1, "badge", "bg-secondary-subtle", "text-secondary"], [1, "fw-medium"], [1, "text-muted", "small", "mt-1"], [1, "ti", "ti-map-2", "me-1"], [3, "ngSubmit", "formGroup"], [1, "mb-3"], ["for", "profilePicture", 1, "btn", "btn-outline-primary", "btn-sm"], [1, "ti", "ti-photo-up", "me-1"], ["id", "profilePicture", "type", "file", "accept", "image/jpeg,image/png,image/gif,image/webp", 1, "d-none", 3, "change"], [1, "mb-4"], ["for", "nom", 1, "form-label", "fw-medium"], [1, "text-danger"], ["id", "nom", "type", "text", "formControlName", "nom", "placeholder", "Nom complet", 1, "form-control", "form-control-lg"], [1, "invalid-feedback", "d-block", "mt-2"], ["for", "email", 1, "form-label", "fw-medium"], ["id", "email", "type", "email", "formControlName", "email", "placeholder", "Email", 1, "form-control", "form-control-lg"], ["for", "sexe", 1, "form-label", "fw-medium"], ["id", "sexe", "formControlName", "sexe", 1, "form-select", "form-select-lg"], ["value", "M"], ["value", "F"], ["value", "Autre"], [1, "form-label", "fw-medium"], ["formArrayName", "numtel", 1, "mb-3"], [1, "input-group", "mb-3"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "ti", "ti-plus", "me-1"], ["for", "dtnaissance", 1, "form-label", "fw-medium"], ["id", "dtnaissance", "type", "date", "formControlName", "dtnaissance", 1, "form-control"], [1, "my-4"], [1, "text-muted", "mb-4", "fw-medium"], ["for", "nomEndroit", 1, "form-label", "fw-medium"], ["id", "nomEndroit", "type", "text", "formControlName", "nomEndroit", "placeholder", "Ex: 12 rue Example, Paris", 1, "form-control"], [1, "col-md-6", "mb-4"], ["for", "latitude", 1, "form-label", "fw-medium"], ["id", "latitude", "type", "number", "step", "any", "formControlName", "latitude", "placeholder", "Latitude", 1, "form-control"], ["for", "longitude", 1, "form-label", "fw-medium"], ["id", "longitude", "type", "number", "step", "any", "formControlName", "longitude", "placeholder", "Longitude", 1, "form-control"], [1, "alert", "alert-danger", "mt-4"], [1, "d-flex", "gap-3", "mt-4", "pt-3", "border-top"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", "px-2", 3, "disabled"], [1, "spinner-border", "spinner-border-sm", "me-2"], ["type", "button", 1, "btn", "btn-outline-secondary", "btn-sm", "px-2", 3, "click", "disabled"], ["type", "tel", "placeholder", "Num\u00E9ro de t\u00E9l\u00E9phone", 1, "form-control", 3, "formControlName"], ["type", "button", "title", "Supprimer", 1, "btn", "btn-outline-danger"], ["type", "button", "title", "Supprimer", 1, "btn", "btn-outline-danger", 3, "click"], [1, "ti", "ti-trash"]],
      template: function ProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Mon profil");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](6, ProfileComponent_Conditional_6_Template, 3, 0, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditionalCreate"](8, ProfileComponent_Conditional_8_Template, 4, 0, "div", 7)(9, ProfileComponent_Conditional_9_Template, 2, 1, "div", 8)(10, ProfileComponent_Conditional_10_Template, 57, 11, "div", 0)(11, ProfileComponent_Conditional_11_Template, 73, 8, "form", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](!ctx.editMode && ctx.profile && !ctx.loading ? 6 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵconditional"](ctx.loading ? 8 : ctx.error ? 9 : ctx.profile && !ctx.editMode ? 10 : ctx.profile && ctx.editMode ? 11 : -1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormArrayName, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  background: transparent;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVtby9wYWdlcy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi9XZWIlMjBhdmFuY2UvbTFwMTNtZWFuLUNhbmR5LVJvbWFuY2UvZnJvbnRlbmQvc3JjL2FwcC9kZW1vL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0VBQ0EsNENBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcbn1cclxuXHJcbi50YWJsZSB0aCB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY2FyZC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wOCk7XG59XG5cbi50YWJsZSB0aCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_demo_pages_profile_profile_component_ts.js.map