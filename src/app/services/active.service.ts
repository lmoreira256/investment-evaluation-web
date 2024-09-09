import { Injectable } from '@angular/core';
import { HostService } from './host.service';
import { IActive } from 'src/app/interfaces/IActive';

@Injectable({
  providedIn: 'root',
})
export class ActiveService {
  public activeSelected: IActive | null;

  constructor(private hostService: HostService) { }

  create(active: IActive) {
    return this.hostService.post('active', active);
  }

  update(active: IActive | null) {
    return this.hostService.put(`active/${active!.id}`, active);
  }

  list() {
    return this.hostService.get('active');
  }

  summary() {
    return this.hostService.get('active/summary');
  }

  activesToBuy() {
    return this.hostService.get('active/actives-to-buy');
  }
}
