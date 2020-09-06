import { Pipe, PipeTransform } from '@angular/core';

import { Heldenname } from './heroes';

@Pipe({ name: 'heroesName' })
export class HeroesNamePipe implements PipeTransform {
  transform(allHeroes: Heldenname[]) { //erwartet ein array vom Typ Heldenname 
  //(in dem Fall input heroes mit den Werte: [{name, canFly: this.canFly}])
    return allHeroes.filter(hero => hero.name == 'Magneto');
    //hero.name (name sollte übereinstimmen bei heroes.ts Heldenname.name UND name von const Hero..)
  }
}