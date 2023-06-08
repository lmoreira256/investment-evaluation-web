import { Component } from '@angular/core';
import { StockService } from 'src/services/stock.service';
import Formatter from 'src/utils/Formatter';

@Component({
  selector: 'app-edit-stock-drawer',
  templateUrl: './edit-stock-drawer.component.html',
  styleUrls: ['./edit-stock-drawer.component.scss'],
})
export class EditStockDrawerComponent {
  constructor(public formatter: Formatter, public stockService: StockService) {}
}
