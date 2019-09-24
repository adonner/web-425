import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h1 class="home">Welcome Home!</h1>
  `,
  styles: [`
    .home { backgorund-color: cyan;}
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
