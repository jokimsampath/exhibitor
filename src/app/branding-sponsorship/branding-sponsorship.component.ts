import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BrandingSponsorshipModel } from './model/branding-sponsorship.model';
import { UrlConstants } from 'src/app/constants/urlConstants';
import { WebService } from 'src/app/services/webservice.service';
import { Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';
import { LoginService } from '../login/service/login.service';
import { PreloaderService } from '../services/preloader.service';
import { BrandingSponsorshipConstants } from './constants/brandingSponsorship.Constant';

@Component({
  selector: 'app-branding-sponsorship',
  templateUrl: './branding-sponsorship.component.html',
  styleUrls: ['./branding-sponsorship.component.css']
})
export class BrandingSponsorshipComponent implements OnInit {

  
  brandingSponsorshipModel: BrandingSponsorshipModel = new BrandingSponsorshipModel();
  brandingSponsorshipModelArr = [];
  brandingSponsorshipForm: any = BrandingSponsorshipConstants.brandingSponsorshipForm;

  constructor(
    private webService: WebService,
    private router: Router,
    private notificationService: NotificationService,
    private loginService: LoginService,
    private preloaderService: PreloaderService
  ) { }

  ngOnInit(): void {
    this.brandingSponsorshipModelArr = Object.keys(this.brandingSponsorshipModel);
    this.brandingSponsorshipForm.forEach((element, index) => {
      for (let property in this.brandingSponsorshipModel) {
        if (this.brandingSponsorshipModel.hasOwnProperty(property) && '_'+element.code == property) {
          this.brandingSponsorshipModel[property].slNo = index+1;
          this.brandingSponsorshipModel[property].size = element.size;
          this.brandingSponsorshipModel[property].location = element.location;
          this.brandingSponsorshipModel[property].type = element.type;
          this.brandingSponsorshipModel[property].code = element.code;
          this.brandingSponsorshipModel[property].rate = element.rate;
        }
      }
    });
    
    console.log(this.brandingSponsorshipModel);
  }

  onClickCheckbox(){
    console.log(this.brandingSponsorshipModel);
  }

  prepareData(){

  }
  
  onSubmit(){
    this.preloaderService.show();
    let brandingSponsorshipModel: any = {};
    for (let property in this.brandingSponsorshipModel) {
      if (this.brandingSponsorshipModel.hasOwnProperty(property)) {
        brandingSponsorshipModel[property] = this.brandingSponsorshipModel[property]['checked'];
      }
    }
    brandingSponsorshipModel['user_id'] = this.loginService.user_id;
    this.webService.postApi(UrlConstants.BRANDING_OPPORTUNITIES, brandingSponsorshipModel).subscribe((res: any)=>{
      this.preloaderService.hide();
      if(res.STATUS == 'OK'){
        this.notificationService.success('Details updated successfully');
      } else {
          this.notificationService.danger('Something went wrong, please try again ...!');
      }
    });
  }

}
