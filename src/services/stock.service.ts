import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IStock } from 'src/interfaces/IStock';
import { IStockPageable } from 'src/interfaces/IStockPageable';
import { HostService } from './host.service';
import { IActiveSummary } from 'src/interfaces/IActiveSummary';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  public stockSelected: IStock | any;

  constructor(private hostService: HostService) {}

  list(page: string) {
    return this.hostService.get(
      `stock${page.length > 0 ? '?page=' + page : ''}`
    );
  }

  listAll() {
    return this.hostService.get('stock');
  }

  get(id: string) {
    return this.hostService.get(`stock/${id}`);
  }

  put(stock: IStock) {
    return this.hostService.put(`stock/${stock.id}`, stock);
  }

  post(stock: IStock) {
    return this.hostService.post('stock', stock);
  }

  getGeneralSummary() {
    return this.hostService.get('stock/general-summary');
  }
}
