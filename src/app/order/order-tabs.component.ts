import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order-tabs',
  templateUrl: './order-tabs.component.html'
})
export class OrderTabsComponent implements OnInit {

  @Input() linkId: any[];
  constructor() { }

  ngOnInit() { }

  sidebarOpen: boolean = false;
  public sidebarStateChange() {
    this.sidebarOpen = !this.sidebarOpen;
  }

}
