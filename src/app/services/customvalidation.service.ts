import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { UrlConstants } from '../constants/urlConstants';
import { WebService } from './webservice.service';
import { LoginService } from '../login/service/login.service';

@Injectable({
  providedIn: 'root'
})
export class CustomvalidationService {

  requestModel: any = {};

  constructor(
    private webService: WebService,
    private loginService: LoginService
  ) {}

  patternValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return {};
      }
      //const regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$');
      const regex = new RegExp('^.{6,}$');
      const valid = regex.test(control.value);
      return valid ? {} : { invalidPassword: true };
    };
  }

  MatchPassword(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];

      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      if (confirmPasswordControl.errors && !confirmPasswordControl.errors['passwordMismatch']) {
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        return confirmPasswordControl.setErrors({ passwordMismatch: true });
      } else {
        return confirmPasswordControl.setErrors(null);
      }
    }
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

  validateUserName(userName: string) {
    const UserList = ['ankit', 'admin', 'user', 'superuser'];
    return (UserList.indexOf(userName) > -1);
  }

  validateFasciaName() {
    this.requestModel = {};
    this.requestModel.user_id = this.loginService.user_id;
    this.requestModel.method = 'GET';
    this.requestModel.data = [];
    this.webService.postApi(UrlConstants.FASCIA, this.requestModel).subscribe((res: any)=>{
      if(res.STATUS == 'OK'){
        return true;    
      } else {
        return false;
      }
    });
    return;
  }

  validatePowerRequirement() {
    let status = false;
    this.requestModel.user_id = this.loginService.user_id;
    this.requestModel.method = 'GET';
    this.requestModel.data = [];
    this.webService.postApi(UrlConstants.POWER_REQUIREMENT_TEMPORARY, this.requestModel).subscribe((res: any) => {
      if (res.STATUS == 'OK') {
        status = true;
      } else {
        this.webService.postApi(UrlConstants.POWER_REQUIREMENT_EXHIBITION, this.requestModel).subscribe((res: any) => {
          if (res.STATUS == 'OK') {
            status = true;
          } else {
            status = false;
          }
        });
      }
    });
    return status;
  }

  validateExhibitorBadge() {
    let status = false;
    this.requestModel.user_id = this.loginService.user_id;
    this.requestModel.method = 'GET';
    this.requestModel.data = [];
    this.webService.postApi(UrlConstants.EXHIBITOR_BADGE, this.requestModel).subscribe((res: any) => {
      if (res.STATUS == 'OK') {
        status = true;
      } else {
        status = false;
      }
    });
    return status;
  }

}