import {Hero} from "../hero/hero";
import {Paladin} from "../hero/paladin";
import {Mage} from "../hero/mage";
import {Rogue} from "../hero/rogue";

export class Battle{

  private heroUn: Hero;
  private heroDeux: Hero;

  get _heroUn():Hero{
    return this.heroUn;
  }

  get _heroDeux():Hero{
    return this.heroDeux;
  }

  constructor(heroUn: Hero, heroDeux: Hero) {
    this.heroUn = heroUn;
    this.heroDeux = heroDeux; 

    const heroes= [Mage, Paladin, Rogue];
    const rand = Math.floor(Math.random() * 3);
    const hero1 = heroes[rand];
    const hero2 = heroes[rand];
    //this.heroUn = new hero1('Pollux');
    //this.heroDeux = new hero2('Castor');
  }

  randomNumber(max: number, min: number = 0): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  startFight(): void {
    let heroes = [this.heroUn, this.heroDeux];
    console.log(this.heroUn.name + ' ( ' + this.heroUn.guild + ' )' + ' V.S.' + this.heroDeux.name + ' ( ' + this.heroDeux.guild + ' )')
    // faire fonction random entre 2 valeurs
    let indexStarter = this.randomNumber(heroes.length - 1);
    let indexSecond = Math.abs(indexStarter - 1);
    while (heroes[indexStarter].lifepoints[0] > 0 && heroes[indexSecond].lifepoints[0] > 0) {
      heroes[indexStarter].attack(heroes[indexSecond]);
      heroes[indexSecond].attack(heroes[indexStarter]);
      indexStarter = this.randomNumber(heroes.length - 1);
      indexSecond = Math.abs(indexStarter - 1);
      // modifier again les index starter/second via random
    }
  }
}
