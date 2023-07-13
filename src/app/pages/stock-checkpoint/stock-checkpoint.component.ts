import { Component } from '@angular/core';
import { ICheckpoint } from 'src/app/interfaces/ICheckpoint';
import { IListColumn } from 'src/app/interfaces/IListColumn';
import { StockCheckpointService } from '../../services/stock-checkpoint.service';

@Component({
  selector: 'app-stock-checkpoint',
  templateUrl: './stock-checkpoint.component.html',
  styleUrls: ['./stock-checkpoint.component.scss'],
})
export class StockCheckpointComponent {
  items: ICheckpoint[] | any;

  listColumns: IListColumn[] = [
    {
      fieldOne: 'amount',
      fieldTwo: '',
      name: 'Quantidade',
      type: 'text',
      formatType: '',
    },
    {
      fieldOne: 'resultValue',
      fieldTwo: 'resultPercentageValue',
      name: '',
      type: 'value-info',
      formatType: '',
    },
    {
      fieldOne: 'currentValue',
      fieldTwo: '',
      name: 'Valor Atual',
      type: 'text',
      formatType: 'currency',
    },
    {
      fieldOne: 'purchaseValue',
      fieldTwo: '',
      name: 'Valor de Compra',
      type: 'text',
      formatType: 'currency',
    },
    {
      fieldOne: 'createdAt',
      fieldTwo: '',
      name: 'Criação',
      type: 'text',
      formatType: 'date',
    },
  ];

  constructor(private stockCheckpointService: StockCheckpointService) {}

  ngOnInit() {
    this.getStockCheckpoint();
  }

  getStockCheckpoint() {
    this.stockCheckpointService.list().subscribe((data) => {
      this.items = data;
    });
  }

  createStockCheckpoint() {
    this.stockCheckpointService.create().subscribe(() => {
      this.getStockCheckpoint();
    });
  }
}
