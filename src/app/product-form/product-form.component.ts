import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Product } from '../product';
import { Category } from '../category';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  categories: Category[] = new Array();

  productForm = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    price: ['', Validators.required],
    inventory_amount: ['', Validators.required],
    category_id: ['', Validators.required],
    images: this.fb.array([]),
  });

  constructor(
    private service: ProductService,
    private route: Router,
    private fb: FormBuilder
  ) {}

  get images() {
    return this.productForm.get('images') as FormArray;
  }

  addItem() {
    const newImage = this.fb.group({
      url: '',
    });
    this.images.push(newImage);
  }

  removeItem(i: number): void {
    this.images.removeAt(i);
  }

  ngOnInit(): void {
    //this.getCategories();
  }

  createProduct(): void {
    var product = JSON.stringify(this.productForm.value);
    var newProduct: Product = JSON.parse(product);
    this.service
      .createProduct(newProduct)
      .subscribe((response) => console.log(response));
  }

  getCategories() {
    this.service.getCategories().subscribe((response) => {
      this.categories = response;
      console.log(response);
    });
  }
}
