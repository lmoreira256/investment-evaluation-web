import { Component } from '@angular/core';
import { IStockHistoricPageable } from 'src/interfaces/IStockHistoricPageable';
import { IStockHistoric } from 'src/interfaces/IStockHistoric';
import { StockHistoricService } from 'src/services/stock-historic.service';
import { PageEvent } from '@angular/material/paginator';
import Formatter from '../../utils/Formatter';

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

  constructor(
    public formatter: Formatter,
    private stockHistoricService: StockHistoricService
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
