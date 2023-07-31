import { Component, Input } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { IListColumn } from 'src/app/interfaces/IListColumn';

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

  constructor() { }

  openDrawer(item: any) {
    if (this.drawerFunction) {
      this.drawerFunction(item);
    }
  }
}
