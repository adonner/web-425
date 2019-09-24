import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="container">
      <div class="row">
        <h2>Welcome home to Passing Data to Routes!</h2>
      </div>
    </div>
  `,
  styles: [
    `
    .container {
      margin-top: 20px;
    }
    h2 {
      color: steeleblue;
    }
    
    `
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
