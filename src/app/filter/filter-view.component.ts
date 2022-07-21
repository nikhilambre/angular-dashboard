import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Filter, FilterService } from './filter.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-filter-view',
  templateUrl: './filter-view.component.html',
  providers: [
    FilterService
  ]
})
export class FilterViewComponent implements OnInit {

  filter: Filter[];
  pageHeaders: any[] = [{
    header : "Filter",
    subHeader : "Filter View",
    activePage : "Filters",
  }];
  
  constructor(
    private filterservice: FilterService, 
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

}
