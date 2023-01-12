import { AfterViewInit, Component, OnInit } from '@angular/core';
import { VipBadgeModel } from './model/vip-badge.model';
import { UrlConstants } from 'src/app/constants/urlConstants';
import { WebService } from 'src/app/services/webservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationService } from '../services/notification.service';
import { LoginService } from '../login/service/login.service';
import { PreloaderService } from '../services/preloader.service';
import { CustomvalidationService } from '../services/customvalidation.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-vip-badge',
  templateUrl: './vip-badge.component.html',
  styleUrls: ['./vip-badge.component.css']
})
export class VipBadgeComponent implements OnInit {

  vipBadgeModel: VipBadgeModel = new VipBadgeModel();
  vipBadgeModelArr = [];
  vipBadgeModelArrCopy = [];
  tempArray: any = [];
  finalArray: any = [];
  requestModel: any = {};
  user_id: any = '';

  constructor(
    private webService: WebService,
    private router: Router,
    private notificationService: NotificationService,
    private loginService: LoginService,
    private preloaderService: PreloaderService,
    private customvalidationService: CustomvalidationService,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    if (this.loginService.admin) {
      this.messageService.getMsg(this.messageService.userDetails).subscribe(res =>{
        this.user_id = res.message.user_id;
        //this.validateSequence();
        this.getData();
      });
    } else {
      this.user_id = this.loginService.user_id;
      //this.validateSequence();
      this.getData();
    }
  }


getData() {
  this.preloaderService.show();
  let vipBadgeReqModel: any = {};
  vipBadgeReqModel.user_id = this.user_id;
  vipBadgeReqModel.method = 'GET';
  vipBadgeReqModel.data = [];
  this.webService.postApi(UrlConstants.VIP_BADGE, vipBadgeReqModel).subscribe((res: any) => {
    this.preloaderService.hide();
    if (res.STATUS == 'OK') {
      if (res.data.length > 0) {
        this.notificationService.success(res.message);
        this.vipBadgeModelArrCopy = res.data;
        this.processData();
      } else {
        this.notificationService.danger(res.message);
        this.processData();
      }
    } else {
      this.notificationService.danger(res.message);
      this.processData();
    }
  });
}

processData() {
  this.vipBadgeModelArr = [];
  for (let i = 0; i < 30; i++) {
    let vipBadgeModel = JSON.parse(JSON.stringify(this.vipBadgeModel));
    vipBadgeModel.slNo = i + 1;
    if (this.vipBadgeModelArrCopy.length > 0) {
      if (this.vipBadgeModelArrCopy[i]) {
        this.vipBadgeModelArr[i] = this.vipBadgeModelArrCopy[i];
        this.vipBadgeModelArr[i].slNo = i + 1;
      } else {
        this.vipBadgeModelArr[i] = vipBadgeModel;
      }
    } else {
      this.vipBadgeModelArr[i] = vipBadgeModel;
    }
  }
}

filterData() {
  this.finalArray = [];
  if (this.tempArray.length > 0) {
    this.finalArray = this.tempArray.filter(element => element.status === '0');
  }
  return this.finalArray;
}

onSubmit() {
  this.preloaderService.show();
  let vipBadgeReqModel: any = {};
  this.tempArray = [];
  this.vipBadgeModelArr.forEach(element => {
    if (element.standPersonName !== "" && element.email !== "" && element.phone !== "" && element.companyName !== "" && element.country !== "" && element.status == '0') {
      this.tempArray.push(element);
    }
  });
  if (this.tempArray.length < 1) {
    this.notificationService.warning('Please fill the complete badge details and submit...!');
  } else {
    vipBadgeReqModel.user_id = this.loginService.user_id;
    vipBadgeReqModel.method = 'POST';
    vipBadgeReqModel.data = this.tempArray;
    this.webService.postApi(UrlConstants.VIP_BADGE, vipBadgeReqModel).subscribe((res: any) => {
      this.preloaderService.hide();
      if (res.STATUS == 'OK') {
        this.notificationService.success('Details updated successfully');
        this.ngOnInit();
      } else {
        this.notificationService.danger('Something went wrong, please try again ...!');
      }
    });
  }
}

}
