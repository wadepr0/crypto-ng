import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ICoin } from '../types/ICoin';
import { IMaxCoins } from '../types/IMaxCoins';
import { IRegisteredCoins } from '../types/IRegisteredCoins';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(
    private http: HttpClient
  ) { }


  getCoins(): Observable<ICoin[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'accept: application/json'
    })
    return this.http.get<ICoin[]>('https://api.coingecko.com/api/v3/coins', { responseType: 'json' })

  }

  getMoreCoins(currency: string): Observable<IMaxCoins[]> {
    return this.http.get<IMaxCoins[]>(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc`, { responseType: 'json' })
  }

  getAllRegisteredCoins(): Observable<IRegisteredCoins[]> {
    return this.http.get<IRegisteredCoins[]>('https://api.coingecko.com/api/v3/coins/list', { responseType: 'json' })
  }
}
