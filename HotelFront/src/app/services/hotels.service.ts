import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class HotelsService {
  public url: string;
  public filterParams: any;
  hotels: any[] = [];
  constructor(private http: Http) {
    //Se obtiene la URL del API desde las variables de entorno
    this.url = environment.URL;
  }

  //Método que se comunica con el API para obtener la lista de hoteles
  getHotels(params) {
    return this.http.post(this.url + '/getHotels', params).map((res: any) => {
      res = res.json();
      this.hotels = res.message;
      return this.hotels;
    })
  }
}
