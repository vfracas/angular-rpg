import {Hero} from "./hero";

export class Tauren extends Hero{

  constructor(name:string = 'E.T.C.') {
    super('Tauren', [335,335],[43,46],3, name);
    this._image = 'https://64.media.tumblr.com/3e8f0a1b0c8a85c70b519d6b04e7a178/tumblr_o6p13dquqr1qkpz2go1_540.gifv';
    // this.leveUp(this._exp);
  }

  // leveUp(exp:number):void{
  //   super.levelUp(exp);

  // }
}
