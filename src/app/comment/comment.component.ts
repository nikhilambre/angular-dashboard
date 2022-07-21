import { ToastrService } from './../services/toastr.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { CommentService, Comment } from './comment.service';
import { Subject } from 'rxjs/Rx';
import { ToastsManager } from 'ng2-toastr/src/toast-manager';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  providers: [
    ToastrService,
    CommentService
  ]
})
export class CommentComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  comment: Comment[];
  process: boolean = false;

  linkId: any[] = [{
    id : "",
    name : "comment",
  }];

  pageHeaders: any[] = [{
    header : "Comment",
    subHeader : "Comments List",
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
      return fil.data.filter((s) => s.commentStatus === 'APPROVED');
    })
    .subscribe(
      response => {
        this.comment = response;
        this.dtTrigger.next();
      });

    })

  }

}
