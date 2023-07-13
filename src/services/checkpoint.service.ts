import { Injectable } from '@angular/core';
import { HostService } from './host.service';
import { ICheckpoint } from 'src/interfaces/ICheckpoint';

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
