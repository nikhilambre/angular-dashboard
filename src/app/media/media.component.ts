import { NotFoundError } from './../shared/errorlibrary/not-found-error';
import { AppError } from './../shared/errorlibrary/app-error';
import { ToastrService } from './../services/toastr.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { MediaService, Media } from './media.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  providers: [
    MediaService,
    ToastrService
  ]
})
export class MediaComponent implements OnInit {

  media: Media[] = [];
  url: string = '';

  pageHeaders: any[] = [{
    header : "Media",
    subHeader : "Media",
    activePage : "Media",
  }];

  constructor(
    private mediaservice: MediaService,
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
    this.url = this.mediaservice.getBaseUrl();

    this.mediaservice.getAll()
    .subscribe(
      response => {
        this.media = response.data;
      });
  }

  onCopy() {
    this.toastrservice.showInfo('Media Link', 'Copied');
  }

  onDelete(media) {
    var result = confirm("Sure you Want to Delete?");
    if (result) {

    this.mediaservice.delete(media.id)
      .subscribe(
        response => {
          let index = this.media.indexOf(media);
          this.media.splice(index, 1);
          this.toastrservice.showInfo('Media', 'Deleted');
        }, 
        (error: AppError) => {
          if (error instanceof NotFoundError)
            this.toastrservice.showError(error.originalError.statusText);
          else throw error;
        });
    }
  }

}
