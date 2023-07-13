import { Component, Input, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { IPageable } from 'src/app/interfaces/IPageable';
import { ITableColumn } from 'src/app/interfaces/ITableColumn';
import { HostService } from 'src/app/services/host.service';
import Formatter from 'src/utils/Formatter';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input()
  columns: ITableColumn[] = [];

  @Input()
  showPaginator: boolean = false;

  @Input()
  getDataFunction: Function;

  @ViewChild('paginator')
  paginator: MatPaginator;

  pageIndex: string = '0';
  data: IPageable = null as any;
  displayedColumns: string[] = [];

  constructor(public formatter: Formatter, private hostService: HostService) {}

  ngOnInit() {
    this.callGetDataFunction();
    this.mountDisplayedColumns();
  }

  mountValue(element: any, column: ITableColumn) {
    if (column.type == 'money' || column.type == 'return-view') {
      return this.formatter.formatCurrency(element[column.name]);
    }

    if (column.type == 'date') {
      return this.formatter.formatDate(element[column.name]);
    }

    if (column.type == 'percent') {
      return this.formatter.formatPercent(element[column.name]);
    }

    if (column.type == 'datetime') {
      return this.formatter.formatDateTime(element[column.name]);
    }

    if (column.type == 'activetype') {
      return this.formatter.formatEnum(element[column.name]);
    }

    return element[column.name];
  }

  getIcon(element: any, column: ITableColumn) {
    return element[column.name] > 0 ? 'arrow_upward' : 'arrow_downward';
  }

  handlePageEvent(e: PageEvent) {
    this.pageIndex = e.pageIndex.toString();
    this.callGetDataFunction();
  }

  callGetDataFunction() {
    this.getDataFunction(this.pageIndex).subscribe((data: IPageable) => {
      this.data = data;
    });
  }

  mountDisplayedColumns() {
    this.displayedColumns = this.columns.map((x) => x.name);
  }

  updateData() {
    if (this.paginator.pageIndex == 0) {
      this.callGetDataFunction();
    } else {
      this.paginator.firstPage();
    }
  }
}
