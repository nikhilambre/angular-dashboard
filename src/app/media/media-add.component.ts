import { BadInput } from './../shared/errorlibrary/bad-input';
import { AppError } from './../shared/errorlibrary/app-error';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { MediaService } from './media.service';
import { ToastrService } from './../services/toastr.service';
import { Component, OnInit, ElementRef, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-media-add',
  templateUrl: './media-add.component.html',
  providers: [
    MediaService,
    ToastrService
  ]
})
export class MediaAddComponent implements OnInit {

  constructor(
    private mediaservice: MediaService,
    private toastrservice: ToastrService,
    private elem: ElementRef,
    public toastr: ToastsManager, 
    vcr: ViewContainerRef ) { 
      this.toastr.setRootViewContainerRef(vcr);
    }

  ngOnInit() { }

  sidebarOpen: boolean = false;
  public sidebarStateChange() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  onCreate() {
    let formData:FormData = new FormData();

    let images = this.elem.nativeElement.querySelector('#mediaImage').files;
    if (images.length < 10) {
      for (let i = 0; i < images.length; i++) {
        if (images[i].size > 900000) {
          this.toastrservice.showWarning('Image Size must be less than 900KB.');
          return false;
        }
        formData.append(`mediaImage[]`, images[i], images[i].name);
      }
    } else{ 
      this.toastrservice.showWarning('MAX 10 images can be uploaded at a time.');
      return false;
    }

    let videos = this.elem.nativeElement.querySelector('#mediaVideo').files;
    if (videos.length > 0) {
      // if (videos.size > 40000000) {
      //   this.toastrservice.showWarning('Video Size must be less than 40MB.');
      //   return false;
      // }
      formData.append('mediaVideo', videos[0], videos[0].name);
    }


    this.mediaservice.createWithImage(formData)
    .subscribe(
      response => {
        this.toastrservice.showSuccess('Media', 'Added');
      },
      (error: AppError) => {
        if (error instanceof BadInput) {
          this.toastrservice.showError(error.originalError.statusText);
        }
        else throw error;
      });
  }
}
