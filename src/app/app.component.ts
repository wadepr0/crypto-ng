import { Component, OnInit } from '@angular/core';
import { delay, map, tap } from 'rxjs/operators';
import { HttpService } from './services/http.service';
import { ICoin } from './types/ICoin';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  loading: boolean = false;
  

  ngOnInit() {

  }

 


}
