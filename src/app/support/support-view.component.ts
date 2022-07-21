import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ActivatedRoute, Params } from '@angular/router';
import { SupportService, Support } from './support.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-support-view',
  templateUrl: './support-view.component.html',
  providers: [
    SupportService
  ]
})
export class SupportViewComponent implements OnInit {

  support: Support[];
  process: boolean = false;

  pageHeaders: any[] = [{
    header : "Support",
    subHeader : "Support View",
    activePage : "Site Management",
  }];
  
  constructor(
    private supportservice: SupportService, 
    private activatedRoute: ActivatedRoute,
    public toastr: ToastsManager, 
    vcr: ViewContainerRef) { 
      this.toastr.setRootViewContainerRef(vcr);
    }

    sidebarOpen: boolean = false;
    public sidebarStateChange() {
      this.sidebarOpen = !this.sidebarOpen;
    }

    ngOnInit() {
      this.activatedRoute.params.subscribe((params: Params) => {
        let id = params['id'];
  
        this.supportservice.getOne(id)
          .subscribe(
            response => {
              this.support = response.data;
            });
      });
    }

}
