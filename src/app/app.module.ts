import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'hammerjs';
import 'hammer-timejs';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { EditShoppingListComponent } from './edit-shopping-list/edit-shopping-list.component';
import { CreateItemComponent } from './create-item/create-item.component';
import { ListItemComponent } from './list-item/list-item.component';
import { FooterComponent } from './footer/footer.component';

import { ItemsService } from './services/items/items.service';
import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    EditShoppingListComponent,
    CreateItemComponent,
    ListItemComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
