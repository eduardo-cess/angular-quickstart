//modulos
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
//componentes
import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroService }         from './hero.service';
import {DashboardComponent} from './dashboard.component';
//router
import { RouterModule }   from '@angular/router';
var ConfiguredRouter = RouterModule.forRoot([
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
])

@NgModule({
  imports:      [ BrowserModule,FormsModule, ConfiguredRouter ],
  declarations: [ 
    AppComponent , 
    HeroDetailComponent, 
    HeroesComponent,
    DashboardComponent],
  bootstrap:    [ AppComponent ],
  providers: [HeroService]
})
export class AppModule { }
