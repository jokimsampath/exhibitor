import { Component } from '@angular/core';
import { FasciaModel } from './model/fascia.model';
import { UrlConstants } from 'src/app/constants/urlConstants';
import { WebService } from 'src/app/services/webservice.service';
import { Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';
import { LoginService } from '../login/service/login.service';
import { PreloaderService } from '../services/preloader.service';
import { throwIfEmpty } from 'rxjs/operators';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-fascia',
  templateUrl: './fascia.component.html',
  styleUrls: ['./fascia.component.css']
})
export class FasciaComponent {

  fasciaModel = new FasciaModel;
  fasciaNameFoundInDB: boolean = false;
  fasciaNameInDB: string = '';
  requestModel: any = {};
  user_id: any = '';

  constructor(
    private webService: WebService,
    private router: Router,
    private notificationService: NotificationService,
    private loginService: LoginService,
    private preloaderService: PreloaderService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    if (this.loginService.admin) {
      this.messageService.getMsg(this.messageService.userDetails).subscribe(res =>{
        this.user_id = res.message.user_id;
        this.getData();
      });
    } else {
      this.user_id = this.loginService.user_id;
      this.getData();
    }
  }

  getData() {
    this.requestModel = {};
    this.requestModel.user_id = this.user_id;
    this.requestModel.method = 'GET';
    this.requestModel.data = [];
    this.preloaderService.show();
    this.webService.postApi(UrlConstants.FASCIA, this.requestModel).subscribe((res: any) => {
      this.preloaderService.hide();
      if (res.STATUS == 'OK') {
        if (res.message == 'Fascia Name found') {
          if (this.loginService.admin) {

          } else {
            this.notificationService.success('Fascia Name found, please proceed to next step \'Power Requirement\'');
          }
        } else {
          if (this.loginService.admin) {
            
          } else {
            this.notificationService.success(res.message);
          }          
        }
        this.fasciaModel.fasciaName = res.data[0].fasciaName;
        this.fasciaNameInDB = res.data[0].fasciaName;
        this.fasciaNameFoundInDB = true;
      } else {
        if (res.message == 'Fascia Name not found') {
          if (this.loginService.admin) {
            
          } else {
            this.notificationService.danger('Please fill & submit Fascia Name to proceed to next step \'Power Requirement\'');
          }          
        } else {
          if (this.loginService.admin) {
            
          } else {
            this.notificationService.danger(res.message);
          }          
        }
        this.fasciaNameFoundInDB = false;
      }
    });
  }

  onSubmit() {
    this.requestModel = {};
    this.requestModel.user_id = this.loginService.user_id;
    this.requestModel.method = 'POST';
    let fasciaName = this.fasciaModel.fasciaName.toUpperCase();
    this.requestModel.data = [{ name: fasciaName }];
    this.preloaderService.show();
    if (this.fasciaNameFoundInDB == false) {
      this.webService.postApi(UrlConstants.FASCIA, this.requestModel).subscribe((res: any) => {
        this.preloaderService.hide();
        if (res.STATUS == 'OK') {
          this.notificationService.success('Details updated successfully');
          this.fasciaNameFoundInDB = true;
          this.fasciaNameInDB = res.data[0].name;
        } else {
          this.notificationService.danger('Something went wrong, plesae try again!');
        }
      });
    } else {
      this.notificationService.danger('Fascia Name is already submitted, cannot change it.');
      this.fasciaModel.fasciaName = this.fasciaNameInDB;
    }
  }

}
