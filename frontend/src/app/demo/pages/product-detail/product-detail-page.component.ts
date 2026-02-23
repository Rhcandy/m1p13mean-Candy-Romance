import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductDetailComponent } from '../../../components/product/product-detail/product-detail.component';

@Component({
  selector: 'app-product-detail-page',
  standalone: true,
  imports: [CommonModule, RouterModule, ProductDetailComponent],
  template: `
    <div class="product-detail-page">
      <app-product-detail></app-product-detail>
    </div>
  `,
  styleUrls: ['./product-detail-page.component.scss']
})
export class ProductDetailPageComponent {
  constructor() { }
}
