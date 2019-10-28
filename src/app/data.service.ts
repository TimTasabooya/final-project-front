import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

export interface idunno {
  results: ApiResponse[];
}

interface ApiResponse {   
  metadata: object;
  timeseries: object;
}

interface MetaData{
  "1. Information": string;
}

interface TimeSeries{

}
@Injectable({
  providedIn: 'root'
})

export class DataService {
  [x: string]: any;

  input;
  metaData : MetaData;
  timeSeries : TimeSeries;
  state = {
    stockChartXValues: [],
    stockChartYValues: ['100']
  }


  constructor(public apiService: ApiService) { }

  onClick() {
    this.apiService.getTIME_SERIES_DAILY('TSLA')
    .subscribe((res: ApiResponse) => {
      console.log('Tesla Time Series')
      this.metaData = res["Meta Data"];
      this.timeSeries = res["Time Series (Daily)"];
      console.log(this.metaData);
      console.log(this.timeSeries);
      for (var key in res['Time Series (Daily)']) { // Storing times series data into an array
        this.state.stockChartXValues.push(key);
        this.state.stockChartYValues.push(res['Time Series (Daily)'][key]['1. open']);
      }
    })
  }

  onClickDemo() {
    fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=demo')
    // .then(
    //   function(response) {
    //     console.log('Demo Time Series')
    //     return response.json();
    //   }
    // )
    .then(
      function(data) {
        console.log('Demo Time Series');
        console.log(data.json());

        for (var key in data['Time Series (Daily)']) {
          this.state.stockChartXValues.push(key);
          this.state.stockChartYValues.push(data['Time Series (Daily)'][key]['1. open']);
        }
      }
    )
  }

  onClickChartData() {
    alert(this.state.stockChartXValues);
    alert(this.state.stockChartYValues);
  }
  
}

