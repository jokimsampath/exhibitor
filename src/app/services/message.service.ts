import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private behaviorSubject = new BehaviorSubject<any>({channel:'initializaion', message:'init'});
  exhibitorDetails: string = 'exhibitorDetails';
  userDetails: string = 'userDetails';
  isLoading = new Subject<boolean>();

  constructor() { }

  sendMsg(msg){
    this.behaviorSubject.next(msg)
  }

  getMsg(_channel): Observable<any>{
    return this.behaviorSubject.asObservable().pipe(filter((msg)=>(msg.channel==_channel)))
  }

}
