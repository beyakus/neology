import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoAddComponent } from '../../todo/todo-add/todo-add.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    TodoAddComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [ TodoAddComponent ]
})
export class AddModule { }
