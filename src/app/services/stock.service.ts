import { Injectable } from '@angular/core';
import { HostService } from './host.service';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  constructor(private hostService: HostService) {}

  list() {
    return this.hostService.get('stock');
  }

  summary() {
    return this.hostService.get('stock/summary');
  }
}
