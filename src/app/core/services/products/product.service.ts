import { Injectable } from '@angular/core';
import { Product } from '../../../product.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get<Product[]>(environment.api_url);
  }

  getProduct(id: string) {
    return this.http.get<Product>(environment.api_url + id);
  }

  createProduct(product: Product) {
    return this.http.post(environment.api_url, product);
  }
}
