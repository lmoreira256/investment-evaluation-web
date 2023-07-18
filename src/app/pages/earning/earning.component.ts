import { Component } from '@angular/core';
import { IListColumn } from 'src/app/interfaces/IListColumn';
import { EarningService } from 'src/app/services/earning.service';

@Component({
  selector: 'app-earning',
  templateUrl: './earning.component.html',
  styleUrls: ['./earning.component.scss'],
})
export class EarningComponent {
  earnings: any;

  listColumns: IListColumn[] = [
    {
      fieldOne: 'stockName',
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

  constructor(private earningService: EarningService) {
    this.listEarnings();
  }

  listEarnings() {
    this.earningService.list().subscribe((data: any) => {
      this.earnings = data;
    });
  }
}
