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
      field: 'active',
      name: '',
      description: '',
      type: 'image',
      formatType: '',
    },
    {
      field: 'active',
      name: '',
      description: 'description',
      type: 'info',
      formatType: '',
    },
    {
      field: 'cashReturn',
      name: '',
      description: 'profitability',
      type: 'value-info',
      formatType: '',
    },
    {
      field: 'amount',
      name: 'Quantidade',
      description: '',
      type: 'text',
      formatType: '',
    },
    {
      field: 'currentValue',
      name: 'Valor Atual',
      description: '',
      type: 'text',
      formatType: 'currency',
    },
    {
      field: 'purchaseValue',
      name: 'Valor de Compra',
      description: '',
      type: 'text',
      formatType: 'currency',
    },
    {
      field: 'averagePurchase',
      name: 'Média de Compra',
      description: '',
      type: 'text',
      formatType: 'currency',
    },
    {
      field: 'stockType',
      name: 'Tipo',
      description: '',
      type: 'text',
      formatType: 'stockType',
    },
    {
      field: 'updatedAt',
      name: 'Última atualização',
      description: '',
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
}
