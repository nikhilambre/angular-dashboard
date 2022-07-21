import { ProfileService, Profile } from './profile.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  providers: [
    ProfileService
  ]
})
export class ProfileComponent implements OnInit {

  profile: Profile[];
  
  pageHeaders: any[] = [{
    header : "Profile",
    subHeader : "Profile view",
    activePage : "My Profile",
  }];

  constructor(private profileservice: ProfileService) { }

  ngOnInit() {
    var userId = localStorage.getItem('user');

    this.profileservice.getForId(userId)
    .subscribe(
      response => {
        this.profile = response.data;
      });
  }

  sidebarOpen: boolean = false;
  public sidebarStateChange() {
    this.sidebarOpen = !this.sidebarOpen;
  }

}
