import { Component } from '@angular/core';

@Component({
  selector: 'app-buy-button',
  imports: [],
  templateUrl: './buy-button.html',
  styleUrl: './buy-button.css'
})
export class BuyButton {
  bought_product : boolean = false;

  buyProduct() {
    this.bought_product = !this.bought_product;
  }
}
