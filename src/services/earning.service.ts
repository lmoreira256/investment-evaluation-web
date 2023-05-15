import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEarning } from 'src/interfaces/IEarning';
import { IEarningPageable } from 'src/interfaces/IEarningPageable';
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
}
