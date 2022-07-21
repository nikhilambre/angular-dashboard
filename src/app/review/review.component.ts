import { ToastrService } from './../services/toastr.service';
import { ReviewService, Review } from './review.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  providers: [
    ToastrService,
    ReviewService
  ]
})
export class ReviewComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  review: Review[];

  pageHeaders: any[] = [{
    header : "Reviews",
    subHeader : "Reviews List",
    activePage : "Visitors-Connect",
  }];

  constructor(private reviewservice: ReviewService ) { }

  sidebarOpen: boolean = false;
  public sidebarStateChange() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  ngOnInit() {
    this.reviewservice.getAll()
    .subscribe(
      response => {
        this.review = response.data;
        this.dtTrigger.next();
      });

  }

}
