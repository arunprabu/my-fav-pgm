import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  template: `
    <form class="form-inline mt-2 mt-md-0">
      <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="button" onclick="searchHandler(event)">Search</button>
    </form>
  `,
  styles: []
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
