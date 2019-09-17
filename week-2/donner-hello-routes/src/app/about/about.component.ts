/*============================================
; Title: about.component.ts
; Author: Adam Donner
; Date: 17 September 2019
; Description:  about.component.ts
;===========================================
*/


// start program

import { Component, OnInit } from '@angular/core';

// Layout for about page
@Component({
  selector: 'app-about',
  template: `
    <div class="container">
      <div class="row">
        <h2>About Page Routing in Action!</h2>
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
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

// end program