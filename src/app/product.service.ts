import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';
import { Category } from './category';
import { Image } from './image';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:8080/api/products');
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>('http://localhost:8080/api/add', product);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>('http://localhost:8080/api/product?id=' + id);
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>('http://localhost:8080/api/categories');
  }

  getImages(id: number): Observable<Image[]> {
    return this.http.get<Image[]>(
      'http://localhost:8080/api/product/images?id=' + id
    );
  }
  getProductsInCategory(name: string): Observable<Product[]> {
    return this.http.get<Product[]>(
      'http://localhost:8080/api/category/' + name
    );
  }
}
