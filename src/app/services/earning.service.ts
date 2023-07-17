import { Injectable } from '@angular/core';
import { IEarning } from 'src/app/interfaces/IEarning';
import { HostService } from './host.service';

@Injectable({
  providedIn: 'root',
})
export class EarningService {
  constructor(private hostService: HostService) {}

  list(page: string) {
    return this.hostService.get(
      `earning${page.length > 0 ? '?page=' + page : ''}`
    );
  }

  create(earning: IEarning) {
    return this.hostService.post('earning', earning);
  }

  summaryMonth() {
    return this.hostService.get('earning/summary/month');
  }

  summaryActive() {
    return this.hostService.get('earning/summary/active');
  }
}
