import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { NgApexchartsModule, ChartComponent } from 'ng-apexcharts';
import { AdminStatsService } from '../../../../../services/admin-stats.service';

@Component({
  selector: 'app-chart-data-month',
  standalone: true,
  imports: [CommonModule, NgApexchartsModule],
  templateUrl: './chart-data-month.component.html',
  styleUrls: ['./chart-data-month.component.scss']
})
export class ChartDataMonthComponent implements OnInit, OnChanges {

  @ViewChild('chart') chart!: ChartComponent;
  @Input() monthlyData: any[] = [];

  chartOptions: any = {};
  amount: number = 0;
  revenueByMonth: any[] = [];
  btnActive: 'month' | 'year' = 'year';

  constructor(
    private cd: ChangeDetectorRef,
    private statsService: AdminStatsService
  ) {}

  ngOnInit() {
    this.initChart();
    this.loadRevenueByMonth(new Date().getFullYear()); // charge l'année actuelle par défaut
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['monthlyData'] && this.monthlyData) {
      this.updateChartData();
    }
  }

  initChart() {
    this.chartOptions = {
      chart: { type: 'line', height: 350, sparkline: { enabled: false } },
      dataLabels: { enabled: false },
      colors: ['#8b5050'],
      stroke: { curve: 'smooth', width: 3 },
      series: [{ name: 'Revenu', data: [] }],
      yaxis: { min: 0 },
      xaxis: { categories: [] },
      tooltip: { theme: 'dark', x: { show: true }, marker: { show: false } }
    };
  }

  updateChartData() {
    if (!this.monthlyData || this.monthlyData.length === 0) return;

    let data: number[] = [];
    let labels: string[] = [];

    if (typeof this.monthlyData[0] === 'number') {
      data = this.monthlyData;
      labels = ['Jan','Fev','Mar','Avr','Mai','Jun','Jul','Aou','Sep','Oct','Nov','Dec'];
    } else {
      data = this.monthlyData.map(d => d.amount);
      labels = this.monthlyData.map(d => d.month);
    }

    this.chartOptions.series = [{ name: 'Revenu', data }];
    this.chartOptions.xaxis.categories = labels;
    this.amount = data.reduce((sum, val) => sum + val, 0);

    // met à jour ApexCharts
    setTimeout(() => {
      if (this.chart) this.chart.updateSeries(this.chartOptions.series);
    }, 0);

    this.cd.markForCheck();
  }

  toggleActive(value: 'month' | 'year') {
    this.btnActive = value;
    // recharge les données si nécessaire
    this.loadRevenueByMonth(new Date().getFullYear());
  }

  handleKeyDown(event: KeyboardEvent, value: 'month' | 'year') {
    if (event.key === 'Enter' || event.key === ' ') {
      this.toggleActive(value);
      event.preventDefault();
    }
  }

  loadRevenueByMonth(event: Event | number | string) {
  let year: number;

  if (event instanceof Event) {
    const select = event.target as HTMLSelectElement;
    year = Number(select.value); // 🔹 convertir en number
  } else if (typeof event === 'string') {
    year = Number(event); // 🔹 convertir en number si c'est une string
  } else {
    year = event; // déjà un number
  }

  this.statsService.getRevenueByMonth(year).subscribe({
    next: (res: any) => {
      if (res?.success && res.data) {
        this.revenueByMonth = res.data.map((d: any) => ({
          month: d.month,
          amount: d.total
        }));
        this.monthlyData = this.revenueByMonth;
        this.updateChartData(); // met à jour le chart
        console.log('Assigned revenueByMonth:', this.revenueByMonth);
      }
      this.cd.markForCheck();
    },
    error: (err) => console.error('Revenue By Month Error:', err)
  });
}
}