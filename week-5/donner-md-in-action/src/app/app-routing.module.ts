/*============================================
; Title: app-routing.module.ts
; Author: Adam Donner
; Date: 9 October 2019
; Description:  app-routing.module.ts
;===========================================
*/


// start program

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component'


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// end program