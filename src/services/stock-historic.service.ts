import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPageable } from 'src/interfaces/IPageable';

@Injectable({
    providedIn: 'root',
})
export class StockHistoricService {

    constructor(
        private http: HttpClient
    ) { }

    list(page: string) {
        return this.http.get<IPageable>(`http://localhost:6960/stock/historic${page.length > 0 ? '?page=' + page : ''}`)
    }

}