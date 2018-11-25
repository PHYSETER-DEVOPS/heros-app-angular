import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routes -> imports
import { APP_ROUTING } from './app.routes';

// Services -> providers
import { HeroesService } from './services/heroes.service';

// Componentes -> declarations
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/shared/home/home.component';
import { AboutComponent } from './components/shared/about/about.component';
import { HeroesComponent } from './components/shared/heroes/heroes.component';
import { HeroeComponent } from './components/shared/heroe/heroe.component';
import { BuscadorComponent } from './components/shared/buscador/buscador.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    BuscadorComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
