import { Component, Input } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { StockService } from 'src/services/stock.service';

@Component({
  selector: 'app-edit-stock-drawer',
  templateUrl: './edit-stock-drawer.component.html',
  styleUrls: ['./edit-stock-drawer.component.scss'],
})
export class EditStockDrawerComponent {
  @Input()
  drawer: MatDrawer;

  constructor(public stockService: StockService) {}

  saveStock() {
    this.stockService.put(this.stockService.stockSelected).subscribe(() => {
      this.stockService.stockSelected = null;
      this.drawer.toggle();
    });
  }
}
