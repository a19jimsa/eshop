import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products-module',
  templateUrl: './products-module.component.html',
  styleUrls: ['./products-module.component.css'],
})
export class ProductsModuleComponent implements OnInit {
  products: Product[] = new Array();

  constructor(private route: Router, private service: ProductService) {}

  ngOnInit(): void {
    this.service.getAllProducts().subscribe((response: Product[]) => {
      this.products = response;
    });
  }
}
