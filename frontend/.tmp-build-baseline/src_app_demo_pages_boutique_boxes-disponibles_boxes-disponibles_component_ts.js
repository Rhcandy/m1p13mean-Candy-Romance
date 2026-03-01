"use strict";
(self["webpackChunkfree_version"] = self["webpackChunkfree_version"] || []).push([["src_app_demo_pages_boutique_boxes-disponibles_boxes-disponibles_component_ts"],{

/***/ 4864:
/*!**************************************************************************************!*\
  !*** ./src/app/demo/pages/boutique/boxes-disponibles/boxes-disponibles.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BoxesDisponiblesComponent: () => (/* binding */ BoxesDisponiblesComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_boutique_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/boutique.service */ 700);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/auth.service */ 4796);
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/notification.service */ 7473);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 3305);








function BoxesDisponiblesComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BoxesDisponiblesComponent_Conditional_7_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.goToBoutiqueInfo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Voir ma boutique ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function BoxesDisponiblesComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Chargement des boxes...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function BoxesDisponiblesComponent_Conditional_9_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Aucune box disponible");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Revenez plus tard ou contactez l'administration du centre.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function BoxesDisponiblesComponent_Conditional_9_Conditional_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "article", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BoxesDisponiblesComponent_Conditional_9_Conditional_8_For_2_Template_article_click_0_listener() {
      const box_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.selectBox(box_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 35)(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Libre");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 37)(7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const box_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("selected", ctx_r1.isSelectedBox(box_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Box ", box_r5.numRef);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Etage: ", box_r5.etage);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Surface: ", box_r5.Superficie, " m2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Type: ", (box_r5.typeBoxId == null ? null : box_r5.typeBoxId.nom) || "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Centre: ", (box_r5.centreId == null ? null : box_r5.centreId.nom) || "N/A");
  }
}
function BoxesDisponiblesComponent_Conditional_9_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterCreate"](1, BoxesDisponiblesComponent_Conditional_9_Conditional_8_For_2_Template, 15, 7, "article", 33, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcomponentInstance"]().trackByBoxId, true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeater"](ctx_r1.boxes);
  }
}
function BoxesDisponiblesComponent_Conditional_9_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Box selectionnee:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r1.selectedBox.numRef, " (", ctx_r1.selectedBox.etage, ")");
  }
}
function BoxesDisponiblesComponent_Conditional_9_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Traitement... ");
  }
}
function BoxesDisponiblesComponent_Conditional_9_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.isChangingBox ? "Mettre a jour ma box" : "Creer ma boutique", " ");
  }
}
function BoxesDisponiblesComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4)(1, "section", 7)(2, "header")(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Boxes disponibles");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditionalCreate"](7, BoxesDisponiblesComponent_Conditional_9_Conditional_7_Template, 5, 0, "div", 9)(8, BoxesDisponiblesComponent_Conditional_9_Conditional_8_Template, 3, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "section", 11)(10, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditionalCreate"](12, BoxesDisponiblesComponent_Conditional_9_Conditional_12_Template, 5, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "form", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function BoxesDisponiblesComponent_Conditional_9_Template_form_ngSubmit_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 14)(15, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Nom de la boutique *");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 17)(19, "div")(20, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Debut location *");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div")(24, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Fin location *");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 20)(28, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, " Lun");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, " Mar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, " Mer");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, " Jeu");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, " Ven");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, " Sam");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](47, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, " Dim");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 28)(50, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, " J'accepte le paiement du loyer selon les regles du centre (hebdomadaire sur le mois). ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](54, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, " J'ai lu que le centre reste responsable de la livraison selon sa politique. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](57, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, " J'accepte la condition de taux sur vente au-dela de 500 000 Ar. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditionalCreate"](60, BoxesDisponiblesComponent_Conditional_9_Conditional_60_Template, 2, 0)(61, BoxesDisponiblesComponent_Conditional_9_Conditional_61_Template, 1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.boxes.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](ctx_r1.boxes.length === 0 ? 7 : 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.isChangingBox ? "Mise a jour du contrat" : "Creation de boutique");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](ctx_r1.selectedBox ? 12 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r1.boutiqueForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r1.creating || !ctx_r1.selectedBox);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](ctx_r1.creating ? 60 : 61);
  }
}
class BoxesDisponiblesComponent {
  constructor(fb, boutiqueService, authService, notificationService, router, route, cdr) {
    this.fb = fb;
    this.boutiqueService = boutiqueService;
    this.authService = authService;
    this.notificationService = notificationService;
    this.router = router;
    this.route = route;
    this.cdr = cdr;
    this.loading = false;
    this.loadingBoutique = false;
    this.creating = false;
    this.boxes = [];
    this.selectedBox = null;
    this.hasBoutique = false;
    this.isChangingBox = false;
    this.boutique = null;
    const now = new Date();
    const debut = new Date(now);
    debut.setDate(debut.getDate() + 1);
    const fin = new Date(debut);
    fin.setDate(fin.getDate() + 30);
    this.boutiqueForm = this.fb.group({
      nom: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.maxLength(100)]],
      dateDebutLocation: [this.toInputDate(debut), _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      dateFinLocation: [this.toInputDate(fin), _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      lundi: [true],
      mardi: [true],
      mercredi: [true],
      jeudi: [true],
      vendredi: [true],
      samedi: [true],
      dimanche: [false],
      acceptRent: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.requiredTrue],
      acceptDelivery: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.requiredTrue],
      acceptCommission: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.requiredTrue]
    });
  }
  ngOnInit() {
    if (!this.authService.hasRole('admin_boutique')) {
      this.router.navigate(['/default']);
      return;
    }
    this.isChangingBox = this.route.snapshot.queryParamMap.get('mode') === 'change';
    this.loadStateAndBoxes();
  }
  loadStateAndBoxes() {
    this.loading = true;
    this.boutiqueService.refreshMyBoutiqueStatus().subscribe({
      next: status => {
        this.hasBoutique = status.hasBoutique;
        if (status.hasBoutique) {
          this.loadBoutique();
          if (!this.isChangingBox) {
            this.loading = false;
            this.notificationService.info('Info', 'Vous avez deja une boutique.');
            this.router.navigate(['/boutique/informations']);
            return;
          }
        } else if (this.isChangingBox) {
          this.isChangingBox = false;
        }
        this.loadBoxes();
      },
      error: () => {
        this.loading = false;
        this.notificationService.error('Erreur', 'Impossible de verifier votre boutique.');
        this.cdr.detectChanges();
      }
    });
  }
  loadBoutique() {
    this.loadingBoutique = true;
    this.boutiqueService.getMyBoutique().subscribe({
      next: response => {
        if (response.success && response.data) {
          this.boutique = response.data;
          this.boutiqueForm.patchValue({
            nom: response.data.nom
          });
        }
      },
      error: () => {
        this.boutique = null;
      },
      complete: () => {
        this.loadingBoutique = false;
        this.cdr.detectChanges();
      }
    });
  }
  loadBoxes() {
    this.boutiqueService.getAvailableBoxes().subscribe({
      next: boxes => {
        this.boxes = boxes;
        if (this.boxes.length > 0) {
          this.selectedBox = this.boxes[0];
        }
      },
      error: () => {
        this.notificationService.error('Erreur', 'Impossible de charger les boxes disponibles.');
      },
      complete: () => {
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }
  selectBox(box) {
    this.selectedBox = box;
  }
  isSelectedBox(box) {
    return this.selectedBox?._id === box._id;
  }
  submit() {
    if (!this.selectedBox) {
      this.notificationService.warning('Box requise', 'Selectionnez une box avant de continuer.');
      return;
    }
    if (this.boutiqueForm.invalid) {
      this.boutiqueForm.markAllAsTouched();
      this.notificationService.warning('Formulaire invalide', 'Completer tous les champs obligatoires.');
      return;
    }
    const dateDebut = new Date(this.boutiqueForm.get('dateDebutLocation')?.value);
    const dateFin = new Date(this.boutiqueForm.get('dateFinLocation')?.value);
    if (!(dateDebut.getTime() < dateFin.getTime())) {
      this.notificationService.warning('Dates invalides', 'La date de fin doit etre apres la date de debut.');
      return;
    }
    this.creating = true;
    const jLocation = {
      lundi: !!this.boutiqueForm.get('lundi')?.value,
      mardi: !!this.boutiqueForm.get('mardi')?.value,
      mercredi: !!this.boutiqueForm.get('mercredi')?.value,
      jeudi: !!this.boutiqueForm.get('jeudi')?.value,
      vendredi: !!this.boutiqueForm.get('vendredi')?.value,
      samedi: !!this.boutiqueForm.get('samedi')?.value,
      dimanche: !!this.boutiqueForm.get('dimanche')?.value
    };
    const contratlocation = {
      boxes: [this.selectedBox._id],
      dateDebutLocation: dateDebut.toISOString(),
      dateFinLocation: dateFin.toISOString(),
      jLocation
    };
    const request$ = this.isChangingBox && this.boutique ? this.boutiqueService.updateMyBoutique({
      nom: this.boutiqueForm.get('nom')?.value,
      contratlocation: contratlocation
    }) : this.boutiqueService.createBoutique({
      nom: this.boutiqueForm.get('nom')?.value,
      locataire: [this.authService.getUserId()],
      contratlocation
    });
    request$.subscribe({
      next: response => {
        if (!response.success) {
          this.notificationService.error('Erreur', response.message || 'Operation impossible.');
          return;
        }
        if (this.isChangingBox) {
          this.notificationService.success('Box modifiee', 'Votre box a ete mise a jour.');
          this.router.navigate(['/boutique/informations']);
          return;
        }
        if (response.data?.isActive) {
          this.notificationService.success('Boutique creee', 'Votre boutique est active.');
          this.router.navigate(['/boutique/informations']);
        } else {
          this.notificationService.info('Boutique creee', 'Votre boutique est en attente de la premiere activation par l\'admin du centre.');
          this.router.navigate(['/boutique/informations']);
        }
      },
      error: error => {
        const message = error?.error?.message || 'Erreur lors de la creation de la boutique.';
        this.notificationService.error('Erreur', message);
      },
      complete: () => {
        this.creating = false;
        this.cdr.detectChanges();
      }
    });
  }
  goToBoutiqueInfo() {
    this.router.navigate(['/boutique/informations']);
  }
  trackByBoxId(_, box) {
    return box._id;
  }
  toInputDate(date) {
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, '0');
    const day = `${date.getDate()}`.padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  static {
    this.ɵfac = function BoxesDisponiblesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BoxesDisponiblesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_boutique_service__WEBPACK_IMPORTED_MODULE_5__.BoutiqueService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_7__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: BoxesDisponiblesComponent,
      selectors: [["app-boxes-disponibles"]],
      decls: 10,
      vars: 4,
      consts: [[1, "boxes-page"], [1, "hero"], ["type", "button", 1, "btn", "btn-outline-light"], [1, "loading-state"], [1, "content-grid"], ["type", "button", 1, "btn", "btn-outline-light", 3, "click"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "boxes-list"], [1, "count"], [1, "empty"], [1, "cards"], [1, "create-panel"], [1, "selected-box"], [3, "ngSubmit", "formGroup"], [1, "mb-3"], [1, "form-label"], ["type", "text", "formControlName", "nom", "placeholder", "Ex: My chop ", 1, "form-control"], [1, "date-grid"], ["type", "date", "formControlName", "dateDebutLocation", 1, "form-control"], ["type", "date", "formControlName", "dateFinLocation", 1, "form-control"], [1, "days-grid"], ["type", "checkbox", "formControlName", "lundi"], ["type", "checkbox", "formControlName", "mardi"], ["type", "checkbox", "formControlName", "mercredi"], ["type", "checkbox", "formControlName", "jeudi"], ["type", "checkbox", "formControlName", "vendredi"], ["type", "checkbox", "formControlName", "samedi"], ["type", "checkbox", "formControlName", "dimanche"], [1, "terms"], ["type", "checkbox", "formControlName", "acceptRent"], ["type", "checkbox", "formControlName", "acceptDelivery"], ["type", "checkbox", "formControlName", "acceptCommission"], ["type", "submit", 1, "btn", "btn-primary", "w-100", 3, "disabled"], [1, "box-card", 3, "selected"], [1, "box-card", 3, "click"], [1, "row-top"], [1, "badge"], [1, "meta"], [1, "spinner-border", "spinner-border-sm", "me-2"]],
      template: function BoxesDisponiblesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "section", 1)(2, "div")(3, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditionalCreate"](7, BoxesDisponiblesComponent_Conditional_7_Template, 2, 0, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditionalCreate"](8, BoxesDisponiblesComponent_Conditional_8_Template, 4, 0, "div", 3)(9, BoxesDisponiblesComponent_Conditional_9_Template, 62, 7, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.isChangingBox ? "Changer de box" : "Choisir une box disponible");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.isChangingBox ? "Selectionnez une nouvelle box et mettez a jour votre contrat." : "Creer votre boutique en selectionnant une box libre du centre.", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](ctx.hasBoutique && !ctx.isChangingBox ? 7 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](ctx.loading || ctx.loadingBoutique ? 8 : 9);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.boxes-page[_ngcontent-%COMP%] {\n  --card-bg: #ffffff;\n  --line: #e5e7eb;\n  --text-muted: #64748b;\n  --primary: #0f766e;\n  --primary-soft: #d1fae5;\n  padding: 1rem;\n}\n\n.hero[_ngcontent-%COMP%] {\n  background: linear-gradient(120deg, #0f766e, #0369a1);\n  color: #fff;\n  border-radius: 14px;\n  padding: 1.25rem 1.5rem;\n  margin-bottom: 1rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n}\n.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 0.35rem;\n  font-size: 1.5rem;\n  font-weight: 700;\n}\n.hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  opacity: 0.95;\n}\n\n.loading-state[_ngcontent-%COMP%] {\n  min-height: 260px;\n  display: grid;\n  place-items: center;\n  text-align: center;\n}\n\n.content-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.4fr 1fr;\n  gap: 1rem;\n}\n\n.boxes-list[_ngcontent-%COMP%], \n.create-panel[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border: 1px solid var(--line);\n  border-radius: 14px;\n  padding: 1rem;\n}\n\n.boxes-list[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 0.9rem;\n}\n.boxes-list[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n}\n.boxes-list[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%] {\n  background: #111827;\n  color: #fff;\n  border-radius: 999px;\n  padding: 0.1rem 0.55rem;\n  font-size: 0.8rem;\n}\n\n.cards[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.75rem;\n}\n\n.box-card[_ngcontent-%COMP%] {\n  border: 1px solid var(--line);\n  border-radius: 10px;\n  padding: 0.85rem;\n  cursor: pointer;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;\n}\n.box-card[_ngcontent-%COMP%]:hover {\n  border-color: #93c5fd;\n  box-shadow: 0 8px 18px rgba(2, 132, 199, 0.15);\n  transform: translateY(-1px);\n}\n.box-card.selected[_ngcontent-%COMP%] {\n  border-color: var(--primary);\n  box-shadow: 0 0 0 2px rgba(15, 118, 110, 0.18);\n  background: #f8fffd;\n}\n.box-card[_ngcontent-%COMP%]   .row-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.45rem;\n}\n.box-card[_ngcontent-%COMP%]   .row-top[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  background: var(--primary-soft);\n  color: var(--primary);\n  border: 1px solid #86efac;\n  font-size: 0.72rem;\n  font-weight: 600;\n}\n.box-card[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.25rem 0.6rem;\n  color: var(--text-muted);\n  font-size: 0.86rem;\n}\n\n.selected-box[_ngcontent-%COMP%] {\n  border: 1px dashed #cbd5e1;\n  background: #f8fafc;\n  border-radius: 10px;\n  padding: 0.65rem 0.75rem;\n  margin-bottom: 0.85rem;\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n  color: #0f172a;\n}\n\n.date-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.75rem;\n  margin-bottom: 0.75rem;\n}\n\n.days-grid[_ngcontent-%COMP%] {\n  border: 1px solid var(--line);\n  border-radius: 10px;\n  padding: 0.6rem 0.75rem;\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 0.35rem 0.6rem;\n  margin-bottom: 0.75rem;\n}\n.days-grid[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  font-size: 0.86rem;\n}\n\n.terms[_ngcontent-%COMP%] {\n  border: 1px solid var(--line);\n  border-radius: 10px;\n  padding: 0.7rem 0.75rem;\n  margin-bottom: 0.9rem;\n  background: #fafafa;\n}\n.terms[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  align-items: flex-start;\n  font-size: 0.86rem;\n  color: #334155;\n}\n.terms[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  margin-top: 0.55rem;\n}\n\n.empty[_ngcontent-%COMP%] {\n  border: 1px dashed #cbd5e1;\n  border-radius: 10px;\n  padding: 1.2rem;\n  text-align: center;\n}\n.empty[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.4rem;\n  font-size: 1rem;\n}\n.empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--text-muted);\n}\n\n@media (max-width: 1100px) {\n  .content-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVtby9wYWdlcy9ib3V0aXF1ZS9ib3hlcy1kaXNwb25pYmxlcy9ib3hlcy1kaXNwb25pYmxlcy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uL1dlYiUyMGF2YW5jZS9tMXAxM21lYW4tQ2FuZHktUm9tYW5jZS9mcm9udGVuZC9zcmMvYXBwL2RlbW8vcGFnZXMvYm91dGlxdWUvYm94ZXMtZGlzcG9uaWJsZXMvYm94ZXMtZGlzcG9uaWJsZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFFQSxhQUFBO0FDQUY7O0FER0E7RUFDRSxxREFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUNBRjtBREVFO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQUo7QURHRTtFQUNFLFNBQUE7RUFDQSxhQUFBO0FDREo7O0FES0E7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDRkY7O0FES0E7RUFDRSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSxTQUFBO0FDRkY7O0FES0E7O0VBRUUsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQ0ZGOztBREtBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtBQ0ZGO0FESUU7RUFDRSxTQUFBO0VBQ0EsaUJBQUE7QUNGSjtBREtFO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FDSEo7O0FET0E7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQ0pGOztBRE9BO0VBQ0UsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDZFQUFBO0FDSkY7QURNRTtFQUNFLHFCQUFBO0VBQ0EsOENBQUE7RUFDQSwyQkFBQTtBQ0pKO0FET0U7RUFDRSw0QkFBQTtFQUNBLDhDQUFBO0VBQ0EsbUJBQUE7QUNMSjtBRFFFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQ05KO0FEUUk7RUFDRSwrQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDTk47QURVRTtFQUNFLGFBQUE7RUFDQSxnREFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtBQ1JKOztBRFlBO0VBQ0UsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FDVEY7O0FEWUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNURjs7QURZQTtFQUNFLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxnREFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUNURjtBRFdFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDVEo7O0FEYUE7RUFDRSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDVkY7QURZRTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNWSjtBRGFFO0VBQ0UsbUJBQUE7QUNYSjs7QURlQTtFQUNFLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNaRjtBRGNFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FDWko7QURlRTtFQUNFLFNBQUE7RUFDQSx3QkFBQTtBQ2JKOztBRGlCQTtFQUNFO0lBQ0UsMEJBQUE7RUNkRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uYm94ZXMtcGFnZSB7XHJcbiAgLS1jYXJkLWJnOiAjZmZmZmZmO1xyXG4gIC0tbGluZTogI2U1ZTdlYjtcclxuICAtLXRleHQtbXV0ZWQ6ICM2NDc0OGI7XHJcbiAgLS1wcmltYXJ5OiAjMGY3NjZlO1xyXG4gIC0tcHJpbWFyeS1zb2Z0OiAjZDFmYWU1O1xyXG5cclxuICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcblxyXG4uaGVybyB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEyMGRlZywgIzBmNzY2ZSwgIzAzNjlhMSk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICBwYWRkaW5nOiAxLjI1cmVtIDEuNXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxcmVtO1xyXG5cclxuICBoMSB7XHJcbiAgICBtYXJnaW46IDAgMCAwLjM1cmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBvcGFjaXR5OiAwLjk1O1xyXG4gIH1cclxufVxyXG5cclxuLmxvYWRpbmctc3RhdGUge1xyXG4gIG1pbi1oZWlnaHQ6IDI2MHB4O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250ZW50LWdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxLjRmciAxZnI7XHJcbiAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4uYm94ZXMtbGlzdCxcclxuLmNyZWF0ZS1wYW5lbCB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tY2FyZC1iZyk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGluZSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcblxyXG4uYm94ZXMtbGlzdCBoZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luLWJvdHRvbTogMC45cmVtO1xyXG5cclxuICBoMiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICB9XHJcblxyXG4gIC5jb3VudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTExODI3O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICAgIHBhZGRpbmc6IDAuMXJlbSAwLjU1cmVtO1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZHMge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ2FwOiAwLjc1cmVtO1xyXG59XHJcblxyXG4uYm94LWNhcmQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpbmUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZzogMC44NXJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMnMgZWFzZSwgYm94LXNoYWRvdyAwLjJzIGVhc2UsIHRyYW5zZm9ybSAwLjJzIGVhc2U7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjOTNjNWZkO1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggMThweCByZ2JhKDIsIDEzMiwgMTk5LCAwLjE1KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICB9XHJcblxyXG4gICYuc2VsZWN0ZWQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCByZ2JhKDE1LCAxMTgsIDExMCwgMC4xOCk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjhmZmZkO1xyXG4gIH1cclxuXHJcbiAgLnJvdy10b3Age1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjQ1cmVtO1xyXG5cclxuICAgIC5iYWRnZSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktc29mdCk7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzg2ZWZhYztcclxuICAgICAgZm9udC1zaXplOiAwLjcycmVtO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm1ldGEge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTtcclxuICAgIGdhcDogMC4yNXJlbSAwLjZyZW07XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XHJcbiAgICBmb250LXNpemU6IDAuODZyZW07XHJcbiAgfVxyXG59XHJcblxyXG4uc2VsZWN0ZWQtYm94IHtcclxuICBib3JkZXI6IDFweCBkYXNoZWQgI2NiZDVlMTtcclxuICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZzogMC42NXJlbSAwLjc1cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuODVyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZ2FwOiAxcmVtO1xyXG4gIGNvbG9yOiAjMGYxNzJhO1xyXG59XHJcblxyXG4uZGF0ZS1ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICBnYXA6IDAuNzVyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcclxufVxyXG5cclxuLmRheXMtZ3JpZCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGluZSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nOiAwLjZyZW0gMC43NXJlbTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIG1pbm1heCgwLCAxZnIpKTtcclxuICBnYXA6IDAuMzVyZW0gMC42cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XHJcblxyXG4gIGxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAwLjM1cmVtO1xyXG4gICAgZm9udC1zaXplOiAwLjg2cmVtO1xyXG4gIH1cclxufVxyXG5cclxuLnRlcm1zIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saW5lKTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDAuN3JlbSAwLjc1cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuOXJlbTtcclxuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG5cclxuICBsYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAwLjVyZW07XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGZvbnQtc2l6ZTogMC44NnJlbTtcclxuICAgIGNvbG9yOiAjMzM0MTU1O1xyXG4gIH1cclxuXHJcbiAgbGFiZWwgKyBsYWJlbCB7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjU1cmVtO1xyXG4gIH1cclxufVxyXG5cclxuLmVtcHR5IHtcclxuICBib3JkZXI6IDFweCBkYXNoZWQgI2NiZDVlMTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDEuMnJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIGgzIHtcclxuICAgIG1hcmdpbjogMCAwIDAuNHJlbTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDExMDBweCkge1xyXG4gIC5jb250ZW50LWdyaWQge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5ib3hlcy1wYWdlIHtcbiAgLS1jYXJkLWJnOiAjZmZmZmZmO1xuICAtLWxpbmU6ICNlNWU3ZWI7XG4gIC0tdGV4dC1tdXRlZDogIzY0NzQ4YjtcbiAgLS1wcmltYXJ5OiAjMGY3NjZlO1xuICAtLXByaW1hcnktc29mdDogI2QxZmFlNTtcbiAgcGFkZGluZzogMXJlbTtcbn1cblxuLmhlcm8ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCAjMGY3NjZlLCAjMDM2OWExKTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIHBhZGRpbmc6IDEuMjVyZW0gMS41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbn1cbi5oZXJvIGgxIHtcbiAgbWFyZ2luOiAwIDAgMC4zNXJlbTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4uaGVybyBwIHtcbiAgbWFyZ2luOiAwO1xuICBvcGFjaXR5OiAwLjk1O1xufVxuXG4ubG9hZGluZy1zdGF0ZSB7XG4gIG1pbi1oZWlnaHQ6IDI2MHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb250ZW50LWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEuNGZyIDFmcjtcbiAgZ2FwOiAxcmVtO1xufVxuXG4uYm94ZXMtbGlzdCxcbi5jcmVhdGUtcGFuZWwge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXJkLWJnKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGluZSk7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbi5ib3hlcy1saXN0IGhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMC45cmVtO1xufVxuLmJveGVzLWxpc3QgaGVhZGVyIGgyIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEuMXJlbTtcbn1cbi5ib3hlcy1saXN0IGhlYWRlciAuY291bnQge1xuICBiYWNrZ3JvdW5kOiAjMTExODI3O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIHBhZGRpbmc6IDAuMXJlbSAwLjU1cmVtO1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuLmNhcmRzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAwLjc1cmVtO1xufVxuXG4uYm94LWNhcmQge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saW5lKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMC44NXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycyBlYXNlLCBib3gtc2hhZG93IDAuMnMgZWFzZSwgdHJhbnNmb3JtIDAuMnMgZWFzZTtcbn1cbi5ib3gtY2FyZDpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogIzkzYzVmZDtcbiAgYm94LXNoYWRvdzogMCA4cHggMThweCByZ2JhKDIsIDEzMiwgMTk5LCAwLjE1KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xufVxuLmJveC1jYXJkLnNlbGVjdGVkIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHJnYmEoMTUsIDExOCwgMTEwLCAwLjE4KTtcbiAgYmFja2dyb3VuZDogI2Y4ZmZmZDtcbn1cbi5ib3gtY2FyZCAucm93LXRvcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMC40NXJlbTtcbn1cbi5ib3gtY2FyZCAucm93LXRvcCAuYmFkZ2Uge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LXNvZnQpO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4NmVmYWM7XG4gIGZvbnQtc2l6ZTogMC43MnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5ib3gtY2FyZCAubWV0YSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTtcbiAgZ2FwOiAwLjI1cmVtIDAuNnJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICBmb250LXNpemU6IDAuODZyZW07XG59XG5cbi5zZWxlY3RlZC1ib3gge1xuICBib3JkZXI6IDFweCBkYXNoZWQgI2NiZDVlMTtcbiAgYmFja2dyb3VuZDogI2Y4ZmFmYztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMC42NXJlbSAwLjc1cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjg1cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMXJlbTtcbiAgY29sb3I6ICMwZjE3MmE7XG59XG5cbi5kYXRlLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdhcDogMC43NXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcbn1cblxuLmRheXMtZ3JpZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpbmUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAwLjZyZW0gMC43NXJlbTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgbWlubWF4KDAsIDFmcikpO1xuICBnYXA6IDAuMzVyZW0gMC42cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xufVxuLmRheXMtZ3JpZCBsYWJlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC4zNXJlbTtcbiAgZm9udC1zaXplOiAwLjg2cmVtO1xufVxuXG4udGVybXMge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saW5lKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMC43cmVtIDAuNzVyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuOXJlbTtcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbn1cbi50ZXJtcyBsYWJlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMC41cmVtO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZm9udC1zaXplOiAwLjg2cmVtO1xuICBjb2xvcjogIzMzNDE1NTtcbn1cbi50ZXJtcyBsYWJlbCArIGxhYmVsIHtcbiAgbWFyZ2luLXRvcDogMC41NXJlbTtcbn1cblxuLmVtcHR5IHtcbiAgYm9yZGVyOiAxcHggZGFzaGVkICNjYmQ1ZTE7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDEuMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmVtcHR5IGgzIHtcbiAgbWFyZ2luOiAwIDAgMC40cmVtO1xuICBmb250LXNpemU6IDFyZW07XG59XG4uZW1wdHkgcCB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTEwMHB4KSB7XG4gIC5jb250ZW50LWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_demo_pages_boutique_boxes-disponibles_boxes-disponibles_component_ts.js.map