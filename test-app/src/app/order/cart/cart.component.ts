import { Component, OnInit, Input } from '@angular/core';
import { Cart } from './cart.model';
import { CartService } from "./cart.service";
import { Item } from "../../item-list/item.model";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  myItems: Item[];
  
  constructor(private cartService: CartService) { }

  ngOnInit() {
   this.myItems = this.cartService.cart.items; 
  }

}
