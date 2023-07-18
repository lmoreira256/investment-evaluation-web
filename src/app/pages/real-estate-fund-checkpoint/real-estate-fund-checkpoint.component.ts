import { Component } from '@angular/core';
import { RealEstateFundCheckpointService } from 'src/app/services/real-estate-fund-checkpoint.service';
import { ICheckpoint } from 'src/app/interfaces/ICheckpoint';
import { IListColumn } from 'src/app/interfaces/IListColumn';

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
