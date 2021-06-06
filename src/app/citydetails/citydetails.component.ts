import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-citydetails',
  templateUrl: './citydetails.component.html',
  styleUrls: ['./citydetails.component.css']
})
export class CitydetailsComponent implements OnInit {
  city1:any;

  constructor(private weatherService:WeatherService,private aroute:ActivatedRoute) { }

  ngOnInit(): void {
    const id=this.aroute.snapshot.params['id'];
   this.city1= this.weatherService.getCityWeather(id)[0];
   
  }

}
