/*============================================
; Title: app.component.ts
; Author: Adam Donner
; Date: 16 October 2019
; Description:  app.component.ts
;===========================================
*/


// start program

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'donner-onchange-events';

  myGreeting = "hello";
  myUser: { name: string } = { name: 'John' }
}
// end program