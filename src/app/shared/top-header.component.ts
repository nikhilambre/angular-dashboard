import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html'
})
export class TopHeaderComponent implements OnInit {

  @Input() pageHeaders: any[];
  constructor() { }

  ngOnInit() {
  }

}
