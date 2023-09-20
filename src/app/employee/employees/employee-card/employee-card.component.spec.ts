import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { EmployeeCardComponent } from './employee-card.component';
import { AppComponent } from 'src/app/app.component';
import { AppModule } from 'src/app/app.module';
import { Employees } from 'src/app/db-data';
import { By } from '@angular/platform-browser';
import { Employee } from 'src/models/employee.model';

describe('EmployeeCardComponent', () => {
  let component: EmployeeCardComponent;
  let fixture: ComponentFixture<EmployeeCardComponent>;
  let el: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(EmployeeCardComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;
      });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
    console.log(component);
  });
  it('should display the employee list', () => {
    component.employee = Employees[0];
    const cards = el.queryAll(By.css('mat-card'));

    expect(cards).toBeTruthy('Could not find cards');
    expect(cards.length).toBe(1, 'Could not find cards');
  });
});
