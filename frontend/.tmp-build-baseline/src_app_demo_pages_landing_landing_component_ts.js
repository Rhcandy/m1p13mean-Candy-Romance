"use strict";
(self["webpackChunkfree_version"] = self["webpackChunkfree_version"] || []).push([["src_app_demo_pages_landing_landing_component_ts"],{

/***/ 1929:
/*!*********************************************************!*\
  !*** ./src/app/demo/pages/landing/landing.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LandingComponent: () => (/* binding */ LandingComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 6264);
/* harmony import */ var _components_map_leaflet_map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/map/leaflet-map.component */ 389);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 3305);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/auth.service */ 4796);







function LandingComponent_button_110_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LandingComponent_button_110_Template_button_click_0_listener() {
      const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.setSlide(i_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", i_r2 === ctx_r2.activeSlide);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-label", "Aller a l'image " + (i_r2 + 1));
  }
}
class LandingComponent {
  constructor(router, authService) {
    this.router = router;
    this.authService = authService;
    this.isScrolled = false;
    this.menuOpen = false;
    this.isAuthenticated = false;
    this.isBoutiqueAdmin = false;
    this.currentYear = new Date().getFullYear();
    this.centerCoordinates = [-18.952783162227885, 47.52845781884346];
    this.centerSlides = [{
      src: 'assets/images/centre/1.webp',
      alt: 'Entree du Royal Center',
      title: 'Royal Center - Entree principale',
      description: 'Un point de rencontre moderne pour les boutiques et les clients.'
    }, {
      src: 'assets/images/centre/2.webp',
      alt: 'Zone commerciale du Royal Center',
      title: 'Zone commerciale active',
      description: 'Des espaces penses pour presenter les produits et faciliter les echanges.'
    }, {
      src: 'assets/images/centre/3.webp',
      alt: 'Vue interieure du Royal Center',
      title: 'Experience client au centre',
      description: 'Un environnement accueillant pour decouvrir et acheter en confiance.'
    }];
    this.activeSlide = 0;
  }
  ngOnInit() {
    this.applyUserState(this.authService.currentUser);
    this.authSubscription = this.authService.currentUser$.subscribe(user => {
      this.applyUserState(user);
    });
    this.startCarousel();
  }
  ngOnDestroy() {
    this.authSubscription?.unsubscribe();
    this.stopCarousel();
  }
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }
  scrollTo(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  goToProducts() {
    if (this.isAuthenticated) {
      if (this.isBoutiqueAdmin) {
        this.router.navigate(['/boutique/produits']);
      } else {
        this.router.navigate(['/produits']);
      }
      return;
    }
    this.router.navigate(['/login']);
  }
  goToUserSpace() {
    if (this.isAuthenticated && !this.isBoutiqueAdmin) {
      this.router.navigate(['/produits']);
      return;
    }
    this.router.navigate(['/login']);
  }
  goToBoutiqueSpace() {
    if (this.isAuthenticated && this.isBoutiqueAdmin) {
      this.router.navigate(['/boutique/produits']);
      return;
    }
    this.router.navigate(['/register']);
  }
  goToRegister() {
    this.router.navigate(['/register']);
  }
  handleAuthAction() {
    if (this.isAuthenticated) {
      this.authService.logout(false);
      this.menuOpen = false;
      this.router.navigate(['/landing']);
      return;
    }
    this.router.navigate(['/login']);
  }
  previousSlide() {
    this.activeSlide = (this.activeSlide - 1 + this.centerSlides.length) % this.centerSlides.length;
    this.restartCarousel();
  }
  nextSlide() {
    this.activeSlide = (this.activeSlide + 1) % this.centerSlides.length;
  }
  setSlide(index) {
    this.activeSlide = index;
    this.restartCarousel();
  }
  applyUserState(user) {
    this.isAuthenticated = !!user;
    this.isBoutiqueAdmin = !!user && user.role === 'admin_boutique';
  }
  startCarousel() {
    this.stopCarousel();
    this.carouselTimer = setInterval(() => this.nextSlide(), 5000);
  }
  stopCarousel() {
    if (this.carouselTimer) {
      clearInterval(this.carouselTimer);
      this.carouselTimer = undefined;
    }
  }
  restartCarousel() {
    this.startCarousel();
  }
  static {
    this.ɵfac = function LandingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: LandingComponent,
      selectors: [["app-landing"]],
      hostBindings: function LandingComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("scroll", function LandingComponent_scroll_HostBindingHandler() {
            return ctx.onWindowScroll();
          }, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveWindow"]);
        }
      },
      decls: 156,
      vars: 18,
      consts: [[1, "landing-nav"], [1, "container", "nav-inner"], ["type", "button", 1, "brand", 3, "click"], ["src", "assets/images/logo3.png", "alt", "Royal Center logo", 1, "brand-logo-img"], [1, "brand-text", "brand-script"], ["type", "button", "aria-label", "Ouvrir le menu", 1, "burger", 3, "click"], [1, "nav-links"], ["type", "button", 1, "nav-link", 3, "click"], ["type", "button", 1, "btn", "btn-products", 3, "click"], ["type", "button", 1, "btn", "btn-auth", 3, "click"], ["id", "hero", 1, "hero"], [1, "hero-overlay"], [1, "container", "hero-content"], [1, "hero-chip"], [1, "hero-text"], [1, "hero-actions"], ["type", "button", 1, "btn", "btn-products", "big", 3, "click"], ["type", "button", 1, "btn", "btn-auth", "big", 3, "click"], ["type", "button", 1, "btn", "btn-secondary", "big", 3, "click"], ["id", "functionalities", 1, "role-grid"], [1, "role-card"], ["type", "button", 1, "inline-link", 3, "click"], ["id", "about", 1, "about"], [1, "container", "about-grid"], [1, "section-tag"], [1, "about-cards"], [1, "about-card"], ["id", "center", 1, "center"], [1, "container", "center-grid"], [1, "carousel-card"], [1, "carousel-stage"], [3, "src", "alt"], ["type", "button", "aria-label", "Image precedente", 1, "carousel-btn", "prev", 3, "click"], [1, "ti", "ti-chevron-left"], ["type", "button", "aria-label", "Image suivante", 1, "carousel-btn", "next", 3, "click"], [1, "ti", "ti-chevron-right"], [1, "carousel-caption"], [1, "carousel-dots"], ["type", "button", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "center-text"], [1, "container", "map-grid"], [1, "map-wrap"], [3, "center", "initialPosition", "zoom", "height", "markerOnClick", "autoSetMarker"], [1, "map-note"], [1, "ti", "ti-map-pin"], [1, "map-description"], [1, "landing-footer"], [1, "container", "footer-inner"], ["type", "button", 3, "click"]],
      template: function LandingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LandingComponent_Template_button_click_2_listener() {
            return ctx.scrollTo("hero");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Royal Center");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LandingComponent_Template_button_click_6_listener() {
            return ctx.toggleMenu();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "span")(8, "span")(9, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 6)(11, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LandingComponent_Template_button_click_11_listener() {
            ctx.scrollTo("hero");
            return ctx.menuOpen = false;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Accueil");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LandingComponent_Template_button_click_13_listener() {
            ctx.scrollTo("functionalities");
            return ctx.menuOpen = false;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Fonctionnalites");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LandingComponent_Template_button_click_15_listener() {
            ctx.scrollTo("about");
            return ctx.menuOpen = false;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "About us");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LandingComponent_Template_button_click_17_listener() {
            ctx.scrollTo("center");
            return ctx.menuOpen = false;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Royal Center");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LandingComponent_Template_button_click_19_listener() {
            ctx.goToProducts();
            return ctx.menuOpen = false;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Voir produits");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LandingComponent_Template_button_click_21_listener() {
            ctx.handleAuthAction();
            return ctx.menuOpen = false;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "section", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 12)(26, "p", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Marketplace locale - Royal Center Antananarivo");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Une plateforme claire pour connecter les clients et les boutiques");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "p", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, " Nous avons cree ce site pour offrir aux commerces du Royal Center un canal digital solide, et aux clients une facon plus simple de trouver, comparer et commander leurs produits. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 15)(33, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LandingComponent_Template_button_click_33_listener() {
            return ctx.goToProducts();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Voir produits");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LandingComponent_Template_button_click_35_listener() {
            return ctx.handleAuthAction();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LandingComponent_Template_button_click_37_listener() {
            return ctx.goToRegister();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "Creer un compte boutique");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 19)(40, "article", 20)(41, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "Aspect user");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "Le client peut rechercher des produits, comparer les prix, passer commande et suivre ses achats.");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "ul")(46, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "Parcourir les produits disponibles");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, "Ajouter au panier et commander");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, "Suivre les commandes et l'historique");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LandingComponent_Template_button_click_52_listener() {
            return ctx.goToUserSpace();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "Acceder a l'espace user");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "article", 20)(55, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, "Aspect boutique");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "Le commercant publie ses articles, organise sa boutique et suit ses ventes depuis un seul outil.");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "ul")(60, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61, "Ajouter et modifier ses produits");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, "Gerer promotions et disponibilites");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, "Suivre les commandes clients");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LandingComponent_Template_button_click_66_listener() {
            return ctx.goToBoutiqueSpace();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](67, "Acceder a l'espace boutique");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "section", 22)(69, "div", 23)(70, "div")(71, "p", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](72, "About us");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74, "Pourquoi la plateforme Royal Center a ete lancee");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](76, " Beaucoup de boutiques locales avaient besoin d'une vitrine numerique simple, sans dependre d'outils complexes. Le projet Royal Center a ete construit pour relier directement les commerces du centre et leurs clients. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](78, " Notre objectif est double: faciliter l'achat pour les visiteurs, et permettre aux boutiques de mieux presenter leurs produits, gerer leurs stocks et suivre leurs commandes. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "div", 25)(80, "article", 26)(81, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](82, "Proximite");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](84, "Mettre en avant les commerces du Royal Center et renforcer l'economie locale.");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "article", 26)(86, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](87, "Confiance");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](88, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](89, "Afficher des informations claires, des statuts de commande et un suivi transparent.");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "article", 26)(91, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](92, "Evolution");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](94, "Donner aux boutiques une base solide pour evoluer du physique vers le digital.");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](95, "section", 27)(96, "div", 28)(97, "div", 29)(98, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](99, "img", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](100, "button", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LandingComponent_Template_button_click_100_listener() {
            return ctx.previousSlide();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](101, "i", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "button", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LandingComponent_Template_button_click_102_listener() {
            return ctx.nextSlide();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](103, "i", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](104, "div", 36)(105, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](106);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](107, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](108);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](109, "div", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](110, LandingComponent_button_110_Template, 1, 3, "button", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](111, "aside", 39)(112, "p", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](113, "Royal Center");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](114, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](115, "Un centre vivant, maintenant connecte");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](116, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](117, " Ce carrefour commercial regroupe des boutiques variees. La plateforme Royal Center rend leurs produits visibles dans un meme espace, avec un parcours simple pour chaque client. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](118, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](119, " Le site a ete cree pour reduire la distance entre la vitrine physique et la vente en ligne: une seule presence, deux canaux, une meilleure experience globale. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](120, "ul")(121, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](122, "Visibilite numerique pour les commerces du centre");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](123, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](124, "Acces rapide aux produits pour les visiteurs");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](125, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](126, "Base solide pour les prochaines evolutions");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](127, "div", 40)(128, "div", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](129, "app-leaflet-map", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](130, "span", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](131, "i", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](132, " C'est ici le Royal Center");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](133, "div", 45)(134, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](135, "Localisation du centre");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](136, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](137, " Cette position correspond au coeur du ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](138, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](139, "Royal Center");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](140, ", notre zone de reference pour les activites boutique et la livraison locale. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](141, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](142, " En centralisant les commerces autour de ce point, la plateforme facilite les retraits, les livraisons et la communication entre vendeurs et clients. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](143, "footer", 46)(144, "div", 47)(145, "div")(146, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](147, "Royal Center");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](148, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](149, "Marketplace locale pour les boutiques et clients du Royal Center.");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](150, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](151);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](152, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](153, "ANDRIAMANANA Romance Patricia -2799");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](154, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](155, "RIJARILANTO Helena Candy -2638");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("scrolled", ctx.isScrolled);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("open", ctx.menuOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.isAuthenticated ? "Se deconnecter" : "Se connecter", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.isAuthenticated ? "Se deconnecter" : "Se connecter", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](63);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx.centerSlides[ctx.activeSlide].src, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"])("alt", ctx.centerSlides[ctx.activeSlide].alt);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.centerSlides[ctx.activeSlide].title);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.centerSlides[ctx.activeSlide].description);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.centerSlides);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("center", ctx.centerCoordinates)("initialPosition", ctx.centerCoordinates)("zoom", 16)("height", "360px")("markerOnClick", false)("autoSetMarker", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx.currentYear, " Royal Center - Tous droits reserves.");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule, _components_map_leaflet_map_component__WEBPACK_IMPORTED_MODULE_2__.LeafletMapComponent],
      styles: ["[_nghost-%COMP%] {\n  --grenat-900: #4e1027;\n  --grenat-700: #6d1835;\n  --grenat-500: #8a2748;\n  --gold-700: #b88a2d;\n  --gold-500: #d4aa54;\n  --gold-300: #e7c98a;\n  --beige-100: #fdf8ef;\n  --beige-200: #f7efe1;\n  --beige-300: #efe3cf;\n  --white: #ffffff;\n  --text-main: #3f2430;\n  --text-muted: #705565;\n  display: block;\n  background: linear-gradient(180deg, var(--beige-100) 0%, var(--beige-200) 100%);\n  color: var(--text-main);\n  font-family: \"Plus Jakarta Sans\", sans-serif;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: min(1200px, 92%);\n  margin: 0 auto;\n}\n\n.landing-nav[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0 0 auto 0;\n  z-index: 1200;\n  padding: 14px 0;\n  transition: 0.25s ease;\n}\n.landing-nav.scrolled[_ngcontent-%COMP%] {\n  background: rgba(253, 248, 239, 0.94);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  border-bottom: 1px solid rgba(138, 39, 72, 0.2);\n  box-shadow: 0 10px 28px rgba(78, 16, 39, 0.12);\n}\n\n.nav-inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 18px;\n}\n\n.brand[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 12px;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n}\n.brand[_ngcontent-%COMP%]   .brand-logo-img[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  object-fit: contain;\n  filter: drop-shadow(0 6px 14px rgba(78, 16, 39, 0.18));\n  border-radius: 50%;\n}\n.brand[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%] {\n  color: var(--grenat-900);\n}\n.brand[_ngcontent-%COMP%]   .brand-script[_ngcontent-%COMP%] {\n  font-family: \"Brush Script MT\", \"Segoe Script\", \"Lucida Handwriting\", cursive;\n  font-size: 2rem;\n  font-weight: 600;\n  letter-spacing: 0.02em;\n  line-height: 1;\n  background: linear-gradient(135deg, var(--grenat-700), var(--gold-500));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n\n.nav-links[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  border: 0;\n  background: transparent;\n  color: var(--text-main);\n  font-weight: 600;\n  font-size: 0.9rem;\n  padding: 8px 10px;\n  border-radius: 10px;\n  cursor: pointer;\n}\n.nav-link[_ngcontent-%COMP%]:hover {\n  background: rgba(138, 39, 72, 0.1);\n  color: var(--grenat-700);\n}\n\n.btn[_ngcontent-%COMP%] {\n  border-radius: 999px;\n  padding: 10px 16px;\n  font-size: 0.88rem;\n  font-weight: 700;\n  cursor: pointer;\n}\n\n.btn-products[_ngcontent-%COMP%] {\n  border: 1px solid rgba(109, 24, 53, 0.34);\n  background: var(--white);\n  color: var(--grenat-900);\n}\n.btn-products[_ngcontent-%COMP%]:hover {\n  background: var(--beige-200);\n}\n\n.btn-auth[_ngcontent-%COMP%] {\n  border: 1px solid rgba(212, 170, 84, 0.8);\n  background: linear-gradient(140deg, var(--grenat-700), var(--grenat-500));\n  color: var(--white);\n}\n.btn-auth[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.06);\n  box-shadow: 0 8px 18px rgba(78, 16, 39, 0.2);\n}\n\n.btn-secondary[_ngcontent-%COMP%] {\n  border: 1px solid rgba(184, 138, 45, 0.45);\n  background: linear-gradient(135deg, #f5ebd5, #ecdab5);\n  color: #633a0a;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.03);\n}\n\n.burger[_ngcontent-%COMP%] {\n  display: none;\n  border: 0;\n  background: transparent;\n  width: 36px;\n  height: 36px;\n  cursor: pointer;\n  padding: 0;\n}\n.burger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  width: 22px;\n  height: 2px;\n  margin: 4px auto;\n  background: var(--grenat-700);\n  border-radius: 2px;\n}\n\n.hero[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 120px 0 70px;\n  background: linear-gradient(160deg, var(--beige-100) 0%, var(--beige-200) 60%, #fff9ee 100%);\n  border-bottom: 1px solid rgba(138, 39, 72, 0.15);\n}\n\n.hero-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  background: radial-gradient(circle at 20% 15%, rgba(138, 39, 72, 0.12), transparent 35%), radial-gradient(circle at 78% 12%, rgba(212, 170, 84, 0.22), transparent 34%);\n}\n\n.hero-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n\n.hero-chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: var(--white);\n  color: var(--grenat-700);\n  border: 1px solid rgba(138, 39, 72, 0.28);\n  border-radius: 999px;\n  font-size: 0.78rem;\n  font-weight: 700;\n  padding: 8px 12px;\n  margin-bottom: 16px;\n}\n\n.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(2rem, 4vw, 3.2rem);\n  line-height: 1.15;\n  letter-spacing: -0.03em;\n  color: var(--grenat-900);\n  max-width: 860px;\n}\n\n.hero-text[_ngcontent-%COMP%] {\n  max-width: 760px;\n  margin-top: 16px;\n  color: var(--text-muted);\n  font-size: 1rem;\n  line-height: 1.7;\n}\n\n.hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-top: 24px;\n}\n\n.big[_ngcontent-%COMP%] {\n  padding: 12px 20px;\n}\n\n.role-grid[_ngcontent-%COMP%] {\n  margin-top: 34px;\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 18px;\n}\n\n.role-card[_ngcontent-%COMP%] {\n  background: var(--white);\n  border: 1px solid rgba(138, 39, 72, 0.2);\n  border-radius: 20px;\n  padding: 20px;\n  box-shadow: 0 14px 30px rgba(78, 16, 39, 0.09);\n}\n.role-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  margin-bottom: 8px;\n  color: var(--grenat-700);\n}\n.role-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  line-height: 1.6;\n  margin-bottom: 10px;\n}\n.role-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 18px;\n  color: #5e4151;\n  line-height: 1.8;\n  font-size: 0.94rem;\n}\n\n.inline-link[_ngcontent-%COMP%] {\n  margin-top: 14px;\n  border: 1px solid rgba(138, 39, 72, 0.28);\n  background: rgba(138, 39, 72, 0.08);\n  color: var(--grenat-700);\n  font-weight: 700;\n  border-radius: 10px;\n  padding: 10px 12px;\n  cursor: pointer;\n}\n.inline-link[_ngcontent-%COMP%]:hover {\n  background: rgba(138, 39, 72, 0.15);\n}\n\n.about[_ngcontent-%COMP%] {\n  padding: 70px 0;\n}\n\n.about-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.1fr 1fr;\n  gap: 24px;\n  align-items: start;\n}\n\n.section-tag[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 800;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: var(--gold-700);\n  margin-bottom: 8px;\n}\n\n.about[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: clamp(1.8rem, 3vw, 2.6rem);\n  margin-bottom: 14px;\n  color: var(--grenat-900);\n  line-height: 1.2;\n}\n\n.about[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  line-height: 1.8;\n  margin-bottom: 12px;\n}\n\n.about-cards[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n}\n\n.about-card[_ngcontent-%COMP%] {\n  background: var(--white);\n  border: 1px solid rgba(184, 138, 45, 0.36);\n  border-radius: 16px;\n  padding: 16px;\n}\n.about-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: var(--grenat-700);\n  margin-bottom: 6px;\n}\n.about-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #67505d;\n}\n\n.center[_ngcontent-%COMP%] {\n  padding: 24px 0 76px;\n}\n\n.center-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.05fr 1fr;\n  gap: 24px;\n  align-items: start;\n}\n\n.carousel-card[_ngcontent-%COMP%] {\n  background: var(--white);\n  border: 1px solid rgba(138, 39, 72, 0.24);\n  border-radius: 20px;\n  padding: 12px;\n  box-shadow: 0 14px 30px rgba(78, 16, 39, 0.1);\n}\n\n.carousel-stage[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 14px;\n  overflow: hidden;\n}\n.carousel-stage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 350px;\n  object-fit: cover;\n  display: block;\n}\n\n.carousel-caption[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  padding: 14px 16px;\n  background: linear-gradient(180deg, rgba(34, 10, 20, 0), rgba(34, 10, 20, 0.78));\n  color: var(--white);\n}\n.carousel-caption[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 1rem;\n}\n.carousel-caption[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.86rem;\n  opacity: 0.95;\n}\n\n.carousel-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 38px;\n  height: 38px;\n  border: 0;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.9);\n  color: var(--grenat-700);\n  cursor: pointer;\n  display: grid;\n  place-items: center;\n}\n.carousel-btn.prev[_ngcontent-%COMP%] {\n  left: 10px;\n}\n.carousel-btn.next[_ngcontent-%COMP%] {\n  right: 10px;\n}\n\n.carousel-dots[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  display: flex;\n  justify-content: center;\n  gap: 8px;\n}\n.carousel-dots[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 999px;\n  border: 0;\n  background: #d9c29b;\n  cursor: pointer;\n}\n.carousel-dots[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  width: 24px;\n  background: linear-gradient(135deg, var(--grenat-700), var(--gold-500));\n}\n\n.center-text[_ngcontent-%COMP%] {\n  background: var(--white);\n  border: 1px solid rgba(138, 39, 72, 0.24);\n  border-radius: 20px;\n  padding: 22px;\n}\n.center-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n  color: var(--grenat-700);\n  line-height: 1.25;\n}\n.center-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  line-height: 1.8;\n}\n.center-text[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 14px 0 0;\n  padding-left: 18px;\n  color: #5f4957;\n  line-height: 1.8;\n}\n\n.map-grid[_ngcontent-%COMP%] {\n  margin-top: 22px;\n  display: grid;\n  grid-template-columns: 1.2fr 1fr;\n  gap: 18px;\n  align-items: start;\n}\n\n.map-wrap[_ngcontent-%COMP%] {\n  background: var(--white);\n  border: 1px solid rgba(138, 39, 72, 0.24);\n  border-radius: 18px;\n  padding: 10px;\n  box-shadow: 0 12px 26px rgba(78, 16, 39, 0.1);\n}\n\n.map-note[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 11px;\n  border-radius: 999px;\n  background: rgba(138, 39, 72, 0.12);\n  color: var(--grenat-700);\n  font-size: 0.82rem;\n  font-weight: 700;\n}\n.map-note[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #c63d4a;\n}\n\n.map-description[_ngcontent-%COMP%] {\n  background: var(--white);\n  border: 1px solid rgba(138, 39, 72, 0.24);\n  border-radius: 18px;\n  padding: 18px;\n}\n.map-description[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--grenat-700);\n  margin-bottom: 10px;\n}\n.map-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  line-height: 1.75;\n}\n\n.landing-footer[_ngcontent-%COMP%] {\n  border-top: 1px solid rgba(138, 39, 72, 0.24);\n  background: var(--white);\n  padding: 24px 0;\n}\n\n.footer-inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n}\n.footer-inner[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--grenat-700);\n  display: block;\n  margin-bottom: 4px;\n}\n.footer-inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--text-muted);\n  font-size: 0.9rem;\n}\n.footer-inner[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #694f5d;\n  font-size: 0.86rem;\n  text-align: right;\n}\n\n@media (max-width: 1024px) {\n  .about-grid[_ngcontent-%COMP%], \n   .center-grid[_ngcontent-%COMP%], \n   .map-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .carousel-stage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 300px;\n  }\n  .role-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 860px) {\n  .burger[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .brand[_ngcontent-%COMP%]   .brand-logo-img[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n  }\n  .brand[_ngcontent-%COMP%]   .brand-script[_ngcontent-%COMP%] {\n    font-size: 1.6rem;\n  }\n  .nav-links[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 64px;\n    left: 4%;\n    right: 4%;\n    display: none;\n    flex-direction: column;\n    align-items: stretch;\n    padding: 14px;\n    border-radius: 16px;\n    background: var(--white);\n    border: 1px solid rgba(138, 39, 72, 0.24);\n    box-shadow: 0 16px 36px rgba(78, 16, 39, 0.18);\n  }\n  .nav-links.open[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .nav-links[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (max-width: 640px) {\n  .hero[_ngcontent-%COMP%] {\n    padding-top: 104px;\n  }\n  .brand[_ngcontent-%COMP%]   .brand-script[_ngcontent-%COMP%] {\n    font-size: 1.45rem;\n  }\n  .footer-inner[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .footer-inner[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n  .carousel-stage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 240px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVtby9wYWdlcy9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi9XZWIlMjBhdmFuY2UvbTFwMTNtZWFuLUNhbmR5LVJvbWFuY2UvZnJvbnRlbmQvc3JjL2FwcC9kZW1vL3BhZ2VzL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUVBLGNBQUE7RUFDQSwrRUFBQTtFQUNBLHVCQUFBO0VBQ0EsNENBQUE7QUNBRjs7QURHQTtFQUNFLHVCQUFBO0VBQ0EsY0FBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQ0FGO0FERUU7RUFDRSxxQ0FBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSwrQ0FBQTtFQUNBLDhDQUFBO0FDQUo7O0FESUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7QUNERjs7QURJQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQ0RGO0FER0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0RBQUE7RUFDQSxrQkFBQTtBQ0RKO0FESUU7RUFDRSx3QkFBQTtBQ0ZKO0FES0U7RUFDRSw2RUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLHVFQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFCQUFBO0FDSEo7O0FET0E7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U0FBQTtJQUNBLFFBQUE7SUFDQSxTQUFBO0lBQ0EsYUFBQTtJQUNBLHNCQUFBO0lBQ0Esb0JBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSx3QkFBQTtJQUNBLHlDQUFBO0lBQ0EsOENBQUE7RUN2Q0Y7RUR5Q0U7SUFDRSxhQUFBO0VDdkNKO0VEMENFO0lBQ0UsV0FBQTtFQ3hDSjtBQUNGO0FENENBO0VBQ0U7SUFDRSxrQkFBQTtFQzFDRjtFRDZDQTtJQUNFLGtCQUFBO0VDM0NGO0VEOENBO0lBQ0Usc0JBQUE7SUFDQSx1QkFBQTtFQzVDRjtFRDhDRTtJQUNFLGdCQUFBO0VDNUNKO0VEZ0RBO0lBQ0UsYUFBQTtFQzlDRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIC0tZ3JlbmF0LTkwMDogIzRlMTAyNztcclxuICAtLWdyZW5hdC03MDA6ICM2ZDE4MzU7XHJcbiAgLS1ncmVuYXQtNTAwOiAjOGEyNzQ4O1xyXG4gIC0tZ29sZC03MDA6ICNiODhhMmQ7XHJcbiAgLS1nb2xkLTUwMDogI2Q0YWE1NDtcclxuICAtLWdvbGQtMzAwOiAjZTdjOThhO1xyXG4gIC0tYmVpZ2UtMTAwOiAjZmRmOGVmO1xyXG4gIC0tYmVpZ2UtMjAwOiAjZjdlZmUxO1xyXG4gIC0tYmVpZ2UtMzAwOiAjZWZlM2NmO1xyXG4gIC0td2hpdGU6ICNmZmZmZmY7XHJcbiAgLS10ZXh0LW1haW46ICMzZjI0MzA7XHJcbiAgLS10ZXh0LW11dGVkOiAjNzA1NTY1O1xyXG5cclxuICBkaXNwbGF5OiBibG9jaztcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1iZWlnZS0xMDApIDAlLCB2YXIoLS1iZWlnZS0yMDApIDEwMCUpO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LW1haW4pO1xyXG4gIGZvbnQtZmFtaWx5OiAnUGx1cyBKYWthcnRhIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICB3aWR0aDogbWluKDEyMDBweCwgOTIlKTtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmxhbmRpbmctbmF2IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgaW5zZXQ6IDAgMCBhdXRvIDA7XHJcbiAgei1pbmRleDogMTIwMDtcclxuICBwYWRkaW5nOiAxNHB4IDA7XHJcbiAgdHJhbnNpdGlvbjogMC4yNXMgZWFzZTtcclxuXHJcbiAgJi5zY3JvbGxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1MywgMjQ4LCAyMzksIDAuOTQpO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTM4LCAzOSwgNzIsIDAuMik7XHJcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMjhweCByZ2JhKDc4LCAxNiwgMzksIDAuMTIpO1xyXG4gIH1cclxufVxyXG5cclxuLm5hdi1pbm5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBnYXA6IDE4cHg7XHJcbn1cclxuXHJcbi5icmFuZCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDEycHg7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgLmJyYW5kLWxvZ28taW1nIHtcclxuICAgIHdpZHRoOiA0NHB4O1xyXG4gICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMCA2cHggMTRweCByZ2JhKDc4LCAxNiwgMzksIDAuMTgpKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcblxyXG4gIC5icmFuZC10ZXh0IHtcclxuICAgIGNvbG9yOiB2YXIoLS1ncmVuYXQtOTAwKTtcclxuICB9XHJcblxyXG4gIC5icmFuZC1zY3JpcHQge1xyXG4gICAgZm9udC1mYW1pbHk6ICdCcnVzaCBTY3JpcHQgTVQnLCAnU2Vnb2UgU2NyaXB0JywgJ0x1Y2lkYSBIYW5kd3JpdGluZycsIGN1cnNpdmU7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tZ3JlbmF0LTcwMCksIHZhcigtLWdvbGQtNTAwKSk7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICB9XHJcbn1cclxuXHJcbi5uYXYtbGlua3Mge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDhweDtcclxufVxyXG5cclxuLm5hdi1saW5rIHtcclxuICBib3JkZXI6IDA7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtbWFpbik7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuICBwYWRkaW5nOiA4cHggMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEzOCwgMzksIDcyLCAwLjEpO1xyXG4gICAgY29sb3I6IHZhcigtLWdyZW5hdC03MDApO1xyXG4gIH1cclxufVxyXG5cclxuLmJ0biB7XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgcGFkZGluZzogMTBweCAxNnB4O1xyXG4gIGZvbnQtc2l6ZTogMC44OHJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJ0bi1wcm9kdWN0cyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMDksIDI0LCA1MywgMC4zNCk7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xyXG4gIGNvbG9yOiB2YXIoLS1ncmVuYXQtOTAwKTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZWlnZS0yMDApO1xyXG4gIH1cclxufVxyXG5cclxuLmJ0bi1hdXRoIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIxMiwgMTcwLCA4NCwgMC44KTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQwZGVnLCB2YXIoLS1ncmVuYXQtNzAwKSwgdmFyKC0tZ3JlbmF0LTUwMCkpO1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMDYpO1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggMThweCByZ2JhKDc4LCAxNiwgMzksIDAuMik7XHJcbiAgfVxyXG59XHJcblxyXG4uYnRuLXNlY29uZGFyeSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxODQsIDEzOCwgNDUsIDAuNDUpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmNWViZDUsICNlY2RhYjUpO1xyXG4gIGNvbG9yOiAjNjMzYTBhO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjAzKTtcclxuICB9XHJcbn1cclxuXHJcbi5idXJnZXIge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIHdpZHRoOiAzNnB4O1xyXG4gIGhlaWdodDogMzZweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZzogMDtcclxuXHJcbiAgc3BhbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAyMnB4O1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBtYXJnaW46IDRweCBhdXRvO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ3JlbmF0LTcwMCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgfVxyXG59XHJcblxyXG4uaGVybyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDEyMHB4IDAgNzBweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTYwZGVnLCB2YXIoLS1iZWlnZS0xMDApIDAlLCB2YXIoLS1iZWlnZS0yMDApIDYwJSwgI2ZmZjllZSAxMDAlKTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxMzgsIDM5LCA3MiwgMC4xNSk7XHJcbn1cclxuXHJcbi5oZXJvLW92ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBpbnNldDogMDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBiYWNrZ3JvdW5kOlxyXG4gICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAyMCUgMTUlLCByZ2JhKDEzOCwgMzksIDcyLCAwLjEyKSwgdHJhbnNwYXJlbnQgMzUlKSxcclxuICAgIHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgNzglIDEyJSwgcmdiYSgyMTIsIDE3MCwgODQsIDAuMjIpLCB0cmFuc3BhcmVudCAzNCUpO1xyXG59XHJcblxyXG4uaGVyby1jb250ZW50IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLmhlcm8tY2hpcCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxuICBjb2xvcjogdmFyKC0tZ3JlbmF0LTcwMCk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMzgsIDM5LCA3MiwgMC4yOCk7XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgZm9udC1zaXplOiAwLjc4cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxufVxyXG5cclxuLmhlcm8gaDEge1xyXG4gIGZvbnQtc2l6ZTogY2xhbXAoMnJlbSwgNHZ3LCAzLjJyZW0pO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjE1O1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4wM2VtO1xyXG4gIGNvbG9yOiB2YXIoLS1ncmVuYXQtOTAwKTtcclxuICBtYXgtd2lkdGg6IDg2MHB4O1xyXG59XHJcblxyXG4uaGVyby10ZXh0IHtcclxuICBtYXgtd2lkdGg6IDc2MHB4O1xyXG4gIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBsaW5lLWhlaWdodDogMS43O1xyXG59XHJcblxyXG4uaGVyby1hY3Rpb25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBnYXA6IDEycHg7XHJcbiAgbWFyZ2luLXRvcDogMjRweDtcclxufVxyXG5cclxuLmJpZyB7XHJcbiAgcGFkZGluZzogMTJweCAyMHB4O1xyXG59XHJcblxyXG4ucm9sZS1ncmlkIHtcclxuICBtYXJnaW4tdG9wOiAzNHB4O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xyXG4gIGdhcDogMThweDtcclxufVxyXG5cclxuLnJvbGUtY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTM4LCAzOSwgNzIsIDAuMik7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMTRweCAzMHB4IHJnYmEoNzgsIDE2LCAzOSwgMC4wOSk7XHJcblxyXG4gIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMS4xNXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIGNvbG9yOiB2YXIoLS1ncmVuYXQtNzAwKTtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG5cclxuICB1bCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE4cHg7XHJcbiAgICBjb2xvcjogIzVlNDE1MTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjg7XHJcbiAgICBmb250LXNpemU6IDAuOTRyZW07XHJcbiAgfVxyXG59XHJcblxyXG4uaW5saW5lLWxpbmsge1xyXG4gIG1hcmdpbi10b3A6IDE0cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMzgsIDM5LCA3MiwgMC4yOCk7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgxMzgsIDM5LCA3MiwgMC4wOCk7XHJcbiAgY29sb3I6IHZhcigtLWdyZW5hdC03MDApO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nOiAxMHB4IDEycHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTM4LCAzOSwgNzIsIDAuMTUpO1xyXG4gIH1cclxufVxyXG5cclxuLmFib3V0IHtcclxuICBwYWRkaW5nOiA3MHB4IDA7XHJcbn1cclxuXHJcbi5hYm91dC1ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMS4xZnIgMWZyO1xyXG4gIGdhcDogMjRweDtcclxuICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRhZyB7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wNmVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgY29sb3I6IHZhcigtLWdvbGQtNzAwKTtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbi5hYm91dCBoMiB7XHJcbiAgZm9udC1zaXplOiBjbGFtcCgxLjhyZW0sIDN2dywgMi42cmVtKTtcclxuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1ncmVuYXQtOTAwKTtcclxuICBsaW5lLWhlaWdodDogMS4yO1xyXG59XHJcblxyXG4uYWJvdXQgcCB7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxufVxyXG5cclxuLmFib3V0LWNhcmRzIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdhcDogMTJweDtcclxufVxyXG5cclxuLmFib3V0LWNhcmQge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE4NCwgMTM4LCA0NSwgMC4zNik7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG5cclxuICBoNCB7XHJcbiAgICBjb2xvcjogdmFyKC0tZ3JlbmF0LTcwMCk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGNvbG9yOiAjNjc1MDVkO1xyXG4gIH1cclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgcGFkZGluZzogMjRweCAwIDc2cHg7XHJcbn1cclxuXHJcbi5jZW50ZXItZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEuMDVmciAxZnI7XHJcbiAgZ2FwOiAyNHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcclxufVxyXG5cclxuLmNhcm91c2VsLWNhcmQge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEzOCwgMzksIDcyLCAwLjI0KTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbiAgYm94LXNoYWRvdzogMCAxNHB4IDMwcHggcmdiYSg3OCwgMTYsIDM5LCAwLjEpO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtc3RhZ2Uge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzUwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG5cclxuLmNhcm91c2VsLWNhcHRpb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBwYWRkaW5nOiAxNHB4IDE2cHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgzNCwgMTAsIDIwLCAwKSwgcmdiYSgzNCwgMTAsIDIwLCAwLjc4KSk7XHJcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuXHJcbiAgaDMge1xyXG4gICAgbWFyZ2luOiAwIDAgNHB4O1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDAuODZyZW07XHJcbiAgICBvcGFjaXR5OiAwLjk1O1xyXG4gIH1cclxufVxyXG5cclxuLmNhcm91c2VsLWJ0biB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICB3aWR0aDogMzhweDtcclxuICBoZWlnaHQ6IDM4cHg7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcclxuICBjb2xvcjogdmFyKC0tZ3JlbmF0LTcwMCk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgJi5wcmV2IHtcclxuICAgIGxlZnQ6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAmLm5leHQge1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uY2Fyb3VzZWwtZG90cyB7XHJcbiAgbWFyZ2luLXRvcDogMTJweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogOHB4O1xyXG5cclxuICBidXR0b24ge1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJhY2tncm91bmQ6ICNkOWMyOWI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgJi5hY3RpdmUge1xyXG4gICAgICB3aWR0aDogMjRweDtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tZ3JlbmF0LTcwMCksIHZhcigtLWdvbGQtNTAwKSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY2VudGVyLXRleHQge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEzOCwgMzksIDcyLCAwLjI0KTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDIycHg7XHJcblxyXG4gIGgyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICBjb2xvcjogdmFyKC0tZ3JlbmF0LTcwMCk7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuODtcclxuICB9XHJcblxyXG4gIHVsIHtcclxuICAgIG1hcmdpbjogMTRweCAwIDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE4cHg7XHJcbiAgICBjb2xvcjogIzVmNDk1NztcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjg7XHJcbiAgfVxyXG59XHJcblxyXG4ubWFwLWdyaWQge1xyXG4gIG1hcmdpbi10b3A6IDIycHg7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEuMmZyIDFmcjtcclxuICBnYXA6IDE4cHg7XHJcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG59XHJcblxyXG4ubWFwLXdyYXAge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEzOCwgMzksIDcyLCAwLjI0KTtcclxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAxMnB4IDI2cHggcmdiYSg3OCwgMTYsIDM5LCAwLjEpO1xyXG59XHJcblxyXG4ubWFwLW5vdGUge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDZweDtcclxuICBwYWRkaW5nOiA3cHggMTFweDtcclxuICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDEzOCwgMzksIDcyLCAwLjEyKTtcclxuICBjb2xvcjogdmFyKC0tZ3JlbmF0LTcwMCk7XHJcbiAgZm9udC1zaXplOiAwLjgycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcblxyXG4gIGkge1xyXG4gICAgY29sb3I6ICNjNjNkNGE7XHJcbiAgfVxyXG59XHJcblxyXG4ubWFwLWRlc2NyaXB0aW9uIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMzgsIDM5LCA3MiwgMC4yNCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMThweDtcclxuICBwYWRkaW5nOiAxOHB4O1xyXG5cclxuICBoMyB7XHJcbiAgICBjb2xvcjogdmFyKC0tZ3JlbmF0LTcwMCk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XHJcbiAgICBsaW5lLWhlaWdodDogMS43NTtcclxuICB9XHJcbn1cclxuXHJcbi5sYW5kaW5nLWZvb3RlciB7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMTM4LCAzOSwgNzIsIDAuMjQpO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxuICBwYWRkaW5nOiAyNHB4IDA7XHJcbn1cclxuXHJcbi5mb290ZXItaW5uZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZ2FwOiAxNHB4O1xyXG5cclxuICBzdHJvbmcge1xyXG4gICAgY29sb3I6IHZhcigtLWdyZW5hdC03MDApO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIH1cclxuXHJcbiAgc3BhbiB7XHJcbiAgICBjb2xvcjogIzY5NGY1ZDtcclxuICAgIGZvbnQtc2l6ZTogMC44NnJlbTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gIC5hYm91dC1ncmlkLFxyXG4gIC5jZW50ZXItZ3JpZCxcclxuICAubWFwLWdyaWQge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgfVxyXG5cclxuICAuY2Fyb3VzZWwtc3RhZ2UgaW1nIHtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgfVxyXG5cclxuICAucm9sZS1ncmlkIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDg2MHB4KSB7XHJcbiAgLmJ1cmdlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIC5icmFuZCAuYnJhbmQtbG9nby1pbWcge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgfVxyXG5cclxuICAuYnJhbmQgLmJyYW5kLXNjcmlwdCB7XHJcbiAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICB9XHJcblxyXG4gIC5uYXYtbGlua3Mge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiA2NHB4O1xyXG4gICAgbGVmdDogNCU7XHJcbiAgICByaWdodDogNCU7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgcGFkZGluZzogMTRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEzOCwgMzksIDcyLCAwLjI0KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMTZweCAzNnB4IHJnYmEoNzgsIDE2LCAzOSwgMC4xOCk7XHJcblxyXG4gICAgJi5vcGVuIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcclxuICAuaGVybyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTA0cHg7XHJcbiAgfVxyXG5cclxuICAuYnJhbmQgLmJyYW5kLXNjcmlwdCB7XHJcbiAgICBmb250LXNpemU6IDEuNDVyZW07XHJcbiAgfVxyXG5cclxuICAuZm9vdGVyLWlubmVyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jYXJvdXNlbC1zdGFnZSBpbWcge1xyXG4gICAgaGVpZ2h0OiAyNDBweDtcclxuICB9XHJcbn1cclxuIiwiOmhvc3Qge1xuICAtLWdyZW5hdC05MDA6ICM0ZTEwMjc7XG4gIC0tZ3JlbmF0LTcwMDogIzZkMTgzNTtcbiAgLS1ncmVuYXQtNTAwOiAjOGEyNzQ4O1xuICAtLWdvbGQtNzAwOiAjYjg4YTJkO1xuICAtLWdvbGQtNTAwOiAjZDRhYTU0O1xuICAtLWdvbGQtMzAwOiAjZTdjOThhO1xuICAtLWJlaWdlLTEwMDogI2ZkZjhlZjtcbiAgLS1iZWlnZS0yMDA6ICNmN2VmZTE7XG4gIC0tYmVpZ2UtMzAwOiAjZWZlM2NmO1xuICAtLXdoaXRlOiAjZmZmZmZmO1xuICAtLXRleHQtbWFpbjogIzNmMjQzMDtcbiAgLS10ZXh0LW11dGVkOiAjNzA1NTY1O1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0tYmVpZ2UtMTAwKSAwJSwgdmFyKC0tYmVpZ2UtMjAwKSAxMDAlKTtcbiAgY29sb3I6IHZhcigtLXRleHQtbWFpbik7XG4gIGZvbnQtZmFtaWx5OiBcIlBsdXMgSmFrYXJ0YSBTYW5zXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogbWluKDEyMDBweCwgOTIlKTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5sYW5kaW5nLW5hdiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaW5zZXQ6IDAgMCBhdXRvIDA7XG4gIHotaW5kZXg6IDEyMDA7XG4gIHBhZGRpbmc6IDE0cHggMDtcbiAgdHJhbnNpdGlvbjogMC4yNXMgZWFzZTtcbn1cbi5sYW5kaW5nLW5hdi5zY3JvbGxlZCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjUzLCAyNDgsIDIzOSwgMC45NCk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTM4LCAzOSwgNzIsIDAuMik7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAyOHB4IHJnYmEoNzgsIDE2LCAzOSwgMC4xMik7XG59XG5cbi5uYXYtaW5uZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMThweDtcbn1cblxuLmJyYW5kIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmJyYW5kIC5icmFuZC1sb2dvLWltZyB7XG4gIHdpZHRoOiA0NHB4O1xuICBoZWlnaHQ6IDQ0cHg7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMCA2cHggMTRweCByZ2JhKDc4LCAxNiwgMzksIDAuMTgpKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLmJyYW5kIC5icmFuZC10ZXh0IHtcbiAgY29sb3I6IHZhcigtLWdyZW5hdC05MDApO1xufVxuLmJyYW5kIC5icmFuZC1zY3JpcHQge1xuICBmb250LWZhbWlseTogXCJCcnVzaCBTY3JpcHQgTVRcIiwgXCJTZWdvZSBTY3JpcHRcIiwgXCJMdWNpZGEgSGFuZHdyaXRpbmdcIiwgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuICBsaW5lLWhlaWdodDogMTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tZ3JlbmF0LTcwMCksIHZhcigtLWdvbGQtNTAwKSk7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbn1cblxuLm5hdi1saW5rcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xufVxuXG4ubmF2LWxpbmsge1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogdmFyKC0tdGV4dC1tYWluKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIHBhZGRpbmc6IDhweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubmF2LWxpbms6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEzOCwgMzksIDcyLCAwLjEpO1xuICBjb2xvcjogdmFyKC0tZ3JlbmF0LTcwMCk7XG59XG5cbi5idG4ge1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgcGFkZGluZzogMTBweCAxNnB4O1xuICBmb250LXNpemU6IDAuODhyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ0bi1wcm9kdWN0cyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTA5LCAyNCwgNTMsIDAuMzQpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gIGNvbG9yOiB2YXIoLS1ncmVuYXQtOTAwKTtcbn1cbi5idG4tcHJvZHVjdHM6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZWlnZS0yMDApO1xufVxuXG4uYnRuLWF1dGgge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIxMiwgMTcwLCA4NCwgMC44KTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE0MGRlZywgdmFyKC0tZ3JlbmF0LTcwMCksIHZhcigtLWdyZW5hdC01MDApKTtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbn1cbi5idG4tYXV0aDpob3ZlciB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxLjA2KTtcbiAgYm94LXNoYWRvdzogMCA4cHggMThweCByZ2JhKDc4LCAxNiwgMzksIDAuMik7XG59XG5cbi5idG4tc2Vjb25kYXJ5IHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxODQsIDEzOCwgNDUsIDAuNDUpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjVlYmQ1LCAjZWNkYWI1KTtcbiAgY29sb3I6ICM2MzNhMGE7XG59XG4uYnRuLXNlY29uZGFyeTpob3ZlciB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxLjAzKTtcbn1cblxuLmJ1cmdlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHdpZHRoOiAzNnB4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMDtcbn1cbi5idXJnZXIgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMjJweDtcbiAgaGVpZ2h0OiAycHg7XG4gIG1hcmdpbjogNHB4IGF1dG87XG4gIGJhY2tncm91bmQ6IHZhcigtLWdyZW5hdC03MDApO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi5oZXJvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAxMjBweCAwIDcwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNjBkZWcsIHZhcigtLWJlaWdlLTEwMCkgMCUsIHZhcigtLWJlaWdlLTIwMCkgNjAlLCAjZmZmOWVlIDEwMCUpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxMzgsIDM5LCA3MiwgMC4xNSk7XG59XG5cbi5oZXJvLW92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGluc2V0OiAwO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAyMCUgMTUlLCByZ2JhKDEzOCwgMzksIDcyLCAwLjEyKSwgdHJhbnNwYXJlbnQgMzUlKSwgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCA3OCUgMTIlLCByZ2JhKDIxMiwgMTcwLCA4NCwgMC4yMiksIHRyYW5zcGFyZW50IDM0JSk7XG59XG5cbi5oZXJvLWNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5oZXJvLWNoaXAge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgY29sb3I6IHZhcigtLWdyZW5hdC03MDApO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEzOCwgMzksIDcyLCAwLjI4KTtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGZvbnQtc2l6ZTogMC43OHJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5oZXJvIGgxIHtcbiAgZm9udC1zaXplOiBjbGFtcCgycmVtLCA0dncsIDMuMnJlbSk7XG4gIGxpbmUtaGVpZ2h0OiAxLjE1O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDNlbTtcbiAgY29sb3I6IHZhcigtLWdyZW5hdC05MDApO1xuICBtYXgtd2lkdGg6IDg2MHB4O1xufVxuXG4uaGVyby10ZXh0IHtcbiAgbWF4LXdpZHRoOiA3NjBweDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICBmb250LXNpemU6IDFyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjc7XG59XG5cbi5oZXJvLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMTJweDtcbiAgbWFyZ2luLXRvcDogMjRweDtcbn1cblxuLmJpZyB7XG4gIHBhZGRpbmc6IDEycHggMjBweDtcbn1cblxuLnJvbGUtZ3JpZCB7XG4gIG1hcmdpbi10b3A6IDM0cHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTtcbiAgZ2FwOiAxOHB4O1xufVxuXG4ucm9sZS1jYXJkIHtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEzOCwgMzksIDcyLCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3gtc2hhZG93OiAwIDE0cHggMzBweCByZ2JhKDc4LCAxNiwgMzksIDAuMDkpO1xufVxuLnJvbGUtY2FyZCBoMyB7XG4gIGZvbnQtc2l6ZTogMS4xNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBjb2xvcjogdmFyKC0tZ3JlbmF0LTcwMCk7XG59XG4ucm9sZS1jYXJkIHAge1xuICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ucm9sZS1jYXJkIHVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDE4cHg7XG4gIGNvbG9yOiAjNWU0MTUxO1xuICBsaW5lLWhlaWdodDogMS44O1xuICBmb250LXNpemU6IDAuOTRyZW07XG59XG5cbi5pbmxpbmUtbGluayB7XG4gIG1hcmdpbi10b3A6IDE0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTM4LCAzOSwgNzIsIDAuMjgpO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEzOCwgMzksIDcyLCAwLjA4KTtcbiAgY29sb3I6IHZhcigtLWdyZW5hdC03MDApO1xuICBmb250LXdlaWdodDogNzAwO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4IDEycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5pbmxpbmUtbGluazpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTM4LCAzOSwgNzIsIDAuMTUpO1xufVxuXG4uYWJvdXQge1xuICBwYWRkaW5nOiA3MHB4IDA7XG59XG5cbi5hYm91dC1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxLjFmciAxZnI7XG4gIGdhcDogMjRweDtcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xufVxuXG4uc2VjdGlvbi10YWcge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDZlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6IHZhcigtLWdvbGQtNzAwKTtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG4uYWJvdXQgaDIge1xuICBmb250LXNpemU6IGNsYW1wKDEuOHJlbSwgM3Z3LCAyLjZyZW0pO1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICBjb2xvcjogdmFyKC0tZ3JlbmF0LTkwMCk7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG59XG5cbi5hYm91dCBwIHtcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICBsaW5lLWhlaWdodDogMS44O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG4uYWJvdXQtY2FyZHMge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDEycHg7XG59XG5cbi5hYm91dC1jYXJkIHtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE4NCwgMTM4LCA0NSwgMC4zNik7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG4uYWJvdXQtY2FyZCBoNCB7XG4gIGNvbG9yOiB2YXIoLS1ncmVuYXQtNzAwKTtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuLmFib3V0LWNhcmQgcCB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICM2NzUwNWQ7XG59XG5cbi5jZW50ZXIge1xuICBwYWRkaW5nOiAyNHB4IDAgNzZweDtcbn1cblxuLmNlbnRlci1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxLjA1ZnIgMWZyO1xuICBnYXA6IDI0cHg7XG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcbn1cblxuLmNhcm91c2VsLWNhcmQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTM4LCAzOSwgNzIsIDAuMjQpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiAxMnB4O1xuICBib3gtc2hhZG93OiAwIDE0cHggMzBweCByZ2JhKDc4LCAxNiwgMzksIDAuMSk7XG59XG5cbi5jYXJvdXNlbC1zdGFnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5jYXJvdXNlbC1zdGFnZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY2Fyb3VzZWwtY2FwdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcGFkZGluZzogMTRweCAxNnB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDM0LCAxMCwgMjAsIDApLCByZ2JhKDM0LCAxMCwgMjAsIDAuNzgpKTtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbn1cbi5jYXJvdXNlbC1jYXB0aW9uIGgzIHtcbiAgbWFyZ2luOiAwIDAgNHB4O1xuICBmb250LXNpemU6IDFyZW07XG59XG4uY2Fyb3VzZWwtY2FwdGlvbiBwIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDAuODZyZW07XG4gIG9wYWNpdHk6IDAuOTU7XG59XG5cbi5jYXJvdXNlbC1idG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHdpZHRoOiAzOHB4O1xuICBoZWlnaHQ6IDM4cHg7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgY29sb3I6IHZhcigtLWdyZW5hdC03MDApO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG59XG4uY2Fyb3VzZWwtYnRuLnByZXYge1xuICBsZWZ0OiAxMHB4O1xufVxuLmNhcm91c2VsLWJ0bi5uZXh0IHtcbiAgcmlnaHQ6IDEwcHg7XG59XG5cbi5jYXJvdXNlbC1kb3RzIHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogOHB4O1xufVxuLmNhcm91c2VsLWRvdHMgYnV0dG9uIHtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogI2Q5YzI5YjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNhcm91c2VsLWRvdHMgYnV0dG9uLmFjdGl2ZSB7XG4gIHdpZHRoOiAyNHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1ncmVuYXQtNzAwKSwgdmFyKC0tZ29sZC01MDApKTtcbn1cblxuLmNlbnRlci10ZXh0IHtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEzOCwgMzksIDcyLCAwLjI0KTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogMjJweDtcbn1cbi5jZW50ZXItdGV4dCBoMiB7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIGNvbG9yOiB2YXIoLS1ncmVuYXQtNzAwKTtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG59XG4uY2VudGVyLXRleHQgcCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgbGluZS1oZWlnaHQ6IDEuODtcbn1cbi5jZW50ZXItdGV4dCB1bCB7XG4gIG1hcmdpbjogMTRweCAwIDA7XG4gIHBhZGRpbmctbGVmdDogMThweDtcbiAgY29sb3I6ICM1ZjQ5NTc7XG4gIGxpbmUtaGVpZ2h0OiAxLjg7XG59XG5cbi5tYXAtZ3JpZCB7XG4gIG1hcmdpbi10b3A6IDIycHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMS4yZnIgMWZyO1xuICBnYXA6IDE4cHg7XG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcbn1cblxuLm1hcC13cmFwIHtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEzOCwgMzksIDcyLCAwLjI0KTtcbiAgYm9yZGVyLXJhZGl1czogMThweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm94LXNoYWRvdzogMCAxMnB4IDI2cHggcmdiYSg3OCwgMTYsIDM5LCAwLjEpO1xufVxuXG4ubWFwLW5vdGUge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG4gIHBhZGRpbmc6IDdweCAxMXB4O1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgYmFja2dyb3VuZDogcmdiYSgxMzgsIDM5LCA3MiwgMC4xMik7XG4gIGNvbG9yOiB2YXIoLS1ncmVuYXQtNzAwKTtcbiAgZm9udC1zaXplOiAwLjgycmVtO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLm1hcC1ub3RlIGkge1xuICBjb2xvcjogI2M2M2Q0YTtcbn1cblxuLm1hcC1kZXNjcmlwdGlvbiB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMzgsIDM5LCA3MiwgMC4yNCk7XG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gIHBhZGRpbmc6IDE4cHg7XG59XG4ubWFwLWRlc2NyaXB0aW9uIGgzIHtcbiAgY29sb3I6IHZhcigtLWdyZW5hdC03MDApO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLm1hcC1kZXNjcmlwdGlvbiBwIHtcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICBsaW5lLWhlaWdodDogMS43NTtcbn1cblxuLmxhbmRpbmctZm9vdGVyIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMTM4LCAzOSwgNzIsIDAuMjQpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gIHBhZGRpbmc6IDI0cHggMDtcbn1cblxuLmZvb3Rlci1pbm5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxNHB4O1xufVxuLmZvb3Rlci1pbm5lciBzdHJvbmcge1xuICBjb2xvcjogdmFyKC0tZ3JlbmF0LTcwMCk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG4uZm9vdGVyLWlubmVyIHAge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG4uZm9vdGVyLWlubmVyIHNwYW4ge1xuICBjb2xvcjogIzY5NGY1ZDtcbiAgZm9udC1zaXplOiAwLjg2cmVtO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuYWJvdXQtZ3JpZCxcbiAgLmNlbnRlci1ncmlkLFxuICAubWFwLWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG4gIC5jYXJvdXNlbC1zdGFnZSBpbWcge1xuICAgIGhlaWdodDogMzAwcHg7XG4gIH1cbiAgLnJvbGUtZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA4NjBweCkge1xuICAuYnVyZ2VyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAuYnJhbmQgLmJyYW5kLWxvZ28taW1nIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gIH1cbiAgLmJyYW5kIC5icmFuZC1zY3JpcHQge1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICB9XG4gIC5uYXYtbGlua3Mge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDY0cHg7XG4gICAgbGVmdDogNCU7XG4gICAgcmlnaHQ6IDQlO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICBwYWRkaW5nOiAxNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTM4LCAzOSwgNzIsIDAuMjQpO1xuICAgIGJveC1zaGFkb3c6IDAgMTZweCAzNnB4IHJnYmEoNzgsIDE2LCAzOSwgMC4xOCk7XG4gIH1cbiAgLm5hdi1saW5rcy5vcGVuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIC5uYXYtbGlua3MgLmJ0biB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAuaGVybyB7XG4gICAgcGFkZGluZy10b3A6IDEwNHB4O1xuICB9XG4gIC5icmFuZCAuYnJhbmQtc2NyaXB0IHtcbiAgICBmb250LXNpemU6IDEuNDVyZW07XG4gIH1cbiAgLmZvb3Rlci1pbm5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgfVxuICAuZm9vdGVyLWlubmVyIHNwYW4ge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbiAgLmNhcm91c2VsLXN0YWdlIGltZyB7XG4gICAgaGVpZ2h0OiAyNDBweDtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_demo_pages_landing_landing_component_ts.js.map