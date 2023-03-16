import { Component, Input } from '@angular/core';
import Formatter from 'src/utils/Formatter';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input()
  item: any;

  constructor(public formatter: Formatter) {}
}
