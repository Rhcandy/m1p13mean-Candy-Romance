import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  AdminCenterService,
  BoutiqueLoyerSummary,
  LoyerModel,
  LoyerSummaryItem
} from '../../../../services/admin-center.service';
import { NotificationService } from '../../../../services/notification.service';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-royal-center-loyers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './royal-center-loyers.component.html',
  styleUrls: ['./royal-center-loyers.component.scss']
})
export class RoyalCenterLoyersComponent implements OnInit {
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly adminCenterService = inject(AdminCenterService);
  private readonly notificationService = inject(NotificationService);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  readonly statusOrder: Array<'IMPAYE' | 'PARTIEL' | 'RETARD' | 'PAYE'> = ['IMPAYE', 'PARTIEL', 'RETARD', 'PAYE'];
  readonly loyerBlockThreshold = 1_000_000;

  summaries: LoyerSummaryItem[] = [];
  selectedBoutiqueId: string | null = null;
  selectedSummary: LoyerSummaryItem | null = null;
  boutiqueDetail: BoutiqueLoyerSummary | null = null;

  loadingSummaries = false;
  loadingDetail = false;
  generating = false;
  updatingStatusIds = new Set<string>();

  constructor() {}

  ngOnInit(): void {
    if (!this.authService.isAdminCenterRole()) {
      this.router.navigate(['/default']);
      return;
    }
    this.loadSummaries(true);
  }

  loadSummaries(autoSelect = true): void {
    this.loadingSummaries = true;

    this.adminCenterService.getLoyerSummaries().subscribe({
      next: (items) => {
        this.summaries = Array.isArray(items) ? items : [];
        this.loadingSummaries = false;

        if (!this.summaries.length) {
          this.selectedBoutiqueId = null;
          this.selectedSummary = null;
          this.boutiqueDetail = null;
          this.cdr.detectChanges();
          return;
        }

        const selectedFromList = this.selectedBoutiqueId
          ? this.summaries.find((item) => item.boutiqueId === this.selectedBoutiqueId) || null
          : null;

        if (selectedFromList) {
          this.selectedSummary = selectedFromList;
          if (autoSelect) {
            this.loadDetail(selectedFromList.boutiqueId);
          }
        } else if (autoSelect) {
          this.selectBoutique(this.summaries[0]);
        }

        this.cdr.detectChanges();
      },
      error: (error) => {
        this.loadingSummaries = false;
        this.notificationService.error('Erreur', error?.error?.message || 'Impossible de charger les loyers.');
        this.cdr.detectChanges();
      }
    });
  }

  selectBoutique(summary: LoyerSummaryItem): void {
    this.selectedBoutiqueId = summary.boutiqueId;
    this.selectedSummary = summary;
    this.loadDetail(summary.boutiqueId);
  }

  loadDetail(boutiqueId: string): void {
    this.loadingDetail = true;
    this.adminCenterService.getBoutiqueLoyerSummary(boutiqueId).subscribe({
      next: (data) => {
        this.boutiqueDetail = data || null;
        this.loadingDetail = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        this.loadingDetail = false;
        this.notificationService.error('Erreur', error?.error?.message || 'Impossible de charger le detail.');
        this.cdr.detectChanges();
      }
    });
  }

  refreshCurrent(): void {
    this.loadSummaries(false);
    if (this.selectedBoutiqueId) {
      this.loadDetail(this.selectedBoutiqueId);
    }
  }

  runMonthlyGeneration(): void {
    if (this.generating) return;
    this.generating = true;

    this.adminCenterService.runMonthlyLoyerGeneration().subscribe({
      next: () => {
        this.generating = false;
        this.notificationService.success('Generation executee', 'Les loyers mensuels ont ete recalcules.');
        this.refreshCurrent();
      },
      error: (error) => {
        this.generating = false;
        this.notificationService.error('Erreur', error?.error?.message || 'Generation impossible.');
        this.cdr.detectChanges();
      }
    });
  }

  updateStatus(loyer: LoyerModel, statut: 'IMPAYE' | 'PARTIEL' | 'PAYE' | 'RETARD'): void {
    if (!loyer?._id) return;
    if ((loyer.statut || '').toUpperCase() === statut) return;

    this.updatingStatusIds.add(loyer._id);

    this.adminCenterService.updateLoyerStatus(loyer._id, statut).subscribe({
      next: () => {
        this.updatingStatusIds.delete(loyer._id);
        this.notificationService.success('Statut mis a jour');
        this.refreshCurrent();
      },
      error: (error) => {
        this.updatingStatusIds.delete(loyer._id);
        this.notificationService.error('Erreur', error?.error?.message || 'Modification du statut impossible.');
        this.cdr.detectChanges();
      }
    });
  }

  isUpdatingStatus(loyerId: string): boolean {
    return this.updatingStatusIds.has(loyerId);
  }

  getTotalPaye(loyer: LoyerModel): number {
    return (loyer?.paiements || []).reduce((sum, paiement) => sum + (Number(paiement?.montant) || 0), 0);
  }

  getGlobalTotal(): number {
    return this.summaries.reduce((sum, item) => sum + (Number(item.total) || 0), 0);
  }

  getGlobalTotalPaye(): number {
    return this.summaries.reduce((sum, item) => sum + (Number(item.totalPaye) || 0), 0);
  }

  getGlobalTotalReste(): number {
    return this.summaries.reduce((sum, item) => sum + (Number(item.totalReste) || 0), 0);
  }

  getStatusLabel(statut?: string): string {
    const normalized = String(statut || '').toUpperCase();

    if (normalized === 'PAYE') return 'Paye';
    if (normalized === 'PARTIEL') return 'Partiel';
    if (normalized === 'RETARD') return 'Retard';
    if (normalized === 'IMPAYE') return 'Impaye';
    return normalized || 'Inconnu';
  }

  getStatusClass(statut?: string): string {
    const normalized = String(statut || '').toUpperCase();

    if (normalized === 'PAYE') return 'status-paye';
    if (normalized === 'PARTIEL') return 'status-partiel';
    if (normalized === 'RETARD') return 'status-retard';
    if (normalized === 'IMPAYE') return 'status-impaye';
    return 'status-default';
  }

  isSelected(summary: LoyerSummaryItem): boolean {
    return summary?.boutiqueId === this.selectedBoutiqueId;
  }

  getReferenceLabel(reference?: string | null): string {
    return reference?.trim() || 'Sans reference';
  }
}
