import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  title = 'Koala Hub';
  url = 'https://pokeapi.co/api/v2/pokemon/ditto'
  resource: any;

  constructor(private http: HttpClient) { }

  fcnConsole() {
    this.getApi().subscribe((data) => {
      this.resource = data;
      console.log(this.resource)
    })
  };

  getApi() {
    return this.http.get(this.url);
  }
}
