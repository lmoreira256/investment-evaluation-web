import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { IStock } from 'src/interfaces/IStock';
import { StockService } from 'src/services/stock.service';
import Formatter from 'src/utils/Formatter';

@Component({
  selector: 'app-new-stock-dialog',
  templateUrl: './new-stock-dialog.component.html',
  styleUrls: ['./new-stock-dialog.component.scss'],
})
export class NewStockDialogComponent {
  stock: IStock = {} as IStock;

  constructor(
    public formatter: Formatter,
    public dialogRef: MatDialogRef<NewStockDialogComponent>,
    private stockService: StockService
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  save() {
    console.log('newStock: ', this.stock);
    this.stockService.post(this.stock).subscribe(() => {
      this.closeDialog();
    });
  }
}
