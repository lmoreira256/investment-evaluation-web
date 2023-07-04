import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { IListColumn } from 'src/interfaces/IListColumn';
import { StockService } from 'src/services/stock.service';
import Formatter from 'src/utils/Formatter';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss'],
})
export class GeneralComponent {
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

  constructor(public formatter: Formatter, public stockService: StockService) {}

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
