import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pageupdator-create',
  templateUrl: './pageupdator-create.component.html'
})
export class PageupdatorCreateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sidebarOpen: boolean = false;
  public sidebarStateChange() {
    this.sidebarOpen = !this.sidebarOpen;
  }

}
