import { Component, Input } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { IListColumn } from 'src/interfaces/IListColumn';
import { StockService } from 'src/services/stock.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input()
  data = null as any;

  @Input()
  columns: IListColumn[] = null as any;

  @Input()
  drawer: MatDrawer;

  @Input()
  drawerFunction: Function;

  constructor(private stockService: StockService) {}

  openDrawer(item: any) {
    if (this.drawerFunction) {
      this.drawerFunction(item);
    }
  }
}
