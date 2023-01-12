import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { PreloaderService } from './services/preloader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stona';
  constructor( private preloaderService: PreloaderService){

  }
  ngOnInit(){
    this.preloaderService.isLoadingNonHTTP.next(false);
    
  }
}
