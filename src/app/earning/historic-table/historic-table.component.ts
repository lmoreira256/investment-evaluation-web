import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { IEarning } from 'src/interfaces/IEarning';
import { IEarningPageable } from 'src/interfaces/IEarningPageable';
import { EarningService } from 'src/services/earning.service';
import Formatter from 'src/utils/Formatter';

@Component({
  selector: 'app-historic-table',
  templateUrl: './historic-table.component.html',
  styleUrls: ['./historic-table.component.scss']
})
export class HistoricTableComponent {

  pageIndex: string = '0';
  dataSource: IEarning[] = [];
  pageable: IEarningPageable = null as any;
  displayedColumns: string[] = ['stockName', 'currentValue', 'description', 'createdAt'];

  constructor(
    public formatter: Formatter,
    private earningService: EarningService
  ) { }

  ngOnInit() {
    this.getEarnings();
  }

  handlePageEvent(e: PageEvent) {
    this.pageIndex = e.pageIndex.toString();
    this.getEarnings();
  }

  getEarnings() {
    this.earningService.list(this.pageIndex)
      .subscribe((data: IEarningPageable) => {
        this.dataSource = data.content
        this.pageable = data;
      })
  }

}
