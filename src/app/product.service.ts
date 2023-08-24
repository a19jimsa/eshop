import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:8080/api/products');
  }

  createProduct(product: any, image: any): Observable<any> {
    return this.http.post<any>('http://localhost:8080/api/add', {
      product,
      image,
    });
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>('http://localhost:8080/api/product?id=' + id);
  }

  getImage(filename: string) {
    return this.http.get(
      'http://localhost:8080/api/product/images/' + filename,
      { responseType: 'blob' }
    );
  }
}
