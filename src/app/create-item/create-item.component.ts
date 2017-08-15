import { Component } from "@angular/core";
import { ItemsService } from "../services/items/items.service";
import { Router } from '@angular/router';
import { Item } from "../models/item";

@Component({
  templateUrl: './create-item.template.html',
  styleUrls: [`./create-item.css`]
})
export class CreateItemComponent {
  item:string;
  invalid:boolean = false;
  maxCharacters:number = 27;

  constructor( private itemsService: ItemsService, private router: Router){}

  submitForm(form){
    if(form.invalid === true) {
      this.invalid = true;
      return
    }
    this.itemsService.addItem(form.value.item);
    this.router.navigate(['edit']);
  }
}


