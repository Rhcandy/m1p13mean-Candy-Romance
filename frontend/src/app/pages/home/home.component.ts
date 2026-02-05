import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  featuredProducts = [
    {
      id: 1,
      name: 'Bonbons assortis français',
      description: 'Un mélange exquis de bonbons traditionnels français',
      price: 12.99,
      image: '/assets/product1.jpg',
      shop: 'La Bonbonnière Parisienne',
      rating: 4.5,
      inStock: true
    },
    {
      id: 2,
      name: 'Caramels artisanaux',
      description: 'Caramels faits maison avec du beurre normand',
      price: 8.50,
      image: '/assets/product2.jpg',
      shop: 'Sucrerie d\'Alsace',
      rating: 4.8,
      inStock: true
    },
    {
      id: 3,
      name: 'Chocolats belges',
      description: 'Chocolats premium importés de Belgique',
      price: 18.99,
      image: '/assets/product3.jpg',
      shop: 'Chocolatier Royal',
      rating: 4.9,
      inStock: false
    }
  ];

  featuredShops = [
    {
      id: 1,
      name: 'La Bonbonnière Parisienne',
      description: 'Bonbons traditionnels depuis 1920',
      image: '/assets/shop1.jpg',
      rating: 4.6,
      products: 150
    },
    {
      id: 2,
      name: 'Sucrerie d\'Alsace',
      description: 'Spécialités alsaciennes authentiques',
      image: '/assets/shop2.jpg',
      rating: 4.7,
      products: 89
    }
  ];
}
