import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-employee-image',
  templateUrl: './employee-image.component.html',
  styleUrls: ['./employee-image.component.css'],
})
export class EmployeeImageComponent {
  @Input() profile: string = '';
}
