import { BadInput } from './../shared/errorlibrary/bad-input';
import { AppError } from './../shared/errorlibrary/app-error';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ToastrService } from './../services/toastr.service';
import { TagService, Tag } from './tag.service';
import { TagmapService, TagMap } from './tagmap.service';
import { PostService, Post } from './../post/post.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-tag-map',
  templateUrl: './tag-map.component.html',
  providers: [
    TagService,
    PostService,
    TagmapService,
    ToastrService
  ]
})
export class TagMapComponent implements OnInit {

  post: Post[];
  tag: Tag[] = [];
  tagmap: TagMap[];
  postIdVal: string = '';
  checkboxes: any[] = [];
  isChecked: any[] = [];

  pageHeaders: any[] = [{
    header : "Tags",
    subHeader : "Tags",
    activePage : "Tags",
  }];

  constructor(
    private postservice: PostService,
    private tagservice: TagService,
    private tagmapservice: TagmapService,
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
    this.postservice.getAll()
    .subscribe(
      response => { 
        this.post = response.data;
      });
  }

  onCheckBox(value, event) {
    if (event.target.checked) {
      this.checkboxes.push(value);
    } else {
      let index = this.checkboxes.indexOf(value);
      this.checkboxes.splice(index, 1);
    }
  }

  onCreate(form: HTMLInputElement) {
    let formData: FormData = new FormData();

    if (this.checkboxes.length > 0) {
      for (let i = 0; i < this.checkboxes.length; i++) {
          formData.append('tagId[]', this.checkboxes[i]);
      }
    }

    for (var property in form) {
      if (form.hasOwnProperty(property)) {
          formData.append(property, form[property]);
          this.postIdVal = form[property];
      }
    }

    this.tagmapservice.updateWithImage(formData, this.postIdVal)
      .subscribe(
        response => {
          this.toastrservice.showSuccess('Tag', 'Updated');
        }, 
        (error: AppError) => {
          if (error instanceof BadInput) {
            this.toastrservice.showError(error.originalError.statusText);
          }
          else throw error;
        });
  }

  onPostChange(post) {
    this.isChecked = [];
    this.checkboxes = [];

    this.tagmapservice.getForId(post)
    .subscribe(
      response => {
        this.tagmap = response.data;

        this.tagservice.getAll()
          .subscribe(
            response => {
              this.tag = response.data;

              let i = 0;
              while (i < this.tag.length) {
                for (let toMatch of this.tagmap) {
                  if (toMatch.tagId == this.tag[i].id) {
                    this.checkboxes.push(this.tag[i].id);
                    this.isChecked[this.tag[i].id] = true;
                    break;
                  } else {
                    this.isChecked[this.tag[i].id] = false;
                  }
 
                } i++;
              }
          });

      });
  }

}
