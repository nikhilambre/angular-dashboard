import { Enquiry, EnquiryService } from './enquiry.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enquiry-view',
  templateUrl: './enquiry-view.component.html',
  providers: [
    EnquiryService
  ]
})
export class EnquiryViewComponent implements OnInit {

  enquiry: Enquiry[];
  pageHeaders: any[] = [{
    header : "Enquiry",
    subHeader : "Enquiry view",
    activePage : "Visitors Connect",
  }];

  constructor(
    private enquiryservice: EnquiryService, 
    private activatedRoute: ActivatedRoute) { }

    sidebarOpen: boolean = false;
    public sidebarStateChange() {
      this.sidebarOpen = !this.sidebarOpen;
    }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      let id = params['id'];

      this.enquiryservice.getOne(id)
        .subscribe(
          response => {
            this.enquiry = response.data;
          });
    });
  }

}
