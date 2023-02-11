import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
}
