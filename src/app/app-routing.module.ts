import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CoinComponent } from './components/coin/coin.component';
import { MainPageComponent } from './components/main-page/main-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'cryptocurrencies', component: AppComponent },
  { path: 'exchanges', component: AppComponent },
  { path: 'watchlist', component: AppComponent },
  { path: 'about', component: AppComponent },
  { path: 'coin/:id', component: CoinComponent },
  { path: '**', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
