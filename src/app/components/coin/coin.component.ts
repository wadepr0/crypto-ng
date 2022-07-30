import { Component, Input, OnInit } from '@angular/core';
import { ICoin } from 'src/app/types/ICoin';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.scss']
})
export class CoinComponent implements OnInit {
  @Input() coin!: ICoin;
  @Input() currency!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
