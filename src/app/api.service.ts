import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }

  apiKey = "LTKYF93B7YUK8CIK";
  baseUrl = "https://www.alphavantage.co/";
  // API_CALL = `${this.baseUrl}query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${stockSymbol}&interval=5min&apikey=${this.apiKey}`;


  getTIME_SERIES_DAILY(stockSymbol: string) {
    return this.http.get(`${this.baseUrl}query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${stockSymbol}&interval=5min&apikey=${this.apiKey}`);
  }

}
