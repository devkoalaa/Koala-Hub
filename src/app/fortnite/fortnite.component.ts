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
	url2 = 'https://fortnite-api.com/v2/cosmetics/br/search/all'
	head: HttpHeaders = new HttpHeaders().append(
		'Authorization',
		'3a924cb0-69a8-43d5-aa6d-69fc12b40991'
	)
	playerBusca = new FormControl()
	resultAllPlayer: any
	resultSeasonPlayer: any
	resultCosmetics: any
	visible: string = 'hidden'
	playerName: string = ''
	playerLvl: string = ''
	playerAllWins: string = ''
	playerAllMatches: string = ''
	playerAllWinRate: string = ''
	playerAllKills: string = ''
	playerSeasonWins: string = ''
	playerSeasonMatches: string = ''
	playerSeasonWinRate: string = ''
	playerSeasonKills: string = ''
	randomImgCosmetic: string = ''

	arr: any[] = []
	getRandomElement: any

	constructor(private http: HttpClient) {}

	searchPlayer(playerName: string) {
		this.getAllStats(playerName).subscribe((data) => {
			this.visible = ''
			this.resultAllPlayer = data
			this.playerName = this.resultAllPlayer.data.account.name
			this.playerLvl = this.resultAllPlayer.data.battlePass.level
			this.playerAllWins = this.resultAllPlayer.data.stats.all.overall.wins
			this.playerAllMatches = this.resultAllPlayer.data.stats.all.overall.matches
			this.playerAllWinRate = this.resultAllPlayer.data.stats.all.overall.winRate.toFixed(2) + '%'
			this.playerAllKills = this.resultAllPlayer.data.stats.all.overall.kills

			console.log('resultAllPlayer: ', this.resultAllPlayer)
		})

		this.getSeasonStats(playerName).subscribe((data) => {
			this.resultSeasonPlayer = data
			this.playerSeasonWins = this.resultSeasonPlayer.data.stats.all.overall.wins
			this.playerSeasonMatches = this.resultSeasonPlayer.data.stats.all.overall.matches
			this.playerSeasonWinRate =
				this.resultSeasonPlayer.data.stats.all.overall.winRate.toFixed(2) + '%'
			this.playerSeasonKills = this.resultSeasonPlayer.data.stats.all.overall.kills

			console.log('resultSeasonPlayer: ', this.resultSeasonPlayer)
		})

		this.getCosmetics().subscribe((data) => {
			this.resultCosmetics = data

			// console.log('resultCosmetics: ', this.resultCosmetics)

			this.getRandomElement =
				this.resultCosmetics.data[Math.floor(Math.random() * this.resultCosmetics.data.length)]

			this.randomImgCosmetic = this.getRandomElement.images.featured
		})
	}

	getAllStats(playerName: string) {
		const params = new HttpParams().append('name', playerName)

		return this.http.get(this.url, { headers: this.head, params })
	}

	getSeasonStats(playerName: string) {
		const params = new HttpParams().append('name', playerName).append('timeWindow', 'season')

		return this.http.get(this.url, { headers: this.head, params })
	}

	getCosmetics() {
		const params = new HttpParams().append('language', 'pt-BR').append('type', 'outfit')

		return this.http.get(this.url2, { params })
	}
}
