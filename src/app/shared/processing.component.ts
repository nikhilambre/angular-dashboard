import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-processing',
  templateUrl: './processing.component.html'
})
export class ProcessingComponent implements OnInit {

  @Input() process: boolean;
  constructor() { }

  ngOnInit() {
  }

}
