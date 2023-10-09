import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Image } from '../image';
import { CartService } from '../cart.service';
import { Category } from '../category';

@Component({
  selector: 'app-products-module',
  templateUrl: './products-module.component.html',
  styleUrls: ['./products-module.component.css'],
})
export class ProductsModuleComponent implements OnInit {
  @Input() item: string = '';
  products: Product[] = new Array();
  images: Image[] = new Array();
  imageSrc: string = '';
  amount: number = 0;
  isLoading: boolean = true;

  constructor(
    private service: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.service.getAllProducts().subscribe((response: Product[]) => {
      this.products = response;
      this.isLoading = false;
    });
  }

  addToChart(product: Product): void {
    if (!this.cartService.isProductInCart(product)) {
      const currentCart = this.cartService.getCartItems();
      product.inventory_amount = 1;
      const updateCart = [...currentCart, product];
      this.cartService.updateCartItems(updateCart);
    } else {
      let currentCart = this.cartService.getCartItems();
      for (let i = 0; i < currentCart.length; i++) {
        if (currentCart[i].id === product.id) {
          currentCart[i].inventory_amount++;
        }
      }
      const updateCart = [...currentCart];
      this.cartService.updateCartItems(updateCart);
    }
  }

  getThumbnail(product: Product) {
    console.log(product);
    return 'http://localhost:8080/api/product/images/' + product.images[0].url;
  }
}
