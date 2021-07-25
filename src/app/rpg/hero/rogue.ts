import {Hero} from "./hero";

export class Rogue extends Hero{

  constructor(name:string) {
    super('Rogue', [315,315],[40,46],4, name);
    // this.leveUp(this._exp);
  }

  // leveUp(exp:number):void{
  //   super.levelUp(exp);

  // }
}
