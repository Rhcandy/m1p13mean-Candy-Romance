// landing.component.ts
import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  trigger, transition, style, animate, state
} from '@angular/animations';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations: [
    trigger('fadeUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('600ms cubic-bezier(.4,0,.2,1)', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('slideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(50px)' }),
        animate('700ms 200ms cubic-bezier(.4,0,.2,1)', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class LandingComponent implements OnInit, OnDestroy {

  isScrolled  = false;
  menuOpen    = false;
  isSending   = false;
  sent        = false;
  currentYear = new Date().getFullYear();
  isAuthenticated = false;

  contactForm!: FormGroup;

  // ── Features strip ────────────────────────────────────────
  features = [
    {
      icon: 'ti-truck',
      title: 'Livraison rapide',
      desc: 'Partout à Madagascar',
      color: '#5046e5',
      bg: 'rgba(80,70,229,.1)'
    },
    {
      icon: 'ti-shield-check',
      title: 'Paiement sécurisé',
      desc: 'SSL & cryptage 256 bits',
      color: '#059669',
      bg: 'rgba(5,150,105,.1)'
    },
    {
      icon: 'ti-refresh',
      title: 'Retours gratuits',
      desc: 'Sous 30 jours',
      color: '#ea6c00',
      bg: 'rgba(234,108,0,.1)'
    },
    {
      icon: 'ti-headset',
      title: 'Support 7j/7',
      desc: 'Équipe dédiée',
      color: '#0284c7',
      bg: 'rgba(2,132,199,.1)'
    }
  ];

  // ── About pillars ─────────────────────────────────────────
  pillars = [
    {
      icon: 'ti-rocket',
      title: 'Lancement rapide',
      desc: 'Votre boutique en ligne en 5 minutes.',
      color: '#5046e5',
      bg: 'rgba(80,70,229,.1)'
    },
    {
      icon: 'ti-chart-bar',
      title: 'Analytics avancés',
      desc: 'Suivez vos ventes en temps réel.',
      color: '#059669',
      bg: 'rgba(5,150,105,.1)'
    },
    {
      icon: 'ti-lock',
      title: 'Sécurité maximale',
      desc: 'Vos données et transactions protégées.',
      color: '#7c3aed',
      bg: 'rgba(124,58,237,.1)'
    }
  ];

  // ── Categories ────────────────────────────────────────────
  categories = [
    { icon: 'ti-devices',      name: 'Électronique',   count: '2 400+ articles', color: '#5046e5', bg: 'rgba(80,70,229,.1)' },
    { icon: 'ti-shirt',        name: 'Mode',           count: '3 100+ articles', color: '#ec4899', bg: 'rgba(236,72,153,.1)' },
    { icon: 'ti-home',         name: 'Maison',         count: '1 800+ articles', color: '#ea6c00', bg: 'rgba(234,108,0,.1)'  },
    { icon: 'ti-ball-football',name: 'Sport',          count: '900+ articles',   color: '#059669', bg: 'rgba(5,150,105,.1)'  },
    { icon: 'ti-book',         name: 'Livres',         count: '600+ articles',   color: '#0284c7', bg: 'rgba(2,132,199,.1)'  },
    { icon: 'ti-tool',         name: 'Bricolage',      count: '750+ articles',   color: '#7c3aed', bg: 'rgba(124,58,237,.1)' },
    { icon: 'ti-heart',        name: 'Beauté',         count: '1 200+ articles', color: '#e63946', bg: 'rgba(230,57,70,.1)'  },
    { icon: 'ti-package',      name: 'Autres',         count: '5 000+ articles', color: '#6b7699', bg: 'rgba(107,118,153,.1)'}
  ];

  // ── Contact channels ──────────────────────────────────────
  channels = [
    {
      icon: 'ti-mail',
      label: 'Email',
      value: 'contact@bazaar.mg',
      color: '#5046e5',
      bg: 'rgba(80,70,229,.1)'
    },
    {
      icon: 'ti-phone',
      label: 'Téléphone',
      value: '+261 34 00 000 00',
      color: '#059669',
      bg: 'rgba(5,150,105,.1)'
    },
    {
      icon: 'ti-map-pin',
      label: 'Adresse',
      value: 'Antananarivo, Madagascar',
      color: '#ea6c00',
      bg: 'rgba(234,108,0,.1)'
    }
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated;
    this.contactForm = this.fb.group({
      prenom:  ['', Validators.required],
      nom:     ['', Validators.required],
      email:   ['', [Validators.required, Validators.email]],
      sujet:   ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnDestroy(): void {}

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 60;
  }

  scrollTo(id: string): void {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  sendMessage(): void {
    if (this.contactForm.invalid) return;
    this.isSending = true;
    // Simuler un envoi
    setTimeout(() => {
      this.isSending = false;
      this.sent      = true;
      this.contactForm.reset();
      setTimeout(() => this.sent = false, 5000);
    }, 1800);
  }

  // ── Navigation & Auth ───────────────────────────────────

  goToLogin(): void {
    this.router.navigate(['/login']);
  }

  goToRegister(): void {
    this.router.navigate(['/register']);
  }

  goToProducts(): void {
    if (this.isAuthenticated) {
      this.router.navigate(['/produits']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  goToDashboard(): void {
    if (this.isAuthenticated) {
      this.router.navigate(['/default']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  logout(): void {
    this.authService.logout();
    this.isAuthenticated = false;
  }
}
