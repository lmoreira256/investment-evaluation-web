import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IStock } from 'src/interfaces/IStock';
import { IStockPageable } from 'src/interfaces/IStockPageable';
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
    private stockService: StockService
  ) {}

  getStocks() {
    this.stockService.listAll().subscribe((data) => {
      this.items = data;
    });
  }
}
