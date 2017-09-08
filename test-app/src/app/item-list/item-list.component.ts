import { Component, OnInit } from '@angular/core';
import { Item } from "./item.model";
import { Items } from "./mocks";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  myItems: Item[];  

  constructor() { }

  ngOnInit() {
    this.myItems = Items;
    let stockinicial=new Array();
    this.myItems.forEach(item => {
    stockinicial[item.id].push(item.stock);
    });
  }  

  totalItems() {
    return this.myItems.length;
  };

  totalStock() {
  //  let total = 0;
  //  for (let entry of this.myItems) {      
 //    total = entry.stock + total;      
 // } 
  //return total;  
  return this.myItems.reduce( (prev, current) => prev + current.stock, 0);
  };

  isSelected(id) {
    this.myItems.forEach(item => {
      if(item.id === id){
        item.selected = true;
      }else{
        item.selected = false;
      }      
    });    
  }

  addQuantity(item: Item) {
    if(item.stock != 0)  {
      item.quantity++;
      item.stock--;  
    }             
        console.log(item.name + ' ' +item.quantity);  
  }
 
  add(item: Item, value:number) {
    item.stock = this.myItems;
          if (value > 0 && value <= item.stock){                      
            item.stock -= value;
            item.quantity = value;
            console.log(item.quantity);   
          }
  }

  downQuantity(item: Item) {
    if(item.quantity > 0){
    item.quantity--;
    item.stock++; 
    }   
    console.log(item.name + ' ' +item.quantity);  
}


}
