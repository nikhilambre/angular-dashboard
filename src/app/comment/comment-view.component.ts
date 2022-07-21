import { BadInput } from './../shared/errorlibrary/bad-input';
import { AppError } from './../shared/errorlibrary/app-error';
import { CommentService, Comment } from './comment.service';
import { ToastrService } from './../services/toastr.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs/Rx';
import { ActivatedRoute, Params } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/src/toast-manager';

@Component({
  selector: 'app-comment-view',
  templateUrl: './comment-view.component.html',
  providers: [
    ToastrService,
    CommentService
  ]
})
export class CommentViewComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  comment: Comment[];

  likeCount: number = 0;
  dislikeCount: number = 0;
  authorName: string = '';

  pageHeaders: any[] = [{
    header : "Comment",
    subHeader : "Comment View",
    activePage : "Visitors",
  }];

  constructor( 
    private commentservice: CommentService,
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

      this.commentservice.getOne(id)
        .subscribe(
          response => {
            this.comment = response.data;

            this.commentservice.getForId(response.data[0].postId)
            .subscribe(
              resp => {
                this.authorName = resp.data[0].authorName;
              });

          });
    });
  }

  onUpdate(form: HTMLInputElement) {
    this.commentservice.update(form)
      .subscribe(
        response => {
          this.toastrservice.showSuccess('Comment', 'Updated');
        }, 
        (error: AppError) => {
          if (error instanceof BadInput) {
            this.toastr.error('Something went wrong, Refresh and try again!', 'Oops!');
          }
          else throw error;
        });
  }

  onReply(form: HTMLInputElement) {
    this.commentservice.create(form)
      .subscribe(
        response => {
          this.toastrservice.showSuccess('Reply', 'Added');
        }, 
        (error: AppError) => {
          if (error instanceof BadInput) {
            this.toastr.error('Something went wrong, Refresh and try again!', 'Oops!');
          }
          else throw error;
        });
  }

}
