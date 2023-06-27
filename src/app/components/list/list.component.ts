import { Component, Input } from '@angular/core';
import { IListColumn } from 'src/interfaces/IListColumn';

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
}
