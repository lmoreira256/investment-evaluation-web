import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IStock } from 'src/interfaces/IStock';
import { IStockPageable } from 'src/interfaces/IStockPageable';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  constructor(private http: HttpClient) {}

  list(page: string) {
    return this.http.get<IStockPageable>(
      `http://localhost:6960/stock${page.length > 0 ? '?page=' + page : ''}`
    );
  }

  get(id: string) {
    return this.http.get<IStock>(`http://localhost:6960/stock/${id}`);
  }

  put(stock: IStock) {
    return this.http.put<IStock>(`http://localhost:6960/stock/${stock.id}`, stock);
  }
}
