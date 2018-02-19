import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../services/hotels.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  hotels: any = [];
  initialParams = {
    name: "",
    stars : ""
  }
  constructor(private _hotelsService: HotelsService) {
    this._hotelsService.getHotels(this.initialParams).subscribe(hotels => {
      console.log("hotels", hotels);
    })
  }

  ngOnInit() {

  }

}
