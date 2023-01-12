import { AfterViewInit, Component, OnInit } from '@angular/core';
import { UrlConstants } from 'src/app/constants/urlConstants';
import { WebService } from 'src/app/services/webservice.service';
import { Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';
import { PreloaderService } from '../services/preloader.service';
import { Registration } from '../registration/model/registration.model';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-import-users',
  templateUrl: './import-users.component.html',
  styleUrls: ['./import-users.component.css']
})
export class ImportUsersComponent implements OnInit {

  importUsersFile: File = null;
  importUsersFileName: string = 'Choose a File';
  importUsersFileData: any = [];
  registrationReqModel = new Registration();
  tempArray: any = [];
  finalArray: any = [];

  constructor(
    private webService: WebService,
    private router: Router,
    private notificationService: NotificationService,
    private preloaderService: PreloaderService
  ) { }

  ngOnInit(): void {
  }

  onChange(event) {
    this.importUsersFile = event.target.files[0];
    this.importUsersFileName = this.importUsersFile.name;
    if (this.validateFile(this.importUsersFile)) {
      /* wire up file reader */
      const target: DataTransfer = <DataTransfer>(event.target);
      if (target.files.length !== 1) {
        this.notificationService.danger('Pleae select a valid Excel file Cannot use multiple files');
      }
      const reader: FileReader = new FileReader();
      reader.readAsBinaryString(target.files[0]);
      reader.onload = (e: any) => {
        /* create workbook */
        const binarystr: string = e.target.result;
        const wb: XLSX.WorkBook = XLSX.read(binarystr, { type: 'binary' });

        /* selected the first sheet */
        const wsname: string = wb.SheetNames[0];
        const ws: XLSX.WorkSheet = wb.Sheets[wsname];

        /* save data */
       this.importUsersFileData = XLSX.utils.sheet_to_json(ws); // to get 2d array pass 2nd parameter as object {header: 1}
         // Data will be logged in array format containing objects
      };
    } else {
      this.notificationService.danger('Pleae select a valid Excel file');
      this.importUsersFile = null;
      this.importUsersFileName = '';
    }
  }

  validateFile(importUsersFile: any) {
    this.preloaderService.show();
    if (importUsersFile.name.endsWith('.xlx') || importUsersFile.name.endsWith('.xlsx')) {
      this.preloaderService.hide();
      return true
    } else {
      return false;
    }
  }

  onUpload() {
    this.tempArray = [];
    if (!this.importUsersFile) {
      this.notificationService.danger('Pleae select a valid Excel file');
      this.importUsersFile = null;
      this.importUsersFileName = '';
    } else {
      this.importUsersFileData.forEach(element => {
        let registrationReqModel = new Registration();
        registrationReqModel.email = element['Email'];
        registrationReqModel.password = element['Password'];
        registrationReqModel.confirmPassword = element['Password'];
        registrationReqModel.address = element['Name and Address of the Exhibitor'];
        registrationReqModel.name = element['Contact Person'];
        this.tempArray.push(registrationReqModel);
      });
      this.importUsers();
    }
  }

  importUsers() {
    this.preloaderService.show();
    this.webService.postApi(UrlConstants.IMPORT_USERS, this.tempArray).subscribe((res: any)=>{
      this.preloaderService.hide();
      if(res.STATUS == 'OK'){
        this.notificationService.success('Registration successfull, please login');
        /* setTimeout(() => {
          this.router.navigate(['/login']);
        }, 1000); */
      } else {
        this.notificationService.danger(res.message);
      }
    });
  }

}
