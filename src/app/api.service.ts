import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }

  apiKey = "LTKYF93B7YUK8CIK";
  baseUrl = "https://www.alphavantage.co/";
  newsApiKey = "b610a709cbca440cb52422ac78561d0c";
  newsBaseUrl = "https://newsapi.org/v2/";

  // var url = 'https://newsapi.org/v2/everything?' +
  // 'q=Apple&' +
  // 'from=2019-10-30&' +
  // 'sortBy=popularity&' +
  // 'apiKey=b610a709cbca440cb52422ac78561d0c';

  'https://newsapi.org/v2/everything?q=Apple&from=2019-10-30&sortBy=popularity&apiKey=b610a709cbca440cb52422ac78561d0c'

  getTIME_SERIES_DAILY(stockSymbol: string) {
    return this.http.get(`${this.baseUrl}query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${stockSymbol}&interval=5min&apikey=${this.apiKey}`);
  }

  getSYMBOL_SEARCH(stockSymbolSearch: string) {
    return this.http.get(`${this.baseUrl}query?function=SYMBOL_SEARCH&keywords=${stockSymbolSearch}&apikey=${this.apiKey}`);
  }

  getNEWS_EVERYTHING(searchKeyword: string) {
    return this.http.get(`${this.newsBaseUrl}everything?q=${searchKeyword}&from=2019-10-30&sortBy=popularity&apiKey=${this.newsApiKey}`);
  }
}
