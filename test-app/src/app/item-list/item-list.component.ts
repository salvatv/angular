import { Component, OnInit } from '@angular/core';
import { Item } from "./item.model";
//import { Items } from "./mocks";
import { ItemListService } from "./item-list.service";
import { CartComponent } from "../order/cart/cart.component";
import { Cart } from "../order/cart/cart.model";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  myItems: Item[];
  cart: Cart;

  constructor(private itemLisService: ItemListService) { }

  ngOnInit() {
    this.itemLisService.getItemList().subscribe(myItems => this.myItems = myItems);
    this.cart = new Cart();
    this.cart.items = new Array();

  }

  totalItems() {
    if (this.myItems) {
      return this.myItems.length;
    } else {
      return 0;
    }
  };

  totalStock() {
    //  let total = 0;
    //  for (let entry of this.myItems) {      
    //    total = entry.stock + total;      
    // } 
    //return total;  
    return this.myItems ? this.myItems.reduce((prev, current) => prev + current.stock, 0) : 0;
  };

  addToCart(item: Item) {
    this.cart.items.push(item);
  }

}
