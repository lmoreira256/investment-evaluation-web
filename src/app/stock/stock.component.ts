import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StockService } from 'src/services/stock.service';
import Formatter from 'src/utils/Formatter';
import { NewStockDialogComponent } from './new-stock-dialog/new-stock-dialog.component';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent {
  items: any;

  @ViewChild('drawer', { static: true })
  drawer: MatDrawer;

  constructor(
    public dialog: MatDialog,
    public formatter: Formatter,
    public stockService: StockService
  ) {}

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

  saveStock() {
    this.stockService.put(this.stockService.stockSelected).subscribe(() => {
      this.stockService.stockSelected = null;
    });
  }

  createStock() {
    const dialogRef = this.dialog.open(NewStockDialogComponent);

    dialogRef.afterClosed().subscribe(() => {
      this.getStocks();
    });
  }

  getStocks() {
    this.stockService.listAll().subscribe((data) => {
      this.items = data;
    });
  }
}
