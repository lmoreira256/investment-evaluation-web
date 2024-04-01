import { Component, Input } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { ActiveService } from 'src/app/services/active.service';

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

  disabledActive() {
    this.activeService.activeSelected!.enabled = false;

    this.saveActive();
  }

  updateActiveResultValues() {
    let active = this.activeService.activeSelected;
    active!.currentValue = active!.amount * active!.actualValue;
    active!.resultValue = active!.currentValue - active!.purchaseValue;
    active!.resultPercentageValue =
      active!.resultValue == 0
        ? 0
        : (active!.currentValue * 100) / active!.purchaseValue - 100;

    this.activeService.activeSelected = active;
  }
}
