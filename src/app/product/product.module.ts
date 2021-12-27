import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './components/product.component';
import { ProductRoutingModule } from './product-routing.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [ProductComponent],
  imports: [CommonModule, SharedModule, ProductRoutingModule, MaterialModule],
})
export class ProductModule {}
