import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Task } from '../interfaces/task';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit, OnDestroy {
  @Input() set listData(data: Task[]) {
    this.list = data;
    this.filterList = data;
  }
  readonly ngUnSubscribe: Subject<void> = new Subject();
  isEdit: boolean[] = [];
  list: Task[] = [];
  filterList: Task[] = [];
  removeList: Task[] = [];
  isRemove: boolean;
  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.queryParams
    .pipe(takeUntil(this.ngUnSubscribe))
    .subscribe(q => {
      const { filter } = q;
      this.isRemove = filter === 'remove' ? false : true;
      this.filterData(filter);
    });
  }

  ngOnDestroy() {
    this.ngUnSubscribe.next();
    this.ngUnSubscribe.complete();
  }

  private filterData(type: string) {
    const { filterList, removeList } = this;
    this.list =
      (type === 'pending' || undefined)   ? filterList.filter( x => !x.complete) :
      (type === 'remove')    ? removeList :
      (type === 'completed') ? filterList.filter( x => x.complete) :
      filterList;
  }

  edit(i: number) {
    this.isEdit[i] = !this.isEdit[i];
  }

  deleteItem(i: number) {
    const r = this.list[i];
    this.removeList.push(r);
    this.list.splice(i, 1);
  }

}
