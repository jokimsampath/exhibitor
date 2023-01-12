import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginService } from '../login/service/login.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css'],
})
export class AsideComponent {
  constructor(
    private loginService: LoginService,
    private messageService: MessageService
  ) {}
  exhibitorDetails: any = [];
  exhibitorName: string = '';
  admin: boolean = false;

  ngOnInit() {
    this.admin = this.loginService.admin;
    this.messageService
      .getMsg(this.messageService.exhibitorDetails)
      .subscribe((res) => {
        this.exhibitorDetails = res.message[0];
        this.exhibitorName = this.exhibitorDetails.exhibitorName;
      });
  }
}
