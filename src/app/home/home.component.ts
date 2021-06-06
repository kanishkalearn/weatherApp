import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  weatherList:any;

  constructor(private weatherService:WeatherService) { }

  ngOnInit(): void {
    
    this.weatherList=this.weatherService.getWeather();
  }
  

}
