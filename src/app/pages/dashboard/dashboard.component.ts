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
  stockReturnChartItems: any;
  realEstateFundReturnChartItems: any;
  equityChartItems: any;
  earningPerMonthChartItems: any;
  earningPerActiveChartItems: any;
  profilePercentage: any;
  activePercentage: any;

  constructor(
    private checkpointService: CheckpointService,
    private earningService: EarningService,
    private activeService: ActiveService,
  ) { }

  ngOnInit() {
    this.getCheckpoint();
    this.getPrortifolioPercentage();
    this.getActivePercentage();
  }

  getPrortifolioPercentage() {
    this.activeService.getPortfolioPercentage().subscribe((data: any) => {
      this.profilePercentage = data;
    });
  }

  getActivePercentage() {
    this.activeService.getActivePercentage().subscribe((data: any) => {
      this.activePercentage = data;
    });
  }

  getCheckpoint() {
    this.checkpointService.list().subscribe((data: any) => {
      this.returnChartItems = data;
      this.equityChartItems = data;
    });

    this.checkpointService.listStock().subscribe((data: any) => {
      this.stockReturnChartItems = data;
    });

    this.checkpointService.listRealEstateFund().subscribe((data: any) => {
      this.realEstateFundReturnChartItems = data;
    });

    this.earningService.summaryMonth('').subscribe((data: any) => {
      this.earningPerMonthChartItems = data;
    });

    this.earningService.summaryActive().subscribe((data: any) => {
      this.earningPerActiveChartItems = data;
    });
  }
}
