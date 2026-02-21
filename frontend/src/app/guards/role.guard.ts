import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (this.authService.hasRole('admin_boutique')) {
      // Rediriger les admin_boutique vers leur dashboard
      this.router.navigate(['/boutique/dashboard']);
      return false;
    }
    
    // Laisser les autres utilisateurs (user, admin_center, super_admin) accéder à la route
    return true;
  }
}
