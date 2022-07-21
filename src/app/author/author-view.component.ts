import { ToastsManager } from 'ng2-toastr/src/toast-manager';
import { AppError } from './../shared/errorlibrary/app-error';
import { ToastrService } from './../services/toastr.service';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthorService, Author } from './author.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-author-view',
  templateUrl: './author-view.component.html',
  providers: [
    ToastrService,
    AuthorService
  ]
})
export class AuthorViewComponent implements OnInit {

  author: Author[];
  pageHeaders: any[] = [{
    header : "Author",
    subHeader : "Author view",
    activePage : "Author",
  }];

  constructor(
    private authorservice: AuthorService,
    private toastrservice: ToastrService,  
    private activatedRoute: ActivatedRoute,
    public toastr: ToastsManager, 
    vcr: ViewContainerRef) { 
      this.toastr.setRootViewContainerRef(vcr);
    }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      let id = params['id'];

      this.authorservice.getOne(id)
        .subscribe(
          response => {
            this.author = response.data;
          },
          (error: AppError) => {
            this.toastrservice.showError(error.originalError.statusText);
          });
    });
  }

  sidebarOpen: boolean = false;
  public sidebarStateChange() {
    this.sidebarOpen = !this.sidebarOpen;
  }

}
