import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {
  product!: Product;
  isLoading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private service: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getProduct(id).subscribe((response) => {
      this.product = response;
      this.isLoading = false;
    });
  }

  addToChart(): void {
    if (!this.cartService.isProductInCart(this.product)) {
      const currentCart = this.cartService.getCartItems();
      this.product.inventory_amount = 1;
      const updateCart = [...currentCart, this.product];
      this.cartService.updateCartItems(updateCart);
    } else {
      let currentCart = this.cartService.getCartItems();
      for (let i = 0; i < currentCart.length; i++) {
        if (currentCart[i].id === this.product.id) {
          currentCart[i].inventory_amount++;
        }
      }
      const updateCart = [...currentCart];
      this.cartService.updateCartItems(updateCart);
    }
  }

  goBack(): void {
    this.location.back();
  }
}
