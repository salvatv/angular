import { Component, OnInit } from '@angular/core';
import { Item } from "./item.model";
import { ItemListService } from "./item-list.service";
import { CartComponent } from "../order/cart/cart.component";
import { Cart } from "../order/cart/cart.model";
import { CartService } from "../order/cart/cart.service";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  myItems: Item[];

  constructor(private itemLisService: ItemListService, private cartService: CartService) { }

  ngOnInit() {
    this.itemLisService.getItemList().subscribe(myItems => this.myItems = myItems);
  }

  totalItems() {
    if (this.myItems) {
      return this.myItems.length;
    } else {
      return 0;
    }
  };

  totalCarro(){
    return this.cartService.cart.items.length;
  }

  totalStock() {
    return this.myItems ? this.myItems.reduce((prev, current) => prev + current.stock, 0) : 0;
  };

  addToCart(item: Item) {
    // if (this.cartService.cart.items.length != 0) {
    //   if (item.quantity != 0) {
    //     this.cartService.cart.items.forEach(element => {
    //       if (element.id === item.id) {
    //         console.log(element.quantity);
    //         console.log(item.quantity);
    //         element.quantity += item.quantity;
    //       }
    //     });
    //   }
    // } else {
    //   this.cartService.addItem(item);
    // }
    if (item.quantity != 0 && item.quantity < item.stock) {
    this.cartService.addItem(item);
    }
  }
}


