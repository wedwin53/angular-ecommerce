import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ProductsComponent } from './components/products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductComponent } from '../product/components/product.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [ProductsComponent, ProductComponent],
  imports: [CommonModule, SharedModule, ProductsRoutingModule, MaterialModule],
})
export class ProductsModule {}
