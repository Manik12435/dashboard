import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  auth: any;

  constructor(private http: HttpClient) { }//private http: HttpClient


  login(request: any){
    let URL = environment.api.login;
    return this.http.post(URL, request)//.pipe(map((response: any) => <any>response))
  }

  sample(){
    let URL = environment.api.sample;
    return this.http.get(URL, {responseType: 'json', headers: {'Authorization': this.auth}})
  }
}
