import { Component, OnInit } from '@angular/core';
import { Task } from './interfaces/task';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {

  addTask: any = [];

  constructor() { }

  ngOnInit() {}

  eventTask(event: string) {
    const data = { complete: false, value: event}
    this.addTask.push(data);
  }
}
