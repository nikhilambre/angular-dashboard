import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ToastrService } from './../services/toastr.service';
import { BadInput } from './../shared/errorlibrary/bad-input';
import { AppError } from './../shared/errorlibrary/app-error';
import { FilterService, Filter } from './filter.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-filter-create',
  templateUrl: './filter-create.component.html',
  providers: [
    ToastrService,
    FilterService
  ]
})
export class FilterCreateComponent implements OnInit {

  defaultStatus = 'ACTIVE';
  filter: Filter[] = [];
  process: boolean = false;

  pageHeaders: any[] = [{
    header : "Filter",
    subHeader : "Filter Create",
    activePage : "Filters",
  }];

  constructor(
    private filterservice: FilterService,
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
  }

  onCreate(form: HTMLInputElement) {
    this.process = true;
    this.filterservice.create(form)
      .subscribe(
        response => {
          this.process = false;
          this.toastrservice.showSuccess('Filter', 'Created');
        }, 
        (error: AppError) => {
          this.process = false;
          this.toastrservice.showError(error.originalError.statusText);
        });
  }

}
