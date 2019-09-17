/*============================================
; Title: app.component.ts
; Author: Adam Donner
; Date: 17 September 2019
; Description:  app.component.ts
;===========================================
*/


// start program

import { Component } from '@angular/core';

// HTML for application
@Component({
  selector: 'app-root',
  template: `
  <!--  Nav Bar -->
  <header>
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a class="navbar-brand" href="#">Two Way Binding</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">List</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">New</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <div class="container-fluid two-way-form w-50">
      <h2>Two-Way Binding Example</h2><br />
      <div class="form-group">
        <input class="form-control" type="text"
                placeholder="Enter your name ..."
                [(ngModel)]="name" #ctrl="ngModel">
        
        <button class="btn btn-primary form-control" (click)="name=''">Clear Name</button>
      </div>

      <div class="form-group">
        <p class="alert-sucess">Welcome to two-way binding, {{name}}! </p>
      </div>

    </div>
  `,
  // Styling for application
  styles: [`
  .btn-primary{
    width: auto;
    border-style: none;
    background: navy;
  }
  p{
    text-align: center;
  }
  .form-control{
    background:silver;
  }`]
    
})

export class AppComponent {
  title = 'two-way-binding';
  // Default variable for name
  name:string = 'Adam Donner'

}

// end program