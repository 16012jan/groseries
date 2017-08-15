import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import { Item } from '../../models/item';
import {Subject} from 'rxjs/Subject';
import { Observable } from 'rxjs';

@Injectable()

export class ItemsService {
  items:Array<Item> = [];
  filtering:boolean = false;
  subject = new Subject();

  constructor(private http: Http){}

  getItems(){
    if(localStorage.getItem('items')){
      this.items = JSON.parse(localStorage.getItem('items'));
    }

    return this.filterItems(this.filtering);
  }

  addItem(item){
    let newItem:Item = {
      id: Date.now().toString(),
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
    this.filtering = value;
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

  setFiltering(){
    this.subject.next(this.filterItems(this.filtering));
  }
  getFiltering():Observable<any>{
    return this.subject.asObservable();
  }
}
