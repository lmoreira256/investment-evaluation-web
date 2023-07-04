import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { IActiveSummary } from 'src/interfaces/IActiveSummary';
import { IListColumn } from 'src/interfaces/IListColumn';
import { ActiveService } from 'src/services/active.service';
import Formatter from 'src/utils/Formatter';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss'],
})
export class GeneralComponent {
  items: any;

  listColumns: IListColumn[] = [
    {
      fieldOne: 'name',
      fieldTwo: '',
      name: '',
      type: 'image',
      formatType: '',
    },
    {
      fieldOne: 'name',
      fieldTwo: 'description',
      name: '',
      type: 'info',
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
      fieldOne: 'averageValue',
      fieldTwo: '',
      name: 'Média de Compra',
      type: 'text',
      formatType: 'currency',
    },
    {
      fieldOne: 'stockType',
      fieldTwo: '',
      name: 'Tipo',
      type: 'text',
      formatType: 'stockType',
    },
    {
      fieldOne: 'updatedAt',
      fieldTwo: '',
      name: 'Última atualização',
      type: 'text',
      formatType: 'date',
    },
  ];

  @ViewChild('drawer', { static: true })
  drawer: MatDrawer;

  summary: IActiveSummary | any;

  constructor(
    public formatter: Formatter,
    public activeService: ActiveService
  ) {}

  ngOnInit() {
    this.getSummary();
    this.getActives();
    this.drawerEvent();
  }

  drawerEvent() {
    this.drawer.openedChange.subscribe((isOpen: boolean) => {
      if (!isOpen) {
        this.getSummary();
        this.getActives();
      }
    });
  }

  getActives() {
    this.activeService.list().subscribe((data) => {
      this.items = data;
    });
  }

  editActive(active: any): void {
    this.activeService.activeSelected = JSON.parse(JSON.stringify(active));
    this.drawer.toggle();
  }

  getSummary() {
    this.activeService.summary().subscribe((data) => {
      this.summary = data;
    });
  }
}
