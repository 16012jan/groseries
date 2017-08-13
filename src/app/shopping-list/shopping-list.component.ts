import { Component, OnInit } from "@angular/core";
import { ItemsService } from "../services/items/items.service";
import { Item } from "../models/item";


@Component({
  templateUrl: "./shopping-list.template.html",
  styleUrls: ["./shopping-list.styles.css"]
})

export class ShoppingListComponent implements OnInit {
  items:Array<Item> = [];
  filtering:boolean = false;

  constructor(private itemsService: ItemsService){}

  ngOnInit(){
    this.items = this.itemsService.getItems();
  }

  updateOne(id:number){
    this.itemsService.updateItem(id);
    let item = this.items.find((item):any=>{
      if(item.id === id){
        return item
      }
    })
    item.completed = !item.completed;
    this.itemsService.updateItem(id);
  }

  filterItems(value){
    if(this.filtering === value) return;
    this.filtering = value;
    this.items = this.itemsService.filterItems(value);
  }

}
