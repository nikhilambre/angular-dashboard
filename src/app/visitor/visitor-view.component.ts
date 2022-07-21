import { VisitorService, Visitor } from './visitor.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visitor-view',
  templateUrl: './visitor-view.component.html',
  providers:[
    VisitorService
  ]
})
export class VisitorViewComponent implements OnInit {

  visitor: Visitor[];
  pageHeaders: any[] = [{
    header : "Visitor",
    subHeader : "Visitor view",
    activePage : "Site Management",
  }];

  constructor(
    private visitorservice: VisitorService, 
    private activatedRoute: ActivatedRoute) { }

    sidebarOpen: boolean = false;
    public sidebarStateChange() {
      this.sidebarOpen = !this.sidebarOpen;
    }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      let id = params['id'];

      this.visitorservice.getOne(id)
        .subscribe(
          response => {
            this.visitor = response.data;
          });
    });
  }


}
