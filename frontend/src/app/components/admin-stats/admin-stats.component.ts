import { Component, OnInit } from '@angular/core';
import { AdminStatsService } from '../../services/admin-stats.service';

@Component({
  selector: 'app-admin-stats',
  templateUrl: './admin-stats.component.html',
  styleUrls: ['./admin-stats.component.css']
})
export class AdminStatsComponent implements OnInit {
  globalStats: any = {};
  revenueMonthly: number[] = [];
  revenueByBoutique: any = {};
  occupancy: any = {};
  loyerStatus: any = {};
  recentPayments: any[] = [];

  constructor(private statsService: AdminStatsService) {}

  ngOnInit(): void {
    this.loadGlobalStats();
    this.loadRevenueMonthly();
    this.loadRevenueByBoutique();
    this.loadOccupancy();
    this.loadLoyerStatus();
    this.loadRecentPayments();
  }

  loadGlobalStats() {
    this.statsService.getGlobalStats().subscribe(res => this.globalStats = res.data);
  }

  loadRevenueMonthly() {
    const year = new Date().getFullYear();
    this.statsService.getRevenueByMonth(year).subscribe(res => this.revenueMonthly = res.data);
  }

  loadRevenueByBoutique() {
    this.statsService.getRevenueByBoutique().subscribe(res => this.revenueByBoutique = res.data);
  }

  loadOccupancy() {
    this.statsService.getOccupancy().subscribe(res => this.occupancy = res.data);
  }

  loadLoyerStatus() {
    this.statsService.getLoyerStatus().subscribe(res => this.loyerStatus = res.data);
  }

  loadRecentPayments() {
    this.statsService.getRecentPayments(5).subscribe(res => this.recentPayments = res.data);
  }
}
