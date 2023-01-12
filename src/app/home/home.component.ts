import { Component } from '@angular/core';
import { UrlConstants } from 'src/app/constants/urlConstants';
import { WebService } from 'src/app/services/webservice.service';
import { Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';
import { LoginService } from '../login/service/login.service';
import { PreloaderService } from '../services/preloader.service';
import { Registration } from '../registration/model/registration.model';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  homeRequestModel: any = {};
  homeModel: Registration = new Registration();
  admin: boolean = false;
  totalUsersArr: string = '';
  totalUsers: any = '';

  constructor(
    private webService: WebService,
    private router: Router,
    private notificationService: NotificationService,
    private loginService: LoginService,
    private preloaderService: PreloaderService,
    private messageService: MessageService
  ){}

  ngOnInit(){
    this.admin = this.loginService.admin;
    this.getData(); 
  }

  getData(){
    let homeRequestModel = JSON.parse(JSON.stringify(this.homeRequestModel));
    homeRequestModel.user_id = this.loginService.user_id;
    homeRequestModel.method = 'GET';
    homeRequestModel.admin = this.loginService.admin;
    this.preloaderService.show();
    this.webService.postApi(UrlConstants.HOME, homeRequestModel).subscribe((res: any)=>{
      this.preloaderService.hide();
      if(res.STATUS == 'OK'){
        this.totalUsersArr = res.data;
        this.totalUsers = this.totalUsersArr.length;   
      } else {
        
      }
    });
  }
  
  onClickUser(i) {
    this.messageService.sendMsg({channel: this.messageService.userDetails, message: this.totalUsersArr[i]});
  }

  mapData(resArray, outputArray){
    resArray.forEach(element => {
      let obj = {};
      for (const key in element) {
        if (Object.prototype.hasOwnProperty.call(element, key)) {
          obj[key] = element[key];          
        }
      }
      outputArray.push(obj);
    });
    return outputArray;
  }
}
