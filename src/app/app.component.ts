import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Item } from './models/item';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-green-grocers';
  apiUrl = environment.apiUrl;
  groceries: Item[] = [];
  cart: { item: Item, quantity: number }[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchGroceries();
  }

  fetchGroceries() {
    this.http.get<Item[]>(`${this.apiUrl}groceries`).subscribe(data => {
      this.groceries = data;
    });
  }
  addToCart(item: Item) {
    const cartItem = this.cart.find(cartItem => cartItem.item.id === item.id);
    if (cartItem) {
      cartItem.quantity++;
    } else {
      this.cart.push({ item: item, quantity: 1 });
    }
  }

  removeFromCart(item: Item) {
    const index = this.cart.findIndex(cartItem => cartItem.item.id === item.id);
    if (index !== -1) {
      if (this.cart[index].quantity > 1) {
        this.cart[index].quantity--;
      } else {
        this.cart.splice(index, 1);
      }
    }
  }

  getTotalPrice() {
    return this.cart.reduce((total, cartItem) => total + (cartItem.item.price * cartItem.quantity), 0);
  }
}
