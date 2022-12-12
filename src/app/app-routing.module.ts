import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './ui/product-list/product-list.component';
import { EmployeeListComponent } from './ui/employee-list/employee-list.component';
import { CryptoListComponent } from './ui/crypto-list/crypto-list.component';
import { ProductsComponent } from './ui/products/products.component';
import { CategoriesComponent } from './ui/categories/categories.component';
import { CryptoChipsComponent } from './ui/crypto-chips/crypto-chips.component';
import { PublicHolidaysComponent } from './ui/public-holidays/public-holidays.component';
import { CategoriesListVersionTwoComponent } from './ui/categories-list-version-two/categories-list-version-two.component';
import { ProductListComponentModule } from './ui/product-list/product-list.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { EmployeeListComponentModule } from './ui/employee-list/employee-list.component-module';
import { EmployeesServiceModule } from './services/employees.service-module';
import { CryptoListComponentModule } from './ui/crypto-list/crypto-list.component-module';
import { ProductsComponentModule } from './ui/products/products.component-module';
import { CategoriesComponentModule } from './ui/categories/categories.component-module';
import { ProductCategoriesServiceModule } from './services/product-categories.service-module';
import { CryptoChipsComponentModule } from './ui/crypto-chips/crypto-chips.component-module';
import { CryptoServiceModule } from './services/crypto.service-module';
import { PublicHolidaysComponentModule } from './ui/public-holidays/public-holidays.component-module';
import { PublicHolidaysServiceModule } from './services/public-holidays.service-module';
import { CategoriesListVersionTwoComponentModule } from './ui/categories-list-version-two/categories-list-version-two.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products-master-details', component: ProductListComponent }, { path: 'employees-master-details', component: EmployeeListComponent }, { path: 'crypto-master-details', component: CryptoListComponent }, { path: 'products', component: ProductsComponent }, { path: 'categories', component: CategoriesComponent }, { path: 'crypto', component: CryptoChipsComponent }, { path: 'public-holidays', component: PublicHolidaysComponent }, { path: 'checkbox-categories', component: CategoriesListVersionTwoComponent }]), ProductListComponentModule, ProductServiceModule, EmployeeListComponentModule, EmployeesServiceModule, CryptoListComponentModule, ProductsComponentModule, CategoriesComponentModule, ProductCategoriesServiceModule, CryptoChipsComponentModule, CryptoServiceModule, PublicHolidaysComponentModule, PublicHolidaysServiceModule, CategoriesListVersionTwoComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
