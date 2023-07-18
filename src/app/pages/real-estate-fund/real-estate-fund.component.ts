import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IActiveSummary } from 'src/app/interfaces/IActiveSummary';
import Formatter from 'src/utils/Formatter';
import { NewStockDialogComponent } from '../stock/new-stock-dialog/new-stock-dialog.component';
import { IListColumn } from 'src/app/interfaces/IListColumn';
import { RealEstateFundService } from '../../services/real-estate-fund.service';

@Component({
  selector: 'app-real-estate-fund',
  templateUrl: './real-estate-fund.component.html',
  styleUrls: ['./real-estate-fund.component.scss'],
})
export class RealEstateFundComponent {
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
      fieldOne: 'resultValue',
      fieldTwo: 'resultPercentageValue',
      name: '',
      type: 'value-info',
      formatType: '',
      with: '',
    },
    {
      fieldOne: 'amount',
      fieldTwo: '',
      name: 'Quantidade',
      type: 'text',
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
      fieldOne: 'averageValue',
      fieldTwo: '',
      name: 'Média de Compra',
      type: 'text',
      formatType: 'currency',
      with: '',
    },
  ];

  summary: IActiveSummary | any;

  constructor(
    public dialog: MatDialog,
    public formatter: Formatter,
    public realEstateFundService: RealEstateFundService
  ) {}

  ngOnInit() {
    this.getSummary();
    this.getList();
  }

  getSummary() {
    this.realEstateFundService.summary().subscribe((data) => {
      this.summary = data;
    });
  }

  create() {
    const dialogRef = this.dialog.open(NewStockDialogComponent);

    dialogRef.afterClosed().subscribe(() => {
      this.getSummary();
      this.getList();
    });
  }

  getList() {
    this.realEstateFundService.list().subscribe((data) => {
      this.items = data;
    });
  }
}
