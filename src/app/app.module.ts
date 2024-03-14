import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemsCartComponent } from './items-cart/items-cart.component';
import { ItemsTotalComponent } from './items-total/items-total.component';

@NgModule({
  declarations: [AppComponent, ItemsListComponent, ItemsCartComponent, ItemsTotalComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
