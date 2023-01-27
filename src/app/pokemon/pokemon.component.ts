import { HttpClient } from '@angular/common/http'
import { Component } from '@angular/core'
import { FormControl } from '@angular/forms'

@Component({
	selector: 'app-pokemon',
	templateUrl: './pokemon.component.html',
	styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent {
	url = 'https://pokeapi.co/api/v2/pokemon/'
	pkmBusca = new FormControl()
	resultPkm: any
	visibleNotFound: string = 'hidden'
	visible: string = 'hidden'
	spritePkm: string = ''
	namePkm: string = ''
	typePkm: string = ''
	weightPkm: string = ''

	constructor(private http: HttpClient) {}

	searchPokemon(pkmName: string) {
		this.getApiPkm(pkmName).subscribe(
			(response) => {
				this.resultPkm = response
				this.visible = ''
				this.visibleNotFound = 'hidden'

				this.spritePkm = this.resultPkm.sprites.other['official-artwork'].front_default
				this.namePkm = this.resultPkm.name[0].toUpperCase() + this.resultPkm.name.substring(1)
				this.weightPkm = (Number(this.resultPkm.weight) / 2.205).toFixed(2) + ' Kg'
				this.typePkm =
					this.resultPkm.types[1] != null
						? this.resultPkm.types[0].type.name[0].toUpperCase() +
						  this.resultPkm.types[0].type.name.substring(1) +
						  '/' +
						  this.resultPkm.types[1].type.name[0].toUpperCase() +
						  this.resultPkm.types[1].type.name.substring(1)
						: this.resultPkm.types[0].type.name[0].toUpperCase() +
						  this.resultPkm.types[0].type.name.substring(1)

				console.log('searchPokemon: ', this.resultPkm)
			},
			(error) => {
				this.visible = 'hidden'
				this.visibleNotFound = ''
			}
		)
	}

	getApiPkm(pkmName: string) {
		return this.http.get(this.url + pkmName.toLowerCase())
	}
}
