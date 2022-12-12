import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { CryptoChipsComponent } from './crypto-chips.component';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';

@NgModule({
  imports: [
    NgForOf,
    AsyncPipe,
    MatProgressSpinnerModule,
    NgIf,
    MatListModule,
    MatChipsModule,
    MatCardModule,
    CommonModule
  ],
  declarations: [CryptoChipsComponent],
  providers: [],
  exports: [CryptoChipsComponent]
})
export class CryptoChipsComponentModule {
}
