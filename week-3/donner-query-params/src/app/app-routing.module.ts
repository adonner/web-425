/*============================================
; Title: app-routing.module.ts
; Author: Adam Donner
; Date: 25 September 2019
; Description:  app-routing.module.ts
;===========================================
*/


// start program

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { E404Component } from './e404/e404.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user/:id', component:UserComponent },
  { path: '**', component: E404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// end program