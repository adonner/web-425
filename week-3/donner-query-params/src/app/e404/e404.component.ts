/*============================================
; Title: e404.component.ts
; Author: Adam Donner
; Date: 25 September 2019
; Description:  e404.component.ts
;===========================================
*/


// start program

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e404',
  template: `
    <div class="container">
      <div class="row">
        <h2>Error page not found!</h2>
      </div>
    </div>
  `,
  styles: [
    `
    .container {
      margin-top: 20px;
    }
    h2 {
      color: red;
    }
    
    `
  ]
})
export class E404Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
// end program