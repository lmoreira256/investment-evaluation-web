import { Component } from '@angular/core';
import { EarningService } from 'src/app/services/earning.service';
import Formatter from 'src/utils/Formatter';

@Component({
  selector: 'app-earning-summary',
  templateUrl: './earning-summary.component.html',
  styleUrls: ['./earning-summary.component.scss'],
})
export class EarningSummaryComponent {
  earningSummary: any;

  constructor(
    public formatter: Formatter,
    private earningService: EarningService
  ) {
    this.getEarningSummary();
  }

  getEarningSummary() {
    this.earningService.earningSummary().subscribe((data: any) => {
      this.earningSummary = data;
    });
  }

}
