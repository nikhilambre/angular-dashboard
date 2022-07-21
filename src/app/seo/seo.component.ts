import { NotFoundError } from './../shared/errorlibrary/not-found-error';
import { AppError } from './../shared/errorlibrary/app-error';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ToastrService } from './../services/toastr.service';
import { SeoService, Seo } from './seo.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-seo',
  templateUrl: './seo.component.html',
  providers: [
    ToastrService,
    SeoService
  ]
})
export class SeoComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  seo: Seo[];
  process: boolean = false;

  pageHeaders: any[] = [{
    header: "SEO",
    subHeader: "Seo List",
    activePage: "Site Management",
  }];

  constructor(
    private seoservice: SeoService,
    private toastrservice: ToastrService,
    public toastr: ToastsManager,
    vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.seoservice.getAll()
      .subscribe(
        response => {
          this.seo = response.data;
          this.dtTrigger.next();
        });
  }
  
  sidebarOpen: boolean = false;
  public sidebarStateChange() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  onDelete(form) {
    var result = confirm("Sure you Want to Delete?");
    if (result) {

      this.process = true;
      this.seoservice.delete(form.id)
        .subscribe(
          response => {
            this.process = false;
            let index = this.seo.indexOf(form);
            this.seo.splice(index, 1);
            this.toastrservice.showInfo('Seo', 'Deleted');
          },
          (error: AppError) => {
            this.process = false;
            this.toastrservice.showError(error.originalError.statusText);
          });
    }
  }

}
