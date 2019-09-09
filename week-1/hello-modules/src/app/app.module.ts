/*============================================
; Title: app.module.ts
; Author: Adam Donner
; Date: 8 September 2019
; Description:  app.module.ts
;===========================================
*/

// start program

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShippingModule } from './shipping/shipping.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShippingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// end program