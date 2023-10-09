import { Component, OnDestroy, OnInit } from '@angular/core';
import { Order } from '../order';
import { OrderService } from '../order.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-customer-orders',
  templateUrl: './customer-orders.component.html',
  styleUrls: ['./customer-orders.component.css'],
})
export class CustomerOrdersComponent implements OnInit, OnDestroy {
  orders: Order[] = new Array();
  isLoading: boolean = true;
  subscription!: Subscription;

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.subscription = this.orderService.getOrders().subscribe((response) => {
      console.log(response);
      this.orders = response;
      this.isLoading = false;
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
