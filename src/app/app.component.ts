import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'testproj';
  newCity:string='';

  constructor(private weatherService:WeatherService){
    
  }
  ngOnInit(){
    this.weatherService.loadCities();
    this.weatherService.loadWeather();
  }

  addCity(){
    var result:string= this.weatherService.addcity(this.newCity);
    
   


  }
  
}
