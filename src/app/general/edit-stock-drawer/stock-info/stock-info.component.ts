import { Component } from '@angular/core';
import { ActiveService } from 'src/services/active.service';
import Formatter from 'src/utils/Formatter';

@Component({
  selector: 'app-stock-info',
  templateUrl: './stock-info.component.html',
  styleUrls: ['./stock-info.component.scss'],
})
export class StockInfoComponent {
  constructor(
    public formatter: Formatter,
    public activeService: ActiveService
  ) {}
}
