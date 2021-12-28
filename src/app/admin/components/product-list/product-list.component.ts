import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../../core/services/products/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: any[];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productService.getAllProducts().subscribe((products) => {
      this.products = products;
    });
  }

  editProduct(id: string) {
    console.log(id);
  }
}
