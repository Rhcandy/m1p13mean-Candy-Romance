import { inject } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  children?: NavigationItem[];
  role?: string[];
  isMainParent?: boolean;
}

export function getNavigationItems(): NavigationItem[] {
  const authService = inject(AuthService);
  const isUser = authService.hasRole('user');
  const isBoutiqueOwner = !authService.hasRole('user') && !authService.hasRole('admin_center');
  return [
    {
      id: 'Ma boutique',
      title: 'Ma boutique',
      type: 'collapse',
      icon: 'icon-navigation',
      hidden: authService.hasRole('user') || authService.hasRole('admin_center'),
      children: [
        {
          id: 'dashboard-boutique',
          title: 'Dashboard',
          type: 'item',
          classes: 'nav-item',
          url: '/boutique/dashboard',
          icon: 'ti ti-dashboard',
          breadcrumbs: false
        },
        {
          id: 'infoboutique',
          title: 'Informations boutique',
          type: 'item',
          classes: 'nav-item',
          url: '/boutique/informations',
          icon: 'ti ti-info-circle',
          breadcrumbs: false
        },
        {
          id: 'produits-boutique',
          title: 'Produits boutique',
          type: 'item',
          classes: 'nav-item',
          url: '/boutique/produits',
          icon: 'ti ti-package',
          breadcrumbs: false
        },
        {
          id: 'promotions',
          title: 'Promotions',
          type: 'item',
          classes: 'nav-item',
          url: '/boutique/promotions',
          icon: 'ti ti-discount',
          breadcrumbs: false
        },
        {
          id: 'commandes-boutique',
          title: 'Commandes boutique',
          type: 'item',
          classes: 'nav-item',
          url: '/boutique/commandes',
          icon: 'ti ti-receipt',
          breadcrumbs: false
        },
      ]
    },
    {
      id: 'Produits',
      title: 'Produits',
      type: 'item',
      icon: 'ti ti-shopping-cart',
      classes: 'nav-item',
      url: '/produits',
      breadcrumbs: true
    },
    {
      id: 'Boutiques',
      title: 'Boutiques',
      type: 'item',
      icon: 'ti ti-building-store',
      classes: 'nav-item',
      url: '/boutiques',
      breadcrumbs: true
    },
    {
      id: 'CommandesUser',
      title: 'Mes commandes',
      type: 'item',
      icon: 'ti ti-receipt',
      classes: 'nav-item',
      url: '/commandes',
      breadcrumbs: true,
      hidden: !isUser
    },
    {
      id: 'Panier',
      title: 'Panier',
      type: 'item',
      hidden: true,
      icon: 'ti ti-shopping-cart',
      classes: 'nav-item',
      url: '/panier',
      breadcrumbs: true
    },
    
    
    
  ];
}
