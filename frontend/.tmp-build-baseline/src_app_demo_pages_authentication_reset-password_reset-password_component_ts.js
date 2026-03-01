"use strict";
(self["webpackChunkfree_version"] = self["webpackChunkfree_version"] || []).push([["src_app_demo_pages_authentication_reset-password_reset-password_component_ts"],{

/***/ 6246:
/*!**************************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/reset-password/reset-password.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResetPasswordComponent: () => (/* binding */ ResetPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3305);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 6264);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/auth.service */ 4796);
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/notification.service */ 7473);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 6124);










const _c0 = () => ["/login"];
function ResetPasswordComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Email is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function ResetPasswordComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Reset code is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function ResetPasswordComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " New password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function ResetPasswordComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r0.error, " ");
  }
}
function ResetPasswordComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r0.success, " ");
  }
}
function ResetPasswordComponent_span_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "span", 31);
  }
}
class ResetPasswordComponent {
  constructor() {
    this.authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService);
    this.cdr = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef);
    this.route = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router);
    this.notificationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_7__.NotificationService);
    this.submitted = false;
    this.loading = false;
    this.error = '';
    this.success = '';
    this.model = {
      email: '',
      code: '',
      newPassword: ''
    };
  }
  ngOnInit() {
    const email = this.route.snapshot.queryParamMap.get('email');
    if (email) {
      this.model.email = email;
    }
  }
  onSubmit(event) {
    event.preventDefault();
    this.submitted = true;
    this.error = '';
    this.success = '';
    if (!this.model.email || !this.model.code || !this.model.newPassword) {
      this.error = 'Tous les champs sont requis';
      return;
    }
    const codeNumber = Number(this.model.code);
    if (isNaN(codeNumber)) {
      this.error = 'Le code doit être un nombre à 6 chiffres';
      return;
    }
    this.loading = true;
    this.authService.resetPassword(this.model.email, codeNumber, this.model.newPassword).subscribe({
      next: res => {
        this.success = res.message || 'Mot de passe réinitialisé avec succès.';
        this.notificationService.success('Mot de passe réinitialisé avec succès');
        this.loading = false;
        Promise.resolve().then(() => {
          this.cdr.detectChanges();
        });
        this.router.navigate(['/login']);
      },
      error: err => {
        this.notificationService.error('Erreur lors de la réinitialisation', err?.error?.message || 'Une erreur est survenue lors de la réinitialisation.');
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }
  static {
    this.ɵfac = function ResetPasswordComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ResetPasswordComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: ResetPasswordComponent,
      selectors: [["app-reset-password"]],
      decls: 43,
      vars: 19,
      consts: [[1, "auth-main"], [1, "auth-wrapper", "v3"], [1, "auth-form"], [1, "card", "my-5"], [1, "card-body"], ["novalidate", "", 3, "ngSubmit"], ["href", "#", 1, "d-flex", "justify-content-center", 3, "click"], ["src", "assets/images/logo3.png", "alt", "logo", 1, "auth-logo-img"], [1, "brand-text", "brand-script"], [1, "row"], [1, "d-flex", "justify-content-center"], [1, "auth-header"], [1, "text-secondary", "mt-5"], [1, "fs-4", "mt-2"], [1, "form-floating", "mb-3"], ["type", "email", "id", "email", "name", "email", "placeholder", "Email Address", 1, "form-control", 3, "ngModelChange", "ngModel", "readonly"], ["for", "email"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "id", "code", "name", "code", "maxlength", "6", "placeholder", "Code", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "code"], ["type", "password", "id", "newPassword", "name", "newPassword", "placeholder", "New password", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "newPassword"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], ["class", "alert alert-success", "role", "alert", 4, "ngIf"], [1, "d-grid", "mt-4"], ["type", "submit", 1, "btn", "btn-secondary", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], [3, "routerLink"], [1, "invalid-feedback"], ["role", "alert", 1, "alert", "alert-danger"], ["role", "alert", 1, "alert", "alert-success"], [1, "spinner-border", "spinner-border-sm", "me-2"]],
      template: function ResetPasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "form", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function ResetPasswordComponent_Template_form_ngSubmit_5_listener($event) {
            return ctx.onSubmit($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ResetPasswordComponent_Template_a_click_6_listener($event) {
            return $event.preventDefault();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "img", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "Royal Center");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 9)(11, "div", 10)(12, "div", 11)(13, "h2", 12)(14, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "Reset your password");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "p", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "Enter the code you received and your new password");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 14)(19, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function ResetPasswordComponent_Template_input_ngModelChange_19_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx.model.email, $event) || (ctx.model.email = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "Email address");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](22, ResetPasswordComponent_div_22_Template, 2, 0, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "div", 14)(24, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function ResetPasswordComponent_Template_input_ngModelChange_24_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx.model.code, $event) || (ctx.model.code = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "label", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, "Reset code");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](27, ResetPasswordComponent_div_27_Template, 2, 0, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "div", 14)(29, "input", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function ResetPasswordComponent_Template_input_ngModelChange_29_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx.model.newPassword, $event) || (ctx.model.newPassword = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "label", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31, "New password");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](32, ResetPasswordComponent_div_32_Template, 2, 0, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](33, ResetPasswordComponent_div_33_Template, 2, 1, "div", 22)(34, ResetPasswordComponent_div_34_Template, 2, 1, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "div", 24)(36, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](37, ResetPasswordComponent_span_37_Template, 1, 0, "span", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38, " Reset password ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](39, "hr");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "h5", 10)(41, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](42, "Back to login");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("is-invalid", ctx.submitted && !ctx.model.email);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx.model.email);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("readonly", !!ctx.model.email);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.submitted && !ctx.model.email);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("is-invalid", ctx.submitted && !ctx.model.code);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx.model.code);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.submitted && !ctx.model.code);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("is-invalid", ctx.submitted && !ctx.model.newPassword);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx.model.newPassword);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.submitted && !ctx.model.newPassword);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.error);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.success);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](18, _c0));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink],
      styles: ["[_nghost-%COMP%] {\n  --grenat-700: #6d1835;\n  --grenat-500: #8a2748;\n  --gold-500: #d4aa54;\n  --beige-100: #fdf8ef;\n  --beige-200: #f7efe1;\n  --beige-300: #efe3cf;\n  --white: #ffffff;\n  --text-main: #3f2430;\n  --text-muted: #705565;\n  display: block;\n  background: linear-gradient(180deg, var(--beige-100) 0%, var(--beige-200) 100%);\n  color: var(--text-main);\n  font-family: \"Plus Jakarta Sans\", sans-serif;\n}\n\n.auth-logo-img[_ngcontent-%COMP%] {\n  height: 46px;\n  width: auto;\n  object-fit: contain;\n  border-radius: 50%;\n}\n\n.brand-text[_ngcontent-%COMP%] {\n  color: var(--grenat-700);\n}\n\n.brand-script[_ngcontent-%COMP%] {\n  font-family: \"Brush Script MT\", \"Segoe Script\", \"Lucida Handwriting\", cursive;\n  font-size: 2rem;\n  font-weight: 600;\n  letter-spacing: 0.02em;\n  line-height: 1;\n  background: linear-gradient(135deg, var(--grenat-500), var(--gold-500));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVtby9wYWdlcy9hdXRoZW50aWNhdGlvbi9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uL1dlYiUyMGF2YW5jZS9tMXAxM21lYW4tQ2FuZHktUm9tYW5jZS9mcm9udGVuZC9zcmMvYXBwL2RlbW8vcGFnZXMvYXV0aGVudGljYXRpb24vcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFFQSxjQUFBO0VBQ0EsK0VBQUE7RUFDQSx1QkFBQTtFQUNBLDRDQUFBO0FDREY7O0FER0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNBRjs7QURFRTtFQUNFLHdCQUFBO0FDQ0o7O0FEQ0U7RUFDRSw2RUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLHVFQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFCQUFBO0FDRUoiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBSZXVzZSBsb2dpbiBzdHlsZXMgaWYgbmVlZGVkOyBrZXB0IG1pbmltYWwgZm9yIGJyYW5kIHJlbmRlcmluZy5cclxuOmhvc3Qge1xyXG4gIC0tZ3JlbmF0LTcwMDogIzZkMTgzNTtcclxuICAtLWdyZW5hdC01MDA6ICM4YTI3NDg7XHJcbiAgLS1nb2xkLTUwMDogI2Q0YWE1NDtcclxuICAtLWJlaWdlLTEwMDogI2ZkZjhlZjtcclxuICAtLWJlaWdlLTIwMDogI2Y3ZWZlMTtcclxuICAtLWJlaWdlLTMwMDogI2VmZTNjZjtcclxuICAtLXdoaXRlOiAjZmZmZmZmO1xyXG4gIC0tdGV4dC1tYWluOiAjM2YyNDMwO1xyXG4gIC0tdGV4dC1tdXRlZDogIzcwNTU2NTtcclxuXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0tYmVpZ2UtMTAwKSAwJSwgdmFyKC0tYmVpZ2UtMjAwKSAxMDAlKTtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1tYWluKTtcclxuICBmb250LWZhbWlseTogJ1BsdXMgSmFrYXJ0YSBTYW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG4uYXV0aC1sb2dvLWltZyB7XHJcbiAgaGVpZ2h0OiA0NnB4O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbiAgLmJyYW5kLXRleHQge1xyXG4gICAgY29sb3I6IHZhcigtLWdyZW5hdC03MDApO1xyXG4gIH1cclxuICAuYnJhbmQtc2NyaXB0IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQnJ1c2ggU2NyaXB0IE1UJywgJ1NlZ29lIFNjcmlwdCcsICdMdWNpZGEgSGFuZHdyaXRpbmcnLCBjdXJzaXZlO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLWdyZW5hdC01MDApLCB2YXIoLS1nb2xkLTUwMCkpO1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgfVxyXG5cclxuIiwiOmhvc3Qge1xuICAtLWdyZW5hdC03MDA6ICM2ZDE4MzU7XG4gIC0tZ3JlbmF0LTUwMDogIzhhMjc0ODtcbiAgLS1nb2xkLTUwMDogI2Q0YWE1NDtcbiAgLS1iZWlnZS0xMDA6ICNmZGY4ZWY7XG4gIC0tYmVpZ2UtMjAwOiAjZjdlZmUxO1xuICAtLWJlaWdlLTMwMDogI2VmZTNjZjtcbiAgLS13aGl0ZTogI2ZmZmZmZjtcbiAgLS10ZXh0LW1haW46ICMzZjI0MzA7XG4gIC0tdGV4dC1tdXRlZDogIzcwNTU2NTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLWJlaWdlLTEwMCkgMCUsIHZhcigtLWJlaWdlLTIwMCkgMTAwJSk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW1haW4pO1xuICBmb250LWZhbWlseTogXCJQbHVzIEpha2FydGEgU2Fuc1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uYXV0aC1sb2dvLWltZyB7XG4gIGhlaWdodDogNDZweDtcbiAgd2lkdGg6IGF1dG87XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmJyYW5kLXRleHQge1xuICBjb2xvcjogdmFyKC0tZ3JlbmF0LTcwMCk7XG59XG5cbi5icmFuZC1zY3JpcHQge1xuICBmb250LWZhbWlseTogXCJCcnVzaCBTY3JpcHQgTVRcIiwgXCJTZWdvZSBTY3JpcHRcIiwgXCJMdWNpZGEgSGFuZHdyaXRpbmdcIiwgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuICBsaW5lLWhlaWdodDogMTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tZ3JlbmF0LTUwMCksIHZhcigtLWdvbGQtNTAwKSk7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_demo_pages_authentication_reset-password_reset-password_component_ts.js.map