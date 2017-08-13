import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'list-item',
  templateUrl: './list-item.template.html',
  styleUrls: [`./list-item.css`]
})

export class ListItemComponent {
  @Input() item:string;
  @Output() updateItem = new EventEmitter();
  toggleStaus(id){
    this.updateItem.emit(id);
  }
}
