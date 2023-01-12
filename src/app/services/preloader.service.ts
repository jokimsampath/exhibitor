import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PreloaderService {

  private behaviorSubject = new BehaviorSubject<any>(false);
  isLoadingNonHTTP = new Subject<boolean>();
  isLoading = new Subject<boolean>();

  constructor() { }

  show(){
    this.isLoading.next(true);
  }

  hide(){
    this.isLoading.next(false);
  }
  
 /*  getLoader(){
    return this.isLoadingNonHTTP.asObservable();
  } */
  getLoader(): Observable<any>{
    return this.behaviorSubject.asObservable();
  }
}
