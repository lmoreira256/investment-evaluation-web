import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { IEarning } from 'src/interfaces/IEarning';
import { StockService } from 'src/services/stock.service';
import Formatter from 'src/utils/Formatter';

@Component({
  selector: 'app-new-earning-dialog',
  templateUrl: './new-earning-dialog.component.html',
  styleUrls: ['./new-earning-dialog.component.scss'],
})
export class NewEarningDialogComponent {
  stocks: any;
  earning: IEarning = {} as IEarning;

  constructor(
    public formatter: Formatter,
    public dialogRef: MatDialogRef<NewEarningDialogComponent>,
    private stockService: StockService
  ) {}

  ngOnInit() {
    this.getStocks();
  }

  getStocks() {
    this.stockService.listAll().subscribe((data) => {
      this.stocks = data;
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  save() {}
}
