import { Injectable } from '@angular/core';
import { IEarning } from 'src/app/interfaces/IEarning';
import { HostService } from './host.service';

@Injectable({
  providedIn: 'root',
})
export class EarningService {
  constructor(private hostService: HostService) { }

  list() {
    return this.hostService.get('earning');
  }

  create(earning: IEarning) {
    return this.hostService.post('earning', earning);
  }

  summaryMonth(sortDirection: String) {
    return this.hostService.get(`earning/summary/month${sortDirection ? `?sortDirection=${sortDirection}` : ''}`);
  }

  summaryActive() {
    return this.hostService.get('earning/summary/active');
  }

  earningSummary() {
    return this.hostService.get('earning/summary');
  }
}
