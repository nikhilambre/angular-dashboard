import { CategoryService,Category } from './../blog-category/category.service';
import { ActivatedRoute, Params } from '@angular/router';
import { BadInput } from './../shared/errorlibrary/bad-input';
import { AppError } from './../shared/errorlibrary/app-error';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ToastrService } from './../services/toastr.service';
import { AuthorService, Author } from './../author/author.service';
import { PostService, Post } from './post.service';
import { Component, OnInit, ViewContainerRef, ElementRef } from '@angular/core';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  providers: [
    ToastrService,
    PostService,
    AuthorService,
    CategoryService
  ]
})
export class PostEditComponent implements OnInit {

  comStatus = 'ACTIVE';
  post: Post[] = [];
  author: Author[] = [];
  category: Category[];
  tinymcyContent: any = '';
  contentFromDB: any = '';
  process: boolean = false;

  pageHeaders: any[] = [{
    header : "Post",
    subHeader : "Post Update",
    activePage : "Post",
  }];

  constructor(
    private postservice: PostService,
    private authorservice: AuthorService,
    private categoryservice: CategoryService,
    private activatedRoute: ActivatedRoute, 
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

    this.activatedRoute.params.subscribe((params: Params) => {
      let id = params['id'];

      this.postservice.getOne(id)
        .subscribe(
          response => {
            this.post = response.data;
            this.tinymcyContent = response.data[0].postContent;
            this.contentFromDB = response.data[0].postContent;
          });
    });
  }

  public tinymcyFunction(postContent: any):void {
    this.tinymcyContent = postContent;
  }

  onUpdate(form: HTMLInputElement) {
    this.process = true;

    let formData:FormData = new FormData();
    let files = this.elem.nativeElement.querySelector('#postImage').files;


    for (let i = 0; i < files.length; i++) {
      if (files[i].size > 600000) {
        this.process = false;
        this.toastrservice.showWarning('Post Image Size must be less than 600KB.');
        return false;
      }
      formData.append(`postImage[]`, files[i], files[i].name);
    }

    for (var property in form) {
      if (form.hasOwnProperty(property)) {
          formData.append(property, form[property]);
      }
    }

    this.postservice.updateWithImage(formData, form.id)
      .subscribe(
        response => {
          this.process = false;
          this.toastrservice.showSuccess('Post', 'Updated');
        },
        (error: AppError) => {
          this.process = false;
          this.toastrservice.showError(error.originalError.statusText);
        });
  }

}
