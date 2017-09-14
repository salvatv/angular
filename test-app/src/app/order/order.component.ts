import { Component, OnInit, Input } from '@angular/core';
import { Item } from "../item-list/item.model";
import { CartService } from "./cart/cart.service";
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

export class OrderComponent implements OnInit {

  name:string;
  surname:string;
 
  constructor(private cartService: CartService) { }

  ngOnInit() { 
  }

  totalPrecioCarro(){
    return this.cartService.cart.items.reduce((a,b) => a + (b.price*b.quantity), 0)
  }

  test(event:FormGroup){
    this.name= event.value.firstname;
    this.surname = event.value.surname;   
  }

}
