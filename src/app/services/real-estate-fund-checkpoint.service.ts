import { Injectable } from '@angular/core';
import { HostService } from './host.service';

@Injectable({
  providedIn: 'root',
})
export class RealEstateFundCheckpointService {
  constructor(private hostService: HostService) {}

  list() {
    return this.hostService.get('real-estate-fund-checkpoint');
  }

  create() {
    return this.hostService.post('real-estate-fund-checkpoint', null);
  }
}
