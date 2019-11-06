/*============================================
; Title: app-routing.module.ts
; Author: Adam Donner
; Date: 6 November 2019
; Description:  app-routing.module.ts
;===========================================
*/


// start program

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './order/order.component';

// Home path to orders page
const routes: Routes = [
  { path: '', component: OrderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// end program