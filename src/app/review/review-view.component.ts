import { BadInput } from './../shared/errorlibrary/bad-input';
import { AppError } from './../shared/errorlibrary/app-error';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ActivatedRoute, Params } from '@angular/router';
import { ReviewService, Review } from './review.service';
import { ToastrService } from './../services/toastr.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-review-view',
  templateUrl: './review-view.component.html',
  providers: [
    ToastrService,
    ReviewService
  ]
})
export class ReviewViewComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  review: Review[];
  reply: any;
  process: boolean = false;

  pageHeaders: any[] = [{
    header : "Reviews",
    subHeader : "Review View",
    activePage : "Visitors-Connect",
  }];

  constructor( 
    private reviewservice: ReviewService,
    private activatedRoute: ActivatedRoute,
    private toastrservice: ToastrService,
    public toastr: ToastsManager, 
    vcr: ViewContainerRef) {
      this.toastr.setRootViewContainerRef(vcr);
    }

    sidebarOpen: boolean = false;
    public sidebarStateChange() {
      this.sidebarOpen = !this.sidebarOpen;
    }

    ngOnInit() {
      this.activatedRoute.params.subscribe((params: Params) => {
        let id = params['id'];
  
        this.reviewservice.getOne(id)
          .map(fil => {
            let review = fil.data.filter((s) => s.reviewParentId == null);
            let reply = fil.data.filter((s) => s.reviewParentId != null);
            return [review, reply];
          })
          .subscribe(
            response => {
              this.review = response[0];
              this.reply = response[1][0].reviewContent;
            });
      });
    }
  
    onCreate(form: HTMLInputElement) {
      this.process = true;
      this.reviewservice.create(form)
        .subscribe(
          response => {
            this.process = false;
            this.toastrservice.showSuccess('Review Reply', 'Added');
          }, 
          (error: AppError) => {
            this.process = false;
            this.toastrservice.showError(error.originalError.statusText);
          });
    }

}
