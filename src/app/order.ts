import { Customer } from './customer';

export interface Order {
  id: number;
  customer: Customer;
  date: Date;
  status: String;
}
