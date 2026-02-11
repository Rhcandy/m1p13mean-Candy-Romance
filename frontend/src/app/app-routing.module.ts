import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { GuestComponent } from './theme/layout/guest/guest.component';
import { AuthGuard } from './guards/auth.guard';

// Components
import { HomeComponent } from './components/features/home/home.component';
import { ProductDetailComponent } from './components/features/product-detail/product-detail.component';
import { CartSidebarComponent } from './components/features/cart-sidebar/cart-sidebar.component';

const routes: Routes = [
  {
    path: '',
    component: GuestComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'produit/:id',
        component: ProductDetailComponent
      },
      {
        path: 'login',
        loadComponent: () => import('./demo/pages/authentication/login/login.component').then((c) => c.LoginComponent)
      },
      {
        path: 'register',
        loadComponent: () => import('./demo/pages/authentication/register/register.component').then((c) => c.RegisterComponent)
      }
    ]
  },
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./demo/dashboard/default/default.component').then((c) => c.DefaultComponent),
        canActivate: [() => {
          const userRole = localStorage.getItem('userRole');
          if (userRole === 'user') {
            return false; // Les utilisateurs n'ont pas accès au dashboard
          }
          return true; // Admin et manager ont accès
        }]
      },
      {
        path: 'profile',
        loadComponent: () => import('./demo/pages/profile/profile.component').then((c) => c.ProfileComponent)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
