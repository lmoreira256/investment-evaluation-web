import { Component } from '@angular/core';
import { ICheckpoint } from 'src/app/interfaces/ICheckpoint';
import { IListColumn } from 'src/app/interfaces/IListColumn';
import { CheckpointService } from 'src/app/services/checkpoint.service';

@Component({
  selector: 'app-checkpoint',
  templateUrl: './checkpoint.component.html',
  styleUrls: ['./checkpoint.component.scss'],
})
export class CheckpointComponent {
  items: ICheckpoint[] | any;

  listColumns: IListColumn[] = [
    {
      fieldOne: 'amount',
      fieldTwo: '',
      name: 'Quantidade',
      type: 'text',
      formatType: '',
      with: '',
    },
    {
      fieldOne: 'resultValue',
      fieldTwo: 'resultPercentageValue',
      name: '',
      type: 'value-info',
      formatType: '',
      with: '',
    },
    {
      fieldOne: 'currentValue',
      fieldTwo: '',
      name: 'Valor Atual',
      type: 'text',
      formatType: 'currency',
      with: '',
    },
    {
      fieldOne: 'purchaseValue',
      fieldTwo: '',
      name: 'Valor de Compra',
      type: 'text',
      formatType: 'currency',
      with: '',
    },
    {
      fieldOne: 'createdAt',
      fieldTwo: '',
      name: 'Criação',
      type: 'text',
      formatType: 'date',
      with: '',
    },
  ];

  constructor(private checkpointService: CheckpointService) {}

  ngOnInit() {
    this.getCheckpoint();
  }

  getCheckpoint() {
    this.checkpointService.list().subscribe((data) => {
      this.items = data;
    });
  }

  createCheckpoint() {
    this.checkpointService.create().subscribe(() => {
      this.getCheckpoint();
    });
  }
}
