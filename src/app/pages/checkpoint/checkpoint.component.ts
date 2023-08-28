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
  checkpointList: ICheckpoint[] | any;
  checkpointStockList: ICheckpoint[] | any;
  checkpointRealEstateFundList: ICheckpoint[] | any;

  listColumns: IListColumn[] = [
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
      fieldOne: 'createdAt',
      fieldTwo: '',
      name: 'Criação',
      type: 'text',
      formatType: 'date',
      with: '',
    },
  ];

  constructor(private checkpointService: CheckpointService) { }

  ngOnInit() {
    this.getCheckpoints();
  }

  getCheckpoints() {
    this.checkpointService.list().subscribe((data) => {
      this.checkpointList = data;
    });

    this.checkpointService.listStock().subscribe((data) => {
      this.checkpointStockList = data;
    });

    this.checkpointService.listRealEstateFund().subscribe((data) => {
      this.checkpointRealEstateFundList = data;
    });
  }

}
