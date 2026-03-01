"use strict";
(self["webpackChunkfree_version"] = self["webpackChunkfree_version"] || []).push([["src_app_demo_pages_authentication_login_login_component_ts"],{

/***/ 5994:
/*!********************************************************************!*\
  !*** ./src/app/demo/pages/authentication/login/login.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3305);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 6264);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/auth.service */ 4796);
/* harmony import */ var _services_boutique_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/boutique.service */ 700);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 6124);










const _c0 = () => ["/forgot-password"];
const _c1 = () => ["/register"];
function LoginComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Email is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function LoginComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function LoginComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r0.error, " ");
  }
}
function LoginComponent_span_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "span", 38);
  }
}
class LoginComponent {
  constructor() {
    this.authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService);
    this.boutiqueService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_boutique_service__WEBPACK_IMPORTED_MODULE_7__.BoutiqueService);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router);
    this.cdr = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef);
    this.submitted = false;
    this.loading = false;
    this.error = '';
    this.showPassword = false;
    this.model = {
      email: '',
      password: ''
    };
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  onSubmit(event) {
    event.preventDefault(); // 🔥 empêche le GET et l’URL bizarre
    this.submitted = true;
    this.error = '';
    if (!this.model.email || !this.model.password) {
      this.error = 'Email et mot de passe requis';
      return;
    }
    this.loading = true;
    this.authService.login(this.model.email, this.model.password).subscribe({
      next: () => {
        if (this.authService.hasRole('user')) {
          this.router.navigate(['/produits']);
          this.loading = false;
          return;
        }
        if (this.authService.hasRole('admin_boutique')) {
          this.boutiqueService.refreshMyBoutiqueStatus().subscribe({
            next: status => {
              if (!status.hasBoutique) {
                this.router.navigate(['/boutique/boxes']);
              } else if (!status.isActive) {
                this.router.navigate(['/boutique/informations']);
              } else {
                this.router.navigate(['/default']);
              }
              this.loading = false;
              this.cdr.detectChanges();
            },
            error: () => {
              this.router.navigate(['/default']);
              this.loading = false;
              this.cdr.detectChanges();
            }
          });
          return;
        }
        if (this.authService.isAdminCenterRole()) {
          this.router.navigate(['/default']);
          this.loading = false;
          return;
        } else {
          this.router.navigate(['/default']);
          this.loading = false;
        }
      },
      error: () => {
        this.error = 'Email ou mot de passe incorrect';
        this.loading = false;
        Promise.resolve().then(() => {
          this.cdr.detectChanges();
        });
      },
      complete: () => {
        if (!this.authService.hasRole('admin_boutique')) {
          this.loading = false;
        }
      }
    });
  }
  static {
    this.ɵfac = function LoginComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LoginComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 48,
      vars: 18,
      consts: [[1, "auth-main"], [1, "auth-wrapper", "v3"], [1, "auth-form"], [1, "card", "my-5"], [1, "card-body"], ["novalidate", "", 3, "ngSubmit"], ["href", "/landing", 1, "d-flex", "justify-content-center", 3, "click"], ["src", "assets/images/logo3.png", "alt", "logo", 1, "auth-logo-img"], [1, "brand-text", "brand-script"], [1, "row"], [1, "d-flex", "justify-content-center"], [1, "auth-header"], [1, "text-secondary", "mt-5"], [1, "fs-4", "mt-2"], [1, "form-floating", "mb-3"], ["type", "email", "id", "floatingInput", "name", "email", "placeholder", "Email Address", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "floatingInput"], ["class", "invalid-feedback", 4, "ngIf"], [1, "mb-3"], ["for", "password", 1, "form-label"], [1, "input-group"], ["id", "password", "name", "password", "placeholder", "Password", 1, "form-control", 3, "ngModelChange", "type", "ngModel"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "ti", 3, "ngClass"], ["class", "invalid-feedback d-block", 4, "ngIf"], [1, "d-flex", "mt-1", "justify-content-between"], [1, "form-check"], ["type", "checkbox", "id", "customCheckc1", 1, "form-check-input", "input-primary"], ["for", "customCheckc1", 1, "form-check-label", "text-muted"], [1, "text-secondary"], [3, "routerLink"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [1, "d-grid", "mt-4"], ["type", "submit", 1, "btn", "btn-secondary", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], [1, "invalid-feedback"], [1, "invalid-feedback", "d-block"], ["role", "alert", 1, "alert", "alert-danger"], [1, "spinner-border", "spinner-border-sm", "me-2"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "form", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_5_listener($event) {
            return ctx.onSubmit($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_6_listener($event) {
            return $event.preventDefault();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "img", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "Royal Center");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 9)(11, "div", 10)(12, "div", 11)(13, "h2", 12)(14, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "Hi, Welcome Back");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "p", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "Enter your credentials to continue");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 14)(19, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_19_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx.model.email, $event) || (ctx.model.email = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "Email address / Username");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](22, LoginComponent_div_22_Template, 2, 0, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "div", 18)(24, "label", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 20)(27, "input", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_27_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx.model.password, $event) || (ctx.model.password = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "button", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_28_listener() {
            return ctx.togglePasswordVisibility();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](29, "i", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](30, LoginComponent_div_30_Template, 2, 0, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "div", 25)(32, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](33, "input", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "label", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35, "Remember me");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "h5", 29)(37, "a", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38, "Forgot Password?");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](39, LoginComponent_div_39_Template, 2, 1, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "div", 32)(41, "button", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](42, LoginComponent_span_42_Template, 1, 0, "span", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43, " Sign In ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](44, "hr");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "h5", 10)(46, "a", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](47, "Don't have an account?");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("is-invalid", ctx.submitted && !ctx.model.email);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx.model.email);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.submitted && !ctx.model.email);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("is-invalid", ctx.submitted && !ctx.model.password);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("type", ctx.showPassword ? "text" : "password");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx.model.password);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("aria-label", ctx.showPassword ? "Hide password" : "Show password");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", ctx.showPassword ? "ti-eye-off" : "ti-eye");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.submitted && !ctx.model.password);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](16, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.error);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](17, _c1));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
      styles: ["[_nghost-%COMP%] {\n  --grenat-700: #6d1835;\n  --grenat-500: #8a2748;\n  --gold-500: #d4aa54;\n  --beige-100: #fdf8ef;\n  --beige-200: #f7efe1;\n  --beige-300: #efe3cf;\n  --white: #ffffff;\n  --text-main: #3f2430;\n  --text-muted: #705565;\n  display: block;\n  background: linear-gradient(180deg, var(--beige-100) 0%, var(--beige-200) 100%);\n  color: var(--text-main);\n  font-family: \"Plus Jakarta Sans\", sans-serif;\n}\n\n.input-group[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%] {\n  min-width: 46px;\n}\n\n.input-group[_ngcontent-%COMP%]   .form-control.is-invalid[_ngcontent-%COMP%] {\n  z-index: 2;\n}\n\n.auth-logo-img[_ngcontent-%COMP%] {\n  height: 46px;\n  width: auto;\n  object-fit: contain;\n  border-radius: 50%;\n}\n\n.brand-text[_ngcontent-%COMP%] {\n  color: var(--grenat-700);\n}\n\n.brand-script[_ngcontent-%COMP%] {\n  font-family: \"Brush Script MT\", \"Segoe Script\", \"Lucida Handwriting\", cursive;\n  font-size: 2rem;\n  font-weight: 600;\n  letter-spacing: 0.02em;\n  line-height: 1;\n  background: linear-gradient(135deg, var(--grenat-500), var(--gold-500));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVtby9wYWdlcy9hdXRoZW50aWNhdGlvbi9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uL1dlYiUyMGF2YW5jZS9tMXAxM21lYW4tQ2FuZHktUm9tYW5jZS9mcm9udGVuZC9zcmMvYXBwL2RlbW8vcGFnZXMvYXV0aGVudGljYXRpb24vbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFFQSxjQUFBO0VBQ0EsK0VBQUE7RUFDQSx1QkFBQTtFQUNBLDRDQUFBO0FDQUY7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURDRTtFQUNFLHdCQUFBO0FDRUo7O0FEQUU7RUFDRSw2RUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLHVFQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFCQUFBO0FDR0oiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgLS1ncmVuYXQtNzAwOiAjNmQxODM1O1xyXG4gIC0tZ3JlbmF0LTUwMDogIzhhMjc0ODtcclxuICAtLWdvbGQtNTAwOiAjZDRhYTU0O1xyXG4gIC0tYmVpZ2UtMTAwOiAjZmRmOGVmO1xyXG4gIC0tYmVpZ2UtMjAwOiAjZjdlZmUxO1xyXG4gIC0tYmVpZ2UtMzAwOiAjZWZlM2NmO1xyXG4gIC0td2hpdGU6ICNmZmZmZmY7XHJcbiAgLS10ZXh0LW1haW46ICMzZjI0MzA7XHJcbiAgLS10ZXh0LW11dGVkOiAjNzA1NTY1O1xyXG5cclxuICBkaXNwbGF5OiBibG9jaztcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1iZWlnZS0xMDApIDAlLCB2YXIoLS1iZWlnZS0yMDApIDEwMCUpO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LW1haW4pO1xyXG4gIGZvbnQtZmFtaWx5OiAnUGx1cyBKYWthcnRhIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5pbnB1dC1ncm91cCA+IC5idG4ge1xyXG4gIG1pbi13aWR0aDogNDZweDtcclxufVxyXG5cclxuLmlucHV0LWdyb3VwIC5mb3JtLWNvbnRyb2wuaXMtaW52YWxpZCB7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuLmF1dGgtbG9nby1pbWcge1xyXG4gIGhlaWdodDogNDZweDtcclxuICB3aWR0aDogYXV0bztcclxuICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4gIC5icmFuZC10ZXh0IHtcclxuICAgIGNvbG9yOiB2YXIoLS1ncmVuYXQtNzAwKTtcclxuICB9XHJcbiAgLmJyYW5kLXNjcmlwdCB7XHJcbiAgICBmb250LWZhbWlseTogJ0JydXNoIFNjcmlwdCBNVCcsICdTZWdvZSBTY3JpcHQnLCAnTHVjaWRhIEhhbmR3cml0aW5nJywgY3Vyc2l2ZTtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1ncmVuYXQtNTAwKSwgdmFyKC0tZ29sZC01MDApKTtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gIH1cclxuIiwiOmhvc3Qge1xuICAtLWdyZW5hdC03MDA6ICM2ZDE4MzU7XG4gIC0tZ3JlbmF0LTUwMDogIzhhMjc0ODtcbiAgLS1nb2xkLTUwMDogI2Q0YWE1NDtcbiAgLS1iZWlnZS0xMDA6ICNmZGY4ZWY7XG4gIC0tYmVpZ2UtMjAwOiAjZjdlZmUxO1xuICAtLWJlaWdlLTMwMDogI2VmZTNjZjtcbiAgLS13aGl0ZTogI2ZmZmZmZjtcbiAgLS10ZXh0LW1haW46ICMzZjI0MzA7XG4gIC0tdGV4dC1tdXRlZDogIzcwNTU2NTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLWJlaWdlLTEwMCkgMCUsIHZhcigtLWJlaWdlLTIwMCkgMTAwJSk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW1haW4pO1xuICBmb250LWZhbWlseTogXCJQbHVzIEpha2FydGEgU2Fuc1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uaW5wdXQtZ3JvdXAgPiAuYnRuIHtcbiAgbWluLXdpZHRoOiA0NnB4O1xufVxuXG4uaW5wdXQtZ3JvdXAgLmZvcm0tY29udHJvbC5pcy1pbnZhbGlkIHtcbiAgei1pbmRleDogMjtcbn1cblxuLmF1dGgtbG9nby1pbWcge1xuICBoZWlnaHQ6IDQ2cHg7XG4gIHdpZHRoOiBhdXRvO1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5icmFuZC10ZXh0IHtcbiAgY29sb3I6IHZhcigtLWdyZW5hdC03MDApO1xufVxuXG4uYnJhbmQtc2NyaXB0IHtcbiAgZm9udC1mYW1pbHk6IFwiQnJ1c2ggU2NyaXB0IE1UXCIsIFwiU2Vnb2UgU2NyaXB0XCIsIFwiTHVjaWRhIEhhbmR3cml0aW5nXCIsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLWdyZW5hdC01MDApLCB2YXIoLS1nb2xkLTUwMCkpO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_demo_pages_authentication_login_login_component_ts.js.map