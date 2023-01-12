import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  PowerRequirementTemporaryModel, PowerRequirementExhibitionModel,
  PowerRequirementTemporaryDetailsModel, PowerRequirementExhibitionDetailsModel,
  PowerRequirementTemporaryRequestModel, PowerRequirementExhibitionRequestModel
} from './model/power-requirement.model';
import { UrlConstants } from 'src/app/constants/urlConstants';
import { WebService } from 'src/app/services/webservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationService } from '../services/notification.service';
import { LoginService } from '../login/service/login.service';
import { PreloaderService } from '../services/preloader.service';
import { PowerRequirementConstants } from './constants/power-requirement.constants';
import { CustomvalidationService } from '../services/customvalidation.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-power-requirement',
  templateUrl: './power-requirement.component.html',
  styleUrls: ['./power-requirement.component.css']
})
export class PowerRequirementComponent implements OnInit {

  PowerRequirementTemporaryDetailsModel: any = null;
  PowerRequirementExhibitionDetailsModel: any = null;
  PowerRequirementTemporaryForm: Array<object> = PowerRequirementConstants.powerRequirementTemporary;
  PowerRequirementExhibitionForm: Array<object> = PowerRequirementConstants.powerRequirementExhibiton;
  PowerRequirementTemporaryArr: Array<object> = [];
  PowerRequirementTemporaryArrCopy: Array<object> = [];
  PowerRequirementExhibitionArr: Array<object> = [];
  PowerRequirementExhibitionArrCopy: Array<object> = [];
  PowerRequirementTemporaryRequest: PowerRequirementTemporaryRequestModel = new PowerRequirementTemporaryRequestModel();
  PowerRequirementExhibitionRequest: PowerRequirementExhibitionRequestModel = new PowerRequirementExhibitionRequestModel();


  tempArray: Array<object> = Array<object>();

  //[{name: 'Name', quantity:0, rate:0}, {name: 'Name', quantity:0, rate:0}];

  total: string = '';
  GST: number = 0.18;
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

  indexTracker(index: number) {
    return index;
  }

  ngOnInit(): void {
    if (this.loginService.admin) {
      this.messageService.getMsg(this.messageService.userDetails).subscribe(res => {
        this.user_id = res.message.user_id;
        this.validateSequence();
      });
    } else {
      this.user_id = this.loginService.user_id;
      this.validateSequence();
    }
  }

  validateSequence() {
    let status = false;
    this.requestModel = {};
    this.requestModel.user_id = this.user_id;
    this.requestModel.method = 'GET';
    this.requestModel.data = [];
    this.webService.postApi(UrlConstants.FASCIA, this.requestModel).subscribe((res: any) => {
      if (res.STATUS == 'OK') {
        this.getData();
      } else {
        this.notificationService.danger('Fascia Name not found, please fill & submit \'Fascia Name\' to continue');
        setTimeout(() => {
          this.router.navigate(['../fascia'], { relativeTo: this.activatedRoute })
        }, 3000);
      }
    });
  }

  getData() {
    this.PowerRequirementTemporaryArrCopy = [];
    this.PowerRequirementExhibitionArrCopy = [];
    this.preloaderService.show();
    let PowerRequirementReqModel: any = {};
    PowerRequirementReqModel.user_id = this.user_id;
    PowerRequirementReqModel.method = 'GET';
    PowerRequirementReqModel.data = [];
    this.webService.postApi(UrlConstants.POWER_REQUIREMENT_TEMPORARY, PowerRequirementReqModel).subscribe((res: any) => {
      this.preloaderService.hide();
      if (res.STATUS == 'OK') {
        if (res.data.length > 0) {
          this.PowerRequirementTemporaryArrCopy = res.data;
        } else {
        }
      } else {
      }
      this.webService.postApi(UrlConstants.POWER_REQUIREMENT_EXHIBITION, PowerRequirementReqModel).subscribe((res: any) => {
        this.preloaderService.hide();
        if (res.STATUS == 'OK') {
          if (res.data.length > 0) {
            this.PowerRequirementExhibitionArrCopy = res.data;
            this.processData();
          } else {
            this.processData();
          }
        } else {
          this.processData();
        }
      });
    });
  }

  processData() {
    if (this.PowerRequirementTemporaryArrCopy.length == 0 && this.PowerRequirementExhibitionArrCopy.length == 0) {
      this.notificationService.danger('No power requirements found, plese fill power requirement to proceed to next step \'Exhibitor Badge\'');
    }
    this.tempArray.push({ name: 'Name', quantity: 0, rate: 0 });
    this.tempArray.push({ name: 'Name', quantity: 0, rate: 0 });
    this.PowerRequirementTemporaryForm.forEach((element, i) => {
      this.PowerRequirementTemporaryDetailsModel = null;
      this.PowerRequirementTemporaryDetailsModel = new PowerRequirementTemporaryDetailsModel();
      let property = element['code'];
      let tempObj = {};
      this.PowerRequirementTemporaryDetailsModel.slNo = i + 1;
      this.PowerRequirementTemporaryDetailsModel.display = element['display'];
      this.PowerRequirementTemporaryDetailsModel.chargesPerKwPerDay = element['chargesPerKwPerDay'];
      this.PowerRequirementTemporaryDetailsModel.code = element['code'];
      if (this.PowerRequirementTemporaryArrCopy[i]) {
        this.PowerRequirementTemporaryDetailsModel.quantity = this.PowerRequirementTemporaryArrCopy[i]['quantity'];
        this.PowerRequirementTemporaryDetailsModel.numberOfDays = this.PowerRequirementTemporaryArrCopy[i]['numberOfDays'];
        this.PowerRequirementTemporaryDetailsModel.rate = this.PowerRequirementTemporaryArrCopy[i]['rate'];
      } else {
        this.PowerRequirementTemporaryDetailsModel.numberOfDays = element['numberOfDays'];
        this.PowerRequirementTemporaryDetailsModel.rate = element['rate'];
      }
      tempObj[property] = this.PowerRequirementTemporaryDetailsModel;
      this.PowerRequirementTemporaryArr.push(this.PowerRequirementTemporaryDetailsModel);
    });
    this.PowerRequirementExhibitionForm.forEach((element, i) => {
      this.PowerRequirementExhibitionDetailsModel = null;
      this.PowerRequirementExhibitionDetailsModel = new PowerRequirementExhibitionDetailsModel();
      let property = element['code'];
      let tempObj = {};
      this.PowerRequirementExhibitionDetailsModel.slNo = i + 1;
      this.PowerRequirementExhibitionDetailsModel.display = element['display'];
      this.PowerRequirementExhibitionDetailsModel.code = element['code'];
      this.PowerRequirementExhibitionDetailsModel.chargesPerKw4Day = element['chargesPerKw4Day'];
      if (this.PowerRequirementExhibitionArrCopy[i]) {
        this.PowerRequirementExhibitionDetailsModel.typeOfSpace = this.PowerRequirementExhibitionArrCopy[i]['typeOfSpace'];
        this.PowerRequirementExhibitionDetailsModel.phaseType = this.PowerRequirementExhibitionArrCopy[i]['phaseType'];
        this.PowerRequirementExhibitionDetailsModel.quantity = this.PowerRequirementExhibitionArrCopy[i]['quantity'];
        this.PowerRequirementExhibitionDetailsModel.quantity = this.PowerRequirementExhibitionArrCopy[i]['quantity'];
        this.PowerRequirementExhibitionDetailsModel.rate = this.PowerRequirementExhibitionArrCopy[i]['rate'];
      } else {
        this.PowerRequirementExhibitionDetailsModel.typeOfSpace = element['typeOfSpace'];
        this.PowerRequirementExhibitionDetailsModel.phaseType = element['phaseType'];
        this.PowerRequirementExhibitionDetailsModel.quantity = element['quantity'];
        this.PowerRequirementExhibitionDetailsModel.quantity = element['quantity'];
        this.PowerRequirementExhibitionDetailsModel.rate = element['rate'];
      }
      tempObj[property] = this.PowerRequirementExhibitionDetailsModel;
      this.PowerRequirementExhibitionArr.push(this.PowerRequirementExhibitionDetailsModel);
    });
  }

  modelChanged(event, formName, i) {
    let qty = 0;
    let totalDays = 0;
    let chargesPerDay = 0;
    if (formName == 'powerRequirementTemporaryForm') {
      qty = this.PowerRequirementTemporaryArr[i]['quantity'];
      totalDays = this.PowerRequirementTemporaryArr[i]['numberOfDays'];
      chargesPerDay = this.PowerRequirementTemporaryArr[i]['chargesPerKwPerDay'];
      if (qty > 0 && chargesPerDay > 0) {
        this.PowerRequirementTemporaryArr[i]['rate'] = ((Number(chargesPerDay) + (Number(chargesPerDay) * Number(this.GST))) * Number(qty) * Number(totalDays));
      } else {
        this.PowerRequirementTemporaryArr[i]['rate'] = 0;
      }
    } else if (formName == 'PowerRequirementExhibitionForm') {
      qty = this.PowerRequirementExhibitionArr[i]['quantity'];
      chargesPerDay = this.PowerRequirementExhibitionArr[i]['chargesPerKw4Day'];
      if (qty > 0 && chargesPerDay > 0) {
        this.PowerRequirementExhibitionArr[i]['rate'] = ((Number(chargesPerDay) + (Number(chargesPerDay) * Number(this.GST))) * Number(qty));
      } else {
        this.PowerRequirementExhibitionArr[i]['rate'] = 0;
      }
    }
  }

  onSubmitPowerRequirementTemporary() {
    if (this.PowerRequirementTemporaryArr[0]['quantity'] < 1) {
      this.notificationService.danger("Quantity in KW should be greater than 1");
      return;
    }
    if (this.PowerRequirementTemporaryArr[0]['numberOfDays'] < 1) {
      this.notificationService.danger("Number of days should be greater than 1");
      return;
    }
    this.preloaderService.show();
    let PowerRequirementModel: any = {};

    PowerRequirementModel.user_id = this.loginService.user_id;
    PowerRequirementModel.method = 'POST';
    PowerRequirementModel.data = this.PowerRequirementTemporaryArr;
    this.webService.postApi(UrlConstants.POWER_REQUIREMENT_TEMPORARY, PowerRequirementModel).subscribe((res: any) => {
      this.preloaderService.hide();
      if (res.STATUS == 'OK') {
        this.notificationService.success('Details updated successfully');
      } else {
        this.notificationService.danger('Something went wrong, please try again ...!');
      }
    });
  }

  onSubmitPowerRequirementExhibition() {
    if (this.PowerRequirementExhibitionArr[0]['quantity'] < 1) {
      this.notificationService.danger("Quantity in KW should be greater than 1");
      return;
    }
    this.preloaderService.show();
    let PowerRequirementModel: any = {};
    PowerRequirementModel.user_id = this.loginService.user_id;
    PowerRequirementModel.method = 'POST';
    PowerRequirementModel.data = this.PowerRequirementExhibitionArr;
    this.notificationService.success('Details updated successfully');
    this.webService.postApi(UrlConstants.POWER_REQUIREMENT_EXHIBITION, PowerRequirementModel).subscribe((res: any) => {
      this.preloaderService.hide();
      if (res.STATUS == 'OK') {
        this.notificationService.success('Details updated successfully');
      } else {
        this.notificationService.danger('Something went wrong, please try again ...!');
      }
    });
  }

}

