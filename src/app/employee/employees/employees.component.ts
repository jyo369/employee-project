import {
  Component,
  ViewChild,
  AfterViewInit,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeService } from 'src/app/services/employee.service';

import { Employee } from 'src/models/employee.model';
import { EmployeeCardComponent } from '../employees/employee-card/employee-card.component';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent {
  e1$: Employee[];
  employeesToDisplay: Employee[];
  loading: boolean;
  initaltotal: number = 12;

  @ViewChildren(EmployeeCardComponent, { read: ElementRef })
  empCard: QueryList<EmployeeCardComponent>;
  showspinner: boolean = true;
  constructor(private empService: EmployeeService) {}
  ngOnInit() {
    //get all employee details here
    this.empService.loadEmployees().subscribe((d) => {
      this.e1$ = d;
      this.employeesToDisplay = d.slice(0, 12);
      // this.employeesToDisplay = d;
      if (this.employeesToDisplay.length != 0) {
        this.showspinner = false;
      }
    });
  }
  selectedEmpDetails(e: Employee) {
    console.log(e.firstname);
  }
  ngAfterViewInit() {}

  toggle(highlighted: boolean) {
    console.log(highlighted);
  }
  searchEmployees(event: any) {
    console.log(event);
  }

  searchEmployees1(event: any) {
    console.log(event);
    let filteredEmployees: Employee[] = [];
    if (event.searchinputdata === '') {
      this.employeesToDisplay = this.e1$;
    } else {
      filteredEmployees = this.e1$.filter((val, index) => {
        let targetKey =
          val.firstname.toLowerCase() + '' + val.lastname.toLowerCase();
        let searchKey = event.searchinputdata.toLowerCase();
        return targetKey.includes(searchKey);
      });
      this.employeesToDisplay = filteredEmployees;
    }
  }
  f1(e: Event) {
    const element: any = document.getElementById('scrollbardiv');
    let pos = element.scrollTop;
    //      document.documentElement.offsetHeight;
    console.log(pos);

    let max = document.documentElement.scrollHeight;

    if (
      document.documentElement.scrollHeight + Math.floor(pos) >=
      element.scrollHeight
    ) {
      if (this.initaltotal <= this.e1$.length) {
        this.initaltotal += 12;
        this.employeesToDisplay = this.e1$.slice(0, this.initaltotal);
        if (!this.loading) {
          this.showspinner = true;
          setTimeout(() => {
            this.showspinner = false;
          }, 100);
          this.loading = true;
        }
      } else {
        // this.employeesToDisplay = this.e1$.slice(0, 12);
      }
    }
  }
  refreshemp(index: number, emloyee: Employee): Employee {
    return emloyee;
  }
}
