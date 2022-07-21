import { NotFoundError } from './../shared/errorlibrary/not-found-error';
import { AppError } from './../shared/errorlibrary/app-error';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { PostService, Post } from './post.service';
import { ToastrService } from './../services/toastr.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  providers: [
    ToastrService,
    PostService
  ]
})
export class PostComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  post: Post[] = [];
  process: boolean = false;

  pageHeaders: any[] = [{
    header : "Post",
    subHeader : "Post Update",
    activePage : "Post",
  }];

  constructor(
    private postservice: PostService,
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
    this.postservice.getAll()
    .subscribe(
      response => {
        this.post = response.data;
        this.dtTrigger.next();
      });
  }

  onDelete(form) {
    var result = confirm("Sure you Want to Delete?");
    if (result) {

    this.process = true;
    this.postservice.delete(form.id)
      .subscribe(
        response => {
          this.process = false;
          let index = this.post.indexOf(form);
          this.post.splice(index, 1);
          this.toastrservice.showInfo('Post', 'Deleted');
        }, 
        (error: AppError) => {
          this.process = false;
          this.toastrservice.showError(error.originalError.statusText);
        });
    }
  }

}
