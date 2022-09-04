import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { DeepNullable, ICoinDetails } from 'src/app/types/ICoinDetails';


@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.scss']
})
export class CoinComponent implements OnInit {
  coinId!: string;
  coin: Partial<DeepNullable<ICoinDetails>> = {
    id: null,
    image: {
      small: null
    }
  };
  loading: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private http: HttpService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.coinId = params['id'];

      this.http.getCoinDetails(this.coinId).subscribe(res => {
        this.loading = true;
        this.coin = res;
        this.loading = false;
      })
    });


  }

}
