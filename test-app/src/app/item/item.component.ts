import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from "../item-list/item.model";
import { CartComponent } from "../order/cart/cart.component";
import { Cart } from "../order/cart/cart.model";
import { ItemListService } from "../item-list/item-list.service";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() myItem: Item;
  @Output() cart = new EventEmitter<Item>();

  constructor(private itemLisService: ItemListService) { }

  ngOnInit() {
  }

  isSelected(id) {

    if (this.myItem.id === id) {
      this.myItem.selected = true;
    } else {
      this.myItem.selected = false;
    }

  }

  addQuantity(item: Item) {
    if (item.stock != 0 && item.quantity < item.stock) {
      item.quantity++;
      // item.stock--;  
    }
    console.log(item.name + ' ' + item.quantity);
  }

  add(item: Item, value: number) {
    if (value > 0 && value <= item.stock) {
      item.quantity = value;
      console.log(item.quantity);
    } else {
      (<HTMLInputElement>document.getElementById("quantity")).value = "0";
      return alert("Inserta un valor correcto TONTO");
    }
  }

  downQuantity(item: Item) {
    if (item.quantity > 0) {
      item.quantity--;
      // item.stock++; 
    }
    console.log(item.name + ' ' + item.quantity);
  }

  updateItem(item: Item) {
    this.itemLisService.updateItem(item).subscribe();
  }

  isEditable(item: Item) {
    if (item.editable) {
      item.editable = false;
      this.updateItem(item);
    } else {
      item.editable = true;
    }
  }

  addToCart() {
    this.cart.emit(this.myItem);
    console.log(this.cart);
  }

}
