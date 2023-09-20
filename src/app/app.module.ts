import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { AppComponent } from './app.component';
import { HighlightedDirective } from './directives/highlighted.directive';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatTreeModule } from '@angular/material/tree';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { EmployeesComponent } from './employee/employees/employees.component';
import { EmployeeCardComponent } from './employee/employees/employee-card/employee-card.component';
import { EmployeeImageComponent } from './employee/employees/employee-image/employee-image.component';
import { AppRoutingModule } from './app-routing.module';
import { ScrollDirective } from './directives/scroll.directive';
import { ViewEmployeeComponent } from './employee/view-employee/view-employee.component';
import { MatDividerModule } from '@angular/material/divider';
import { HeaderComponent } from './header/header.component';
import { MatFormFieldModule } from '@angular/material/form-field';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeCardComponent,
    EmployeeImageComponent,
    HighlightedDirective,
    EmployeesComponent,
    ScrollDirective,
    ViewEmployeeComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatTooltipModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatStepperModule,
    MatDialogModule,
    MatSelectModule,
    MatCheckboxModule,
    DragDropModule,
    MatRadioModule,
    MatSliderModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatTreeModule,
    ScrollingModule,
    AppRoutingModule,
    MatDividerModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
