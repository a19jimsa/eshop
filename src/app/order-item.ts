import { Order } from './order';
import { Product } from './product';

export interface OrderItem {
  id?: number;
  order: Order;
  products: Product[];
}
