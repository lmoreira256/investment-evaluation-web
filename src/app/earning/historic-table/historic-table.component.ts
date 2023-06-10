import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { IEarning } from 'src/interfaces/IEarning';
import { IEarningPageable } from 'src/interfaces/IEarningPageable';
import { EarningService } from 'src/services/earning.service';
import Formatter from 'src/utils/Formatter';
import { NewEarningDialogComponent } from '../new-earning-dialog/new-earning-dialog.component';
import { ITableColumn } from 'src/interfaces/ITableColumn';

@Component({
  selector: 'app-historic-table',
  templateUrl: './historic-table.component.html',
  styleUrls: ['./historic-table.component.scss'],
})
export class HistoricTableComponent {
  pageIndex: string = '0';
  dataSource = [];
  pageable: IEarningPageable = null as any;
  displayedColumns: string[] = [
    'stockName',
    'payday',
    'amountPaid',
    'description',
  ];
  columns: ITableColumn[] = [
    {
      name: 'stockName',
      description: 'Nome do Ativo',
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
    this.earningService.list(this.pageIndex).subscribe((data: any) => {
      this.dataSource = data.content;
      this.pageable = data;
    });
  }

  createEarning() {
    const dialogRef = this.dialog.open(NewEarningDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      this.getEarnings();
    });
  }
}
