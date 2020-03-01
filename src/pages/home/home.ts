import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpServiceProvider } from '../../providers/http-service/http-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  private service : any;
  private url : string = 'URL을 넣어주세요';
  private result : string = 'empty';

  constructor(public navCtrl: NavController,
    public httpServiceProvider: HttpServiceProvider
  ) {
      this.service = httpServiceProvider;
  }

  get(url) {
    this.service.get(url);
  }

}
