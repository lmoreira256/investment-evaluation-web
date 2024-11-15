import { Component, Input } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { IListColumn } from 'src/app/interfaces/IListColumn';
import { ActiveService } from 'src/app/services/active.service';

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

  constructor(
    public activeService: ActiveService
  ) { }

  openDrawer(item: any) {
    if (this.drawerFunction) {
      this.drawerFunction(item);
    }
  }
}
