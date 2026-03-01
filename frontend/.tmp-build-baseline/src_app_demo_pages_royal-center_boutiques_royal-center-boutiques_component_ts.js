"use strict";
(self["webpackChunkfree_version"] = self["webpackChunkfree_version"] || []).push([["src_app_demo_pages_royal-center_boutiques_royal-center-boutiques_component_ts"],{

/***/ 259:
/*!***************************************************************************************!*\
  !*** ./src/app/demo/pages/royal-center/boutiques/royal-center-boutiques.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoyalCenterBoutiquesComponent: () => (/* binding */ RoyalCenterBoutiquesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _services_admin_center_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/admin-center.service */ 1317);
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/notification.service */ 7473);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 6124);








function RoyalCenterBoutiquesComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function RoyalCenterBoutiquesComponent_div_30_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td")(6, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "td", 28)(14, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RoyalCenterBoutiquesComponent_div_30_tr_19_Template_button_click_14_listener() {
      const boutique_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.confirmBoutiqueCreation(boutique_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RoyalCenterBoutiquesComponent_div_30_tr_19_Template_button_click_16_listener() {
      const boutique_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.deleteBoutique(boutique_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const boutique_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](boutique_r2.nom);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.getOwnerLabel(boutique_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r2.getStatusClass(boutique_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.getStatusLabel(boutique_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.getBoxCount(boutique_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](12, 8, boutique_r2.createdAt, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !boutique_r2.isPendingFirstActivation || ctx_r2.isBusy(boutique_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r2.isBusy(boutique_r2));
  }
}
function RoyalCenterBoutiquesComponent_div_30_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Aucune boutique.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function RoyalCenterBoutiquesComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 24)(1, "div", 25)(2, "div", 26)(3, "table", 27)(4, "thead")(5, "tr")(6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Boutique");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Locataire");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Statut");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Box");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Creee le");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, RoyalCenterBoutiquesComponent_div_30_tr_19_Template, 18, 11, "tr", 29)(20, RoyalCenterBoutiquesComponent_div_30_tr_20_Template, 3, 0, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.boutiques);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.boutiques.length === 0);
  }
}
class RoyalCenterBoutiquesComponent {
  constructor() {
    this.adminCenterService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_admin_center_service__WEBPACK_IMPORTED_MODULE_4__.AdminCenterService);
    this.notificationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_notification_service__WEBPACK_IMPORTED_MODULE_5__.NotificationService);
    this.cdr = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef);
    this.boutiques = [];
    this.loading = false;
    this.busyIds = new Set();
    this.filters = {
      search: '',
      status: 'all'
    };
  }
  ngOnInit() {
    this.loadBoutiques();
  }
  loadBoutiques() {
    this.loading = true;
    this.adminCenterService.getBoutiques({
      page: 1,
      limit: 200,
      status: this.filters.status,
      nameSearch: this.filters.search
    }).subscribe({
      next: response => {
        this.boutiques = response.items;
        this.loading = false;
        Promise.resolve().then(() => {
          this.cdr.detectChanges();
        });
      },
      error: error => {
        this.loading = false;
        this.notificationService.error('Erreur', error?.error?.message || 'Impossible de charger les boutiques.');
        this.cdr.detectChanges();
      }
    });
  }
  applyFilters() {
    this.loadBoutiques();
  }
  confirmBoutiqueCreation(boutique) {
    if (!boutique.isPendingFirstActivation) return;
    if (!confirm(`Confirmer la creation de la boutique "${boutique.nom}" ?`)) return;
    this.busyIds.add(boutique._id);
    this.adminCenterService.activateBoutique(boutique._id).subscribe({
      next: () => {
        this.busyIds.delete(boutique._id);
        this.notificationService.success('Succes', 'Demande de creation confirmee.');
        this.loadBoutiques();
      },
      error: error => {
        this.busyIds.delete(boutique._id);
        this.notificationService.error('Erreur', error?.error?.message || 'Confirmation impossible.');
      }
    });
  }
  deleteBoutique(boutique) {
    if (!confirm(`Supprimer la boutique "${boutique.nom}" ?`)) return;
    this.busyIds.add(boutique._id);
    this.adminCenterService.deleteBoutique(boutique._id).subscribe({
      next: () => {
        this.busyIds.delete(boutique._id);
        this.notificationService.success('Succes', 'Boutique supprimee.');
        this.loadBoutiques();
      },
      error: error => {
        this.busyIds.delete(boutique._id);
        this.notificationService.error('Erreur', error?.error?.message || 'Suppression impossible.');
      }
    });
  }
  isBusy(boutique) {
    return this.busyIds.has(boutique._id);
  }
  getStatusLabel(boutique) {
    if (boutique.isPendingFirstActivation) return 'En attente';
    return boutique.isActive ? 'Active' : 'Inactive';
  }
  getStatusClass(boutique) {
    if (boutique.isPendingFirstActivation) return 'bg-warning text-dark';
    return boutique.isActive ? 'bg-success' : 'bg-secondary';
  }
  getOwnerLabel(boutique) {
    const owner = boutique.locataire?.[0];
    if (!owner) return '-';
    if (owner.nom && owner.email) return `${owner.nom} (${owner.email})`;
    return owner.nom || owner.email || '-';
  }
  getBoxCount(boutique) {
    return boutique.contratlocation?.boxes?.length || 0;
  }
  static {
    this.ɵfac = function RoyalCenterBoutiquesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || RoyalCenterBoutiquesComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: RoyalCenterBoutiquesComponent,
      selectors: [["app-royal-center-boutiques"]],
      decls: 31,
      vars: 4,
      consts: [[1, "container-fluid", "royal-section"], [1, "row", "mb-4"], [1, "col-12"], [1, "page-title-box", "d-sm-flex", "align-items-center", "justify-content-between"], [1, "mb-sm-0"], [1, "card", "mb-3"], [1, "card-body"], [1, "row", "g-2", "align-items-end"], [1, "col-md-6"], [1, "form-label"], ["type", "text", "placeholder", "Nom boutique", 1, "form-control", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "col-md-4"], [1, "form-select", 3, "ngModelChange", "ngModel"], ["value", "all"], ["value", "pending"], ["value", "active"], ["value", "inactive"], [1, "col-md-2"], [1, "btn", "btn-warning", "w-100", 3, "click"], [1, "ti", "ti-filter"], ["class", "text-center py-5", 4, "ngIf"], ["class", "card", 4, "ngIf"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "card"], [1, "card-body", "p-0"], [1, "table-responsive"], [1, "table", "table-centered", "mb-0"], [1, "text-center"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "fw-semibold"], [1, "badge", 3, "ngClass"], ["title", "Confirmer creation", 1, "btn", "btn-sm", "btn-outline-warning", "me-1", 3, "click", "disabled"], [1, "ti", "ti-check"], ["title", "Supprimer", 1, "btn", "btn-sm", "btn-outline-danger", 3, "click", "disabled"], [1, "ti", "ti-trash"], ["colspan", "6", 1, "text-center", "text-muted", "py-4"]],
      template: function RoyalCenterBoutiquesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Gestion des boutiques - Royal Center");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "label", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Recherche nom");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function RoyalCenterBoutiquesComponent_Template_input_ngModelChange_12_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.filters.search, $event) || (ctx.filters.search = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup.enter", function RoyalCenterBoutiquesComponent_Template_input_keyup_enter_12_listener() {
            return ctx.applyFilters();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 11)(14, "label", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Statut");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "select", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function RoyalCenterBoutiquesComponent_Template_select_ngModelChange_16_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.filters.status, $event) || (ctx.filters.status = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "option", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Toutes");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "option", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "En attente");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "option", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Actives");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "option", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Inactives");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 17)(26, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RoyalCenterBoutiquesComponent_Template_button_click_26_listener() {
            return ctx.applyFilters();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](27, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, " Filtrer ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, RoyalCenterBoutiquesComponent_div_29_Template, 2, 0, "div", 20)(30, RoyalCenterBoutiquesComponent_div_30_Template, 21, 2, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.filters.search);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.filters.status);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe],
      styles: [".royal-section[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.royal-section[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVtby9wYWdlcy9yb3lhbC1jZW50ZXIvYm91dGlxdWVzL3JveWFsLWNlbnRlci1ib3V0aXF1ZXMuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi9XZWIlMjBhdmFuY2UvbTFwMTNtZWFuLUNhbmR5LVJvbWFuY2UvZnJvbnRlbmQvc3JjL2FwcC9kZW1vL3BhZ2VzL3JveWFsLWNlbnRlci9ib3V0aXF1ZXMvcm95YWwtY2VudGVyLWJvdXRpcXVlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTs7RUFFRSxzQkFBQTtBQ0FKIiwic291cmNlc0NvbnRlbnQiOlsiLnJveWFsLXNlY3Rpb24ge1xyXG4gIC50YWJsZSB0aCxcclxuICAudGFibGUgdGQge1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB9XHJcbn1cclxuIiwiLnJveWFsLXNlY3Rpb24gLnRhYmxlIHRoLFxuLnJveWFsLXNlY3Rpb24gLnRhYmxlIHRkIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_demo_pages_royal-center_boutiques_royal-center-boutiques_component_ts.js.map