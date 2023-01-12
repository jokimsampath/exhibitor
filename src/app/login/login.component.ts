import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { loginModel } from './model/login.model';
import { LoginService } from './service/login.service';
import { NotificationService } from '../services/notification.service';
import { PreloaderService } from '../services/preloader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginRequest = new loginModel();
  logReq: any = {date : ''};
  

  constructor(
    private router: Router,
    private loginService: LoginService,
    private notificationService: NotificationService,
    private preloaderService: PreloaderService
  ){}

  ngOnInit(){

  }
  
  login() {
    this.preloaderService.show();
    this.loginService.logIn(this.loginRequest).subscribe((res: any)=>{
      this.preloaderService.hide();
      if(res.STATUS == 'OK'){
        if(res.data[0].admin == 'true'){
          this.loginService.admin = true;
        } else {
          this.loginService.admin = false;
        }
        this.loginService.email = res.data[0].email;
        this.loginService.auth = true;
        this.loginService.tocken = res.tocken;
        this.loginService.user_id = res.data[0].id;
        this.notificationService.success('Login successfull');
        setTimeout(() => {
          this.router.navigate(['/dashboard']);
        }, 1000);
      } else {
        if(this.loginRequest.admin){
          this.notificationService.danger('Login Failed, You are not admin for this application or Invalid email or password');
        } else {
          this.notificationService.danger('Invalid email id or password, please try again ...!');
        }
      }
    });
  }

  register(){
    this.router.navigate(['/registration'])
  }

}
