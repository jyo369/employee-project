import { TestBed } from '@angular/core/testing';

import { EmployeeService } from './employee.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { emp } from 'src/assets/empdb-data';
describe('EmployeeService', () => {
  let service: EmployeeService;
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EmployeeService],
    });
    service = TestBed.inject(EmployeeService);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  it('should be created employee services', () => {
    service.loadEmployees().subscribe((emp) => {
      console.log(emp);
      expect(emp).toBeTruthy('No courses returned');
      console.log(typeof emp);
      expect(emp.length).toBe(30, 'incorrect number of employee');
      const emprecord = emp.find((e) => e.id == 10);
      expect(emprecord?.firstname).toBe('nimisha');
    });
    expect(service).toBeTruthy();
    const req = httpTesting.expectOne('assets/employee.json');
    expect(req.request.method).toEqual('GET');
    req.flush(emp);
  });
  afterEach(() => {
    httpTesting.verify();
  });
});
