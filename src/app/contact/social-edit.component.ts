import { AuthorService, Author } from './../author/author.service';
import { ToastrService } from './../services/toastr.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ActivatedRoute, Params } from '@angular/router';
import { BadInput } from './../shared/errorlibrary/bad-input';
import { AppError } from './../shared/errorlibrary/app-error';
import { SocialService, Social } from './social.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-social-edit',
  templateUrl: './social-edit.component.html',
  providers: [
    SocialService,
    ToastrService,
    AuthorService
  ]
})
export class SocialEditComponent implements OnInit {

  author: Author[];
  social: Social[];
  process: boolean = false;

  pageHeaders: any[] = [{
    header : "Contact",
    subHeader : "Social Contact Edit",
    activePage : "Site Management",
  }];

  sidebarOpen: boolean = false;
  public sidebarStateChange() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  constructor(
    private socialservice: SocialService,
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

      this.socialservice.getOne(id)
        .subscribe(
          response => {
            this.social = response.data;
          });
    });

    this.authorservice.getAll()
    .subscribe(
      response => {
        this.author = response.data;
      });
  }

  onUpdate(form: HTMLInputElement) {
    this.process = true;
    this.socialservice.update(form)
      .subscribe(
        response => {
          this.process = false;
          this.toastrservice.showSuccess('Social Link', 'Updated');
        }, 
        (error: AppError) => {
          this.process = false;
          this.toastrservice.showError(error.originalError.statusText);
        });
  }

}
