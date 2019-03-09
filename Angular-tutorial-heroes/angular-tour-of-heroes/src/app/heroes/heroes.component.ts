import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero'
import {HEROES} from '../mock-heroes'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  //Here you're declaring the variable, but not assigning a value to it
  //Note that the syntax of including a colon and then Hero is a feature of TypeScript. You're saying that whatever value is eventually assigned to selectedHero MUST be an instance of the Hero class.
  selectedHero: Hero;

  //Here we're creating our function that will be accessed and used in our <li> click event listener
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor() {
   }

  ngOnInit() {
  }
}
