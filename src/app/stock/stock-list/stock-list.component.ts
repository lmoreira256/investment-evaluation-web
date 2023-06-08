import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IStock } from 'src/interfaces/IStock';
import { StockService } from 'src/services/stock.service';
import { NewStockDialogComponent } from '../new-stock-dialog/new-stock-dialog.component';

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

  ngOnInit() {
    this.getStocks();
    this.drawerEvent();
  }

  drawerEvent() {
    this.drawer.openedChange.subscribe((isOpen: boolean) => {
      if (!isOpen) {
        this.getStocks();
      }
    });
  }

  openDialog(stock: IStock): void {
    this.stockService.stockSelected = JSON.parse(JSON.stringify(stock));
    this.drawer.toggle();
  }

  getStocks() {
    this.stockService.listAll().subscribe((data) => {
      this.data = data;
    });
  }

  createStock() {
    const dialogRef = this.dialog.open(NewStockDialogComponent);

    dialogRef.afterClosed().subscribe(() => {
      this.getStocks();
    });
  }

  saveStock() {
    this.stockService.put(this.stockService.stockSelected).subscribe(() => {
      this.stockService.stockSelected = null;
      this.drawer.toggle();
    });
  }
}
