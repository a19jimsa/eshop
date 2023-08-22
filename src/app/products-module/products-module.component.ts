import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-module',
  templateUrl: './products-module.component.html',
  styleUrls: ['./products-module.component.css'],
})
export class ProductsModuleComponent implements OnInit {
  products: Product[] = new Array();

  constructor(private route: Router) {}

  ngOnInit(): void {
    this.products = [
      {
        id: 1011,
        text: 'Bajs',
        image: 'Hello World',
        url: 'www.bajskorv.se',
        price: 100,
      },
      {
        id: 1012,
        text: 'Bajs',
        image: 'Hello World',
        url: 'www.bajskorv.se',
        price: 200,
      },
      {
        id: 1013,
        text: 'Bajs',
        image: 'Hello World',
        url: 'www.bajskorv.se',
        price: 300,
      },
      {
        id: 1014,
        text: 'Bajs',
        image: 'Hello World',
        url: 'www.bajskorv.se',
        price: 500,
      },
      {
        id: 1015,
        text: 'Bajs',
        image: 'Hello World',
        url: 'www.bajskorv.se',
        price: 500,
      },
    ];
  }

  navigateTo(product: Product) {
    this.route
  }
}
