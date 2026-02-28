import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { forkJoin } from 'rxjs';
import {
  AdminCenterBox,
  AdminCenterService,
  BoutiqueModel,
  CoordonneesPolygon,
  CreateBoxPayload,
  TypeBoxModel,
  UpdateBoxPayload
} from '../../../../services/admin-center.service';
import { NotificationService } from '../../../../services/notification.service';

@Component({
  selector: 'app-royal-center-boxes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './royal-center-boxes.component.html',
  styleUrls: ['./royal-center-boxes.component.scss']
})
export class RoyalCenterBoxesComponent implements OnInit {
  private readonly adminCenterService = inject(AdminCenterService);
  private readonly notificationService = inject(NotificationService);
  private readonly cdr = inject(ChangeDetectorRef);

  boxes: AdminCenterBox[] = [];
  boutiques: BoutiqueModel[] = [];
  typeBoxes: TypeBoxModel[] = [];

  loading = false;
  saving = false;
  showModal = false;
  editingBoxId: string | null = null;

  filters = {
    search: '',
    disponibilite: 'all' as 'all' | 'true' | 'false'
  };

  form = this.createEmptyForm();

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.loading = true;

    const isDisponible =
      this.filters.disponibilite === 'all' ? null : this.filters.disponibilite === 'true';

    forkJoin({
      boxes: this.adminCenterService.getBoxes({
        page: 1,
        limit: 200,
        numRefSearch: this.filters.search,
        isDisponible
      }),
      boutiques: this.adminCenterService.getBoutiques({ page: 1, limit: 200, status: 'all' }),
      typeBoxes: this.adminCenterService.getTypeBoxes(200)
    }).subscribe({
      next: ({ boxes, boutiques, typeBoxes }) => {
        this.boxes = boxes.items;
        this.boutiques = boutiques.items;
        this.typeBoxes = typeBoxes;
        this.loading = false;
        Promise.resolve().then(() => {
          this.cdr.detectChanges();
        });
      },
      error: (error) => {
        this.loading = false;
        this.notificationService.error(
          'Erreur',
          error?.error?.message || 'Impossible de charger les boxes.'
        );
        this.cdr.detectChanges();
      }
    });
  }

  applyFilters(): void {
    this.loadData();
  }

  openCreateModal(): void {
    this.editingBoxId = null;
    this.form = this.createEmptyForm();
    this.showModal = true;
  }

  openEditModal(box: AdminCenterBox): void {
    this.editingBoxId = box._id;
    this.form = {
      numRef: box.numRef || '',
      etage: box.etage || '',
      Superficie: Number(box.Superficie || 0),
      typeBoxId: this.extractTypeBoxId(box),
      centreId: this.extractCentreId(box),
      isDisponible: !!box.isDisponible,
      coordonneesText: JSON.stringify(box.coordonnees || this.getDefaultCoordonneesObject(), null, 2)
    };
    this.showModal = true;
  }

  closeModal(): void {
    if (this.saving) return;
    this.showModal = false;
  }

  saveBox(): void {
    if (!this.form.numRef.trim() || !this.form.etage.trim() || !this.form.typeBoxId.trim()) {
      this.notificationService.warning('Validation', 'numRef, etage et type de box sont obligatoires.');
      return;
    }

    if (this.form.Superficie <= 0) {
      this.notificationService.warning('Validation', 'La superficie doit etre superieure a 0.');
      return;
    }

    let coordonnees: CoordonneesPolygon;
    try {
      const parsed = JSON.parse(this.form.coordonneesText) as CoordonneesPolygon;
      if (parsed?.type !== 'Polygon' || !Array.isArray(parsed?.coordinates)) {
        throw new Error('invalid polygon');
      }
      coordonnees = parsed;
    } catch {
      this.notificationService.warning(
        'Validation',
        'Le JSON des coordonnees est invalide. Utilisez un objet Polygon GeoJSON.'
      );
      return;
    }

    this.saving = true;

    if (this.editingBoxId) {
      const payload: UpdateBoxPayload = {
        numRef: this.form.numRef.trim(),
        etage: this.form.etage.trim(),
        Superficie: Number(this.form.Superficie),
        typeBoxId: this.form.typeBoxId,
        isDisponible: this.form.isDisponible,
        coordonnees,
        centreId: this.form.centreId.trim() || undefined
      };

      this.adminCenterService.updateBox(this.editingBoxId, payload).subscribe({
        next: () => {
          this.saving = false;
          this.showModal = false;
          this.notificationService.success('Succes', 'Box mise a jour.');
          this.loadData();
        },
        error: (error) => {
          this.saving = false;
          this.notificationService.error(
            'Erreur',
            error?.error?.message || 'Mise a jour impossible.'
          );
        }
      });
      return;
    }

    const payload: CreateBoxPayload = {
      numRef: this.form.numRef.trim(),
      etage: this.form.etage.trim(),
      Superficie: Number(this.form.Superficie),
      typeBoxId: this.form.typeBoxId,
      isDisponible: this.form.isDisponible,
      coordonnees
    };
    if (this.form.centreId.trim()) {
      payload.centreId = this.form.centreId.trim();
    }

    this.adminCenterService.createBox(payload).subscribe({
      next: () => {
        this.saving = false;
        this.showModal = false;
        this.notificationService.success('Succes', 'Box creee.');
        this.loadData();
      },
      error: (error) => {
        this.saving = false;
        this.notificationService.error(
          'Erreur',
          error?.error?.message || 'Creation impossible.'
        );
      }
    });
  }

  toggleDisponibilite(box: AdminCenterBox): void {
    const payload: UpdateBoxPayload = {
      isDisponible: !box.isDisponible,
      Superficie: Number(box.Superficie),
      etage: box.etage,
      numRef: box.numRef,
      typeBoxId: this.extractTypeBoxId(box),
      centreId: this.extractCentreId(box),
      coordonnees: box.coordonnees
    };

    this.adminCenterService.updateBox(box._id, payload).subscribe({
      next: () => {
        this.notificationService.success('Succes', 'Disponibilite mise a jour.');
        this.loadData();
      },
      error: (error) => {
        this.notificationService.error(
          'Erreur',
          error?.error?.message || 'Operation impossible.'
        );
      }
    });
  }

  deleteBox(box: AdminCenterBox): void {
    if (this.cannotDeleteBox(box)) {
      this.notificationService.warning('Action bloquee', this.getDeleteBlockedReason(box));
      return;
    }

    if (!confirm(`Supprimer la box ${box.numRef} ?`)) return;

    this.adminCenterService.deleteBox(box._id).subscribe({
      next: () => {
        this.notificationService.success('Succes', 'Box supprimee.');
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

  getTypeBoxName(box: AdminCenterBox): string {
    if (typeof box.typeBoxId === 'string') {
      const found = this.typeBoxes.find((item) => item._id === box.typeBoxId);
      return found?.nom || 'Type';
    }
    return box.typeBoxId?.nom || 'Type';
  }

  getCentreName(box: AdminCenterBox): string {
    if (typeof box.centreId === 'string') {
      return box.centreId;
    }
    return box.centreId?.nom || '-';
  }

  getOccupyingBoutique(box: AdminCenterBox): BoutiqueModel | null {
    return (
      this.boutiques.find((boutique) => {
        const ids = this.extractBoxIdsFromBoutique(boutique);
        return ids.includes(box._id);
      }) || null
    );
  }

  cannotDeleteBox(box: AdminCenterBox): boolean {
    const boutique = this.getOccupyingBoutique(box);
    return box.isDisponible === false && !!boutique && !!boutique.isActive;
  }

  getDeleteBlockedReason(box: AdminCenterBox): string {
    const boutique = this.getOccupyingBoutique(box);
    if (box.isDisponible === false && boutique?.isActive) {
      return 'Suppression interdite: box occupee par une boutique active.';
    }
    return '';
  }

  getOccupyingBoutiqueLabel(box: AdminCenterBox): string {
    const boutique = this.getOccupyingBoutique(box);
    if (!boutique) return '-';
    return boutique.isActive ? `${boutique.nom} (active)` : `${boutique.nom} (inactive)`;
  }

  private extractBoxIdsFromBoutique(boutique: BoutiqueModel): string[] {
    const boxes = boutique.contratlocation?.boxes || [];
    return boxes
      .map((box) => (typeof box === 'string' ? box : box?._id || ''))
      .filter((id) => !!id);
  }

  private extractTypeBoxId(box: AdminCenterBox): string {
    return typeof box.typeBoxId === 'string' ? box.typeBoxId : box.typeBoxId?._id || '';
  }

  private extractCentreId(box: AdminCenterBox): string {
    return typeof box.centreId === 'string' ? box.centreId : box.centreId?._id || '';
  }

  private createEmptyForm(): {
    numRef: string;
    etage: string;
    Superficie: number;
    typeBoxId: string;
    centreId: string;
    isDisponible: boolean;
    coordonneesText: string;
  } {
    return {
      numRef: '',
      etage: '',
      Superficie: 1,
      typeBoxId: '',
      centreId: '',
      isDisponible: true,
      coordonneesText: JSON.stringify(this.getDefaultCoordonneesObject(), null, 2)
    };
  }

  private getDefaultCoordonneesObject(): CoordonneesPolygon {
    return {
      type: 'Polygon',
      coordinates: [
        [
          [47.5, -18.9],
          [47.5002, -18.9],
          [47.5002, -18.9002],
          [47.5, -18.9002],
          [47.5, -18.9]
        ]
      ]
    };
  }
}
