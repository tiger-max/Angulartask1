import { Injectable, ɵgetModuleFactory__POST_R3__ } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataFetchServiceService {
  username: string;
  constructor(private http: HttpClient) {
  }
  public getdata(username:string): Observable<any> {
    //To get dynamic username
    console.log(`https://api.github.com/users/`+username);
    return this.http.get(`https://api.github.com/users/`+username); //pass url of API
  }
}




