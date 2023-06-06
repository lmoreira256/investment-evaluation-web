import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditStockDialogComponent } from 'src/app/stock/edit-stock-dialog/edit-stock-dialog.component';
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
  }

  openDialog(stock: IStock): void {
    this.stockService.stockSelected = stock;
    console.log(this.stockService.stockSelected);
    this.drawer.toggle();

    return;
    const dialogRef = this.dialog.open(EditStockDialogComponent, {
      data: JSON.parse(JSON.stringify(stock)),
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getStocks();
    });
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
}
