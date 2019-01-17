import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListEmployeeComponent } from './employees/list-employee.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { CreateEmployeeCandeactivateGuard } from './employees/create-employee-candeactivate.guard';

const routes: Routes = [
  {path: 'list', component: ListEmployeeComponent},
  {
    path: 'create/:data',
    component: CreateEmployeeComponent,
    canDeactivate: [CreateEmployeeCandeactivateGuard]
  },
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: '**', redirectTo: 'list'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
