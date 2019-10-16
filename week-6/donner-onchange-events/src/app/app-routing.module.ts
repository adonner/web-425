/*============================================
; Title: app-routing.module.ts
; Author: Adam Donner
; Date: 16 October 2019
; Description:  app-routing.module.ts
;===========================================
*/


// start program

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// end program