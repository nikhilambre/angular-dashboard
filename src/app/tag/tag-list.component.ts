import { NotFoundError } from './../shared/errorlibrary/not-found-error';
import { AppError } from './../shared/errorlibrary/app-error';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ToastrService } from './../services/toastr.service';
import { TagService, Tag } from './tag.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  providers: [
    TagService,
    ToastrService
  ]
})
export class TagListComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  tag: Tag[];

  constructor(
    private tagservice: TagService, 
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
    this.tagservice.getAll()
    .subscribe(
      response => {
        this.tag = response.data;
        this.dtTrigger.next();
      });
  }

  onDelete(tag) {
    var result = confirm("Sure you Want to Delete?");
    if (result) {

    this.tagservice.delete(tag.id)
      .subscribe(
        response => {
          let index = this.tag.indexOf(tag);
          this.tag.splice(index, 1);
          this.toastrservice.showInfo('Tag', 'Deleted');
        }, 
        (error: AppError) => {
          if (error instanceof NotFoundError)
            this.toastrservice.showError(error);
          else throw error;
        });
      }
  }

}
