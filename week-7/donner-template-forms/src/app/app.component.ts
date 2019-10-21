/*============================================
; Title: app.component.ts
; Author: Adam Donner
; Date: 21 October 2019
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
  title = 'donner-template-forms';

  onSubmit(formData) {
    console.log(formData);
  }
}
// end program