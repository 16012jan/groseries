import { Component, OnInit, OnDestroy } from "@angular/core";
import { ItemsService } from "../services/items/items.service";
import "rxjs/add/operator/takeWhile";
import { Item } from "../models/item";

@Component({
  templateUrl: "./edit-shopping-list.template.html",
  styleUrls: [`./edit-shopping-list.css`]
})

export class EditShoppingListComponent implements OnInit, OnDestroy {
  alive: boolean = true;
  items:Array<Item> = [];

  constructor( private itemsService: ItemsService){}

  ngOnInit(){
    this.getFiltering();
    this.items = this.itemsService.getItems();
  }

  ngOnDestroy(){
    this.alive = false;
  }

  deleteItem(id){
    this.items = this.itemsService.deleteItem(id);
  }

 getFiltering(){
    this.itemsService.getFiltering()
    .takeWhile(()=> this.alive)
    .subscribe((res)=>{
      this.items = res;
    })
  }
}


