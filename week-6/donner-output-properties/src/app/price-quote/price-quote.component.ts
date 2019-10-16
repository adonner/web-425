/*============================================
; Title: price-quote.component.ts
; Author: Adam Donner
; Date: 16 October 2019
; Description:  price-quote.component.ts
;===========================================
*/


// start program

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { interval } from 'rxjs'
import { PriceQuote } from './iprice-quote';

@Component({
  selector: 'app-price-quote',
  template: `
      <strong>
        Inside PriceQuoteComponent
        {{ priceQuote?.stockSymbol }} <br/>
        <div class="center">{{ priceQuote?.lastPrice | currency: 'USD' }} </div>
      </strong>
  `,
  styles: [`
  :host { background-color: pink;
    text-align: center; }
  .center { background-color: pink;
    text-align: center;}
  `
  ]
})
export class PriceQuoteComponent implements OnInit {

    @Output() lastPrice = new EventEmitter<PriceQuote>();

    priceQuote: PriceQuote;

  constructor() {
    interval (2000)
      .subscribe(data => {
        this.priceQuote = {
          stockSymbol: 'IBM',
          lastPrice: 100 * Math.random()
        };

        this.lastPrice.emit(this.priceQuote);
      })
   }

  ngOnInit() {
  }

}
// end program