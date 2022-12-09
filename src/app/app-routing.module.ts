import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './ui/product-list/product-list.component';
import { EmployeeListComponent } from './ui/employee-list/employee-list.component';
import { CryptoListComponent } from './ui/crypto-list/crypto-list.component';
import { ProductListComponentModule } from './ui/product-list/product-list.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { EmployeeListComponentModule } from './ui/employee-list/employee-list.component-module';
import { EmployeesServiceModule } from './services/employees.service-module';
import { CryptoListComponentModule } from './ui/crypto-list/crypto-list.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products-master-details', component: ProductListComponent }, { path: 'employees-master-details', component: EmployeeListComponent }, { path: 'crypto-master-details', component: CryptoListComponent }]), ProductListComponentModule, ProductServiceModule, EmployeeListComponentModule, EmployeesServiceModule, CryptoListComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
