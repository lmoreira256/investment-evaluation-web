import { Injectable } from '@angular/core';
import { HostService } from 'src/services/host.service';

@Injectable({
  providedIn: 'root',
})
export class StockCheckpointService {
  constructor(private hostService: HostService) {}

  list() {
    return this.hostService.get('stock-checkpoint');
  }

  create() {
    return this.hostService.post('stock-checkpoint', null);
  }
}
