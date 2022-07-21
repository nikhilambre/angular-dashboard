import { CommentService, Comment } from './comment.service';
import { ToastrService } from './../services/toastr.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs/Rx';
import { ToastsManager } from 'ng2-toastr/src/toast-manager';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-comment-pending',
  templateUrl: './comment-pending.component.html',
  providers: [
    ToastrService,
    CommentService
  ]
})
export class CommentPendingComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  comment: Comment[];

  linkId: any[] = [{
    id : "",
    name : "pending",
  }];

  pageHeaders: any[] = [{
    header : "Comment",
    subHeader : "Comments Pending",
    activePage : "Visitors",
  }];

  constructor( 
    private commentservice: CommentService,
    private activatedRoute: ActivatedRoute ) { }

    sidebarOpen: boolean = false;
    public sidebarStateChange() {
      this.sidebarOpen = !this.sidebarOpen;
    }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      let id = params['id'];
      this.linkId[0].id = id;

    this.commentservice.getAll()
    .map(fil => {
      return fil.data.filter((s) => s.commentStatus === 'PENDING');
    })
    .subscribe(
      response => {
        this.comment = response;
        this.dtTrigger.next();
      });

    })

  }
}
