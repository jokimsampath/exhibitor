import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ExhibitorBadgeModel } from './model/exhibitor-badge.model';
import { UrlConstants } from 'src/app/constants/urlConstants';
import { WebService } from 'src/app/services/webservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationService } from '../services/notification.service';
import { LoginService } from '../login/service/login.service';
import { PreloaderService } from '../services/preloader.service';
import { CustomvalidationService } from '../services/customvalidation.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-exhibitor-badge',
  templateUrl: './exhibitor-badge.component.html',
  styleUrls: ['./exhibitor-badge.component.css'],
})
export class ExhibitorBadgeComponent implements OnInit {
  exhibitorBadgeModel: ExhibitorBadgeModel = new ExhibitorBadgeModel();
  exhibitorBadgeModelArr = [];
  exhibitorBadgeModelArrCopy = [];
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
  ) {}

  ngOnInit(): void {
    if (this.loginService.admin) {
      this.messageService
        .getMsg(this.messageService.userDetails)
        .subscribe((res) => {
          this.user_id = res.message.user_id;
          this.validateSequence();
        });
    } else {
      this.user_id = this.loginService.user_id;
      this.validateSequence();
    }
  }

  validateSequence() {
    this.requestModel = {};
    this.requestModel.user_id = this.user_id;
    this.requestModel.method = 'GET';
    this.requestModel.data = [];
    this.webService
      .postApi(UrlConstants.FASCIA, this.requestModel)
      .subscribe((res: any) => {
        if (res.STATUS == 'OK') {
          this.getData();
          /* this.webService.postApi(UrlConstants.POWER_REQUIREMENT_TEMPORARY, this.requestModel).subscribe((res: any) => {
        if (res.STATUS == 'OK') {
          this.getData();
        } else {
          this.webService.postApi(UrlConstants.POWER_REQUIREMENT_EXHIBITION, this.requestModel).subscribe((res: any) => {
            if (res.STATUS == 'OK') {
              this.getData();
            } else {
              this.notificationService.danger('Power Requirement request not found, please fill & submit \'Power Requirement\' to continue');
              setTimeout(() => {
                this.router.navigate(['../power-requirement'], { relativeTo: this.activatedRoute })
              }, 3000);
            }
          });
        }
      }); */
        } else {
          this.notificationService.danger(
            "Fascia Name not found, please fill & submit 'Fascia Name' to continue"
          );
          setTimeout(() => {
            this.router.navigate(['../fascia'], {
              relativeTo: this.activatedRoute,
            });
          }, 1000);
        }
      });
  }

  getData() {
    this.preloaderService.show();
    let ExhibitorBadgeReqModel: any = {};
    ExhibitorBadgeReqModel.user_id = this.user_id;
    ExhibitorBadgeReqModel.method = 'GET';
    ExhibitorBadgeReqModel.data = [];
    this.webService
      .postApi(UrlConstants.EXHIBITOR_BADGE, ExhibitorBadgeReqModel)
      .subscribe((res: any) => {
        this.preloaderService.hide();
        if (res.STATUS == 'OK') {
          if (res.data.length > 0) {
            this.notificationService.success(res.message);
            this.exhibitorBadgeModelArrCopy = res.data;
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
    this.exhibitorBadgeModelArr = [];
    for (let i = 0; i < 30; i++) {
      let exhibitorBadgeModel = JSON.parse(
        JSON.stringify(this.exhibitorBadgeModel)
      );
      exhibitorBadgeModel.slNo = i + 1;
      if (this.exhibitorBadgeModelArrCopy.length > 0) {
        if (this.exhibitorBadgeModelArrCopy[i]) {
          this.exhibitorBadgeModelArr[i] = this.exhibitorBadgeModelArrCopy[i];
          this.exhibitorBadgeModelArr[i].slNo = i + 1;
        } else {
          this.exhibitorBadgeModelArr[i] = exhibitorBadgeModel;
        }
      } else {
        this.exhibitorBadgeModelArr[i] = exhibitorBadgeModel;
      }
    }
  }

  filterData() {
    this.finalArray = [];
    if (this.tempArray.length > 0) {
      this.finalArray = this.tempArray.filter(
        (element) => element.status === '0'
      );
    }
    return this.finalArray;
  }

  onSubmit() {
    this.preloaderService.show();
    let ExhibitorBadgeReqModel: any = {};
    this.tempArray = [];
    this.exhibitorBadgeModelArr.forEach((element) => {
      if (
        element.standPersonName !== '' &&
        element.jobTitle !== '' &&
        element.companyName !== '' &&
        element.country !== '' &&
        element.status == '0'
      ) {
        this.tempArray.push(element);
      }
    });
    if (this.tempArray.length < 1) {
      this.notificationService.warning(
        'Please fill the complete badge details and submit...!'
      );
    } else {
      ExhibitorBadgeReqModel.user_id = this.loginService.user_id;
      ExhibitorBadgeReqModel.method = 'POST';
      ExhibitorBadgeReqModel.data = this.tempArray;
      this.webService
        .postApi(UrlConstants.EXHIBITOR_BADGE, ExhibitorBadgeReqModel)
        .subscribe((res: any) => {
          this.preloaderService.hide();
          if (res.STATUS == 'OK') {
            this.notificationService.success('Details updated successfully');
            this.ngOnInit();
          } else {
            this.notificationService.danger(
              'Something went wrong, please try again ...!'
            );
          }
        });
    }
  }
}
