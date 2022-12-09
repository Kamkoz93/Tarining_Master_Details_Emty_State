import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule, NgForOf, NgIf } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { ProductListComponent } from './product-list.component';

@NgModule({
  imports: [MatGridListModule, MatListModule, NgForOf, AsyncPipe, MatButtonModule, NgIf, MatProgressSpinnerModule, MatCardModule, CommonModule],
  declarations: [ProductListComponent],
  providers: [],
  exports: [ProductListComponent]
})
export class ProductListComponentModule {
}
