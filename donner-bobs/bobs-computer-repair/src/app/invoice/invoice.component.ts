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
  services: [];
  totalOrder: [];
  today: number = Date.now();
  

  constructor(private dialogRef: MatDialogRef<InvoiceComponent>, @Inject(MAT_DIALOG_DATA) data) {
      this.services = data.ticket;
      this.totalOrder = data.invoiceTotal;
  }

  ngOnInit() {
  }

}