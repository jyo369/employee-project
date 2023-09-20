import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() search = new EventEmitter<{ searchinputdata: string }>();
  @Input() notdisplaysearch: boolean = false;
  searchEmployees(val: any) {
    this.search.emit({ searchinputdata: val });
  }
}
