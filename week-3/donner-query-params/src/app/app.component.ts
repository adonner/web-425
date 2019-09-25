/*============================================
; Title: app.component.ts
; Author: Adam Donner
; Date: 25 September 2019
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
  title = 'query-params';
  userId = 1098;
}
// end program