/*============================================
; Title: app.mdoule.ts
; Author: Adam Donner
; Date: 2 October 2019
; Description:  app.mdodule.ts
;===========================================
*/


// start program

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// end program