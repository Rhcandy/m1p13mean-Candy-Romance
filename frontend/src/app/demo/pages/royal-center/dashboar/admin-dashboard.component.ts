import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { forkJoin } from 'rxjs';
import { AdminStatsService } from '../../../../services/admin-stats.service';
import { NotificationService } from '../../../../services/notification.service';

interface GlobalStats {
  totalBoutiques: number;
  totalBoxes: number;
  totalLoyers: number;
  totalRevenus: number;
  totalImpayes: number;
  totalRetards: number;
}

interface RevenueByMonthItem {
  month: number;
  total: number;
}

interface RevenueByBoutiqueItem {
  boutiqueName: string;
  totalRevenue: number;
}

interface RecentPaymentItem {
  boutiqueNom: string;
  periode: string;
  reference: string;
  amount: number;
  date: string;
}

interface LoyerStatusStats {
  paye: number;
  partiel: number;
  impaye: number;
  retard: number;
}

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  loading = false;
  currentYear = new Date().getFullYear();

  globalStats: GlobalStats = {
    totalBoutiques: 0,
    totalBoxes: 0,
    totalLoyers: 0,
    totalRevenus: 0,
    totalImpayes: 0,
    totalRetards: 0
  };

  occupancyRate = 0;
  loyerStatus: LoyerStatusStats = { paye: 0, partiel: 0, impaye: 0, retard: 0 };
  revenueByMonth: RevenueByMonthItem[] = [];
  revenueByBoutique: RevenueByBoutiqueItem[] = [];
  recentPayments: RecentPaymentItem[] = [];

  readonly monthLabels = ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aou', 'Sep', 'Oct', 'Nov', 'Dec'];

  constructor(
    private readonly statsService: AdminStatsService,
    private readonly notificationService: NotificationService,
    private readonly cdr: ChangeDetectorRef 
  ) {}

  ngOnInit(): void {
    this.loadDashboard();
  }

  get totalLoyerStatuses(): number {
    return this.loyerStatus.paye + this.loyerStatus.partiel + this.loyerStatus.impaye + this.loyerStatus.retard;
  }

  get recoveryRate(): number {
    if (this.globalStats.totalLoyers <= 0) return 0;
    return Number(((this.globalStats.totalRevenus / this.globalStats.totalLoyers) * 100).toFixed(2));
  }

  get monthlyTotalRevenue(): number {
    return this.revenueByMonth.reduce((sum, item) => sum + (item.total || 0), 0);
  }

  get topBoutiques(): RevenueByBoutiqueItem[] {
    return [...this.revenueByBoutique].sort((a, b) => (b.totalRevenue || 0) - (a.totalRevenue || 0)).slice(0, 6);
  }

  get maxMonthlyRevenue(): number {
    return this.revenueByMonth.reduce((max, item) => Math.max(max, item.total || 0), 0);
  }

  getMonthLabel(month: number): string {
    return this.monthLabels[month - 1] || `M${month}`;
  }

  getMonthBarWidth(value: number): number {
    if (this.maxMonthlyRevenue <= 0) return 0;
    return Number(((value / this.maxMonthlyRevenue) * 100).toFixed(2));
  }

  getStatusPercent(value: number): number {
    if (this.totalLoyerStatuses <= 0) return 0;
    return Number(((value / this.totalLoyerStatuses) * 100).toFixed(1));
  }

  private loadDashboard(): void {
    this.loading = true;

    forkJoin({
      global: this.statsService.getGlobalStats(),
      occupancy: this.statsService.getOccupancy(),
      loyerStatus: this.statsService.getLoyerStatus(),
      revenueByMonth: this.statsService.getRevenueByMonth(this.currentYear),
      revenueByBoutique: this.statsService.getRevenueByBoutique(),
      recentPayments: this.statsService.getRecentPayments(8)
    }).subscribe({
      next: (responses: any) => {
        this.globalStats = {
          totalBoutiques: responses?.global?.data?.totalBoutiques ?? 0,
          totalBoxes: responses?.global?.data?.totalBoxes ?? 0,
          totalLoyers: responses?.global?.data?.totalLoyers ?? 0,
          totalRevenus: responses?.global?.data?.totalRevenus ?? 0,
          totalImpayes: responses?.global?.data?.totalImpayes ?? 0,
          totalRetards: responses?.global?.data?.totalRetards ?? 0
        };

        this.occupancyRate = Number(responses?.occupancy?.data ?? 0);
        this.loyerStatus = {
          paye: Number(responses?.loyerStatus?.data?.paye ?? 0),
          partiel: Number(responses?.loyerStatus?.data?.partiel ?? 0),
          impaye: Number(responses?.loyerStatus?.data?.impaye ?? 0),
          retard: Number(responses?.loyerStatus?.data?.retard ?? 0)
        };

        this.revenueByMonth = Array.isArray(responses?.revenueByMonth?.data)
          ? responses.revenueByMonth.data
          : [];
        this.revenueByBoutique = Array.isArray(responses?.revenueByBoutique?.data)
          ? responses.revenueByBoutique.data
          : [];
        this.recentPayments = Array.isArray(responses?.recentPayments?.data) ? responses.recentPayments.data : [];

        this.loading = false;
        this.cdr.detectChanges()
      },
      error: (error) => {
        this.loading = false;
        this.cdr.detectChanges()
        this.notificationService.error(
          'Erreur dashboard',
          error?.error?.message || 'Impossible de charger les donnees du dashboard admin centre.'
        );
      }
    });
  }
}
