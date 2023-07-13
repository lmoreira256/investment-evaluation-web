import { Injectable } from '@angular/core';
import { HostService } from '../app/services/host.service';

@Injectable({
  providedIn: 'root',
})
export class RealEstateFundService {
  constructor(private hostService: HostService) {}

  list() {
    return this.hostService.get('real-estate-fund');
  }

  summary() {
    return this.hostService.get('real-estate-fund/summary');
  }
}
