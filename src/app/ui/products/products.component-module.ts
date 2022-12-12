import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    AsyncPipe,
    NgIf,
    NgForOf,
    MatGridListModule,
    MatListModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCardModule
  ],
  declarations: [ProductsComponent],
  providers: [],
  exports: [ProductsComponent]
})
export class ProductsComponentModule {
}
