import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { FortniteComponent } from './fortnite/fortnite.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    PokemonComponent,
    FortniteComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
