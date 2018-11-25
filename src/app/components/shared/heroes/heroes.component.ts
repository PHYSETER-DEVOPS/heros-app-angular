import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService, Heroe } from '../../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  // heroes es la variable para el HTML
  heroes:Heroe[] = [];
  constructor(private _heroesService:HeroesService,
              private _router:Router) {
  }
  // Init se ejecuta cuando todo esta listo
  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    // console.log(this.heroes);
  }

  verHeroe(idx:number){
    this._router.navigate(['/heroe', idx]);
  }

}
