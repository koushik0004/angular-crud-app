import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { CreateEmployeeComponent } from './create-employee.component';

@Injectable({
  providedIn: 'root'
})
export class CreateEmployeeCandeactivateGuard implements CanDeactivate<CreateEmployeeComponent> {
  canDeactivate(
    component: CreateEmployeeComponent
  ): boolean {
    if(component.createEmployeeForm.dirty)
      return confirm('Are you sure to navigate to other path and discard the changes?');
    return true;
  }
}
