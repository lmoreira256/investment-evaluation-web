import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HostService {
  //private host: string = 'http://ec2-18-228-6-178.sa-east-1.compute.amazonaws.com:6960/';
  private host: string = 'http://localhost:6960/';

  constructor(private http: HttpClient) {}

  get(path: string) {
    return this.http.get(`${this.host}${path}`);
  }

  post(path: string, body: any) {
    return this.http.post(`${this.host}${path}`, body);
  }

  put(path: string, body: any) {
    return this.http.put(`${this.host}${path}`, body);
  }
}
