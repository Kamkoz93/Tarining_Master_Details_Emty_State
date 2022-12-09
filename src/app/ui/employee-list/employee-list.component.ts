import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {map, Observable, Subject, switchMap} from 'rxjs';
import { EmpModel } from '../../model/emp.model';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeListComponent {
  constructor(private _employeesService: EmployeesService) {
  }
  readonly empList$: Observable<EmpModel[]> = this._employeesService.getAll();
  private _employeeIdSubject: Subject<string> = new Subject<string>();
  public EmployeeId$: Observable<string> = this._employeeIdSubject.asObservable();
  readonly empDetails$: Observable<EmpModel> = this.EmployeeId$.pipe(
    switchMap(data => this._employeesService.getDetails(data)));

  selectEmpId(id:string): void {
    this._employeeIdSubject.next(id);
  }
}
