import { LikeService, Like } from './like.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  providers: [
    LikeService
  ]
})
export class LikeComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  like: Like[];

  pageHeaders: any[] = [{
    header : "Likes",
    subHeader : "Likes List",
    activePage : "Visitors",
  }];

  constructor(private likeservice: LikeService ) { }

  sidebarOpen: boolean = false;
  public sidebarStateChange() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  ngOnInit() {

    this.likeservice.getAll()
      .subscribe(
        response => {
          this.like = response.data;
          this.dtTrigger.next();
        });
  }

}
