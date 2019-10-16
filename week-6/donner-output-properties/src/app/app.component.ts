/*============================================
; Title: app.component.ts
; Author: Adam Donner
; Date: 16 October 2019
; Description:  app.component.ts
;===========================================
*/


// start program

import { Component } from '@angular/core';
import { PriceQuote } from './price-quote/iprice-quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  priceQuote: PriceQuote;

  priceQuoteHandler(event:PriceQuote) {
    this.priceQuote = event;
  }
}
// end program