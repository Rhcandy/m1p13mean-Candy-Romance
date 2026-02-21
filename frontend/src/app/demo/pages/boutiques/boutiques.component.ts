import { Component, OnInit, OnDestroy, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { BoutiqueService, Boutique } from '../../../services/boutique.service';
import { NotificationService } from '../../../services/notification.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-boutiques',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './boutiques.component.html',
  styleUrls: ['./boutiques.component.scss']
})
export class BoutiquesComponent implements OnInit, OnDestroy {
  boutiques: Boutique[] = [];
  loading = false;
  private readonly destroy$ = new Subject<void>();
  private readonly cdr = inject(ChangeDetectorRef);

  constructor(
    private readonly router: Router,
    private readonly boutiqueService: BoutiqueService,
    private readonly notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.loadBoutiques();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadBoutiques(): void {
    this.loading = true;
    
    this.boutiqueService.getAllBoutiques().pipe(takeUntil(this.destroy$)).subscribe({
      next: (boutiques) => {
        this.boutiques = boutiques;
        this.loading = false;
       Promise.resolve().then(() => {
          this.cdr.detectChanges();
        });
      },
      error: (error) => {
        console.error('Erreur chargement boutiques:', error);
        this.notificationService.error('Erreur lors du chargement des boutiques');
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  voirProduitsBoutique(boutique: Boutique): void {
    // Naviguer vers la page produits avec un filtre par boutique
    this.router.navigate(['/produits'], { 
      queryParams: { 
        boutique: boutique._id,
        nomBoutique: boutique.nom 
      } 
    });
  }

  refreshBoutiques(): void {
    this.loadBoutiques();
  }
}
