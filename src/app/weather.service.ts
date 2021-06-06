import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs-compat';

import cities from './cities.json'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private cityList: any = [];
  private cityWeather: any = [];

  constructor(private http: HttpClient) { }

  getWeather() {
    return this.cityWeather;
  }

  addcity(city: string): any {
    var msg:string='';
    this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=3c074e7a133944525fdde968b0e7fffa')
      .subscribe((res: any) => {
        if (this.cityList.map((p: any) => p['City Name']).every((c: any) => c !== res.name)) {
          this.cityWeather.push({
            "country": res.sys.country,
            "sunrise": res.sys.sunrise,
            "sunset": res.sys.sunset,
            "main": res.weather[0].main,
            "description": res.weather[0].description,
            "temp": res.main.temp,
            "pressure": res.main.pressure,
            "humidity": res.main.humidity,
            "temp_min": res.main.temp_min,
            "temp_max": res.main.temp_max,
            "visibility": res.visibility,
            "wind_speed": res.wind.speed,
            "wind_deg": res.wind.deg,
            "id": res.id,
            "name": res.name,
            "dt": res.dt
          });
          this.cityList.push({
            'City Code': res.id, 'City Name': res.name
          });
          msg="Success";
          
        } else {
          msg="Already Exist";
          
        }
      },(err) => {
        msg="Error";
          
        });
        return msg;
  }

  loadCities() {

    for (let city of cities.List) {
      this.cityList.push({ 'City Code': city.CityCode, 'City Name': city.CityName });
    }
    // console.log(this.cityList);
  }

  getCities() {
    return this.cityList;
  }

  loadWeather() {
    var subscription;
    for (let city of this.cityList) {
      subscription = this.http.get('http://api.openweathermap.org/data/2.5/weather?id=' + city['City Code'] + '&appid=3c074e7a133944525fdde968b0e7fffa')
        .subscribe((res: any) => {
          this.cityWeather.push({
            "country": res.sys.country,
            "sunrise": res.sys.sunrise,
            "sunset": res.sys.sunset,
            "main": res.weather[0].main,
            "description": res.weather[0].description,
            "temp": res.main.temp,
            "pressure": res.main.pressure,
            "humidity": res.main.humidity,
            "temp_min": res.main.temp_min,
            "temp_max": res.main.temp_max,
            "visibility": res.visibility,
            "wind_speed": res.wind.speed,
            "wind_deg": res.wind.deg,
            "id": res.id,
            "name": res.name,
            "dt": res.dt


          });
        });

    }
  }
  getCityWeather(idn:number){
    
    return this.cityWeather.filter((city:any)=>{
    

      return +city.id===+idn;
    });
  }
}
