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
  }

  getHotels(params) {
    return this.http.post(this.url + '/getHotels', params).map((res: any) => {
      res = res.json();
      this.hotels = res.message;
      return this.hotels;
    })
  }
}
