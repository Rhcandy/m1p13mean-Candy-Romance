import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { BoutiqueService } from '../services/boutique.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService,
    private readonly boutiqueService: BoutiqueService,
    private readonly router: Router
  ) {}

  canActivate(): boolean | UrlTree {
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
}
