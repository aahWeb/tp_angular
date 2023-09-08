import { Injectable } from '@angular/core';
import { TITANIC, Titanic, Status } from './Data/titanic';

@Injectable({
  providedIn: 'root'
})
export class TitanicService {
  titanics = TITANIC;

  constructor() { }

  get(): Titanic[] {
    return this.titanics;
  }

  order(sens: number) {
    // todo order
  }

  // O ou 1 
  survived(status: string): Titanic[] {
    if (status == '') return [];
    console.log(status);
    const s: string = status == 'survived' ? "1" : "0";
    console.log(s);

    return this.titanics.filter(t => t.Survived == s);
  }

}
