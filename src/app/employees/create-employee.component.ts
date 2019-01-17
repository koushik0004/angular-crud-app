import { Component, OnInit, ChangeDetectionStrategy, ViewChild  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

import { Employee } from '../model/employee.model';
import { Department } from '../model/department.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateEmployeeComponent implements OnInit {
  model: Partial<Employee>;
  bsDatePickerConfig: Partial<BsDatepickerConfig>;
  departments: Partial<Department[]> = [];
  @ViewChild('f') public createEmployeeForm: NgForm;

  //for selectbox validation
  selectValidatorDefaultConfig: any = {
    defaultValue: '-1',
    otherData: null
  };
  constructor(private _router: ActivatedRoute) { }

  ngOnInit() {
    this.bsDatePickerConfig = {...this.bsDatePickerConfig,
      containerClass: 'theme-dark-blue',
      dateInputFormat: 'DD/MM/YYYY',
      minDate: new Date(2000, 0, 1)
    };
    this.model = {...this.model,
      dateOfBirth: new Date(),
      department: '-1'
    };
    this.departments = [
      {id: '-1', name: 'Choose Department'},
      {id: 'FINANCE', name: 'Finance'},
      {id: 'IT', name: 'IT'},
      {id: 'PAYROL', name: 'Payroll'},
      {id: 'HELPDESK', name: 'Help Desk'},
      {id: 'TESTING', name: 'Testing'},
      {id: 'ADMIN', name: 'Admin'}
    ];

    this._router.paramMap.subscribe((url) => {
      console.log(url);
    })
  }
  saveEmployee(formDetails: NgForm): void {
    console.log(this.model, formDetails);
  }

}
