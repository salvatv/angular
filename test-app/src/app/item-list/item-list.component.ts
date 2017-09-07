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

}
