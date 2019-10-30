import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef} from '@angular/material';
import { OrderComponent} from '../order/order.component'

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  @Input() public order;

  constructor(private dialogRef: MatDialogRef<OrderComponent>) { }

  ngOnInit() {
    console.log(this.order);
  }

  close() {
    this.dialogRef.close();
};

}