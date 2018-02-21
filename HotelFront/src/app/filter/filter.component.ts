import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../services/hotels.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  name: String = "";
  stars: String = "";


  starsArray:any = [
    {value:""},
    {value:5},
    {value:4},
    {value:3},
    {value:2},
    {value:1}
  ]
  constructor(private _hotelsService: HotelsService) { }

  getFilterHotels(event) {
    let filterParams = [];
    if(this.name !== ""){
        filterParams.push({name : this.name, type:"text"})
    }
    if(this.stars !== ""){
            filterParams.push({stars : this.stars, type:"number"})
    }
    // Se invoca el servicio HotelService enviando el arreglo de parámetros
    this._hotelsService.getHotels(filterParams).subscribe()
  }
  ngOnInit() {
  }

}
