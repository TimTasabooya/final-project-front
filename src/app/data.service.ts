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

  search() {
    console.log(`You are searching for: ${this.searchValue}`);
    this.apiService.getSYMBOL_SEARCH(this.searchValue)
    .subscribe((res: SearchResponse) => {
      console.log(res);
      this.bestMatches = res.bestMatches;
    })
  }

  account: any = {
    fname: 'Alex',
    lname: 'Parker',
    age: 23,
    address: {
      street: '101 West Broadway',
      city: 'San Diego',
      state: 'Ca',
      zip: 92101,
      country: 'USA'
    },
    balance: 50000,
    currency: 'usd',
    orders: [
      {
        date: '03-03-2019',
        type: 'buy',
        company: 'TSLA',
        shares: 17.54,
        amount: 5000.00,
        currency: 'usd'
      },
      {
        date: '06-03-2019',
        type: 'buy',
        company: 'AMZ',
        shares: 4.13,
        amount: 7000.00,
        currency: 'usd'
      },
      {
        date: '10-28-2019',
        type: 'sell',
        company: 'TSLA',
        shares: 17.54,
        amount: 5788.00,
        currency: 'usd'
      }
    ]
  };
  
}

