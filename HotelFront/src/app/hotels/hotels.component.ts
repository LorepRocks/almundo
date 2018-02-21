import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../services/hotels.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  initialParams:any = [];
  constructor(public _hotelsService: HotelsService) {
     //Se invoca el servicio HotelService inicialmente con un arreglo vacio de parámetros de búsqueda para no filtrar
     //ningun dato y traer la lista completa de lotes
    this._hotelsService.getHotels(this.initialParams).subscribe()
  }

  ngOnInit() {

  }

}
