import { Component } from '@angular/core';
import { StockService } from 'src/services/stock.service';
import Formatter from 'src/utils/Formatter';

@Component({
  selector: 'app-stock-value',
  templateUrl: './stock-value.component.html',
  styleUrls: ['./stock-value.component.scss'],
})
export class StockValueComponent {
  constructor(public formatter: Formatter, public stockService: StockService) {}
}
