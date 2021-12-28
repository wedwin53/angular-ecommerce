import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductFormComponent } from './components/product-form/product-form.component';

import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';
import { NavComponent } from './components/nav/nav.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductListComponent } from './components/product-list/product-list.component';

@NgModule({
  declarations: [
    ProductFormComponent,
    NavComponent,
    DashboardComponent,
    InventoryComponent,
    ProductListComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class AdminModule {}
