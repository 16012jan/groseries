import { Component, OnInit, OnDestroy } from "@angular/core";
import { ItemsService } from "../services/items/items.service";
import "rxjs/add/operator/takeWhile";
import { Item } from "../models/item";


@Component({
  templateUrl: "./shopping-list.template.html",
  styleUrls: ["./shopping-list.styles.css"]
})

export class ShoppingListComponent implements OnInit, OnDestroy {
  items:Array<Item> = [];
  filtering:boolean = false;
  alive:boolean = true;
  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };

  constructor(private itemsService: ItemsService){}

  ngOnInit(){
    this.getFiltering();
    this.items = this.itemsService.getItems();
  }

  ngOnDestroy(){
    this.alive = false;
  }

  updateOne(id){
    this.itemsService.updateItem(id);
    this.items = this.itemsService.getItems();
  }

  getFiltering(){
    this.itemsService.getFiltering()
    .takeWhile(()=> this.alive)
    .subscribe((res)=>{
      this.items = res;
    })
  }
}
