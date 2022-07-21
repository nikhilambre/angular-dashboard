import { AppError } from './../shared/errorlibrary/app-error';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ToastrService } from './../services/toastr.service';
import { AffiliateLeadService, Affiliatelead } from './affiliate-lead.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-affiliate-order-list',
  templateUrl: './affiliate-order-list.component.html',
  providers: [
    ToastrService,
    AffiliateLeadService
  ]
})
export class AffiliateOrderListComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  affiliatelead: Affiliatelead[];
  process: boolean = false;
  
  pageHeaders: any[] = [{
    header : "Affiliate Lead",
    subHeader : "Affiliate Lead List",
    activePage : "Affiliate Leads",
  }];

  constructor(
    private affiliateleadservice: AffiliateLeadService,
    private toastrservice: ToastrService,
    public toastr: ToastsManager, 
    vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  sidebarOpen: boolean = false;
  public sidebarStateChange() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  ngOnInit() {
    this.affiliateleadservice.getAll()
      .subscribe(
        response => {
          this.affiliatelead = response.data;
          this.dtTrigger.next();
        }, 
        (error: AppError) => {
          this.toastrservice.showError(error.originalError.statusText);
        });
  }

}
