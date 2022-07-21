import { Component, OnInit } from '@angular/core';
import { CommentService, Comment } from './comment.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-comment-reject',
  templateUrl: './comment-reject.component.html',
  providers: [
    CommentService
  ]
})
export class CommentRejectComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  comment: Comment[];

  linkId: any[] = [{
    id : "",
    name : "rejected",
  }];

  pageHeaders: any[] = [{
    header : "Comment",
    subHeader : "Comments Rejected",
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
      return fil.data.filter((s) => s.commentStatus === 'REJECTED');
    })
    .subscribe(
      response => {
        this.comment = response;
        this.dtTrigger.next();
      });

    })

  }

}
