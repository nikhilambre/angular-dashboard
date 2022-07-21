import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  canvas: any;
  ctx: any;
  constructor() { }
  
  pageHeaders: any[] = [{
    header : "Dashboard",
    subHeader : "Dashboard",
    activePage : "Dashboard",
  }];

  sidebarOpen: boolean = false;
  public sidebarStateChange() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  ngOnInit() {
  }

}
