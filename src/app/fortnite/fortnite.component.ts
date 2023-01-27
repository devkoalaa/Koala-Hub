import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Component } from '@angular/core'
import { FormControl } from '@angular/forms'

@Component({
	selector: 'app-fortnite',
	templateUrl: './fortnite.component.html',
	styleUrls: ['./fortnite.component.scss']
})
export class FortniteComponent {
	url = 'https://fortnite-api.com/v2/stats/br/v2/'
	playerBusca = new FormControl()
	resultPlayer: any
	visible: string = 'hidden'
	playerName: string = ''
	playerLvl: string = ''
	playerWins: string = ''
	playerKills: string = ''
	playerImg: string = ''

	constructor(private http: HttpClient) {}

	searchPlayer(playerName: string) {
		this.getApiPkm(playerName).subscribe((data) => {
			this.visible = ''
			this.resultPlayer = data
			this.playerName = this.resultPlayer.data.account.name
			this.playerImg = this.resultPlayer.data.image
			this.playerLvl = this.resultPlayer.data.battlePass.level
			this.playerWins = this.resultPlayer.data.stats.all.overall.wins
			this.playerKills = this.resultPlayer.data.stats.all.overall.kills

			console.log('searchPlayer: ', this.resultPlayer)
		})
	}

	getApiPkm(playerName: string) {
		const head = new HttpHeaders().append('Authorization', '3a924cb0-69a8-43d5-aa6d-69fc12b40991')

		const params = new HttpParams().append('name', playerName).append('image', 'all')

		return this.http.get(this.url, { headers: head, params })
	}
}
