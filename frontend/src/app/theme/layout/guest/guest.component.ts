// Angular import
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartSidebarComponent } from '../../../components/features/cart-sidebar/cart-sidebar.component';

@Component({
  selector: 'app-guest',
  imports: [RouterModule, CartSidebarComponent],
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.scss']
})
export class GuestComponent {}
