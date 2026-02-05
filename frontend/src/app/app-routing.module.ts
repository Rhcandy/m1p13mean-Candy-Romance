import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/auth.guard';
import { ShopOwnerGuard } from './guards/auth.guard';

// Import components (these will need to be created as standalone components)
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/auth/login.component';
import { RegisterComponent } from './pages/auth/register.component';
import { AdminDashboardComponent } from './pages/admin/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  
  // Admin routes
  { 
    path: 'admin', 
    canActivate: [AdminGuard],
    children: [
      { path: 'dashboard', component: AdminDashboardComponent },
      
    ]
  },
  
  // Shop owner routes
  { 
    path: 'shop', 
    canActivate: [ShopOwnerGuard],
    children: [
      
    ]
  },
  
  // Buyer routes
  { 
    path: 'buyer', 
    canActivate: [AuthGuard],
    children: [

    ]
  },
  
  // Public routes
  
  // Unauthorized page
 
  // Wildcard route
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
