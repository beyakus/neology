import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: []
})
export class TodoAddComponent implements OnInit, OnDestroy {
  @Output() task = new EventEmitter();
  formTask: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  ngOnDestroy() {
    this.task.next();
    this.task.complete();
  }

  private createForm() {
    this.formTask = this.fb.group({
      name: ['']
    });
  }

 

  addTask() {
    const data = this.formTask.get('name');
    if ( data.value !== '') {
      this.task.emit(data.value);
      data.setValue('');
    }
  }

}
