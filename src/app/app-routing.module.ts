import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employee/employees/employees.component';
import { ViewEmployeeComponent } from './employee/view-employee/view-employee.component';
const routes: Routes = [
  {
    path: '',
    component: EmployeesComponent,
  },
  {
    path: 'emp/:id',
    component: ViewEmployeeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
