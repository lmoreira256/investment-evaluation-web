import { Component, Input } from '@angular/core';
import { ITableColumn } from 'src/interfaces/ITableColumn';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input()
  data = null as any;

  @Input()
  columns: ITableColumn[] = null as any;
}
