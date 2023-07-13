import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EarningService } from 'src/app/services/earning.service';
import Formatter from 'src/utils/Formatter';
import { NewEarningDialogComponent } from '../new-earning-dialog/new-earning-dialog.component';
import { ITableColumn } from 'src/app/interfaces/ITableColumn';
import { TableComponent } from 'src/app/components/table/table.component';

@Component({
  selector: 'app-historic-table',
  templateUrl: './historic-table.component.html',
  styleUrls: ['./historic-table.component.scss'],
})
export class HistoricTableComponent {
  @ViewChild('table', { static: true })
  table: TableComponent;

  columns: ITableColumn[] = [
    {
      name: 'stockName',
      description: 'Ativo',
      type: 'text',
      alignCenter: true,
      returnView: false,
    },
    {
      name: 'payday',
      description: 'Data Pagamento',
      type: 'date',
      alignCenter: false,
      returnView: false,
    },
    {
      name: 'amountPaid',
      description: 'Valor',
      type: 'money',
      alignCenter: false,
      returnView: true,
    },
    {
      name: 'description',
      description: 'Descrição',
      type: 'text',
      alignCenter: false,
      returnView: false,
    },
  ];

  constructor(
    public formatter: Formatter,
    public earningService: EarningService,
    public dialog: MatDialog
  ) {}

  createEarning() {
    const dialogRef = this.dialog.open(NewEarningDialogComponent);

    dialogRef.afterClosed().subscribe(() => {
      this.table.updateData();
    });
  }
}
