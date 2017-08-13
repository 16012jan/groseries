import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { EditShoppingListComponent } from './edit-shopping-list/edit-shopping-list.component';
import { CreateItemComponent } from './create-item/create-item.component';

export const routes: Routes = [
  { path: '', component: ShoppingListComponent },
  { path: 'edit', component: EditShoppingListComponent },
  { path: 'create', component: CreateItemComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
