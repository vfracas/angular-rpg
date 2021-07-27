import {Hero} from "./hero";

export class Chaman extends Hero{

  constructor(name:string = 'Thrall') {
    super('Chaman', [285,285],[45,48],3, name);
    this._image = 'https://64.media.tumblr.com/46182258fbed75ae31d46e35ee1551c7/tumblr_odf538avNs1qkpz2go1_1280.gifv';
    // this.leveUp(this._exp);
  }

  // leveUp(exp:number):void{
  //   super.levelUp(exp);

  // }
}
