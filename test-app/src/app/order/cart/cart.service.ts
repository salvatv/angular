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

    addItem(item:Item){
      this.cart.items.push(item);
    }

    removeItem(){        
    }

}