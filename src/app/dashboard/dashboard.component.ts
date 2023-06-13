import { Component, ViewChild } from '@angular/core';
import { IStockHistoricPageable } from 'src/interfaces/IStockHistoricPageable';
import { IStockHistoric } from 'src/interfaces/IStockHistoric';
import { StockHistoricService } from 'src/services/stock-historic.service';
import { PageEvent } from '@angular/material/paginator';
import Formatter from '../../utils/Formatter';
import { ITableColumn } from 'src/interfaces/ITableColumn';
import { TableComponent } from '../components/table/table.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  @ViewChild('table', { static: true })
  table: TableComponent;

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

  createStockHistoric() {
    this.stockHistoricService.post().subscribe(() => {
      this.table.updateData();
    });
  }
}
