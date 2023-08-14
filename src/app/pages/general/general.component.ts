import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { IActiveSummary } from 'src/app/interfaces/IActiveSummary';
import { IListColumn } from 'src/app/interfaces/IListColumn';
import { ActiveService } from 'src/app/services/active.service';
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
    {
      fieldOne: 'updatedAt',
      fieldTwo: '',
      name: 'Última atualização',
      type: 'text',
      formatType: 'date',
      with: '',
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