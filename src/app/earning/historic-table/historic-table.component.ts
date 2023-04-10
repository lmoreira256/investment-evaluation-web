import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { IEarning } from 'src/interfaces/IEarning';
import { IEarningPageable } from 'src/interfaces/IEarningPageable';
import { EarningService } from 'src/services/earning.service';
import Formatter from 'src/utils/Formatter';
import { NewEarningDialogComponent } from '../new-earning-dialog/new-earning-dialog.component';

@Component({
  selector: 'app-historic-table',
  templateUrl: './historic-table.component.html',
  styleUrls: ['./historic-table.component.scss'],
})
export class HistoricTableComponent {
  pageIndex: string = '0';
  dataSource: IEarning[] = [];
  pageable: IEarningPageable = null as any;
  displayedColumns: string[] = [
    'stockName',
    'amountPaid',
    'description',
    'payday',
  ];

  constructor(
    public formatter: Formatter,
    private earningService: EarningService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getEarnings();
  }

  handlePageEvent(e: PageEvent) {
    this.pageIndex = e.pageIndex.toString();
    this.getEarnings();
  }

  getEarnings() {
    this.earningService
      .list(this.pageIndex)
      .subscribe((data: IEarningPageable) => {
        this.dataSource = data.content;
        this.pageable = data;
      });
  }

  createEarning() {
    this.dialog.open(NewEarningDialogComponent);
  }
}
