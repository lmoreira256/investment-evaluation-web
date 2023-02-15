import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IStock } from 'src/interfaces/IStock';
import { StockService } from 'src/services/stock.service';
import Formatter from 'src/utils/Formatter';

@Component({
  selector: 'app-edit-stock-dialog',
  templateUrl: './edit-stock-dialog.component.html',
  styleUrls: ['./edit-stock-dialog.component.scss'],
})
export class EditStockDialogComponent {
  constructor(
    public formatter: Formatter,
    public dialogRef: MatDialogRef<EditStockDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public stock: IStock,
    private stockService: StockService
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  save() {
    this.stockService.put(this.stock).subscribe(() => {
      this.closeDialog();
    });
  }
}
