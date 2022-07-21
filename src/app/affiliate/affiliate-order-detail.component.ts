import { AppError } from './../shared/errorlibrary/app-error';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Params, ActivatedRoute } from '@angular/router';
import { ToastrService } from './../services/toastr.service';
import { AffiliateLeadService, Affiliatelead } from './affiliate-lead.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-affiliate-order-detail',
  templateUrl: './affiliate-order-detail.component.html',
  providers: [
    ToastrService,
    AffiliateLeadService
  ]
})
export class AffiliateOrderDetailComponent implements OnInit {

  affiliatelead: Affiliatelead[];
  process: boolean = false;
  
  pageHeaders: any[] = [{
    header : "Affiliate Leads",
    subHeader : "Affiliate Leads",
    activePage : "Affiliate",
  }];
  
  constructor(
    private affiliateleadservice: AffiliateLeadService, 
    private activatedRoute: ActivatedRoute,
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
    this.activatedRoute.params.subscribe((params: Params) => {
      let id = params['id'];

      this.affiliateleadservice.getOne(id)
        .subscribe(
          response => {
            this.affiliatelead = response.data;
          });
    });
  }

  onUpdate(form: HTMLInputElement) {
    this.process = true;
    this.affiliateleadservice.update(form)
      .subscribe(
        response => {
          this.process = false;
          this.toastrservice.showSuccess('Affiliate Lead', 'Updated');
        }, 
        (error: AppError) => {
          this.process = false;
          this.toastrservice.showError(error.originalError.statusText);
        });
  }

}
