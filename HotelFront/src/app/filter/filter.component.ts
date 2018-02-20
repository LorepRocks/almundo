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

  getFilterHotels() {
    console.log("llamando al filtro")
    const params = {
      name: this.name,
      stars: this.stars
    }
    this._hotelsService.getHotels(params).subscribe(res => {
      console.log("filter hotels", res);
    })
  }
  ngOnInit() {
  }

}
