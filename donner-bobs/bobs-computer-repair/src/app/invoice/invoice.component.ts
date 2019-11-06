/*============================================
; Title: invoice.component.ts
; Author: Adam Donner
; Date: 6 November 2019
; Description:  invoice.component.ts
;===========================================
*/


// start program


import { Component, OnInit, Input, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { getLocaleDateFormat } from '@angular/common';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  // Declare services array
  services: [];
  // Date
  today: number = Date.now();
  

  constructor(private dialogRef: MatDialogRef<InvoiceComponent>, @Inject(MAT_DIALOG_DATA) data) {  
    this.services = data.ticket;
  }

  ngOnInit() {
  }

}
// end program