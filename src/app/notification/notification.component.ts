import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NotificationService } from '../services/notification.service';
import { NotificationModel } from './model/notification.model';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})

export class NotificationComponent implements OnInit, OnDestroy, AfterViewInit {

  subscription: any = '';
  notificationFlag: boolean = false;
  notificationObj: any = {};

  constructor(
    private notificationService: NotificationService
  ) {
    this.subscription = this.notificationService.getAlert().subscribe((res)=>{
      this.notificationFlag = true;
      this.notificationObj.type = res.type;
      this.notificationObj.message = res.message;
      setTimeout(() => { 
         this.closeNotification();
      }, 2000);
    });
   }

  ngOnInit() {

  }

  ngAfterViewInit(): void {

  }

  closeNotification(){
    this.notificationObj.type = '';
    this.notificationObj.message = '';
    this.notificationFlag = false;
  }

  ngOnDestroy() {
    if (this.subscription)
      this.subscription.unsubscribe();
  }

}
