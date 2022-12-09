import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProductListComponent } from './product-list.component';
import {MatListModule} from "@angular/material/list";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [MatGridListModule, MatListModule, NgForOf, AsyncPipe, MatButtonModule, NgIf],
  declarations: [ProductListComponent],
  providers: [],
  exports: [ProductListComponent]
})
export class ProductListComponentModule {
}
