import { Component } from '@angular/core';
import { ActiveService } from 'src/services/active.service';
import Formatter from 'src/utils/Formatter';

@Component({
  selector: 'app-stock-return',
  templateUrl: './stock-return.component.html',
  styleUrls: ['./stock-return.component.scss'],
})
export class StockReturnComponent {
  constructor(
    public formatter: Formatter,
    public activeService: ActiveService
  ) {}
}
