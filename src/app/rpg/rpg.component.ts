import { Component, OnInit } from '@angular/core';
import { Paladin } from "./hero/paladin";
import { Mage } from "./hero/mage";
import { Rogue } from "./hero/rogue";
import { Battle } from './battle/battle';

@Component({
  selector: 'app-rpg',
  templateUrl: './rpg.component.html',
  styleUrls: ['./rpg.component.scss']
})
export class RpgComponent implements OnInit {

  constructor() {
    this.testRpg();
  }

  ngOnInit(): void {
  }

  private testRpg() {
    let battle = new Battle(new Mage('Morgane'), new Rogue('Marine'));
    battle.startFight();
}

}
