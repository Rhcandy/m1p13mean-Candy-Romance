import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class AdminDashboardComponent {
  stats = {
    totalUsers: 1234,
    totalShops: 156,
    totalProducts: 2890,
    totalOrders: 4567,
    revenue: 125678
  };

  recentOrders = [
    { id: 1, customer: 'Jean Dupont', shop: 'La Bonbonnière', amount: 45.99, status: 'completed' },
    { id: 2, customer: 'Marie Martin', shop: 'Sucrerie d\'Alsace', amount: 23.50, status: 'pending' },
    { id: 3, customer: 'Pierre Durand', shop: 'Chocolatier Royal', amount: 67.25, status: 'processing' }
  ];

  topShops = [
    { name: 'La Bonbonnière Parisienne', orders: 234, revenue: 5678 },
    { name: 'Sucrerie d\'Alsace', orders: 189, revenue: 4321 },
    { name: 'Chocolatier Royal', orders: 156, revenue: 3890 }
  ];
}
