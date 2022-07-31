import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { delay, tap } from 'rxjs/operators';
import { HttpService } from 'src/app/services/http.service';
import { IRegisteredCoins } from 'src/app/types/IRegisteredCoins';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarComponent implements OnInit {
  @Input() currency!: string;
  allCoins: IRegisteredCoins[] | null = null;
  constructor(private httpService$: HttpService) { }

  ngOnInit(): void {
    this.loadCoins();
  }

  loadCoins() {
    this.httpService$.getAllRegisteredCoins()
      .pipe(
        delay(500),
        // map((i) => i.filter((i: ICoin) => !i.id.includes('coin'))),
        tap(i => console.log(i)
        ))
      .subscribe(res => {
        this.allCoins = res;
      })
  }

}
