import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }

  /**
   * The function issues parameters to the url to select the type of filtering
   * @param type Select type filter
   *
   */
  filter(type: string) {
    const params = { filter: type };
    this.router.navigate([], {
      queryParams: params
    });
  }

}
