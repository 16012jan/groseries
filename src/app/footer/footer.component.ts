import { Component } from '@angular/core';
import { ItemsService } from '../services/items/items.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.template.html'
})

export class FooterComponent {
  filtering:boolean = false;


  constructor( private itemsService: ItemsService){
    this.filtering = this.itemsService.filtering;
  }


  filterItems(value){
    this.filtering = value;
    this.itemsService.filtering = value;
    this.itemsService.setFiltering();
  }

}
