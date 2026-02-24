import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { forkJoin } from 'rxjs';
import {
  AdminCenterService,
  BoutiqueModel,
  LoyerDetail,
  LoyerModel,
  UpsertLoyerPayload
} from '../../../../services/admin-center.service';
import { NotificationService } from '../../../../services/notification.service';

@Component({
  selector: 'app-royal-center-loyers',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './royal-center-loyers.component.html',
  styleUrls: ['./royal-center-loyers.component.scss']
})
export class RoyalCenterLoyersComponent implements OnInit {
  private readonly adminCenterService = inject(AdminCenterService);
  private readonly notificationService = inject(NotificationService);

  loyers: LoyerModel[] = [];
  boutiques: BoutiqueModel[] = [];
  loading = false;
  saving = false;

  showModal = false;
  editingLoyerId: string | null = null;

  form = {
    boutiqueId: '',
    details: [this.createEmptyDetail()]
  };

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.loading = true;

    forkJoin({
      loyers: this.adminCenterService.getLoyers({ page: 1, limit: 200 }),
      boutiques: this.adminCenterService.getBoutiques({ page: 1, limit: 200, status: 'all' })
    }).subscribe({
      next: ({ loyers, boutiques }) => {
        this.loyers = loyers.items;
        this.boutiques = boutiques.items;
        this.loading = false;
      },
      error: (error) => {
        this.loading = false;
        this.notificationService.error(
          'Erreur',
          error?.error?.message || 'Impossible de charger les loyers.'
        );
      }
    });
  }

  openCreateModal(): void {
    this.editingLoyerId = null;
    this.form = {
      boutiqueId: '',
      details: [this.createEmptyDetail()]
    };
    this.showModal = true;
  }

  openEditModal(loyer: LoyerModel): void {
    this.editingLoyerId = loyer._id;
    this.form = {
      boutiqueId: this.extractBoutiqueId(loyer),
      details: (loyer.details || []).length
        ? loyer.details.map((detail) => ({
            title: detail.title || '',
            libelle: detail.libelle || '',
            montantPaye: Number(detail.montantPaye || 0),
            restePaye: Number(detail.restePaye || 0)
          }))
        : [this.createEmptyDetail()]
    };
    this.showModal = true;
  }

  closeModal(): void {
    if (this.saving) return;
    this.showModal = false;
  }

  addDetail(): void {
    this.form.details.push(this.createEmptyDetail());
  }

  removeDetail(index: number): void {
    if (this.form.details.length <= 1) return;
    this.form.details.splice(index, 1);
  }

  saveLoyer(): void {
    const boutiqueId = this.form.boutiqueId?.trim();
    if (!boutiqueId) {
      this.notificationService.warning('Validation', 'Veuillez selectionner une boutique.');
      return;
    }

    const validDetails = this.form.details
      .map((detail) => ({
        title: detail.title?.trim() || '',
        libelle: detail.libelle?.trim() || '',
        montantPaye: Number(detail.montantPaye || 0),
        restePaye: Number(detail.restePaye || 0)
      }))
      .filter((detail) => detail.title.length > 0);

    if (validDetails.length === 0) {
      this.notificationService.warning('Validation', 'Ajoutez au moins une ligne de detail.');
      return;
    }

    const payload: UpsertLoyerPayload = {
      boutiqueId,
      details: validDetails as LoyerDetail[]
    };

    this.saving = true;

    const request$ = this.editingLoyerId
      ? this.adminCenterService.updateLoyer(this.editingLoyerId, payload)
      : this.adminCenterService.createLoyer(payload);

    request$.subscribe({
      next: () => {
        this.saving = false;
        this.showModal = false;
        this.notificationService.success(
          'Succes',
          this.editingLoyerId ? 'Loyer mis a jour.' : 'Loyer cree.'
        );
        this.loadData();
      },
      error: (error) => {
        this.saving = false;
        this.notificationService.error(
          'Erreur',
          error?.error?.message || 'Operation impossible.'
        );
      }
    });
  }

  deleteLoyer(loyer: LoyerModel): void {
    if (!confirm('Supprimer ce loyer ?')) return;

    this.adminCenterService.deleteLoyer(loyer._id).subscribe({
      next: () => {
        this.notificationService.success('Succes', 'Loyer supprime.');
        this.loadData();
      },
      error: (error) => {
        this.notificationService.error(
          'Erreur',
          error?.error?.message || 'Suppression impossible.'
        );
      }
    });
  }

  getBoutiqueNameFromLoyer(loyer: LoyerModel): string {
    const boutiqueId = this.extractBoutiqueId(loyer);
    return this.getBoutiqueNameById(boutiqueId);
  }

  getBoutiqueNameById(id: string): string {
    const boutique = this.boutiques.find((item) => item._id === id);
    return boutique?.nom || 'Boutique';
  }

  getTotalMontantPaye(loyer: LoyerModel): number {
    return (loyer.details || []).reduce((sum, detail) => sum + Number(detail.montantPaye || 0), 0);
  }

  getTotalRestePaye(loyer: LoyerModel): number {
    return (loyer.details || []).reduce((sum, detail) => sum + Number(detail.restePaye || 0), 0);
  }

  private extractBoutiqueId(loyer: LoyerModel): string {
    return typeof loyer.boutiqueId === 'string' ? loyer.boutiqueId : loyer.boutiqueId?._id || '';
  }

  private createEmptyDetail(): LoyerDetail {
    return {
      title: '',
      libelle: '',
      montantPaye: 0,
      restePaye: 0
    };
  }
}
