import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { IStock } from 'src/interfaces/IStock';
import { IStockPageable } from 'src/interfaces/IStockPageable';
import { StockService } from 'src/services/stock.service';
import Formatter from 'src/utils/Formatter';

@Component({
  selector: 'app-stock-table',
  templateUrl: './stock-table.component.html',
  styleUrls: ['./stock-table.component.scss'],
})
export class StockTableComponent {
  pageIndex: string = '0';
  dataSource: IStock[] = [];
  pageable: IStockPageable = null as any;
  displayedColumns: string[] = [
    'active',
    'description',
    'amount',
    'currentValue',
    'cashReturn',
    'profitability',
    'purchaseValue',
    'averagePurchase',
    'stockType',
    'updatedAt',
  ];

  constructor(
    public formatter: Formatter,
    private stockService: StockService
  ) {}

  ngOnInit() {
    this.getEarnings();
  }

  handlePageEvent(e: PageEvent) {
    this.pageIndex = e.pageIndex.toString();
    this.getEarnings();
  }

  getEarnings() {
    this.stockService.list(this.pageIndex).subscribe((data: IStockPageable) => {
      this.dataSource = data.content;
      this.pageable = data;
    });
  }
}
