import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Product } from '../product';
import { Image } from '../image';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  productForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    inventory_amount: new FormControl('', Validators.required),
    url: new FormControl('', Validators.required),
  });

  constructor(private service: ProductService, private route: Router) {}

  ngOnInit(): void {}

  createProduct(): void {
    var product = JSON.stringify(this.productForm.value);
    var newProduct: Product = JSON.parse(product);
    var url: String = this.productForm.value['url'];
    url = url.substring(url.lastIndexOf('\\') + 1, url.length);
    var newImage = { url: url };
    this.service
      .createProduct(newProduct, newImage)
      .subscribe((response) => console.log(response));
  }
}
