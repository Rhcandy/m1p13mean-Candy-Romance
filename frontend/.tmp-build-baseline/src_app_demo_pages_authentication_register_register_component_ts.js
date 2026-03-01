"use strict";
(self["webpackChunkfree_version"] = self["webpackChunkfree_version"] || []).push([["src_app_demo_pages_authentication_register_register_component_ts"],{

/***/ 1713:
/*!**************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/register/register.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterComponent: () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3305);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 6264);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/auth.service */ 4796);
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/notification.service */ 7473);
/* harmony import */ var _services_boutique_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/boutique.service */ 700);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 6124);











const _c0 = () => ["/login"];
function RegisterComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Nom requis");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Sexe requis");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_51_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function RegisterComponent_div_51_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.removePhoneNumber(i_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 53)(1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "label", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, RegisterComponent_div_51_button_5_Template, 2, 0, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("is-invalid", ctx_r2.submitted && i_r2 === 0 && !ctx_r2.hasValidPhoneNumber());
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("id", "numtel" + i_r2)("formControlName", i_r2)("placeholder", "Numero de telephone " + (i_r2 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("for", "numtel" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" Numero de telephone ", i_r2 + 1, " ", i_r2 === 0 ? "(obligatoire)" : "(optionnel)", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.numtelArray.length > 1);
  }
}
function RegisterComponent_div_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Au moins un numero de telephone est requis ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Date de naissance requise ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Email valide requis ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_73_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Mot de passe requis");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_73_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Minimum 8 caracteres");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, RegisterComponent_div_73_span_1_Template, 2, 0, "span", 60)(2, RegisterComponent_div_73_span_2_Template, 2, 0, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r2.registerForm.get("password")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r2.registerForm.get("password")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["minlength"]);
  }
}
function RegisterComponent_div_81_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Confirmation requise");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_81_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Les mots de passe ne correspondent pas ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_81_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, RegisterComponent_div_81_span_1_Template, 2, 0, "span", 60)(2, RegisterComponent_div_81_span_2_Template, 2, 0, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r2.registerForm.get("confirmPassword")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !((tmp_2_0 = ctx_r2.registerForm.get("confirmPassword")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]) && ctx_r2.isPasswordMismatch());
  }
}
function RegisterComponent_div_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r2.error, " ");
  }
}
function RegisterComponent_span_85_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "span", 62);
  }
}
class RegisterComponent {
  constructor() {
    this.authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService);
    this.boutiqueService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_boutique_service__WEBPACK_IMPORTED_MODULE_8__.BoutiqueService);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router);
    this.notificationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_notification_service__WEBPACK_IMPORTED_MODULE_7__.NotificationService);
    this.fb = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder);
    this.cd = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef);
    this.submitted = false;
    this.loading = false;
    this.error = '';
    this.showPassword = false;
    this.showConfirmPassword = false;
    this.selectedRole = null;
    this.passwordMatchValidator = group => {
      const password = group.get('password')?.value;
      const confirmPassword = group.get('confirmPassword')?.value;
      if (!password || !confirmPassword) {
        return null;
      }
      return password === confirmPassword ? null : {
        passwordMismatch: true
      };
    };
    this.initForm();
  }
  initForm() {
    this.registerForm = this.fb.group({
      nom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(8)]],
      confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      sexe: ['M', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      numtel: this.fb.array([this.fb.control('')]),
      dtnaissance: ['2000-02-04', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
    }, {
      validators: this.passwordMatchValidator
    });
  }
  get numtelArray() {
    return this.registerForm.get('numtel');
  }
  selectRole(role) {
    this.selectedRole = role;
  }
  addPhoneNumber() {
    this.numtelArray.push(this.fb.control(''));
  }
  removePhoneNumber(index) {
    if (this.numtelArray.length > 1) {
      this.numtelArray.removeAt(index);
    }
  }
  hasValidPhoneNumber() {
    return this.numtelArray.controls.some(control => {
      const phoneValue = control.value;
      return !!phoneValue && phoneValue.trim() !== '';
    });
  }
  isPasswordMismatch() {
    const confirmPassword = this.registerForm.get('confirmPassword')?.value;
    return this.submitted && !!confirmPassword && this.registerForm.hasError('passwordMismatch');
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
  onSubmit(event) {
    event.preventDefault();
    this.submitted = true;
    this.error = '';
    if (!this.selectedRole) {
      this.error = 'Veuillez selectionner un type de compte';
      return;
    }
    if (!this.registerForm.valid || !this.hasValidPhoneNumber()) {
      this.error = !this.hasValidPhoneNumber() ? 'Au moins un numero de telephone est requis' : '';
      this.registerForm.markAllAsTouched();
      return;
    }
    const formValue = this.registerForm.value;
    const registerData = {
      nom: formValue.nom?.trim(),
      email: formValue.email?.trim(),
      password: formValue.password,
      role: this.selectedRole,
      sexe: formValue.sexe,
      numtel: formValue.numtel.map(phone => phone.trim()).filter(phone => phone !== ''),
      dtnaissance: formValue.dtnaissance
    };
    this.loading = true;
    this.authService.register(registerData).subscribe({
      next: response => {
        if (!response?.success) {
          this.error = response?.message || "Erreur lors de l'inscription.";
          this.loading = false;
          this.cd.detectChanges();
          return;
        }
        this.notificationService.success('Succes', 'Compte cree avec succes.');
        this.redirectAfterRegister();
      },
      error: err => {
        const errorMessage = err?.error?.message || err?.message || "Erreur lors de l'inscription. Veuillez reessayer.";
        this.notificationService.error('Erreur inscription', errorMessage);
        this.error = errorMessage;
        this.loading = false;
        this.cd.detectChanges();
      },
      complete: () => {
        if (!this.authService.hasRole('admin_boutique')) {
          this.loading = false;
          this.cd.detectChanges();
        }
      }
    });
  }
  redirectAfterRegister() {
    if (this.authService.hasRole('user')) {
      this.router.navigate(['/produits']);
      this.loading = false;
      this.cd.detectChanges();
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
          this.cd.detectChanges();
        },
        error: () => {
          this.router.navigate(['/default']);
          this.loading = false;
          this.cd.detectChanges();
        }
      });
      return;
    }
    this.router.navigate(['/default']);
    this.loading = false;
    this.cd.detectChanges();
  }
  static {
    this.ɵfac = function RegisterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || RegisterComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["app-register"]],
      decls: 91,
      vars: 34,
      consts: [[1, "auth-main"], [1, "auth-wrapper", "v3"], [1, "auth-form"], [1, "card", "mt-5"], [1, "card-body"], ["novalidate", "", 3, "ngSubmit", "formGroup"], ["href", "#", 1, "d-flex", "justify-content-center", "mt-3", 3, "click"], ["src", "assets/images/logo3.png", "alt", "logo", 1, "auth-logo-img"], [1, "brand-text", "brand-script"], [1, "d-flex", "justify-content-center"], [1, "auth-header", "text-center"], [1, "text-secondary", "mt-5"], [1, "fs-4", "mt-2"], [1, "mb-4"], [1, "form-label", "fw-bold"], [1, "row"], [1, "col-md-6", "mb-2"], ["type", "button", 1, "btn", "w-100", 3, "click", "ngClass"], [1, "bi", "bi-person", "me-2"], [1, "text-muted", "d-block", "mt-1"], [1, "bi", "bi-shop", "me-2"], [1, "form-floating", "mb-3"], ["type", "text", "id", "nom", "formControlName", "nom", "placeholder", "Nom complet", 1, "form-control"], ["for", "nom"], ["class", "invalid-feedback", 4, "ngIf"], ["id", "sexe", "formControlName", "sexe", 1, "form-select"], ["value", "M"], ["value", "F"], ["for", "sexe"], ["class", "invalid-feedback d-block", 4, "ngIf"], [1, "mb-3"], ["formArrayName", "numtel"], ["class", "d-flex align-items-center mb-2", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [1, "ti", "ti-plus", "me-1"], ["type", "date", "id", "dtnaissance", "formControlName", "dtnaissance", "placeholder", "Date de naissance", 1, "form-control"], ["for", "dtnaissance"], ["type", "email", "id", "email", "formControlName", "email", "placeholder", "Email", 1, "form-control"], ["for", "email"], ["for", "password", 1, "form-label"], [1, "input-group"], ["id", "password", "formControlName", "password", "placeholder", "Mot de passe", 1, "form-control", 3, "type"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "ti", 3, "ngClass"], ["for", "confirmPassword", 1, "form-label"], ["id", "confirmPassword", "formControlName", "confirmPassword", "placeholder", "Confirmer le mot de passe", 1, "form-control", 3, "type"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [1, "d-grid", "mt-4"], ["type", "submit", 1, "btn", "btn-secondary", "p-2", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", "role", "status", "aria-hidden", "true", 4, "ngIf"], [3, "routerLink"], [1, "invalid-feedback"], [1, "invalid-feedback", "d-block"], [1, "d-flex", "align-items-center", "mb-2"], [1, "form-floating", "flex-grow-1"], ["type", "tel", 1, "form-control", 3, "id", "formControlName", "placeholder"], [3, "for"], ["type", "button", "class", "btn btn-outline-danger ms-2", "title", "Supprimer ce numero", 3, "click", 4, "ngIf"], ["type", "button", "title", "Supprimer ce numero", 1, "btn", "btn-outline-danger", "ms-2", 3, "click"], [1, "ti", "ti-trash"], [4, "ngIf"], ["role", "alert", 1, "alert", "alert-danger"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "me-2"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "form", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_5_listener($event) {
            return ctx.onSubmit($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function RegisterComponent_Template_a_click_6_listener($event) {
            return $event.preventDefault();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "img", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "Royal Center");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 9)(11, "div", 10)(12, "h2", 11)(13, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "Sign up");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "p", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "Enter your credentials to continue");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "div", 13)(18, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "Choisissez votre type de compte");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "div", 15)(21, "div", 16)(22, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_22_listener() {
            return ctx.selectRole("user");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](23, "i", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24, " Client ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "small", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26, "Particulier cherchant des produits et services");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "div", 16)(28, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_28_listener() {
            return ctx.selectRole("admin_boutique");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](29, "i", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](30, " Boutique ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "small", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](32, "Commercant vendant des produits ou services");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](34, "input", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](36, "Nom complet");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](37, RegisterComponent_div_37_Template, 2, 0, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "div", 21)(39, "select", 25)(40, "option", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](41, "Masculin");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "option", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](43, "Feminin");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](44, "label", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](45, "Sexe");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](46, RegisterComponent_div_46_Template, 2, 0, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](47, "div", 30)(48, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](49, "Numeros de telephone");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](50, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](51, RegisterComponent_div_51_Template, 6, 9, "div", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](52, RegisterComponent_div_52_Template, 2, 0, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](53, "button", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_53_listener() {
            return ctx.addPhoneNumber();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](54, "i", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](55, " Ajouter un numero de telephone ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](56, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](57, "input", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](58, "label", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](59, "Date de naissance");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](60, RegisterComponent_div_60_Template, 2, 0, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](61, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](62, "input", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](63, "label", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](64, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](65, RegisterComponent_div_65_Template, 2, 0, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](66, "div", 30)(67, "label", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](68, "Mot de passe");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](69, "div", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](70, "input", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](71, "button", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_71_listener() {
            return ctx.togglePasswordVisibility();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](72, "i", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](73, RegisterComponent_div_73_Template, 3, 2, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](74, "div", 30)(75, "label", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](76, "Confirmer le mot de passe");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](77, "div", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](78, "input", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](79, "button", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_79_listener() {
            return ctx.toggleConfirmPasswordVisibility();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](80, "i", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](81, RegisterComponent_div_81_Template, 3, 2, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](82, RegisterComponent_div_82_Template, 2, 1, "div", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](83, "div", 47)(84, "button", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](85, RegisterComponent_span_85_Template, 1, 0, "span", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](86, " Sign Up ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](87, "hr");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](88, "h5", 9)(89, "a", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](90, "Already have an account?");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()();
        }
        if (rf & 2) {
          let tmp_3_0;
          let tmp_4_0;
          let tmp_5_0;
          let tmp_6_0;
          let tmp_9_0;
          let tmp_10_0;
          let tmp_11_0;
          let tmp_12_0;
          let tmp_13_0;
          let tmp_17_0;
          let tmp_18_0;
          let tmp_22_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.registerForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", ctx.selectedRole === "user" ? "btn-primary" : "btn-outline-primary");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", ctx.selectedRole === "admin_boutique" ? "btn-primary" : "btn-outline-primary");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("is-invalid", ctx.submitted && ((tmp_3_0 = ctx.registerForm.get("nom")) == null ? null : tmp_3_0.invalid));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.submitted && ((tmp_4_0 = ctx.registerForm.get("nom")) == null ? null : tmp_4_0.invalid));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("is-invalid", ctx.submitted && ((tmp_5_0 = ctx.registerForm.get("sexe")) == null ? null : tmp_5_0.invalid));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.submitted && ((tmp_6_0 = ctx.registerForm.get("sexe")) == null ? null : tmp_6_0.invalid));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.numtelArray.controls);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.submitted && !ctx.hasValidPhoneNumber());
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("is-invalid", ctx.submitted && ((tmp_9_0 = ctx.registerForm.get("dtnaissance")) == null ? null : tmp_9_0.invalid));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.submitted && ((tmp_10_0 = ctx.registerForm.get("dtnaissance")) == null ? null : tmp_10_0.invalid));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("is-invalid", ctx.submitted && ((tmp_11_0 = ctx.registerForm.get("email")) == null ? null : tmp_11_0.invalid));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.submitted && ((tmp_12_0 = ctx.registerForm.get("email")) == null ? null : tmp_12_0.invalid));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("is-invalid", ctx.submitted && ((tmp_13_0 = ctx.registerForm.get("password")) == null ? null : tmp_13_0.invalid));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("type", ctx.showPassword ? "text" : "password");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("aria-label", ctx.showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", ctx.showPassword ? "ti-eye-off" : "ti-eye");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.submitted && ((tmp_17_0 = ctx.registerForm.get("password")) == null ? null : tmp_17_0.invalid));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("is-invalid", ctx.submitted && (((tmp_18_0 = ctx.registerForm.get("confirmPassword")) == null ? null : tmp_18_0.invalid) || ctx.isPasswordMismatch()));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("type", ctx.showConfirmPassword ? "text" : "password");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("aria-label", ctx.showConfirmPassword ? "Masquer la confirmation" : "Afficher la confirmation");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", ctx.showConfirmPassword ? "ti-eye-off" : "ti-eye");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.submitted && (((tmp_22_0 = ctx.registerForm.get("confirmPassword")) == null ? null : tmp_22_0.invalid) || ctx.isPasswordMismatch()));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.error);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](33, _c0));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormArrayName],
      styles: ["[_nghost-%COMP%] {\n  --grenat-700: #6d1835;\n  --grenat-500: #8a2748;\n  --gold-500: #d4aa54;\n  --beige-100: #fdf8ef;\n  --beige-200: #f7efe1;\n  --beige-300: #efe3cf;\n  --white: #ffffff;\n  --text-main: #3f2430;\n  --text-muted: #705565;\n  display: block;\n  background: linear-gradient(180deg, var(--beige-100) 0%, var(--beige-200) 100%);\n  color: var(--text-main);\n  font-family: \"Plus Jakarta Sans\", sans-serif;\n}\n\n.input-group[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%] {\n  min-width: 46px;\n}\n\n.input-group[_ngcontent-%COMP%]   .form-control.is-invalid[_ngcontent-%COMP%] {\n  z-index: 2;\n}\n\n.auth-logo-img[_ngcontent-%COMP%] {\n  height: 46px;\n  width: auto;\n  object-fit: contain;\n  border-radius: 50%;\n}\n\n.brand-text[_ngcontent-%COMP%] {\n  color: var(--grenat-700);\n}\n\n.brand-script[_ngcontent-%COMP%] {\n  font-family: \"Brush Script MT\", \"Segoe Script\", \"Lucida Handwriting\", cursive;\n  font-size: 2rem;\n  font-weight: 600;\n  letter-spacing: 0.02em;\n  line-height: 1;\n  background: linear-gradient(135deg, var(--grenat-500), var(--gold-500));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVtby9wYWdlcy9hdXRoZW50aWNhdGlvbi9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uL1dlYiUyMGF2YW5jZS9tMXAxM21lYW4tQ2FuZHktUm9tYW5jZS9mcm9udGVuZC9zcmMvYXBwL2RlbW8vcGFnZXMvYXV0aGVudGljYXRpb24vcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFFQSxjQUFBO0VBQ0EsK0VBQUE7RUFDQSx1QkFBQTtFQUNBLDRDQUFBO0FDQUY7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURDRTtFQUNFLHdCQUFBO0FDRUo7O0FEQUU7RUFDRSw2RUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLHVFQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFCQUFBO0FDR0oiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgLS1ncmVuYXQtNzAwOiAjNmQxODM1O1xyXG4gIC0tZ3JlbmF0LTUwMDogIzhhMjc0ODtcclxuICAtLWdvbGQtNTAwOiAjZDRhYTU0O1xyXG4gIC0tYmVpZ2UtMTAwOiAjZmRmOGVmO1xyXG4gIC0tYmVpZ2UtMjAwOiAjZjdlZmUxO1xyXG4gIC0tYmVpZ2UtMzAwOiAjZWZlM2NmO1xyXG4gIC0td2hpdGU6ICNmZmZmZmY7XHJcbiAgLS10ZXh0LW1haW46ICMzZjI0MzA7XHJcbiAgLS10ZXh0LW11dGVkOiAjNzA1NTY1O1xyXG5cclxuICBkaXNwbGF5OiBibG9jaztcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1iZWlnZS0xMDApIDAlLCB2YXIoLS1iZWlnZS0yMDApIDEwMCUpO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LW1haW4pO1xyXG4gIGZvbnQtZmFtaWx5OiAnUGx1cyBKYWthcnRhIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5pbnB1dC1ncm91cCA+IC5idG4ge1xyXG4gIG1pbi13aWR0aDogNDZweDtcclxufVxyXG5cclxuLmlucHV0LWdyb3VwIC5mb3JtLWNvbnRyb2wuaXMtaW52YWxpZCB7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuLmF1dGgtbG9nby1pbWcge1xyXG4gIGhlaWdodDogNDZweDtcclxuICB3aWR0aDogYXV0bztcclxuICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4gIC5icmFuZC10ZXh0IHtcclxuICAgIGNvbG9yOiB2YXIoLS1ncmVuYXQtNzAwKTtcclxuICB9XHJcbiAgLmJyYW5kLXNjcmlwdCB7XHJcbiAgICBmb250LWZhbWlseTogJ0JydXNoIFNjcmlwdCBNVCcsICdTZWdvZSBTY3JpcHQnLCAnTHVjaWRhIEhhbmR3cml0aW5nJywgY3Vyc2l2ZTtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1ncmVuYXQtNTAwKSwgdmFyKC0tZ29sZC01MDApKTtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gIH1cclxuIiwiOmhvc3Qge1xuICAtLWdyZW5hdC03MDA6ICM2ZDE4MzU7XG4gIC0tZ3JlbmF0LTUwMDogIzhhMjc0ODtcbiAgLS1nb2xkLTUwMDogI2Q0YWE1NDtcbiAgLS1iZWlnZS0xMDA6ICNmZGY4ZWY7XG4gIC0tYmVpZ2UtMjAwOiAjZjdlZmUxO1xuICAtLWJlaWdlLTMwMDogI2VmZTNjZjtcbiAgLS13aGl0ZTogI2ZmZmZmZjtcbiAgLS10ZXh0LW1haW46ICMzZjI0MzA7XG4gIC0tdGV4dC1tdXRlZDogIzcwNTU2NTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLWJlaWdlLTEwMCkgMCUsIHZhcigtLWJlaWdlLTIwMCkgMTAwJSk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW1haW4pO1xuICBmb250LWZhbWlseTogXCJQbHVzIEpha2FydGEgU2Fuc1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uaW5wdXQtZ3JvdXAgPiAuYnRuIHtcbiAgbWluLXdpZHRoOiA0NnB4O1xufVxuXG4uaW5wdXQtZ3JvdXAgLmZvcm0tY29udHJvbC5pcy1pbnZhbGlkIHtcbiAgei1pbmRleDogMjtcbn1cblxuLmF1dGgtbG9nby1pbWcge1xuICBoZWlnaHQ6IDQ2cHg7XG4gIHdpZHRoOiBhdXRvO1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5icmFuZC10ZXh0IHtcbiAgY29sb3I6IHZhcigtLWdyZW5hdC03MDApO1xufVxuXG4uYnJhbmQtc2NyaXB0IHtcbiAgZm9udC1mYW1pbHk6IFwiQnJ1c2ggU2NyaXB0IE1UXCIsIFwiU2Vnb2UgU2NyaXB0XCIsIFwiTHVjaWRhIEhhbmR3cml0aW5nXCIsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLWdyZW5hdC01MDApLCB2YXIoLS1nb2xkLTUwMCkpO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_demo_pages_authentication_register_register_component_ts.js.map