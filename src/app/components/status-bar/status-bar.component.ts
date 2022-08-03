import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.scss']
})
export class StatusBarComponent implements OnInit {
  @Output() currency: EventEmitter<string>

  value: string = 'rub'
  currencies: any[] = []
  constructor() {
    this.currency = new EventEmitter<string>()
    this.currencies = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];
  }

  setCurrency(): void {
    this.currency.emit(this.value)
  }
  
  ngOnInit(): void {
  }

}
