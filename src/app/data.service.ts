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

interface SearchResponse {
  bestMatches: any[];
}

@Injectable({
  providedIn: 'root'
})

export class DataService {
  searchValue: string;

  [x: string]: any;

  input;
  metaData : MetaData;
  timeSeries : TimeSeries;
  state = {
    stockChartXValues: [],
    stockChartYValues: []
  }


  constructor(public apiService: ApiService) { }

  getData() {
    this.apiService.getTIME_SERIES_DAILY('DIS')
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

  search() {
    console.log(`You are searching for: ${this.searchValue}`);
    this.apiService.getSYMBOL_SEARCH(this.searchValue)
    .subscribe((res: SearchResponse) => {
      console.log(res);
      this.bestMatches = res.bestMatches;
    })
  }
  
}

