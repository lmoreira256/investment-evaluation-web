import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StockService } from 'src/services/stock.service';
import Formatter from 'src/utils/Formatter';
import { NewStockDialogComponent } from './new-stock-dialog/new-stock-dialog.component';
import { MatDrawer } from '@angular/material/sidenav';
import { IListColumn } from 'src/interfaces/IListColumn';

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
      fieldOne: 'stockType',
      fieldTwo: '',
      name: 'Tipo',
      type: 'text',
      formatType: 'stockType',
    },
    {
      fieldOne: 'updatedAt',
      fieldTwo: '',
      name: 'Última atualização',
      type: 'text',
      formatType: 'date',
    },
  ];

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

  editStock(stock: any): void {
    this.stockService.stockSelected = JSON.parse(JSON.stringify(stock));
    this.drawer.toggle();
  }
}
