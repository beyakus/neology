import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodoItemComponent } from './todo-item.component';

@NgModule({
  declarations: [ TodoItemComponent ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ TodoItemComponent ]
})
export class ItemModuleModule { }
