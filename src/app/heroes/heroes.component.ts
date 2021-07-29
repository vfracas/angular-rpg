import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Hero } from '../rpg/hero/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit, OnChanges {

  @Input()
  heroes!: Hero;
  health!: number;

  @Input()
  isEnemy: boolean = false;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    const oldChanges = changes.heroes.previousValue;
    const newChanges = changes.heroes.currentValue;
    if (oldChanges !== newChanges) {
      this.heroes = newChanges;
      this.health = Math.round((this.heroes.lifepoints[0] / this.heroes.lifepoints[1])* 100);
    }
  }

  ngOnInit(): void {
  }

}
