import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { SobreComponent } from './sobre/sobre.component';
import { UsuarioComponent } from './usuario/usuario.component';

const appRoutes: Routes = [
  // { path: '', redirectTo: 'principal', pathMatch: 'full' },

  { path: '', component: PrincipalComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'usuario', component: UsuarioComponent }
];


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
