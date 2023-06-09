import { Component } from '@angular/core';
import { StockService } from 'src/services/stock.service';
import Formatter from 'src/utils/Formatter';

@Component({
  selector: 'app-stock-return',
  templateUrl: './stock-return.component.html',
  styleUrls: ['./stock-return.component.scss'],
})
export class StockReturnComponent {
  constructor(public formatter: Formatter, public stockService: StockService) {}
}
