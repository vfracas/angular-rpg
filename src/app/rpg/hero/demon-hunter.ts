import {Hero} from "./hero";

export class DemonHunter extends Hero{

  constructor(name:string = 'Illidan') {
    super('Demon Hunter', [285,285],[45,48],3, name);
    this._image = 'https://64.media.tumblr.com/06be4be00ddb1f20e627b8f8b41caeb9/tumblr_o68u0vgd0p1qkpz2go1_r1_400.gifv';
    // this.leveUp(this._exp);
  }

  // leveUp(exp:number):void{
  //   super.levelUp(exp);

  // }
}
