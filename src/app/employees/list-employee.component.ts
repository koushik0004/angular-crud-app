import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
import jsonDummy from '../../assets/config-json/employess.json';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.scss']
})
export class ListEmployeeComponent implements OnInit {
  employees: Employee[] = [];
  selectedEmpName: string;
  constructor() {
    this.employees = jsonDummy.employee;
  }

  ngOnInit() {
  }

  showEmployeeNameOnSelect(evtData: string){
    this.selectedEmpName=evtData;
  }

}
