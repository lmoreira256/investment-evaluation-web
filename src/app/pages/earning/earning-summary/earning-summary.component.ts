import { Component, Input } from '@angular/core';
import Formatter from 'src/utils/Formatter';

@Component({
  selector: 'app-earning-summary',
  templateUrl: './earning-summary.component.html',
  styleUrls: ['./earning-summary.component.scss'],
})
export class EarningSummaryComponent {

  @Input()
  earningSummary: any;

  @Input()
  getEarningSummary: any;

  constructor(
    public formatter: Formatter
  ) {
    if (this.getEarningSummary) {
      this.getEarningSummary();
    }
  }

}
