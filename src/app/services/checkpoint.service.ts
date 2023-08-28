import { Injectable } from '@angular/core';
import { HostService } from './host.service';

@Injectable({
  providedIn: 'root',
})
export class CheckpointService {
  constructor(private hostService: HostService) { }

  list() {
    return this.hostService.get('checkpoint');
  }

  listStock() {
    return this.hostService.get('checkpoint/stock');
  }

  listRealEstateFund() {
    return this.hostService.get('checkpoint/real-estate-fund');
  }

  create() {
    return this.hostService.post('checkpoint', null).subscribe();
  }
}
