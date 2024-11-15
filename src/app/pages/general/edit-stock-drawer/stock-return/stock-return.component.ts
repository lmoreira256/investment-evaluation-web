import { Component } from '@angular/core';
import { ActiveService } from 'src/app/services/active.service';
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
  ) { }

  getCurrencyProfitability() {
    let profitabilityValue = this.getProfitabilityValue();

    return this.formatter.formatCurrency(profitabilityValue);
  }

  getPercentageProfitability() {
    let costValue = this.activeService.activeSelected!.costValue;
    let currentValue = this.getCurrentValue();

    return currentValue
      ? this.formatter.formatPercent(currentValue * 100 / costValue - 100)
      : '0,00%';
  }

  getProfitabilityBackgroundClass() {
    let profitabilityValue = this.getProfitabilityValue();

    return profitabilityValue >= 0 ? 'positive-backgroud' : 'negative-backgroud';
  }

  getCurrentValueFormatted() {
    return this.formatter.formatCurrency(this.getCurrentValue());
  }

  private getCurrentValue() {
    let actualValue = this.activeService.activeSelected!.currentPrice || 0;
    let amount = this.activeService.activeSelected!.quantity;

    return amount * actualValue;
  }

  private getProfitabilityValue() {
    let purchaseValue = this.activeService.activeSelected!.costValue;
    let currentValue = this.getCurrentValue();

    return currentValue - purchaseValue;
  }

}
