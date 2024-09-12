import { Component, Input } from '@angular/core';
import Formatter from 'src/utils/Formatter';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent {
  @Input()
  title: string;

  @Input()
  data: any;

  chartOptions = {
    theme: 'light2',
    title: {
      text: '',
    },
    toolTip: {
      shared: true,
      contentFormatter: (e: any) => {
        let name = e.entries[0].dataPoint.name;
        let value = this.formatter.formatPercent(e.entries[0].dataPoint.y);

        return `<strong>${name}</strong> </br> <strong>${value}</strong>`;
      },
    },
    data: [
      {
        type: 'pie',
        startAngle: -90,
        indexLabel: "{name}: {y}",
        yValueFormatString: "###'%'",
        labelFormatter: (e: any) => {
          return this.formatter.formatPercent(e.value);
        },
        dataPoints: [],
      },
    ],
  };

  constructor(
    private formatter: Formatter,
  ) { }

  ngOnInit() {
    this.chartOptions.title.text = this.title ? this.title : 'Gráfico';
    this.chartOptions.data[0].dataPoints = this.data.map((item: any) => {
      return {
        name: item.key,
        y: item.value,
      };
    });
  }
}
