import {Hero} from "./hero";

export class Rogue extends Hero{

  constructor(name:string) {
    super('Rogue', [315,315],[40,46],4, name);
    this._image = 'https://64.media.tumblr.com/af9c2a796605a377f95baf6b40b115c2/tumblr_o5tx2xwU2J1qkpz2go1_400.gifv';
    // this.leveUp(this._exp);
  }

  // leveUp(exp:number):void{
  //   super.levelUp(exp);

  // }
}
