import { Injectable } from '@angular/core';
import { HostService } from '../../services/host.service';

@Injectable({
  providedIn: 'root',
})
export class CheckpointService {
  constructor(private hostService: HostService) {}

  list() {
    return this.hostService.get('checkpoint');
  }

  create() {
    return this.hostService.post('checkpoint', null);
  }
}
