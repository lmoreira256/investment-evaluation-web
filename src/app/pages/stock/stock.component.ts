import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StockService } from 'src/app/services/stock.service';
import Formatter from 'src/utils/Formatter';
import { NewStockDialogComponent } from './new-stock-dialog/new-stock-dialog.component';
import { IListColumn } from 'src/app/interfaces/IListColumn';
import { IActiveSummary } from 'src/app/interfaces/IActiveSummary';
import { ActiveService } from 'src/app/services/active.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent {
  items: any;

  listColumns: IListColumn[] = [
    {
      fieldOne: 'name',
      fieldTwo: '',
      name: '',
      type: 'image',
      formatType: '',
    },
    {
      fieldOne: 'name',
      fieldTwo: 'description',
      name: '',
      type: 'info',
      formatType: '',
    },
    {
      fieldOne: 'resultValue',
      fieldTwo: 'resultPercentageValue',
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
      fieldOne: 'objective',
      fieldTwo: '',
      name: 'Objetivo',
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
      fieldOne: 'averageValue',
      fieldTwo: '',
      name: 'Média de Compra',
      type: 'text',
      formatType: 'currency',
    },
  ];

  summary: IActiveSummary | any;

  constructor(
    public dialog: MatDialog,
    public formatter: Formatter,
    public stockService: StockService,
    public activeService: ActiveService
  ) {}

  ngOnInit() {
    this.getSummary();
    this.getStocks();
  }

  saveStock() {
    this.activeService
      .update(this.activeService.activeSelected)
      .subscribe(() => {
        this.activeService.activeSelected = null;
      });
  }

  createStock() {
    const dialogRef = this.dialog.open(NewStockDialogComponent);

    dialogRef.afterClosed().subscribe(() => {
      this.getSummary();
      this.getStocks();
    });
  }

  getStocks() {
    this.stockService.list().subscribe((data) => {
      this.items = data;
    });
  }

  getSummary() {
    this.stockService.summary().subscribe((data) => {
      this.summary = data;
    });
  }
}
