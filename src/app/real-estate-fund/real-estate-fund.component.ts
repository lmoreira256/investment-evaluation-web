import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IActiveSummary } from 'src/interfaces/IActiveSummary';
import { StockService } from 'src/services/stock.service';
import Formatter from 'src/utils/Formatter';
import { NewStockDialogComponent } from '../stock/new-stock-dialog/new-stock-dialog.component';
import { IListColumn } from 'src/interfaces/IListColumn';

@Component({
  selector: 'app-real-estate-fund',
  templateUrl: './real-estate-fund.component.html',
  styleUrls: ['./real-estate-fund.component.scss'],
})
export class RealEstateFundComponent {
  items: any;

  listColumns: IListColumn[] = [
    {
      fieldOne: 'active',
      fieldTwo: '',
      name: '',
      type: 'image',
      formatType: '',
    },
    {
      fieldOne: 'active',
      fieldTwo: 'description',
      name: '',
      type: 'info',
      formatType: '',
    },
    {
      fieldOne: 'cashReturn',
      fieldTwo: 'profitability',
      name: '',
      type: 'value-info',
      formatType: '',
    },
    {
      fieldOne: 'amount',
      fieldTwo: '',
      name: 'Quantidade',
      type: 'text',
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
      fieldOne: 'averagePurchase',
      fieldTwo: '',
      name: 'Média de Compra',
      type: 'text',
      formatType: 'currency',
    },
    {
      fieldOne: 'updatedAt',
      fieldTwo: '',
      name: 'Última atualização',
      type: 'text',
      formatType: 'date',
    },
  ];

  summary: IActiveSummary | any;

  constructor(
    public dialog: MatDialog,
    public formatter: Formatter,
    public stockService: StockService
  ) {}

  ngOnInit() {
    this.getSummary();
    this.getList();
  }

  getSummary() {
    this.stockService.getRealEstateFundSummary().subscribe((data) => {
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
    this.stockService.listOnlyRealEstateFund().subscribe((data) => {
      this.items = data;
    });
  }
}
