import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../product';
import { Customer } from '../customer';
import { OrderItem } from '../order-item';
import { OrderService } from '../order.service';
import { ProductOrder } from '../product-order';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit, OnDestroy {
  cartItems: Product[] = new Array();
  totalPrice: number = 0;
  subscription!: Subscription;
  cartSubscription!: Subscription;

  constructor(private cartService: CartService, private order: OrderService) {}

  ngOnInit(): void {
    this.cartSubscription = this.subscription =
      this.cartService.cartItems$.subscribe((items) => {
        this.cartItems = items;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.cartSubscription.unsubscribe();
  }

  recivedData(customer: Customer) {
    let customerProduct: ProductOrder = {
      customer: customer,
      productList: this.cartItems,
    };
    this.subscription = this.order
      .addOrder(customerProduct)
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
