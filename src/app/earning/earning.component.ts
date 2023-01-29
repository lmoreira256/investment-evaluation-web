import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { IEarning } from 'src/interfaces/IEarning';
import { IEarningPageable } from 'src/interfaces/IEarningPageable';
import { EarningService } from 'src/services/earning.service';
import Formatter from 'src/utils/Formatter';

@Component({
  selector: 'app-earning',
  templateUrl: './earning.component.html',
  styleUrls: ['./earning.component.scss']
})
export class EarningComponent {

}
