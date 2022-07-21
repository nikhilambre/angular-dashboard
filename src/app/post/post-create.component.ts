import { CategoryService, Category } from './../blog-category/category.service';
import { BadInput } from './../shared/errorlibrary/bad-input';
import { AppError } from './../shared/errorlibrary/app-error';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ToastrService } from './../services/toastr.service';
import { PostService, Post } from './post.service';
import { AuthorService, Author } from './../author/author.service';
import { Component, OnInit, ViewContainerRef, ElementRef } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  providers: [
    ToastrService,
    PostService,
    AuthorService,
    CategoryService
  ]
})
export class PostCreateComponent implements OnInit {

  defaultStatus = 'DRAFT';
  defaultRank = 4;
  comStatus = 'ACTIVE';
  post: Post[] = [];
  author: Author[] = [];
  category: Category[];
  tinymcyContent: any = '';
  process: boolean = false;

  pageHeaders: any[] = [{
    header : "Post",
    subHeader : "Post Create",
    activePage : "Post",
  }];

  constructor(
    private postservice: PostService,
    private authorservice: AuthorService,
    private categoryservice: CategoryService,
    private toastrservice: ToastrService,
    public toastr: ToastsManager, 
    vcr: ViewContainerRef,
    private elem: ElementRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  sidebarOpen: boolean = false;
  public sidebarStateChange() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  ngOnInit() {
    this.authorservice.getAll()
    .subscribe(
      response => {
        this.author = response.data;
      });

    this.categoryservice.getAll()
    .subscribe(
      response => {
        this.category = response.data;
      });
  }

  public tinymcyFunction(postContent: any):void {
    this.tinymcyContent = postContent;
  }

  onCreate(form: HTMLInputElement) {
    this.process = true;

    let formData:FormData = new FormData();
    let files = this.elem.nativeElement.querySelector('#postImage').files;

    if (files.length) {
      for (let i = 0; i < files.length; i++) {
        if (files[i].size > 600000) {
          this.process = false;
          this.toastrservice.showWarning('Post Image Size must be less than 600KB.');
          return false;
        }
        formData.append(`postImage[]`, files[i], files[i].name);
      }
    } else {
      this.process = false;
      this.toastrservice.showWarning('A Post Must have a Thumbnail image.');
      return false;
    }
    
    for (var property in form) {
      if (form.hasOwnProperty(property)) {
          formData.append(property, form[property]);
      }
    }

    this.postservice.createWithImage(formData)
      .subscribe(
        response => {
          this.process = false;
          this.toastrservice.showSuccess('Post', 'Created');
        },
        (error: AppError) => {
          this.process = false;
          this.toastrservice.showError(error.originalError.statusText);
        });
  }

}
