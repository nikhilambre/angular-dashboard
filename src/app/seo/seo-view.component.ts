import { ActivatedRoute, Params } from '@angular/router';
import { SeoService, Seo } from './seo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seo-view',
  templateUrl: './seo-view.component.html',
  providers:[
    SeoService
  ]
})
export class SeoViewComponent implements OnInit {

  seo: Seo[];
  pageHeaders: any[] = [{
    header : "Seo",
    subHeader : "Seo view",
    activePage : "Site Management",
  }];

  constructor(
    private seoservice: SeoService, 
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      let id = params['id'];

      this.seoservice.getOne(id)
        .subscribe(
          response => {
            this.seo = response.data;
          });
    });
  }

  sidebarOpen: boolean = false;
  public sidebarStateChange() {
    this.sidebarOpen = !this.sidebarOpen;
  }

}
