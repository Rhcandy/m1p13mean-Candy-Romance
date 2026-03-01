import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import {
  AdminCenterService,
  CreateHistoPrixPayload,
  CreateTypeBoxPayload,
  HistoPrixModel,
  TypeBoxModel
} from '../../../../services/admin-center.service';
import { NotificationService } from '../../../../services/notification.service';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-royal-center-pricing',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './royal-center-pricing.component.html',
  styleUrls: ['./royal-center-pricing.component.scss']
})
export class RoyalCenterPricingComponent implements OnInit {
  private readonly adminCenterService = inject(AdminCenterService);
  private readonly notificationService = inject(NotificationService);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly cdr = inject(ChangeDetectorRef);

  typeBoxes: TypeBoxModel[] = [];
  histories: HistoPrixModel[] = [];

  loading = false;
  savingType = false;
  savingHistory = false;

  selectedTypeFilter = 'all';

  editingTypeId: string | null = null;
  editingHistoryId: string | null = null;

  typeForm = this.createEmptyTypeForm();
  historyForm = this.createEmptyHistoryForm();

  ngOnInit(): void {
    if (!this.authService.isAdminCenterRole()) {
      this.router.navigate(['/default']);
      return;
    }

    this.loadData();
  }

  get filteredHistories(): HistoPrixModel[] {
    const list =
      this.selectedTypeFilter === 'all'
        ? this.histories
        : this.histories.filter((item) => this.getTypeBoxId(item.typeboxId) === this.selectedTypeFilter);

    return [...list].sort((a, b) => {
      const dateA = new Date(a.createdAt || 0).getTime();
      const dateB = new Date(b.createdAt || 0).getTime();
      return dateB - dateA;
    });
  }

  loadData(): void {
    this.loading = true;

    forkJoin({
      typeBoxes: this.adminCenterService.getTypeBoxes(400),
      histories: this.adminCenterService.getHistoPrix()
    }).subscribe({
      next: ({ typeBoxes, histories }) => {
        this.typeBoxes = [...typeBoxes].sort((a, b) => a.nom.localeCompare(b.nom));
        this.histories = Array.isArray(histories) ? histories : [];

        if (!this.historyForm.typeboxId && this.typeBoxes.length > 0) {
          this.historyForm.typeboxId = this.typeBoxes[0]._id;
        }

        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        this.loading = false;
        this.notificationService.error(
          'Erreur',
          error?.error?.message || 'Impossible de charger les types de box et historiques de prix.'
        );
        this.cdr.detectChanges();
      }
    });
  }

  openCreateType(): void {
    this.editingTypeId = null;
    this.typeForm = this.createEmptyTypeForm();
  }

  openEditType(typeBox: TypeBoxModel): void {
    this.editingTypeId = typeBox._id;
    this.typeForm = {
      nom: typeBox.nom,
      minOccupationDays: Number(typeBox.minOccupationDays || typeBox.periode || 1),
      remuneration: Number(typeBox.remuneration || 0),
      description: typeBox.description || ''
    };
  }

  saveType(): void {
    if (!this.typeForm.nom.trim()) {
      this.notificationService.warning('Validation', 'Le nom du type de box est obligatoire.');
      return;
    }

    const minDays = Number(this.typeForm.minOccupationDays || 0);
    if (minDays <= 0) {
      this.notificationService.warning('Validation', 'Le minimum de jours doit etre superieur a 0.');
      return;
    }

    const remuneration = Number(this.typeForm.remuneration || 0);
    if (remuneration < 0) {
      this.notificationService.warning('Validation', 'La remuneration ne peut pas etre negative.');
      return;
    }

    this.savingType = true;

    const payload: CreateTypeBoxPayload = {
      nom: this.typeForm.nom.trim(),
      minOccupationDays: minDays,
      remuneration,
      description: this.typeForm.description.trim() || null
    };

    const request$ = this.editingTypeId
      ? this.adminCenterService.updateTypeBox(this.editingTypeId, payload)
      : this.adminCenterService.createTypeBox(payload);

    request$.subscribe({
      next: () => {
        this.savingType = false;
        this.notificationService.success('Succes', this.editingTypeId ? 'Type de box mis a jour.' : 'Type de box cree.');
        this.openCreateType();
        this.loadData();
      },
      error: (error) => {
        this.savingType = false;
        this.notificationService.error('Erreur', error?.error?.message || 'Operation impossible.');
        this.cdr.detectChanges();
      }
    });
  }

  async deleteType(typeBox: TypeBoxModel): Promise<void> {
    const confirmed = await this.notificationService.confirm({
      title: 'Suppression type box',
      message: `Supprimer le type de box "${typeBox.nom}" ?`,
      confirmLabel: 'Supprimer',
      cancelLabel: 'Annuler',
      confirmStyle: 'danger'
    });
    if (!confirmed) return;

    this.adminCenterService.deleteTypeBox(typeBox._id).subscribe({
      next: () => {
        this.notificationService.success('Succes', 'Type de box supprime.');
        this.loadData();
      },
      error: (error) => {
        this.notificationService.error('Erreur', error?.error?.message || 'Suppression impossible.');
      }
    });
  }

  openCreateHistory(): void {
    this.editingHistoryId = null;
    this.historyForm = this.createEmptyHistoryForm();
    if (this.typeBoxes.length) {
      this.historyForm.typeboxId = this.typeBoxes[0]._id;
    }
  }

  openEditHistory(history: HistoPrixModel): void {
    this.editingHistoryId = history._id;
    this.historyForm = {
      typeboxId: this.getTypeBoxId(history.typeboxId),
      prixParM2: Number(history.prixParM2 || 0)
    };
  }

  saveHistory(): void {
    if (!this.historyForm.typeboxId) {
      this.notificationService.warning('Validation', 'Le type de box est obligatoire.');
      return;
    }

    const prixParM2 = Number(this.historyForm.prixParM2 || 0);
    if (prixParM2 <= 0) {
      this.notificationService.warning('Validation', 'Le prix au m2 doit etre superieur a 0.');
      return;
    }

    this.savingHistory = true;

    const payload: CreateHistoPrixPayload = {
      typeboxId: this.historyForm.typeboxId,
      prixParM2
    };

    const request$ = this.editingHistoryId
      ? this.adminCenterService.updateHistoPrix(this.editingHistoryId, payload)
      : this.adminCenterService.createHistoPrix(payload);

    request$.subscribe({
      next: () => {
        this.savingHistory = false;
        this.notificationService.success('Succes', this.editingHistoryId ? 'Historique mis a jour.' : 'Historique cree.');
        this.openCreateHistory();
        this.loadData();
      },
      error: (error) => {
        this.savingHistory = false;
        this.notificationService.error('Erreur', error?.error?.message || 'Operation impossible.');
        this.cdr.detectChanges();
      }
    });
  }

  async deleteHistory(history: HistoPrixModel): Promise<void> {
    const confirmed = await this.notificationService.confirm({
      title: 'Suppression historique',
      message: 'Supprimer cet historique de prix ?',
      confirmLabel: 'Supprimer',
      cancelLabel: 'Annuler',
      confirmStyle: 'danger'
    });
    if (!confirmed) return;

    this.adminCenterService.deleteHistoPrix(history._id).subscribe({
      next: () => {
        this.notificationService.success('Succes', 'Historique supprime.');
        this.loadData();
      },
      error: (error) => {
        this.notificationService.error('Erreur', error?.error?.message || 'Suppression impossible.');
      }
    });
  }

  getTypeLabel(typeboxId: string | TypeBoxModel): string {
    const id = this.getTypeBoxId(typeboxId);
    const byLocalList = this.typeBoxes.find((item) => item._id === id);
    if (byLocalList) return byLocalList.nom;

    if (typeof typeboxId !== 'string') {
      return typeboxId?.nom || 'Type inconnu';
    }

    return 'Type inconnu';
  }

  getTypeMinDays(typeboxId: string | TypeBoxModel): number {
    const id = this.getTypeBoxId(typeboxId);
    const byLocalList = this.typeBoxes.find((item) => item._id === id);
    if (byLocalList) {
      return Number(byLocalList.minOccupationDays || byLocalList.periode || 1);
    }

    if (typeof typeboxId !== 'string') {
      return Number(typeboxId?.minOccupationDays || typeboxId?.periode || 1);
    }

    return 1;
  }

  private createEmptyTypeForm(): {
    nom: string;
    minOccupationDays: number;
    remuneration: number;
    description: string;
  } {
    return {
      nom: '',
      minOccupationDays: 7,
      remuneration: 0,
      description: ''
    };
  }

  private createEmptyHistoryForm(): {
    typeboxId: string;
    prixParM2: number;
  } {
    return {
      typeboxId: '',
      prixParM2: 0
    };
  }

  private getTypeBoxId(typeboxId: string | TypeBoxModel): string {
    if (typeof typeboxId === 'string') return typeboxId;
    return typeboxId?._id || '';
  }
}
