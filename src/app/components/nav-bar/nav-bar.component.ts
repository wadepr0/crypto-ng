import { Component, Input, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { delay, tap } from 'rxjs/operators';
import { HttpService } from 'src/app/services/http.service';
import { IRegisteredCoins } from 'src/app/types/IRegisteredCoins';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  @Input() currency!: string;
  allCoins: IRegisteredCoins[] | null = null;
  constructor(
    private httpService: HttpService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadCoins();
  }

  loadCoins() {
    this.httpService.getAllRegisteredCoins()
      .pipe(
        delay(500),
        // map((i) => i.filter((i: ICoin) => !i.id.includes('coin'))),
        // tap(i => console.log(i))
      )
      .subscribe(res => {
        this.allCoins = res;
      })
  }

  onSelect(event: { value: IRegisteredCoins }) {
    console.log(event.value);
    this.router.navigate(['/coin', event.value.id])
  }
}
