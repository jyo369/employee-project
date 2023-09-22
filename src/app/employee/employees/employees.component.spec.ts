import {
  ComponentFixture,
  fakeAsync,
  flush,
  flushMicrotasks,
  TestBed,
  tick,
  waitForAsync,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { EmployeesComponent } from './employees.component';
import { AppModule } from 'src/app/app.module';
import { Employees } from 'src/app/db-data';
import { DebugElement } from '@angular/core';

describe('EmployeesComponent', () => {
  let component: EmployeesComponent;
  let fixture: ComponentFixture<EmployeesComponent>;
  let el: DebugElement;

  beforeEach(() => {
    const empServiceSpy = jasmine.createSpyObj('EmployeeService', [
      'loadEmployees',
    ]);
    TestBed.configureTestingModule({
      declarations: [EmployeesComponent],
      imports: [AppModule],
    });
    fixture = TestBed.createComponent(EmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    el = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    console.log(component);
  });
  it('should display the employee list', () => {
    component.employeesToDisplay = Employees;
    fixture.detectChanges();
    const cards = el.queryAll(By.css('app-employee-card'));
    expect(cards).toBeTruthy();
    expect(cards.length).toBeGreaterThan(
      0,
      'app-employee-card not having details'
    );
  });
  it('should display the first course', () => {
    component.employeesToDisplay = Employees;

    fixture.detectChanges();

    const emp = component.employeesToDisplay[0];

    const card = el.query(By.css('app-employee-card:first-child'));
    const name = card.query(By.css('mat-card .name'));
    const image = card.query(By.css('app-employee-image img'));

    expect(card).toBeTruthy('Could not find course card');

    expect(name.nativeElement.textContent.trim()).toBe(
      emp.firstname + ' ' + emp.lastname.charAt(0),
      'not same name'
    );
    expect(image.nativeElement.alt).toBe(emp.profile, "'not same image");
  });
});
