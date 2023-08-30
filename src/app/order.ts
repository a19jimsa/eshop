import { Product } from './product';
import { Customer } from './customer';

export interface Order {
  id: number;
  date: string;
  customer: Customer;
  products: Product[];
}
