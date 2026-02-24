import { ChangeDetectorRef, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PanierService, Panier } from '../../../services/panier.service';
import { BoutiqueCommandeService } from '../../../services/boutique-commande.service';
import { NotificationService } from '../../../services/notification.service';
import { AuthService } from '../../../services/auth.service';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-commande-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './commande-detail.component.html',
  styleUrls: ['./commande-detail.component.scss']
})
export class CommandeDetailComponent implements OnInit, OnDestroy {
  commande: Panier | null = null;
  loading = false;
  isAdminBoutique = false;
  isBoutiqueScope = false;
  private readonly destroy$ = new Subject<void>();
  private readonly cdr = inject(ChangeDetectorRef);

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly panierService: PanierService,
    private readonly boutiqueCommandeService: BoutiqueCommandeService,
    private readonly notificationService: NotificationService,
    private readonly authService: AuthService
  ) {}

  ngOnInit(): void {
    this.isAdminBoutique = this.authService.currentUser?.role === 'admin_boutique';
    this.route.params.pipe(takeUntil(this.destroy$)).subscribe((params) => {
      const id = params['id'];
      if (!id) {
        this.router.navigate(['/commandes']);
        return;
      }
      this.isBoutiqueScope = this.route.snapshot.queryParamMap.get('scope') === 'boutique';
      this.loadCommande(id);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadCommande(id: string): void {
    this.loading = true;

    const source$: Observable<{ data: any }> = this.isBoutiqueScope
      ? this.boutiqueCommandeService.getMyBoutiqueCommandeById(id)
      : this.panierService.getCommandeById(id);

    source$.pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        this.commande = response.data as Panier;
        this.loading = false;
        Promise.resolve().then(() => {
          this.cdr.detectChanges();
        });
      },
      error: (error) => {
        console.error('Erreur chargement commande:', error);
        this.notificationService.error('Erreur lors du chargement de la commande');
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  getCommandeProduits(commande: any): any[] {
    if (this.isAdminBoutique && Array.isArray(commande.produitsBoutique)) {
      return commande.produitsBoutique;
    }
    if (this.isAdminBoutique && Array.isArray(commande.produitsachete)) {
      return commande.produitsachete;
    }
    return commande.produitsachete || [];
  }

  getCommandeSousTotal(commande: any): number {
    if (this.isAdminBoutique && typeof commande.sousTotalBoutique === 'number') {
      return commande.sousTotalBoutique;
    }
    if (this.isAdminBoutique && typeof commande.totalBoutique === 'number') {
      return commande.totalBoutique;
    }
    return commande.sousTotal || 0;
  }

  getCommandeTotal(commande: any): number {
    if (this.isAdminBoutique && typeof commande.totalBoutique === 'number') {
      return commande.totalBoutique + this.getFraisLivraison(commande);
    }
    return commande.total || 0;
  }

  getFraisLivraison(commande: any): number {
    const rawFrais = Number(commande.fraisLivraison);
    if (Number.isFinite(rawFrais) && rawFrais >= 0) return rawFrais;

    const total = Number(commande.total);
    const sousTotal = Number(commande.sousTotal);
    const fallback = total - sousTotal;
    return Number.isFinite(fallback) && fallback > 0 ? fallback : 0;
  }

  formatPrice(price: number): string {
    return this.panierService.formatMontant(price);
  }

  getStatutClass(statut: string): string {
    switch (statut) {
      case 'confirmee':
        return 'status-confirmed';
      case 'preparation':
        return 'status-preparation';
      case 'expedie':
        return 'status-shipped';
      case 'livre':
        return 'status-delivered';
      case 'annule':
        return 'status-cancelled';
      default:
        return 'status-pending';
    }
  }

  getStatutIcon(statut: string): string {
    switch (statut) {
      case 'confirmee':
        return 'ti ti-check';
      case 'preparation':
        return 'ti ti-package';
      case 'expedie':
        return 'ti ti-truck-delivery';
      case 'livre':
        return 'ti ti-home-check';
      case 'annule':
        return 'ti ti-x';
      default:
        return 'ti ti-clock';
    }
  }

  getStatutLabel(statut: string): string {
    return this.panierService.getStatutLibelle(statut);
  }

  goBack(): void {
    if (this.isBoutiqueScope || this.isAdminBoutique) {
      this.router.navigate(['/boutique/commandes']);
      return;
    }

    this.router.navigate(['/commandes']);
  }
}
