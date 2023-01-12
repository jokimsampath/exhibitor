import { Component } from '@angular/core';
import { Registration } from './model/registration.model';
import { UrlConstants } from 'src/app/constants/urlConstants';
import { WebService } from 'src/app/services/webservice.service';
import { Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';
import { PreloaderService } from '../services/preloader.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  registrationRequest = new Registration();
  
  constructor(
    private webService: WebService,
    private router: Router,
    private notificationService: NotificationService,
    private preloaderService: PreloaderService
  ){}

  ngOnInit(){}

  registration() {
    this.preloaderService.show();
    this.webService.postApi(UrlConstants.REGISTRATION, this.registrationRequest).subscribe((res: any)=>{
      this.preloaderService.hide();
      if(res.STATUS == 'OK'){
        this.notificationService.success('Registration successfull, please login');
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 1000);
      } else {
        this.notificationService.danger(res.message);
      }
    });
  }

}
