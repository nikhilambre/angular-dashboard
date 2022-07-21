import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pageupdator-edit',
  templateUrl: './pageupdator-edit.component.html'
})
export class PageupdatorEditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sidebarOpen: boolean = false;
  public sidebarStateChange() {
    this.sidebarOpen = !this.sidebarOpen;
  }

}
