import { Component, Input } from '@angular/core';
import Formatter from 'src/utils/Formatter';

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.scss'],
})
export class AreaChartComponent {
  @Input()
  title: string;

  @Input()
  data: any;

  @Input()
  valueX: string;

  @Input()
  valueY: string;

  chartOptions = {
    theme: 'light2',
    title: {
      text: '',
    },
    axisX: {
      labelFontWeight: 'bold',
      labelFontColor: '#000000',
      labelFormatter: (e: any) => {
        return this.formatter.formatDate(e.value);
      },
      crosshair: {
        enabled: true,
        labelFormatter: (e: any) => {
          return this.formatter.formatDate(e.value);
        },
      },
    },
    axisY: {
      labelFontWeight: 'bold',
      labelFontColor: '#000000',
      labelFormatter: (e: any) => {
        return this.formatter.formatCurrency(e.value);
      },
      crosshair: {
        enabled: true,
        labelFormatter: (e: any) => {
          return this.formatter.formatCurrency(e.value);
        },
      },
    },
    toolTip: {
      shared: true,
      contentFormatter: (e: any) => {
        let date = this.formatter.formatDate(e.entries[0].dataPoint.x);
        let name = e.entries[0].dataSeries.name;
        let value = this.formatter.formatCurrency(e.entries[0].dataPoint.y);

        return `<strong>${date}</strong> </br> ${name}: <strong>${value}</strong>`;
      },
    },
    data: [
      {
        color: 'blue',
        type: 'splineArea',
        name: 'Valor',
        labelFormatter: (e: any) => {
          return this.formatter.formatCurrency(e.value);
        },
        dataPoints: [],
      },
    ],
  };

  constructor(private formatter: Formatter) {}

  ngOnInit() {
    this.chartOptions.title.text = this.title ? this.title : 'Gráfico';
    this.chartOptions.data[0].dataPoints = this.data.map((item: any) => {
      return {
        x: new Date(item[this.valueX]),
        y: item[this.valueY],
      };
    });
  }
}
