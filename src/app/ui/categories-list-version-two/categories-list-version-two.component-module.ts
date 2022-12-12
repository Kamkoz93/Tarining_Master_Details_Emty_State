import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CategoriesListVersionTwoComponent } from './categories-list-version-two.component';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';

@NgModule({
  imports: [MatCardModule, NgForOf, AsyncPipe, NgIf, MatProgressSpinnerModule, MatCheckboxModule, CommonModule],
  declarations: [CategoriesListVersionTwoComponent],
  providers: [],
  exports: [CategoriesListVersionTwoComponent]
})
export class CategoriesListVersionTwoComponentModule {
}


