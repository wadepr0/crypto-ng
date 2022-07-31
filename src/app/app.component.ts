import { Component, OnInit } from '@angular/core';
import { delay, map, tap } from 'rxjs/operators';
import { HttpService } from './services/http.service';
import { ICoin } from './types/ICoin';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [HttpService]
})

export class AppComponent implements OnInit {
  coins: ICoin[] | null = null;
  loading: boolean = false;
  currency: string = 'rub';

  constructor(private httpService$: HttpService) { }

  ngOnInit() {
    this.loadCoins()
  }

  loadCoins() {
    this.loading = true;
    this.httpService$.getCoins()
      .pipe(
        delay(500),
        // map((i) => i.filter((i: ICoin) => !i.id.includes('coin'))),
        tap(i => console.log(i)
        ))
      .subscribe(res => {
        this.coins = res
        this.loading = false;
      })
  }

  setCurrency(value: string) {
    this.currency = value
  }
}
