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

  @Input() myItems: Item[];
  @Input() myItem: Item;
  @Output() cart = new EventEmitter<Item>();

  constructor(private itemLisService: ItemListService) { }

  ngOnInit() {
  }

  isSelected(id) {
    this.myItems.forEach(element => { 
      if (element.id === id) {
        element.selected = true;
      } else {
        element.selected = false;
      }     
    });
   
  }

  addQuantity(item: Item) {
    if (item.stock != 0 && item.quantity < item.stock) {
      item.quantity++;
      // item.stock--;  
    }  
  }

  add(item: Item, value: number) {
    if (value > 0 && value <= item.stock) {
      item.quantity = value;     
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
    this.myItem.stock -= this.myItem.quantity;
    (<HTMLInputElement>document.getElementById("quantity")).value = "0";   
    this.cart.emit(this.myItem);
  }

}
