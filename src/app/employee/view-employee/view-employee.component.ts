import {
  Component,
  EventEmitter,
  Input,
  Output,
  AfterViewInit,
  ContentChild,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { Location } from '@angular/common';
import { Employee } from 'src/models/employee.model';
import { EmployeeImageComponent } from '../employees/employee-image/employee-image.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Employees } from 'src/app/db-data';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from 'src/app/services/employee.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

export interface DialogData {
  animal: string;
  name: string;
}

export interface PersonalDetail {
  col: string;
  colvalue: string;
}

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css'],
})
export class ViewEmployeeComponent {
  id: number;
  employee: Employee;
  employeeForm: FormGroup;
  employees: Employee[];
  selectedEmployee: any;
  showdetails: boolean = false;
  @ViewChild('fileInput') fileInput: any;
  educationOptions = [
    '10th pass',
    'diploma',
    'graduate',
    'post graduate',
    'PhD',
  ];

  @Output() employeeSelected = new EventEmitter<Employee>();
  @ContentChild(EmployeeImageComponent, { read: ElementRef })
  ele: EmployeeImageComponent;
  dateformat: string;
  e2: any;
  displayedColumns: string[];
  displayedColumns1: string[];
  dataSource: any;
  dataSource1: any;
  showspinner: boolean = true;
  constructor(
    private route: ActivatedRoute,
    private httpClient: HttpClient,
    private empService: EmployeeService,
    private router: Router,
    private location: Location,
    private fb: FormBuilder
  ) {
    this.employeeForm = fb.group({});
  }

  ngOnInit(): void {
    this.displayedColumns = ['col', 'colvalue'];
    this.displayedColumns1 = ['col', 'colvalue'];

    this.id = this.route.snapshot.params['id'];

    this.empService.loadEmployees().subscribe((data) => {
      this.e2 = data;
      console.log(data);
      console.log(this.e2);
      this.employee = this.e2.find((ele: Employee) => ele?.id == this.id);
      if (this.employee) {
        this.showspinner = false;
      }
      const g = this.employee.gender == 'm' ? 'Male' : 'Female';
      var date = new Date(this.employee.birthdate);
      this.dateformat =
        date.getDate() +
        ' ' +
        new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date) +
        ' ' +
        date.getFullYear();
      this.dataSource = [
        { col: 'Birthdate', colvalue: this.dateformat },
        { col: 'Gender', colvalue: g },
      ];
      this.dataSource1 = [
        { col: 'Company', colvalue: this.employee.company },
        {
          col: 'Experience',
          colvalue: this.employee.jobExperience + ' ' + 'Yrs',
        },
        { col: 'Salary', colvalue: this.employee.salary + 'LPA' },
      ];
    });
  }

  get(g: string) {
    return g == 'm' ? 'Male' : 'Female';
  }

  back() {
    this.location.back();
  }
  getCategory() {
    return this.employee.category == 'IT';
  }

  ngAfterViewInit() {
    console.log(this.ele);
  }
}
