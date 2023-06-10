import { Component } from '@angular/core';
import { IStockHistoricPageable } from 'src/interfaces/IStockHistoricPageable';
import { IStockHistoric } from 'src/interfaces/IStockHistoric';
import { StockHistoricService } from 'src/services/stock-historic.service';
import { PageEvent } from '@angular/material/paginator';
import Formatter from '../../utils/Formatter';
import { ITableColumn } from 'src/interfaces/ITableColumn';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  pageIndex: string = '0';
  pageable: IStockHistoricPageable = null as any;
  dataSource: IStockHistoric[] = [];
  displayedColumns: string[] = [
    'actualValue',
    'amount',
    'cashReturn',
    'profitability',
    'purchaseValue',
    'historicType',
    'createdAt',
  ];

  columns: ITableColumn[] = [
    {
      name: 'actualValue',
      description: 'Valor Atual',
      type: 'money',
      alignCenter: true,
      returnView: false,
    },
    {
      name: 'amount',
      description: 'Quantidade',
      type: 'text',
      alignCenter: false,
      returnView: false,
    },
    {
      name: 'cashReturn',
      description: 'Retorno (R$)',
      type: 'money',
      alignCenter: false,
      returnView: true,
    },
    {
      name: 'profitability',
      description: 'Retorno (%)',
      type: 'percent',
      alignCenter: false,
      returnView: true,
    },
    {
      name: 'purchaseValue',
      description: 'Valor de Compra',
      type: 'money',
      alignCenter: false,
      returnView: false,
    },
    {
      name: 'historicType',
      description: 'Tipo do Histórico',
      type: 'activetype',
      alignCenter: false,
      returnView: false,
    },
    {
      name: 'createdAt',
      description: 'Data de Criação',
      type: 'datetime',
      alignCenter: false,
      returnView: false,
    },
  ];

  constructor(
    public formatter: Formatter,
    public stockHistoricService: StockHistoricService
  ) {}

  ngOnInit() {
    this.getStockHistorics();
  }

  handlePageEvent(e: PageEvent) {
    this.pageIndex = e.pageIndex.toString();
    this.getStockHistorics();
  }

  getStockHistorics() {
    this.stockHistoricService.list(this.pageIndex).subscribe((data: any) => {
      this.dataSource = data.content;
      this.pageable = data;
    });
  }

  createStockHistoric() {
    this.stockHistoricService.post().subscribe(() => {
      this.getStockHistorics();
    });
  }
}
