import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {
  title = 'Koala Hub';
  // url = 'http://localhost:5000/WeatherForecast';
  url = 'https://pokeapi.co/api/v2/pokemon/ditto'
  resource: any;

  constructor(private http: HttpClient) { }

  fcnConsole() {
    this.getApi().subscribe((data) => {
      this.resource = data;
    })
  };

  getApi() {
    console.log("Galinha")

    return this.http.get(this.url);
  }
}
