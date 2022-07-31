import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.scss']
})
export class StatusBarComponent implements OnInit {
  @Output() currency: EventEmitter<string>

  value: string = 'rub'
  
  constructor() {
    this.currency = new EventEmitter<string>()
  }

  setCurrency(): void {
    this.currency.emit(this.value)
  }
  
  ngOnInit(): void {
  }

}
