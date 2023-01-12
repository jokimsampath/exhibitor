import { Injectable } from '@angular/core';
import { NotificationModel } from '../notification/model/notification.model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private subject = new Subject();

  constructor() { }

  alert(type: string, message: string) {
    this.subject.next({type: type, message: message});
  }

  getAlert(): Observable<any> {
    return this.subject.asObservable();
  }

  success(message: string) {
    this.alert("success", message);
  }

  danger(message: string) {
    this.alert("danger", message);
  }

  warning(message: string) {
    this.alert("warning", message);
  }

  clear(){
    this.subject.next({});
  }

}
