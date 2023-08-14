import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { IActive } from 'src/app/interfaces/IActive';
import { ActiveService } from 'src/app/services/active.service';
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
    this.active.resultValue =
      this.active.currentValue - this.active.purchaseValue;
    this.active.resultPercentageValue =
      ((this.active.currentValue - this.active.purchaseValue) / 100) * 100;

    this.activeService.create(this.active).subscribe(() => {
      this.closeDialog();
    });
  }
}