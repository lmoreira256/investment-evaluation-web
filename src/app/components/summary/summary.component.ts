import { Component, Input } from '@angular/core';
import { IActiveSummary } from 'src/app/interfaces/IActiveSummary';
import Formatter from 'src/utils/Formatter';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent {
  @Input()
  summary: IActiveSummary;

  @Input()
  title: String;

  constructor(public formatter: Formatter) {}
}
