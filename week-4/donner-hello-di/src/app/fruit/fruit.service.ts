/*============================================
; Title: fruit.service.ts
; Author: Adam Donner
; Date: 2 October 2019
; Description:  fruit.service.ts
;===========================================
*/


// start program

import { Injectable } from '@angular/core';
import { Fruit } from "./fruit";

@Injectable()
export class FruitService {
  getFruit(): Fruit {
    return new Fruit ( 0, "Apple", "Green");
  }
}

// end program