"use strict";
(self["webpackChunkfree_version"] = self["webpackChunkfree_version"] || []).push([["src_app_demo_pages_royal-center_loyers_royal-center-loyers_component_ts"],{

/***/ 6615:
/*!*********************************************************************************!*\
  !*** ./src/app/demo/pages/royal-center/loyers/royal-center-loyers.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoyalCenterLoyersComponent: () => (/* binding */ RoyalCenterLoyersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _services_loyer_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/loyer.services */ 1124);





function RoyalCenterLoyersComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function RoyalCenterLoyersComponent_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Aucun loyer enregistr\u00E9. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function RoyalCenterLoyersComponent_div_9_div_2_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "td", 17)(15, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RoyalCenterLoyersComponent_div_9_div_2_tr_19_Template_button_click_15_listener() {
      const loyer_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.openEditModal(loyer_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RoyalCenterLoyersComponent_div_9_div_2_tr_19_Template_button_click_17_listener() {
      const loyer_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.deleteLoyer(loyer_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const loyer_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.getBoutiqueName(loyer_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](loyer_r2.lignes);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 5, ctx_r2.getTotalMontantPaye(loyer_r2)), " Ar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 7, ctx_r2.getTotalRestePaye(loyer_r2)), " Ar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](13, 9, loyer_r2.updatedAt, "dd/MM/yyyy HH:mm"));
  }
}
function RoyalCenterLoyersComponent_div_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 13)(1, "div", 14)(2, "div", 15)(3, "table", 16)(4, "thead")(5, "tr")(6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Boutique");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Lignes");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Montant pay\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Reste \u00E0 payer");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Maj");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, RoyalCenterLoyersComponent_div_9_div_2_tr_19_Template, 19, 12, "tr", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.loyers);
  }
}
function RoyalCenterLoyersComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RoyalCenterLoyersComponent_div_9_div_1_Template, 2, 0, "div", 10)(2, RoyalCenterLoyersComponent_div_9_div_2_Template, 20, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.loyers.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.loyers.length > 0);
  }
}
class RoyalCenterLoyersComponent {
  constructor(loyerService) {
    this.loyerService = loyerService;
    this.cdr = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef);
    this.loyers = [];
    this.loading = false;
  }
  ngOnInit() {
    this.loadLoyers();
  }
  loadLoyers() {
    this.loading = true;
    this.loyerService.getAll().subscribe({
      next: res => {
        if (res.success && res.data) {
          // On garde toutes les infos nécessaires pour le HTML
          this.loyers = res.data.map(loyer => ({
            ...loyer,
            boutiqueNom: loyer.boutiqueId?.nom || '—',
            totalPaye: loyer.paiements?.reduce((sum, p) => sum + (p.montant || 0), 0) || 0,
            totalReste: loyer.reste || 0,
            lignes: loyer.paiements?.length || 0,
            details: loyer.details || []
          }));
          Promise.resolve().then(() => {
            this.cdr.detectChanges();
          });
        } else {
          this.loyers = [];
          this.cdr.detectChanges();
        }
        this.loading = false;
      },
      error: err => {
        console.error('Erreur lors du chargement des loyers', err);
        this.loyers = [];
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }
  // Fonctions pour le tableau
  getBoutiqueName(loyer) {
    return loyer.boutiqueNom;
  }
  getTotalMontantPaye(loyer) {
    return loyer.totalPaye;
  }
  getTotalRestePaye(loyer) {
    return loyer.totalReste;
  }
  // Placeholder pour modals/actions
  openCreateModal() {
    console.log('Créer un loyer');
  }
  openEditModal(loyer) {
    console.log('Modifier loyer', loyer);
  }
  deleteLoyer(loyer) {
    console.log('Supprimer loyer', loyer);
  }
  static {
    this.ɵfac = function RoyalCenterLoyersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || RoyalCenterLoyersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_loyer_services__WEBPACK_IMPORTED_MODULE_4__.LoyerService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: RoyalCenterLoyersComponent,
      selectors: [["app-royal-center-loyers"]],
      decls: 10,
      vars: 2,
      consts: [[1, "container-fluid", "royal-section"], [1, "row", "mb-4"], [1, "col-12"], [1, "page-title-box", "d-sm-flex", "align-items-center", "justify-content-between"], [1, "mb-sm-0"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["class", "text-center py-5", 4, "ngIf"], [4, "ngIf"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], ["class", "text-center text-muted py-4", 4, "ngIf"], ["class", "card", 4, "ngIf"], [1, "text-center", "text-muted", "py-4"], [1, "card"], [1, "card-body", "p-0"], [1, "table-responsive"], [1, "table", "table-centered", "mb-0"], [1, "text-center"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-sm", "btn-outline-primary", "me-1", 3, "click"], [1, "ti", "ti-pencil"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [1, "ti", "ti-trash"]],
      template: function RoyalCenterLoyersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Loyers - Royal Center");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RoyalCenterLoyersComponent_Template_button_click_6_listener() {
            return ctx.openCreateModal();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " + Ajouter un loyer ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, RoyalCenterLoyersComponent_div_8_Template, 2, 0, "div", 6)(9, RoyalCenterLoyersComponent_div_9_Template, 3, 2, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe],
      styles: [".royal-section[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.royal-section[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n\n.detail-block[_ngcontent-%COMP%] {\n  border: 1px solid #e9ecef;\n  border-radius: 0.5rem;\n  padding: 0.75rem;\n  background: #fafbfd;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVtby9wYWdlcy9yb3lhbC1jZW50ZXIvbG95ZXJzL3JveWFsLWNlbnRlci1sb3llcnMuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi9XZWIlMjBhdmFuY2UvbTFwMTNtZWFuLUNhbmR5LVJvbWFuY2UvZnJvbnRlbmQvc3JjL2FwcC9kZW1vL3BhZ2VzL3JveWFsLWNlbnRlci9sb3llcnMvcm95YWwtY2VudGVyLWxveWVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTs7RUFFRSxzQkFBQTtBQ0FKOztBRElBO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNERiIsInNvdXJjZXNDb250ZW50IjpbIi5yb3lhbC1zZWN0aW9uIHtcclxuICAudGFibGUgdGgsXHJcbiAgLnRhYmxlIHRkIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfVxyXG59XHJcblxyXG4uZGV0YWlsLWJsb2NrIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTllY2VmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICBwYWRkaW5nOiAwLjc1cmVtO1xyXG4gIGJhY2tncm91bmQ6ICNmYWZiZmQ7XHJcbn1cclxuIiwiLnJveWFsLXNlY3Rpb24gLnRhYmxlIHRoLFxuLnJveWFsLXNlY3Rpb24gLnRhYmxlIHRkIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmRldGFpbC1ibG9jayB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOWVjZWY7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgcGFkZGluZzogMC43NXJlbTtcbiAgYmFja2dyb3VuZDogI2ZhZmJmZDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_demo_pages_royal-center_loyers_royal-center-loyers_component_ts.js.map