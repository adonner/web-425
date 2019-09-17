/*============================================
; Title: home.component.ts
; Author: Adam Donner
; Date: 17 September 2019
; Description:  home.component.ts
;===========================================
*/


// start program

import { Component, OnInit } from '@angular/core';

// layout for home
@Component({
  selector: 'app-home',
  template: `
    <div class="container">
      <div class="row">
        <h2>Home Page Routing in Action!</h2>
      </div>
    </div>
  `,
  styles: [
    `
    .container {
      margin-top: 20px;
    }
    h2 {
      color: Navy;
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