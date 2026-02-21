import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { GuestComponent } from './theme/layout/guest/guest.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: GuestComponent,
    children: [
      {
        path: '',
        redirectTo: '/landing',
        pathMatch: 'full'
      },
      {
        path: 'landing',
        loadComponent: () => import('./demo/pages/landing/landing.component').then((c) => c.LandingComponent)
      },
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
  },
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
        path: 'boutiques',
        loadComponent: () => import('./demo/pages/boutiques/boutiques.component').then((c) => c.BoutiquesComponent)
      },
      {
        path: 'product/:id',
        loadComponent: () => import('./demo/pages/product-detail/product-detail-page.component').then((c) => c.ProductDetailPageComponent)
      },
      {
        path: 'panier',
        loadComponent: () => import('./demo/pages/panier/panier.component').then((c) => c.PanierComponent)
      },
      {
        path: 'checkout',
        loadComponent: () => import('./demo/pages/checkout/checkout.component').then((c) => c.CheckoutComponent)
      },
      {
        path: 'confirmation-commande',
        loadComponent: () => import('./demo/pages/confirmation-commande/confirmation-commande.component').then((c) => c.ConfirmationCommandeComponent)
      },
      {
        path: 'mes-commandes',
        loadComponent: () => import('./demo/pages/mes-commandes/mes-commandes.component').then((c) => c.MesCommandesComponent)
      },
      {
        path: 'commandes',
        loadComponent: () => import('./demo/pages/mes-commandes/mes-commandes.component').then((c) => c.MesCommandesComponent)
      },
      {
        path: 'commande/:id',
        loadComponent: () => import('./demo/pages/commande-detail/commande-detail.component').then((c) => c.CommandeDetailComponent)
      },
      {
        path: 'boutique',
        children: [
          {
            path: 'dashboard',
            loadComponent: () => import('./demo/pages/boutique/dashboard/boutique-dashboard.component').then((c) => c.BoutiqueDashboardComponent)
          },
          {
            path: 'informtions',
            loadComponent: () => import('./demo/pages/boutique/informations/boutique-informations.component').then((c) => c.BoutiqueInformationsComponent)
          },
          {
            path: 'produits',
            loadComponent: () => import('./demo/pages/boutique/produits/boutique-produits.component').then((c) => c.BoutiqueProduitsComponent)
          },
          {
            path: 'promotions',
            loadComponent: () => import('./demo/pages/boutique/promotions/boutique-promotions.component').then((c) => c.BoutiquePromotionsComponent)
          },
          {
            path: 'commandes',
            loadComponent: () => import('./demo/pages/boutique/commandes/boutique-commandes.component').then((c) => c.BoutiqueCommandesComponent)
          }
        ]
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
