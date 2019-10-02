/*============================================
; Title: fruit.service.ts
; Author: Adam Donner
; Date: 2 October 2019
; Description:  fruit.service.ts
;===========================================
*/


// start program
import { Injectable } from '@angular/core';
import {Fruit} from "./fruit";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FruitService {
  fruits: Fruit[] = [
    {id: 1, name: "Apple", pricePerPound: "$1.99", quantity: 10},
    {id: 2, name: "Bananna", pricePerPound: "$1.50", quantity: 8},
    {id: 3, name: "Orange", pricePerPound: "$0.99", quantity: 25},
    {id: 4, name: "Pear", pricePerPound: "$3.00", quantity: 5},
    {id: 5, name: "Tomato", pricePerPound: "$2.10", quantity: 20}
  ]

  constructor() { }

  getFruits(): Observable<Fruit[]> {
    return of(this.fruits)
  }
}
// end program