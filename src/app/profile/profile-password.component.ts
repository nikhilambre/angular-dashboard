import { ToastrService } from './../services/toastr.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { BadInput } from './../shared/errorlibrary/bad-input';
import { AppError } from './../shared/errorlibrary/app-error';
import { ProfileService, Profile } from './profile.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-profile-password',
  templateUrl: './profile-password.component.html',
  providers: [
    ProfileService,
    ToastrService
  ]
})
export class ProfilePasswordComponent implements OnInit {

  @Input() profileId: string;
  
  profile: Profile[];
  constructor(
    private profileservice: ProfileService,
    private activatedRoute: ActivatedRoute,
    private toastrservice: ToastrService,
    public toastr: ToastsManager, 
    vcr: ViewContainerRef) { 
      this.toastr.setRootViewContainerRef(vcr);
    }

  ngOnInit() {
    // var userId = localStorage.getItem('user');

    // this.profileservice.getForUser(userId)
    // .subscribe(
    //   response => {
    //     this.profileId = response.data[0].id;
    //   });
  }

  sidebarOpen: boolean = false;
  public sidebarStateChange() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  onUpdate(form: HTMLInputElement) {
    
    this.profileservice.passwordChange(form)
      .subscribe(
        response => {
          this.toastrservice.showSuccess('Password', 'Updated');
        }, 
        (error: AppError) => {
          if (error instanceof BadInput) {
            this.toastrservice.showError(error.originalError.statusText);
          }
          else throw error;
        });
  }

}
