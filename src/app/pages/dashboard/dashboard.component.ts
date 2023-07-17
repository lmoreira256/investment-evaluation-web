import { Component } from '@angular/core';
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

  constructor(
    private checkpointService: CheckpointService,
    private earningService: EarningService
  ) {}

  ngOnInit() {
    this.getCheckpoint();
  }

  getCheckpoint() {
    this.checkpointService.list().subscribe((data: any) => {
      this.returnChartItems = data;
      this.equityChartItems = data;
    });

    this.earningService.summaryMonth().subscribe((data: any) => {
      this.earningPerMonthChartItems = data;
    });

    this.earningService.summaryActive().subscribe((data: any) => {
      this.earningPerActiveChartItems = data;
    });
  }
}
