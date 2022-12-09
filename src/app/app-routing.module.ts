import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './ui/product-list/product-list.component';
import { ProductListComponentModule } from './ui/product-list/product-list.component-module';
import { ProductServiceModule } from './services/product.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: '', component: ProductListComponent }]), ProductListComponentModule, ProductServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
