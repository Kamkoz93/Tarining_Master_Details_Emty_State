import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import {EmployeesServiceModule} from "./services/employees.service-module";
import {ProductServiceModule} from "./services/product.service-module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    EmployeesServiceModule,
    ProductServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
