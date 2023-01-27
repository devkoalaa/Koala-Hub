import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module'
import { HttpClientModule } from '@angular/common/http'

//Telas
import { AppComponent } from './app.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { PokemonComponent } from './pokemon/pokemon.component'
import { FortniteComponent } from './fortnite/fortnite.component'

//PRIMENG
import { StyleClassModule } from 'primeng/styleclass'
import { ButtonModule } from 'primeng/button'
import { InputTextModule } from 'primeng/inputtext'
import { InputNumberModule } from 'primeng/inputnumber'
import { CheckboxModule } from 'primeng/checkbox'
import { CalendarModule } from 'primeng/calendar'
import { InputTextareaModule } from 'primeng/inputtextarea'
import { RippleModule } from 'primeng/ripple'
import { DropdownModule } from 'primeng/dropdown'
import { FileUploadModule } from 'primeng/fileupload'
import { InputSwitchModule } from 'primeng/inputswitch'
import { BadgeModule } from 'primeng/badge'
import { MenuModule } from 'primeng/menu'
import { TableModule } from 'primeng/table'
import { ToastModule } from 'primeng/toast'
import { DividerModule } from 'primeng/divider'
import { InputMaskModule } from 'primeng/inputmask'

@NgModule({
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		StyleClassModule,
		ButtonModule,
		InputTextModule,
		InputNumberModule,
		CheckboxModule,
		CalendarModule,
		InputTextareaModule,
		RippleModule,
		DropdownModule,
		FileUploadModule,
		InputSwitchModule,
		BadgeModule,
		MenuModule,
		TableModule,
		ToastModule,
		DividerModule,
		InputMaskModule,
		FormsModule,
		ReactiveFormsModule
	],
	declarations: [AppComponent, DashboardComponent, PokemonComponent, FortniteComponent],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
