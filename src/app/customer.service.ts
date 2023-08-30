import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private readonly url = 'http://localhost:8080/api/customer';

  constructor(private http: HttpClient) {}

  getCustomer() {
    return this.http.get(this.url);
  }

  addCustomer(customer: Customer) {
    return this.http.post<Customer>(
      'http://localhost:8080/api/customer/add',
      customer
    );
  }
}
