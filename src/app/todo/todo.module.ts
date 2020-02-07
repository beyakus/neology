import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoComponent } from '../todo/todo.component';
import { TodosListComponent } from '../todo/todos-list/todos-list.component';
import { TodoRuterModule } from './todo-ruter.module';
import { AddModule } from './todo-add/add.module';
import { ItemModuleModule } from './todo-item/item-module.module';
import { TodoFooterModuleModule } from './todo-footer/todo-footer-module.module';

@NgModule({
  declarations: [
    TodoComponent,
    TodosListComponent
  ],
  imports: [
    CommonModule,
    TodoRuterModule,
    AddModule,
    ItemModuleModule,
    TodoFooterModuleModule

  ]
})
export class TodoModule { }
