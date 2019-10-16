/*============================================
; Title: order.component.ts
; Author: Adam Donner
; Date: 16 October 2019
; Description:  order.component.ts
;===========================================
*/


// start program

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order',
  template: `
    <h4 *ngIf="!!stockSymbol">Buying {{quantity}} shares of {{stockSymbol}}</h4>
  `,
  styles: [`
  :host { background: cyan; }
  h4 { text: center }
  `]
})
export class OrderComponent implements OnInit {
  @Input() quantity: number;
  @Input() stockSymbol: string;
  
  constructor() { }

  ngOnInit() {
  }

}
// end program