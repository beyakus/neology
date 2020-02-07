import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

import { TodoComponent } from './todo.component';

const ROUTES: Routes = [
  { path: '', component: TodoComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  exports: [ RouterModule ]
})
export class TodoRuterModule { }
