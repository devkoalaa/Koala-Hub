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
	head: HttpHeaders = new HttpHeaders().append(
		'Authorization',
		'3a924cb0-69a8-43d5-aa6d-69fc12b40991'
	)
	playerBusca = new FormControl()
	resultAllPlayer: any
	resultSeasonPlayer: any
	visible: string = 'hidden'
	playerName: string = ''
	playerLvl: string = ''
	playerAllWins: string = ''
	playerAllKills: string = ''
	playerSeasonWins: string = ''
	playerSeasonKills: string = ''
	playerImg: string = ''

	constructor(private http: HttpClient) {}

	searchPlayer(playerName: string) {
		this.getAllStats(playerName).subscribe((data) => {
			this.visible = ''
			this.resultAllPlayer = data
			this.playerName = this.resultAllPlayer.data.account.name
			this.playerLvl = this.resultAllPlayer.data.battlePass.level
			this.playerAllWins = this.resultAllPlayer.data.stats.all.overall.wins
			this.playerAllKills = this.resultAllPlayer.data.stats.all.overall.kills
			// this.playerImg = this.resultAllPlayer.data.image
			this.playerImg =
				'https://fortnite-api.com/images/cosmetics/br/glider_id_068_garageband/icon.png'

			// console.log('searchPlayer: ', this.resultPlayer)
		})

		this.getSeasonStats(playerName).subscribe((data) => {
			this.resultSeasonPlayer = data
			this.playerSeasonWins = this.resultSeasonPlayer.data.stats.all.overall.wins
			this.playerSeasonKills = this.resultSeasonPlayer.data.stats.all.overall.kills

			// console.log('searchPlayer: ', this.resultSeasonPlayer)
		})
	}

	getAllStats(playerName: string) {
		const params = new HttpParams().append('name', playerName)
		// .append('image', 'all')

		return this.http.get(this.url, { headers: this.head, params })
	}

	getSeasonStats(playerName: string) {
		const params = new HttpParams().append('name', playerName).append('timeWindow', 'season')

		return this.http.get(this.url, { headers: this.head, params })
	}
}
