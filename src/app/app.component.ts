import {
  Component,
  ViewChild,
  AfterViewInit,
  ElementRef,
  QueryList,
  HostListener,
  ViewChildren,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';
import { EmployeeCardComponent } from './employee/employees/employee-card/employee-card.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  e1$: Observable<Employee[]>;
  @ViewChildren(EmployeeCardComponent, { read: ElementRef })
  empCard: QueryList<EmployeeCardComponent>;
  @ViewChild('scrollbardiv') scrollbardiv: any;
  @HostListener('scroll')
  onScroll(): void {
    console.log('trigger scroll bar11');

    let pos =
      (document.documentElement.scrollTop || document.body.scrollTop) +
      document.documentElement.offsetHeight;
    let max = document.documentElement.scrollHeight;
    // pos/max will give you the distance between scroll bottom and and bottom of screen in percentage.
    if (pos == max) {
      console.log('trigger scroll bar');
    }
  }

  scrolling: boolean;
  constructor() {
    this.scrolling = false;
  }
  ngOnInit() {}
  selectedEmpDetails(e: Employee) {
    console.log(e.firstname);
  }
  ngAfterViewInit() {}

  toggle(highlighted: boolean) {
    console.log(highlighted);
  }

  scrollHandler() {
    console.log('scroll fun');
  }
}
