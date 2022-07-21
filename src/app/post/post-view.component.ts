import { PostService, Post } from './post.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  providers:[
    PostService
  ]
})
export class PostViewComponent implements OnInit {

  post: Post[];
  pageHeaders: any[] = [{
    header : "Post",
    subHeader : "Post view",
    activePage : "Post",
  }];

  constructor(
    private postservice: PostService, 
    private activatedRoute: ActivatedRoute) { }

    sidebarOpen: boolean = false;
    public sidebarStateChange() {
      this.sidebarOpen = !this.sidebarOpen;
    }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      let id = params['id'];

      this.postservice.getOne(id)
        .subscribe(
          response => {
            this.post = response.data;
          });
    });
  }

}
