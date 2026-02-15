import { CommonModule } from "@angular/common";
import { ChangeDetectorRef, Component, inject, OnInit } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ProductService, Product } from "../../../services/product.service";
import { ProductDisplayComponent } from "../../../components/product/product-display.component";

interface Pagination {
  totalDocs: number;
  totalPages: number;
  page: number;
  limit: number;
}

@Component({
  selector: 'app-produits',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, ProductDisplayComponent],
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.scss']
})
export class ProduitsComponent implements OnInit {
  private readonly productService = inject(ProductService);
   private readonly cdr = inject(ChangeDetectorRef);
  
  produits: Product[] = [];
  pagination: Pagination | null = null;
  currentPage = 1;
  pageSize = 5;

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    const params = {
      page: this.currentPage,
      limit: this.pageSize
    };
    
    this.productService.getAllProducts(params).subscribe({
      next: (result) => {
        this.produits = result.items;
        this.pagination = result.pagination;
         this.cdr.detectChanges();
        
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des produits:', error);
         this.cdr.detectChanges();
      }
    });
  }

  changePage(page: number): void {
    if (page >= 1 && this.pagination && page <= this.pagination.totalPages) {
      this.currentPage = page;
      this.loadProducts();
    }
  }

  getPagesArray(): number[] {
    if (!this.pagination) return [];
    
    const pages: number[] = [];
    const start = Math.max(1, this.pagination.page - 2);
    const end = Math.min(this.pagination.totalPages, this.pagination.page + 2);
    
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    
    return pages;
  }
}