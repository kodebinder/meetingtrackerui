import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { EMPLOYEEID_MAX_LENGTH, EMPLOYEEID_PREFIX } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class CustomValidationService {

  MatchPassword(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];

      if (!passwordControl || !confirmPasswordControl) {
        //console.log("Error in passwordControl");
      }

      if (confirmPasswordControl.errors && !confirmPasswordControl.errors.passwordMismatch) {
        //console.log("Error in confirmPasswordControl");
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }
    }
  }

  employeeIdValidator(userControl: AbstractControl) {
    return new Promise(resolve => {
      setTimeout(() => {
        if (this.validateEmployeeIdPrefix(userControl.value)) {
          resolve({ employeeidNotAvailable: true });
        } else {
          resolve(null);
        }
      }, 1000);
    });
  }

  userNameValidator(userControl: AbstractControl) {
    return new Promise(resolve => {
      setTimeout(() => {
        if (this.validateUserName(userControl.value)) {
          resolve({ userNameNotAvailable: true });
        } else {
          resolve(null);
        }
      }, 1000);
    });
  }

  validateEmployeeIdPrefix(employeeid: string) {
    return employeeid.startsWith(EMPLOYEEID_PREFIX) ? true : false;
  }

  validateEmployeeIdLength(employeeid: string) {
    return employeeid.length < (EMPLOYEEID_MAX_LENGTH) ? true : false;
  }

  validateUserName(userName: string) {
    const UserList = ['root', 'admin', 'user', 'superuser'];
    return (UserList.indexOf(userName) > -1);
  }
}
