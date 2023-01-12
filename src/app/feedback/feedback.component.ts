import { AfterViewInit, Component, OnInit } from '@angular/core';
import { UrlConstants } from 'src/app/constants/urlConstants';
import { WebService } from 'src/app/services/webservice.service';
import { Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';
import { LoginService } from '../login/service/login.service';
import { PreloaderService } from '../services/preloader.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedbackModel: any = {feedback:''};

  constructor(
    private webService: WebService,
    private router: Router,
    private notificationService: NotificationService,
    private loginService: LoginService,
    private preloaderService: PreloaderService
  ) { }

  ngOnInit(): void {
  }

  onChange(){

  }
  
  onSubmit() {
    this.notificationService.danger('Something went wrong, plesae try again!');
    return;
    let feedbackModel = JSON.parse(JSON.stringify(this.feedbackModel));
    feedbackModel.user_id = this.loginService.user_id;
    feedbackModel.method = 'POST';
    this.preloaderService.show();
    this.webService.postApi(UrlConstants.FEEDBACK, feedbackModel).subscribe((res: any)=>{
      this.preloaderService.hide();
      if(res.STATUS == 'OK'){
        this.notificationService.success('Feedback submitted successfully');
      } else {
        this.notificationService.danger('Something went wrong, plesae try again!');
      }
    });
  }
}
