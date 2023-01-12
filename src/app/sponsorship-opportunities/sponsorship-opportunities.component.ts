import { Component, OnInit } from '@angular/core';
import { SponsorshipOpportunitiesModel } from './model/sponsorship-opportunities.model';
import { SponsorshipOpportunitiesDetailsModel } from './model/sponsorship-opportunities.model';
import { UrlConstants } from 'src/app/constants/urlConstants';
import { WebService } from 'src/app/services/webservice.service';
import { Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';
import { LoginService } from '../login/service/login.service';
import { PreloaderService } from '../services/preloader.service';

@Component({
  selector: 'app-sponsorship-opportunities',
  templateUrl: './sponsorship-opportunities.component.html',
  styleUrls: ['./sponsorship-opportunities.component.css']
})
export class SponsorshipOpportunitiesComponent implements OnInit {

  sponsorshipOpportunitiesModel: SponsorshipOpportunitiesModel = new SponsorshipOpportunitiesModel();
  sponsorshipOpportunitiesDetailsModel: SponsorshipOpportunitiesDetailsModel = new SponsorshipOpportunitiesDetailsModel();
  sponsorshipOpportunitiesModelArr: any = [];
  sponsorshipOpportunitiesForm: any = [];

  constructor(
    private webService: WebService,
    private router: Router,
    private notificationService: NotificationService,
    private loginService: LoginService,
    private preloaderService: PreloaderService
  ) { }

  ngOnInit(): void {

    this.sponsorshipOpportunitiesForm = [
      { key: 'VisitorsBags', event: 'Visitors bags', noOfSponsors: '1', tarrif: '3,00,000' },
      { key: 'BrandedPens', event: 'Branded Pens', noOfSponsors: '1', tarrif: '1,50,000' },
      { key: 'ExhibitorsKits', event: 'Exhibitors Kits', noOfSponsors: '1', tarrif: '7,00,000' },
      { key: 'Lanyard', event: 'Lanyard', noOfSponsors: '1', tarrif: '15,00,000 ' },
      { key: 'Signage', event: 'Signage', noOfSponsors: '1', tarrif: '3,00,000 ' },
      { key: 'Seminar', event: 'Seminar (each)', noOfSponsors: '2', tarrif: '2,50,000 ' },
      { key: 'InformationBooths', event: 'Information booths (each)', noOfSponsors: '3', tarrif: '75,000' },
      { key: 'WaterBooths', event: 'Water booths(free water supply)', noOfSponsors: '1', tarrif: '3,00,000' },
      { key: 'GolfCarts', event: 'Golf carts ( each)', noOfSponsors: '10', tarrif: '50,000' },
      { key: 'AdvertisementFairGuide', event: 'Advertisement in fair guide (Back page)', noOfSponsors: '1', tarrif: '2,50,000' },
      { key: 'SponsorshipCdPenDrive', event: 'Sponsorship of CD / Pen drive', noOfSponsors: '1', tarrif: '1,50,000' }

    ];
    this.sponsorshipOpportunitiesModelArr = Object.keys(this.sponsorshipOpportunitiesModel);
    this.sponsorshipOpportunitiesForm.forEach((element, index) => {
      for (let property in this.sponsorshipOpportunitiesModel) {
        if (this.sponsorshipOpportunitiesModel.hasOwnProperty(property) && element.key == property) {
          this.sponsorshipOpportunitiesModel[property].slNo = index+1;
          this.sponsorshipOpportunitiesModel[property].event = element.event;
          this.sponsorshipOpportunitiesModel[property].noOfSponsors = element.noOfSponsors;
          this.sponsorshipOpportunitiesModel[property].tarrif = element.tarrif;
        }
      }
    });
  }
  onClickCheckbox(){
    console.log(this.sponsorshipOpportunitiesModel);
  }

  prepareData(){

  }
  
  onSubmit(){
    this.preloaderService.show();
    let sponsorshipOpportunitiesModel: any = {};
    for (let property in this.sponsorshipOpportunitiesModel) {
      if (this.sponsorshipOpportunitiesModel.hasOwnProperty(property)) {
        sponsorshipOpportunitiesModel[property] = this.sponsorshipOpportunitiesModel[property]['checked'];
      }
    }
    sponsorshipOpportunitiesModel['user_id'] = this.loginService.user_id;
    this.webService.postApi(UrlConstants.SPONSORSHIP_OPPORTUNITIES, sponsorshipOpportunitiesModel).subscribe((res: any)=>{
      this.preloaderService.hide();
      if(res.STATUS == 'OK'){
        this.notificationService.success('Details updated successfully');
      } else {
          this.notificationService.danger('Something went wrong, please try again ...!');
      }
    });
  }

}
