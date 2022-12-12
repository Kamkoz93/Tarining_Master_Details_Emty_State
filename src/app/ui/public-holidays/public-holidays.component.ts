import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {delay, map, Observable} from 'rxjs';
import { PublicHolidayModel } from '../../model/public-holiday.model';
import { PublicHolidaysService } from '../../services/public-holidays.service';

@Component({
  selector: 'app-public-holidays',
  templateUrl: './public-holidays.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PublicHolidaysComponent {
  readonly holidaysList$: Observable<PublicHolidayModel[]> = this._publicHolidaysService.getAll();

  constructor(private _publicHolidaysService: PublicHolidaysService) {
  }
}
