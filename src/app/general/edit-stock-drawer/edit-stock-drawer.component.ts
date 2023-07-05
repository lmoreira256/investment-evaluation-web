import { Component, Input } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { ActiveService } from 'src/services/active.service';

@Component({
  selector: 'app-edit-stock-drawer',
  templateUrl: './edit-stock-drawer.component.html',
  styleUrls: ['./edit-stock-drawer.component.scss'],
})
export class EditStockDrawerComponent {
  @Input()
  drawer: MatDrawer;

  constructor(public activeService: ActiveService) {}

  saveActive() {
    this.updateActiveResultValues();

    this.activeService
      .update(this.activeService.activeSelected)
      .subscribe(() => {
        this.activeService.activeSelected = null;
        this.drawer.toggle();
      });
  }

  updateActiveResultValues() {
    let active = this.activeService.activeSelected;
    active!.resultValue = active!.currentValue - active!.purchaseValue;
    active!.resultPercentageValue =
      (active!.currentValue * 100) / active!.purchaseValue - 100;

    this.activeService.activeSelected = active;
  }
}
