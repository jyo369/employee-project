import { Injectable } from '@angular/core';
import { Employee } from 'src/models/employee.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private httpClient: HttpClient) {}

  loadEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>('assets/employee.json');
  }
}
