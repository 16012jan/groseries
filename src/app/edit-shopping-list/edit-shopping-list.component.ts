import { Component, OnInit } from "@angular/core";
import { ItemsService } from "../services/items/items.service";
import { ISubscription } from 'rxjs/Subscription';
import "rxjs/add/operator/takeWhile";
import { Item } from "../models/item";

@Component({
  templateUrl: "./edit-shopping-list.template.html",
  styleUrls: [`./edit-shopping-list.css`]
})

export class EditShoppingListComponent{
  private subscription: ISubscription;
  private alive: boolean = true;
  items:Array<Item> = [];
  filtering:boolean = false;

  constructor( private itemsService: ItemsService){}

  ngOnInit(){
    this.items = this.itemsService.getItems();
  }

  deleteItem(id){
    this.items = this.itemsService.deleteItem(id);
  }

  filterItems(value){
    if(this.filtering === value) return;
    this.filtering = value;
    this.items = this.itemsService.filterItems(value);
  }
}


