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
  const isBoutiqueAdmin = authService.hasRole('admin_boutique') || authService.hasRole('super_admin');
  
  return [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'group',
      icon: 'icon-navigation',
      hidden: authService.hasRole('user'),
      children: [
        {
          id: 'default',
          title: 'Dashboard',
          type: 'item',
          classes: 'nav-item',
          url: '/default',
          icon: 'ti ti-dashboard',
          breadcrumbs: false
        }
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
      id: 'CommandesBoutique',
      title: 'Commandes boutique',
      type: 'item',
      icon: 'ti ti-list-check',
      classes: 'nav-item',
      url: '/commandes',
      breadcrumbs: true,
      hidden: !isBoutiqueAdmin
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
