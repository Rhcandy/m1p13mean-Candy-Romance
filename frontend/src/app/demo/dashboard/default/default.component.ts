import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { BoutiqueService } from 'src/app/services/boutique.service';
import { BoutiqueDashboardComponent } from '../../pages/boutique/dashboard/boutique-dashboard.component';
import { UserDashboardComponent } from '../../pages/user/dashboard/user-dashboard.component';
import { AdminDashboardComponent } from '../../pages/royal-center/dashboar/admin-dashboard.component';

@Component({
  selector: 'app-default',
  standalone: true,
  imports: [CommonModule, BoutiqueDashboardComponent, UserDashboardComponent, AdminDashboardComponent],
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  loading = true;
  showAdminCenterDashboard = false;
  showBoutiqueDashboard = false;
  showUserDashboard = false;

  constructor(
    private readonly authService: AuthService,
    private readonly boutiqueService: BoutiqueService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    const isAdminCenter = this.authService.isAdminCenterRole();

    if (isAdminCenter) {
      this.showAdminCenterDashboard = true;
      this.loading = false;
      return;
    }

    const isAdminBoutique = this.authService.hasRole('admin_boutique');

    if (isAdminBoutique) {
      const boutiqueStatus = this.boutiqueService.getCachedBoutiqueStatus();

      if (!boutiqueStatus.hasBoutique) {
        this.router.navigate(['/boutique/boxes']);
        return;
      }

      if (!boutiqueStatus.isActive) {
        this.router.navigate(['/boutique/informations']);
        return;
      }

      this.showBoutiqueDashboard = true;
      this.loading = false;
      return;
    }

    this.showUserDashboard = true;
    this.loading = false;
  }
}
