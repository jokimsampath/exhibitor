import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/service/login.service';
import { NotificationService } from '../services/notification.service';
import { PreloaderService } from '../services/preloader.service';
import { WebService } from '../services/webservice.service';
import { UrlConstants } from 'src/app/constants/urlConstants';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  exhibitorDetails: any = [];

  constructor(
    private router: Router,
    private loginService: LoginService,
    private notificationService: NotificationService,
    private preloaderService: PreloaderService,
    private webService: WebService,
    private messageService: MessageService
  ){}

  ngOnInit(){
    this.getData();
  }

  getData() {
    this.preloaderService.show();
    let requestModel: any = {};
    requestModel.user_id = this.loginService.user_id;
    requestModel.method = 'GET';
    requestModel.data = [];
    this.webService.postApi(UrlConstants.USER_DETAILS, requestModel).subscribe((res: any) => {
      this.preloaderService.hide();
      if (res.STATUS == 'OK') {
        this.exhibitorDetails = res.data;
        this.loginService.exhibitorDetails = this.exhibitorDetails;
        this.messageService.sendMsg({channel: this.messageService.exhibitorDetails, message: this.exhibitorDetails});
      } else {
        this.notificationService.danger(res.message);
      }
    });
  }
}
