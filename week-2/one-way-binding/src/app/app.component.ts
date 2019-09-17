/*============================================
; Title: app.component.ts
; Author: Adam Donner
; Date: 17 September 2019
; Description:  app.component.ts
;===========================================
*/


// start program

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{name}}</h1>
    <button (click)="changeName()">Change Name</button>
  `,
  styles: [`
    h1{
      color: red;
    }
  `]
})
export class AppComponent {
  title = 'app'

  // class property
  name: string = 'Adam Donner';

  // change name function
  changeName() {
    this.name = "Adam D Donner"
  }
}

// end program