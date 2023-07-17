import { Component, Input } from '@angular/core';
import Formatter from 'src/utils/Formatter';

@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.scss'],
})
export class ColumnChartComponent {
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
    },
    axisY: {
      labelFontWeight: 'bold',
      labelFontColor: '#000000',
      labelFormatter: (e: any) => {
        return this.formatter.formatCurrency(e.value);
      },
    },
    toolTip: {
      shared: true,
      contentFormatter: (e: any) => {
        let date = e.entries[0].dataPoint.label;
        let name = e.entries[0].dataSeries.name;
        let value = this.formatter.formatCurrency(e.entries[0].dataPoint.y);

        return `<strong>${date}</strong> </br> ${name}: <strong>${value}</strong>`;
      },
    },
    data: [
      {
        type: 'column',
        name: 'Valor',
        dataPoints: [],
      },
    ],
  };

  constructor(private formatter: Formatter) {}

  ngOnInit() {
    this.chartOptions.title.text = this.title ? this.title : 'Gráfico';
    this.chartOptions.data[0].dataPoints = this.data.map((item: any) => {
      return {
        label: item[this.valueX],
        y: item[this.valueY],
        indexLabel: this.formatter.formatCurrency(item[this.valueY]),
        indexLabelFontWeight: 'bold',
        indexLabelFontColor: '#000000',
      };
    });
  }
}
