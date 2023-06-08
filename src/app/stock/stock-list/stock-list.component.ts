import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IStock } from 'src/interfaces/IStock';
import { StockService } from 'src/services/stock.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss'],
})
export class StockListComponent {
  @Input()
  data: any;

  @Input()
  drawer: any;

  constructor(public dialog: MatDialog, private stockService: StockService) {}

  editStock(stock: IStock): void {
    this.stockService.stockSelected = JSON.parse(JSON.stringify(stock));
    this.drawer.toggle();
  }
}
