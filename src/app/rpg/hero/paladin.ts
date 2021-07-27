import {Hero} from "./hero";

export class Paladin extends Hero{

  constructor(name:string = 'Uther') {
    super('Paladin', [375,375],[42,45],5, name);
    this._image = 'https://64.media.tumblr.com/b82c2decb573ea787bec842fb6ed2658/tumblr_o5v8r5bJsu1qkpz2go1_r1_400.gifv';
    // this.leveUp(this._exp);
  }

  // leveUp(exp:number):void{
  //   super.levelUp(exp);

  // }
}
