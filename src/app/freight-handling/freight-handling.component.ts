import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  SeaFreightHandlingModel, AirFreightHandlingModel,
  OnsiteHandling2000kgModel, OnsiteHandling3000kgModel,
  HireEquipmentsModel, HeavyLiftSurchargesModel
} from './model/freight-handling.model';
import { UrlConstants } from 'src/app/constants/urlConstants';
import { WebService } from 'src/app/services/webservice.service';
import { Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';
import { LoginService } from '../login/service/login.service';
import { PreloaderService } from '../services/preloader.service';
import { FreightHandlingConstants } from './constants/freight-handling.constants';

@Component({
  selector: 'app-freight-handling',
  templateUrl: './freight-handling.component.html',
  styleUrls: ['./freight-handling.component.css']
})
export class FreightHandlingComponent implements OnInit {

  seaFreightHandlingModel: SeaFreightHandlingModel = new SeaFreightHandlingModel();
  airFreightHandlingModel: AirFreightHandlingModel = new AirFreightHandlingModel();
  onsiteHandling2000kgModel: OnsiteHandling2000kgModel = new OnsiteHandling2000kgModel();
  onsiteHandling3000kgModel: OnsiteHandling3000kgModel = new OnsiteHandling3000kgModel();
  hireEquipmentsModel: HireEquipmentsModel = new HireEquipmentsModel();
  heavyLiftSurchargesModel: HeavyLiftSurchargesModel = new HeavyLiftSurchargesModel();

  seaFreightHandlingForm: any = FreightHandlingConstants.seaFreight;
  airFreightHandlingForm: any = FreightHandlingConstants.airFreight;
  onsiteHandling2000kgForm: any = FreightHandlingConstants.onsiteHandling2000kg;
  onsiteHandling3000kgForm: any = FreightHandlingConstants.onsiteHandling3000kg;
  hireEquipmentsForm: any = FreightHandlingConstants.hireEquipments;
  heavyLiftSurchargesForm: any = FreightHandlingConstants.heavyLiftSurcharges;

  modelsAndForms: any = [
    { model: 'seaFreightHandlingModel',   form: 'seaFreightHandlingForm',   url: 'seaFreight'  },
    { model: 'airFreightHandlingModel',   form: 'airFreightHandlingForm',   url: 'airFreight' },
    { model: 'onsiteHandling2000kgModel', form: 'onsiteHandling2000kgForm', url: 'onsiteHandling2000kg' },
    { model: 'onsiteHandling3000kgModel', form: 'onsiteHandling3000kgForm', url: 'onsiteHandling3000kg' },
    { model: 'hireEquipmentsModel',       form: 'hireEquipmentsForm',       url: 'hireEquipments' },
    { model: 'heavyLiftSurchargesModel',  form: 'heavyLiftSurchargesForm',  url: 'heavyLiftSurcharges' }
  ];

  constructor(
    private webService: WebService,
    private router: Router,
    private notificationService: NotificationService,
    private loginService: LoginService,
    private preloaderService: PreloaderService
  ) { }

  ngOnInit(): void {
    let model: any = {};
    let form: any = [];
    this.modelsAndForms.forEach(ele => {
      model = this[ele.model];
      form = this[ele.form];
      form.forEach((element, index) => {
        for (let property in model) {
          if (model.hasOwnProperty(property) && '_' + element.code == property) {
            model[property].slNo = index + 1;
            model[property].description = element.description;
            model[property].rate = element.rate;
            model[property].code = element.code;
            model[property].checked = true;
            if (ele.form == 'hireEquipmentsForm') {
              model[property].capacity = element.capacity;
            }
          }
        }
      });
    });
  }

  onClickCheckbox() {
  }

  prepareData() {

  }

  onSubmit(formName: string) {
    let model: any = {};
    let reqModel: any = {};
    let url: string = '';
    this.modelsAndForms.forEach(element => {
      if (element.form == formName) {
        model = this[element.model];
        url = element.url+'.php';
      }
    });
    for (let property in model) {
      if (model.hasOwnProperty(property)) {
        reqModel[property] = model[property]['checked'];
      }
    }
    this.preloaderService.show();
    reqModel = JSON.parse(JSON.stringify(reqModel))
    reqModel['user_id'] = this.loginService.user_id;
    this.webService.postApi(url, reqModel).subscribe((res: any) => {
      this.preloaderService.hide();
      if (res.STATUS == 'OK') {
        this.notificationService.success('Details updated successfully');
      } else {
        this.notificationService.danger('Something went wrong, please try again ...!');
      }
    });
  }

}




