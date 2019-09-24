import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  template: `
    <div class="container">
        <h2>Product Detail for Product: {{productId}}</h2>
        <router-outlet></router-outlet>
        <p><a [routerLink]="['./seller', sellerId]">Seller Info</a></p>
    </div>
  `,
  styles: [
    `
    .container {
      margin-top: 20px;
      background-color: grey;
    }
    h2 {
      color: red;
    }
    
    `
  ]
})
export class ProductDetailComponent implements OnInit {
  productId: string;
  sellerId = 5678;

  constructor(route: ActivatedRoute) {
    this.productId = route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  }

}
