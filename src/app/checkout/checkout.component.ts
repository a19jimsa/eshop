import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../product';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  cartItems: Product[] = new Array();
  totalPrice: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe((items) => {
      this.cartItems = items;
    });
  }

  remove(i: number) {
    this.cartItems.splice(i, 1);
    this.cartService.updateCartItems(this.cartItems);
  }

  getPrice(): number {
    return this.cartService.getPrice(this.cartItems);
  }
}
