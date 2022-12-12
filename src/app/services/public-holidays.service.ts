import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {delay, map, Observable} from 'rxjs';
import { PublicHolidayModel } from '../model/public-holiday.model';

@Injectable()
export class PublicHolidaysService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<PublicHolidayModel[]> {
    return this._httpClient.get<PublicHolidayModel[]>(`https://date.nager.at/api/v2/publicholidays/2023/PL`);
  }
}
