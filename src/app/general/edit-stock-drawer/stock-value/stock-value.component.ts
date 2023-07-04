import { Component } from '@angular/core';
import { ActiveService } from 'src/services/active.service';
import Formatter from 'src/utils/Formatter';

@Component({
  selector: 'app-stock-value',
  templateUrl: './stock-value.component.html',
  styleUrls: ['./stock-value.component.scss'],
})
export class StockValueComponent {
  constructor(
    public formatter: Formatter,
    public activeService: ActiveService
  ) {}
}
