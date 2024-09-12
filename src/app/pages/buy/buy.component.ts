import { Component } from '@angular/core';
import { IListColumn } from 'src/app/interfaces/IListColumn';
import { ActiveService } from 'src/app/services/active.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss'],
})
export class BuyComponent {
  items: any;

  listColumns: IListColumn[] = [
    {
      fieldOne: 'name',
      fieldTwo: '',
      name: '',
      type: 'image',
      formatType: '',
      with: '',
    },
    {
      fieldOne: 'name',
      fieldTwo: 'description',
      name: '',
      type: 'info',
      formatType: '',
      with: '',
    },
    {
      fieldOne: 'objective',
      fieldTwo: '',
      name: 'Objetivo',
      type: 'text',
      formatType: '',
      with: '',
    },
    {
      fieldOne: 'quantity',
      fieldTwo: '',
      name: 'Quantidade',
      type: 'text',
      formatType: '',
      with: '',
    },
    {
      fieldOne: 'quantityToBuy',
      fieldTwo: '',
      name: 'Para Comprar',
      type: 'text',
      formatType: '',
      with: '',
    },
    {
      fieldOne: 'averageCost',
      fieldTwo: '',
      name: 'Média de Compra',
      type: 'text',
      formatType: 'currency',
      with: '',
    },
    {
      fieldOne: 'currentPrice',
      fieldTwo: '',
      name: 'Preço atual',
      type: 'text',
      formatType: 'currency',
      with: '',
    },
    {
      fieldOne: 'netResult',
      fieldTwo: 'percentageResult',
      name: '',
      type: 'value-info',
      formatType: '',
      with: '',
    },
  ];

  constructor(
    private activeService: ActiveService,
  ) { }

  ngOnInit() {
    this.getActives();
  }

  private getActives() {
    this.activeService.activesToBuy().subscribe((data) => {
      this.items = data;
    });
  }

}
