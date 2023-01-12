import { AfterViewInit, Component, OnInit } from '@angular/core';
import { UrlConstants } from 'src/app/constants/urlConstants';
import { WebService } from 'src/app/services/webservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationService } from '../services/notification.service';
import { LoginService } from '../login/service/login.service';
import { PreloaderService } from '../services/preloader.service';
import { CustomvalidationService } from '../services/customvalidation.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  user_id: any = '';
  admin: boolean = false;

  constructor(
    private webService: WebService,
    private router: Router,
    private notificationService: NotificationService,
    private loginService: LoginService,
    private preloaderService: PreloaderService,
    private customvalidationService: CustomvalidationService,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.admin = this.loginService.admin;
    this.user_id = this.loginService.user_id;
  }

  logout() {
    this.preloaderService.show();
    let logOutModel: any = {};
    logOutModel.user_id = this.user_id;
    logOutModel.method = 'POST';
    logOutModel.data = [];
    this.webService.postApi(UrlConstants.LOGOUT, {}).subscribe((res: any) => {
      this.preloaderService.hide();
      if (res.STATUS == 'OK') {
        this.loginService.auth = false;
        this.loginService.user_id = '';
        this.router.navigate(['/login']);
      } else {
        this.notificationService.danger(
          'Something went wrong plese try again...!'
        );
      }
    });
  }
}
