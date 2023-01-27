import { Component } from '@angular/core'

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
	title = 'Koala Hub'

	fcnConsole() {
		console.log('Galinhaa!!')
	}

	easterEgg() {
		window.open('https://fortnite.gg/stats?player=brkoala')
	}
}
