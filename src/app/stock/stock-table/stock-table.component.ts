import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { IStock } from 'src/interfaces/IStock';
import { IStockPageable } from 'src/interfaces/IStockPageable';
import { StockService } from 'src/services/stock.service';
import Formatter from 'src/utils/Formatter';
import { EditStockDialogComponent } from '../edit-stock-dialog/edit-stock-dialog.component';

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
    public dialog: MatDialog,
    private stockService: StockService
  ) {}

  ngOnInit() {
    this.getStocks();
  }

  handlePageEvent(e: PageEvent) {
    this.pageIndex = e.pageIndex.toString();
    this.getStocks();
  }

  getStocks() {
    this.stockService.list(this.pageIndex).subscribe((data: IStockPageable) => {
      this.dataSource = data.content;
      this.pageable = data;
    });
  }

  openDialog(stock: IStock): void {
    const dialogRef = this.dialog.open(EditStockDialogComponent, {
      data: JSON.parse(JSON.stringify(stock)),
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getStocks();
    });
  }
}
