/*============================================
; Title: login.component.ts
; Author: Adam Donner
; Date: 25 September 2019
; Description:  login.component.ts
;===========================================
*/


// start program

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <h1 class="login">Welcome to the Login Page!</h1>
  `,
  styles: [`
    h1 {
      color: green;
      background-color: silver;
    }
  `]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
// end program