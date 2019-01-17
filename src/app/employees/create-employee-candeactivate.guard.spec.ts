import { TestBed, async, inject } from '@angular/core/testing';

import { CreateEmployeeCandeactivateGuard } from './create-employee-candeactivate.guard';

describe('CreateEmployeeCandeactivateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateEmployeeCandeactivateGuard]
    });
  });

  it('should ...', inject([CreateEmployeeCandeactivateGuard], (guard: CreateEmployeeCandeactivateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
