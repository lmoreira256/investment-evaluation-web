import { Component, Input } from '@angular/core';
import { ITableColumn } from 'src/interfaces/ITableColumn';
import Formatter from 'src/utils/Formatter';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input()
  public dataSource = [];

  @Input()
  public columns: ITableColumn[] = [];

  @Input()
  displayedColumns: string[] = [];

  constructor(public formatter: Formatter) {}

  mountValue(element: any, column: ITableColumn) {
    if (column.type == 'money' || column.type == 'return-view') {
      return this.formatter.formatCurrency(element[column.name]);
    }

    if (column.type == 'date') {
      return this.formatter.formatDate(element[column.name]);
    }

    return element[column.name];
  }

  getIcon(element: any, column: ITableColumn) {
    return element[column.name] > 0 ? 'arrow_upward' : 'arrow_downward';
  }
}
