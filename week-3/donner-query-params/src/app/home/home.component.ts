/*============================================
; Title: home.component.ts
; Author: Adam Donner
; Date: 25 September 2019
; Description:  home.component.ts
;===========================================
*/


// start program

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="container">
      <div class="row">
        <h2>Welcome home to Passing Data to Routes!</h2>
      </div>
    </div>
  `,
  styles: [
    `
    .container {
      margin-top: 20px;
    }
    h2 {
      color: steeleblue;
    }
    
    `
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
// end program