import { Component, OnInit } from '@angular/core';
import { Paladin } from "./hero/paladin";
import { Mage } from "./hero/mage";
import { Rogue } from "./hero/rogue";
import { Warlock } from './hero/warlock';
import { Tauren } from './hero/tauren';
import { DemonHunter } from './hero/demon-hunter';
import { Chaman } from './hero/chaman';
import { Battle } from './battle/battle';
import { Hero } from './hero/hero';

@Component({
  selector: 'app-rpg',
  templateUrl: './rpg.component.html',
  styleUrls: ['./rpg.component.scss']
})
export class RpgComponent implements OnInit {

  battle!: Battle;
  private player: Hero;
  private enemy: Hero;

  get _player():Hero{
    return this.player;
  }

  get _enemy():Hero{
    return this.enemy;
  }

  constructor() {


    const heroes= [Mage, Paladin, Rogue, Warlock, Tauren, DemonHunter, Chaman];
    const rand = this.randomNumber(heroes.length -1);
    const rand2 = this.randomNumber(heroes.length -1);
    const randHero = heroes[rand];
    this.player = new randHero('Blank');
    const randEnemy = heroes[rand2];
    this.enemy = new randEnemy();
    this.checkHero(this.player);
    this.checkHero(this.enemy);
    this.testRpg();

  }

  ngOnInit(): void {
  }

  randomNumber(max: number, min: number = 0): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  checkHero(target:Hero){
    const heroGuild = ['Mage', 'Warlock', 'Demon Hunter', 'Chaman'];
    let toReverse = false;
    for(let hero of heroGuild) {
      if (target.guild === hero){
        toReverse = true;
      }
    }
    return toReverse;
  }

  private testRpg() {
    this.battle = new Battle(this.player, this.enemy);
  }

}
