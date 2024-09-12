import { Component } from '@angular/core';
import { ActiveService } from 'src/app/services/active.service';
import { CheckpointService } from 'src/app/services/checkpoint.service';
import { EarningService } from 'src/app/services/earning.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  returnChartItems: any;
  equityChartItems: any;
  earningPerMonthChartItems: any;
  earningPerActiveChartItems: any;
  profilePercentage: any;

  constructor(
    private checkpointService: CheckpointService,
    private earningService: EarningService,
    private activeService: ActiveService,
  ) { }

  ngOnInit() {
    this.getCheckpoint();
    this.getPrortifolioPercentage();
  }

  getPrortifolioPercentage() {
    this.activeService.getPortfolioPercentage().subscribe((data: any) => {
      this.profilePercentage = data
    });
  }

  getCheckpoint() {
    this.checkpointService.list().subscribe((data: any) => {
      this.returnChartItems = data;
      this.equityChartItems = data;
    });

    this.earningService.summaryMonth('').subscribe((data: any) => {
      this.earningPerMonthChartItems = data;
    });

    this.earningService.summaryActive().subscribe((data: any) => {
      this.earningPerActiveChartItems = data;
    });
  }
}
