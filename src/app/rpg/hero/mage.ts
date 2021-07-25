import {Hero} from "./hero";

export class Mage extends Hero{

  constructor(name:string) {
    super('Mage', [285,285],[45,48],3, name);
    // this.leveUp(this._exp);
  }

  // leveUp(exp:number):void{
  //   super.levelUp(exp);

  // }
}
