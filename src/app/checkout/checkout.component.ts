import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../product';
import { Customer } from '../customer';
import { OrderService } from '../order.service';
import { Order } from '../order';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  cartItems: Product[] = new Array();
  totalPrice: number = 0;

  constructor(
    private cartService: CartService,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe((items) => {
      this.cartItems = items;
    });
  }

  recivedData(customer: Customer) {
    console.log(this.cartItems);
    console.log(customer);
    let order = { products: this.cartItems, customer: customer };
    this.orderService
      .addOrder(order)
      .subscribe((response) => console.log(response));
  }

  remove(i: number) {
    this.cartItems.splice(i, 1);
    this.cartService.updateCartItems(this.cartItems);
  }

  getPrice(): number {
    return this.cartService.getPrice(this.cartItems);
  }
}
