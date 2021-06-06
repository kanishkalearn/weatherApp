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
   if(result==="Already Exist"){
    alert("City you entered already exist");
   }else if(result==="Success"){
    alert("Added Succesfully");
    this.newCity='';
   }else if(result==='error'){
    alert("Something wrong with City you given");
   }else{
     console.log("done");
   }

  }
  
}
