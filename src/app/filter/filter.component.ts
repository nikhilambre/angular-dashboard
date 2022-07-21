import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ToastrService } from './../services/toastr.service';
import { NotFoundError } from './../shared/errorlibrary/not-found-error';
import { AppError } from './../shared/errorlibrary/app-error';
import { FilterService, Filter } from './filter.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  providers: [
    ToastrService,
    FilterService
  ]
})
export class FilterComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  filter: Filter[];
  process: boolean = false;
  
  pageHeaders: any[] = [{
    header : "Filter",
    subHeader : "Filter List",
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
    this.filterservice.getAll()
      .subscribe(
        response => {
          this.filter = response.data;
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
      this.filterservice.delete(filter.id)
      .subscribe(
        response => {
          this.process = false;
          let index = this.filter.indexOf(filter);
          this.filter.splice(index, 1);
          this.toastrservice.showInfo('Filter', 'Deleted');
        }, 
        (error: AppError) => {
          this.process = false;
          this.toastrservice.showError(error.originalError.statusText);
        });
    }

  }

}
