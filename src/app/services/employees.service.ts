import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import { EmpModel } from '../model/emp.model';
import {ApiResponse} from "./api.response";
import {EmployeesResponse} from "./employees.response";

@Injectable()
export class EmployeesService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<EmpModel[]> {
    return this._httpClient.get<ApiResponse<EmployeesResponse[]>>(`https://dummy.restapiexample.com/api/v1/employees/`).pipe(
      map((response: ApiResponse<EmployeesResponse[]>) => {
        return response.data.map((empResponse: EmployeesResponse) => {
          return {
            id: empResponse.id,
            employee_name: empResponse.employee_name,
            employee_age: empResponse.employee_age,
            employee_salary: empResponse.employee_salary,
            profile_image: empResponse.profile_image
          }
        })
      })
    );
  }

  getDetails(id: string): Observable<EmpModel> {
    return this._httpClient.get<ApiResponse<EmployeesResponse>>('https://dummy.restapiexample.com/api/v1/employee/'+id).pipe(
      map((response: ApiResponse<EmployeesResponse>) => {
          return {
            id: response.data.id,
            employee_name: response.data.employee_name,
            employee_age: response.data.employee_age,
            employee_salary: response.data.employee_salary,
            profile_image: response.data.profile_image }
        }
      )
    )}

}
