/*============================================
; Title: shipping.module.ts
; Author: Adam Donner
; Date: 8 September 2019
; Description:  shipping.module.ts
;===========================================
*/


// start program

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShippingComponent } from './shipping.component';



@NgModule({
  declarations: [ShippingComponent],
  imports: [
    CommonModule
  ],
  exports: [ShippingComponent]
})
export class ShippingModule { }

// end program