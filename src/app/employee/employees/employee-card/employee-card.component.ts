import {
  Component,
  EventEmitter,
  Input,
  Output,
  AfterViewInit,
  ContentChild,
  ElementRef,
  ViewChildren,
} from '@angular/core';

import { EmployeeImageComponent } from '../employee-image/employee-image.component';
import { Employee } from 'src/models/employee.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css'],
})
export class EmployeeCardComponent implements AfterViewInit {
  @Input({ required: true }) employee: Employee;

  @Output() employeeSelected = new EventEmitter<Employee>();
  @ContentChild(EmployeeImageComponent, { read: ElementRef })
  ele: EmployeeImageComponent;
  dateformat: string;
  lastname: string;
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.lastname = this.employee.lastname.charAt(0);
  }
  view(id: any) {
    this.router.navigate(['/emp/' + id + '']);
  }
  getCategory() {
    return this.employee.category == 'IT';
  }

  ngAfterViewInit() {}
}
