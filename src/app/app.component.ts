import { Component } from '@angular/core';

import { EmployeeComponent } from './employee/employee/employee.component';


@Component({
  selector: 'app-root',
  template: '<h1> Sagar </h1> <app-employee></app-employee>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
