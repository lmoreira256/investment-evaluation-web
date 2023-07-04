import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { IActive } from 'src/interfaces/IActive';
import { ActiveService } from 'src/services/active.service';
import { StockService } from 'src/services/stock.service';
import Formatter from 'src/utils/Formatter';

@Component({
  selector: 'app-new-stock-dialog',
  templateUrl: './new-stock-dialog.component.html',
  styleUrls: ['./new-stock-dialog.component.scss'],
})
export class NewStockDialogComponent {
  active: IActive = {} as IActive;

  constructor(
    public formatter: Formatter,
    public dialogRef: MatDialogRef<NewStockDialogComponent>,
    private activeService: ActiveService
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  save() {
    this.activeService.create(this.active).subscribe(() => {
      this.closeDialog();
    });
  }
}
