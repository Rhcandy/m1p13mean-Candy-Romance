"use strict";
(self["webpackChunkfree_version"] = self["webpackChunkfree_version"] || []).push([["src_app_demo_pages_authentication_forgot-password_forgot-password_component_ts"],{

/***/ 5886:
/*!****************************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/forgot-password/forgot-password.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForgotPasswordComponent: () => (/* binding */ ForgotPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3305);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 6264);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/auth.service */ 4796);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 6124);









const _c0 = () => ["/login"];
function ForgotPasswordComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Email is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ForgotPasswordComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r0.error, " ");
  }
}
function ForgotPasswordComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r0.success, " ");
  }
}
function ForgotPasswordComponent_span_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "span", 27);
  }
}
class ForgotPasswordComponent {
  constructor() {
    this.authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService);
    this.cdr = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router);
    this.submitted = false;
    this.loading = false;
    this.error = '';
    this.success = '';
    this.model = {
      email: ''
    };
  }
  onSubmit(event) {
    event.preventDefault();
    this.submitted = true;
    this.error = '';
    this.success = '';
    if (!this.model.email) {
      this.error = 'Email requis';
      return;
    }
    this.loading = true;
    this.authService.forgotPassword(this.model.email).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/reset-password'], {
          queryParams: {
            email: this.model.email
          }
        });
      },
      error: err => {
        this.error = err?.error?.message || 'Une erreur est survenue lors de la demande de réinitialisation.';
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }
  static {
    this.ɵfac = function ForgotPasswordComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ForgotPasswordComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: ForgotPasswordComponent,
      selectors: [["app-forgot-password"]],
      decls: 33,
      vars: 10,
      consts: [[1, "auth-main"], [1, "auth-wrapper", "v3"], [1, "auth-form"], [1, "card", "my-5"], [1, "card-body"], ["novalidate", "", 3, "ngSubmit"], ["href", "#", 1, "d-flex", "justify-content-center", 3, "click"], ["src", "assets/images/logo3.png", "alt", "logo", 1, "auth-logo-img"], [1, "brand-text", "brand-script"], [1, "row"], [1, "d-flex", "justify-content-center"], [1, "auth-header"], [1, "text-secondary", "mt-5"], [1, "fs-4", "mt-2"], [1, "form-floating", "mb-3"], ["type", "email", "id", "email", "name", "email", "placeholder", "Email Address", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "email"], ["class", "invalid-feedback", 4, "ngIf"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], ["class", "alert alert-success", "role", "alert", 4, "ngIf"], [1, "d-grid", "mt-4"], ["type", "submit", 1, "btn", "btn-secondary", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], [3, "routerLink"], [1, "invalid-feedback"], ["role", "alert", 1, "alert", "alert-danger"], ["role", "alert", 1, "alert", "alert-success"], [1, "spinner-border", "spinner-border-sm", "me-2"]],
      template: function ForgotPasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "form", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function ForgotPasswordComponent_Template_form_ngSubmit_5_listener($event) {
            return ctx.onSubmit($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ForgotPasswordComponent_Template_a_click_6_listener($event) {
            return $event.preventDefault();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "img", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Royal Center");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 9)(11, "div", 10)(12, "div", 11)(13, "h2", 12)(14, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Forgot your password?");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "p", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Enter your email to receive a reset code");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 14)(19, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function ForgotPasswordComponent_Template_input_ngModelChange_19_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.model.email, $event) || (ctx.model.email = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "Email address");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, ForgotPasswordComponent_div_22_Template, 2, 0, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, ForgotPasswordComponent_div_23_Template, 2, 1, "div", 18)(24, ForgotPasswordComponent_div_24_Template, 2, 1, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 20)(26, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](27, ForgotPasswordComponent_span_27_Template, 1, 0, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, " Send reset code ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](29, "hr");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "h5", 10)(31, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, "Back to login");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("is-invalid", ctx.submitted && !ctx.model.email);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.model.email);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.submitted && !ctx.model.email);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.error);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.success);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](9, _c0));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink],
      styles: [".auth-logo-img[_ngcontent-%COMP%] {\n  height: 46px;\n  width: auto;\n  object-fit: contain;\n  border-radius: 50%;\n}\n\n.brand-text[_ngcontent-%COMP%] {\n  color: var(--grenat-700);\n}\n\n.brand-script[_ngcontent-%COMP%] {\n  font-family: \"Brush Script MT\", \"Segoe Script\", \"Lucida Handwriting\", cursive;\n  font-size: 2rem;\n  font-weight: 600;\n  letter-spacing: 0.02em;\n  line-height: 1;\n  background: linear-gradient(135deg, var(--grenat-500), var(--gold-500));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVtby9wYWdlcy9hdXRoZW50aWNhdGlvbi9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vV2ViJTIwYXZhbmNlL20xcDEzbWVhbi1DYW5keS1Sb21hbmNlL2Zyb250ZW5kL3NyYy9hcHAvZGVtby9wYWdlcy9hdXRoZW50aWNhdGlvbi9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNDLGtCQUFBO0FDREg7O0FER0M7RUFDRyx3QkFBQTtBQ0FKOztBREVFO0VBQ0UsNkVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSx1RUFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQkFBQTtBQ0NKIiwic291cmNlc0NvbnRlbnQiOlsiLy8gUmV1c2UgbG9naW4gc3R5bGVzIGlmIG5lZWRlZDsga2VwdCBtaW5pbWFsIGZvciBicmFuZCByZW5kZXJpbmcuXHJcblxyXG4uYXV0aC1sb2dvLWltZyB7XHJcbiAgaGVpZ2h0OiA0NnB4O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4gLmJyYW5kLXRleHQge1xyXG4gICAgY29sb3I6IHZhcigtLWdyZW5hdC03MDApO1xyXG4gIH1cclxuICAuYnJhbmQtc2NyaXB0IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQnJ1c2ggU2NyaXB0IE1UJywgJ1NlZ29lIFNjcmlwdCcsICdMdWNpZGEgSGFuZHdyaXRpbmcnLCBjdXJzaXZlO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLWdyZW5hdC01MDApLCB2YXIoLS1nb2xkLTUwMCkpO1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgfVxyXG5cclxuIiwiLmF1dGgtbG9nby1pbWcge1xuICBoZWlnaHQ6IDQ2cHg7XG4gIHdpZHRoOiBhdXRvO1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5icmFuZC10ZXh0IHtcbiAgY29sb3I6IHZhcigtLWdyZW5hdC03MDApO1xufVxuXG4uYnJhbmQtc2NyaXB0IHtcbiAgZm9udC1mYW1pbHk6IFwiQnJ1c2ggU2NyaXB0IE1UXCIsIFwiU2Vnb2UgU2NyaXB0XCIsIFwiTHVjaWRhIEhhbmR3cml0aW5nXCIsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLWdyZW5hdC01MDApLCB2YXIoLS1nb2xkLTUwMCkpO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_demo_pages_authentication_forgot-password_forgot-password_component_ts.js.map