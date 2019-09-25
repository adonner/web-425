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
    <h1 class="home">Welcome Home!</h1>
  `,
  styles: [`
    .home { color: cyan;}
    h1 {
      background-color: grey;
    }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
// end program