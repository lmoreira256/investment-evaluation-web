import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StockService } from 'src/services/stock.service';
import Formatter from 'src/utils/Formatter';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent {
  items: any;

  constructor(
    public formatter: Formatter,
    public dialog: MatDialog,
    public stockService: StockService
  ) {}

  saveStock() {
    this.stockService.put(this.stockService.stockSelected).subscribe(() => {
      this.stockService.stockSelected = null;
    });
  }
}
