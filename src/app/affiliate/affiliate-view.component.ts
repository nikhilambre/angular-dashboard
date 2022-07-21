import { AppError } from './../shared/errorlibrary/app-error';
import { ToastrService } from './../services/toastr.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ActivatedRoute, Params } from '@angular/router';
import { AffiliateService, Affiliate } from './affiliate.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-affiliate-view',
  templateUrl: './affiliate-view.component.html',
  providers: [
    ToastrService,
    AffiliateService
  ]
})
export class AffiliateViewComponent implements OnInit {

  affiliate: Affiliate[];
  process: boolean = false;

  pageHeaders: any[] = [{
    header : "Affiliate",
    subHeader : "Affiliate View",
    activePage : "Affiliate",
  }];
  
  constructor(
    private affiliateservice: AffiliateService, 
    private activatedRoute: ActivatedRoute,
    public toastr: ToastsManager, 
    private toastrservice: ToastrService,
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

      this.affiliateservice.getOne(id)
        .subscribe(
          response => {
            this.affiliate = response.data;
          });
    });
  }

  onUpdate(form: HTMLInputElement) {
    this.process = true;
    this.affiliateservice.update(form)
      .subscribe(
        response => {
          this.process = false;
          this.toastrservice.showSuccess('Affiliate', 'Updated');
        }, 
        (error: AppError) => {
          this.process = false;
          this.toastrservice.showError(error.originalError.statusText);
        });
  }
}
