import { BadInput } from './../shared/errorlibrary/bad-input';
import { AppError } from './../shared/errorlibrary/app-error';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ToastrService } from './../services/toastr.service';
import { Params, ActivatedRoute } from '@angular/router';
import { AuthorService, Author } from './author.service';
import { Component, OnInit, ElementRef, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  providers: [
    AuthorService,
    ToastrService,
  ]
})
export class AuthorEditComponent implements OnInit {

  process: boolean = false;
  author: Author[];
  tinymcyContent: any = '';
  contentFromDB: any = '';

  pageHeaders: any[] = [{
    header : "Author",
    subHeader : "Author Edit",
    activePage : "Author",
  }];

  constructor(
    private authorservice: AuthorService, 
    private toastrservice: ToastrService,
    private activatedRoute: ActivatedRoute, 
    private elem: ElementRef,
    public toastr: ToastsManager, 
    vcr: ViewContainerRef) { 
      this.toastr.setRootViewContainerRef(vcr);
    }

  sidebarOpen: boolean = false;
  public sidebarStateChange() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  ngOnInit() {
    this.process = true;
    this.activatedRoute.params.subscribe((params: Params) => {
      let id = params['id'];

      this.authorservice.getOne(id)
        .subscribe(
          response => {
            this.process = false;
            this.author = response.data;
            this.tinymcyContent = response.data[0].authorDescription;
            this.contentFromDB = response.data[0].authorDescription;
          });
    });
  }

  public tinymcyFunction(postContent: any):void {
    this.tinymcyContent = postContent;
  }

  onUpdate(form: HTMLInputElement) {
    this.process = true;
    let files = this.elem.nativeElement.querySelector('#authorImage').files;
    if (files.length > 0) {

      let formData:FormData = new FormData();
      formData.append('authorImage', files[0], files[0].name);

      for (var property in form) {
          if (form.hasOwnProperty(property)) {
              formData.append(property, form[property]);
          }
      }

      this.authorservice.updateWithImage(formData, form.id)
        .subscribe(
          response => {
            this.process = false;
            this.toastrservice.showSuccess('Author', 'Updated');
          }, 
          (error: AppError) => {
            this.process = false;
            this.toastrservice.showError(error.originalError.statusText);
          });
    } else {

      this.authorservice.update(form)
        .subscribe(
          response => {
            this.process = false;
            this.toastrservice.showSuccess('Author', 'Updated');
          }, 
          (error: AppError) => {
            this.process = false;
            this.toastrservice.showError(error.originalError.statusText);
          });
      
    }
  }

}
