export abstract class Hero{
  protected _name!: string;
  protected _guild!: string;
  protected _lifepoints!: number[];
  protected _strengh!: number[];
  protected _defense!: number;
  protected _level!: number;
  protected _exp!: number;
  protected _critrate!: number;
  protected _image!: string;

  get name():string{
    return this._name;
  }

  get guild():string{
    return this._guild;
  }

  get lifepoints():number[]{
    return this._lifepoints;
  }

  get strength():number[]{
    return this._strengh;
  }

  get defense():number{
    return  this._defense;
  }

  get level():number{
    return this._level;
  }

  get exp():number{
    return this._exp;
  }

  get critrate():number{
    return this._critrate;
  }

  get image():string{
    return this._image;
  }

  protected constructor(guild:string, lifepoints:number[], strength:number[], defense:number, name:string) {
    this._guild = guild;
    this._lifepoints = lifepoints;
    this._strengh = strength;
    this._defense = defense;
    this._level = 1;
    this._exp = 0;
    this._critrate = 5;
    this._name = name;
    //this.levelUp(this._exp);
  }

  randomNumber(max: number, min: number = 0): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  attack(target:Hero): void {
    if (target.lifepoints[0] > 0 && this.lifepoints[0] > 0) {
      let damages = this.randomNumber(this._strengh[0], this._strengh[1]);
      let infoCc = '';
      if (this.randomNumber(100) <= this._critrate) {
        damages *= 1.5;
        infoCc = ' (Coup critique !)';
      }
      damages = Math.round(damages * (100 - target.defense) / 100);
      target.lifepoints[0] -= damages;
      if(target.lifepoints[0] < 0){
        target.lifepoints[0] = 0;
      }
      console.log(this.name + ' lance une attaque sur ' + target.name);
      console.log('Le hero ' + target.name + ' perd ' + damages + ' Pv' + infoCc);
      console.log(target.name + ' : ' + target.lifepoints[0] + ' Pv');
    }else{
      target.lifepoints[0] <= 0 ? console.log(target.name + ' est mort') : console.log(this.name + ' est mort');
    }
  }

  levelUp(exp: number):void{
    if(this.exp + exp >= 100){
      this._level += 1;
      this._exp -= 100;
      this._critrate += 0.25;
    }
    console.log('Niveau ' + this.level + 'atteint !');
  }
}
