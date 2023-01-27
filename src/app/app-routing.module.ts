import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { Routes, RouterModule } from '@angular/router'
import { DashboardComponent } from './dashboard/dashboard.component'
import { PokemonComponent } from './pokemon/pokemon.component'
import { FortniteComponent } from './fortnite/fortnite.component'

const appRoutes: Routes = [
	{ path: '', component: DashboardComponent },
	{ path: 'pokemon', component: PokemonComponent },
	{ path: 'fortnite', component: FortniteComponent }
]

@NgModule({
	imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
