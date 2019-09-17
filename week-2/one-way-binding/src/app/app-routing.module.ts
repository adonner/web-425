/*============================================
; Title: app-routing.component.ts
; Author: Adam Donner
; Date: 8 September 2019
; Description:  app-routing.component.ts
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
