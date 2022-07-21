import { ActivatedRoute, Params } from '@angular/router';
import { ParentcatService, Parentcat } from './parentcat.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parentcat-view',
  templateUrl: './parentcat-view.component.html',
  providers:[
    ParentcatService
  ]
})
export class ParentcatViewComponent implements OnInit {

  parentcat: Parentcat[];
  pageHeaders: any[] = [{
    header : "Parent Category",
    subHeader : "Parent Category List",
    activePage : "Category",
  }];

  constructor(
    private parentcatservice: ParentcatService, 
    private activatedRoute: ActivatedRoute) { }

    sidebarOpen: boolean = false;
    public sidebarStateChange() {
      this.sidebarOpen = !this.sidebarOpen;
    }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      let id = params['id'];

      this.parentcatservice.getOne(id)
        .subscribe(
          response => {
            this.parentcat = response.data;
          });
    });
  }

}
