import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.css'
})
export class CardProductComponent {
  @Input() product = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    image: '',
    shop: '',
    rating: 0,
    inStock: true
  };

  addToCart() {
    console.log('Adding to cart:', this.product.name);
  }
}
