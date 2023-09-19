import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IListColumn } from 'src/app/interfaces/IListColumn';
import { EarningService } from 'src/app/services/earning.service';
import { NewEarningDialogComponent } from './new-earning-dialog/new-earning-dialog.component';

@Component({
  selector: 'app-earning',
  templateUrl: './earning.component.html',
  styleUrls: ['./earning.component.scss'],
})
export class EarningComponent {
  earnings: any;
  earningsForActive: any;
  earningsForMonth: any;
  earningSummary: any;

  earningListColumns: IListColumn[] = [
    {
      fieldOne: 'activeName',
      fieldTwo: '',
      name: 'Ativo',
      type: 'text',
      formatType: '',
      with: '80px',
    },
    {
      fieldOne: 'payday',
      fieldTwo: '',
      name: 'Data Pagamento',
      type: 'text',
      formatType: 'date',
      with: '140px',
    },
    {
      fieldOne: 'amountPaid',
      fieldTwo: '',
      name: 'Valor',
      type: 'text',
      formatType: 'currency',
      with: '100px',
    },
    {
      fieldOne: 'description',
      fieldTwo: '',
      name: 'Descrição',
      type: 'text',
      formatType: '',
      with: '360px',
    },
  ];

  earningSummaryListColumns: IListColumn[] = [
    {
      fieldOne: 'item',
      fieldTwo: '',
      name: 'Ativo',
      type: 'text',
      formatType: '',
      with: '80px',
    }, {
      fieldOne: 'totalValue',
      fieldTwo: '',
      name: 'Valor',
      type: 'text',
      formatType: 'currency',
      with: '',
    }
  ]

  constructor(
    public earningService: EarningService,
    private dialog: MatDialog
  ) {
    this.updateData();
  }

  updateData() {
    this.listEarnings();
    this.listEarningsForActive();
    this.listEarningsForMonth();
    this.getEarningSummary();
  }

  listEarnings() {
    this.earningService.list().subscribe((data: any) => {
      this.earnings = data;
    });
  }

  listEarningsForActive() {
    this.earningService.summaryActive().subscribe((data: any) => {
      this.earningsForActive = data
    })
  }

  listEarningsForMonth() {
    this.earningService.summaryMonth('DESC').subscribe((data: any) => {
      this.earningsForMonth = data
    })
  }

  createEarning() {
    const dialogRef = this.dialog.open(NewEarningDialogComponent);

    dialogRef.afterClosed().subscribe(() => {
      this.updateData();
    });
  }

  getEarningSummary() {
    this.earningService.earningSummary().subscribe((data: any) => {
      this.earningSummary = data;
    });
  }

}
