import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { CryptoListComponent } from './crypto-list.component';
import {AsyncPipe, NgForOf, NgIf } from "@angular/common";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [MatGridListModule, NgForOf, AsyncPipe, NgIf, MatListModule, MatButtonModule],
  declarations: [CryptoListComponent],
  providers: [],
  exports: [CryptoListComponent]
})
export class CryptoListComponentModule {
}
