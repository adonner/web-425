/*============================================
; Title: product-description.component.ts
; Author: Adam Donner
; Date: 25 September 2019
; Description:  product-description.component.ts
;===========================================
*/


// start program

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-description',
  template: `
    <p>
      product-description works!
    </p>
  `,
  styles: []
})
export class ProductDescriptionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
// end program