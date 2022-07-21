import { NotFoundError } from './../shared/errorlibrary/not-found-error';
import { AppError } from './../shared/errorlibrary/app-error';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ToastrService } from './../services/toastr.service';
import { ParentcatService, Parentcat } from './parentcat.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-parentcat',
  templateUrl: './parentcat.component.html',
  providers:[
    ToastrService,
    ParentcatService
  ]
})
export class ParentcatComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  parentcat: Parentcat[];
  process: boolean = false;

  pageHeaders: any[] = [{
    header : "Parent Category",
    subHeader : "Parent Category view",
    activePage : "Category",
  }];

  constructor(
    private parentcatservice: ParentcatService, 
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
    this.parentcatservice.getAll()
    .subscribe(
      response => {
        this.parentcat = response.data;
        this.dtTrigger.next();
      });
  }

  onDelete(parentcat) {
    var result = confirm("Sure you Want to Delete?");
    if (result) {

    this.process = true;
    this.parentcatservice.delete(parentcat.id)
      .subscribe(
        response => {
          this.process = false;
          let index = this.parentcat.indexOf(parentcat);
          this.parentcat.splice(index, 1);
          this.toastrservice.showInfo('Parent Category', 'Deleted');
        }, 
        (error: AppError) => {
          this.process = false;
          this.toastrservice.showError(error.originalError.statusText);
        });
    }
  }

}
