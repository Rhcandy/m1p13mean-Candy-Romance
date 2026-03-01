"use strict";
(self["webpackChunkfree_version"] = self["webpackChunkfree_version"] || []).push([["main"],{

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 3305);
/* harmony import */ var _theme_shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme/shared/components/spinner/spinner.component */ 5639);
/* harmony import */ var _components_notification_notification_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/notification/notification.component */ 8705);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6124);

// project import



class AppComponent {
  constructor() {
    this.title = 'm1p13mean-candy-romance ';
  }
  static {
    this.ɵfac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-spinner");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-notification");
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterOutlet, _theme_shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_1__.SpinnerComponent, _components_notification_notification_component__WEBPACK_IMPORTED_MODULE_2__.NotificationComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 472:
/*!**************************************************!*\
  !*** ./src/app/interceptors/auth.interceptor.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authInterceptor: () => (/* binding */ authInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3305);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 1318);



const authInterceptor = (req, next) => {
  const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router);
  const token = localStorage.getItem('auth_token');
  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  return next(req).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
    if (error.status === 401) {
      localStorage.removeItem('auth_token');
      localStorage.removeItem('current_user');
      router.navigate(['/login']);
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => error);
  }));
};

/***/ }),

/***/ 700:
/*!**********************************************!*\
  !*** ./src/app/services/boutique.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BoutiqueService: () => (/* binding */ BoutiqueService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8764);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api.service */ 3366);




class BoutiqueService {
  constructor(api) {
    this.api = api;
    this.boutiqueStatusKey = 'boutique_status_cache';
  }
  getAllBoutiques() {
    return this.api.get('/boutiques?isActive=true').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => response?.items || []));
  }
  getMyBoutique() {
    return this.api.get('/boutiques/my-boutique').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(response => {
      if (response?.success && response.data) {
        this.setCachedBoutiqueStatus({
          hasBoutique: true,
          isActive: !!response.data.isActive,
          boutiqueId: response.data._id
        });
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      if (error?.status === 404) {
        this.setCachedBoutiqueStatus({
          hasBoutique: false,
          isActive: false,
          boutiqueId: null
        });
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => error);
    }));
  }
  refreshMyBoutiqueStatus() {
    return this.api.get('/boutiques/my-boutique').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => {
      const status = {
        hasBoutique: !!response?.data,
        isActive: !!response?.data?.isActive,
        boutiqueId: response?.data?._id || null
      };
      this.setCachedBoutiqueStatus(status);
      return status;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      if (error?.status === 404) {
        const status = {
          hasBoutique: false,
          isActive: false,
          boutiqueId: null
        };
        this.setCachedBoutiqueStatus(status);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(status);
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => error);
    }));
  }
  getCachedBoutiqueStatus() {
    const raw = localStorage.getItem(this.boutiqueStatusKey);
    if (!raw) {
      return {
        hasBoutique: false,
        isActive: false,
        boutiqueId: null
      };
    }
    try {
      const parsed = JSON.parse(raw);
      return {
        hasBoutique: !!parsed.hasBoutique,
        isActive: !!parsed.isActive,
        boutiqueId: parsed.boutiqueId || null
      };
    } catch {
      return {
        hasBoutique: false,
        isActive: false,
        boutiqueId: null
      };
    }
  }
  setCachedBoutiqueStatus(status) {
    localStorage.setItem(this.boutiqueStatusKey, JSON.stringify({
      hasBoutique: !!status.hasBoutique,
      isActive: !!status.isActive,
      boutiqueId: status.boutiqueId || null
    }));
  }
  clearCachedBoutiqueStatus() {
    localStorage.removeItem(this.boutiqueStatusKey);
  }
  hasActiveBoutiqueCached() {
    const status = this.getCachedBoutiqueStatus();
    return status.hasBoutique && status.isActive;
  }
  updateMyBoutique(boutiqueData) {
    return this.api.put('/boutiques/my-boutique', boutiqueData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(response => {
      if (response?.success && response.data) {
        this.setCachedBoutiqueStatus({
          hasBoutique: true,
          isActive: !!response.data.isActive,
          boutiqueId: response.data._id
        });
      }
    }));
  }
  createBoutique(payload) {
    return this.api.post('/boutiques', payload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(response => {
      if (response?.success && response.data) {
        this.setCachedBoutiqueStatus({
          hasBoutique: true,
          isActive: !!response.data.isActive,
          boutiqueId: response.data._id
        });
      }
    }));
  }
  activateMyBoutique() {
    return this.api.patch('/boutiques/my-boutique/activate', {}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(response => {
      if (response?.success && response.data) {
        this.setCachedBoutiqueStatus({
          hasBoutique: true,
          isActive: !!response.data.isActive,
          boutiqueId: response.data._id
        });
      }
    }));
  }
  deactivateMyBoutique() {
    return this.api.patch('/boutiques/my-boutique/deactivate', {}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(response => {
      if (response?.success && response.data) {
        this.setCachedBoutiqueStatus({
          hasBoutique: true,
          isActive: !!response.data.isActive,
          boutiqueId: response.data._id
        });
      }
    }));
  }
  quitterCentre() {
    return this.api.delete('/boutiques/my-boutique/quitter-centre').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => {
      this.setCachedBoutiqueStatus({
        hasBoutique: false,
        isActive: false,
        boutiqueId: null
      });
    }));
  }
  getAvailableBoxes(params) {
    const query = new URLSearchParams();
    if (params?.centreId) query.append('centreId', params.centreId);
    if (params?.typeBoxId) query.append('typeBoxId', params.typeBoxId);
    const suffix = query.toString() ? `?${query.toString()}` : '';
    return this.api.get(`/boxes/disponibles${suffix}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => response?.data || []));
  }
  uploadLogo(idmyboutique, file) {
    const formData = new FormData();
    formData.append('photo', file);
    return this.api.putFile(`/boutiques/${idmyboutique}/logo`, formData);
  }
  static {
    this.ɵfac = function BoutiqueService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BoutiqueService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_6__.ApiService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
      token: BoutiqueService,
      factory: BoutiqueService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 939:
/*!*****************************************************************************!*\
  !*** ./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavRightComponent: () => (/* binding */ NavRightComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 6264);
/* harmony import */ var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/theme/shared/shared.module */ 2389);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ 4796);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var ngx_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-scrollbar */ 4091);

// third party import






class NavRightComponent {
  constructor(authService) {
    this.authService = authService;
    this.currentUser = null;
    this.userImage = 'assets/images/user/user.png';
    this.greeting = 'Hey';
    this.userName = 'John Doe';
    this.userRole = 'Project Admin';
  }
  ngOnInit() {
    this.authService.currentUser$.subscribe(user => {
      if (user) {
        this.currentUser = user;
        this.userName = user.nom || 'John Doe';
        this.userImage = user.pdppath ? `${user.pdppath}` : 'assets/images/user/user.png';
        // Définir le rôle en fonction du roleName
        switch (user.role) {
          case 'user':
            this.userRole = 'Client';
            break;
          case 'admin_boutique':
            this.userRole = 'Shop Owner';
            break;
          case 'admin_center':
            this.userRole = 'Royal Center Admin';
            break;
          case 'admin_centre':
            this.userRole = 'Royal Center Admin';
            break;
          case 'super_admin':
            this.userRole = 'Project Admin';
            break;
          default:
            this.userRole = 'User';
        }
        // Définir le salutation en fonction de l'heure
        const hour = new Date().getHours();
        if (hour < 12) {
          this.greeting = 'Good Morning';
        } else if (hour < 17) {
          this.greeting = 'Good Afternoon';
        } else {
          this.greeting = 'Good Evening';
        }
      } else {
        this.currentUser = null;
        this.userName = 'John Doe';
        this.userImage = 'assets/images/user/user.png';
        this.userRole = 'Project Admin';
        this.greeting = 'Hey';
      }
    });
  }
  logout() {
    this.authService.logout();
  }
  static {
    this.ɵfac = function NavRightComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NavRightComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: NavRightComponent,
      selectors: [["app-nav-right"]],
      decls: 38,
      vars: 5,
      consts: [[1, "ms-auto"], [1, "list-unstyled"], [1, "dropdown", "pc-h-item"], ["data-bs-toggle", "dropdown", "href", "javascript:", "routerLink", "/panier", 1, "pc-head-link", "head-link-secondary", "dropdown-toggle", "arrow-none", "me-0"], [1, "ph-duotone", "ph-shopping-cart"], ["data-bs-toggle", "dropdown", "href", "javascript:", "routerLink", "/wishlist", 1, "pc-head-link", "head-link-error", "dropdown-toggle", "arrow-none", "me-0"], [1, "ph-duotone", "ph-heart"], ["ngbDropdown", "", 1, "dropdown", "pc-h-item", "header-user-profile"], ["data-bs-toggle", "dropdown", "href", "javascript:", "ngbDropdownToggle", "", 1, "pc-head-link", "head-link-primary", "dropdown-toggle", "arrow-none", "me-0"], [1, "user-avtar", 3, "src", "alt"], [1, "ti", "ti-settings"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-user-profile", "dropdown-menu-end", "pc-h-dropdown"], [1, "dropdown-header"], [1, "small", "text-muted"], [1, "text-muted"], ["visibility", "hover", 2, "height", "calc(50vh - 140px)"], ["routerLink", "/profile", 1, "dropdown-item"], [1, "ti", "ti-user"], ["routerLink", "/commandes", 1, "dropdown-item"], [1, "dropdown-item", 3, "click"], [1, "ti", "ti-logout"]],
      template: function NavRightComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "ul", 1)(2, "li")(3, "div", 2)(4, "a", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "li")(7, "div", 2)(8, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li")(11, "div", 7)(12, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "img", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 11)(17, "div", 12)(18, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "p", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "hr");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "ng-scrollbar", 15)(26, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Mon Profile");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "a", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Mes Commandes");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavRightComponent_Template_a_click_34_listener() {
            return ctx.logout();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "i", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Se deconnecter");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.userImage, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", ctx.userName);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.greeting, ", ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.userName);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.userRole);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterLink, src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdownMenu, ngx_scrollbar__WEBPACK_IMPORTED_MODULE_5__.NgScrollbar],
      styles: [".me-0[_ngcontent-%COMP%] {\n  margin: 0 0 0 16px !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGhlbWUvbGF5b3V0L2FkbWluL25hdi1iYXIvbmF2LXJpZ2h0L25hdi1yaWdodC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uL1dlYiUyMGF2YW5jZS9tMXAxM21lYW4tQ2FuZHktUm9tYW5jZS9mcm9udGVuZC9zcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXYtYmFyL25hdi1yaWdodC9uYXYtcmlnaHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2QkFBQTtBQ0NGIiwic291cmNlc0NvbnRlbnQiOlsiLm1lLTAge1xyXG4gIG1hcmdpbjogMCAwIDAgMTZweCAhaW1wb3J0YW50O1xyXG59XHJcbiIsIi5tZS0wIHtcbiAgbWFyZ2luOiAwIDAgMCAxNnB4ICFpbXBvcnRhbnQ7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 1158:
/*!**************************************************************************************************!*\
  !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavCollapseComponent: () => (/* binding */ NavCollapseComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6223);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 6264);
/* harmony import */ var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/theme/shared/shared.module */ 2389);
/* harmony import */ var _nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../nav-item/nav-item.component */ 9722);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 6124);
// Angular import








const _c0 = () => ["active"];
function NavCollapseComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx_r1.item().icon);
  }
}
function NavCollapseComponent_Conditional_0_For_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-nav-item", 5);
  }
  if (rf & 2) {
    const items_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("item", items_r3);
  }
}
function NavCollapseComponent_Conditional_0_For_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-nav-collapse", 5);
  }
  if (rf & 2) {
    const items_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("item", items_r3);
  }
}
function NavCollapseComponent_Conditional_0_For_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditionalCreate"](0, NavCollapseComponent_Conditional_0_For_7_Conditional_0_Template, 1, 1, "app-nav-item", 5)(1, NavCollapseComponent_Conditional_0_For_7_Conditional_1_Template, 1, 1, "app-nav-collapse", 5);
  }
  if (rf & 2) {
    const items_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](items_r3.type === "item" ? 0 : items_r3.type === "collapse" ? 1 : -1);
  }
}
function NavCollapseComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li", 0)(1, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function NavCollapseComponent_Conditional_0_Template_a_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.navCollapse($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditionalCreate"](2, NavCollapseComponent_Conditional_0_Conditional_2_Template, 2, 2, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "ul", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeaterCreate"](6, NavCollapseComponent_Conditional_0_For_7_Template, 2, 1, null, null, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](6, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](7, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](ctx_r1.item().icon ? 2 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.item().title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](8, _c0))("ngClass", ctx_r1.item().classes);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeater"](ctx_r1.item().children);
  }
}
class NavCollapseComponent {
  constructor() {
    this.location = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_3__.Location);
    // public props
    this.item = _angular_core__WEBPACK_IMPORTED_MODULE_1__.input.required(...(ngDevMode ? [{
      debugName: "item"
    }] : []));
    this.windowWidth = window.innerWidth;
    this.current_url = ''; // Add current URL property
  }
  ngOnInit() {
    this.current_url = this.location.path();
    // eslint-disable-next-line
    //@ts-ignore
    const baseHref = this.location['_baseHref'] || ''; // Use baseHref if necessary
    this.current_url = baseHref + this.current_url;
    // Timeout to allow DOM to fully render before checking for the links
    setTimeout(() => {
      const links = document.querySelectorAll('a.nav-link');
      links.forEach(link => {
        if (link.getAttribute('href') === this.current_url) {
          let parent = link.parentElement;
          while (parent && parent.classList) {
            if (parent.classList.contains('coded-hasmenu')) {
              parent.classList.add('coded-trigger');
              parent.classList.add('active');
            }
            parent = parent.parentElement;
          }
        }
      });
    }, 0);
  }
  // Method to handle the collapse of the navigation menu
  navCollapse(e) {
    let parent = e.target;
    if (parent?.tagName === 'SPAN') {
      parent = parent.parentElement;
    }
    parent = parent.parentElement;
    const sections = document.querySelectorAll('.coded-hasmenu');
    for (let i = 0; i < sections.length; i++) {
      if (sections[i] !== parent) {
        sections[i].classList.remove('coded-trigger');
      }
    }
    let first_parent = parent.parentElement;
    let pre_parent = parent.parentElement.parentElement;
    if (first_parent.classList.contains('coded-hasmenu')) {
      do {
        first_parent.classList.add('coded-trigger');
        first_parent = first_parent.parentElement.parentElement;
      } while (first_parent.classList.contains('coded-hasmenu'));
    } else if (pre_parent.classList.contains('coded-submenu')) {
      do {
        pre_parent.parentElement?.classList.add('coded-trigger');
        pre_parent = pre_parent.parentElement.parentElement.parentElement;
      } while (pre_parent.classList.contains('coded-submenu'));
    }
    parent.classList.toggle('coded-trigger');
  }
  static {
    this.ɵfac = function NavCollapseComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NavCollapseComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: NavCollapseComponent,
      selectors: [["app-nav-collapse"]],
      inputs: {
        item: [1, "item"]
      },
      decls: 1,
      vars: 1,
      consts: [["data-username", "Berry Dashboard", 1, "nav-item", "coded-hasmenu", 3, "routerLinkActive"], ["href", "javascript:", 1, "nav-link", 3, "click", "routerLinkActive"], [1, "coded-micon"], [1, "coded-mtext"], [1, "coded-submenu", 3, "routerLinkActive", "ngClass"], [3, "item"]],
      template: function NavCollapseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditionalCreate"](0, NavCollapseComponent_Conditional_0_Template, 8, 9, "li", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](!ctx.item().hidden ? 0 : -1);
        }
      },
      dependencies: [NavCollapseComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive, _nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_6__.NavItemComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 1620:
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthGuard: () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ 4796);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3305);



class AuthGuard {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate() {
    if (this.authService.isAuthenticated) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
  static {
    this.ɵfac = function AuthGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 2389:
/*!***********************************************!*\
  !*** ./src/app/theme/shared/shared.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedModule: () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/card/card.component */ 3413);
/* harmony import */ var ngx_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-scrollbar */ 4091);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 6124);


// project import

// third party

// bootstrap import


class SharedModule {
  static {
    this.ɵfac = function SharedModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SharedModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdownModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNavModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbCollapseModule, ngx_scrollbar__WEBPACK_IMPORTED_MODULE_3__.NgScrollbarModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdownModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNavModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbCollapseModule, ngx_scrollbar__WEBPACK_IMPORTED_MODULE_3__.NgScrollbarModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](SharedModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _components_card_card_component__WEBPACK_IMPORTED_MODULE_2__.CardComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdownModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNavModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbCollapseModule, ngx_scrollbar__WEBPACK_IMPORTED_MODULE_3__.NgScrollbarModule],
    exports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _components_card_card_component__WEBPACK_IMPORTED_MODULE_2__.CardComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdownModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNavModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbCollapseModule, ngx_scrollbar__WEBPACK_IMPORTED_MODULE_3__.NgScrollbarModule]
  });
})();

/***/ }),

/***/ 3366:
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApiService: () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 698);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1817);




class ApiService {
  constructor(http) {
    this.http = http;
    this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl;
  }
  get(endpoint, options) {
    return this.http.get(`${this.baseUrl}${endpoint}`, options);
  }
  post(endpoint, body, options) {
    return this.http.post(`${this.baseUrl}${endpoint}`, body, options);
  }
  put(endpoint, body, options) {
    return this.http.put(`${this.baseUrl}${endpoint}`, body, options);
  }
  patch(endpoint, body, options) {
    return this.http.patch(`${this.baseUrl}${endpoint}`, body, options);
  }
  delete(endpoint, body, options) {
    const httpOptions = body ? {
      body,
      ...options
    } : options;
    return this.http.delete(`${this.baseUrl}${endpoint}`, httpOptions);
  }
  // Méthode spécifique pour l'envoi de fichiers
  postFile(endpoint, formData) {
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders();
    // Ne pas définir Content-Type pour FormData, le navigateur le fera automatiquement avec boundary
    return this.http.post(`${this.baseUrl}${endpoint}`, formData, {
      headers
    });
  }
  putFile(endpoint, formData) {
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders();
    // Ne pas définir Content-Type pour FormData, le navigateur le fera automatiquement avec boundary
    return this.http.put(`${this.baseUrl}${endpoint}`, formData, {
      headers
    });
  }
  static {
    this.ɵfac = function ApiService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: ApiService,
      factory: ApiService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 3413:
/*!****************************************************************!*\
  !*** ./src/app/theme/shared/components/card/card.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardComponent: () => (/* binding */ CardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6124);

const _c0 = ["*"];
function CardComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.cardTitle);
  }
}
class CardComponent {
  static {
    this.ɵfac = function CardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CardComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CardComponent,
      selectors: [["app-card"]],
      inputs: {
        cardTitle: "cardTitle",
        customHeader: "customHeader"
      },
      ngContentSelectors: _c0,
      decls: 5,
      vars: 1,
      consts: [[1, "card"], [1, "card-header"], [1, "card-block"]],
      template: function CardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditionalCreate"](2, CardComponent_Conditional_2_Template, 2, 1, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementStart"](3, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdomElementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](!ctx.customHeader ? 2 : -1);
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 4040:
/*!*******************************!*\
  !*** ./src/app/app-config.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BerryConfig: () => (/* binding */ BerryConfig)
/* harmony export */ });
class BerryConfig {
  static {
    this.isCollapse_menu = false;
  }
  static {
    this.font_family = 'Roboto';
  } // Roboto, poppins, inter
}

/***/ }),

/***/ 4094:
/*!********************************************************************************************!*\
  !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavGroupComponent: () => (/* binding */ NavGroupComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6223);
/* harmony import */ var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/theme/shared/shared.module */ 2389);
/* harmony import */ var _nav_collapse_nav_collapse_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../nav-collapse/nav-collapse.component */ 1158);
/* harmony import */ var _nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../nav-item/nav-item.component */ 9722);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 6124);
// Angular import







function NavGroupComponent_Conditional_0_For_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-nav-collapse", 2);
  }
  if (rf & 2) {
    const items_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("item", items_r1);
  }
}
function NavGroupComponent_Conditional_0_For_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-nav-item", 2);
  }
  if (rf & 2) {
    const items_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("item", items_r1);
  }
}
function NavGroupComponent_Conditional_0_For_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditionalCreate"](0, NavGroupComponent_Conditional_0_For_4_Conditional_0_Template, 1, 1, "app-nav-collapse", 2)(1, NavGroupComponent_Conditional_0_For_4_Conditional_1_Template, 1, 1, "app-nav-item", 2);
  }
  if (rf & 2) {
    const items_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](items_r1.type === "collapse" ? 0 : items_r1.type === "item" ? 1 : -1);
  }
}
function NavGroupComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li", 0)(1, "label", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeaterCreate"](3, NavGroupComponent_Conditional_0_For_4_Template, 2, 1, null, null, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeaterTrackByIdentity"]);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx_r1.item().classes);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("for", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinterpolate"](ctx_r1.item().id));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.item().title);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrepeater"](ctx_r1.item().children);
  }
}
class NavGroupComponent {
  constructor() {
    this.location = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_3__.Location);
    // public props
    this.item = _angular_core__WEBPACK_IMPORTED_MODULE_1__.input.required(...(ngDevMode ? [{
      debugName: "item"
    }] : []));
  }
  // Life cycle events
  ngOnInit() {
    this.current_url = this.location.path();
    //eslint-disable-next-line
    //@ts-ignore
    const baseHref = this.location['_baseHref'] || '';
    this.current_url = baseHref + this.current_url;
    // Use a more reliable way to find and update the active group
    setTimeout(() => {
      const links = document.querySelectorAll('a.nav-link');
      links.forEach(link => {
        if (link.getAttribute('href') === this.current_url) {
          let parent = link.parentElement;
          while (parent && parent.classList) {
            if (parent.classList.contains('coded-hasmenu')) {
              parent.classList.add('coded-trigger');
              parent.classList.add('active');
            }
            parent = parent.parentElement;
          }
        }
      });
    }, 0);
  }
  static {
    this.ɵfac = function NavGroupComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NavGroupComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: NavGroupComponent,
      selectors: [["app-nav-group"]],
      inputs: {
        item: [1, "item"]
      },
      decls: 1,
      vars: 1,
      consts: [[1, "nav-item", "coded-menu-caption", 3, "ngClass"], [3, "for"], [3, "item"]],
      template: function NavGroupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditionalCreate"](0, NavGroupComponent_Conditional_0_Template, 5, 4);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](!ctx.item().hidden ? 0 : -1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule, _nav_collapse_nav_collapse_component__WEBPACK_IMPORTED_MODULE_5__.NavCollapseComponent, _nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_6__.NavItemComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 6264);
/* harmony import */ var _theme_layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme/layout/admin/admin.component */ 4613);
/* harmony import */ var _theme_layout_guest_guest_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme/layout/guest/guest.component */ 5617);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guards/auth.guard */ 1620);
/* harmony import */ var _guards_role_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards/role.guard */ 5458);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 6124);







const routes = [{
  path: '',
  component: _theme_layout_guest_guest_component__WEBPACK_IMPORTED_MODULE_2__.GuestComponent,
  children: [{
    path: '',
    redirectTo: '/landing',
    pathMatch: 'full'
  }, {
    path: 'landing',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_map_leaflet-map_component_ts"), __webpack_require__.e("src_app_demo_pages_landing_landing_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./demo/pages/landing/landing.component */ 1929)).then(c => c.LandingComponent)
  }, {
    path: 'login',
    loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_demo_pages_authentication_login_login_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./demo/pages/authentication/login/login.component */ 5994)).then(c => c.LoginComponent)
  }, {
    path: 'register',
    loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_demo_pages_authentication_register_register_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./demo/pages/authentication/register/register.component */ 1713)).then(c => c.RegisterComponent)
  }, {
    path: 'forgot-password',
    loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_demo_pages_authentication_forgot-password_forgot-password_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./demo/pages/authentication/forgot-password/forgot-password.component */ 5886)).then(c => c.ForgotPasswordComponent)
  }, {
    path: 'reset-password',
    loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_demo_pages_authentication_reset-password_reset-password_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./demo/pages/authentication/reset-password/reset-password.component */ 6246)).then(c => c.ResetPasswordComponent)
  }]
}, {
  path: '',
  component: _theme_layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_1__.AdminComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
  children: [{
    path: '',
    redirectTo: '/landing',
    pathMatch: 'full'
  }, {
    path: 'landing',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_map_leaflet-map_component_ts"), __webpack_require__.e("src_app_demo_pages_landing_landing_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./demo/pages/landing/landing.component */ 1929)).then(c => c.LandingComponent),
    canActivate: [_guards_role_guard__WEBPACK_IMPORTED_MODULE_4__.RoleGuard]
  }, {
    path: 'default',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_demo_dashboard_default_default_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./demo/dashboard/default/default.component */ 6193)).then(c => c.DefaultComponent)
  }, {
    path: 'profile',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_demo_pages_profile_profile_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./demo/pages/profile/profile.component */ 6909)).then(c => c.ProfileComponent)
  }, {
    path: 'produits',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_demo_pages_produits_produits_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./demo/pages/produits/produits.component */ 6127)).then(c => c.ProduitsComponent)
  }, {
    path: 'boutiques',
    loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_demo_pages_boutiques_boutiques_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./demo/pages/boutiques/boutiques.component */ 9265)).then(c => c.BoutiquesComponent)
  }, {
    path: 'product/:id',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_panier_service_ts-src_app_services_product_service_ts-node_modules_r-8ab4be"), __webpack_require__.e("common"), __webpack_require__.e("src_app_demo_pages_product-detail_product-detail-page_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./demo/pages/product-detail/product-detail-page.component */ 7071)).then(c => c.ProductDetailPageComponent)
  }, {
    path: 'panier',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_panier_service_ts-src_app_services_product_service_ts-node_modules_r-8ab4be"), __webpack_require__.e("src_app_demo_pages_panier_panier_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./demo/pages/panier/panier.component */ 1778)).then(c => c.PanierComponent)
  }, {
    path: 'wishlist',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_demo_pages_wishlist_wishlist_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./demo/pages/wishlist/wishlist.component */ 3521)).then(c => c.WishlistComponent)
  }, {
    path: 'checkout',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_map_leaflet-map_component_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_demo_pages_checkout_checkout_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./demo/pages/checkout/checkout.component */ 4879)).then(c => c.CheckoutComponent)
  }, {
    path: 'confirmation-commande',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_panier_service_ts-node_modules_jspdf_dist_jspdf_es_min_js-node_modul-a61b81"), __webpack_require__.e("src_app_demo_pages_confirmation-commande_confirmation-commande_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./demo/pages/confirmation-commande/confirmation-commande.component */ 1149)).then(c => c.ConfirmationCommandeComponent)
  }, {
    path: 'mes-commandes',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_panier_service_ts-node_modules_jspdf_dist_jspdf_es_min_js-node_modul-a61b81"), __webpack_require__.e("src_app_demo_pages_mes-commandes_mes-commandes_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./demo/pages/mes-commandes/mes-commandes.component */ 3921)).then(c => c.MesCommandesComponent)
  }, {
    path: 'commandes',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_panier_service_ts-node_modules_jspdf_dist_jspdf_es_min_js-node_modul-a61b81"), __webpack_require__.e("src_app_demo_pages_mes-commandes_mes-commandes_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./demo/pages/mes-commandes/mes-commandes.component */ 3921)).then(c => c.MesCommandesComponent)
  }, {
    path: 'commande/:id',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_demo_pages_commande-detail_commande-detail_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./demo/pages/commande-detail/commande-detail.component */ 4229)).then(c => c.CommandeDetailComponent)
  }, {
    path: 'boutique',
    children: [{
      path: 'informations',
      loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_demo_pages_boutique_informations_boutique-informations_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./demo/pages/boutique/informations/boutique-informations.component */ 311)).then(c => c.BoutiqueInformationsComponent)
    }, {
      path: 'boxes',
      loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_demo_pages_boutique_boxes-disponibles_boxes-disponibles_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./demo/pages/boutique/boxes-disponibles/boxes-disponibles.component */ 4864)).then(c => c.BoxesDisponiblesComponent)
    }, {
      path: 'produits',
      loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_demo_pages_boutique_produits_boutique-produits_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./demo/pages/boutique/produits/boutique-produits.component */ 4555)).then(c => c.BoutiqueProduitsComponent)
    }, {
      path: 'promotions',
      loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_demo_pages_boutique_promotions_boutique-promotions_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./demo/pages/boutique/promotions/boutique-promotions.component */ 123)).then(c => c.BoutiquePromotionsComponent)
    }, {
      path: 'commandes',
      loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_demo_pages_boutique_commandes_boutique-commandes_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./demo/pages/boutique/commandes/boutique-commandes.component */ 3333)).then(c => c.BoutiqueCommandesComponent)
    }]
  }, {
    path: 'royal-center',
    children: [{
      path: 'loyers',
      loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_demo_pages_royal-center_loyers_royal-center-loyers_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./demo/pages/royal-center/loyers/royal-center-loyers.component */ 6615)).then(c => c.RoyalCenterLoyersComponent)
    }, {
      path: 'boxes',
      loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_demo_pages_royal-center_boxes_royal-center-boxes_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./demo/pages/royal-center/boxes/royal-center-boxes.component */ 6183)).then(c => c.RoyalCenterBoxesComponent)
    }, {
      path: 'boutiques',
      loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_demo_pages_royal-center_boutiques_royal-center-boutiques_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./demo/pages/royal-center/boutiques/royal-center-boutiques.component */ 259)).then(c => c.RoyalCenterBoutiquesComponent)
    }]
  }]
}, {
  path: '',
  component: _theme_layout_guest_guest_component__WEBPACK_IMPORTED_MODULE_2__.GuestComponent,
  children: [{
    path: 'login',
    loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_demo_pages_authentication_login_login_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./demo/pages/authentication/login/login.component */ 5994)).then(c => c.LoginComponent)
  }, {
    path: 'register',
    loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_demo_pages_authentication_register_register_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./demo/pages/authentication/register/register.component */ 1713)).then(c => c.RegisterComponent)
  }, {
    path: 'forgot-password',
    loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_demo_pages_authentication_forgot-password_forgot-password_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./demo/pages/authentication/forgot-password/forgot-password.component */ 5886)).then(c => c.ForgotPasswordComponent)
  }, {
    path: 'reset-password',
    loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_demo_pages_authentication_reset-password_reset-password_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./demo/pages/authentication/reset-password/reset-password.component */ 6246)).then(c => c.ResetPasswordComponent)
  }]
}, {
  path: 'loyers',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_components_loyer-list_loyer-list_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/loyer-list/loyer-list.component */ 9731)).then(m => m.LoyerListComponent)
}];
class AppRoutingModule {
  static {
    this.ɵfac = function AppRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  });
})();

/***/ }),

/***/ 4322:
/*!*************************************************************!*\
  !*** ./src/app/theme/shared/components/spinner/spinkits.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Spinkit: () => (/* binding */ Spinkit)
/* harmony export */ });
const Spinkit = {
  skChasingDots: 'sk-chasing-dots',
  skCubeGrid: 'sk-cube-grid',
  skDoubleBounce: 'sk-double-bounce',
  skRotatingPlane: 'sk-rotationg-plane',
  skSpinnerPulse: 'sk-spinner-pulse',
  skThreeBounce: 'sk-three-bounce',
  skWanderingCubes: 'sk-wandering-cubes',
  skWave: 'sk-wave',
  skLine: 'sk-line-material'
};

/***/ }),

/***/ 4373:
/*!**************************************************************!*\
  !*** ./src/app/theme/shared/service/layout-state.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayoutStateService: () => (/* binding */ LayoutStateService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1817);


/**
 * Central layout state for coordinating mobile sidebar open/close.
 */
class LayoutStateService {
  constructor() {
    // true when the mobile sidebar should be open
    this.navCollapsedMob = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(false, ...(ngDevMode ? [{
      debugName: "navCollapsedMob"
    }] : []));
  }
  toggleNavCollapsedMob() {
    this.navCollapsedMob.update(isOpen => !isOpen);
  }
  openNavCollapsedMob() {
    this.navCollapsedMob.set(true);
  }
  closeNavCollapsedMob() {
    this.navCollapsedMob.set(false);
  }
  static {
    this.ɵfac = function LayoutStateService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LayoutStateService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LayoutStateService,
      factory: LayoutStateService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ 5312);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4967);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 698);
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app/app-routing.module */ 4114);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app/app.component */ 92);
/* harmony import */ var _app_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app/interceptors/auth.interceptor */ 472);








if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.enableProdMode)();
}
(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_7__.AppComponent, {
  providers: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.importProvidersFrom)(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule, _app_app_routing_module__WEBPACK_IMPORTED_MODULE_6__.AppRoutingModule), (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.provideHttpClient)((0,_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.withInterceptors)([_app_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_8__.authInterceptor]))]
}).catch(err => console.error(err));

/***/ }),

/***/ 4613:
/*!*******************************************************!*\
  !*** ./src/app/theme/layout/admin/admin.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminComponent: () => (/* binding */ AdminComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6223);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 6264);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ 4645);
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navigation/navigation.component */ 5287);
/* harmony import */ var _shared_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/breadcrumbs/breadcrumbs.component */ 6039);
/* harmony import */ var _shared_service_layout_state_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/service/layout-state.service */ 4373);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/auth.service */ 4796);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 3305);
// Angular import




// Project import








const _c0 = (a0, a1, a2, a3) => ({
  "navbar-collapsed": a0,
  horizontal: a1,
  compact: a2,
  "mob-open": a3
});
class AdminComponent {
  // Constructor
  constructor() {
    this.location = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_2__.Location);
    this.locationStrategy = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_2__.LocationStrategy);
    this.cdr = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef);
    this.layoutState = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_shared_service_layout_state_service__WEBPACK_IMPORTED_MODULE_8__.LayoutStateService);
    this.authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_auth_service__WEBPACK_IMPORTED_MODULE_9__.AuthService);
    this.navCollapsed = false;
    this.navCollapsedMob = false;
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.effect)(() => {
      this.navCollapsedMob = this.layoutState.navCollapsedMob();
      this.cdr.detectChanges();
    });
  }
  // life cycle hook
  ngAfterViewInit() {
    this.windowWidth = window.innerWidth;
    this.cdr.detectChanges();
  }
  // private method
  isThemeLayout(layout) {
    this.currentLayout = layout;
  }
  // public method
  navMobClick() {
    this.layoutState.toggleNavCollapsedMob();
    if (document.querySelector('app-navigation.pc-sidebar')?.classList.contains('navbar-collapsed')) {
      document.querySelector('app-navigation.pc-sidebar')?.classList.remove('navbar-collapsed');
    }
  }
  handleKeyDown(event) {
    if (event.key === 'Escape') {
      this.closeMenu();
    }
  }
  closeMenu() {
    this.layoutState.toggleNavCollapsedMob();
  }
  get isUserRole() {
    return this.authService.hasRole('user');
  }
  static {
    this.ɵfac = function AdminComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdminComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
      type: AdminComponent,
      selectors: [["app-admin"]],
      decls: 20,
      vars: 6,
      consts: [[1, "coded-navbar", "pc-sidebar", 3, "NavCollapsedMob", "ngClass"], [3, "NavCollapse", "NavCollapsedMob"], [1, "pc-container"], [1, "coded-wrapper"], [1, "coded-content"], [1, "coded-inner-content"], [1, "main-body"], [1, "page-wrapper"], ["tabindex", "0", 1, "pc-menu-overlay", 3, "click", "keydown"], [1, "pc-footer"], [1, "footer-wrapper", "container-fluid"], [1, "row"], [1, "col", "my-1"], [1, "m-0"], [1, "col-auto", "my-1"]],
      template: function AdminComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "app-navigation", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("NavCollapsedMob", function AdminComponent_Template_app_navigation_NavCollapsedMob_0_listener() {
            return ctx.navMobClick();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "app-nav-bar", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("NavCollapse", function AdminComponent_Template_app_nav_bar_NavCollapse_1_listener() {
            return ctx.navCollapsed = !ctx.navCollapsed;
          })("NavCollapsedMob", function AdminComponent_Template_app_nav_bar_NavCollapsedMob_1_listener() {
            return ctx.navMobClick();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "app-breadcrumb");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 6)(8, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AdminComponent_Template_div_click_10_listener() {
            return ctx.closeMenu();
          })("keydown", function AdminComponent_Template_div_keydown_10_listener($event) {
            return ctx.handleKeyDown($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "footer", 9)(12, "div", 10)(13, "div", 11)(14, "div", 12)(15, "p", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, " RIJARILANTO Helena Candy -2638 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "div", 14)(18, "p", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19, " ANDRIAMANANA Romance Patricia -2799 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction4"](1, _c0, ctx.navCollapsed, ctx.currentLayout === "horizontal", ctx.currentLayout === "compact", ctx.navCollapsedMob));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__.NavigationComponent, _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__.NavBarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterOutlet, _shared_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_7__.BreadcrumbComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 4645:
/*!*****************************************************************!*\
  !*** ./src/app/theme/layout/admin/nav-bar/nav-bar.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavBarComponent: () => (/* binding */ NavBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app-config */ 4040);
/* harmony import */ var _nav_left_nav_left_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav-left/nav-left.component */ 6343);
/* harmony import */ var _nav_logo_nav_logo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav-logo/nav-logo.component */ 9863);
/* harmony import */ var _nav_right_nav_right_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav-right/nav-right.component */ 939);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 6124);
// Angular import

// project import





class NavBarComponent {
  // Constructor
  constructor() {
    // public props
    this.NavCollapse = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.output)();
    this.NavCollapsedMob = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.output)();
    this.navCollapsed = window.innerWidth >= 1025 ? src_app_app_config__WEBPACK_IMPORTED_MODULE_1__.BerryConfig.isCollapse_menu : false;
    this.navCollapsedMob = false;
  }
  // public method
  navCollapse() {
    if (window.innerWidth >= 1025) {
      this.navCollapsed = !this.navCollapsed;
      this.NavCollapse.emit();
    }
  }
  navCollapseMob() {
    if (window.innerWidth < 1025) {
      this.NavCollapsedMob.emit();
    }
  }
  static {
    this.ɵfac = function NavBarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NavBarComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: NavBarComponent,
      selectors: [["app-nav-bar"]],
      outputs: {
        NavCollapse: "NavCollapse",
        NavCollapsedMob: "NavCollapsedMob"
      },
      decls: 5,
      vars: 1,
      consts: [[1, "pc-header", "coded-header"], [3, "NavCollapse", "navCollapsed"], [1, "header-wrapper"], [3, "NavCollapsedMob"]],
      template: function NavBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "header", 0)(1, "app-nav-logo", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("NavCollapse", function NavBarComponent_Template_app_nav_logo_NavCollapse_1_listener() {
            return ctx.navCollapse();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2)(3, "app-nav-left", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("NavCollapsedMob", function NavBarComponent_Template_app_nav_left_NavCollapsedMob_3_listener() {
            return ctx.navCollapseMob();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "app-nav-right");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("navCollapsed", ctx.navCollapsed);
        }
      },
      dependencies: [_nav_logo_nav_logo_component__WEBPACK_IMPORTED_MODULE_3__.NavLogoComponent, _nav_left_nav_left_component__WEBPACK_IMPORTED_MODULE_2__.NavLeftComponent, _nav_right_nav_right_component__WEBPACK_IMPORTED_MODULE_4__.NavRightComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 4796:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 8764);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3305);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api.service */ 3366);





class AuthService {
  constructor(router, api) {
    this.router = router;
    this.api = api;
    this.TOKEN_KEY = 'auth_token';
    this.USER_KEY = 'current_user';
    this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
    this.currentUser$ = this.currentUserSubject.asObservable();
    this.isAuthenticatedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
    this.checkAuthStatus();
  }
  checkAuthStatus() {
    const token = this.getToken();
    const user = this.getUser();
    if (token && user) {
      this.currentUserSubject.next(user);
      this.isAuthenticatedSubject.next(true);
    } else {
      this.clearAuthState();
    }
  }
  login(email, password) {
    return this.api.post('/auth/login', {
      email,
      password
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(response => {
      if (response.success && response.data) {
        this.setToken(response.data.token);
        this.setUser(response.data.user);
        this.currentUserSubject.next(this.getUser());
        this.isAuthenticatedSubject.next(true);
      }
    }));
  }
  register(data) {
    const registerPayload = {
      nom: data.nom,
      email: data.email,
      password: data.password,
      roleName: data.role,
      sexe: data.sexe,
      numtel: data.numtel,
      dtnaissance: data.dtnaissance
    };
    return this.api.post('/auth/register', registerPayload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(response => {
      if (response.success && response.data) {
        this.setToken(response.data.token);
        this.setUser(response.data.user);
        this.currentUserSubject.next(this.getUser());
        this.isAuthenticatedSubject.next(true);
      }
    }));
  }
  logout(redirectToLogin = true) {
    this.clearAuthState();
    if (redirectToLogin) {
      this.router.navigate(['/login']);
    }
  }
  clearAuthState() {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    localStorage.removeItem('boutique_status_cache');
    this.currentUserSubject.next(null);
    this.isAuthenticatedSubject.next(false);
  }
  getToken() {
    return localStorage.getItem(this.TOKEN_KEY);
  }
  setToken(token) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }
  getUser() {
    const userStr = localStorage.getItem(this.USER_KEY);
    if (!userStr) return null;
    try {
      const parsed = JSON.parse(userStr);
      return {
        ...parsed,
        role: this.normalizeRole(parsed.role)
      };
    } catch {
      return null;
    }
  }
  setUser(user) {
    const normalizedUser = {
      ...user,
      role: this.normalizeRole(user.role)
    };
    localStorage.setItem(this.USER_KEY, JSON.stringify(normalizedUser));
  }
  get currentUser() {
    return this.currentUserSubject.value;
  }
  /** Met à jour l'utilisateur stocké (après édition du profil). */
  updateStoredUser(backendUser) {
    const current = this.getUser();
    if (!current) return;
    const roleName = typeof backendUser.role === 'string' ? backendUser.role : backendUser.role?.nom;
    const updated = {
      ...current,
      id: backendUser.id ?? backendUser._id ?? current.id,
      nom: backendUser.nom ?? current.nom,
      email: backendUser.email ?? current.email,
      pdppath: backendUser.pdppath !== undefined ? backendUser.pdppath : current.pdppath,
      numtel: backendUser.numtel ?? current.numtel,
      dtnaissance: backendUser.dtnaissance ?? current.dtnaissance,
      sexe: backendUser.sexe ?? current.sexe,
      adresse: backendUser.adresse ?? current.adresse,
      role: this.normalizeRole(roleName ?? current.role)
    };
    this.setUser(updated);
    this.currentUserSubject.next(updated);
  }
  get isAuthenticated() {
    return this.isAuthenticatedSubject.value;
  }
  /**
   * Créer un utilisateur de test pour les démonstrations
   */
  createTestUser() {
    const testUser = {
      id: '507f1f77bcf86cd799439011',
      // ObjectId MongoDB valide
      nom: 'Test User',
      email: 'test@example.com',
      role: 'user'
    };
    this.setUser(testUser);
    this.setToken('test-token-123');
    this.currentUserSubject.next(testUser);
    this.isAuthenticatedSubject.next(true);
    return testUser;
  }
  /**
   * S'assurer qu'un utilisateur est défini (pour les tests)
   */
  ensureUserExists() {
    let user = this.getUser();
    if (!user) {
      user = this.createTestUser();
    }
    return user;
  }
  /**
   * Obtenir l'ID de l'utilisateur actuel (compatible MongoDB)
   */
  getUserId() {
    const user = this.ensureUserExists();
    return user.id;
  }
  hasRole(role) {
    const currentRole = this.normalizeRole(this.currentUser?.role);
    const expectedRole = this.normalizeRole(role);
    return currentRole === expectedRole;
  }
  isAdminCenterRole() {
    return this.hasRole('admin_center') || this.hasRole('super_admin');
  }
  canUseUserFeatures() {
    return this.hasRole('user') || this.isAdminCenterRole();
  }
  normalizeRole(role) {
    if (role === 'admin_centre') return 'admin_center';
    if (role === 'admin_center') return 'admin_center';
    if (role === 'admin_boutique') return 'admin_boutique';
    if (role === 'super_admin') return 'super_admin';
    return 'user';
  }
  forgotPassword(email) {
    return this.api.post('/auth/forgot-password', {
      email
    });
  }
  resetPassword(email, code, newPassword) {
    return this.api.post('/auth/reset-password', {
      email,
      code,
      newPassword
    });
  }
  static {
    this.ɵfac = function AuthService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 5287:
/*!***********************************************************************!*\
  !*** ./src/app/theme/layout/admin/navigation/navigation.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavigationComponent: () => (/* binding */ NavigationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 6264);
/* harmony import */ var _nav_content_nav_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav-content/nav-content.component */ 9772);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6124);
// Angular import


// project import



const _c0 = () => ["/default/"];
function NavigationComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 4);
  }
}
function NavigationComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 5);
  }
}
class NavigationComponent {
  constructor() {
    // public props
    this.NavCollapsedMob = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.output)();
    this.SubmenuCollapse = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.output)();
    this.navCollapsedMob = false;
    this.windowWidth = window.innerWidth;
  }
  // public method
  navCollapseMob() {
    if (this.windowWidth < 1025) {
      this.NavCollapsedMob.emit();
    }
  }
  navSubmenuCollapse() {
    document.querySelector('app-navigation.coded-navbar')?.classList.add('coded-trigger');
  }
  static {
    this.ɵfac = function NavigationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NavigationComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: NavigationComponent,
      selectors: [["app-navigation"]],
      outputs: {
        NavCollapsedMob: "NavCollapsedMob",
        SubmenuCollapse: "SubmenuCollapse"
      },
      decls: 7,
      vars: 3,
      consts: [[1, ""], [1, "navbar-wrapper"], [1, "m-header"], [1, "b-brand", 3, "routerLink"], ["src", "assets/images/logo3.png", "alt", "small-menu-logo", 1, "logo", "logo-sm"], ["src", "assets/images/logo3.png", "alt", "logo", 1, "logo", "logo-lg"], [1, "scroll-div", "w-100", "compact", 3, "NavCollapsedMob", "SubmenuCollapse"]],
      template: function NavigationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditionalCreate"](4, NavigationComponent_Conditional_4_Template, 1, 0, "img", 4)(5, NavigationComponent_Conditional_5_Template, 1, 0, "img", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "app-nav-content", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("NavCollapsedMob", function NavigationComponent_Template_app_nav_content_NavCollapsedMob_6_listener() {
            return ctx.navCollapseMob();
          })("SubmenuCollapse", function NavigationComponent_Template_app_nav_content_SubmenuCollapse_6_listener() {
            return ctx.navSubmenuCollapse();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](2, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](ctx.themeMode === "compact" ? 4 : 5);
        }
      },
      dependencies: [_nav_content_nav_content_component__WEBPACK_IMPORTED_MODULE_2__.NavContentComponent, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
      styles: [".b-brand[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n}\n\n.logo[_ngcontent-%COMP%] {\n  width: auto;\n  object-fit: contain;\n}\n\n.logo-lg[_ngcontent-%COMP%] {\n  height: 38px;\n}\n\n.logo-sm[_ngcontent-%COMP%] {\n  height: 28px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGhlbWUvbGF5b3V0L2FkbWluL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uL1dlYiUyMGF2YW5jZS9tMXAxM21lYW4tQ2FuZHktUm9tYW5jZS9mcm9udGVuZC9zcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRiIsInNvdXJjZXNDb250ZW50IjpbIi5iLWJyYW5kIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcclxufVxyXG5cclxuLmxvZ28tbGcge1xyXG4gIGhlaWdodDogMzhweDtcclxufVxyXG5cclxuLmxvZ28tc20ge1xyXG4gIGhlaWdodDogMjhweDtcclxufVxyXG4iLCIuYi1icmFuZCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubG9nbyB7XG4gIHdpZHRoOiBhdXRvO1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG4ubG9nby1sZyB7XG4gIGhlaWdodDogMzhweDtcbn1cblxuLmxvZ28tc20ge1xuICBoZWlnaHQ6IDI4cHg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../package.json */ 5949);
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
  appVersion: _package_json__WEBPACK_IMPORTED_MODULE_0__.version,
  production: false,
  apiUrl: 'http://localhost:3000/api'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 5458:
/*!**************************************!*\
  !*** ./src/app/guards/role.guard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoleGuard: () => (/* binding */ RoleGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ 4796);
/* harmony import */ var _services_boutique_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/boutique.service */ 700);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3305);




class RoleGuard {
  constructor(authService, boutiqueService, router) {
    this.authService = authService;
    this.boutiqueService = boutiqueService;
    this.router = router;
  }
  canActivate() {
    if (this.authService.hasRole('admin_boutique')) {
      const boutiqueStatus = this.boutiqueService.getCachedBoutiqueStatus();
      if (!boutiqueStatus.hasBoutique) {
        return this.router.parseUrl('/boutique/boxes');
      }
      if (!boutiqueStatus.isActive) {
        return this.router.parseUrl('/boutique/informations');
      }
      return this.router.parseUrl('/default');
    }
    return true;
  }
  static {
    this.ɵfac = function RoleGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || RoleGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_boutique_service__WEBPACK_IMPORTED_MODULE_2__.BoutiqueService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RoleGuard,
      factory: RoleGuard.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 5617:
/*!*******************************************************!*\
  !*** ./src/app/theme/layout/guest/guest.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GuestComponent: () => (/* binding */ GuestComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 6264);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3305);



class GuestComponent {
  static {
    this.ɵfac = function GuestComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || GuestComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: GuestComponent,
      selectors: [["app-guest"]],
      decls: 1,
      vars: 0,
      template: function GuestComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 5639:
/*!**********************************************************************!*\
  !*** ./src/app/theme/shared/components/spinner/spinner.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SpinnerComponent: () => (/* binding */ SpinnerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3305);
/* harmony import */ var _spinkits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spinkits */ 4322);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 6124);
// Angular import


// project import


function SpinnerComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElement"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("colored", !ctx_r0.backgroundColor());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("background-color", ctx_r0.backgroundColor());
  }
}
function SpinnerComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementStart"](0, "div", 0)(1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditionalCreate"](2, SpinnerComponent_Conditional_0_Conditional_2_Template, 2, 4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](ctx_r0.spinner() === ctx_r0.Spinkit.skLine ? 2 : -1);
  }
}
class SpinnerComponent {
  // Constructor
  constructor() {
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router);
    // public props
    this.isSpinnerVisible = true;
    this.Spinkit = _spinkits__WEBPACK_IMPORTED_MODULE_3__.Spinkit;
    this.backgroundColor = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.input)('#2689E2', ...(ngDevMode ? [{
      debugName: "backgroundColor"
    }] : []));
    this.spinner = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.input)(_spinkits__WEBPACK_IMPORTED_MODULE_3__.Spinkit.skLine, ...(ngDevMode ? [{
      debugName: "spinner"
    }] : []));
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationStart) {
        this.isSpinnerVisible = true;
      } else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationCancel || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationError) {
        this.isSpinnerVisible = false;
      }
    }, () => {
      this.isSpinnerVisible = false;
    });
  }
  // life cycle event
  ngOnDestroy() {
    this.isSpinnerVisible = false;
  }
  static {
    this.ɵfac = function SpinnerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SpinnerComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: SpinnerComponent,
      selectors: [["app-spinner"]],
      inputs: {
        backgroundColor: [1, "backgroundColor"],
        spinner: [1, "spinner"]
      },
      decls: 1,
      vars: 1,
      consts: [["id", "http-loader"], [1, "loader-bg"], [1, "sk-line-material", 3, "colored"], [1, "sk-line-material"], [1, "sk-child", "sk-bounce1"]],
      template: function SpinnerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditionalCreate"](0, SpinnerComponent_Conditional_0_Template, 3, 1, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](ctx.isSpinnerVisible ? 0 : -1);
        }
      },
      styles: ["#http-loader {\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  z-index: 9999;\n}\n\n.loader-bg {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  filter: alpha(opacity=70);\n  opacity: 0.7;\n  background-color: #f1f1f1;\n}\n\n.colored-parent,\n.colored > div {\n  background-color: #333;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGhlbWUvc2hhcmVkL2NvbXBvbmVudHMvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vV2ViJTIwYXZhbmNlL20xcDEzbWVhbi1DYW5keS1Sb21hbmNlL2Zyb250ZW5kL3NyYy9hcHAvdGhlbWUvc2hhcmVkL2NvbXBvbmVudHMvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURFQTs7RUFFRSxzQkFBQTtBQ0NGIiwic291cmNlc0NvbnRlbnQiOlsiI2h0dHAtbG9hZGVyIHtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDk5OTk7XHJcbn1cclxuXHJcbi5sb2FkZXItYmcge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTcwKTtcclxuICBvcGFjaXR5OiAwLjc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxufVxyXG5cclxuLmNvbG9yZWQtcGFyZW50LFxyXG4uY29sb3JlZCA+IGRpdiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxufVxyXG4iLCIjaHR0cC1sb2FkZXIge1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk5OTtcbn1cblxuLmxvYWRlci1iZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTcwKTtcbiAgb3BhY2l0eTogMC43O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xufVxuXG4uY29sb3JlZC1wYXJlbnQsXG4uY29sb3JlZCA+IGRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */", ".sk-line-material {\n  top: 0;\n  position: relative;\n  margin: auto;\n  width: 100%;\n}\n\n.sk-line-material .sk-child {\n  width: 100%;\n  height: 4px;\n  position: absolute;\n  top: 0;\n  display: inline-block;\n  transform-origin: 0% 0%;\n  animation: sk-line-material 2s ease-in-out 0s infinite both;\n}\n@keyframes sk-line-material {\n  0% {\n    transform: scaleX(0);\n  }\n  100% {\n    transform: scaleX(1);\n  }\n}\n#http-loader {\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  z-index: 9999;\n}\n\n.loader-bg {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  filter: alpha(opacity=70);\n  opacity: 1;\n  background-color: rgba(0, 0, 0, 0);\n}\n\n.colored-parent,\n.colored > div {\n  background-color: rgba(26, 188, 156, 0.8);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGhlbWUvc2hhcmVkL2NvbXBvbmVudHMvc3Bpbm5lci9zcGlua2l0LWNzcy9zay1saW5lLW1hdGVyaWFsLnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi9XZWIlMjBhdmFuY2UvbTFwMTNtZWFuLUNhbmR5LVJvbWFuY2UvZnJvbnRlbmQvc3JjL2FwcC90aGVtZS9zaGFyZWQvY29tcG9uZW50cy9zcGlubmVyL3NwaW5raXQtY3NzL3NrLWxpbmUtbWF0ZXJpYWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLE1BQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFFQSwyREFBQTtBQ0NGO0FEZUE7RUFDRTtJQUVFLG9CQUFBO0VDRkY7RURJQTtJQUVFLG9CQUFBO0VDRkY7QUFDRjtBREtBO0VBQ0UsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDSEY7O0FETUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0NBQUE7QUNIRjs7QURNQTs7RUFFRSx5Q0FBQTtBQ0hGIiwic291cmNlc0NvbnRlbnQiOlsiLnNrLWxpbmUtbWF0ZXJpYWwge1xyXG4gIHRvcDogMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc2stbGluZS1tYXRlcmlhbCAuc2stY2hpbGQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzay1saW5lLW1hdGVyaWFsIDJzIGVhc2UtaW4tb3V0IDBzIGluZmluaXRlIGJvdGg7XHJcbiAgYW5pbWF0aW9uOiBzay1saW5lLW1hdGVyaWFsIDJzIGVhc2UtaW4tb3V0IDBzIGluZmluaXRlIGJvdGg7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBzay1saW5lLW1hdGVyaWFsIHtcclxuICAwJSxcclxuICA4MCUsXHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDApO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XHJcbiAgfVxyXG4gIDQwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDEpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNrLWxpbmUtbWF0ZXJpYWwge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDEpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgfVxyXG59XHJcblxyXG4jaHR0cC1sb2FkZXIge1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogOTk5OTtcclxufVxyXG5cclxuLmxvYWRlci1iZyB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NzApO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcclxufVxyXG5cclxuLmNvbG9yZWQtcGFyZW50LFxyXG4uY29sb3JlZCA+IGRpdiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNiwgMTg4LCAxNTYsIDAuOCk7XHJcbn1cclxuIiwiLnNrLWxpbmUtbWF0ZXJpYWwge1xuICB0b3A6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNrLWxpbmUtbWF0ZXJpYWwgLnNrLWNoaWxkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNrLWxpbmUtbWF0ZXJpYWwgMnMgZWFzZS1pbi1vdXQgMHMgaW5maW5pdGUgYm90aDtcbiAgYW5pbWF0aW9uOiBzay1saW5lLW1hdGVyaWFsIDJzIGVhc2UtaW4tb3V0IDBzIGluZmluaXRlIGJvdGg7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBzay1saW5lLW1hdGVyaWFsIHtcbiAgMCUsIDgwJSwgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgfVxuICA0MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2stbGluZS1tYXRlcmlhbCB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG4gIH1cbn1cbiNodHRwLWxvYWRlciB7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA5OTk5O1xufVxuXG4ubG9hZGVyLWJnIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NzApO1xuICBvcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xufVxuXG4uY29sb3JlZC1wYXJlbnQsXG4uY29sb3JlZCA+IGRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjYsIDE4OCwgMTU2LCAwLjgpO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 5949:
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"name":"m1p13mean-Candy-Romance","version":"5.3.0","author":"CodedThemes","license":"MIT","private":false,"scripts":{"ng":"ng","start":"cross-env SASS_SILENCE_DEPRECATIONS=import ng serve","build":"cross-env SASS_SILENCE_DEPRECATIONS=import ng build","build-prod":"cross-env SASS_SILENCE_DEPRECATIONS=import ng build --configuration production","watch":"cross-env SASS_SILENCE_DEPRECATIONS=import ng build --watch --configuration development","test":"ng test","lint":"ng lint","lint:fix":"ng lint --fix","prettier":"prettier --write ./src"},"dependencies":{"@angular/animations":"^21.1.4","@angular/cdk":"21.0.3","@angular/common":"21.0.5","@angular/compiler":"21.0.5","@angular/core":"21.0.5","@angular/forms":"21.0.5","@angular/platform-browser":"21.0.5","@angular/platform-browser-dynamic":"21.0.5","@angular/router":"21.0.5","@ng-bootstrap/ng-bootstrap":"19.0.1","@popperjs/core":"2.11.8","@standard-schema/spec":"^1.0.0","apexcharts":"5.3.6","bootstrap":"5.3.8","jspdf":"^4.2.0","jspdf-autotable":"^5.0.7","leaflet":"^1.9.4","ng-apexcharts":"2.0.4","ngx-scrollbar":"18.0.0","rxjs":"~7.8.2","tslib":"2.8.1"},"devDependencies":{"@angular-devkit/build-angular":"21.0.3","@angular-eslint/builder":"21.1.0","@angular-eslint/eslint-plugin":"21.1.0","@angular-eslint/eslint-plugin-template":"21.1.0","@angular-eslint/schematics":"21.1.0","@angular-eslint/template-parser":"21.1.0","@angular/cli":"21.0.3","@angular/compiler-cli":"21.0.5","@eslint/eslintrc":"3.3.3","@eslint/js":"9.39.1","@types/leaflet":"^1.9.21","@typescript-eslint/eslint-plugin":"8.49.0","@typescript-eslint/parser":"8.49.0","cross-env":"^7.0.3","eslint":"9.39.1","prettier":"3.7.4","typescript":"5.9.3"}}');

/***/ }),

/***/ 6039:
/*!******************************************************************************!*\
  !*** ./src/app/theme/shared/components/breadcrumbs/breadcrumbs.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BreadcrumbComponent: () => (/* binding */ BreadcrumbComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3305);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6264);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var src_app_theme_layout_admin_navigation_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/theme/layout/admin/navigation/navigation */ 7238);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared.module */ 2389);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 6124);
// Angular Import



// project import




const _c0 = () => ["/default"];
function BreadcrumbComponent_For_1_Conditional_0_For_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h5", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const breadcrumb_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", breadcrumb_r1.title, " ");
  }
}
function BreadcrumbComponent_For_1_Conditional_0_For_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](0, BreadcrumbComponent_For_1_Conditional_0_For_6_Conditional_0_Template, 2, 1, "h5", 9);
  }
  if (rf & 2) {
    const ɵ$index_13_r2 = ctx.$index;
    const ɵ$count_13_r3 = ctx.$count;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ɵ$index_13_r2 === ɵ$count_13_r3 - 1 ? 0 : -1);
  }
}
function BreadcrumbComponent_For_1_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "svg", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "path", 11)(3, "path", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](1, _c0));
  }
}
function BreadcrumbComponent_For_1_Conditional_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]("Home");
  }
}
function BreadcrumbComponent_For_1_Conditional_0_For_12_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 6)(1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const breadcrumb_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", breadcrumb_r4.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](breadcrumb_r4.title);
  }
}
function BreadcrumbComponent_For_1_Conditional_0_For_12_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 6)(1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const breadcrumb_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](breadcrumb_r4.title);
  }
}
function BreadcrumbComponent_For_1_Conditional_0_For_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](0, BreadcrumbComponent_For_1_Conditional_0_For_12_Conditional_0_Template, 3, 2, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](1, BreadcrumbComponent_For_1_Conditional_0_For_12_Conditional_1_Template, 3, 1, "li", 6);
  }
  if (rf & 2) {
    const breadcrumb_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](breadcrumb_r4.url !== false ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](breadcrumb_r4.url === false && breadcrumb_r4.type !== "group" ? 1 : -1);
  }
}
function BreadcrumbComponent_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterCreate"](5, BreadcrumbComponent_For_1_Conditional_0_For_6_Template, 1, 1, null, null, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "ul", 5)(8, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](9, BreadcrumbComponent_For_1_Conditional_0_Conditional_9_Template, 4, 2, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](10, BreadcrumbComponent_For_1_Conditional_0_Conditional_10_Template, 2, 3, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterCreate"](11, BreadcrumbComponent_For_1_Conditional_0_For_12_Template, 2, 2, null, null, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeater"](ctx_r4.navigationList);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx_r4.type === "icon" ? 9 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx_r4.type === "text" ? 10 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeater"](ctx_r4.navigationList);
  }
}
function BreadcrumbComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](0, BreadcrumbComponent_For_1_Conditional_0_Template, 13, 2, "div", 0);
  }
  if (rf & 2) {
    const breadcrumb_r6 = ctx.$implicit;
    const ɵ$index_1_r7 = ctx.$index;
    const ɵ$count_1_r8 = ctx.$count;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ɵ$index_1_r7 === ɵ$count_1_r8 - 1 && breadcrumb_r6.breadcrumbs !== false ? 0 : -1);
  }
}
class BreadcrumbComponent {
  // constructor
  constructor() {
    this.route = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router);
    this.titleService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.Title);
    this.breadcrumbList = [];
    this.navigations = (0,src_app_theme_layout_admin_navigation_navigation__WEBPACK_IMPORTED_MODULE_4__.getNavigationItems)();
    this.type = 'icon';
    this.setBreadcrumb();
  }
  // public method
  setBreadcrumb() {
    this.route.events.subscribe(router => {
      if (router instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd) {
        const activeLink = router.url;
        const breadcrumbList = this.filterNavigation(this.navigations, activeLink);
        const title = breadcrumbList[breadcrumbList.length - 1]?.title || 'Welcome';
        this.navigationList = breadcrumbList.splice(-2);
        this.titleService.setTitle(title + ' | m1p13mean-candy-romance');
      }
    });
  }
  filterNavigation(navItems, activeLink) {
    for (const navItem of navItems) {
      if (navItem.type === 'item' && 'url' in navItem && navItem.url === activeLink) {
        return [{
          url: 'url' in navItem ? navItem.url : false,
          title: navItem.title,
          breadcrumbs: 'breadcrumbs' in navItem ? navItem.breadcrumbs : true,
          type: navItem.type
        }];
      }
      if ((navItem.type === 'group' || navItem.type === 'collapse') && 'children' in navItem) {
        const breadcrumbList = this.filterNavigation(navItem.children, activeLink);
        if (breadcrumbList.length > 0) {
          breadcrumbList.unshift({
            url: 'url' in navItem ? navItem.url : false,
            title: navItem.title,
            breadcrumbs: 'breadcrumbs' in navItem ? navItem.breadcrumbs : true,
            type: navItem.type
          });
          return breadcrumbList;
        }
      }
    }
    return [];
  }
  static {
    this.ɵfac = function BreadcrumbComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BreadcrumbComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: BreadcrumbComponent,
      selectors: [["app-breadcrumb"]],
      inputs: {
        type: "type"
      },
      decls: 2,
      vars: 0,
      consts: [[1, "page-header"], [1, "page-block"], [1, "row", "align-items-center"], [1, "col-md-12", "d-sm-flex", "align-items-center", "justify-content-between"], [1, "page-header-title"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["title", "Home", 3, "routerLink"], [3, "routerLink"], [1, "m-b-10"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "var(--bs-secondary)", 1, "icon", "icon-tabler", "icons-tabler-filled", "icon-tabler-home"], ["stroke", "none", "d", "M0 0h24v24H0z", "fill", "none"], ["d", "M12.707 2.293l9 9c.63 .63 .184 1.707 -.707 1.707h-1v6a3 3 0 0 1 -3 3h-1v-7a3 3 0 0 0 -2.824 -2.995l-.176 -.005h-2a3 3 0 0 0 -3 3v7h-1a3 3 0 0 1 -3 -3v-6h-1c-.89 0 -1.337 -1.077 -.707 -1.707l9 -9a1 1 0 0 1 1.414 0m.293 11.707a1 1 0 0 1 1 1v7h-4v-7a1 1 0 0 1 .883 -.993l.117 -.007z"], [1, "text-muted", "f-w-500", 3, "routerLink"], ["href", "javascript:", 1, "f-w-500", "text-dark"]],
      template: function BreadcrumbComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterCreate"](0, BreadcrumbComponent_For_1_Template, 1, 1, null, null, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterTrackByIdentity"]);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeater"](ctx.navigationList);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 6343:
/*!***************************************************************************!*\
  !*** ./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavLeftComponent: () => (/* binding */ NavLeftComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6124);
// Angular import


class NavLeftComponent {
  constructor() {
    // public props
    this.NavCollapsedMob = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.output)();
  }
  navCollapsedMob() {
    this.NavCollapsedMob.emit();
  }
  static {
    this.ɵfac = function NavLeftComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NavLeftComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: NavLeftComponent,
      selectors: [["app-nav-left"]],
      outputs: {
        NavCollapsedMob: "NavCollapsedMob"
      },
      decls: 20,
      vars: 0,
      consts: [[1, "me-auto", "pc-mob-drp"], [1, "list-unstyled"], [1, "pc-h-item", "header-mobile-collapse"], ["type", "button", "aria-label", "Afficher le menu", 1, "pc-head-link", "head-link-secondary", "ms-0", "mobile-menu", "border-0", "bg-transparent", 3, "click"], [1, "ti", "ti-menu-2"], ["ngbDropdown", "", 1, "dropdown", "pc-h-item", "d-inline-flex", "d-md-none"], ["data-bs-toggle", "dropdown", "href", "javascript:", "ngbDropdownToggle", "", 1, "pc-head-link", "head-link-secondary", "dropdown-toggle", "arrow-none", "m-0"], [1, "ti", "ti-search"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "pc-h-dropdown", "drp-search"], [1, "px-3"], [1, "form-group", "mb-0", "d-flex", "align-items-center"], ["type", "search", "placeholder", "Search here. . .", 1, "form-control", "border-0", "shadow-none"], [1, "pc-h-item", "d-none", "d-md-inline-flex"], [1, "header-search"], [1, "search-btn"], ["type", "search", "placeholder", "Rechercher", 1, "form-control"], [1, "btn", "btn-light-secondary", "btn-search"], [1, "ti", "ti-adjustments-horizontal"]],
      template: function NavLeftComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](0, "div", 0)(1, "ul", 1)(2, "li", 2)(3, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomListener"]("click", function NavLeftComponent_Template_button_click_3_listener() {
            return ctx.navCollapsedMob();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElement"](4, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](5, "li", 5)(6, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElement"](7, "i", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](8, "div", 8)(9, "form", 9)(10, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElement"](11, "i", 7)(12, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](13, "li", 12)(14, "form", 13)(15, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElement"](16, "i", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElement"](17, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](18, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElement"](19, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]()()()()();
        }
      },
      styles: [".ms-0[_ngcontent-%COMP%] {\n  margin: 0 16px 0 0 !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGhlbWUvbGF5b3V0L2FkbWluL25hdi1iYXIvbmF2LWxlZnQvbmF2LWxlZnQuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi9XZWIlMjBhdmFuY2UvbTFwMTNtZWFuLUNhbmR5LVJvbWFuY2UvZnJvbnRlbmQvc3JjL2FwcC90aGVtZS9sYXlvdXQvYWRtaW4vbmF2LWJhci9uYXYtbGVmdC9uYXYtbGVmdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUFBO0FDQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIubXMtMCB7XHJcbiAgbWFyZ2luOiAwIDE2cHggMCAwICFpbXBvcnRhbnQ7XHJcbn1cclxuIiwiLm1zLTAge1xuICBtYXJnaW46IDAgMTZweCAwIDAgIWltcG9ydGFudDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 7238:
/*!*************************************************************!*\
  !*** ./src/app/theme/layout/admin/navigation/navigation.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getNavigationItems: () => (/* binding */ getNavigationItems)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/auth.service */ 4796);
/* harmony import */ var _services_boutique_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/boutique.service */ 700);



function getNavigationItems() {
  const authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService);
  const boutiqueService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_boutique_service__WEBPACK_IMPORTED_MODULE_2__.BoutiqueService);
  const isAdminBoutique = authService.hasRole('admin_boutique');
  const isAdminCenter = authService.isAdminCenterRole();
  const canUseUserFeatures = authService.canUseUserFeatures();
  const boutiqueStatus = boutiqueService.getCachedBoutiqueStatus();
  const hasBoutique = isAdminBoutique && boutiqueStatus.hasBoutique;
  const hasActiveBoutique = isAdminBoutique && boutiqueStatus.hasBoutique && boutiqueStatus.isActive;
  return [{
    id: 'dashboard-user',
    title: 'Dashboard',
    type: 'item',
    icon: 'ti ti-dashboard',
    classes: 'nav-item',
    url: '/default',
    breadcrumbs: false,
    hidden: isAdminBoutique || isAdminCenter || !canUseUserFeatures
  }, {
    id: 'BoxesDisponibles',
    title: 'Boxes disponibles',
    type: 'item',
    icon: 'ti ti-home-search',
    classes: 'nav-item',
    url: '/boutique/boxes',
    breadcrumbs: true,
    hidden: !isAdminBoutique || hasBoutique
  }, {
    id: 'BoutiquePending',
    title: 'Boutique en attente',
    type: 'item',
    icon: 'ti ti-hourglass-high',
    classes: 'nav-item',
    url: '/boutique/informations',
    breadcrumbs: true,
    hidden: !(isAdminBoutique && hasBoutique && !boutiqueStatus.isActive)
  }, {
    id: 'Ma boutique',
    title: 'Ma boutique',
    type: 'collapse',
    icon: 'icon-navigation',
    hidden: !hasActiveBoutique,
    children: [{
      id: 'dashboard-boutique',
      title: 'Dashboard',
      type: 'item',
      classes: 'nav-item',
      url: '/default',
      icon: 'ti ti-dashboard',
      breadcrumbs: false
    }, {
      id: 'infoboutique',
      title: 'Informations boutique',
      type: 'item',
      classes: 'nav-item',
      url: '/boutique/informations',
      icon: 'ti ti-info-circle',
      breadcrumbs: true
    }, {
      id: 'produits-boutique',
      title: 'Produits boutique',
      type: 'item',
      classes: 'nav-item',
      url: '/boutique/produits',
      icon: 'ti ti-package',
      breadcrumbs: true
    }, {
      id: 'promotions',
      title: 'Promotions',
      type: 'item',
      classes: 'nav-item',
      url: '/boutique/promotions',
      icon: 'ti ti-discount',
      breadcrumbs: true
    }, {
      id: 'commandes-boutique',
      title: 'Commandes boutique',
      type: 'item',
      classes: 'nav-item',
      url: '/boutique/commandes',
      icon: 'ti ti-receipt',
      breadcrumbs: true
    }]
  }, {
    id: 'Royal center',
    title: 'Royal center',
    type: 'collapse',
    icon: 'ti ti-building-community',
    hidden: !isAdminCenter,
    children: [{
      id: 'dashboard-center',
      title: 'Dashboard',
      type: 'item',
      classes: 'nav-item',
      url: '/default',
      icon: 'ti ti-dashboard',
      breadcrumbs: false
    }, {
      id: 'royal-loyers',
      title: 'Loyer',
      type: 'item',
      classes: 'nav-item',
      url: '/royal-center/loyers',
      icon: 'ti ti-cash',
      breadcrumbs: true
    }, {
      id: 'royal-boxes',
      title: 'Box',
      type: 'item',
      classes: 'nav-item',
      url: '/royal-center/boxes',
      icon: 'ti ti-box',
      breadcrumbs: true
    }, {
      id: 'royal-boutiques',
      title: 'Boutique',
      type: 'item',
      classes: 'nav-item',
      url: '/royal-center/boutiques',
      icon: 'ti ti-building-store',
      breadcrumbs: true
    }]
  }, {
    id: 'Produits',
    title: 'Produits',
    type: 'item',
    icon: 'ti ti-shopping-cart',
    classes: 'nav-item',
    url: '/produits',
    breadcrumbs: true
  }, {
    id: 'Boutiques',
    title: 'Boutiques',
    type: 'item',
    icon: 'ti ti-building-store',
    classes: 'nav-item',
    url: '/boutiques',
    breadcrumbs: true
  }, {
    id: 'CommandesUser',
    title: 'Mes commandes',
    type: 'item',
    icon: 'ti ti-receipt',
    classes: 'nav-item',
    url: '/commandes',
    breadcrumbs: true,
    hidden: !canUseUserFeatures
  }, {
    id: 'Panier',
    title: 'Panier',
    type: 'item',
    hidden: true,
    icon: 'ti ti-shopping-cart',
    classes: 'nav-item',
    url: '/panier',
    breadcrumbs: true
  }];
}

/***/ }),

/***/ 7473:
/*!**************************************************!*\
  !*** ./src/app/services/notification.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationService: () => (/* binding */ NotificationService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1817);


class NotificationService {
  constructor() {
    this.notifications = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
    this.notifications$ = this.notifications.asObservable();
  }
  show(notification) {
    const id = this.generateId();
    const fullNotification = {
      id,
      duration: 5000,
      ...notification
    };
    const currentNotifications = this.notifications.value;
    this.notifications.next([...currentNotifications, fullNotification]);
    // Auto-remove after duration
    setTimeout(() => {
      this.remove(id);
    }, fullNotification.duration);
  }
  success(title, message) {
    this.show({
      type: 'success',
      title,
      message: message || title
    });
  }
  error(title, message) {
    this.show({
      type: 'error',
      title,
      message: message || title,
      duration: 8000 // Longer for errors
    });
  }
  warning(title, message) {
    this.show({
      type: 'warning',
      title,
      message: message || title
    });
  }
  info(title, message) {
    this.show({
      type: 'info',
      title,
      message: message || title
    });
  }
  remove(id) {
    const currentNotifications = this.notifications.value;
    this.notifications.next(currentNotifications.filter(n => n.id !== id));
  }
  clear() {
    this.notifications.next([]);
  }
  generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }
  static {
    this.ɵfac = function NotificationService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NotificationService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: NotificationService,
      factory: NotificationService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 8705:
/*!*******************************************************************!*\
  !*** ./src/app/components/notification/notification.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationComponent: () => (/* binding */ NotificationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/notification.service */ 7473);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6124);





function NotificationComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NotificationComponent_div_1_Template_div_click_0_listener() {
      const notification_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.remove(notification_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 3)(2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NotificationComponent_div_1_Template_button_click_4_listener() {
      const notification_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.remove(notification_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const notification_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinterpolate1"]("notification notification-", notification_r2.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("fade-in", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](notification_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](notification_r2.message);
  }
}
class NotificationComponent {
  constructor() {
    this.notificationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_notification_service__WEBPACK_IMPORTED_MODULE_2__.NotificationService);
    this.notifications$ = this.notificationService.notifications$;
  }
  remove(id) {
    this.notificationService.remove(id);
  }
  static {
    this.ɵfac = function NotificationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NotificationComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: NotificationComponent,
      selectors: [["app-notification"]],
      decls: 3,
      vars: 3,
      consts: [[1, "notification-container"], [3, "class", "fade-in", "click", 4, "ngFor", "ngForOf"], [3, "click"], [1, "notification-header"], [1, "notification-title"], [1, "notification-close", 3, "click"], [1, "notification-message"]],
      template: function NotificationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NotificationComponent_div_1_Template, 8, 7, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, ctx.notifications$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.AsyncPipe],
      styles: [".notification-container[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 20px;\n  right: 20px;\n  z-index: 9999;\n  max-width: 400px;\n}\n\n.notification[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 16px;\n  margin-bottom: 12px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  border-left: 4px solid;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  animation: _ngcontent-%COMP%_slideIn 0.3s ease;\n}\n\n.notification[_ngcontent-%COMP%]:hover {\n  transform: translateX(-5px);\n  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);\n}\n\n.notification-success[_ngcontent-%COMP%] {\n  border-left-color: #28a745;\n}\n\n.notification-error[_ngcontent-%COMP%] {\n  border-left-color: #dc3545;\n}\n\n.notification-warning[_ngcontent-%COMP%] {\n  border-left-color: #ffc107;\n}\n\n.notification-info[_ngcontent-%COMP%] {\n  border-left-color: #17a2b8;\n}\n\n.notification-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n}\n\n.notification-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n}\n\n.notification-success[_ngcontent-%COMP%]   .notification-title[_ngcontent-%COMP%] {\n  color: #28a745;\n}\n\n.notification-error[_ngcontent-%COMP%]   .notification-title[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n\n.notification-warning[_ngcontent-%COMP%]   .notification-title[_ngcontent-%COMP%] {\n  color: #ffc107;\n}\n\n.notification-info[_ngcontent-%COMP%]   .notification-title[_ngcontent-%COMP%] {\n  color: #17a2b8;\n}\n\n.notification-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 18px;\n  cursor: pointer;\n  opacity: 0.6;\n  padding: 0;\n  width: 20px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.notification-close[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n\n.notification-message[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #666;\n  line-height: 1.4;\n}\n\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideOut {\n  from {\n    transform: translateX(0);\n    opacity: 1;\n  }\n  to {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uL1dlYiUyMGF2YW5jZS9tMXAxM21lYW4tQ2FuZHktUm9tYW5jZS9mcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNBTjs7QURHSTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7QUNBTjs7QURHSTtFQUNFLDJCQUFBO0VBQ0EseUNBQUE7QUNBTjs7QURHSTtFQUNFLDBCQUFBO0FDQU47O0FER0k7RUFDRSwwQkFBQTtBQ0FOOztBREdJO0VBQ0UsMEJBQUE7QUNBTjs7QURHSTtFQUNFLDBCQUFBO0FDQU47O0FER0k7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQU47O0FER0k7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUNBTjs7QURHSTtFQUNFLGNBQUE7QUNBTjs7QURHSTtFQUNFLGNBQUE7QUNBTjs7QURHSTtFQUNFLGNBQUE7QUNBTjs7QURHSTtFQUNFLGNBQUE7QUNBTjs7QURHSTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDQU47O0FER0k7RUFDRSxVQUFBO0FDQU47O0FER0k7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDQU47O0FER0k7RUFDRTtJQUNFLDJCQUFBO0lBQ0EsVUFBQTtFQ0FOO0VERUk7SUFDRSx3QkFBQTtJQUNBLFVBQUE7RUNBTjtBQUNGO0FER0k7RUFDRTtJQUNFLHdCQUFBO0lBQ0EsVUFBQTtFQ0ROO0VER0k7SUFDRSwyQkFBQTtJQUNBLFVBQUE7RUNETjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgLm5vdGlmaWNhdGlvbi1jb250YWluZXIge1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgdG9wOiAyMHB4O1xuICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgICB6LWluZGV4OiA5OTk5O1xuICAgICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICB9XG5cbiAgICAubm90aWZpY2F0aW9uIHtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICAgIGFuaW1hdGlvbjogc2xpZGVJbiAwLjNzIGVhc2U7XG4gICAgfVxuXG4gICAgLm5vdGlmaWNhdGlvbjpob3ZlciB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTVweCk7XG4gICAgICBib3gtc2hhZG93OiAwIDZweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICB9XG5cbiAgICAubm90aWZpY2F0aW9uLXN1Y2Nlc3Mge1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6ICMyOGE3NDU7XG4gICAgfVxuXG4gICAgLm5vdGlmaWNhdGlvbi1lcnJvciB7XG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogI2RjMzU0NTtcbiAgICB9XG5cbiAgICAubm90aWZpY2F0aW9uLXdhcm5pbmcge1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6ICNmZmMxMDc7XG4gICAgfVxuXG4gICAgLm5vdGlmaWNhdGlvbi1pbmZvIHtcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjMTdhMmI4O1xuICAgIH1cblxuICAgIC5ub3RpZmljYXRpb24taGVhZGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIH1cblxuICAgIC5ub3RpZmljYXRpb24tdGl0bGUge1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG5cbiAgICAubm90aWZpY2F0aW9uLXN1Y2Nlc3MgLm5vdGlmaWNhdGlvbi10aXRsZSB7XG4gICAgICBjb2xvcjogIzI4YTc0NTtcbiAgICB9XG5cbiAgICAubm90aWZpY2F0aW9uLWVycm9yIC5ub3RpZmljYXRpb24tdGl0bGUge1xuICAgICAgY29sb3I6ICNkYzM1NDU7XG4gICAgfVxuXG4gICAgLm5vdGlmaWNhdGlvbi13YXJuaW5nIC5ub3RpZmljYXRpb24tdGl0bGUge1xuICAgICAgY29sb3I6ICNmZmMxMDc7XG4gICAgfVxuXG4gICAgLm5vdGlmaWNhdGlvbi1pbmZvIC5ub3RpZmljYXRpb24tdGl0bGUge1xuICAgICAgY29sb3I6ICMxN2EyYjg7XG4gICAgfVxuXG4gICAgLm5vdGlmaWNhdGlvbi1jbG9zZSB7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAubm90aWZpY2F0aW9uLWNsb3NlOmhvdmVyIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuXG4gICAgLm5vdGlmaWNhdGlvbi1tZXNzYWdlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICB9XG5cbiAgICBAa2V5ZnJhbWVzIHNsaWRlSW4ge1xuICAgICAgZnJvbSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgIH1cbiAgICAgIHRvIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIEBrZXlmcmFtZXMgc2xpZGVPdXQge1xuICAgICAgZnJvbSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cbiAgICAgIHRvIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgfVxuICAgIH1cbiAgIiwiLm5vdGlmaWNhdGlvbi1jb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMjBweDtcbiAgcmlnaHQ6IDIwcHg7XG4gIHotaW5kZXg6IDk5OTk7XG4gIG1heC13aWR0aDogNDAwcHg7XG59XG5cbi5ub3RpZmljYXRpb24ge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgYW5pbWF0aW9uOiBzbGlkZUluIDAuM3MgZWFzZTtcbn1cblxuLm5vdGlmaWNhdGlvbjpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNXB4KTtcbiAgYm94LXNoYWRvdzogMCA2cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5ub3RpZmljYXRpb24tc3VjY2VzcyB7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjMjhhNzQ1O1xufVxuXG4ubm90aWZpY2F0aW9uLWVycm9yIHtcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICNkYzM1NDU7XG59XG5cbi5ub3RpZmljYXRpb24td2FybmluZyB7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjZmZjMTA3O1xufVxuXG4ubm90aWZpY2F0aW9uLWluZm8ge1xuICBib3JkZXItbGVmdC1jb2xvcjogIzE3YTJiODtcbn1cblxuLm5vdGlmaWNhdGlvbi1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLm5vdGlmaWNhdGlvbi10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLm5vdGlmaWNhdGlvbi1zdWNjZXNzIC5ub3RpZmljYXRpb24tdGl0bGUge1xuICBjb2xvcjogIzI4YTc0NTtcbn1cblxuLm5vdGlmaWNhdGlvbi1lcnJvciAubm90aWZpY2F0aW9uLXRpdGxlIHtcbiAgY29sb3I6ICNkYzM1NDU7XG59XG5cbi5ub3RpZmljYXRpb24td2FybmluZyAubm90aWZpY2F0aW9uLXRpdGxlIHtcbiAgY29sb3I6ICNmZmMxMDc7XG59XG5cbi5ub3RpZmljYXRpb24taW5mbyAubm90aWZpY2F0aW9uLXRpdGxlIHtcbiAgY29sb3I6ICMxN2EyYjg7XG59XG5cbi5ub3RpZmljYXRpb24tY2xvc2Uge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAwLjY7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubm90aWZpY2F0aW9uLWNsb3NlOmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLm5vdGlmaWNhdGlvbi1tZXNzYWdlIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzY2NjtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbn1cblxuQGtleWZyYW1lcyBzbGlkZUluIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNsaWRlT3V0IHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 9722:
/*!******************************************************************************************!*\
  !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavItemComponent: () => (/* binding */ NavItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 6264);
/* harmony import */ var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/theme/shared/shared.module */ 2389);
/* harmony import */ var src_app_theme_shared_service_layout_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/theme/shared/service/layout-state.service */ 4373);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 6124);
// Angular import








const _c0 = () => ["active"];
const _c1 = a0 => [a0];
function NavItemComponent_Conditional_0_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r1.item().icon);
  }
}
function NavItemComponent_Conditional_0_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.item().title);
  }
}
function NavItemComponent_Conditional_0_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.item().title, " ");
  }
}
function NavItemComponent_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 0)(1, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NavItemComponent_Conditional_0_Conditional_0_Template_a_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.closeOtherMenu($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](2, NavItemComponent_Conditional_0_Conditional_0_Conditional_2_Template, 2, 1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](3, NavItemComponent_Conditional_0_Conditional_0_Conditional_3_Template, 2, 1, "span", 3)(4, NavItemComponent_Conditional_0_Conditional_0_Conditional_4_Template, 1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r1.item().classes)("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("target", ctx_r1.item().target ? "_blank" : "_self")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](7, _c1, ctx_r1.item().url));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx_r1.item().icon ? 2 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx_r1.item().icon ? 3 : 4);
  }
}
function NavItemComponent_Conditional_0_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r1.item().icon);
  }
}
function NavItemComponent_Conditional_0_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.item().title);
  }
}
function NavItemComponent_Conditional_0_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.item().title, " ");
  }
}
function NavItemComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 0)(1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](2, NavItemComponent_Conditional_0_Conditional_1_Conditional_2_Template, 2, 1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](3, NavItemComponent_Conditional_0_Conditional_1_Conditional_3_Template, 2, 1, "span", 3)(4, NavItemComponent_Conditional_0_Conditional_1_Conditional_4_Template, 1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r1.item().classes)("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("target", ctx_r1.item().target ? "_blank" : "_self")("href", ctx_r1.item().url, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx_r1.item().icon ? 2 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx_r1.item().icon ? 3 : 4);
  }
}
function NavItemComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](0, NavItemComponent_Conditional_0_Conditional_0_Template, 5, 9, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](1, NavItemComponent_Conditional_0_Conditional_1_Template, 5, 7, "li", 0);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx_r1.item().url && !ctx_r1.item().external ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](ctx_r1.item().url && ctx_r1.item().external ? 1 : -1);
  }
}
class NavItemComponent {
  constructor() {
    // public props
    this.item = _angular_core__WEBPACK_IMPORTED_MODULE_0__.input.required(...(ngDevMode ? [{
      debugName: "item"
    }] : []));
    this.layoutState = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(src_app_theme_shared_service_layout_state_service__WEBPACK_IMPORTED_MODULE_5__.LayoutStateService);
  }
  // public method
  closeOtherMenu(event) {
    const ele = event.target;
    if (ele !== null && ele !== undefined) {
      const parent = ele.parentElement;
      const up_parent = parent.parentElement.parentElement.parentElement;
      const last_parent = up_parent.parentElement.parentElement;
      if (last_parent.classList.contains('coded-submenu')) {
        up_parent.classList.remove('coded-trigger');
        up_parent.classList.remove('active');
      } else {
        const sections = document.querySelectorAll('.coded-hasmenu');
        for (let i = 0; i < sections.length; i++) {
          sections[i].classList.remove('active');
          sections[i].classList.remove('coded-trigger');
        }
      }
      if (parent.classList.contains('coded-hasmenu')) {
        parent.classList.add('coded-trigger');
        parent.classList.add('active');
      } else if (up_parent.classList.contains('coded-hasmenu')) {
        up_parent.classList.add('coded-trigger');
        up_parent.classList.add('active');
      } else if (last_parent.classList.contains('coded-hasmenu')) {
        last_parent.classList.add('coded-trigger');
        last_parent.classList.add('active');
      }
    }
    // this.layoutState.toggleNavCollapsedMob();
    if (document.querySelector('app-navigation.coded-navbar').classList.contains('mob-open')) {
      document.querySelector('app-navigation.coded-navbar').classList.remove('mob-open');
    }
  }
  static {
    this.ɵfac = function NavItemComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NavItemComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: NavItemComponent,
      selectors: [["app-nav-item"]],
      inputs: {
        item: [1, "item"]
      },
      decls: 1,
      vars: 1,
      consts: [[3, "ngClass", "routerLinkActive"], [1, "nav-link", 3, "click", "target", "routerLink"], [1, "coded-micon"], [1, "coded-mtext"], [3, "ngClass"], [3, "target", "href"]],
      template: function NavItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditionalCreate"](0, NavItemComponent_Conditional_0_Template, 2, 2);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](!ctx.item().hidden ? 0 : -1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 9772:
/*!************************************************************************************!*\
  !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavContentComponent: () => (/* binding */ NavContentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6223);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3305);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 6264);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../navigation */ 7238);
/* harmony import */ var _nav_collapse_nav_collapse_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav-collapse/nav-collapse.component */ 1158);
/* harmony import */ var _nav_group_nav_group_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nav-group/nav-group.component */ 4094);
/* harmony import */ var _nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./nav-item/nav-item.component */ 9722);
/* harmony import */ var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/theme/shared/shared.module */ 2389);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 3900);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var ngx_scrollbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-scrollbar */ 4091);
// Angular import



//theme version

// project import




// NgScrollbarModule





function NavContentComponent_For_4_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-nav-group", 3);
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("item", item_r1);
  }
}
function NavContentComponent_For_4_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-nav-collapse", 3);
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("item", item_r1);
  }
}
function NavContentComponent_For_4_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-nav-item", 3);
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("item", item_r1);
  }
}
function NavContentComponent_For_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵconditionalCreate"](0, NavContentComponent_For_4_Conditional_0_Conditional_0_Template, 1, 1, "app-nav-group", 3)(1, NavContentComponent_For_4_Conditional_0_Conditional_1_Template, 1, 1, "app-nav-collapse", 3)(2, NavContentComponent_For_4_Conditional_0_Conditional_2_Template, 1, 1, "app-nav-item", 3);
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵconditional"](item_r1.type === "group" ? 0 : item_r1.type === "collapse" ? 1 : item_r1.type === "item" ? 2 : -1);
  }
}
function NavContentComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵconditionalCreate"](0, NavContentComponent_For_4_Conditional_0_Template, 3, 1);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵconditional"](!item_r1.hidden ? 0 : -1);
  }
}
class NavContentComponent {
  // Constructor
  constructor() {
    this.location = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_2__.Location);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router);
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subject();
    // public props
    this.NavCollapsedMob = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.output)();
    this.SubmenuCollapse = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.output)();
    // version
    this.title = 'Demo application for version numbering';
    this.currentApplicationVersion = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.appVersion;
    this.navigations = (0,_navigation__WEBPACK_IMPORTED_MODULE_6__.getNavigationItems)();
    this.windowWidth = window.innerWidth;
  }
  // Life cycle events
  ngOnInit() {
    if (this.windowWidth < 1025) {
      setTimeout(() => {
        document.querySelector('.coded-navbar').classList.add('menupos-static');
      }, 500);
    }
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy$)).subscribe(() => {
      this.navigations = (0,_navigation__WEBPACK_IMPORTED_MODULE_6__.getNavigationItems)();
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  fireOutClick() {
    let current_url = this.location.path();
    // eslint-disable-next-line
    // @ts-ignore
    if (this.location['_baseHref']) {
      // eslint-disable-next-line
      // @ts-ignore
      current_url = this.location['_baseHref'] + this.location.path();
    }
    const link = "a.nav-link[ href='" + current_url + "' ]";
    const ele = document.querySelector(link);
    if (ele !== null && ele !== undefined) {
      const parent = ele.parentElement;
      const up_parent = parent?.parentElement?.parentElement;
      const last_parent = up_parent?.parentElement;
      if (parent?.classList.contains('coded-hasmenu')) {
        parent.classList.add('coded-trigger', 'active');
      } else if (up_parent?.classList.contains('coded-hasmenu')) {
        up_parent.classList.add('coded-trigger', 'active');
      } else if (last_parent?.classList.contains('coded-hasmenu')) {
        last_parent.classList.add('coded-trigger', 'active');
      }
    }
  }
  static {
    this.ɵfac = function NavContentComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NavContentComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
      type: NavContentComponent,
      selectors: [["app-nav-content"]],
      outputs: {
        NavCollapsedMob: "NavCollapsedMob",
        SubmenuCollapse: "SubmenuCollapse"
      },
      decls: 5,
      vars: 0,
      consts: [["visibility", "hover", 2, "height", "calc(100vh - 70px)"], [1, "navbar-content"], [1, "nav", "coded-inner-navbar", 3, "click", "keydown.space", "keydown.enter"], [3, "item"]],
      template: function NavContentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ng-scrollbar", 0)(1, "div", 1)(2, "ul", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function NavContentComponent_Template_ul_click_2_listener() {
            return ctx.fireOutClick();
          })("keydown.space", function NavContentComponent_Template_ul_keydown_space_2_listener() {
            return ctx.fireOutClick();
          })("keydown.enter", function NavContentComponent_Template_ul_keydown_enter_2_listener() {
            return ctx.fireOutClick();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrepeaterCreate"](3, NavContentComponent_For_4_Template, 1, 1, null, null, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrepeater"](ctx.navigations);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _nav_collapse_nav_collapse_component__WEBPACK_IMPORTED_MODULE_7__.NavCollapseComponent, _nav_group_nav_group_component__WEBPACK_IMPORTED_MODULE_8__.NavGroupComponent, _nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_9__.NavItemComponent, src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__.SharedModule, ngx_scrollbar__WEBPACK_IMPORTED_MODULE_15__.NgScrollbar],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 9863:
/*!***************************************************************************!*\
  !*** ./src/app/theme/layout/admin/nav-bar/nav-logo/nav-logo.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavLogoComponent: () => (/* binding */ NavLogoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3305);
/* harmony import */ var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/theme/shared/shared.module */ 2389);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 9748);
// Angular import


// project import



const _c0 = a0 => ({
  on: a0
});
class NavLogoComponent {
  // Constructor
  constructor() {
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router);
    this.NavCollapse = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.output)();
  }
  // public method
  navCollapse() {
    if (window.innerWidth >= 1025) {
      this.navCollapsed = !this.navCollapsed;
      this.NavCollapse.emit();
    }
  }
  returnToHome() {
    this.router.navigate(['/default']);
  }
  static {
    this.ɵfac = function NavLogoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NavLogoComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: NavLogoComponent,
      selectors: [["app-nav-logo"]],
      inputs: {
        navCollapsed: "navCollapsed"
      },
      outputs: {
        NavCollapse: "NavCollapse"
      },
      decls: 8,
      vars: 3,
      consts: [[1, "m-header"], [1, "b-brand", 3, "click"], ["src", "assets/images/logo3.png", "alt", "darkMode-logo", 1, "logo"], [1, "brand-text", "brand-script"], [1, "pc-h-item"], ["type", "button", "title", "Cliquer pour replier le menu", "aria-label", "Replier le menu", 1, "pc-head-link", "head-link-secondary", "m-0", "mobile-menu", "border-0", "bg-transparent", 3, "click", "ngClass"], [1, "ti", "ti-menu-2"]],
      template: function NavLogoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NavLogoComponent_Template_a_click_1_listener() {
            return ctx.returnToHome();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Royal Center");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4)(6, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NavLogoComponent_Template_button_click_6_listener() {
            return ctx.navCollapse();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](1, _c0, ctx.navCollapsed));
        }
      },
      dependencies: [src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass],
      styles: ["[_nghost-%COMP%] {\n  --grenat-700: #6d1835;\n  --grenat-500: #8a2748;\n  --gold-500: #d4aa54;\n  --beige-100: #fdf8ef;\n  --beige-200: #f7efe1;\n  --beige-300: #efe3cf;\n  --white: #ffffff;\n  --text-main: #3f2430;\n  --text-muted: #705565;\n  display: block;\n  background: linear-gradient(180deg, var(--beige-100) 0%, var(--beige-200) 100%);\n  color: var(--text-main);\n  font-family: \"Plus Jakarta Sans\", sans-serif;\n}\n\n.b-brand[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n}\n\n.logo[_ngcontent-%COMP%] {\n  height: 38px;\n  width: auto;\n  object-fit: contain;\n  border-radius: 50%;\n}\n\n.brand-text[_ngcontent-%COMP%] {\n  color: var(--grenat-700);\n}\n\n.brand-script[_ngcontent-%COMP%] {\n  font-family: \"Brush Script MT\", \"Segoe Script\", \"Lucida Handwriting\", cursive;\n  font-size: 2rem;\n  font-weight: 600;\n  letter-spacing: 0.02em;\n  line-height: 1;\n  background: linear-gradient(135deg, var(--grenat-500), var(--gold-500));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGhlbWUvbGF5b3V0L2FkbWluL25hdi1iYXIvbmF2LWxvZ28vbmF2LWxvZ28uY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi9XZWIlMjBhdmFuY2UvbTFwMTNtZWFuLUNhbmR5LVJvbWFuY2UvZnJvbnRlbmQvc3JjL2FwcC90aGVtZS9sYXlvdXQvYWRtaW4vbmF2LWJhci9uYXYtbG9nby9uYXYtbG9nby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUVBLGNBQUE7RUFDQSwrRUFBQTtFQUNBLHVCQUFBO0VBQ0EsNENBQUE7QUNBRjs7QURFQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBRENFO0VBQ0Usd0JBQUE7QUNFSjs7QURBRTtFQUNFLDZFQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsdUVBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0EscUJBQUE7QUNHSiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAtLWdyZW5hdC03MDA6ICM2ZDE4MzU7XHJcbiAgLS1ncmVuYXQtNTAwOiAjOGEyNzQ4O1xyXG4gIC0tZ29sZC01MDA6ICNkNGFhNTQ7XHJcbiAgLS1iZWlnZS0xMDA6ICNmZGY4ZWY7XHJcbiAgLS1iZWlnZS0yMDA6ICNmN2VmZTE7XHJcbiAgLS1iZWlnZS0zMDA6ICNlZmUzY2Y7XHJcbiAgLS13aGl0ZTogI2ZmZmZmZjtcclxuICAtLXRleHQtbWFpbjogIzNmMjQzMDtcclxuICAtLXRleHQtbXV0ZWQ6ICM3MDU1NjU7XHJcblxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLWJlaWdlLTEwMCkgMCUsIHZhcigtLWJlaWdlLTIwMCkgMTAwJSk7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtbWFpbik7XHJcbiAgZm9udC1mYW1pbHk6ICdQbHVzIEpha2FydGEgU2FucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmItYnJhbmQge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICBoZWlnaHQ6IDM4cHg7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuICAuYnJhbmQtdGV4dCB7XHJcbiAgICBjb2xvcjogdmFyKC0tZ3JlbmF0LTcwMCk7XHJcbiAgfVxyXG4gIC5icmFuZC1zY3JpcHQge1xyXG4gICAgZm9udC1mYW1pbHk6ICdCcnVzaCBTY3JpcHQgTVQnLCAnU2Vnb2UgU2NyaXB0JywgJ0x1Y2lkYSBIYW5kd3JpdGluZycsIGN1cnNpdmU7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tZ3JlbmF0LTUwMCksIHZhcigtLWdvbGQtNTAwKSk7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICB9XHJcbiIsIjpob3N0IHtcbiAgLS1ncmVuYXQtNzAwOiAjNmQxODM1O1xuICAtLWdyZW5hdC01MDA6ICM4YTI3NDg7XG4gIC0tZ29sZC01MDA6ICNkNGFhNTQ7XG4gIC0tYmVpZ2UtMTAwOiAjZmRmOGVmO1xuICAtLWJlaWdlLTIwMDogI2Y3ZWZlMTtcbiAgLS1iZWlnZS0zMDA6ICNlZmUzY2Y7XG4gIC0td2hpdGU6ICNmZmZmZmY7XG4gIC0tdGV4dC1tYWluOiAjM2YyNDMwO1xuICAtLXRleHQtbXV0ZWQ6ICM3MDU1NjU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1iZWlnZS0xMDApIDAlLCB2YXIoLS1iZWlnZS0yMDApIDEwMCUpO1xuICBjb2xvcjogdmFyKC0tdGV4dC1tYWluKTtcbiAgZm9udC1mYW1pbHk6IFwiUGx1cyBKYWthcnRhIFNhbnNcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmItYnJhbmQge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmxvZ28ge1xuICBoZWlnaHQ6IDM4cHg7XG4gIHdpZHRoOiBhdXRvO1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5icmFuZC10ZXh0IHtcbiAgY29sb3I6IHZhcigtLWdyZW5hdC03MDApO1xufVxuXG4uYnJhbmQtc2NyaXB0IHtcbiAgZm9udC1mYW1pbHk6IFwiQnJ1c2ggU2NyaXB0IE1UXCIsIFwiU2Vnb2UgU2NyaXB0XCIsIFwiTHVjaWRhIEhhbmR3cml0aW5nXCIsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLWdyZW5hdC01MDApLCB2YXIoLS1nb2xkLTUwMCkpO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map