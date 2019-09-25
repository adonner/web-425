/*============================================
; Title: login.guard.ts
; Author: Adam Donner
; Date: 25 September 2019
; Description:  login.guard.ts
;===========================================
*/


// start program

import { Injectable } from '@angular/core';
import { CanActivate, Router} from "@angular/router";

@Injectable()
export class LoginGuard implements CanActivate {
  constructor (private router: Router) {}

  canActivate() {
      let loggedIn = Math.random() < 0.5;

      if (!loggedIn) {
          alert("You're not logged in and will be redirected to Login Page");
          this.router.navigate(['/login']);
      }
      return loggedIn;
  } 
}

// end program