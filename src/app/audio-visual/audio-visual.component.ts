import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AudioVisualModel } from './model/audio-visual.model';
import { UrlConstants } from 'src/app/constants/urlConstants';
import { WebService } from 'src/app/services/webservice.service';
import { Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';
import { LoginService } from '../login/service/login.service';
import { PreloaderService } from '../services/preloader.service';
import { AudioVisualConstants } from './constants/audioVisual.constants';

@Component({
  selector: 'app-audio-visual',
  templateUrl: './audio-visual.component.html',
  styleUrls: ['./audio-visual.component.css']
})
export class AudioVisualComponent implements OnInit {

  AudioVisualModel: AudioVisualModel = new AudioVisualModel();
  AudioVisualModelArr = [];
  AudioVisualModelArrCopy = [];
  AudioVisualForm: any = AudioVisualConstants.AudioVisualForm;
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
    this.webService.postApi(UrlConstants.AUDIO_VISUAL, AudioVisualReqModel).subscribe((res: any) => {
      this.preloaderService.hide();
      this.AudioVisualModelArrCopy = [];
      if (res.STATUS == 'OK') {
        if (res.data.length > 0) {
          this.AudioVisualModelArrCopy = res.data;
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
    this.AudioVisualModelArr = Object.keys(this.AudioVisualModel);
    this.AudioVisualForm.forEach((element, index) => {
      for (let property in this.AudioVisualModel) {
        if (this.AudioVisualModel.hasOwnProperty(property) && '_'+element.code == property) {
          this.AudioVisualModel[property].slNo = index+1;
          this.AudioVisualModel[property].particulars = element.particulars;
          this.AudioVisualModel[property].qty = element.qty;
          this.AudioVisualModel[property].rate = element.rate;
          if(this.AudioVisualModelArrCopy.length > 0){
            this.AudioVisualModel[property].checked = (this.AudioVisualModelArrCopy[0][property] == '1') ? true : false;
            this.AudioVisualModel[property].active = (this.AudioVisualModelArrCopy[0][property] == '1') ? true : false;
          } else {

          }
        }
      }
    });
  }
  
  onSubmit(){
    this.preloaderService.show();
    let AudioVisualModel: any = {};
    let AudioVisualReqModel: any = {};
    this.tempArray = [];
    for (let property in this.AudioVisualModel) {
      if (this.AudioVisualModel.hasOwnProperty(property)) {
        AudioVisualModel[property] = (this.AudioVisualModel[property]['checked'])? '1' : '0';
      }
    }
    this.tempArray.push(AudioVisualModel);
    AudioVisualReqModel.user_id = this.loginService.user_id;
    AudioVisualReqModel.method = 'POST';
    AudioVisualReqModel.data = this.tempArray;
    this.webService.postApi(UrlConstants.AUDIO_VISUAL, AudioVisualReqModel).subscribe((res: any)=>{
      this.preloaderService.hide();
      if(res.STATUS == 'OK'){
        this.notificationService.success('Details updated successfully');
      } else {
          this.notificationService.danger('Something went wrong, please try again ...!');
      }
    });
  }

}



