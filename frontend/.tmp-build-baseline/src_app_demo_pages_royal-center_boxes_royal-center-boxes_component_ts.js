"use strict";
(self["webpackChunkfree_version"] = self["webpackChunkfree_version"] || []).push([["src_app_demo_pages_royal-center_boxes_royal-center-boxes_component_ts"],{

/***/ 6183:
/*!*******************************************************************************!*\
  !*** ./src/app/demo/pages/royal-center/boxes/royal-center-boxes.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoyalCenterBoxesComponent: () => (/* binding */ RoyalCenterBoxesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 1873);
/* harmony import */ var _services_admin_center_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/admin-center.service */ 1317);
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/notification.service */ 7473);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 6124);









function RoyalCenterBoxesComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function RoyalCenterBoxesComponent_div_31_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "td")(12, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "td", 48)(17, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RoyalCenterBoxesComponent_div_31_tr_23_Template_button_click_17_listener() {
      const box_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.openEditModal(box_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RoyalCenterBoxesComponent_div_31_tr_23_Template_button_click_19_listener() {
      const box_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.toggleDisponibilite(box_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RoyalCenterBoxesComponent_div_31_tr_23_Template_button_click_21_listener() {
      const box_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.deleteBox(box_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const box_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](box_r2.numRef);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](box_r2.etage);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", box_r2.Superficie, " m2");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r2.getTypeBoxName(box_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r2.getCentreName(box_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("bg-success", box_r2.isDisponible)("bg-danger", !box_r2.isDisponible);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", box_r2.isDisponible ? "Disponible" : "Occupee", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r2.getOccupyingBoutiqueLabel(box_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", box_r2.isDisponible ? "Marquer occupee" : "Marquer disponible");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", box_r2.isDisponible ? "ti-lock" : "ti-lock-open");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r2.cannotDeleteBox(box_r2))("title", ctx_r2.cannotDeleteBox(box_r2) ? ctx_r2.getDeleteBlockedReason(box_r2) : "Supprimer");
  }
}
function RoyalCenterBoxesComponent_div_31_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Aucune box.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function RoyalCenterBoxesComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 44)(1, "div", 45)(2, "div", 46)(3, "table", 47)(4, "thead")(5, "tr")(6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Ref");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Etage");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Superficie");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Centre");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Statut");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Boutique");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, RoyalCenterBoxesComponent_div_31_tr_23_Template, 23, 15, "tr", 49)(24, RoyalCenterBoxesComponent_div_31_tr_24_Template, 3, 0, "tr", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r2.boxes);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.boxes.length === 0);
  }
}
function RoyalCenterBoxesComponent_option_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const type_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", type_r4._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate3"](" ", type_r4.nom, " (", type_r4.periode, "m | ", type_r4.remuneration, "%) ");
  }
}
function RoyalCenterBoxesComponent_span_80_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Enregistrer");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function RoyalCenterBoxesComponent_span_81_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Traitement...");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
class RoyalCenterBoxesComponent {
  constructor() {
    this.adminCenterService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_admin_center_service__WEBPACK_IMPORTED_MODULE_5__.AdminCenterService);
    this.notificationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_notification_service__WEBPACK_IMPORTED_MODULE_6__.NotificationService);
    this.cdr = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef);
    this.boxes = [];
    this.boutiques = [];
    this.typeBoxes = [];
    this.loading = false;
    this.saving = false;
    this.showModal = false;
    this.editingBoxId = null;
    this.filters = {
      search: '',
      disponibilite: 'all'
    };
    this.form = this.createEmptyForm();
  }
  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.loading = true;
    const isDisponible = this.filters.disponibilite === 'all' ? null : this.filters.disponibilite === 'true';
    (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.forkJoin)({
      boxes: this.adminCenterService.getBoxes({
        page: 1,
        limit: 200,
        numRefSearch: this.filters.search,
        isDisponible
      }),
      boutiques: this.adminCenterService.getBoutiques({
        page: 1,
        limit: 200,
        status: 'all'
      }),
      typeBoxes: this.adminCenterService.getTypeBoxes(200)
    }).subscribe({
      next: ({
        boxes,
        boutiques,
        typeBoxes
      }) => {
        this.boxes = boxes.items;
        this.boutiques = boutiques.items;
        this.typeBoxes = typeBoxes;
        this.loading = false;
        Promise.resolve().then(() => {
          this.cdr.detectChanges();
        });
      },
      error: error => {
        this.loading = false;
        this.notificationService.error('Erreur', error?.error?.message || 'Impossible de charger les boxes.');
        this.cdr.detectChanges();
      }
    });
  }
  applyFilters() {
    this.loadData();
  }
  openCreateModal() {
    this.editingBoxId = null;
    this.form = this.createEmptyForm();
    this.showModal = true;
  }
  openEditModal(box) {
    this.editingBoxId = box._id;
    this.form = {
      numRef: box.numRef || '',
      etage: box.etage || '',
      Superficie: Number(box.Superficie || 0),
      typeBoxId: this.extractTypeBoxId(box),
      centreId: this.extractCentreId(box),
      isDisponible: !!box.isDisponible,
      coordonneesText: JSON.stringify(box.coordonnees || this.getDefaultCoordonneesObject(), null, 2)
    };
    this.showModal = true;
  }
  closeModal() {
    if (this.saving) return;
    this.showModal = false;
  }
  saveBox() {
    if (!this.form.numRef.trim() || !this.form.etage.trim() || !this.form.typeBoxId.trim()) {
      this.notificationService.warning('Validation', 'numRef, etage et type de box sont obligatoires.');
      return;
    }
    if (this.form.Superficie <= 0) {
      this.notificationService.warning('Validation', 'La superficie doit etre superieure a 0.');
      return;
    }
    let coordonnees;
    try {
      const parsed = JSON.parse(this.form.coordonneesText);
      if (parsed?.type !== 'Polygon' || !Array.isArray(parsed?.coordinates)) {
        throw new Error('invalid polygon');
      }
      coordonnees = parsed;
    } catch {
      this.notificationService.warning('Validation', 'Le JSON des coordonnees est invalide. Utilisez un objet Polygon GeoJSON.');
      return;
    }
    this.saving = true;
    if (this.editingBoxId) {
      const payload = {
        numRef: this.form.numRef.trim(),
        etage: this.form.etage.trim(),
        Superficie: Number(this.form.Superficie),
        typeBoxId: this.form.typeBoxId,
        isDisponible: this.form.isDisponible,
        coordonnees,
        centreId: this.form.centreId.trim() || undefined
      };
      this.adminCenterService.updateBox(this.editingBoxId, payload).subscribe({
        next: () => {
          this.saving = false;
          this.showModal = false;
          this.notificationService.success('Succes', 'Box mise a jour.');
          this.loadData();
        },
        error: error => {
          this.saving = false;
          this.notificationService.error('Erreur', error?.error?.message || 'Mise a jour impossible.');
        }
      });
      return;
    }
    const payload = {
      numRef: this.form.numRef.trim(),
      etage: this.form.etage.trim(),
      Superficie: Number(this.form.Superficie),
      typeBoxId: this.form.typeBoxId,
      isDisponible: this.form.isDisponible,
      coordonnees
    };
    if (this.form.centreId.trim()) {
      payload.centreId = this.form.centreId.trim();
    }
    this.adminCenterService.createBox(payload).subscribe({
      next: () => {
        this.saving = false;
        this.showModal = false;
        this.notificationService.success('Succes', 'Box creee.');
        this.loadData();
      },
      error: error => {
        this.saving = false;
        this.notificationService.error('Erreur', error?.error?.message || 'Creation impossible.');
      }
    });
  }
  toggleDisponibilite(box) {
    const payload = {
      isDisponible: !box.isDisponible,
      Superficie: Number(box.Superficie),
      etage: box.etage,
      numRef: box.numRef,
      typeBoxId: this.extractTypeBoxId(box),
      centreId: this.extractCentreId(box),
      coordonnees: box.coordonnees
    };
    this.adminCenterService.updateBox(box._id, payload).subscribe({
      next: () => {
        this.notificationService.success('Succes', 'Disponibilite mise a jour.');
        this.loadData();
      },
      error: error => {
        this.notificationService.error('Erreur', error?.error?.message || 'Operation impossible.');
      }
    });
  }
  deleteBox(box) {
    if (this.cannotDeleteBox(box)) {
      this.notificationService.warning('Action bloquee', this.getDeleteBlockedReason(box));
      return;
    }
    if (!confirm(`Supprimer la box ${box.numRef} ?`)) return;
    this.adminCenterService.deleteBox(box._id).subscribe({
      next: () => {
        this.notificationService.success('Succes', 'Box supprimee.');
        this.loadData();
      },
      error: error => {
        this.notificationService.error('Erreur', error?.error?.message || 'Suppression impossible.');
      }
    });
  }
  getTypeBoxName(box) {
    if (typeof box.typeBoxId === 'string') {
      const found = this.typeBoxes.find(item => item._id === box.typeBoxId);
      return found?.nom || 'Type';
    }
    return box.typeBoxId?.nom || 'Type';
  }
  getCentreName(box) {
    if (typeof box.centreId === 'string') {
      return box.centreId;
    }
    return box.centreId?.nom || '-';
  }
  getOccupyingBoutique(box) {
    return this.boutiques.find(boutique => {
      const ids = this.extractBoxIdsFromBoutique(boutique);
      return ids.includes(box._id);
    }) || null;
  }
  cannotDeleteBox(box) {
    const boutique = this.getOccupyingBoutique(box);
    return box.isDisponible === false && !!boutique && !!boutique.isActive;
  }
  getDeleteBlockedReason(box) {
    const boutique = this.getOccupyingBoutique(box);
    if (box.isDisponible === false && boutique?.isActive) {
      return 'Suppression interdite: box occupee par une boutique active.';
    }
    return '';
  }
  getOccupyingBoutiqueLabel(box) {
    const boutique = this.getOccupyingBoutique(box);
    if (!boutique) return '-';
    return boutique.isActive ? `${boutique.nom} (active)` : `${boutique.nom} (inactive)`;
  }
  extractBoxIdsFromBoutique(boutique) {
    const boxes = boutique.contratlocation?.boxes || [];
    return boxes.map(box => typeof box === 'string' ? box : box?._id || '').filter(id => !!id);
  }
  extractTypeBoxId(box) {
    return typeof box.typeBoxId === 'string' ? box.typeBoxId : box.typeBoxId?._id || '';
  }
  extractCentreId(box) {
    return typeof box.centreId === 'string' ? box.centreId : box.centreId?._id || '';
  }
  createEmptyForm() {
    return {
      numRef: '',
      etage: '',
      Superficie: 1,
      typeBoxId: '',
      centreId: '',
      isDisponible: true,
      coordonneesText: JSON.stringify(this.getDefaultCoordonneesObject(), null, 2)
    };
  }
  getDefaultCoordonneesObject() {
    return {
      type: 'Polygon',
      coordinates: [[[47.5, -18.9], [47.5002, -18.9], [47.5002, -18.9002], [47.5, -18.9002], [47.5, -18.9]]]
    };
  }
  static {
    this.ɵfac = function RoyalCenterBoxesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || RoyalCenterBoxesComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: RoyalCenterBoxesComponent,
      selectors: [["app-royal-center-boxes"]],
      decls: 82,
      vars: 32,
      consts: [[1, "container-fluid", "royal-section"], [1, "row", "mb-4"], [1, "col-12"], [1, "page-title-box", "d-sm-flex", "align-items-center", "justify-content-between"], [1, "mb-sm-0"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "ti", "ti-plus", "me-1"], [1, "card", "mb-3"], [1, "card-body"], [1, "row", "g-2", "align-items-end"], [1, "col-md-6"], [1, "form-label"], ["type", "text", "placeholder", "Ex: A-101", 1, "form-control", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "col-md-4"], [1, "form-select", 3, "ngModelChange", "ngModel"], ["value", "all"], ["value", "true"], ["value", "false"], [1, "col-md-2"], [1, "btn", "btn-warning", "w-100", 3, "click"], [1, "ti", "ti-filter"], ["class", "text-center py-5", 4, "ngIf"], ["class", "card", 4, "ngIf"], ["tabindex", "-1", 1, "modal", "fade"], [1, "modal-dialog", "modal-lg", "modal-dialog-scrollable"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "row", "g-3"], ["type", "text", 1, "form-control", 3, "ngModelChange", "ngModel", "disabled"], ["type", "number", "min", "1", 1, "form-control", 3, "ngModelChange", "ngModel", "disabled"], [1, "form-select", 3, "ngModelChange", "ngModel", "disabled"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "ngValue"], ["rows", "8", 1, "form-control", "font-monospace", 3, "ngModelChange", "ngModel", "disabled"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"], [4, "ngIf"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "card"], [1, "card-body", "p-0"], [1, "table-responsive"], [1, "table", "table-centered", "mb-0"], [1, "text-center"], [4, "ngFor", "ngForOf"], [1, "fw-semibold"], [1, "badge"], ["title", "Modifier", 1, "btn", "btn-sm", "btn-outline-primary", "me-1", 3, "click"], [1, "ti", "ti-pencil"], [1, "btn", "btn-sm", "btn-outline-warning", "me-1", 3, "click", "title"], [1, "ti", 3, "ngClass"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "click", "disabled", "title"], [1, "ti", "ti-trash"], ["colspan", "8", 1, "text-center", "text-muted", "py-4"], [3, "value"]],
      template: function RoyalCenterBoxesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Gestion des box - Royal Center");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RoyalCenterBoxesComponent_Template_button_click_6_listener() {
            return ctx.openCreateModal();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Nouvelle box ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 7)(10, "div", 8)(11, "div", 9)(12, "div", 10)(13, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Recherche ref");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "input", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function RoyalCenterBoxesComponent_Template_input_ngModelChange_15_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.filters.search, $event) || (ctx.filters.search = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup.enter", function RoyalCenterBoxesComponent_Template_input_keyup_enter_15_listener() {
            return ctx.applyFilters();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 13)(17, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "Disponibilite");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "select", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function RoyalCenterBoxesComponent_Template_select_ngModelChange_19_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.filters.disponibilite, $event) || (ctx.filters.disponibilite = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "option", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "Toutes");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "option", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "Disponibles");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "option", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "Occupees");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 18)(27, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RoyalCenterBoxesComponent_Template_button_click_27_listener() {
            return ctx.applyFilters();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](28, "i", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, " Filtrer ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, RoyalCenterBoxesComponent_div_30_Template, 2, 0, "div", 21)(31, RoyalCenterBoxesComponent_div_31_Template, 25, 2, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 23)(33, "div", 24)(34, "div", 25)(35, "div", 26)(36, "h5", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "button", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RoyalCenterBoxesComponent_Template_button_click_38_listener() {
            return ctx.closeModal();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "div", 29)(40, "div", 30)(41, "div", 10)(42, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43, "Reference");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "input", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function RoyalCenterBoxesComponent_Template_input_ngModelChange_44_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.form.numRef, $event) || (ctx.form.numRef = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "div", 10)(46, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](47, "Etage");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "input", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function RoyalCenterBoxesComponent_Template_input_ngModelChange_48_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.form.etage, $event) || (ctx.form.etage = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "div", 13)(50, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51, "Superficie (m2)");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "input", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function RoyalCenterBoxesComponent_Template_input_ngModelChange_52_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.form.Superficie, $event) || (ctx.form.Superficie = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "div", 13)(54, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](55, "Type de box");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "select", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function RoyalCenterBoxesComponent_Template_select_ngModelChange_56_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.form.typeBoxId, $event) || (ctx.form.typeBoxId = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "option", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](58, "Selectionner");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](59, RoyalCenterBoxesComponent_option_59_Template, 2, 4, "option", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "div", 13)(61, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](62, "CentreId (optionnel)");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](63, "input", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function RoyalCenterBoxesComponent_Template_input_ngModelChange_63_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.form.centreId, $event) || (ctx.form.centreId = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "div", 13)(65, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](66, "Disponibilite");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "select", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function RoyalCenterBoxesComponent_Template_select_ngModelChange_67_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.form.isDisponible, $event) || (ctx.form.isDisponible = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](68, "option", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](69, "Disponible");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "option", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](71, "Occupee");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](72, "div", 2)(73, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](74, "Coordonnees (GeoJSON Polygon)");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](75, "textarea", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function RoyalCenterBoxesComponent_Template_textarea_ngModelChange_75_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.form.coordonneesText, $event) || (ctx.form.coordonneesText = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](76, "div", 38)(77, "button", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RoyalCenterBoxesComponent_Template_button_click_77_listener() {
            return ctx.closeModal();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](78, "Annuler");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](79, "button", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RoyalCenterBoxesComponent_Template_button_click_79_listener() {
            return ctx.saveBox();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](80, RoyalCenterBoxesComponent_span_80_Template, 2, 0, "span", 41)(81, RoyalCenterBoxesComponent_span_81_Template, 2, 0, "span", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.filters.search);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.filters.disponibilite);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background", ctx.showModal ? "rgba(0,0,0,0.5)" : "");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("show", ctx.showModal)("d-block", ctx.showModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.editingBoxId ? "Modifier box" : "Creer box", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.form.numRef);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.saving);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.form.etage);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.saving);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.form.Superficie);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.saving);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.form.typeBoxId);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.saving);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.typeBoxes);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.form.centreId);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.saving);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.form.isDisponible);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.saving);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngValue", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngValue", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.form.coordonneesText);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.saving);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.saving);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.saving);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.saving);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.saving);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel],
      styles: [".royal-section[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.royal-section[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVtby9wYWdlcy9yb3lhbC1jZW50ZXIvYm94ZXMvcm95YWwtY2VudGVyLWJveGVzLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vV2ViJTIwYXZhbmNlL20xcDEzbWVhbi1DYW5keS1Sb21hbmNlL2Zyb250ZW5kL3NyYy9hcHAvZGVtby9wYWdlcy9yb3lhbC1jZW50ZXIvYm94ZXMvcm95YWwtY2VudGVyLWJveGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFOztFQUVFLHNCQUFBO0FDQUoiLCJzb3VyY2VzQ29udGVudCI6WyIucm95YWwtc2VjdGlvbiB7XHJcbiAgLnRhYmxlIHRoLFxyXG4gIC50YWJsZSB0ZCB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIH1cclxufVxyXG4iLCIucm95YWwtc2VjdGlvbiAudGFibGUgdGgsXG4ucm95YWwtc2VjdGlvbiAudGFibGUgdGQge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_demo_pages_royal-center_boxes_royal-center-boxes_component_ts.js.map