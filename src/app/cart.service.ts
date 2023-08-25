import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  constructor() {}

  getCartItems(): Product[] {
    return this.cartItemsSubject.getValue();
  }

  updateCartItems(items: Product[]) {
    this.cartItemsSubject.next(items);
  }

  getPrice(items: Product[]): number {
    let number = 0;
    for (let i = 0; i < items.length; i++) {
      number += items[i].price * items[i].inventory_amount;
    }
    return number;
  }

  isProductInCart(product: Product): boolean {
    const cartItems = this.getCartItems();
    return cartItems.some((item) => item.id === product.id);
  }
}
