import { Component } from '@angular/core';
import { IPageable } from 'src/interfaces/IPageable';
import { IStockHistoric } from 'src/interfaces/IStockHistoric';
import { StockHistoricService } from 'src/services/stock-historic.service';
import { PageEvent } from '@angular/material/paginator';
import { StockHistoricTypeEnum } from 'src/enums/StockHistoricTypeEnum';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  pageIndex: string = '0';
  pageable: IPageable = null as any;
  dataSource: IStockHistoric[] = [];
  displayedColumns: string[] = ['actualValue', 'amount', 'cashReturn', 'profitability', 'purchaseValue', 'historicType', 'createdAt'];

  constructor(
    private stockHistoricService: StockHistoricService
  ) { }

  ngOnInit() {
    this.getStockHistorics();
  }

  handlePageEvent(e: PageEvent) {
    this.pageIndex = e.pageIndex.toString();
    this.getStockHistorics();
  }

  getStockHistorics() {
    this.stockHistoricService.list(this.pageIndex)
      .subscribe((data: IPageable) => {
        this.dataSource = data.content
        this.pageable = data;
      })
  }

  formatDate(date: Date) {
    return new Date(date).toLocaleDateString("pt-br");
  }

  formatCurrency(value: number) {
    return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  }

  formatPercent(value: number) {
    return (value / 100).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 });
  }

  formatEnum(value: string) {
    return StockHistoricTypeEnum[value as keyof typeof StockHistoricTypeEnum];
  }

}
