import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Currency, currency } from '../constants/currency';
@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.scss']
})
export class StatusBarComponent implements OnInit {
  value: Currency = {
    name: 'USD',
    code: 'usd'
  }
  currencies: Currency[] = currency
  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.httpService.currency$.subscribe(value => this.value = value)
  }

  setCurrency(event: { value: Currency }): void {
    this.httpService.changeCurrency(event.value)
  }



}
