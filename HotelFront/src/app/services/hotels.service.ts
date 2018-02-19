import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { Constants } from './index';
import 'rxjs/add/operator/map';

@Injectable()
export class HotelsService {
  public url: string;
  public filterParams: any;
  hotels: any[] = [];
  constructor(private http: Http) {
    this.url = Constants.URL;
    console.log("url", this.url);
    this.filterParams = {
      name: "",
      stars: ""
    }
  }

  getHotels(params) {
    console.log("haciendo peticion")
    let options = new RequestOptions({
      params: params
    })
    return this.http.get(this.url + '/getHotels', options).map((res: any) => {
      res = res.json();
      this.hotels = res.message;
      return this.hotels;
    })
  }
}
