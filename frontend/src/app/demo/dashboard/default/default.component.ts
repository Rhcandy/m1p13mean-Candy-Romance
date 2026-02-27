import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { AdminStatsService } from '../../../services/admin-stats.service';
import { AuthService } from '../../../services/auth.service';
import { BoutiqueService } from '../../../services/boutique.service';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { BajajChartComponent } from 'src/app/theme/shared/components/apexchart/bajaj-chart/bajaj-chart.component';
import { BarChartComponent } from 'src/app/theme/shared/components/apexchart/bar-chart/bar-chart.component';
import { ChartDataMonthComponent } from 'src/app/theme/shared/components/apexchart/chart-data-month/chart-data-month.component';

@Component({
  selector: 'app-default',
  standalone: true,   // ✅ AJOUTE CETTE LIGNE
  imports: [
    SharedModule,
    BajajChartComponent,
    BarChartComponent,
    ChartDataMonthComponent
  ],
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  globalStats: any = {
  totalBoutiques: 0,
  totalBoxes: 0,
  totalIncome: 0,
  totalEarnings: 0,
  totalImpayes: 0,
  totalRetards: 0
};
  revenueByMonth: any[] = [];
  revenueByBoutique: any[] = [];
  occupancyRate: number = 0;
  loyerStatus: any = {};
  recentPayments: any[] = [];
  globalStatsArray: any[] = [];
 loyerStatusArray: { key: string; value: any }[] = [];
 dataLoaded: boolean = false;

  constructor(
    private authService: AuthService,
    private boutiqueService: BoutiqueService,
    private statsService: AdminStatsService,
    private router: Router,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
  console.log('ngOnInit called');
  
  // commente les redirections temporairement pour tester
  // if (!this.authService.hasRole('admin_boutique')) return;
  // const boutiqueStatus = this.boutiqueService.getCachedBoutiqueStatus();
  // if (!boutiqueStatus.hasBoutique) this.router.navigate(['/boutique/boxes']);
  // if (!boutiqueStatus.isActive) this.router.navigate(['/boutique/informations']);

  this.loadStats();
  this.loadRecentPayments();
  this.loadRevenueByMonth(); 
}


loadStats() {
  // 🔹 Global Stats
  this.statsService.getGlobalStats().subscribe({
    next: (res: any) => {
      console.log('Global Stats Response:', res);

      if (res?.success && res.data) {
        this.globalStats = {
          totalBoutiques: res.data.totalBoutiques ?? 0,
          totalBoxes: res.data.totalBoxes ?? 0,
          totalIncome: res.data.totalIncome ?? 0,
          totalEarnings: res.data.totalEarnings ?? 0,
          totalImpayes: res.data.totalImpayes ?? 0,
          totalRetards: res.data.totalRetards ?? 0
        };
        setTimeout(() => {
          this.globalStats = res.data;
        });
        this.globalStatsArray = Object.entries(this.globalStats).map(([key, value]) => ({ key, value }));
        this.cd.markForCheck();

      }

      console.log('Assigned globalStats:', this.globalStats);
    },
    error: (err) => console.error('Global Stats Error:', err)
  });

  // 🔹 Occupancy Rate
this.statsService.getOccupancyRate().subscribe({
  next: (res: any) => {
    console.log('Occupancy Rate Response:', res);
    // 🔹 Récupérer la valeur dans res.data
    this.occupancyRate = res?.data ?? 0;
    console.log('Assigned occupancyRate:', this.occupancyRate);
  },
  error: (err) => console.error('Occupancy Rate Error:', err)
});

  // 🔹 Revenue By Boutique
this.statsService.getRevenueByBoutique().subscribe({
  next: (res: any) => {
    console.log('Revenue By Boutique Response:', res);

    // 🔹 Assigner uniquement le tableau
    this.revenueByBoutique = res?.data || [];
    
    console.log('Assigned revenueByBoutique:', this.revenueByBoutique);
    this.cd.markForCheck();
  },
  error: (err) => console.error('Revenue By Boutique Error:', err)
});



  // 🔹 Loyer Status
// Ajoute cette propriété


// Dans loadStats() pour Loyer Status
this.statsService.getLoyerStatusStats().subscribe({
  next: (res: any) => {
    console.log('Loyer Status Response:', res);
    if (res?.success && res.data) {
      // Transforme en array
      this.loyerStatusArray = Object.entries(res.data).map(([key, value]) => ({ key, value }));
      // Forcer Angular à détecter le changement
      setTimeout(() => this.cd.detectChanges(), 0);
      this.dataLoaded = true;
      this.cd.detectChanges();
    } else {
      this.loyerStatusArray = [];
    }
    console.log('Assigned loyerStatusArray:', this.loyerStatusArray);
  },
  error: (err) => console.error('Loyer Status Error:', err)
});

}
loadRecentPayments() {
  this.statsService.getRecentPayments().subscribe({
    next: (res: any) => {
      console.log('Recent Payments Response:', res);
      // On récupère le tableau depuis res.data
      this.recentPayments = res?.data || [];
      console.log('Assigned recentPayments:', this.recentPayments);
      this.cd.markForCheck();
    },
    error: (err) => console.error('Recent Payments Error:', err)
  });
}
loadRevenueByMonth(year?: number) {
  this.statsService.getRevenueByMonth(year).subscribe({
    next: (res: any) => {
      if (res?.success && res.data) {
        // transformer "total" en "amount" pour le chart
        this.revenueByMonth = res.data.map((d: any) => ({
          month: d.month,
          amount: d.total
        }));
        console.log('Assigned revenueByMonth:', this.revenueByMonth);
        this.cd.markForCheck();
      }
    },
    error: (err) => console.error('Revenue By Month Error:', err)
  });
}
}