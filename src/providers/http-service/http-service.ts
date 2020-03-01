import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

/*
  Generated class for the HttpServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello HttpServiceProvider Provider');
  }

  public observable: Observable<Object>;
  public data:any;
  public dataToString:string = 'empty';
  
  get(url) {
    return new Promise(resolve => {
      this.observable = this.http.get(url);
      this.observable.subscribe(data => {
        resolve(data);
      });
    }).then(data => {

      this.dataToString = JSON.stringify(data); // 문자열 변환
      this.data = data // 데이터 받기

    });
  }

}
