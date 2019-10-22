import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }

  apiKey = "LTKYF93B7YUK8CIK";
  baseUrl = "https://www.alphavantage.co/";

  getTIME_SERIES_INTRADAY(stockSymbol) {
    return this.http.get(`${this.baseUrl}query?function=TIME_SERIES_INTRADAY&symbol=${stockSymbol}&interval=5min&apikey=${this.apiKey}`);
  }

}
