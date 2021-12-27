import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/products/product.service';
import { Product } from './../../product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.fecthProducts();
  }

  clickProduct(id: number) {
    console.log('Producto clickeado: ', id);
  }

  fecthProducts() {
    this.productService.getAllProducts().subscribe((products) => {
      this.products = products;
    });
  }
}
