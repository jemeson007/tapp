import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hf } from './h-f';

@Injectable({
  providedIn: 'root'
})
export class Imds implements InMemoryDbService {
  powerss = [' decibel 1 ', ' decibel 10 ', ' decibel 100 '];
  createDb(){    
    const hf = [
      {
        id: 1,
        name:'a1',
        power : this.powerss[2],
        alterEgo: 'b' 
      },
      {
        id: 2,
        name:'a11',
        power : this.powerss[1],
        alterEgo: '1b' 
      }
    ];
    return { hf };
  }

  constructor() { }
  genId(hf: Hf[]) : number {
    return hf.length > 0 ? Math.max(...hf.map(hff => hff.id)) + 1 : 1; 
  }
}
