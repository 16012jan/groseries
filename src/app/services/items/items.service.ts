import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import { Item } from '../../models/item';

@Injectable()

export class ItemsService {
  items:Array<Item> = [];

  constructor(private http: Http){}

  getItems(){
    if(localStorage.getItem('items')){
      this.items = JSON.parse(localStorage.getItem('items'));
    }
    return this.items;
  }

  addItem(item){
    let length = this.items.length + 1;
    let newItem:Item = {
      id: length,
      title: item,
      completed: false
    }
    this.items.unshift(newItem);
    localStorage.setItem('items', JSON.stringify(this.items));
  }

  updateItem(id){
    this.items.forEach((item)=>{
      if(item.id === id){
        item.completed = !item.completed;
      }
    })
    localStorage.setItem('items', JSON.stringify(this.items));
  }

  deleteItem(id){
    this.items = this.items.filter((item)=>{
      return item.id != id;
    })
    localStorage.setItem('items', JSON.stringify(this.items));
    return this.items;
  }

  filterItems(value){
    let items:Array<Item> = [];
    if(value === true){
      items = this.items.filter((item)=> {
        if(item.completed) {
          return item
        }
      })
    }else{
      items = this.items;
    }
    return items
  }

}
