import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StockService } from 'src/services/stock.service';
import Formatter from 'src/utils/Formatter';
import { NewStockDialogComponent } from './new-stock-dialog/new-stock-dialog.component';
import { MatDrawer } from '@angular/material/sidenav';
import { IListColumn } from 'src/interfaces/IListColumn';
import { IActiveSummary } from 'src/interfaces/IActiveSummary';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent {
  items: any;

  listColumns: IListColumn[] = [
    {
      fieldOne: 'active',
      fieldTwo: '',
      name: '',
      type: 'image',
      formatType: '',
    },
    {
      fieldOne: 'active',
      fieldTwo: 'description',
      name: '',
      type: 'info',
      formatType: '',
    },
    {
      fieldOne: 'cashReturn',
      fieldTwo: 'profitability',
      name: '',
      type: 'value-info',
      formatType: '',
    },
    {
      fieldOne: 'amount',
      fieldTwo: '',
      name: 'Quantidade',
      type: 'text',
      formatType: '',
    },
    {
      fieldOne: 'currentValue',
      fieldTwo: '',
      name: 'Valor Atual',
      type: 'text',
      formatType: 'currency',
    },
    {
      fieldOne: 'purchaseValue',
      fieldTwo: '',
      name: 'Valor de Compra',
      type: 'text',
      formatType: 'currency',
    },
    {
      fieldOne: 'averagePurchase',
      fieldTwo: '',
      name: 'Média de Compra',
      type: 'text',
      formatType: 'currency',
    },
    {
      fieldOne: 'updatedAt',
      fieldTwo: '',
      name: 'Última atualização',
      type: 'text',
      formatType: 'date',
    },
  ];

  summary: IActiveSummary | any;

  constructor(
    public dialog: MatDialog,
    public formatter: Formatter,
    public stockService: StockService
  ) {}

  ngOnInit() {
    this.getStockSummary();
    this.getStocks();
  }

  saveStock() {
    this.stockService.put(this.stockService.stockSelected).subscribe(() => {
      this.stockService.stockSelected = null;
    });
  }

  createStock() {
    const dialogRef = this.dialog.open(NewStockDialogComponent);

    dialogRef.afterClosed().subscribe(() => {
      this.getStockSummary();
      this.getStocks();
    });
  }

  getStocks() {
    this.stockService.listOnlyStock().subscribe((data) => {
      this.items = data;
    });
  }

  getStockSummary() {
    this.stockService.getStockSummary().subscribe((data) => {
      this.summary = data;
    });
  }
}
