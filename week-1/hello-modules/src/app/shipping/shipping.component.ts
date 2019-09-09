/*============================================
; Title: shipping.component.ts
; Author: Adam Donner
; Date: 8 September 2019
; Description:  shipping.component.ts
;===========================================
*/


// start program

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipping',
  template: `
    <p>
      Welcome from the ShippingComponent
    </p>
  `,
  styles: []
})
export class ShippingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

// end program