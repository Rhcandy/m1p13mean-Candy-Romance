import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminCenterService, BoutiqueModel } from '../../../../services/admin-center.service';
import { NotificationService } from '../../../../services/notification.service';

@Component({
  selector: 'app-royal-center-boutiques',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './royal-center-boutiques.component.html',
  styleUrls: ['./royal-center-boutiques.component.scss']
})
export class RoyalCenterBoutiquesComponent implements OnInit {
  private readonly adminCenterService = inject(AdminCenterService);
  private readonly notificationService = inject(NotificationService);
  private readonly cdr = inject(ChangeDetectorRef);

  boutiques: BoutiqueModel[] = [];
  loading = false;
  busyIds = new Set<string>();

  filters = {
    search: '',
    status: 'all' as 'all' | 'active' | 'inactive' | 'pending'
  };

  ngOnInit(): void {
    this.loadBoutiques();
  }

  loadBoutiques(): void {
    this.loading = true;

    this.adminCenterService
      .getBoutiques({
        page: 1,
        limit: 200,
        status: this.filters.status,
        nameSearch: this.filters.search
      })
      .subscribe({
        next: (response) => {
          this.boutiques = response.items;
          this.loading = false;
          Promise.resolve().then(() => {
            this.cdr.detectChanges();
          });
        },
        error: (error) => {
          this.loading = false;
          this.notificationService.error(
            'Erreur',
            error?.error?.message || 'Impossible de charger les boutiques.'
          );
           this.cdr.detectChanges();
        }
      });
  }

  applyFilters(): void {
    this.loadBoutiques();
  }

  confirmBoutiqueCreation(boutique: BoutiqueModel): void {
    if (!boutique.isPendingFirstActivation) return;
    if (!confirm(`Confirmer la creation de la boutique "${boutique.nom}" ?`)) return;

    this.busyIds.add(boutique._id);
    this.adminCenterService.activateBoutique(boutique._id).subscribe({
      next: () => {
        this.busyIds.delete(boutique._id);
        this.notificationService.success('Succes', 'Demande de creation confirmee.');
        this.loadBoutiques();
      },
      error: (error) => {
        this.busyIds.delete(boutique._id);
        this.notificationService.error(
          'Erreur',
          error?.error?.message || 'Confirmation impossible.'
        );
      }
    });
  }

  deleteBoutique(boutique: BoutiqueModel): void {
    if (!confirm(`Supprimer la boutique "${boutique.nom}" ?`)) return;

    this.busyIds.add(boutique._id);
    this.adminCenterService.deleteBoutique(boutique._id).subscribe({
      next: () => {
        this.busyIds.delete(boutique._id);
        this.notificationService.success('Succes', 'Boutique supprimee.');
        this.loadBoutiques();
      },
      error: (error) => {
        this.busyIds.delete(boutique._id);
        this.notificationService.error(
          'Erreur',
          error?.error?.message || 'Suppression impossible.'
        );
      }
    });
  }

  isBusy(boutique: BoutiqueModel): boolean {
    return this.busyIds.has(boutique._id);
  }

  getStatusLabel(boutique: BoutiqueModel): string {
    if (boutique.isPendingFirstActivation) return 'En attente';
    return boutique.isActive ? 'Active' : 'Inactive';
  }

  getStatusClass(boutique: BoutiqueModel): string {
    if (boutique.isPendingFirstActivation) return 'bg-warning text-dark';
    return boutique.isActive ? 'bg-success' : 'bg-secondary';
  }

  getOwnerLabel(boutique: BoutiqueModel): string {
    const owner = boutique.locataire?.[0];
    if (!owner) return '-';
    if (owner.nom && owner.email) return `${owner.nom} (${owner.email})`;
    return owner.nom || owner.email || '-';
  }

  getBoxCount(boutique: BoutiqueModel): number {
    return boutique.contratlocation?.boxes?.length || 0;
  }
}
