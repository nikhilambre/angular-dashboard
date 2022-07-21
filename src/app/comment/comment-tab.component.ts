import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comment-tab',
  templateUrl: './comment-tab.component.html'
})
export class CommentTabComponent implements OnInit {

  @Input() linkId: any[];
  constructor() { }

  ngOnInit() { }

  sidebarOpen: boolean = false;
  public sidebarStateChange() {
    this.sidebarOpen = !this.sidebarOpen;
  }

}
