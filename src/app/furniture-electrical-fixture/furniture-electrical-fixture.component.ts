import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FurnitureElectricalFixtureModel } from './model/furniture-electrical-fixture.model';
import { UrlConstants } from 'src/app/constants/urlConstants';
import { WebService } from 'src/app/services/webservice.service';
import { Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';
import { LoginService } from '../login/service/login.service';
import { PreloaderService } from '../services/preloader.service';
import { FurnitureElectricalFixtureConstants } from './constants/furniture-electrical-fixture.constants';

@Component({
  selector: 'app-furniture-electrical-fixture',
  templateUrl: './furniture-electrical-fixture.component.html',
  styleUrls: ['./furniture-electrical-fixture.component.css']
})
export class FurnitureElectricalFixtureComponent implements OnInit {

  FurnitureElectricalFixtureModel: FurnitureElectricalFixtureModel = new FurnitureElectricalFixtureModel();
  FurnitureElectricalFixtureModelArr = [];
  FurnitureElectricalFixtureModelArrCopy = [];
  FurnitureElectricalFixtureForm: any = FurnitureElectricalFixtureConstants.furnitureElectricalFixtureForm;
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
    let AudioVisualReqModel: any = {};
    AudioVisualReqModel.user_id = this.loginService.user_id;
    AudioVisualReqModel.method = 'GET';
    AudioVisualReqModel.data = [];
    this.webService.postApi(UrlConstants.FURNITURE_ELECTRICAL_FIXTURE, AudioVisualReqModel).subscribe((res: any) => {
      this.preloaderService.hide();
      this.FurnitureElectricalFixtureModelArrCopy = [];
      if (res.STATUS == 'OK') {
        if (res.data.length > 0) {
          this.FurnitureElectricalFixtureModelArrCopy = res.data;
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
    this.FurnitureElectricalFixtureModelArr = Object.keys(this.FurnitureElectricalFixtureModel);
    this.FurnitureElectricalFixtureForm.forEach((element, index) => {
      for (let property in this.FurnitureElectricalFixtureModel) {
        if (this.FurnitureElectricalFixtureModel.hasOwnProperty(property) && '_'+element.code == property) {
          this.FurnitureElectricalFixtureModel[property].slNo = index+1;
          this.FurnitureElectricalFixtureModel[property].description = element.description;
          this.FurnitureElectricalFixtureModel[property].rateInr = element.rateInr;
          if(this.FurnitureElectricalFixtureModelArrCopy.length > 0){
            this.FurnitureElectricalFixtureModel[property].checked = (this.FurnitureElectricalFixtureModelArrCopy[0][property] == '1') ? true : false;
            this.FurnitureElectricalFixtureModel[property].active = (this.FurnitureElectricalFixtureModelArrCopy[0][property] == '1') ? true : false;
          } else {

          }
        }
      }
    });
  }
  
  onSubmit(){
    this.preloaderService.show();
    let FurnitureElectricalFixtureModel: any = {};
    let FurnitureElectricalFixtureReqModel: any = {};
    this.tempArray = [];
    for (let property in this.FurnitureElectricalFixtureModel) {
      if (this.FurnitureElectricalFixtureModel.hasOwnProperty(property)) {
        FurnitureElectricalFixtureModel[property] = (this.FurnitureElectricalFixtureModel[property]['checked'])? '1' : '0';
      }
    }
    this.tempArray.push(FurnitureElectricalFixtureModel);
    FurnitureElectricalFixtureReqModel.user_id = this.loginService.user_id;
    FurnitureElectricalFixtureReqModel.method = 'POST';
    FurnitureElectricalFixtureReqModel.data = this.tempArray;
    this.webService.postApi(UrlConstants.FURNITURE_ELECTRICAL_FIXTURE, FurnitureElectricalFixtureReqModel).subscribe((res: any)=>{
      this.preloaderService.hide();
      if(res.STATUS == 'OK'){
        this.notificationService.success('Details updated successfully');
      } else {
          this.notificationService.danger('Something went wrong, please try again ...!');
      }
    });
  }

}




