import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Currency, currency } from '../constants/currency';
@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.scss']
})
export class StatusBarComponent implements OnInit {
  @Output() currency: EventEmitter<string>

  value: Currency = {
    name: 'USD',
    code: 'usd'
  }
  currencies: Currency[] = currency
  constructor() {
    this.currency = new EventEmitter<string>()
  }

  setCurrency(): void {
    this.currency.emit(this.value.code)
  }

  ngOnInit(): void {
  }

}
