import {Hero} from "./hero";

export class Paladin extends Hero{

  constructor(name:string) {
    super('Paladin', [375,375],[42,45],5, name);
    // this.leveUp(this._exp);
  }

  // leveUp(exp:number):void{
  //   super.levelUp(exp);

  // }
}
