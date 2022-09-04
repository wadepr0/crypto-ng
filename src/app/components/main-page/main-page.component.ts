import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { delay, tap } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { ICoin } from 'src/app/types/ICoin';
import { Currency } from '../constants/currency';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  coins: ICoin[] | null = null;
  loading: boolean = false;
  currency: Currency = { name: 'USD', code: 'usd' };

  constructor(
    private httpService: HttpService,
    private router: Router
    ) {

  }

  ngOnInit() {
    this.loadCoins();
    this.httpService.currency$.subscribe(data => {
      this.currency = data
    })
  }

  loadCoins() {
    this.loading = true;
    this.httpService.getCoins()
      .pipe(
        delay(500),
        // map((i) => i.filter((i: ICoin) => !i.id.includes('coin'))),
        // tap(i => console.log(i))
      )
      .subscribe(res => {
        this.coins = res
        this.loading = false;
      })
  }

  onRowClick(data: ICoin) {
    this.router.navigate(['/coin', data.id])
  }

}
