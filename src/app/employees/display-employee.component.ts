import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { Employee } from '../model/employee.model';

@Component({
  selector: '[app-display-employee]',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DisplayEmployeeComponent implements OnInit {
  @Input('singleEmplyee') private employee: Employee;
  @Output() public notify: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  handleClickEvent(){
    console.log(this.employee.name);
    this.notify.emit(this.employee.name);
  }

}
