import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <h1 class="home">Welcome to the Login Page!</h1>
  `,
  styles: [`
    .home { backgorund-color: grey;}
  `]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
