import { BadInput } from './../shared/errorlibrary/bad-input';
import { AppError } from './../shared/errorlibrary/app-error';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ToastrService } from './../services/toastr.service';
import { AuthorService, Author } from './author.service';
import { Component, OnInit, ViewContainerRef, ElementRef } from '@angular/core';

@Component({
  selector: 'app-author-create',
  templateUrl: './author-create.component.html',
  providers: [
    AuthorService,
    ToastrService
  ]
})
export class AuthorCreateComponent implements OnInit {

  author: Author[];
  tinymcyContent: any = '';
  process: boolean = false;

  pageHeaders: any[] = [{
    header: "Author",
    subHeader: "Create Author",
    activePage: "Author",
  }];

  constructor(
    private authorservice: AuthorService,
    private toastrservice: ToastrService,
    public toastr: ToastsManager,
    vcr: ViewContainerRef,
    private elem: ElementRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() { }
  
  public tinymcyFunction(productContent: any): void {
    this.tinymcyContent = productContent;
  }

  sidebarOpen: boolean = false;
  public sidebarStateChange() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  onCreate(form: HTMLInputElement) {
    this.process = true;
    let formData: FormData = new FormData();
    let files = this.elem.nativeElement.querySelector('#authorImage').files;

    if (files.length > 0) {
      formData.append('authorImage', files[0], files[0].name);
    }

    for (var property in form) {
      if (form.hasOwnProperty(property)) {
        formData.append(property, form[property]);
      }
    }

    this.authorservice.createWithImage(formData)
      .subscribe(
        response => {
          this.process = false;
          this.toastrservice.showSuccess('Author', 'Created');
        },
        (error: AppError) => {
          this.process = false;
          this.toastrservice.showError(error.originalError.statusText);
        });
  }

}
