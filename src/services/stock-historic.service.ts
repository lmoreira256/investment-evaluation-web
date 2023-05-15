import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IStockHistoricPageable } from 'src/interfaces/IStockHistoricPageable';
import { HostService } from './host.service';

@Injectable({
  providedIn: 'root',
})
export class StockHistoricService {
  constructor(private hostService: HostService) {}

  list(page: string) {
    return this.hostService.get(
      `stock/historic${page.length > 0 ? '?page=' + page : ''}`
    );
  }

  post() {
    return this.hostService.post('stock/historic', null);
  }
}
