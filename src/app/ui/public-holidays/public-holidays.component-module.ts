import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule, NgForOf, NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { PublicHolidaysComponent } from './public-holidays.component';

@NgModule({
  imports: [MatCardModule, NgForOf, AsyncPipe, MatProgressBarModule, NgIf, MatSelectModule, MatFormFieldModule, MatOptionModule, CommonModule],
  declarations: [PublicHolidaysComponent],
  providers: [],
  exports: [PublicHolidaysComponent]
})
export class PublicHolidaysComponentModule {
}
