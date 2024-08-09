import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  constructor() { }
  private data: any;

  setData(data: any) {
    this.data = data;
  }

  getData(): any {
    return this.data;
  }

  clearData() {
    this.data = null;
  }
}
