import { AuthorService, Author } from './../author/author.service';
import { ToastrService } from './../services/toastr.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { BadInput } from './../shared/errorlibrary/bad-input';
import { AppError } from './../shared/errorlibrary/app-error';
import { SocialService, Social } from './social.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  providers: [
    SocialService,
    ToastrService,
    AuthorService
  ]
})
export class SocialComponent implements OnInit {

  author: Author[];
  social: Social[];
  pageHeaders: any[] = [{
    header : "Contact",
    subHeader : "Social Links",
    activePage : "Site Management",
  }];

  sidebarOpen: boolean = false;
  public sidebarStateChange() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  constructor(
    private socialservice: SocialService,
    private toastrservice: ToastrService,
    private authorservice: AuthorService,
    public toastr: ToastsManager, 
    vcr: ViewContainerRef) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.authorservice.getAll()
    .subscribe(
      response => {
        this.author = response.data;
      });
  }

  onCreate(form: HTMLInputElement) {
    this.socialservice.create(form)
      .subscribe(
        response => {
          this.toastrservice.showSuccess('Social Link', 'Created');
        }, 
        (error: AppError) => {
          if (error instanceof BadInput) {
            this.toastrservice.showError(error.originalError.statusText);
          }
          else throw error;
        });
  }

}
