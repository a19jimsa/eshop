import { Component } from '@angular/core';
import { Validators, FormBuilder, FormArray } from '@angular/forms';
import { Product } from '../product';
import { Category } from '../category';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})
export class CreateProductComponent {
  categories: Category[] = new Array();

  productForm = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    price: ['', Validators.required],
    inventory_amount: ['', Validators.required],
    category: this.fb.group({ id: 0 }),
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
    this.getCategories();
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
