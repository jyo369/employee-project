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

    this.employeeForm = this.fb.group({
      firstname: this.fb.control(''),
      lastname: this.fb.control(''),
      birthday: this.fb.control(''),
      gender: this.fb.control(''),
      education: this.fb.control('default'),
      company: this.fb.control(''),
      jobExperience: this.fb.control(''),
      salary: this.fb.control(''),
    });

    this.id = this.route.snapshot.params['id'];

    this.empService.loadEmployees().subscribe((data) => {
      this.e2 = data;
      console.log(data);
      console.log(this.e2);
      this.employee = this.e2.find((ele: Employee) => ele?.id == this.id);
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
  edit(event: any) {
    this.employees.forEach((val, ind) => {
      if (val.id === event) {
        this.setForm(val);
      }
    });
    this.removeEmployee(event);
    //this.addEmployeeButton.nativeElement.click();
  }

  // edit(e: Employee) {
  //   this.employeeSelected.emit(this.employee);
  //   this.selectedEmployee = e;
  //   this.showdetails = true;

  // }

  removeEmployee(event: any) {
    this.employees.forEach((val, index) => {
      // if (val.id === parseInt(event)) {
      //   this.employeeService.deleteEmployee(event).subscribe((res) => {
      //     this.employees.splice(index, 1);
      //   });
      // }

      if (val.id === parseInt(event)) {
        this.employees.splice(index, 1);
      }
      this.selectedEmployee = {};
      this.showdetails = false;
    });
  }

  setForm(emp: Employee) {
    this.FirstName.setValue(emp.firstname);
    this.LastName.setValue(emp.lastname);
    this.BirthDay.setValue(emp.birthdate);
    this.Gender.setValue(emp.gender);

    let educationIndex = 0;
    this.educationOptions.forEach((val, index) => {
      if (val === emp.education) educationIndex = index;
    });
    this.Education.setValue(educationIndex);

    this.Company.setValue(emp.company);
    this.JobExperience.setValue(emp.jobExperience);
    this.Salary.setValue(emp.salary);
    this.fileInput.nativeElement.value = '';
  }

  clearForm() {
    this.FirstName.setValue('');
    this.LastName.setValue('');
    this.BirthDay.setValue('');
    this.Gender.setValue('');
    this.Education.setValue('');
    this.Company.setValue('');
    this.JobExperience.setValue('');
    this.Salary.setValue('');
    this.fileInput.nativeElement.value = '';
  }

  public get FirstName(): FormControl {
    return this.employeeForm.get('firstname') as FormControl;
  }
  public get LastName(): FormControl {
    return this.employeeForm.get('lastname') as FormControl;
  }
  public get BirthDay(): FormControl {
    return this.employeeForm.get('birthday') as FormControl;
  }
  public get Gender(): FormControl {
    return this.employeeForm.get('gender') as FormControl;
  }
  public get Education(): FormControl {
    return this.employeeForm.get('education') as FormControl;
  }
  public get Company(): FormControl {
    return this.employeeForm.get('company') as FormControl;
  }
  public get JobExperience(): FormControl {
    return this.employeeForm.get('jobExperience') as FormControl;
  }
  public get Salary(): FormControl {
    return this.employeeForm.get('salary') as FormControl;
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
