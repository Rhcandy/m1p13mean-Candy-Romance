import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { GuestComponent } from './theme/layout/guest/guest.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: '/produits',
        pathMatch: 'full'
      },
      {
        path: 'default',
        loadComponent: () => import('./demo/dashboard/default/default.component').then((c) => c.DefaultComponent)
      },
      {
        path: 'profile',
        loadComponent: () => import('./demo/pages/profile/profile.component').then((c) => c.ProfileComponent)
      },
      {
        path: 'produits',
        loadComponent: () => import('./demo/pages/produits/produits.component').then((c) => c.ProduitsComponent)
      },
      {
        path: 'product/:id',
        loadComponent: () => import('./demo/pages/product-detail/product-detail-page.component').then((c) => c.ProductDetailPageComponent)
      },
      {
        path: 'panier',
        loadComponent: () => import('./demo/pages/panier/panier.component').then((c) => c.PanierComponent)
      }
    ]
  },
  {
    path: '',
    component: GuestComponent,
    children: [
      {
        path: 'login',
        loadComponent: () => import('./demo/pages/authentication/login/login.component').then((c) => c.LoginComponent)
      },
      {
        path: 'register',
        loadComponent: () => import('./demo/pages/authentication/register/register.component').then((c) => c.RegisterComponent)
      },
      {
        path: 'forgot-password',
        loadComponent: () => import('./demo/pages/authentication/forgot-password/forgot-password.component').then((c) => c.ForgotPasswordComponent)
      },
      {
        path: 'reset-password',
        loadComponent: () => import('./demo/pages/authentication/reset-password/reset-password.component').then((c) => c.ResetPasswordComponent)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
