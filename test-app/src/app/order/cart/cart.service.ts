import { Injectable } from '@angular/core';
import { Cart } from "./cart.model";
import { Item } from "../../item-list/item.model";


@Injectable()
export class CartService {

  cart: Cart;

  constructor() {
    this.cart = new Cart();
    this.cart.items = new Array<Item>();
  }

  ngOnInit() {
  }

  addItem(item: Item) {
    this.cart.items.push(item);
  }

  removeItem(item: Item) {
    var index = this.cart.items.indexOf(item, 0);
    if (index > -1) {
      this.cart.items.splice(index, 1);
    }
  }

}