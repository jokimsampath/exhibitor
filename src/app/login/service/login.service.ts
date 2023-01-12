import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlConstants } from 'src/app/constants/urlConstants';
import { WebService } from 'src/app/services/webservice.service';
import { loginModel } from '../model/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  auth:boolean = false;
  tocken: string = "";
  admin: boolean = false;
  role: string = "";
  user_id: string = "";
  email: string = "";
  exhibitorDetails: any = [];

  constructor(
    private httpClient: HttpClient,
    private webService: WebService
  ) { }

  logIn(param: loginModel){
    return this.webService.postApi(UrlConstants.LOGIN, param)
  }

  logOut(){
    return this.webService.postApi(UrlConstants.LOGIN, {})
  }

}
