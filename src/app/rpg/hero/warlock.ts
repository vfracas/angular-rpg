import {Hero} from "./hero";

export class Warlock extends Hero{

  constructor(name:string = 'Kael\'Thas') {
    super('Warlock', [265,265],[44,50],3, name);
    this._image = 'https://64.media.tumblr.com/1d6a637156bed9959dff880632de7860/tumblr_o7y00elB7P1qkpz2go1_500.gifv';
    // this.leveUp(this._exp);
  }

  // leveUp(exp:number):void{
  //   super.levelUp(exp);

  // }
}
