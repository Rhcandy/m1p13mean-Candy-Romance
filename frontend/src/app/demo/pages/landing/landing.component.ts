import { CommonModule } from '@angular/common';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { LeafletMapComponent } from '../../../components/map/leaflet-map.component';
import { AuthService, User } from '../../../services/auth.service';

interface CenterSlide {
  src: string;
  alt: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterModule, LeafletMapComponent],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, OnDestroy {
  isScrolled = false;
  menuOpen = false;
  isAuthenticated = false;
  isBoutiqueAdmin = false;
  currentYear = new Date().getFullYear();

  readonly centerCoordinates: [number, number] = [-18.952783162227885, 47.52845781884346];

  readonly centerSlides: CenterSlide[] = [
    {
      src: 'assets/images/centre/1.webp',
      alt: 'Entree du Royal Center',
      title: 'Royal Center - Entree principale',
      description: 'Un point de rencontre moderne pour les boutiques et les clients.'
    },
    {
      src: 'assets/images/centre/2.webp',
      alt: 'Zone commerciale du Royal Center',
      title: 'Zone commerciale active',
      description: 'Des espaces penses pour presenter les produits et faciliter les echanges.'
    },
    {
      src: 'assets/images/centre/3.webp',
      alt: 'Vue interieure du Royal Center',
      title: 'Experience client au centre',
      description: 'Un environnement accueillant pour decouvrir et acheter en confiance.'
    }
  ];

  activeSlide = 0;

  private authSubscription?: Subscription;
  private carouselTimer?: ReturnType<typeof setInterval>;

  constructor(
    private readonly router: Router,
    private readonly authService: AuthService
  ) {}

  ngOnInit(): void {
    this.applyUserState(this.authService.currentUser);

    this.authSubscription = this.authService.currentUser$.subscribe((user) => {
      this.applyUserState(user);
    });

    this.startCarousel();
  }

  ngOnDestroy(): void {
    this.authSubscription?.unsubscribe();
    this.stopCarousel();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 20;
  }

  scrollTo(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  goToProducts(): void {
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

  goToUserSpace(): void {
    if (this.isAuthenticated && !this.isBoutiqueAdmin) {
      this.router.navigate(['/produits']);
      return;
    }

    this.router.navigate(['/login']);
  }

  goToBoutiqueSpace(): void {
    if (this.isAuthenticated && this.isBoutiqueAdmin) {
      this.router.navigate(['/boutique/produits']);
      return;
    }

    this.router.navigate(['/register']);
  }

  goToRegister(): void {
    this.router.navigate(['/register']);
  }

  handleAuthAction(): void {
    if (this.isAuthenticated) {
      this.authService.logout(false);
      this.menuOpen = false;
      this.router.navigate(['/landing']);
      return;
    }

    this.router.navigate(['/login']);
  }

  previousSlide(): void {
    this.activeSlide = (this.activeSlide - 1 + this.centerSlides.length) % this.centerSlides.length;
    this.restartCarousel();
  }

  nextSlide(): void {
    this.activeSlide = (this.activeSlide + 1) % this.centerSlides.length;
  }

  setSlide(index: number): void {
    this.activeSlide = index;
    this.restartCarousel();
  }

  private applyUserState(user: User | null): void {
    this.isAuthenticated = !!user;
    this.isBoutiqueAdmin = !!user && user.role === 'admin_boutique';
  }

  private startCarousel(): void {
    this.stopCarousel();
    this.carouselTimer = setInterval(() => this.nextSlide(), 5000);
  }

  private stopCarousel(): void {
    if (this.carouselTimer) {
      clearInterval(this.carouselTimer);
      this.carouselTimer = undefined;
    }
  }

  private restartCarousel(): void {
    this.startCarousel();
  }
}
