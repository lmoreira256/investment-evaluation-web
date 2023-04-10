import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Formatter from 'src/utils/Formatter';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent {
  items: any;

  constructor(public formatter: Formatter, public dialog: MatDialog) {}
}
