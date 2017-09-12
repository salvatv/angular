import { Component, OnInit, Input } from '@angular/core';
import { Cart } from './cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() cart: Cart;
  
  constructor() { }

  ngOnInit() {
    console.log(this.cart);
  }

}
