import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'

import { TodoFooterComponent } from './todo-footer.component';

@NgModule({
  declarations: [TodoFooterComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [TodoFooterComponent, RouterModule]
})
export class TodoFooterModuleModule { }
