/*============================================
; Title: product.component.ts
; Author: Adam Donner
; Date: 25 September 2019
; Description:  product.component.ts
;===========================================
*/


// start program


import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-product',
  template: `
    <h1 class="product">Welcome to the Product Component</h1>
    <input placeholder="Enter your name" type=text [formControl]="name">

  `,
  styles: [`
    h1 {
      color: blue;
    }
  `]
})
export class ProductComponent implements OnInit {

  name: FormControl = new FormControl();

  constructor() { }

  ngOnInit() {
  }

}
// end program