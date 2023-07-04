import { Component } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDialogRef } from '@angular/material/dialog';
import { IEarning } from 'src/interfaces/IEarning';
import { ActiveService } from 'src/services/active.service';
import { EarningService } from 'src/services/earning.service';
import Formatter from 'src/utils/Formatter';

@Component({
  selector: 'app-new-earning-dialog',
  templateUrl: './new-earning-dialog.component.html',
  styleUrls: ['./new-earning-dialog.component.scss'],
})
export class NewEarningDialogComponent {
  actives: any;
  earning: IEarning = {} as IEarning;

  constructor(
    public formatter: Formatter,
    public dialogRef: MatDialogRef<NewEarningDialogComponent>,
    private activeService: ActiveService,
    private earningService: EarningService
  ) {}

  ngOnInit() {
    this.getStocks();
  }

  getStocks() {
    this.activeService.list().subscribe((data) => {
      this.actives = data;
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  save() {
    console.log('this.earning: ', this.earning);
    this.earningService.create(this.earning).subscribe(() => {
      this.closeDialog();
    });
  }

  changePayDay(event: MatDatepickerInputEvent<Date>) {
    this.earning.payday = event.value || new Date();
  }
}
