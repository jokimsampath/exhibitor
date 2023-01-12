import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  //Development Env.

  /* baseUrl: string = "exhibitor/php/"; */

  //Production Env.

  /* baseUrl: string = "php/"; */

  apiURL = environment.apiURL;

  constructor(
    private httpClient: HttpClient
  ) { }

  postApi(url: string, param: any, options?:{}){
    return this.httpClient.post(this.apiURL+url, param, options)
  }

}
