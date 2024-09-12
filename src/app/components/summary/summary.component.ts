import { Component, Input } from '@angular/core';
import { IActiveSummary } from 'src/app/interfaces/IActiveSummary';
import { CheckpointService } from 'src/app/services/checkpoint.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
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

  @Input()
  showButton: Boolean;

  @Input()
  buttonText: String;

  @Input()
  buttonFunction: Function;

  constructor(
    public formatter: Formatter,
    public checkpointService: CheckpointService,
    public snackbarService: SnackbarService,
  ) { }

  clickButton() {
    this.buttonFunction();
  }
}
