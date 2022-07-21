import { ToastrService } from './../services/toastr.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { NotFoundError } from './../shared/errorlibrary/not-found-error';
import { AppError } from './../shared/errorlibrary/app-error';
import { SocialService, Social } from './social.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-social-list',
  templateUrl: './social-list.component.html',
  providers: [
    ToastrService,
    SocialService
  ]
})
export class SocialListComponent implements OnInit {

  social: Social[];
  constructor(
    private socialservice: SocialService,
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
    this.socialservice.getAll()
      .subscribe(
        response => {
          this.social = response.data;
        });
  }

  onDelete(social) {
    var result = confirm("Sure you Want to Delete?");
    if (result) {

    this.socialservice.delete(social.id)
      .subscribe(
        response => {
          let index = this.social.indexOf(social);
          this.social.splice(index, 1);
          this.toastrservice.showInfo('Spcoal Link', 'Deleted');
        }, 
        (error: AppError) => {
          if (error instanceof NotFoundError)
            this.toastrservice.showError(error.originalError.statusText);
          else throw error;
        });
      }
  }

}
