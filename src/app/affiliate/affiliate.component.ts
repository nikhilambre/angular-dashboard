import { AppError } from './../shared/errorlibrary/app-error';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ToastrService } from './../services/toastr.service';
import { AffiliateService, Affiliate } from './affiliate.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-affiliate',
  templateUrl: './affiliate.component.html',
  providers: [
    ToastrService,
    AffiliateService
  ]
})
export class AffiliateComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  affiliate: Affiliate[];
  process: boolean = false;
  
  pageHeaders: any[] = [{
    header : "Affiliate",
    subHeader : "Affiliate List",
    activePage : "Affiliates",
  }];

  constructor(
    private affiliateservice: AffiliateService,
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
    this.affiliateservice.getAll()
      .subscribe(
        response => {
          this.affiliate = response.data;
          this.dtTrigger.next();
        }, 
        (error: AppError) => {
          this.toastrservice.showError(error.originalError.statusText);
        });
  }

  onDelete(filter) {
    var result = confirm("Sure you Want to Delete?");
    if (result) {
      
      this.process = true;
      this.affiliateservice.delete(filter.id)
      .subscribe(
        response => {
          this.process = false;
          let index = this.affiliate.indexOf(filter);
          this.affiliate.splice(index, 1);
          this.toastrservice.showInfo('Affiliate', 'Deleted');
        }, 
        (error: AppError) => {
          this.process = false;
          this.toastrservice.showError(error.originalError.statusText);
        });
    }

  }

}
