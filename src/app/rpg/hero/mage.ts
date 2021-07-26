import {Hero} from "./hero";

export class Mage extends Hero{

  constructor(name:string) {
    super('Mage', [285,285],[45,48],3, name);
    this._image = 'https://64.media.tumblr.com/633c397a11ea40a9cfcf7037f46327d5/tumblr_o60wukcP2g1qkpz2go1_500.gifv';
    // this.leveUp(this._exp);
  }

  // leveUp(exp:number):void{
  //   super.levelUp(exp);

  // }
}
