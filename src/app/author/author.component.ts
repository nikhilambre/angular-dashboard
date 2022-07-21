import { NotFoundError } from './../shared/errorlibrary/not-found-error';
import { AppError } from './../shared/errorlibrary/app-error';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { AuthorService, Author } from './author.service';
import { ToastrService } from './../services/toastr.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  providers: [
    ToastrService,
    AuthorService
  ]
})
export class AuthorComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  author: Author[];

  pageHeaders: any[] = [{
    header : "Author",
    subHeader : "Author List",
    activePage : "Author",
  }];

  constructor(
    private authorservice: AuthorService,
    private toastrservice: ToastrService,
    public toastr: ToastsManager, 
    vcr: ViewContainerRef) {
      this.toastr.setRootViewContainerRef(vcr);
    }

  ngOnInit() {
    this.authorservice.getAll()
    .subscribe(
      response => {
        this.author = response.data;
        this.dtTrigger.next();
      });
  }

  sidebarOpen: boolean = false;
  public sidebarStateChange() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  onDelete(author) {
    var result = confirm("Sure you Want to Delete?");
    if (result) {

    this.authorservice.delete(author.id)
      .subscribe(
        response => {
          let index = this.author.indexOf(author);
          this.author.splice(index, 1);
          this.toastrservice.showInfo('Author', 'Deleted');
        }, 
        (error: AppError) => {
          this.toastrservice.showError(error.originalError.statusText);
        });
    }
  }

}
