import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent {
  url = 'https://pokeapi.co/api/v2/pokemon/';
  pkmBusca = new FormControl();
  resultPkm: any;

  spritePkm: string = "";
  namePkm: string = "";
  typePkm: string = "";
  weightPkm: string = "";

  constructor(private http: HttpClient) { }

  searchPokemon(pkmName: string) {
    this.getApiPkm(pkmName).subscribe((data) => {
      this.resultPkm = data;
      this.spritePkm = this.resultPkm.sprites.other["official-artwork"].front_default;
      this.namePkm = this.resultPkm.name;
      this.typePkm = this.resultPkm.types[0].type.name;
      this.weightPkm = this.resultPkm.weight;

      console.log("searchPokemon: ", this.resultPkm)
    })
  };

  getApiPkm(pkmName: string) {
    return this.http.get(this.url + pkmName.toLowerCase());
  }
}
