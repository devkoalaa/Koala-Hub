import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent {
  // title = 'my-app';
  // // url = 'http://localhost:5000/WeatherForecast';
  // url = 'https://pokeapi.co/api/v2/pokemon/ditto'
  // resource: any;

  // constructor(private http: HttpClient) { }

  // fcnConsole() {
  //   this.getApi().subscribe((data) => {
  //     this.resource = data;
  //   })
  // };

  // getApi() {
  //   console.log("Galinha")

  //   return this.http.get(this.url);
  // }
}