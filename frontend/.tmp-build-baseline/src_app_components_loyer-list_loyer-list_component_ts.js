"use strict";
(self["webpackChunkfree_version"] = self["webpackChunkfree_version"] || []).push([["src_app_components_loyer-list_loyer-list_component_ts"],{

/***/ 9731:
/*!***************************************************************!*\
  !*** ./src/app/components/loyer-list/loyer-list.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoyerListComponent: () => (/* binding */ LoyerListComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _services_loyer_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/loyer.services */ 1124);
 // <--- important



function LoyerListComponent_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const loyer_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](loyer_r1.boutiqueId.nom);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", loyer_r1.total, " \u20AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", loyer_r1.reste, " \u20AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](loyer_r1.statut);
  }
}
class LoyerListComponent {
  constructor(loyerService) {
    this.loyerService = loyerService;
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
        console.log('loyers backend:', res.data); // debug
        if (res.success && res.data) {
          this.loyers = res.data.map(loyer => ({
            ...loyer,
            boutiqueNom: loyer.boutiqueId?.nom || '—',
            totalPaye: loyer.paiements?.reduce((sum, p) => sum + (p.montant || 0), 0),
            totalReste: loyer.reste || 0,
            lignes: loyer.paiements?.length || 0
          }));
        } else {
          this.loyers = [];
        }
        setTimeout(() => {
          this.loading = false;
        }); // évite ExpressionChangedAfterItHasBeenCheckedError
      },
      error: err => {
        console.error('Erreur lors du chargement des loyers', err);
        setTimeout(() => {
          this.loading = false;
        });
      }
    });
  }
  // Fonctions pour le tableau
  getBoutiqueNameFromLoyer(loyer) {
    return loyer.boutiqueNom;
  }
  getTotalMontantPaye(loyer) {
    return loyer.totalPaye;
  }
  getTotalRestePaye(loyer) {
    return loyer.totalReste;
  }
  // Placeholder pour modals/actions
  openCreateModal() {}
  openEditModal(loyer) {}
  deleteLoyer(loyer) {}
  static {
    this.ɵfac = function LoyerListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LoyerListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_loyer_services__WEBPACK_IMPORTED_MODULE_2__.LoyerService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LoyerListComponent,
      selectors: [["app-loyer-list"]],
      decls: 15,
      vars: 1,
      consts: [["border", "1", "width", "100%"], [4, "ngFor", "ngForOf"]],
      template: function LoyerListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Liste des Loyers");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "table", 0)(3, "thead")(4, "tr")(5, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Boutique");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Montant total");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Reste \u00E0 payer");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Statut");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, LoyerListComponent_tr_14_Template, 9, 4, "tr", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.loyers);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_components_loyer-list_loyer-list_component_ts.js.map