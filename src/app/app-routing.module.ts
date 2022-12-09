import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './ui/product-list/product-list.component';
import { EmployeeListComponent } from './ui/employee-list/employee-list.component';
import { ProductListComponentModule } from './ui/product-list/product-list.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { EmployeeListComponentModule } from './ui/employee-list/employee-list.component-module';
import { EmployeesServiceModule } from './services/employees.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products-master-details', component: ProductListComponent }, { path: 'employees-master-details', component: EmployeeListComponent }]), ProductListComponentModule, ProductServiceModule, EmployeeListComponentModule, EmployeesServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
