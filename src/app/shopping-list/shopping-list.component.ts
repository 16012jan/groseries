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
  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };

  constructor(private itemsService: ItemsService){}

  ngOnInit(){
    this.getFiltering();
    this.items = this.itemsService.getItems();
  }

  updateOne(id){
    this.itemsService.updateItem(id);
    this.items = this.itemsService.getItems();
  }

  getFiltering(){
    this.itemsService.getFiltering().subscribe((res)=>{
      this.items = res;
    })
  }
}
