import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[passwordStrength]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: PasswordStrengthDirective,
    multi: true
  }]
})
export class PasswordStrengthDirective implements Validator {

  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    return this.createPasswordStrengthValidator()(control);
  }

  createPasswordStrengthValidator(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {
      const value = control.value;
      const passwordValid = value && value.length > 3 && value.length < 11 && /(?=.*?[#?!@$%^&*-])/.test(value);
      return !passwordValid ? {passwordStrength:true}: null;
    }
  }

}
