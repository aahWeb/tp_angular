import { Injectable } from '@angular/core';
import { TITANIC, Titanic } from './Data/titanic';

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

    return this.titanics.filter(t => t.Survived == status);
  }

}
