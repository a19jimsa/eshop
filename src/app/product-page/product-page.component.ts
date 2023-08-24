import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { Image } from '../image';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {
  product?: Product;
  images!: Image[];
  imageSrc: String = '';

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private service: ProductService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getProduct(id).subscribe((response) => {
      console.log(response);
      this.product = response;
      this.images = this.product.images;
      this.getImage();
    });
  }

  getImage() {
    this.service.getImage(this.images[0].url).subscribe((response) => {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageSrc = e.target.result;
      };
      reader.readAsDataURL(response);
    });
  }

  goBack(): void {
    this.location.back();
  }
}
