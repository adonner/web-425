/*============================================
; Title: order.component.ts
; Author: Adam Donner
; Date: 6 November 2019
; Description:  order.component.ts
;===========================================
*/


// start program


import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { InvoiceComponent } from '../invoice/invoice.component';
import { ticket } from './ticket'
​
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  services: ticket[] = [];
  
​
order = {
    password: { price: null },
    spyware: { price: null },
    memory: { price: null },
    software: { price: null },
    tuneUp: { price: null },
    cleanUp: { price: null },
    keyboard: { price: null },
    parts: { price: null },
    labor: { price: null },
    total: { price: null }
  };
​
  onSubmit(formData) {
​
      if (formData.serviceRequest.password) {
        this.order.password.price = 39.99;
        this.services.push({service: 'Password Reset', price: 39.99, total: 0});
      }
      if (formData.serviceRequest.spyware) {
        this.order.spyware.price = 99.99;
        this.services.push({service: 'Spyware Removal', price: 99.99, total: 0});
      }
      if (formData.serviceRequest.memory) {
        this.order.memory.price = 129.99;
        this.services.push({service: 'RAM Upgrade', price: 129.99, total: 0});
      }
      if (formData.serviceRequest.software) {
        this.order.software.price = 49.99;
        this.services.push({service: 'Software Installation', price: 49.99, total: 0});
      }
      if (formData.serviceRequest.tuneUp) {
        this.order.tuneUp.price = 89.99;
        this.services.push({service: 'Tune-Up', price: 89.99, total: 0});
      }
      if (formData.serviceRequest.cleanUp) {
        this.order.cleanUp.price = 149.99;
        this.services.push({service: 'Disk Clean-up', price: 149.99, total: 0});
      }
      if (formData.serviceRequest.keyboard) {
        this.order.keyboard.price = 45.00;
        this.services.push({service: 'Keyboard Cleaning', price: 45.00, total: 0});
      }
      if (formData.serviceRequest.parts) {
        this.order.parts.price = formData.serviceRequest.parts;
        this.services.push({service: 'Additional Parts', price: this.order.parts.price, total: 0});
      }
      if (formData.serviceRequest.labor) {
        const laborAmount = formData.serviceRequest.labor * 50;
        this.order.labor.price = laborAmount;
        this.services.push({service: 'Labor @ $50/hr', price: this.order.labor.price, total: 0});
      }
      if (formData.serviceRequest) {
        this.services.push({service: null, price: null, total:    
          this.order.password.price +
          this.order.spyware.price +
          this.order.memory.price +
          this.order.software.price +
          this.order.tuneUp.price +
          this.order.cleanUp.price +
          this.order.keyboard.price +
          this.order.parts.price +
          this.order.labor.price
          
        })
      }  
    console.log(this.services);
  }
  constructor(private dialog: MatDialog) { // what goes here and how does it link to invoices.ts
  }
​
  openDialog() {
    const dialogRef = this.dialog.open(InvoiceComponent, {
      data: {
        ticket: this.services
      },
      disableClose: true,
      width: '800px'
    });
​
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        this.services = [];
        this.order = {
          password: { price: null },
          spyware: { price: null },
          memory: { price: null },
          software: { price: null },
          tuneUp: { price: null },
          cleanUp: { price: null },
          keyboard: { price: null },
          parts: { price: null },
          labor: { price: null },
          total: { price: null }
        };

        console.log('The dialog window has closed!');
      }
    });
  }
}
// end program