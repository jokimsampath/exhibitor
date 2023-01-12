import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { PreloaderService } from '../services/preloader.service';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.css']
})
export class PreloaderComponent {

  isLoading: any  = false;
  isLoadingNonHTTP: any = false;

  constructor( private preloaderService: PreloaderService ){ }

  ngOnInit(){
    this.preloaderService.getLoader().subscribe((res)=>{
      if(res){
        this.isLoadingNonHTTP = true;
        console.log(res);
      }
    })
  }

}
