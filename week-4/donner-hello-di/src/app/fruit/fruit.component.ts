/*============================================
; Title: fruit.component.ts
; Author: Adam Donner
; Date: 2 October 2019
; Description:  fruit.component.ts
;===========================================
*/


// start program

import { Component, OnInit } from '@angular/core';
import { FruitService } from "./fruit.service";
import { Fruit } from "./fruit";

@Component({
  selector: 'app-user',
  template: `
    <div class="container">
      <div class="row">
        <h2>Fruit Details</h2>
        <table class="table table-hover table-striped">
          <thead class="tbl-header">
            <tr>
              <th>ID</th>
              <th>Fruit</th>
              <th>Color</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ fruit.id }}</td>
              <td>{{ fruit.name }}</td>
              <td>{{ fruit.color }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: [`
    .tbl-header {
      background-color: steelblue;
      color: white; 
    }
  `],
  providers: [FruitService]
})
export class FruitComponent implements OnInit {
  fruit: Fruit;

  constructor(fruitService: FruitService) {
    this.fruit = fruitService.getFruit();
   }

  ngOnInit() {
  }

}
// end program