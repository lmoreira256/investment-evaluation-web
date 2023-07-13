import { Component } from '@angular/core';
import { RealEstateFundCheckpointService } from 'src/app/services/real-estate-fund-checkpoint.service';
import { ICheckpoint } from 'src/interfaces/ICheckpoint';
import { IListColumn } from 'src/interfaces/IListColumn';

@Component({
  selector: 'app-real-estate-fund-checkpoint',
  templateUrl: './real-estate-fund-checkpoint.component.html',
  styleUrls: ['./real-estate-fund-checkpoint.component.scss'],
})
export class RealEstateFundCheckpointComponent {
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

  constructor(
    private realEstateFundCheckpointService: RealEstateFundCheckpointService
  ) {}

  ngOnInit() {
    this.getRealEstateFundCheckpoint();
  }

  getRealEstateFundCheckpoint() {
    this.realEstateFundCheckpointService.list().subscribe((data) => {
      this.items = data;
    });
  }

  createRealEstateFundCheckpoint() {
    this.realEstateFundCheckpointService.create().subscribe(() => {
      this.getRealEstateFundCheckpoint();
    });
  }
}
