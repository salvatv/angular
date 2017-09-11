import { Pipe, PipeTransform } from '@angular/core';
import { Item } from "./item-list/item.model";


@Pipe({
  name: 'mySearch'
})
export class MySearchPipe implements PipeTransform {

  transform(items: Item[], atribute:string, name: string): Item[] {   
    if(name && name.trim().length > 2){        
      return items.filter(item => {if(((item[atribute]).toUpperCase()).indexOf(name.trim().toUpperCase()) !== -1){ return item[atribute]}});
    }else{
      return items;
    }  
  }
}
