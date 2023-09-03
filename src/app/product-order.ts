import { Product } from './product';
import { Customer } from './customer';

export interface ProductOrder {
  productList: Product[];
  customer: Customer;
}
