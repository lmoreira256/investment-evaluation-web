import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEarningPageable } from 'src/interfaces/IEarningPageable';

@Injectable({
  providedIn: 'root'
})
export class EarningService {

  constructor(
    private http: HttpClient
  ) { }

  list(page: string) {
    return this.http.get<IEarningPageable>(`http://localhost:6960/earning${page.length > 0 ? '?page=' + page : ''}`)
  }

}
