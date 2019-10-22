import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

export interface idunno {
  results: ApiResponse[];
}

interface ApiResponse {
  metadata: object;
  timeseries: object;
}

@Injectable({
  providedIn: 'root'
})

export class DataService {
  [x: string]: any;

  input;
  apiData;

  constructor(public apiService: ApiService) { }


  onClick() {
    this.apiService.getTIME_SERIES_INTRADAY('SNAP')
    .subscribe((res: ApiResponse) => {
      console.log(res)
      console.log(res.metadata)
      console.log(res.timeseries)

      this.apiData = res.timeseries;
    })
  }
  
}

