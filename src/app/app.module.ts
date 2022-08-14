import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoinComponent } from './components/coin/coin.component';
import { LoaderComponent } from './components/loader/loader.component';
import { StatusBarComponent } from './components/status-bar/status-bar.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPageComponent } from './components/main-page/main-page.component';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
@NgModule({
  declarations: [
    AppComponent,
    CoinComponent,
    LoaderComponent,
    StatusBarComponent,
    NavBarComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    DropdownModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
