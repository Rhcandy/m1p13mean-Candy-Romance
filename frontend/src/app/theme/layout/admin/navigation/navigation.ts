import { inject } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { BoutiqueService } from '../../../../services/boutique.service';

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
  const boutiqueService = inject(BoutiqueService);

  const isAdminBoutique = authService.hasRole('admin_boutique');
  const isAdminCenter = authService.isAdminCenterRole();
  const canUseUserFeatures = authService.canUseUserFeatures();

  const boutiqueStatus = boutiqueService.getCachedBoutiqueStatus();

  const hasBoutique = isAdminBoutique && boutiqueStatus.hasBoutique;

  const hasActiveBoutique = isAdminBoutique && boutiqueStatus.hasBoutique && boutiqueStatus.isActive;

  return [
    {
      id: 'BoxesDisponibles',
      title: 'Boxes disponibles',
      type: 'item',
      icon: 'ti ti-home-search',
      classes: 'nav-item',
      url: '/boutique/boxes',
      breadcrumbs: true,
      hidden: !isAdminBoutique || hasBoutique
    },
    {
      id: 'BoutiquePending',
      title: 'Boutique en attente',
      type: 'item',
      icon: 'ti ti-hourglass-high',
      classes: 'nav-item',
      url: '/boutique/informations',
      breadcrumbs: true,
      hidden: !(isAdminBoutique && hasBoutique && !boutiqueStatus.isActive)
    },
    {
      id: 'Ma boutique',
      title: 'Ma boutique',
      type: 'collapse',
      icon: 'icon-navigation',
      hidden: !hasActiveBoutique,
      children: [
        {
          id: 'dashboard-boutique',
          title: 'Dashboard',
          type: 'item',
          classes: 'nav-item',
          url: '/default',
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
          breadcrumbs: true
        },
        {
          id: 'produits-boutique',
          title: 'Produits boutique',
          type: 'item',
          classes: 'nav-item',
          url: '/boutique/produits',
          icon: 'ti ti-package',
          breadcrumbs: true
        },
        {
          id: 'promotions',
          title: 'Promotions',
          type: 'item',
          classes: 'nav-item',
          url: '/boutique/promotions',
          icon: 'ti ti-discount',
          breadcrumbs: true
        },
        {
          id: 'commandes-boutique',
          title: 'Commandes boutique',
          type: 'item',
          classes: 'nav-item',
          url: '/boutique/commandes',
          icon: 'ti ti-receipt',
          breadcrumbs: true
        }
      ]
    },
    {
      id: 'Royal center',
      title: 'Royal center',
      type: 'collapse',
      icon: 'ti ti-building-community',
      hidden: !isAdminCenter,
      children: [
        {
          id: 'dashboard-center',
          title: 'Dashboard',
          type: 'item',
          classes: 'nav-item',
          url: '/default',
          icon: 'ti ti-dashboard',
          breadcrumbs: false
        },
        {
          id: 'royal-loyers',
          title: 'Loyer',
          type: 'item',
          classes: 'nav-item',
          url: '/royal-center/loyers',
          icon: 'ti ti-cash',
          breadcrumbs: true
        },
        {
          id: 'royal-boxes',
          title: 'Box',
          type: 'item',
          classes: 'nav-item',
          url: '/royal-center/boxes',
          icon: 'ti ti-box',
          breadcrumbs: true
        },
        {
          id: 'royal-boutiques',
          title: 'Boutique',
          type: 'item',
          classes: 'nav-item',
          url: '/royal-center/boutiques',
          icon: 'ti ti-building-store',
          breadcrumbs: true
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
      hidden: !canUseUserFeatures
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
    }
  ];
}
