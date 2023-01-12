import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AdvertisementModel } from './model/advertisement.model';
import { UrlConstants } from 'src/app/constants/urlConstants';
import { WebService } from 'src/app/services/webservice.service';
import { Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';
import { LoginService } from '../login/service/login.service';
import { PreloaderService } from '../services/preloader.service';
import { AdvertisementConstants } from './constants/advertisement.constants';

@Component({
  selector: 'app-advertisements',
  templateUrl: './advertisements.component.html',
  styleUrls: ['./advertisements.component.css']
})
export class AdvertisementsComponent implements OnInit {

  AdvertisementModel: AdvertisementModel = new AdvertisementModel();
  AdvertisementModelArr = [];
  AdvertisementModelArrCopy = [];
  AdvertisementForm: any = AdvertisementConstants.advertisementForm;
  tempArray: any = [];
  finalArray: any = [];

  constructor(
    private webService: WebService,
    private router: Router,
    private notificationService: NotificationService,
    private loginService: LoginService,
    private preloaderService: PreloaderService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.preloaderService.show();
    let AdvertisementReqModel: any = {};
    AdvertisementReqModel.user_id = this.loginService.user_id;
    AdvertisementReqModel.method = 'GET';
    AdvertisementReqModel.data = [];
    this.webService.postApi(UrlConstants.ADVERTISEMENT, AdvertisementReqModel).subscribe((res: any) => {
      this.preloaderService.hide();
      this.AdvertisementModelArrCopy = [];
      if (res.STATUS == 'OK') {
        if (res.data.length > 0) {
          this.AdvertisementModelArrCopy = res.data;
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
    this.AdvertisementModelArr = Object.keys(this.AdvertisementModel);
    this.AdvertisementForm.forEach((element, index) => {
      for (let property in this.AdvertisementModel) {
        if (this.AdvertisementModel.hasOwnProperty(property) && '_'+element.code == property) {
          this.AdvertisementModel[property].slNo = index+1;
          this.AdvertisementModel[property].code = element.code;
          this.AdvertisementModel[property].type = element.type;
          this.AdvertisementModel[property].rateInr = element.rateInr;
          this.AdvertisementModel[property].rateUsd = element.rateUsd;
          if(this.AdvertisementModelArrCopy.length > 0){
            this.AdvertisementModel[property].checked = (this.AdvertisementModelArrCopy[0][property] == '1') ? true : false;
            this.AdvertisementModel[property].active = (this.AdvertisementModelArrCopy[0][property] == '1') ? true : false;
          } else {

          }
        }
      }
    });
  }

  onSubmit(){
    this.preloaderService.show();
    let AdvertisementModel: any = {};
    let AdvertisementReqModel: any = {};
    this.tempArray = [];
    for (let property in this.AdvertisementModel) {
      if (this.AdvertisementModel.hasOwnProperty(property)) {
        AdvertisementModel[property] = (this.AdvertisementModel[property]['checked'])? '1' : '0';
      }
    }
    this.tempArray.push(AdvertisementModel);
    AdvertisementReqModel.user_id = this.loginService.user_id;
    AdvertisementReqModel.method = 'POST';
    AdvertisementReqModel.data = this.tempArray;
    this.webService.postApi(UrlConstants.ADVERTISEMENT, AdvertisementReqModel).subscribe((res: any)=>{
      this.preloaderService.hide();
      if(res.STATUS == 'OK'){
        this.notificationService.success('Details updated successfully');
      } else {
          this.notificationService.danger('Something went wrong, please try again ...!');
      }
    });
  }

}
