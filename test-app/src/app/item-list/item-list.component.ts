import { Component, OnInit } from '@angular/core';
import { Item } from "./item.model";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  myItems: Item[] = [{
    'id': 1,
    'name': 'Juanky',
    'description': 'This item is a shit',
    'stock': 5,
    'price': 23.56
  },
  {'id': 2,
  'name': 'Peter',
  'description': 'This item is a bullshit',
  'stock': 10,
  'price': 23.56
  },
  {'id': 3,
  'name': 'Pako',
  'description': 'This item is a genius',
  'stock': 0,
  'price': 23.56
  }];

  constructor() { }

  ngOnInit() {
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
