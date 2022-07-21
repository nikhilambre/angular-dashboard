import { ToastrService } from './../services/toastr.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ActivatedRoute, Params } from '@angular/router';
import { Filter, FilterService } from './filter.service';
import { BadInput } from './../shared/errorlibrary/bad-input';
import { AppError } from './../shared/errorlibrary/app-error';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-filter-edit',
  templateUrl: './filter-edit.component.html',
  providers: [
    ToastrService,
    FilterService
  ]
})
export class FilterEditComponent implements OnInit {

  filter: Filter[];
  process: boolean = false;
  
  pageHeaders: any[] = [{
    header : "Filter",
    subHeader : "Filter Edit",
    activePage : "Filters",
  }];

  constructor(
    private filterservice: FilterService,
    private toastrservice: ToastrService,
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

      this.filterservice.getOne(id)
        .subscribe(
          response => {
            this.filter = response.data;
          });
    });
  }

  onUpdate(form: HTMLInputElement) {
    this.process = true;
    this.filterservice.update(form)
      .subscribe(
        response => {
          this.process = false;
          this.toastrservice.showSuccess('Filter', 'Updated');
        }, 
        (error: AppError) => {
          this.process = false;
          this.toastrservice.showError(error.originalError.statusText);
        });
  }

}
