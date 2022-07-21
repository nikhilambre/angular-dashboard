import { ToastrService } from './../services/toastr.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { BadInput } from './../shared/errorlibrary/bad-input';
import { AppError } from './../shared/errorlibrary/app-error';
import { ActivatedRoute, Params } from '@angular/router';
import { ProfileService, Profile } from './profile.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  providers: [
    ProfileService,
    ToastrService
  ]
})
export class ProfileEditComponent implements OnInit {

  profile: Profile[];
  profileId: string = '';
  process: boolean = false;

  pageHeaders: any[] = [{
    header : "Profile",
    subHeader : "Profile Edit",
    activePage : "My Profile",
  }];

  constructor(
    private profileservice: ProfileService, 
    private activatedRoute: ActivatedRoute,
    public toastr: ToastsManager, 
    private toastrservice: ToastrService,
    vcr: ViewContainerRef) { 
      this.toastr.setRootViewContainerRef(vcr);
    }

    sidebarOpen: boolean = false;
    public sidebarStateChange() {
      this.sidebarOpen = !this.sidebarOpen;
    }

  ngOnInit() {
    var userId = localStorage.getItem('user');
    
    this.profileservice.getForId(userId)
    .subscribe(
      response => {
        this.profile = response.data;
        this.profileId = response.data[0].id;
      });
  }

  onUpdate(form: HTMLInputElement) {
    this.process = true;
    this.profileservice.update(form)
      .subscribe(
        response => {
          this.process = false;
          this.toastrservice.showSuccess('Profile', 'Updated');
        }, 
        (error: AppError) => {
          this.process = false;
          this.toastrservice.showError(error.originalError.statusText);
        });
  }

}
