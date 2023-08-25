import { Image } from './image';

export interface Product {
  id: number;
  name: string;
  description: string;
  inventory_amount: number;
  price: number;
  images: Image[];
  thumbnail: string;
}
