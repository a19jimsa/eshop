import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css'],
})
export class CheckoutFormComponent implements OnInit {
  @Output() eventEmitter = new EventEmitter<Customer>();

  checkoutForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    address: this.fb.group({
      streetname: ['', Validators.required],
      zipcode: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
    }),
  });

  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {}

  addOrder(): void {
    let customer = JSON.stringify(this.checkoutForm.value);
    let newCustomer: Customer = JSON.parse(customer);
    this.customerService.addCustomer(newCustomer).subscribe((response) => {
      console.log(response);
      this.eventEmitter.emit(response);
    });
  }
}
