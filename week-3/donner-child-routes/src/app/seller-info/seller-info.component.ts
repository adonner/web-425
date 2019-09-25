/*============================================
; Title: seller-info.component.ts
; Author: Adam Donner
; Date: 25 September 2019
; Description:  seller-info.component.ts
;===========================================
*/


// start program

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seller-info',
  template: `

        <h2>The seller is Mary Lou, id {{ sellerID }}</h2>
  `,
  styles: [
    `
    :host {
      margin-top: 20px;
    }
    h2 {
      color: blue;
    }
    
    `
  ]
})
export class SellerInfoComponent implements OnInit {
  
  sellerID: string;

  constructor(route: ActivatedRoute) {
    this.sellerID = route.snapshot.paramMap.get('id');
   }

  ngOnInit() {
  }

}
// end program