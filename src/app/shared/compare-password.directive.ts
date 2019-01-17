import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { Directive, Input } from '@angular/core';


@Directive({
  selector: '[comparePassword]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ComparePasswordValidation,
    multi: true
  }]
})

export class ComparePasswordValidation implements Validator {
  @Input() comparePassword: string;
  validate(control: AbstractControl): {[key: string]: any} | null{
    const compareControl = control.parent.get(this.comparePassword);
    if(compareControl && compareControl.value !== control.value){
      return {'notEqual': true};
    }
    return null;
  }
}
