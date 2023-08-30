import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from './order';
@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}

  addOrder(order: any) {
    return this.http.post('http://localhost:8080/api/order/add', order);
  }

  getOrders() {
    return this.http.get<Order[]>('http://localhost:8080/api/orders');
  }
}
