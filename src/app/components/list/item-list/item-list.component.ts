import { Component, Input } from '@angular/core';
import { IListColumn } from 'src/app/interfaces/IListColumn';
import Formatter from 'src/utils/Formatter';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent {
  @Input()
  item = null as any;

  @Input()
  columns: IListColumn[] = null as any;

  constructor(public formatter: Formatter) {}
}
